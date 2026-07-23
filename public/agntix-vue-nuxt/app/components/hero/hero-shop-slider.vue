<template>
  <div class="tp-hero-shop-2-slider-area p-relative fix">
    <div class="swiper tp-hero-shop-2-active p-relative fix">
      <Swiper
        :modules="[Navigation, Pagination, EffectFade]"
        :slides-per-view="1"
        effect="fade"
        loop
        :pagination="{
          el: '.tp-hero-shop-dot',
          clickable: true,
        }"
        :navigation="{
          prevEl: '.tp-hero-shop-prev',
          nextEl: '.tp-hero-shop-next',
        }"
      >
        <SwiperSlide
          v-for="(slide, index) in slides"
          :key="index"
        >
          <div class="tp-hero-shop-2-slider-item">
            <div class="container container-1230">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="tp-hero-shop-2-slider-wrapper text-center">
                    <span class="tp-hero-shop-2-slider-sub">
                      {{ slide.subtitle }}
                    </span>
                    
                    <h3 class="tp-hero-shop-2-slider-title" v-html="sanitizeHtml(slide.title)"/>
                    <div class="tp-hero-shop-2-slider-btn">
                      <NuxtLink :to="slide.link">Discover</NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- bg image -->
            <div
              class="tp-hero-shop-2-slider-bg"
              :style="{ backgroundImage: `url(${slide.bg})` }"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- arrows -->
      <div class="tp-hero-shop-arrow d-none d-sm-block">
        <button class="tp-hero-shop-prev">
          <span>
            <svg-arrow-slider direction="left" />
          </span>
        </button>
        <button class="tp-hero-shop-next">
          <span>
            <svg-arrow-slider direction="right" />
          </span>
        </button>
      </div>

      <!-- dots -->
      <div class="tp-hero-shop-dot text-center z-index-3"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

// Slides (direct image path from /public/)
const slides = [
  {
    subtitle: "[ Shop Smart, Shop Sorted ]",
    title: "Discover Living <br /><span>Room Chair</span>",
    link: "/shop",
    bg: "/img/shop-home/slider/shop-slider-1.jpg",
  },
  {
    subtitle: "[ Shop Smart, Shop Sorted ]",
    title: "Modern Room <br /><span>Tables Await</span>",
    link: "/shop",
    bg: "/img/shop-home/slider/shop-slider-2.jpg",
  },
  {
    subtitle: "[ Shop Smart, Shop Sorted ]",
    title: "Find Your Perfect <br /><span>Room Bed</span>",
    link: "/shop",
    bg: "/img/shop-home/slider/shop-slider-3.jpg",
  },
];
</script>

