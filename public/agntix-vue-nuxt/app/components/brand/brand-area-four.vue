<template>
  <client-only>
    <div :class="`creative-brand-area ${spacing}`">
      <div class="creative-brand-wrapper">
        <div class="creative-brand-active">
          <Vue3Marquee :duration="60" :pause-on-hover="true" class="slide-transition">
            <div v-for="(brand, index) in brandImages" :key="index" class="creative-brand-item">
              <img :src="brand" :alt="`Brand ${index + 1}`">
            </div>
          </Vue3Marquee>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script setup lang="ts">
withDefaults(defineProps<{spacing?: string}>(),{
  spacing: 'pb-190'
})
const brandImages = [
  '/img/home-04/brand/brand-1.png',
  '/img/home-04/brand/brand-6.png',
  '/img/home-04/brand/brand-3.png',
  '/img/home-04/brand/brand-4.png',
  '/img/home-04/brand/brand-5.png',
  '/img/home-04/brand/brand-6.png',
  '/img/home-04/brand/brand-1.png',
  '/img/home-04/brand/brand-3.png',
  '/img/home-04/brand/brand-5.png'
]
</script>

<style scoped>
/* Breakpoints (similar to Swiper) */
@media (max-width: 576px) {
  .creative-brand-item {
    width: 120px;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .creative-brand-item {
    width: 160px;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .creative-brand-item {
    width: 200px;
  }
}

@media (min-width: 993px) {
  .creative-brand-item {
    width: 260px;
  }
}

@media (min-width: 1200px) {
  .creative-brand-item {
    width: 315px;
  }
}
</style>
