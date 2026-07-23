<template>
  <div class="creative-brand-area pb-80 fix">
    <div class="creative-brand-wrapper">
      <client-only>
        <Vue3Marquee
          class="creative-brand-active slider-transtion"
          :duration="60"
          :pause-on-hover="true"
        >
          <div
            v-for="brand in brands"
            :key="brand.id"
            class="creative-brand-item"
          >
            <img
              :src="brand.img"
              :alt="`Brand ${brand.id}`"
              class="img-fluid"
            >
          </div>
        </Vue3Marquee>
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">

const brands = [
  { id: 1, img: '/img/home-04/brand/brand-1.png' },
  { id: 2, img: '/img/home-04/brand/brand-6.png' },
  { id: 3, img: '/img/home-04/brand/brand-3.png' },
  { id: 4, img: '/img/home-04/brand/brand-4.png' },
  { id: 5, img: '/img/home-04/brand/brand-5.png' },
  { id: 6, img: '/img/home-04/brand/brand-6.png' },
  { id: 7, img: '/img/home-04/brand/brand-1.png' },
  { id: 8, img: '/img/home-04/brand/brand-3.png' },
  { id: 9, img: '/img/home-04/brand/brand-5.png' },
  { id: 10, img: '/img/home-04/brand/brand-6.png' },
  { id: 11, img: '/img/home-04/brand/brand-3.png' },
  { id: 12, img: '/img/home-04/brand/brand-4.png' },
  { id: 13, img: '/img/home-04/brand/brand-5.png' },
  { id: 14, img: '/img/home-04/brand/brand-6.png' },
]
</script>


<style scoped>

/* Breakpoints */

@media (min-width: 1400px) {
  .creative-brand-item {
    width: 315px;
  }
}
@media (max-width: 1200px) {
  .creative-brand-item {
    width: 280px;
  }
}
</style>
