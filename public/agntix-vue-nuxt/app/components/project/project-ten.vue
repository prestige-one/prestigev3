<template>
  <div class="it-project-area it-project-ptb pt-120">
    <div class="container container-1230">
      <div class="row justify-content-center">
        <div class="col-xl-11">
          <div class="it-project-title-box text-center mb-45">
            <span
              class="tp-section-subtitle-platform platform-text-black tp-split-text tp-split-right"
            >
              Proud projects that make us stand out
            </span>
            <h4
              class="tp-section-title-platform platform-text-black fs-200 tp-split-text tp-split-right"
            >
              Case Studies
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div class="it-project-slider-wrap text-center">
      <Swiper
        class="it-project-active pb-50"
        v-bind="swiperOptions"
        :modules="[Navigation, Pagination]"
      >
        <SwiperSlide v-for="project in project_data" :key="project.id">
          <div class="it-project-item text-center">
            <div class="it-project-thumb fix">
              <NuxtLink to="/dark/portfolio-details-custom">
                <img :src="project.image" :alt="project.title" class="w-100">
              </NuxtLink>
            </div>
            <div class="it-project-content">
              <h4 class="it-project-title">
                <NuxtLink
                  to="/dark/portfolio-details-custom"
                  class="tp-line-black">
                  {{ project.title }}
               </NuxtLink>
              </h4>
              <span>{{ project.category }}</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="it-project-arrow">
        <button class="it-project-prev">
          <span>
            <svg-arrow-left-two stroke-width="2" />
          </span>
        </button>
        <button class="it-project-next">
          <span>
            <svg-arrow-right-two stroke-width="2" />
          </span>
        </button>
      </div>

      <div class="it-project-dots" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

const project_data = [
  {
    id: 1,
    title: "The Professional Theft",
    category: "Digital Art",
    image: "/img/home-11/project/project-1.jpg",
  },
  {
    id: 2,
    title: "The Mastermind Heist",
    category: "Digital Art",
    image: "/img/home-11/project/project-2.jpg",
  },
  {
    id: 3,
    title: "The Shadow Larcenist",
    category: "Digital Art",
    image: "/img/home-11/project/project-3.jpg",
  },
  {
    id: 4,
    title: "The Elite Burglar",
    category: "Digital Art",
    image: "/img/home-11/project/project-4.jpg",
  },
  {
    id: 5,
    title: "The Mastermind Heist",
    category: "Digital Art",
    image: "/img/home-11/project/project-2.jpg",
  },
  {
    id: 6,
    title: "The Shadow Larcenist",
    category: "Digital Art",
    image: "/img/home-11/project/project-3.jpg",
  },
];
const swiperOptions = {
  loop: false,
  autoplay: false,
  spaceBetween: 30,
  speed: 1000,
  navigation: {
    nextEl: ".it-project-next",
    prevEl: ".it-project-prev",
  },
  pagination: {
    el: ".it-project-dots",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
    1200: { slidesPerView: 4 },
    1400: { slidesPerView: 4 },
    1600: { slidesPerView: 4 },
  },
};
</script>
