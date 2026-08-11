<template>
  <section class="po-loc-explorer" aria-labelledby="po-loc-explorer-title">
    <header class="po-loc-explorer__header">
      <div>
        <span class="po-loc-explorer__eyebrow">Interactive portfolio</span>
        <h2 id="po-loc-explorer-title">Find a Prestige address</h2>
      </div>

      <div class="po-loc-explorer__tools">
        <label class="po-loc-search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
          <span class="visually-hidden">Search project or location</span>
          <input v-model="search" type="search" placeholder="Search project or location">
          <button v-if="search" type="button" aria-label="Clear search" @click="search = ''">&times;</button>
        </label>
        <span class="po-loc-explorer__count">{{ filteredProjects.length }} / {{ projects.length }} projects</span>
      </div>
    </header>

    <div class="po-loc-explorer__workspace">
      <aside class="po-loc-sidebar" aria-label="Project locations">
        <div class="po-loc-sidebar__head">
          <span>Project directory</span>
          <button type="button" @click="resetView">Reset map</button>
        </div>

        <div v-if="filteredProjects.length" class="po-loc-sidebar__list">
          <project-locations-project-location-card
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
            :active="selectedProject?.id === project.id"
            @select="selectProject"
            @copy="copyProject"
          />
        </div>
        <div v-else class="po-loc-sidebar__empty">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
          <strong>No projects found</strong>
          <span>Try a project name or Dubai area.</span>
        </div>
      </aside>

      <div class="po-loc-map-shell">
        <div ref="mapElement" class="po-loc-map" aria-label="Interactive map of Prestige project locations" />
        <div class="po-loc-map__grid" aria-hidden="true" />
        <div v-if="!mapReady" class="po-loc-map__loading" role="status">
          <span class="po-loc-map__spinner" />
          Loading project map
        </div>

        <div class="po-loc-map__legend" aria-label="Map legend">
          <span><i /> Prestige project</span>
          <span><i /> Selected</span>
        </div>

        <aside v-if="selectedProject" class="po-loc-detail" aria-live="polite">
          <button type="button" class="po-loc-detail__close" aria-label="Close project details" @click="clearSelection">&times;</button>
          <div class="po-loc-detail__image">
            <img :src="selectedProject.image" :alt="selectedProject.name">
            <span>{{ selectedProject.status }}</span>
          </div>
          <div class="po-loc-detail__body">
            <span class="po-loc-detail__type">{{ selectedProject.type }}</span>
            <h3>{{ selectedProject.name }}</h3>
            <p class="po-loc-detail__place">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/></svg>
              {{ selectedProject.location }}
            </p>
            <p class="po-loc-detail__summary">{{ selectedProject.summary }}</p>
            <span class="po-loc-detail__coords">
              {{ selectedProject.coordinates.lat.toFixed(6) }}, {{ selectedProject.coordinates.lng.toFixed(6) }}
            </span>
          </div>
          <div class="po-loc-detail__actions">
            <button type="button" @click="copyProject(selectedProject)">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>
              {{ copiedId === selectedProject.id ? 'Copied' : 'Copy location' }}
            </button>
            <a :href="selectedProject.mapsUrl" target="_blank" rel="noopener noreferrer">
              Open Maps
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>
            </a>
            <NuxtLink :to="selectedProject.detailsUrl">More info</NuxtLink>
          </div>
        </aside>
      </div>
    </div>

    <footer v-if="filteredProjects.length" class="po-loc-overview">
      <div class="po-loc-overview__title">
        <span>Locations overview</span>
        <small>Select a card to focus the map</small>
      </div>
      <div class="po-loc-overview__rail">
        <project-locations-project-location-card
          v-for="project in filteredProjects"
          :key="`overview-${project.id}`"
          :project="project"
          :active="selectedProject?.id === project.id"
          compact
          @select="selectProject"
        />
      </div>
    </footer>

    <Transition name="po-loc-toast">
      <div v-if="copiedId" class="po-loc-toast" role="status">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>
        Google Maps location copied
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import "maplibre-gl/dist/maplibre-gl.css";
import type { Map as MapLibreMap, Marker } from "maplibre-gl";
import {
  PROJECT_LOCATIONS,
  PROJECT_LOCATIONS_MAP,
  type ProjectLocation,
} from "~/data/project-locations";

const projects = PROJECT_LOCATIONS;
const mapElement = ref<HTMLDivElement | null>(null);
const search = ref("");
const selectedId = ref<string | null>(null);
const copiedId = ref<string | null>(null);
const mapReady = ref(false);

