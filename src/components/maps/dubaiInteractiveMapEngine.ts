import type maplibregl from "maplibre-gl";
import {
  AREAS,
  CARD_GRADIENTS,
  CONFIG,
  LANDMARK_TYPES,
  LANDMARKS,
  LM_ICONS,
  PROJECTS,
  type DubaiMapProject,
} from "./dubaiInteractiveMapData";

export type DubaiMapRefs = {
  mapDiv: HTMLDivElement;
  cloudsHost: HTMLDivElement;
  loader: HTMLDivElement;
  loadFill: HTMLDivElement;
  loadPct: HTMLDivElement;
  countNum: HTMLDivElement;
  countLbl: HTMLDivElement;
  filters: HTMLDivElement;
  legend: HTMLDivElement;
  compass: HTMLButtonElement;
  needle: SVGGElement;
  bearingRead: HTMLDivElement;
  zoomVal: HTMLDivElement;
  zoomIn: HTMLButtonElement;
  zoomOut: HTMLButtonElement;
  card: HTMLDivElement;
  cardMedia: HTMLDivElement;
  cardBadge: HTMLSpanElement;
  cardClose: HTMLButtonElement;
  cardTitle: HTMLHeadingElement;
  cardFloors: HTMLSpanElement;
  cardArea: HTMLSpanElement;
  cardDesc: HTMLParagraphElement;
  cardExplore: HTMLAnchorElement;
  prevBtn: HTMLButtonElement;
  nextBtn: HTMLButtonElement;
};

type MaplibreModule = typeof maplibregl;

/** Ports the reference "Prestige One Dubai Map" widget 1:1 (framing, camera
 * moves, marker/legend behaviour, preloader) but scoped to a React-owned
 * container instead of `document`, so multiple instances (or unmounting)
 * never fight over global ids/listeners. */
