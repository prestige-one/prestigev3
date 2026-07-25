<template>
  <div class="crp-text-slider-wrap crp-price-bg p-relative fix">
    <!-- Shapes -->
    <div class="crp-text-shape-wrap">
      <img class="crp-text-shape-1" src="/img/home-09/text-slider/text-slider-shape-2.png" alt="shape">
      <img class="crp-text-shape-2" src="/img/home-09/text-slider/text-slider-shape-1.png" alt="shape">
    </div>

    <!-- Marquee -->
    <client-only>
      <Vue3Marquee
        class="crp-text-slider-active slide-transtion"
        :duration="60"
        :pause-on-hover="false"
      >
        <div
          v-for="item in sliderItems"
          :key="item.id"
          class="crp-text-slider-item"
          :class="item.className"
          style="margin-right: 40px"
        >
          <span>{{ item.text }}</span>
        </div>
      </Vue3Marquee>
    </client-only>
  </div>
</template>

<script setup lang="ts">
const sliderItems = [
  { id: 1, text: "we are", className: "stroke-text" },
  { id: 2, text: "corporate", className: "" },
  { id: 3, text: "agency", className: "stroke-text" },
  { id: 4, text: "we are", className: "stroke-text" },
  { id: 5, text: "corporate", className: "" },
  { id: 6, text: "agency", className: "stroke-text" }
]
</script>

<style scoped>
.vue3-marquee.horizontal.crp-text-slider-active.slide-transtion {
    overflow-y: hidden;
}
</style>