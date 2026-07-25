<template>
  <ClientOnly>
    <div class="tp-text-slider-4-area tp-text-slider-5-style black-bg-5 fix">
      <div class="tp-text-slider-4-wrap">
        <Vue3Marquee :speed="50" :pause-on-hover="true">
          <div
            v-for="(item, index) in SLIDE_ITEMS"
            :key="index"
            class="tp-text-slider-4-item d-flex align-items-center slide-transtion"
            style="margin-right: 30px"
          >
            <span>{{ item }}</span>
            <img
              src="/img/home-15/text-slider/shape-1.png"
              alt="shape"
            >
          </div>
        </Vue3Marquee>
      </div>
    </div>
  </ClientOnly>
</template>


<script setup lang="ts">

const SLIDE_ITEMS = [
  "Brand promotion",
  "Commercial",
  "Family Shoots",
  "Event",
  "Fashion",
  "Interior photography",
  "Brand promotion",
  "Commercial",
  "Family Shoots",
  "Event",
  "Fashion",
  "Interior photography",
];
</script>