const filteredProjects = computed(() => {
  const query = search.value.trim().toLocaleLowerCase();
  if (!query) return projects;
  return projects.filter((project) =>
    [project.name, project.location, project.type, project.status]
      .some((value) => value.toLocaleLowerCase().includes(query)),
  );
});

const selectedProject = computed(() =>
  projects.find((project) => project.id === selectedId.value) ?? null,
);

let map: MapLibreMap | null = null;
let markers: Array<{ project: ProjectLocation; marker: Marker; element: HTMLDivElement }> = [];
let resizeObserver: ResizeObserver | null = null;
let copyTimer = 0;
let destroyed = false;

function updateMarkers() {
  const visibleIds = new Set(filteredProjects.value.map((project) => project.id));
  markers.forEach(({ project, element }) => {
    const visible = visibleIds.has(project.id);
    element.hidden = !visible;
    element.classList.toggle("po-loc-marker--active", selectedId.value === project.id);
  });
}

function fitProjects(items: ProjectLocation[], animate = true) {
  if (!map || !items.length) return;
  if (items.length === 1) {
    const project = items[0];
    if (!project) return;
    map.flyTo({
      center: [project.coordinates.lng, project.coordinates.lat],
      zoom: PROJECT_LOCATIONS_MAP.selectedZoom,
      duration: animate ? 1000 : 0,
      essential: true,
    });
    return;
  }

  const lngs = items.map((project) => project.coordinates.lng);
  const lats = items.map((project) => project.coordinates.lat);
  map.fitBounds(
    [
      [Math.min(...lngs), Math.min(...lats)],
      [Math.max(...lngs), Math.max(...lats)],
    ],
    {
      padding: window.innerWidth < 720
        ? { top: 90, right: 34, bottom: 90, left: 34 }
        : { top: 110, right: 110, bottom: 90, left: 90 },
      maxZoom: 12.6,
      duration: animate ? 900 : 0,
    },
  );
}

function selectProject(project: ProjectLocation) {
  selectedId.value = project.id;
  updateMarkers();
  map?.flyTo({
    center: [project.coordinates.lng, project.coordinates.lat],
    zoom: PROJECT_LOCATIONS_MAP.selectedZoom,
    duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1100,
    essential: true,
    padding: window.innerWidth > 900
      ? { top: 40, right: 360, bottom: 40, left: 40 }
      : { top: 40, right: 40, bottom: 220, left: 40 },
  });
}

function clearSelection() {
  selectedId.value = null;
  updateMarkers();
  fitProjects(filteredProjects.value);
}

function resetView() {
  search.value = "";
  selectedId.value = null;
  updateMarkers();
  fitProjects(projects);
}

async function copyProject(project: ProjectLocation) {
  try {
    await navigator.clipboard.writeText(project.mapsUrl);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = project.mapsUrl;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }

  window.clearTimeout(copyTimer);
  copiedId.value = project.id;
  copyTimer = window.setTimeout(() => {
    copiedId.value = null;
  }, 2200);
}

watch(filteredProjects, (items) => {
  if (selectedId.value && !items.some((project) => project.id === selectedId.value)) {
    selectedId.value = null;
  }
  updateMarkers();
  if (mapReady.value) fitProjects(items);
});

onMounted(async () => {
  await nextTick();
  if (!mapElement.value || destroyed) return;

  const maplibre = await import("maplibre-gl");
  if (!mapElement.value || destroyed) return;

  map = new maplibre.Map({
    container: mapElement.value,
    style: PROJECT_LOCATIONS_MAP.styleUrl,
    center: PROJECT_LOCATIONS_MAP.center,
    zoom: PROJECT_LOCATIONS_MAP.defaultZoom,
    attributionControl: false,
    maxPitch: 0,
  });
  map.scrollZoom.disable();
  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();
  map.addControl(new maplibre.NavigationControl({ showCompass: false }), "top-right");
  map.addControl(new maplibre.AttributionControl({ compact: true }), "bottom-right");

  resizeObserver = new ResizeObserver(() => map?.resize());
  resizeObserver.observe(mapElement.value);

  map.on("load", () => {
    if (!map || destroyed) return;
    markers = projects.map((project, index) => {
      const element = document.createElement("div");
      element.className = "po-loc-marker";

      const button = document.createElement("button");
      button.type = "button";
      button.className = "po-loc-marker__button";
      button.setAttribute("aria-label", `View ${project.name}`);
      const number = document.createElement("span");
      number.textContent = String(index + 1).padStart(2, "0");
      button.appendChild(number);
      button.addEventListener("click", () => selectProject(project));
      element.appendChild(button);

      const marker = new maplibre.Marker({ element, anchor: "bottom" })
        .setLngLat([project.coordinates.lng, project.coordinates.lat])
        .addTo(map!);
      return { project, marker, element };
    });

    mapReady.value = true;
    updateMarkers();
    fitProjects(projects, false);
  });
});

