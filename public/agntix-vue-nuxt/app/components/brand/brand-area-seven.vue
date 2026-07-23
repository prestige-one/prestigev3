<template>
  <div class="ar-brand-area mb-160">
    <div
      class="ar-brand-bg"
      style="background-image: url('/img/home-08/hero/hero-bg-shape.png')"
    >
       <client-only>
        <Vue3Marquee
          :duration="60"
          :pause-on-hover="false"
          class="ar-brand-active slide-transtion"
        >
          <div
            v-for="brand in brands"
            :key="brand.id"
            class="ar-brand-item"
            style="margin-right: 165px"
          >
            <img :src="brand.image" :alt="`brand-${brand.id}`" class="brand-image">
          </div>
        </Vue3Marquee>
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">

const brands = [
  { id: 1, image: "/img/home-08/brand/brand-1.png"},
  { id: 2, image: "/img/home-08/brand/brand-2.png"},
  { id: 3, image: "/img/home-08/brand/brand-3.png"},
  { id: 4, image: "/img/home-08/brand/brand-4.png"},
  { id: 5, image: "/img/home-08/brand/brand-5.png"},
  { id: 6, image: "/img/home-08/brand/brand-6.png"},
  { id: 7, image: "/img/home-08/brand/brand-3.png"},
  { id: 8, image: "/img/home-08/brand/brand-4.png"},
  { id: 9, image: "/img/home-08/brand/brand-2.png"},
  { id: 10, image: "/img/home-08/brand/brand-5.png"},
  { id: 11, image: "/img/home-08/brand/brand-6.png"},
  { id: 12, image: "/img/home-08/brand/brand-1.png"},
  { id: 13, image: "/img/home-08/brand/brand-2.png"},
  { id: 14, image: "/img/home-08/brand/brand-3.png"},
  { id: 15, image: "/img/home-08/brand/brand-4.png"},
];
</script>
