<template>
  <nuxt-link :to="`/projects/${project.slug}`" class="prestige-pcard">
    <div class="prestige-pcard__media">
      <img :src="project.image" :alt="project.title" loading="lazy">
      <span class="prestige-pcard__status">{{ project.status }}</span>
    </div>
    <div class="prestige-pcard__body">
      <span class="prestige-pcard__loc">{{ project.location }}</span>
      <h3 class="prestige-pcard__title">{{ project.title }}</h3>
      <span class="prestige-pcard__cta">View project<i class="prestige-pcard__arrow">→</i></span>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { Project } from "../../data/projects";
defineProps<{ project: Project }>();
</script>

<style scoped>
.prestige-pcard {
  display: block;
  color: #fff;
}
.prestige-pcard__media {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 6px;
  background: #101013;
}
.prestige-pcard__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-pcard:hover .prestige-pcard__media img {
  transform: scale(1.06);
}
.prestige-pcard__status {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 40px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #fff;
}
.prestige-pcard__body {
  padding: 20px 4px 0;
}
.prestige-pcard__loc {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
}
.prestige-pcard__title {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  margin: 8px 0 14px;
  line-height: 1.2;
}
.prestige-pcard__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  transition: color 0.3s ease;
}
.prestige-pcard:hover .prestige-pcard__cta {
  color: #fff;
}
.prestige-pcard__arrow {
  font-style: normal;
  transition: transform 0.3s ease;
}
.prestige-pcard:hover .prestige-pcard__arrow {
  transform: translateX(5px);
}
</style>