onBeforeUnmount(() => {
  destroyed = true;
  window.clearTimeout(copyTimer);
  resizeObserver?.disconnect();
  markers.forEach(({ marker }) => marker.remove());
  markers = [];
  map?.remove();
  map = null;
});
</script>

<style>
.po-loc-marker {
  position: relative;
  width: 38px;
  height: 48px;
}

.po-loc-marker[hidden] {
  display: none;
}

.po-loc-marker__button {
  position: relative;
  display: grid;
  width: 38px;
  height: 38px;
  padding: 0;
  font-family: inherit;
  font-size: 10px;
  font-weight: 700;
  color: #111820;
  cursor: pointer;
  background: #e3d2ae;
  border: 3px solid #f7f0e3;
  border-radius: 50% 50% 50% 10%;
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.5), 0 0 0 6px rgba(227, 210, 174, 0.18);
  place-items: center;
  transform: rotate(-45deg);
  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}

.po-loc-marker__button:hover,
.po-loc-marker--active .po-loc-marker__button {
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.58), 0 0 0 10px rgba(227, 210, 174, 0.24);
  transform: rotate(-45deg) scale(1.13);
}

.po-loc-marker__button {
  text-indent: 0;
}

.po-loc-marker__button > span {
  display: block;
  transform: rotate(45deg);
}
</style>

<style scoped>
.po-loc-explorer {
  --po-loc-bg: #080d16;
  --po-loc-panel: #0d1420;
  --po-loc-panel-soft: #111a28;
  --po-loc-line: rgba(255, 255, 255, 0.1);
  --po-loc-copy: rgba(255, 255, 255, 0.62);
  --po-loc-gold: #d3ba89;
  position: relative;
  overflow: hidden;
  color: #fff;
  background: var(--po-loc-bg);
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 22px;
  box-shadow: 0 32px 90px rgba(0, 0, 0, 0.36);
}

.po-loc-explorer__header {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  min-height: 110px;
  padding: 22px 26px;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.035), transparent);
  border-bottom: 1px solid var(--po-loc-line);
}

.po-loc-explorer__eyebrow,
.po-loc-overview__title > span {
  display: block;
  margin-bottom: 5px;
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--po-loc-gold);
}

.po-loc-explorer__header h2 {
  margin: 0;
  font-size: clamp(25px, 3vw, 38px);
  font-weight: 500;
  line-height: 1;
  color: #fff;
}

.po-loc-explorer__tools {
  display: flex;
  gap: 13px;
  align-items: center;
}

.po-loc-search {
  display: flex;
  width: min(360px, 38vw);
  min-height: 43px;
  gap: 10px;
  align-items: center;
  padding: 0 14px;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
}

.po-loc-search:focus-within {
  border-color: rgba(211, 186, 137, 0.75);
  box-shadow: 0 0 0 3px rgba(211, 186, 137, 0.09);
}

.po-loc-search svg,
.po-loc-sidebar__empty svg {
  width: 17px;
  height: 17px;
  flex: 0 0 auto;
  fill: none;
  stroke: rgba(255, 255, 255, 0.52);
  stroke-width: 1.7;
}

.po-loc-search input {
  width: 100%;
  min-width: 0;
  color: #fff;
  background: transparent;
  border: 0;
  outline: 0;
}

.po-loc-search input::placeholder {
  color: rgba(255, 255, 255, 0.38);
}

.po-loc-search > button {
  padding: 0;
  font-size: 20px;
  line-height: 1;
  color: var(--po-loc-copy);
  background: transparent;
  border: 0;
}

.po-loc-explorer__count {
  padding: 10px 13px;
  font-size: 10px;
  letter-spacing: 0.1em;
  white-space: nowrap;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.66);
  border: 1px solid var(--po-loc-line);
  border-radius: 9px;
}

.po-loc-explorer__workspace {
  display: grid;
  height: 610px;
  min-height: 610px;
  grid-template-columns: 330px minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
}

