
<template>
  <div class="tp-portfolio-11-area fix">
    <div class="tp-portfolio-11-slider-wrap p-relative">
      <!-- Main Slider -->
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        :speed="1000"
        :effect="'fade'"
        :thumbs="{ swiper: thumbsSwiper }"
        :navigation="{
          nextEl: '.slick-next',
          prevEl: '.slick-prev',
        }"
        class="tp-portfolio-11-slider-active"
        @swiper="setMainSwiper"
      >
        <SwiperSlide v-for="item in sliderData" :key="item.id">
          <div
            class="tp-portfolio-11-slider-bg pt-170 pb-150 d-flex align-items-end"
            :style="{ backgroundImage: `url(${item.bg})` }"
          >
            <div class="tp-portfolio-11-slider-content">
              <div class="tp-portfolio-11-slider-link" style="opacity: 1">
                <NuxtLink :to="item.link">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L17 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M17 1V17H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
              <span class="tp-portfolio-11-slider-subtitle" style="opacity: 1">
                {{ item.year }} <br> {{ item.subtitle }}
              </span>
              <h3
                class="tp-portfolio-11-slider-title"
                style="opacity: 1"
                v-html="sanitizeHtml(item.title)"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Nav Slider -->
      <div class="tp-portfolio-11-slider-nav-wrap z-index-5">
        <div
          class="slides-number d-none d-lg-flex d-flex align-items-center"
          style="display: inline-block"
        >
          <div class="slider-line"/>
          <span class="active">{{ addZeros(sliderIndex) }}</span>
        </div>
        <div class="tp-portfolio-11-slider-nav-active d-none d-lg-block ">
          <Swiper
            class="pt-50 pb-50"
            :modules="modules"
            :slides-per-view="4"
            :space-between="20"
            :loop="true"
            :speed="600"
            :watch-slides-progress="true"
            :navigation="{
              nextEl: '.slick-next',
              prevEl: '.slick-prev',
            }"
            :breakpoints="breakpoints"
            @swiper="setThumbsSwiper"
            @slide-change="onSlideChange"
          >
            <SwiperSlide v-for="item in sliderThumbs" :key="item.id">
              <div
                class="tp-portfolio-11-slider-nav-item p-relative"
              >
                <div class="tp-portfolio-11-slider-nav-thumb">
                  <img :src="item.img" alt="thumb-img">
                </div>
                <div class="tp-portfolio-11-slider-nav-content-wrap">
                  <div
                    class="tp-portfolio-11-slider-nav-content d-flex flex-column justify-content-between"
                  >
                    <div class="tp-portfolio-11-slider-nav-year">
                      <span>{{ item.year }}</span>
                    </div>
                    <div class="tp-portfolio-11-slider-nav-tittle-box">
                      <span class="tp-portfolio-11-slider-nav-subtittle">
                        {{ item.subtitle }}
                      </span>
                      <h4 class="tp-portfolio-11-slider-nav-tittle">
                        <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <button type="button" class="slick-prev slick-arrow" style="">
            <i class="fa-light fa-angle-left"/>
          </button>
          <button type="button" class="slick-next slick-arrow" style="">
            <i class="fa-light fa-angle-right"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Thumbs, EffectFade, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const modules = [Navigation, Thumbs, EffectFade, FreeMode];

const mainSwiper = ref<SwiperType | null>(null);
const thumbsSwiper = ref<SwiperType | null>(null);
const sliderIndex = ref(1);

const setMainSwiper = (swiper: SwiperType) => {
  mainSwiper.value = swiper;
};
const setThumbsSwiper = (swiper: SwiperType) => {
  thumbsSwiper.value = swiper;
};
const onSlideChange = (swiper: SwiperType) => {
  sliderIndex.value = swiper.realIndex + 1;
};

const addZeros = (n: number) => (n < 10 ? "0" + n : "" + n);

const breakpoints = {
  1600: { slidesPerView: 4 },
  1400: { slidesPerView: 3 },
  1200: { slidesPerView: 2 },
  992: { slidesPerView: 2 },
  768: { slidesPerView: 4 },
  480: { slidesPerView: 4 },
};

const sliderData = [
  {
    id: 1,
    bg: "/img/portfolio/wrapper-slider/wrapper-big-1.jpg",
    subtitle: "Digital Design",
    year: "2024",
    title: "Fashion <br> Sentence",
    link: "/portfolio-details-creative-slider",
  },
  {
    id: 2,
    bg: "/img/portfolio/wrapper-slider/wrapper-big-2.jpg",
    subtitle: "Digital Design",
    year: "2022",
    title: "Chania <br> Tourism",
    link: "/portfolio-details-creative-slider",
  },
  {
    id: 3,
    bg: "/img/portfolio/wrapper-slider/wrapper-big-3.jpg",
    subtitle: "Digital Design",
    year: "2021",
    title: "Kiteboard <br> action",
    link: "/portfolio-details-creative-slider",
  },
  {
    id: 4,
    bg: "/img/portfolio/wrapper-slider/wrapper-big-4.jpg",
    subtitle: "Digital Design",
    year: "2021",
    title: "Headphones <br> Cheap",
    link: "/portfolio-details-creative-slider",
  },
  {
    id: 5,
    bg: "/img/portfolio/wrapper-slider/wrapper-big-5.jpg",
    subtitle: "Digital Design",
    year: "2021",
    title: "Zon <br> Robinson",
    link: "/portfolio-details-creative-slider",
  },
];

const sliderThumbs = [
  {
    id: 1,
    img: "/img/portfolio/wrapper-slider/wrapper-sm-5.jpg",
    subtitle: "Digital Design",
    year: "2024",
    title: "Fashion Sentence",
    link: "/portfolio-details-creative-slider",
  },
  {
    id: 2,
    img: "/img/portfolio/wrapper-slider/wrapper-sm-1.jpg",
    subtitle: "Digital Design",
    year: "2022",
    title: "Chania Tourism",
    link: "/portfolio-details-creative-slider",
  },
  {
    id: 3,
    img: "/img/portfolio/wrapper-slider/wrapper-sm-2.jpg",
    subtitle: "Digital Design",
    year: "2021",
    title: "Kiteboard action",
    link: "/portfolio-details-creative-slider",
  },
  {
    id: 4,
    img: "/img/portfolio/wrapper-slider/wrapper-sm-3.jpg",
    subtitle: "Digital Design",
    year: "2021",
    title: "Headphones Cheap",
    link: "/portfolio-details-creative-slider",
  },
  {
    id: 5,
    img: "/img/portfolio/wrapper-slider/wrapper-sm-4.jpg",
    subtitle: "Digital Design",
    year: "2021",
    title: "Zon Robinson",
    link: "/portfolio-details-creative-slider",
  },
];
</script>
