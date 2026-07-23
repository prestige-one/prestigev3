<template>
  <div class="ai-brand-area pb-60" style="background-color: #08041d">
    <div class="ai-brand-slider-wrap">
      <client-only>
        <Vue3Marquee
          :duration="25"
          :pause-on-hover="true"
          :gradient="false"
          class="ai-brand-marquee"
        >
          <div
            v-for="brand in brands"
            :key="brand.id"
            class="ai-brand-item me-2"
          >
            <img
              :src="brand.image"
              :alt="`brand-${brand.id}`"
              class="brand-image"
              draggable="false"
            >
          </div>
        </Vue3Marquee>
      </client-only>
    </div>
  </div>
</template>
<script setup lang="ts">
const brands = [
  { id: 1, image: "/img/home-07/brand/brand-1.png" },
  { id: 2, image: "/img/home-07/brand/brand-2.png" },
  { id: 3, image: "/img/home-07/brand/brand-3.png" },
  { id: 4, image: "/img/home-07/brand/brand-4.png" },
  { id: 5, image: "/img/home-07/brand/brand-5.png" },
  { id: 6, image: "/img/home-07/brand/brand-6.png" },
  { id: 7, image: "/img/home-07/brand/brand-7.png" },
  { id: 8, image: "/img/home-07/brand/brand-8.png" },
  { id: 9, image: "/img/home-07/brand/brand-9.png" },
  { id: 10, image: "/img/home-07/brand/brand-10.png" },
  { id: 11, image: "/img/home-07/brand/brand-11.png" },
  { id: 12, image: "/img/home-07/brand/brand-12.png" },
  { id: 13, image: "/img/home-07/brand/brand-9.png" },
  { id: 14, image: "/img/home-07/brand/brand-7.png" },
  { id: 15, image: "/img/home-07/brand/brand-4.png" },
  { id: 16, image: "/img/home-07/brand/brand-5.png" },
  { id: 17, image: "/img/home-07/brand/brand-6.png" },
];
</script>
