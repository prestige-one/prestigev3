<template>
  <section class="prestige-section prestige-fsplit">
    <div class="container container-1430">
      <div
        class="row"
        :class="[reverse ? 'flex-row-reverse' : '', equalHeight ? 'align-items-stretch' : 'align-items-center']"
      >
        <div class="col-lg-6 mb-40" :class="equalHeight ? 'd-flex mb-lg-0' : ''">
          <div class="prestige-fsplit__media tp_fade_anim" :class="{ 'is-fill': equalHeight }" data-delay=".2">
            <img :src="image" :alt="title" loading="lazy">
          </div>
        </div>
        <div class="col-lg-6" :class="reverse ? 'pe-lg-5' : 'ps-lg-5'">
          <div class="prestige-fsplit__body">
            <span v-if="eyebrow" class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ eyebrow }}</span>
            <h2 class="prestige-heading tp_fade_anim" data-delay=".3">{{ title }}</h2>
            <div class="prestige-prose tp_fade_anim" data-delay=".4" style="margin-top: 22px;">
              <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
            </div>
            <ul v-if="points && points.length" class="prestige-fsplit__points tp_fade_anim" data-delay=".5">
              <li v-for="(pt, i) in points" :key="i"><span class="prestige-fsplit__dot" />{{ pt }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  image: string;
  paragraphs: string[];
  eyebrow?: string;
  points?: string[];
  reverse?: boolean;
  equalHeight?: boolean;
}>();
</script>

<style scoped>
.prestige-fsplit__media {
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 4 / 3;
  background: #101013;
}
/* equal-height variant: image matches the text column's height */
.prestige-fsplit__media.is-fill {
  aspect-ratio: auto;
  width: 100%;
  min-height: 340px;
}
.prestige-fsplit__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-fsplit__media:hover img { transform: scale(1.05); }
.prestige-fsplit__points {
  list-style: none;
  margin: 26px 0 0;
  padding: 0;
}
.prestige-fsplit__points li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.82);
  font-size: 16px;
}
.prestige-fsplit__dot {
  flex: 0 0 auto;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--tp-common-gold, #ffffff);
}
</style>
