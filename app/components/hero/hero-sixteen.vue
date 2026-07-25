<template>
  <div class="tp-hero-shop-area pt-120 p-relative fix" data-bg-color="#E8E0D4" :style="{ backgroundColor: bg_clr }">
      <h1 class="tp-hero-shop-title tp-char-animation">zonspace</h1>
      <div class="container container-1830">
          <div class="tp-hero-shop-slider-main">
            <div class="tp-hero-shop-slider-wrap slider-for-1">
              <Swiper 
                :space-between="0"
                :slides-per-view="1"
                :thumbs="{ swiper: thumbsSwiper }"
                :effect="'fade'"
                :fade-effect="{ crossFade: true }"
                :modules="[EffectFade,Thumbs]"
                >
                  <SwiperSlide v-for="(item, i) in slideData" :key="i" class="tp-hero-shop-slider-item">
                      <div class="row align-items-end">
                          <div class="offset-xl-1 col-xl-4">
                              <div class="tp-hero-shop-slider-content">
                                  <span class="tp-hero-shop-slider-subtitle">
                                    {{ item.subtitle }}
                                  </span>
                                  
                                  <h4 class="tp-hero-shop-slider-title" v-html="sanitizeHtml(item.title)"/>
                                  <div class="tp-hero-shop-btn">
                                      <a class="tp-btn-white-border coffee-bg" href="shop.html">Shop Now</a>
                                  </div>
                              </div>
                          </div>
                          <div class="col-xl-5">
                              <div class="tp-hero-shop-slider-thumb">
                                  <img :src="item.image" alt="slider-img">
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>
              </Swiper>
             </div>
              <!-- nav imgs -->
              <div class="tp-hero-shop-slider-nav-wrap">
                <div class="tp-hero-shop-slider-nav slider-nav-1">
                  <Swiper 
                    direction="vertical"
                    :space-between="0"
                    :slides-per-view="3"
                    :loop="false"
                    :modules="[Thumbs]"
                    style="height: 360px"
                    @swiper="setThumbsSwiper"
                  >
                      <SwiperSlide v-for="(src, i) in slider_nav" :key="i" class="tp-hero-shop-slider-nav-thumb">
                          <img :src="src" alt="nav-img">
                      </SwiperSlide>
                  </Swiper>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import {Thumbs,EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from "swiper";
import "swiper/css/effect-fade";

const {isDark} = useIsDark();
const bg_clr = isDark.value ? '#4D3D30' : '#E8E0D4';

const thumbsSwiper = ref<SwiperType | null>(null);

const setThumbsSwiper = (swiper: SwiperType) => {
  thumbsSwiper.value = swiper;
};

const slideData = [
    {
        title: "Form dining <br /> chairs",
        subtitle: "Shop Collection",
        image: '/img/shop-home/slider-1.png',
        alt: "Form dining chairs"
    },
    {
        title: "Elegant Dining <br /> Seats",
        subtitle: "Shop Collection",
        image: '/img/shop-home/slider-2.png',
        alt: "Elegant Dining Seats"
    },
    {
        title: "Stylish Dinner<br /> Chairs",
        subtitle: "Shop Collection",
        image: '/img/shop-home/slider-3.png',
        alt: "Stylish Dinner Chairs"
    },
    {
        title: "Modern Dining <br /> Chairs",
        subtitle: "Shop Collection",
        image: '/img/shop-home/slider-2.png',
        alt: "Modern Dining Chairs"
    }
];

const slider_nav = [
  '/img/shop-home/slider-nav-1.png',
  '/img/shop-home/slider-nav-2.png',
  '/img/shop-home/slider-nav-3.png',
  '/img/shop-home/slider-nav-2.png'
]
</script>