.po-loc-sidebar {
  position: relative;
  z-index: 3;
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
  background: #0a111c;
  border-right: 1px solid var(--po-loc-line);
}

.po-loc-sidebar__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 53px;
  padding: 0 15px;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.54);
  border-bottom: 1px solid var(--po-loc-line);
}

.po-loc-sidebar__head button {
  padding: 6px 9px;
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--po-loc-gold);
  background: transparent;
  border: 1px solid rgba(211, 186, 137, 0.28);
  border-radius: 6px;
}

.po-loc-sidebar__list {
  display: grid;
  gap: 9px;
  padding: 12px;
  overflow: auto;
  overscroll-behavior: contain;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.po-loc-sidebar__empty {
  display: grid;
  min-height: 250px;
  gap: 8px;
  align-content: center;
  justify-items: center;
  padding: 30px;
  text-align: center;
  color: var(--po-loc-copy);
}

.po-loc-sidebar__empty svg {
  width: 28px;
  height: 28px;
  margin-bottom: 4px;
}

.po-loc-sidebar__empty strong {
  font-size: 15px;
  color: #fff;
}

.po-loc-sidebar__empty span {
  font-size: 12px;
}

.po-loc-map-shell {
  position: relative;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  background: radial-gradient(circle at 70% 25%, #16354b, #07131f 64%);
}

.po-loc-map,
.po-loc-map__grid {
  position: absolute;
  inset: 0;
}

.po-loc-map {
  z-index: 1;
}

.po-loc-map :deep(canvas) {
  filter: saturate(0.72) brightness(0.78) contrast(1.15) hue-rotate(4deg);
}

.po-loc-map__grid {
  z-index: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 42px 42px;
}

.po-loc-map__loading {
  position: absolute;
  z-index: 2;
  inset: 0;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.62);
  pointer-events: none;
}

.po-loc-map__spinner {
  width: 21px;
  height: 21px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-top-color: var(--po-loc-gold);
  border-radius: 50%;
  animation: po-loc-spin 0.8s linear infinite;
}

@keyframes po-loc-spin {
  to { transform: rotate(360deg); }
}

.po-loc-map__legend {
  position: absolute;
  z-index: 3;
  right: 16px;
  bottom: 14px;
  display: flex;
  gap: 14px;
  padding: 9px 12px;
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.66);
  background: rgba(5, 10, 18, 0.76);
  border: 1px solid var(--po-loc-line);
  border-radius: 8px;
  backdrop-filter: blur(12px);
}

.po-loc-map__legend span {
  display: flex;
  gap: 6px;
  align-items: center;
}

.po-loc-map__legend i {
  width: 8px;
  height: 8px;
  background: var(--po-loc-gold);
  border-radius: 50%;
}

.po-loc-map__legend span:last-child i {
  background: #fff;
  box-shadow: 0 0 0 3px rgba(211, 186, 137, 0.3);
}

.po-loc-detail {
  position: absolute;
  z-index: 5;
  top: 20px;
  right: 20px;
  width: min(330px, calc(100% - 40px));
  overflow: hidden;
  background: rgba(7, 13, 22, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 15px;
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.54);
  backdrop-filter: blur(20px);
}

.po-loc-detail__close {
  position: absolute;
  z-index: 2;
  top: 10px;
  right: 10px;
  display: grid;
  width: 31px;
  height: 31px;
  padding: 0;
  font-size: 18px;
  color: #fff;
  background: rgba(5, 8, 13, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.26);
  border-radius: 50%;
  place-items: center;
}

.po-loc-detail__image {
  position: relative;
  height: 145px;
}

.po-loc-detail__image::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(180deg, rgba(5, 9, 15, 0.05), rgba(5, 9, 15, 0.82));
}

.po-loc-detail__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.po-loc-detail__image span {
  position: absolute;
  z-index: 1;
  bottom: 12px;
  left: 15px;
  padding: 5px 9px;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #c6f6dc;
  background: rgba(7, 97, 55, 0.84);
  border-radius: 30px;
}

.po-loc-detail__body {
  padding: 18px 20px 19px;
}

.po-loc-detail__type {
  display: block;
  margin-bottom: 7px;
  font-size: 8px;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  color: var(--po-loc-gold);
}

.po-loc-detail h3 {
  margin: 0 0 9px;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.15;
  color: #fff;
}

.po-loc-detail__place {
  display: flex;
  gap: 7px;
  align-items: center;
  margin-bottom: 14px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
}

