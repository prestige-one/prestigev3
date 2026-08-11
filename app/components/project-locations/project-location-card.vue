<template>
  <article
    class="po-loc-card"
    :class="{
      'po-loc-card--active': active,
      'po-loc-card--compact': compact,
    }"
  >
    <button
      type="button"
      class="po-loc-card__select"
      :aria-label="`Show ${project.name} on the map`"
      @click="$emit('select', project)"
    >
      <span class="po-loc-card__media">
        <img :src="project.image" :alt="project.name" loading="lazy">
        <span class="po-loc-card__status">{{ project.status }}</span>
      </span>
      <span class="po-loc-card__content">
        <strong>{{ project.name }}</strong>
        <span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/></svg>
          {{ project.location }}
        </span>
      </span>
    </button>

    <div v-if="!compact" class="po-loc-card__actions">
      <button type="button" @click="$emit('copy', project)">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>
        Copy location
      </button>
      <NuxtLink :to="project.detailsUrl">More info</NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { ProjectLocation } from "~/data/project-locations";

defineProps<{
  project: ProjectLocation;
  active?: boolean;
  compact?: boolean;
}>();

defineEmits<{
  select: [project: ProjectLocation];
  copy: [project: ProjectLocation];
}>();
</script>

<style scoped>
.po-loc-card {
  --po-loc-card-line: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid var(--po-loc-card-line);
  border-radius: 13px;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
}

.po-loc-card:hover,
.po-loc-card--active {
  background: rgba(255, 255, 255, 0.075);
  border-color: rgba(211, 186, 137, 0.68);
}

.po-loc-card--active {
  box-shadow: inset 3px 0 #d3ba89;
}

.po-loc-card__select {
  display: grid;
  width: 100%;
  grid-template-columns: 96px minmax(0, 1fr);
  gap: 13px;
  align-items: center;
  padding: 8px;
  text-align: left;
  color: inherit;
  background: transparent;
  border: 0;
}

.po-loc-card__media {
  position: relative;
  display: block;
  height: 74px;
  overflow: hidden;
  background: #151b25;
  border-radius: 9px;
}

.po-loc-card__media::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(180deg, transparent 42%, rgba(3, 7, 13, 0.72));
}

.po-loc-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.po-loc-card:hover .po-loc-card__media img {
  transform: scale(1.06);
}

.po-loc-card__status {
  position: absolute;
  z-index: 1;
  right: 7px;
  bottom: 6px;
  padding: 2px 6px;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #c5f1d9;
  background: rgba(10, 84, 50, 0.84);
  border-radius: 20px;
}

.po-loc-card__content {
  display: grid;
  min-width: 0;
  gap: 7px;
}

.po-loc-card__content strong {
  overflow: hidden;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  color: #fff;
  text-overflow: ellipsis;
}

.po-loc-card__content > span {
  display: flex;
  gap: 5px;
  align-items: center;
  overflow: hidden;
  font-size: 10px;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.56);
  text-overflow: ellipsis;
}

.po-loc-card__content svg,
.po-loc-card__actions svg {
  width: 13px;
  height: 13px;
  flex: 0 0 auto;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
}

.po-loc-card__actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--po-loc-card-line);
}

.po-loc-card__actions > * {
  display: flex;
  min-height: 36px;
  gap: 6px;
  align-items: center;
  justify-content: center;
  padding: 7px 8px;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.72);
  background: transparent;
  border: 0;
  transition: color 0.2s ease, background 0.2s ease;
}

.po-loc-card__actions > * + * {
  border-left: 1px solid var(--po-loc-card-line);
}

.po-loc-card__actions > *:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}

.po-loc-card--compact {
  min-width: 236px;
}

.po-loc-card--compact .po-loc-card__select {
  grid-template-columns: 92px minmax(0, 1fr);
}

@media (max-width: 700px) {
  .po-loc-card__select {
    grid-template-columns: 86px minmax(0, 1fr);
  }
}
</style>
