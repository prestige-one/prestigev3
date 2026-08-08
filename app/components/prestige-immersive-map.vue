<template>
  <div ref="rootRef" class="po-dmap-root">
    <div class="po-dmap-app">
      <div ref="mapRef" class="po-dmap-map" :class="{ 'po-dmap-map--panel-open': cardOpen }"></div>
      <div class="po-dmap-vignette" aria-hidden="true"></div>
      <div class="po-dmap-clouds" aria-hidden="true">
        <span v-for="cloud in clouds" :key="cloud.top" class="po-dmap-cloud" :style="cloud"></span>
      </div>

      <header class="po-dmap-topbar">
        <div class="po-dmap-counter">
          <div class="po-dmap-counter-num">{{ DUBAI_MAP_PROJECTS.length }}</div>
          <div class="po-dmap-counter-lbl">{{ $t('dp.map.developmentsLabel') }}</div>
        </div>
      </header>

      <nav class="po-dmap-filters" :aria-label="$t('dp.map.filterAria')">
        <button
          v-for="area in mapAreas"
          :key="area"
          type="button"
          class="po-dmap-chip"
          :class="{ 'po-dmap-chip--active': activeArea === area }"
          @click="setFilter(area)"
        >
          {{ area === 'All' ? $t('dp.map.filterAll') : area }}
        </button>
      </nav>

      <div class="po-dmap-legend" :aria-label="$t('dp.map.legendAria')">
        <span v-for="item in legend" :key="item.label" class="po-dmap-legrow">
          <span class="po-dmap-legdot" :style="{ background: item.color }"></span>
          {{ item.label }}
        </span>
      </div>

      <div class="po-dmap-instruments">
        <button type="button" class="po-dmap-compass" :title="$t('dp.map.resetBearing')" @click="resetBearing">
          <svg width="74" height="74" viewBox="0 0 74 74" aria-hidden="true">
            <circle cx="37" cy="37" r="30" fill="none" stroke="rgba(255,255,255,0.10)" />
            <g class="po-dmap-needle" :style="{ transform: `rotate(${-bearing}deg)` }">
              <path d="M37 14 L42 39 L37 34 L32 39 Z" fill="#f6f2ea" />
              <path d="M37 60 L42 35 L37 40 L32 35 Z" fill="rgba(255,255,255,0.35)" />
            </g>
            <text x="37" y="12" text-anchor="middle" fill="#9aa3b2" font-size="8">N</text>
          </svg>
          <span class="po-dmap-readout">N {{ String(Math.round(bearing)).padStart(3, "0") }}&deg;</span>
        </button>

        <div class="po-dmap-zoombox">
          <button type="button" class="po-dmap-zbtn" :aria-label="$t('dp.map.zoomOut')" @click="zoomOut">&minus;</button>
          <span class="po-dmap-zval">{{ zoomMultiple }}</span>
          <button type="button" class="po-dmap-zbtn" :aria-label="$t('dp.map.zoomIn')" @click="zoomIn">+</button>
        </div>
      </div>

      <aside class="po-dmap-card" :class="{ 'po-dmap-card--open': cardOpen }" :aria-hidden="!cardOpen">
        <div
          class="po-dmap-card-media"
          :style="selectedProject ? { backgroundImage: `url(${selectedProject.image})` } : undefined"
        >
          <span class="po-dmap-card-badge">{{ selectedProject?.area || $t('dp.map.areaFallback') }}</span>
          <button type="button" class="po-dmap-card-close" :aria-label="$t('dp.map.closeAria')" @click="closeCard">&times;</button>
        </div>

        <div class="po-dmap-card-body">
          <h2 class="po-dmap-card-title">{{ selectedProject?.name || $t('dp.map.projectFallback') }}</h2>
          <div class="po-dmap-card-meta">
            <div class="po-dmap-m">
              <span class="po-dmap-mv">{{ selectedProject?.floors || 0 }}</span>
              <span class="po-dmap-ml">{{ $t('dp.map.floorsLabel') }}</span>
            </div>
            <div class="po-dmap-m po-dmap-mwide">
              <span class="po-dmap-mv po-dmap-mv-text">{{ selectedProject?.area || $t('dp.map.areaFallback') }}</span>
              <span class="po-dmap-ml">{{ $t('dp.map.districtLabel') }}</span>
            </div>
          </div>
          <p class="po-dmap-card-desc">{{ selectedProject?.desc }}</p>
        </div>

        <div class="po-dmap-card-foot">
          <NuxtLink class="po-dmap-explore" :to="selectedProject?.url || '#'">{{ $t('dp.map.exploreMore') }}</NuxtLink>
          <div class="po-dmap-card-nav">
            <button type="button" class="po-dmap-navbtn" :aria-label="$t('dp.map.prevAria')" @click="stepProject(-1)">&#8249;</button>
            <button type="button" class="po-dmap-navbtn" :aria-label="$t('dp.map.nextAria')" @click="stepProject(1)">&#8250;</button>
          </div>
        </div>
      </aside>

      <div v-show="loaderVisible" class="po-dmap-loader" :class="{ 'po-dmap-loader--done': loaderDone }">
        <div class="po-dmap-loader-brand">
          <div class="po-dmap-brand-mark">Prestige One</div>
          <div class="po-dmap-brand-sub">{{ $t('dp.map.loaderSubtitle') }}</div>
        </div>
        <div class="po-dmap-load-track"><span class="po-dmap-load-fill" :style="{ width: `${loaderProgress}%` }"></span></div>
        <div class="po-dmap-load-pct">{{ loaderProgress }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Map component styling. These are static CSS imports handled by Vite at
// build time (extracted, never executed on the server) so they are
// SSR-safe. The maplibre-gl JS itself is only imported dynamically inside
// onMounted below, never at the top level, so it never runs on the server.
import "maplibre-gl/dist/maplibre-gl.css";
import "~/assets/css/dubai-interactive-map.css";
import type { Map as MapLibreMap, Marker } from "maplibre-gl";
import {
  DUBAI_MAP_CONFIG,
  DUBAI_MAP_LANDMARKS,
  DUBAI_MAP_LANDMARK_TYPES,
  DUBAI_MAP_PROJECTS,
  type DubaiMapProject,
} from "~/data/dubai-interactive-map-data";

const rootRef = ref<HTMLElement | null>(null);
const mapRef = ref<HTMLDivElement | null>(null);
const activeArea = ref("All");
const selectedProject = ref<DubaiMapProject | null>(null);
const cardOpen = computed(() => selectedProject.value !== null);
const bearing = ref(0);
const zoom = ref(9.3);
const baseZoom = ref(9.3);
const loaderProgress = ref(5);
const loaderDone = ref(false);
const loaderVisible = ref(true);

const mapAreas = ["All", ...new Set(DUBAI_MAP_PROJECTS.map((project) => project.area))];
const legend = Object.values(DUBAI_MAP_LANDMARK_TYPES);
const clouds = [
  { width: "460px", height: "193px", top: "8%", opacity: "0.78", animationDuration: "130s" },
  { width: "300px", height: "126px", top: "34%", opacity: "0.66", animationDuration: "95s", animationDelay: "-30s" },
  { width: "560px", height: "235px", top: "58%", opacity: "0.72", animationDuration: "165s", animationDelay: "-70s" },
  { width: "360px", height: "151px", top: "78%", opacity: "0.62", animationDuration: "110s", animationDelay: "-20s" },
];

const zoomMultiple = computed(() => {
  const multiple = Math.pow(2, zoom.value - baseZoom.value);
  return `${multiple < 10 ? multiple.toFixed(1) : Math.round(multiple)}×`;
});

let map: MapLibreMap | null = null;
let resizeObserver: ResizeObserver | null = null;
let projectMarkers: Array<{ project: DubaiMapProject; marker: Marker; element: HTMLDivElement }> = [];
let landmarkMarkers: Array<{ marker: Marker; element: HTMLDivElement }> = [];
let ringMarkers: Marker[] = [];
let filteredProjects = DUBAI_MAP_PROJECTS.slice();
let selectedIndex = 0;
let loaderTimer = 0;
let loaderHideTimer = 0;
let cancelled = false;
let reducedMotion = false;

function circlePoints(lng: number, lat: number, km: number, steps = 96): [number, number][] {
  const points: [number, number][] = [];
  const latRadius = km / 110.574;
  const lngRadius = km / (111.32 * Math.cos((lat * Math.PI) / 180));
  for (let index = 0; index <= steps; index++) {
    const angle = (index / steps) * Math.PI * 2;
    points.push([lng + lngRadius * Math.cos(angle), lat + latRadius * Math.sin(angle)]);
  }
  return points;
}

function ringPoint(lng: number, lat: number, km: number, bearingDegrees: number): [number, number] {
  const angle = ((90 - bearingDegrees) * Math.PI) / 180;
  const latRadius = km / 110.574;
  const lngRadius = km / (111.32 * Math.cos((lat * Math.PI) / 180));
  return [lng + lngRadius * Math.cos(angle), lat + latRadius * Math.sin(angle)];
}

function clearRings() {
  if (!map) return;
  const source = map.getSource("project-rings") as import("maplibre-gl").GeoJSONSource | undefined;
  source?.setData({ type: "FeatureCollection", features: [] });
  ringMarkers.forEach((marker) => marker.remove());
  ringMarkers = [];
}

function showRings(project: DubaiMapProject) {
  if (!map) return;
  const source = map.getSource("project-rings") as import("maplibre-gl").GeoJSONSource | undefined;
  source?.setData({
    type: "FeatureCollection",
    features: DUBAI_MAP_CONFIG.ringsKm.map((km) => ({
      type: "Feature",
      properties: { km },
      geometry: { type: "LineString", coordinates: circlePoints(project.lng, project.lat, km) },
    })),
  });

  clearRingLabels();
  void import("maplibre-gl").then(({ Marker: MapMarker }) => {
    if (!map) return;
    DUBAI_MAP_CONFIG.ringsKm.forEach((km) => {
      [315, 135].forEach((direction) => {
        const label = document.createElement("span");
        label.className = "po-dmap-ringlbl";
        label.textContent = `${km} KM`;
        ringMarkers.push(new MapMarker({ element: label }).setLngLat(ringPoint(project.lng, project.lat, km, direction)).addTo(map!));
      });
    });
  });
}

function clearRingLabels() {
  ringMarkers.forEach((marker) => marker.remove());
  ringMarkers = [];
}

function fitProjects(projects: DubaiMapProject[], instant = false) {
  if (!map || !projects.length) return;
  import("maplibre-gl").then(({ LngLatBounds }) => {
    if (!map) return;
    const bounds = new LngLatBounds();
    projects.forEach((project) => bounds.extend([project.lng, project.lat]));
    const camera = map.cameraForBounds(bounds, {
      padding: { top: 150, right: 90, bottom: 110, left: 90 },
      maxZoom: 15.2,
    });
    if (!camera) return;
    const options = {
      center: camera.center,
      zoom: Math.max(camera.zoom ?? DUBAI_MAP_CONFIG.overviewMinZoom, DUBAI_MAP_CONFIG.overviewMinZoom),
      bearing: DUBAI_MAP_CONFIG.overviewBearing,
      pitch: DUBAI_MAP_CONFIG.overviewPitch,
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
    };
    if (instant || reducedMotion) map.jumpTo(options);
    else map.flyTo({ ...options, duration: 2200, essential: true });
  });
}

function selectProject(project: DubaiMapProject) {
  if (!map) return;
  selectedProject.value = project;
  selectedIndex = Math.max(0, filteredProjects.findIndex((item) => item.id === project.id));
  projectMarkers.forEach(({ project: item, element }) => element.classList.toggle("po-dmap-pin--selected", item.id === project.id));
  showRings(project);
  const padding = window.innerWidth <= 820
    ? { top: 30, right: 20, bottom: Math.min(Math.round(window.innerHeight * 0.5), 330), left: 20 }
    : { top: 80, right: 60, bottom: 80, left: 60 };
  const options = {
    center: [project.lng, project.lat] as [number, number],
    zoom: DUBAI_MAP_CONFIG.focusZoom,
    pitch: DUBAI_MAP_CONFIG.focusPitch,
    bearing: ((project.id * 41) % 90) - 45,
    padding,
  };
  if (reducedMotion) map.jumpTo(options);
  else map.flyTo({ ...options, duration: 2400, curve: 1.5, essential: true });
}

function closeCard() {
  selectedProject.value = null;
  projectMarkers.forEach(({ element }) => element.classList.remove("po-dmap-pin--selected"));
  clearRings();
  map?.easeTo({ padding: { top: 0, right: 0, bottom: 0, left: 0 }, duration: reducedMotion ? 0 : 400 });
}

function stepProject(direction: number) {
  if (!filteredProjects.length) return;
  selectedIndex = (selectedIndex + direction + filteredProjects.length) % filteredProjects.length;
  const next = filteredProjects[selectedIndex];
  if (next) selectProject(next);
}

function updateMarkerVisibility() {
  projectMarkers.forEach(({ project, element }) => {
    const visible = activeArea.value === "All" || project.area === activeArea.value;
    element.style.display = visible ? "block" : "none";
    element.style.pointerEvents = visible ? "auto" : "none";
  });
}

function setFilter(area: string) {
  activeArea.value = area;
  filteredProjects = area === "All" ? DUBAI_MAP_PROJECTS.slice() : DUBAI_MAP_PROJECTS.filter((project) => project.area === area);
  updateMarkerVisibility();
  if (selectedProject.value) closeCard();
  fitProjects(filteredProjects);
}

function zoomIn() {
  map?.zoomIn({ duration: 500 });
}

function zoomOut() {
  map?.zoomOut({ duration: 500 });
}

function resetBearing() {
  map?.easeTo({ bearing: 0, pitch: DUBAI_MAP_CONFIG.overviewPitch, duration: reducedMotion ? 0 : 900 });
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") closeCard();
  if (!cardOpen.value) return;
  if (event.key === "ArrowRight") stepProject(1);
  if (event.key === "ArrowLeft") stepProject(-1);
}

function finishLoader() {
  loaderProgress.value = 100;
  loaderDone.value = true;
  loaderHideTimer = window.setTimeout(() => {
    loaderVisible.value = false;
  }, 900);
}

function preloadProjectImages() {
  const sources = [...new Set(DUBAI_MAP_PROJECTS.map((project) => project.image))];
  return Promise.allSettled(
    sources.map((source) => new Promise<void>((resolve) => {
      const image = new Image();
      const timeout = window.setTimeout(resolve, 8000);
      const finish = () => {
        window.clearTimeout(timeout);
        resolve();
      };
      image.onload = finish;
      image.onerror = finish;
      image.src = source;
      if (image.complete) finish();
    })),
  );
}

onMounted(async () => {
  const projectImagesReady = preloadProjectImages();
  reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  await nextTick();
  if (!mapRef.value || cancelled) return;

  const maplibre = await import("maplibre-gl");
  if (cancelled || !mapRef.value) return;

  map = new maplibre.Map({
    container: mapRef.value,
    style: {
      version: 8,
      sources: {
        satellite: {
          type: "raster",
          tiles: [DUBAI_MAP_CONFIG.satelliteTiles],
          tileSize: 256,
          maxzoom: 19,
          attribution: "Imagery © Esri, Maxar, Earthstar Geographics",
        },
        vector: {
          type: "vector",
          url: DUBAI_MAP_CONFIG.vectorTilesUrl,
          attribution: "© OpenMapTiles © OpenStreetMap contributors",
        },
      },
      layers: [
        { id: "background", type: "background", paint: { "background-color": "#08243c" } },
        { id: "satellite", type: "raster", source: "satellite" },
        {
          id: "sea",
          type: "fill",
          source: "vector",
          "source-layer": "water",
          paint: { "fill-color": "#0f8fc4", "fill-opacity": 0.82, "fill-antialias": true },
        },
      ],
    },
    center: DUBAI_MAP_CONFIG.center,
    zoom: 9.3,
    pitch: DUBAI_MAP_CONFIG.overviewPitch,
    bearing: 0,
    attributionControl: false,
    antialias: true,
    dragRotate: true,
    pitchWithRotate: true,
    maxPitch: 80,
  });

  map.scrollZoom.disable();
  map.touchZoomRotate.enableRotation();
  map.dragRotate.enable();
  map.touchPitch.enable();
  map.addControl(new maplibre.ScaleControl({ maxWidth: 90, unit: "metric" }), "bottom-left");
  map.addControl(new maplibre.AttributionControl({ compact: true }), "bottom-right");

  resizeObserver = new ResizeObserver(() => map?.resize());
  resizeObserver.observe(mapRef.value);
  document.addEventListener("keydown", handleKeydown);

  loaderTimer = window.setInterval(() => {
    loaderProgress.value = Math.min(94, loaderProgress.value + Math.ceil(Math.random() * 4));
  }, 220);

  map.on("move", () => {
    if (!map) return;
    bearing.value = ((map.getBearing() % 360) + 360) % 360;
    zoom.value = map.getZoom();
  });

  map.on("load", async () => {
    if (!map) return;
    map.addSource("project-rings", { type: "geojson", data: { type: "FeatureCollection", features: [] } });
    map.addLayer({
      id: "project-rings-line",
      type: "line",
      source: "project-rings",
      paint: { "line-color": "#ffffff", "line-width": 2, "line-opacity": 0.82 },
    });

    projectMarkers = DUBAI_MAP_PROJECTS.map((project) => {
      const element = document.createElement("div");
      element.className = "po-dmap-pin";
      element.innerHTML = '<span class="po-dmap-leader"></span><button type="button" class="po-dmap-plabel"></button><span class="po-dmap-dot"></span>';
      const label = element.querySelector(".po-dmap-plabel") as HTMLButtonElement;
      label.textContent = project.name;
      const open = (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        selectProject(project);
      };
      label.addEventListener("click", open);
      element.querySelector(".po-dmap-dot")?.addEventListener("click", open);
      const marker = new maplibre.Marker({ element }).setLngLat([project.lng, project.lat]).addTo(map!);
      return { project, marker, element };
    });

    landmarkMarkers = DUBAI_MAP_LANDMARKS.map((landmark) => {
      const type = DUBAI_MAP_LANDMARK_TYPES[landmark.type];
      const element = document.createElement("div");
      element.className = "po-dmap-lmark";
      element.innerHTML = `<span class="po-dmap-lmline"></span><span class="po-dmap-lmname">${landmark.name}</span><button type="button" class="po-dmap-lmdisc" style="border-color:${type.color}" aria-label="${landmark.name}"><span style="background:${type.color}"></span></button><span class="po-dmap-lmdot" style="background:${type.color}"></span>`;
      const button = element.querySelector(".po-dmap-lmdisc");
      button?.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        element.classList.toggle("po-dmap-lmark--open");
      });
      const marker = new maplibre.Marker({ element }).setLngLat([landmark.lng, landmark.lat]).addTo(map!);
      return { marker, element };
    });

    updateMarkerVisibility();
    fitProjects(DUBAI_MAP_PROJECTS, true);
    window.clearInterval(loaderTimer);
    baseZoom.value = map?.getZoom() || 9.3;
    await projectImagesReady;
    if (cancelled) return;
    finishLoader();
  });

  window.setTimeout(() => {
    if (!loaderDone.value) finishLoader();
  }, 9000);
});

onBeforeUnmount(() => {
  cancelled = true;
  document.removeEventListener("keydown", handleKeydown);
  resizeObserver?.disconnect();
  window.clearInterval(loaderTimer);
  window.clearTimeout(loaderHideTimer);
  clearRingLabels();
  projectMarkers.forEach(({ marker }) => marker.remove());
  landmarkMarkers.forEach(({ marker }) => marker.remove());
  projectMarkers = [];
  landmarkMarkers = [];
  map?.remove();
  map = null;
});
</script>