.po-loc-detail__place svg,
.po-loc-detail__actions svg,
.po-loc-toast svg {
  width: 14px;
  height: 14px;
  flex: 0 0 auto;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
}

.po-loc-detail__summary {
  margin: 0 0 12px;
  font-size: 12px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.63);
}

.po-loc-detail__coords {
  font-family: monospace;
  font-size: 9px;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.36);
}

.po-loc-detail__actions {
  display: grid;
  grid-template-columns: 1.1fr 1fr 0.9fr;
  border-top: 1px solid var(--po-loc-line);
}

.po-loc-detail__actions > * {
  display: flex;
  min-height: 46px;
  gap: 6px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.76);
  background: transparent;
  border: 0;
}

.po-loc-detail__actions > * + * {
  border-left: 1px solid var(--po-loc-line);
}

.po-loc-detail__actions > *:hover {
  color: #10151c;
  background: var(--po-loc-gold);
}

.po-loc-overview {
  display: grid;
  grid-template-columns: 170px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
  padding: 15px;
  background: #0a111c;
  border-top: 1px solid var(--po-loc-line);
}

.po-loc-overview__title {
  padding-left: 7px;
}

.po-loc-overview__title small {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.42);
}

.po-loc-overview__rail {
  display: flex;
  gap: 9px;
  min-width: 0;
  padding-bottom: 3px;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.18) transparent;
}

.po-loc-toast {
  position: fixed;
  z-index: 10000;
  right: 24px;
  bottom: 24px;
  display: flex;
  gap: 9px;
  align-items: center;
  padding: 12px 16px;
  font-size: 11px;
  color: #0b1219;
  background: #e6dcc8;
  border-radius: 9px;
  box-shadow: 0 14px 42px rgba(0, 0, 0, 0.38);
}

.po-loc-toast-enter-active,
.po-loc-toast-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.po-loc-toast-enter-from,
.po-loc-toast-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.po-loc-map :deep(.maplibregl-ctrl-top-right) {
  top: 12px;
  right: 12px;
}

.po-loc-map :deep(.maplibregl-ctrl-group) {
  overflow: hidden;
  background: rgba(5, 10, 18, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 9px;
  box-shadow: none;
}

.po-loc-map :deep(.maplibregl-ctrl-group button) {
  filter: invert(1);
}

.po-loc-map :deep(.maplibregl-ctrl-attrib) {
  font-size: 9px;
  color: rgba(255, 255, 255, 0.55);
  background: rgba(5, 10, 18, 0.72);
}

.po-loc-map :deep(.maplibregl-ctrl-attrib a) {
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 1100px) {
  .po-loc-explorer__workspace {
    grid-template-columns: 290px minmax(0, 1fr);
  }

  .po-loc-overview {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 820px) {
  .po-loc-explorer__header {
    align-items: flex-start;
    flex-direction: column;
  }

  .po-loc-explorer__tools,
  .po-loc-search {
    width: 100%;
  }

  .po-loc-explorer__count {
    display: none;
  }

  .po-loc-explorer__workspace {
    height: auto;
    min-height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .po-loc-sidebar {
    order: 2;
    border-top: 1px solid var(--po-loc-line);
    border-right: 0;
  }

  .po-loc-sidebar__list {
    display: flex;
    overflow-x: auto;
  }

  .po-loc-sidebar__list :deep(.po-loc-card) {
    min-width: 270px;
  }

  .po-loc-map-shell {
    min-height: 570px;
  }

  .po-loc-overview {
    display: none;
  }
}

@media (max-width: 560px) {
  .po-loc-explorer {
    border-radius: 15px;
  }

  .po-loc-explorer__header {
    min-height: 0;
    padding: 21px 18px;
  }

  .po-loc-map-shell {
    min-height: 610px;
  }

  .po-loc-detail {
    top: auto;
    right: 12px;
    bottom: 12px;
    width: calc(100% - 24px);
  }

  .po-loc-detail__image {
    height: 118px;
  }

  .po-loc-detail__body {
    padding: 15px 17px;
  }

  .po-loc-detail__summary {
    display: none;
  }

  .po-loc-detail__actions {
    grid-template-columns: 1fr 1fr 0.8fr;
  }

  .po-loc-map__legend {
    display: none;
  }

  .po-loc-toast {
    right: 14px;
    bottom: 14px;
    left: 14px;
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .po-loc-map__spinner {
    animation-duration: 2s;
  }

  .po-loc-explorer *,
  .po-loc-explorer *::before,
  .po-loc-explorer *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