export function initDubaiMap(root: HTMLElement, refs: DubaiMapRefs, uid: string, gl: MaplibreModule): () => void {
  const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function buildStyle() {
    return {
      version: 8 as const,
      sources: {
        sat: {
          type: "raster" as const,
          tiles: [CONFIG.satelliteTiles],
          tileSize: 256,
          maxzoom: 19,
          attribution: "Imagery &copy; Esri, Maxar, Earthstar Geographics",
        },
        omt: {
          type: "vector" as const,
          url: CONFIG.vectorTilesUrl,
          attribution: "&copy; OpenMapTiles &copy; OpenStreetMap contributors",
        },
      },
      layers: [
        { id: "bg", type: "background" as const, paint: { "background-color": "#08243c" } },
        { id: "satellite", type: "raster" as const, source: "sat" },
        {
          id: "sea",
          type: "fill" as const,
          source: "omt",
          "source-layer": "water",
          paint: { "fill-color": CONFIG.seaColor, "fill-opacity": CONFIG.seaOpacity, "fill-antialias": true },
        },
        {
          id: "sea-glow",
          type: "fill" as const,
          source: "omt",
          "source-layer": "water",
          paint: { "fill-color": CONFIG.seaGlow, "fill-opacity": 0.12, "fill-antialias": true },
        },
      ],
    };
  }

  const map = new gl.Map({
    container: refs.mapDiv,
    style: buildStyle() as unknown as maplibregl.StyleSpecification,
    center: CONFIG.center,
    zoom: 9.3,
    pitch: CONFIG.overviewPitch,
    bearing: CONFIG.overviewBearing,
    attributionControl: false,
    antialias: true,
    dragRotate: true,
    pitchWithRotate: true,
    maxPitch: 80,
    keyboard: true,
  });
  map.touchZoomRotate.enableRotation();
  map.dragRotate.enable();
  map.touchPitch.enable();
  // Disable mouse-wheel zoom so scrolling the page over the map scrolls the
  // page instead of zooming the map — the on-screen +/- buttons (zoomInRef/
  // zoomOutRef below) still work since they call map.zoomIn()/zoomOut()
  // directly, independent of this interaction handler.
  map.scrollZoom.disable();
  map.addControl(new gl.ScaleControl({ maxWidth: 90, unit: "metric" }), "bottom-left");
  map.addControl(new gl.AttributionControl({ compact: true }), "bottom-right");

  // Keep MapLibre's canvas in sync whenever its container's box changes size —
  // in particular when the detail card opens/closes and CSS shrinks/restores
  // `refs.mapDiv`'s width (see openCard/closeCard below). Without this, the
  // canvas keeps its old dimensions and markers can end up rendered underneath
  // the now-narrower (or wider) visible area.
  const mapResizeObserver = new ResizeObserver(() => map.resize());
  mapResizeObserver.observe(refs.mapDiv);

  const state = {
    filter: "All",
    list: PROJECTS.slice(),
    index: 0,
    selected: null as number | null,
  };
  const pinMarkers: { project: DubaiMapProject; marker: maplibregl.Marker; el: HTMLDivElement }[] = [];
  const landmarkMarkers: { marker: maplibregl.Marker; el: HTMLDivElement }[] = [];
  const ringLabelMarkers: maplibregl.Marker[] = [];
  const cloudEls: HTMLDivElement[] = [];
  let seaPulseRaf = 0;
  let hudMoveHandler: (() => void) | undefined;
  let zoomHandler: (() => void) | undefined;
  let clickHandler: (() => void) | undefined;

  function spawnClouds() {
    const specs = [
      { w: 460, top: 8, dur: 130, delay: 0, op: 0.85 },
      { w: 300, top: 34, dur: 95, delay: -30, op: 0.72 },
      { w: 560, top: 58, dur: 165, delay: -70, op: 0.8 },
      { w: 360, top: 78, dur: 110, delay: -20, op: 0.68 },
    ];
    specs.forEach((s) => {
      const c = document.createElement("div");
      c.className = "po-dmap-cloud";
      c.style.width = `${s.w}px`;
      c.style.height = `${Math.round(s.w * 0.42)}px`;
      c.style.top = `${s.top}%`;
      c.style.opacity = String(s.op);
      c.style.animationDuration = `${s.dur}s`;
      c.style.animationDelay = `${s.delay}s`;
      c.style.filter = `url(#${uid}-cloud-filter)`;
      if (REDUCED_MOTION) c.style.left = `${8 + Math.random() * 74}%`;
      refs.cloudsHost.appendChild(c);
      cloudEls.push(c);
    });
  }

  function startSeaPulse() {
    if (!map.getLayer("sea-glow")) return;
    if (REDUCED_MOTION) {
      map.setPaintProperty("sea-glow", "fill-opacity", 0.14);
      return;
    }
    const start = performance.now();
    let last = 0;
    const loop = (now: number) => {
      seaPulseRaf = requestAnimationFrame(loop);
      if (now - last < 60) return;
      last = now;
      const t = (now - start) / 1000;
      const v = 0.1 + 0.1 * (0.5 + 0.5 * Math.sin(t * 0.8));
      map.setPaintProperty("sea-glow", "fill-opacity", v);
    };
    seaPulseRaf = requestAnimationFrame(loop);
  }

  function kmBetween(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
    const dLat = (a.lat - b.lat) * 110.574;
    const dLng = (a.lng - b.lng) * 111.32 * Math.cos(((a.lat + b.lat) / 2) * (Math.PI / 180));
    return Math.sqrt(dLat * dLat + dLng * dLng);
  }

  function densestCentre(radiusKm = 9): [number, number] {
    let sumLng = 0;
    let sumLat = 0;
    let sumW = 0;
    PROJECTS.forEach((p) => {
      let w = 0;
      PROJECTS.forEach((q) => {
        if (kmBetween(p, q) <= radiusKm) w++;
      });
      w *= w;
      sumLng += p.lng * w;
      sumLat += p.lat * w;
      sumW += w;
    });
    if (!sumW) return CONFIG.center;
    return [sumLng / sumW, sumLat / sumW];
  }

  function circlePoints(lng: number, lat: number, km: number, steps = 96) {
    const coords: [number, number][] = [];
    const latR = km / 110.574;
    const lngR = km / (111.32 * Math.cos((lat * Math.PI) / 180));
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * 2 * Math.PI;
      coords.push([lng + lngR * Math.cos(t), lat + latR * Math.sin(t)]);
    }
    return coords;
  }

  function pointOnRing(lng: number, lat: number, km: number, bearingDeg: number): [number, number] {
    const a = ((90 - bearingDeg) * Math.PI) / 180;
    const latR = km / 110.574;
    const lngR = km / (111.32 * Math.cos((lat * Math.PI) / 180));
    return [lng + lngR * Math.cos(a), lat + latR * Math.sin(a)];
  }

  function buildRings() {
    map.addSource("rings", { type: "geojson", data: { type: "FeatureCollection", features: [] } });
    map.addLayer({
      id: "rings-line",
      type: "line",
      source: "rings",
      paint: { "line-color": "#ffffff", "line-width": 2, "line-opacity": 0.85 },
    });
  }

  function clearRingLabels() {
    ringLabelMarkers.forEach((m) => m.remove());
    ringLabelMarkers.length = 0;
  }

  function showRings(p: DubaiMapProject) {
    const source = map.getSource("rings") as maplibregl.GeoJSONSource | undefined;
    if (!source) return;
    const features = CONFIG.ringsKm.map((km) => ({
      type: "Feature" as const,
      properties: { km },
      geometry: { type: "LineString" as const, coordinates: circlePoints(p.lng, p.lat, km) },
    }));
    source.setData({ type: "FeatureCollection", features });

    clearRingLabels();
    CONFIG.ringsKm.forEach((km) => {
      [315, 135].forEach((bearing) => {
        const el = document.createElement("div");
        el.className = "po-dmap-ringlbl";
        el.textContent = `${km} KM`;
        const marker = new gl.Marker({ element: el, anchor: "center" })
          .setLngLat(pointOnRing(p.lng, p.lat, km, bearing))
          .addTo(map);
        ringLabelMarkers.push(marker);
      });
    });
  }

  function hideRings() {
    const source = map.getSource("rings") as maplibregl.GeoJSONSource | undefined;
    source?.setData({ type: "FeatureCollection", features: [] });
    clearRingLabels();
  }

  function closeAllLandmarks() {
    landmarkMarkers.forEach((lm) => lm.el.classList.remove("po-dmap-lmark--open"));
  }

  function buildLandmarkMarkers() {
    LANDMARKS.forEach((l) => {
      const t = LANDMARK_TYPES[l.type] || LANDMARK_TYPES.icon;
      const glyph = LM_ICONS[l.icon] || LM_ICONS.build;
      const el = document.createElement("div");
      el.className = "po-dmap-lmark";
      el.innerHTML =
        '<span class="po-dmap-lmline"></span>' +
        `<span class="po-dmap-lmname">${l.name}</span>` +
        `<span class="po-dmap-lmdisc" style="border-color:${t.color}">` +
        `<svg viewBox="0 0 24 24" fill="none" stroke="${t.color}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">${glyph}</svg>` +
        "</span>" +
        `<span class="po-dmap-lmdot" style="background:${t.color}"></span>`;
      el.title = `${t.label}: ${l.name}`;

      el.querySelector(".po-dmap-lmdisc")?.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        const wasOpen = el.classList.contains("po-dmap-lmark--open");
        closeAllLandmarks();
        if (!wasOpen) el.classList.add("po-dmap-lmark--open");
      });

      const marker = new gl.Marker({ element: el, anchor: "center" }).setLngLat([l.lng, l.lat]).addTo(map);
      landmarkMarkers.push({ marker, el });
    });
  }

  function updateLandmarkVisibility() {
    const on = map.getZoom() < 15.5;
    landmarkMarkers.forEach((lm) => {
      lm.el.style.opacity = on ? "1" : "0";
      lm.el.style.pointerEvents = "none";
      if (!on) lm.el.classList.remove("po-dmap-lmark--open");
    });
  }

  function buildLegend() {
    Object.keys(LANDMARK_TYPES).forEach((key) => {
      const t = LANDMARK_TYPES[key];
      const row = document.createElement("span");
      row.className = "po-dmap-legrow";
      row.innerHTML = `<span class="po-dmap-legdot" style="background:${t.color}"></span>${t.label}`;
      refs.legend.appendChild(row);
    });
  }

  function buildPinMarkers() {
    PROJECTS.forEach((p) => {
      const el = document.createElement("div");
      el.className = "po-dmap-pin";
      el.innerHTML =
        '<div class="po-dmap-leader"></div>' +
        `<div class="po-dmap-plabel">${p.name}</div>` +
        '<div class="po-dmap-dot"></div>';

      const open = (ev: Event) => {
        ev.preventDefault();
        ev.stopPropagation();
        selectProject(p.id);
      };
      el.querySelector(".po-dmap-plabel")?.addEventListener("click", open);
      el.querySelector(".po-dmap-dot")?.addEventListener("click", open);

      const marker = new gl.Marker({ element: el, anchor: "center" }).setLngLat([p.lng, p.lat]).addTo(map);
      pinMarkers.push({ project: p, marker, el });
    });
  }

  function updateMarkerVisibility() {
    pinMarkers.forEach((pm) => {
      const on = state.filter === "All" ? true : pm.project.area === state.filter;
      pm.el.style.opacity = on ? "1" : "0";
      pm.el.style.pointerEvents = on ? "auto" : "none";
    });
  }

  function buildFilters() {
    const areas = ["All", ...Object.keys(AREAS)];
    areas.forEach((area) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = `po-dmap-chip${area === "All" ? " po-dmap-chip--active" : ""}`;
      chip.textContent = area;
      chip.dataset.area = area;
      chip.addEventListener("click", () => setFilter(area));
      refs.filters.appendChild(chip);
    });
  }

  function setFilter(area: string) {
    state.filter = area;
    refs.filters.querySelectorAll(".po-dmap-chip").forEach((c) => {
      c.classList.toggle("po-dmap-chip--active", (c as HTMLElement).dataset.area === area);
    });

    state.list = area === "All" ? PROJECTS.slice() : PROJECTS.filter((p) => p.area === area);

    closeCard();
    if (area === "All") {
      showOverview(false);
    } else {
      fitToProjects(state.list, { pitch: 45, bearing: CONFIG.overviewBearing, minZoom: 14 });
    }
    updateMarkerVisibility();
  }

  const NO_PADDING = { top: 0, right: 0, bottom: 0, left: 0 };

  function cardPadding() {
    if (window.innerWidth <= 820) {
      return { top: 30, right: 20, bottom: Math.min(Math.round(window.innerHeight * 0.5), 330), left: 20 };
    }
    // The map canvas itself now shrinks by the card's width (see
    // po-dmap-map--panel-open), so this only needs a little breathing room,
    // not the full card width — that would double-count the offset.
    return { top: 80, right: 60, bottom: 80, left: 60 };
  }

  function flyOrJump(opts: Record<string, unknown>) {
    if (REDUCED_MOTION) map.jumpTo(opts);
    else map.flyTo({ duration: 2600, curve: 1.5, essential: true, ...opts });
  }

  type FitOptions = {
    pitch?: number;
    bearing?: number;
    minZoom?: number;
    center?: [number, number];
    instant?: boolean;
  };

  function fitToProjects(list: DubaiMapProject[], o: FitOptions = {}) {
    if (!list.length) return;
    const pitch = o.pitch ?? 0;
    const bearing = o.bearing ?? 0;

    if (list.length === 1) {
      const p = list[0];
      const move = {
        center: [p.lng, p.lat] as [number, number],
        zoom: Math.max(o.minZoom || 15.2, 15.2),
        bearing,
        pitch,
        padding: NO_PADDING,
      };
      if (o.instant || REDUCED_MOTION) map.jumpTo(move);
      else map.flyTo({ duration: 2400, essential: true, ...move });
      return;
    }

    const b = new gl.LngLatBounds();
    list.forEach((p) => b.extend([p.lng, p.lat]));
    const camera = map.cameraForBounds(b, {
      padding: { top: 160, bottom: 130, left: 90, right: 90 },
      bearing,
      maxZoom: 15.2,
    });
    if (!camera) return;
    let zoom = camera.zoom ?? 12;
    if (o.minZoom && zoom < o.minZoom) zoom = o.minZoom;
    const centre = o.center || (camera.center as [number, number]);
    const move = { center: centre, zoom, bearing, pitch, padding: NO_PADDING };
    if (o.instant || REDUCED_MOTION) map.jumpTo(move);
    else map.flyTo({ duration: 2400, essential: true, ...move });
  }

  function showOverview(instant?: boolean) {
    fitToProjects(PROJECTS, {
      pitch: CONFIG.overviewPitch,
      bearing: CONFIG.overviewBearing,
      center: densestCentre(),
      minZoom: CONFIG.overviewMinZoom,
      instant: !!instant,
    });
  }

  function selectProject(id: number) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return;

    const inList = state.list.findIndex((x) => x.id === id);
    state.index = inList >= 0 ? inList : 0;
    if (inList < 0) state.list = PROJECTS.slice();

    state.selected = id;

    pinMarkers.forEach((pm) => pm.el.classList.toggle("po-dmap-pin--selected", pm.project.id === id));
    closeAllLandmarks();
    showRings(p);

    flyOrJump({
      center: [p.lng, p.lat],
      zoom: CONFIG.focusZoom,
      pitch: CONFIG.focusPitch,
      bearing: ((p.id * 41) % 90) - 45,
      padding: cardPadding(),
    });

    openCard(p);
  }

  function openCard(p: DubaiMapProject) {
    refs.cardTitle.textContent = p.name;
    refs.cardBadge.textContent = p.area;
    refs.cardArea.textContent = p.area;
    refs.cardFloors.textContent = String(p.floors);
    refs.cardDesc.textContent = p.desc;
    refs.cardExplore.setAttribute("href", p.url || "#");
    refs.cardMedia.style.backgroundImage = p.image
      ? `url("${p.image}")`
      : CARD_GRADIENTS[p.id % CARD_GRADIENTS.length];
    refs.card.classList.add("po-dmap-card--open");
    refs.card.setAttribute("aria-hidden", "false");
    // Shrink the map viewport to the left of the panel instead of letting the
    // panel merely sit on top of it, so a pin near the right edge is never
    // trapped, unclickable, underneath the opaque card (see ResizeObserver above).
    refs.mapDiv.classList.add("po-dmap-map--panel-open");
  }

  function closeCard() {
    refs.card.classList.remove("po-dmap-card--open");
    refs.card.setAttribute("aria-hidden", "true");
    refs.mapDiv.classList.remove("po-dmap-map--panel-open");
    state.selected = null;
    pinMarkers.forEach((pm) => pm.el.classList.remove("po-dmap-pin--selected"));
    hideRings();
    if (REDUCED_MOTION) map.setPadding(NO_PADDING);
    else map.easeTo({ padding: NO_PADDING, duration: 450 });
  }

  function step(dir: number) {
    if (!state.list.length) return;
    state.index = (state.index + dir + state.list.length) % state.list.length;
    selectProject(state.list[state.index].id);
  }

  const onCardClose = () => closeCard();
  const onPrev = () => step(-1);
  const onNext = () => step(1);
  refs.cardClose.addEventListener("click", onCardClose);
  refs.prevBtn.addEventListener("click", onPrev);
  refs.nextBtn.addEventListener("click", onNext);

  let baseZoom = 9.3;
  function updateHUD() {
    const bearing = ((map.getBearing() % 360) + 360) % 360;
    refs.needle.style.transform = `rotate(${-bearing}deg)`;
    refs.bearingRead.innerHTML = `N ${String(Math.round(bearing)).padStart(3, "0")}&deg;`;
    const mult = Math.pow(2, map.getZoom() - baseZoom);
    refs.zoomVal.innerHTML = `${mult < 10 ? mult.toFixed(1) : Math.round(mult)}&times;`;
  }
  hudMoveHandler = updateHUD;
  zoomHandler = () => {
    updateMarkerVisibility();
    updateLandmarkVisibility();
  };
  clickHandler = () => closeAllLandmarks();
  map.on("move", hudMoveHandler);
  map.on("zoom", zoomHandler);
  map.on("click", clickHandler);
  map.once("idle", () => {
    baseZoom = map.getZoom();
    updateHUD();
  });

  const onCompassClick = () => {
    const home = { bearing: CONFIG.overviewBearing, pitch: CONFIG.overviewPitch };
    if (REDUCED_MOTION) map.jumpTo(home);
    else map.easeTo({ duration: 900, ...home });
  };
  const onZoomIn = () => map.zoomIn({ duration: 500 });
  const onZoomOut = () => map.zoomOut({ duration: 500 });
  refs.compass.addEventListener("click", onCompassClick);
  refs.zoomIn.addEventListener("click", onZoomIn);
  refs.zoomOut.addEventListener("click", onZoomOut);

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeCard();
    if (!refs.card.classList.contains("po-dmap-card--open")) return;
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };
  document.addEventListener("keydown", onKeydown);

  refs.countNum.textContent = String(PROJECTS.length);

  map.on("load", () => {
    spawnClouds();
    startSeaPulse();

    buildRings();
    buildLandmarkMarkers();
    buildLegend();
    buildPinMarkers();
    buildFilters();
    updateLandmarkVisibility();
    fitToProjects(PROJECTS, {
      pitch: CONFIG.overviewPitch,
      bearing: CONFIG.overviewBearing,
      center: densestCentre(),
      minZoom: CONFIG.overviewMinZoom,
      instant: true,
    });
    updateMarkerVisibility();
  });

  /* Preloader — mirrors the reference's simulated progress plus real load events. */
  let loaderDone = false;
  let loaderTarget = 12;
  let loaderFinished = false;
  let loaderShown = 0;
  let loaderRaf = 0;
  let loaderSafety = 0;

  function finishLoader() {
    loaderDone = true;
    loaderTarget = 100;
  }

  const onDataLoading = () => {
    if (loaderDone) return;
    loaderTarget = Math.min(loaderTarget + 5, 90);
  };
  const onData = () => {
    if (loaderDone) return;
    loaderTarget = Math.min(loaderTarget + 3, 96);
  };
  map.on("dataloading", onDataLoading);
  map.on("data", onData);
  map.on("load", finishLoader);
  map.once("idle", finishLoader);
  loaderSafety = window.setTimeout(finishLoader, 6000);

  function loaderTick() {
    loaderShown += (loaderTarget - loaderShown) * 0.15;
    const v = Math.min(Math.round(loaderShown), 100);
    refs.loadFill.style.width = `${v}%`;
    refs.loadPct.textContent = `${v}%`;
    if (loaderDone && v >= 100 && !loaderFinished) {
      loaderFinished = true;
      refs.loader.classList.add("po-dmap-loader--done");
      window.setTimeout(() => {
        refs.loader.style.display = "none";
      }, 800);
      return;
    }
    loaderRaf = requestAnimationFrame(loaderTick);
  }
  loaderRaf = requestAnimationFrame(loaderTick);

  return function cleanup() {
    mapResizeObserver.disconnect();
    document.removeEventListener("keydown", onKeydown);
    refs.cardClose.removeEventListener("click", onCardClose);
    refs.prevBtn.removeEventListener("click", onPrev);
    refs.nextBtn.removeEventListener("click", onNext);
    refs.compass.removeEventListener("click", onCompassClick);
    refs.zoomIn.removeEventListener("click", onZoomIn);
    refs.zoomOut.removeEventListener("click", onZoomOut);

    if (seaPulseRaf) cancelAnimationFrame(seaPulseRaf);
    if (loaderRaf) cancelAnimationFrame(loaderRaf);
    window.clearTimeout(loaderSafety);

    clearRingLabels();
    pinMarkers.forEach((pm) => pm.marker.remove());
    landmarkMarkers.forEach((lm) => lm.marker.remove());
    cloudEls.forEach((el) => el.remove());

    map.off("dataloading", onDataLoading);
    map.off("data", onData);
    if (hudMoveHandler) map.off("move", hudMoveHandler);
    if (zoomHandler) map.off("zoom", zoomHandler);
    if (clickHandler) map.off("click", clickHandler);

    map.remove();
    void root;
  };
}
