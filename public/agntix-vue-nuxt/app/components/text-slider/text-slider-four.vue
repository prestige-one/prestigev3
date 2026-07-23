<template>
  <div class="crp-text-slider-wrap p-relative">
    <!-- Shapes -->
    <div class="crp-text-shape-wrap app">
      <img
        class="crp-text-shape-1"
        src="/img/home-08/step/text-slide-2.png"
        alt="shape-1"
      >
      <img
        class="crp-text-shape-2"
        src="/img/home-09/text-slider/text-slider-shape-1.png"
        alt="shape-2"
      >
    </div>

    <!-- Vue3Marquee -->
    <client-only>
      <div class="app-text-slider-color crp-text-slider-active slide-transtion">
        <Vue3Marquee
          :duration="80"
          :pause-on-hover="false"
          class="swiper-wrapper"
        >
          <div
            v-for="slide in slides"
            :key="slide.id"
            class="crp-text-slider-item"
            :class="{ 'stroke-text': slide.hasStroke }"
          >
            <span>{{ slide.text }}</span>
          </div>
        </Vue3Marquee>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
interface TextSlideItem {
  id: number;
  text: string;
  hasStroke: boolean;
}

const slides: TextSlideItem[] = [
  {
    id: 1,
    text: "we love",
    hasStroke: true,
  },
  {
    id: 2,
    text: "architecture",
    hasStroke: false,
  },
  {
    id: 3,
    text: "design.",
    hasStroke: true,
  },
  {
    id: 4,
    text: "we love",
    hasStroke: true,
  },
  {
    id: 5,
    text: "architecture",
    hasStroke: false,
  },
  {
    id: 6,
    text: "design.",
    hasStroke: true,
  },
];
</script>

<style scoped>
.crp-text-slider-item {
  margin-right: 40px;
}
.vue3-marquee.horizontal {
    overflow-x: initial !important;
}
</style>
