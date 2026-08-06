<template>
  <nuxt-link :to="`/projects/${project.slug}`" class="prestige-pcard">
    <div class="prestige-pcard__media">
      <img :src="project.image" :alt="project.title" loading="lazy">
      <span v-if="handedOver" class="prestige-pcard__status prestige-pcard__status--handedover">
        <span class="prestige-pcard__status-icon" aria-hidden="true">
          <svg viewBox="0 0 12 12" role="presentation">
            <path d="m3 6.1 1.8 1.8L9 3.8" />
          </svg>
        </span>
        {{ $t('cta.handedOver') }}
      </span>
      <span v-if="comingSoon" class="prestige-pcard__status prestige-pcard__status--comingsoon">
        <span class="prestige-pcard__status-icon" aria-hidden="true" />
        {{ $t('cta.comingSoon') }}
      </span>
    </div>
    <div class="prestige-pcard__body">
      <span class="prestige-pcard__loc">{{ project.location }}</span>
      <h3 class="prestige-pcard__title">{{ pName(project) }}</h3>
      <p v-if="showDescription" class="prestige-pcard__description">
        {{ project.description }}
      </p>
      <span class="prestige-pcard__cta">
        {{ $t('cta.viewProject') }} <i class="prestige-pcard__arrow">→</i>
      </span>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { Project } from "../../data/projects";

const props = withDefaults(defineProps<{
  project: Project;
  showDescription?: boolean;
  showComingSoon?: boolean;
}>(), {
  showDescription: false,
  showComingSoon: false,
});
const { pName } = useLocalizedNames();

const HANDED_OVER = new Set(["vista-by-prestige-one", "the-residence-by-prestige-one"]);
const handedOver = computed(() => HANDED_OVER.has(props.project.slug));
const comingSoon = computed(() => props.showComingSoon && props.project.category === "upcoming");
</script>

<style scoped>
.prestige-pcard {
  display: block;
  color: #fff;
}
.prestige-pcard__media {
  position: relative;
  /* shorter card box */
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 8px;
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
/* project status badges */
.prestige-pcard__status {
  position: absolute;
  top: 14px;
  left: 14px;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 5px 15px 5px 5px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  z-index: 2;
}
.prestige-pcard__status-icon {
  display: grid;
  width: 22px;
  height: 22px;
  flex: 0 0 22px;
  border-radius: 50%;
  place-items: center;
}
.prestige-pcard__status-icon svg {
  width: 12px;
  height: 12px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}
.prestige-pcard__status--handedover {
  color: #0b0b0d;
  background: rgba(255, 255, 255, 0.96);
  border-color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.24);
}
.prestige-pcard__status--handedover .prestige-pcard__status-icon {
  color: #fff;
  background: #090a0c;
}
.prestige-pcard__status--comingsoon {
  color: rgba(255, 255, 255, 0.94);
  background: rgba(15, 17, 22, 0.74);
  border-color: rgba(255, 255, 255, 0.66);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.prestige-pcard__status--comingsoon .prestige-pcard__status-icon {
  background: linear-gradient(145deg, #e0e4ea, #9299a3);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.65), 0 1px 3px rgba(0, 0, 0, 0.4);
}
.prestige-pcard__body {
  padding: 18px 4px 0;
}
.prestige-pcard__loc {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}
.prestige-pcard__title {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  margin: 7px 0 14px;
  line-height: 1.2;
}
.prestige-pcard__description {
  min-height: 3.2em;
  margin: -4px 0 16px;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.58);
}
/* eye-catching pill button */
.prestige-pcard__cta {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 5px 22px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  font-size: 12.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
}
.prestige-pcard:hover .prestige-pcard__cta {
  background: #fff;
  color: #0b0b0d;
  border-color: #fff;
  transform: translateY(-2px);
}
.prestige-pcard__arrow {
  font-style: normal;
  transition: transform 0.3s ease;
}
.prestige-pcard:hover .prestige-pcard__arrow {
  transform: translateX(5px);
}
</style>
