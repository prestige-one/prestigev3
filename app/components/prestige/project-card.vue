<template>
  <nuxt-link :to="`/projects/${project.slug}`" class="prestige-pcard">
    <div class="prestige-pcard__media">
      <img :src="project.image" :alt="project.title" loading="lazy">
      <span v-if="handedOver" class="prestige-pcard__handedover">{{ $t('cta.handedOver') }}</span>
    </div>
    <div class="prestige-pcard__body">
      <span class="prestige-pcard__loc">{{ project.location }}</span>
      <h3 class="prestige-pcard__title">{{ pName(project) }}</h3>
      <span class="prestige-pcard__cta">
        {{ $t('cta.viewProject') }} <i class="prestige-pcard__arrow">→</i>
      </span>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { Project } from "../../data/projects";

const props = defineProps<{ project: Project }>();
const { pName } = useLocalizedNames();

const HANDED_OVER = new Set(["vista-by-prestige-one", "the-residence-by-prestige-one"]);
const handedOver = computed(() => HANDED_OVER.has(props.project.slug));
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
/* completed-development badge */
.prestige-pcard__handedover {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 7px 14px;
  border-radius: 40px;
  background: #fff;
  color: #0b0b0d;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
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
