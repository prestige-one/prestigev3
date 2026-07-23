<template>
  <div class="dgm-brand-area fix">
    <div class="dgm-brand-wrapper">
      <div class="dgm-brand-active">
        <Swiper
          :slides-per-view="6"
          :loop="true"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          :space-between="0"
          :speed="1000"
          :breakpoints="{
            1600: { slidesPerView: 6 },
            1400: { slidesPerView: 5 },
            1200: { slidesPerView: 4 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 3 },
            0: { slidesPerView: 2 }
          }"
          :modules="[Autoplay]"
        >
          <SwiperSlide v-for="brand in brands" :key="brand.id">
            <div class="dgm-brand-item">
              <img :src="brand.image" :alt="`brand-${brand.id}`">
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const brands = [
  { id: 1, image: "/img/home-03/brand/brand-1.png" },
  { id: 2, image: "/img/home-03/brand/brand-2.png" },
  { id: 3, image: "/img/home-03/brand/brand-3.png" },
  { id: 4, image: "/img/home-03/brand/brand-4.png" },
  { id: 5, image: "/img/home-03/brand/brand-5.png" },
  { id: 6, image: "/img/home-03/brand/brand-6.png" },
  { id: 7, image: "/img/home-03/brand/brand-2.png" }
];
</script>

