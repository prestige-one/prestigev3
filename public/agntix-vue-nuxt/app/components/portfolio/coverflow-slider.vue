<template>
    <main>
        <!-- project slider area start -->
        <div class="coverflow-slider-main fix">
            <div class="coverflow-slider-wrap">
                <div class="swiper-container coverflow-slider-active fix">
                    <div class="swiper-wrapper">
                        <div v-for="item in portfolioData" :key="item.id" class="swiper-slide">
                            <div class="coverflow-slider-item">
                                <img :src="item.image" alt="image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="coverflow-slider-text-wrap">
                <div class="swiper-container coverflow-slider-text-active fix">
                    <div class="swiper-wrapper">
                        <div v-for="item in portfolioData" :key="item.id" class="swiper-slide">
                            <div class="coverflow-slider-item">
                                <div class="coverflow-slider-content text-center">
                                    <h4 class="coverflow-slider-title-sm">
                                          <NuxtLink
                                            class="tp-line-white"
                                            to="/portfolio-details-classic-stack"
                                          >
                                            {{ item.title }}
                                        </NuxtLink>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="coverflow-slider-arrow">
                <button class="coverflow-slider-prev pl-100">
                    <span>
                        <svg-arrow-slide-prev/>
                    </span>
                    <span>Prev</span>
                </button>
                <button class="coverflow-slider-next pr-100">
                    <span>Next</span>
                    <span>
                        <svg-arrow-slide-next/>
                    </span>
                </button>
            </div>
        </div>
        <!-- project slider area end -->
    </main>
</template>

<script setup lang="ts">
import Swiper from 'swiper';
import { Navigation, EffectCoverflow, Autoplay, Keyboard, Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const portfolioData = [
  {
    id: 1,
    image: '/img/project-slider-img/portfolio-slider-4/portfolio-1.jpg',
    title: "AvoSculpt",
  },
  {
    id: 2,
    image: '/img/project-slider-img/portfolio-slider-4/portfolio-2.jpg',
    title: "SliceMaster",
  },
  {
    id: 3,
    image: '/img/project-slider-img/portfolio-slider-4/portfolio-3.jpg',
    title: "AvoEdge",
  },
  {
    id: 4,
    image: '/img/project-slider-img/portfolio-slider-4/portfolio-4.jpg',
    title: "GreenGrip Cutter"
  },
  {
    id: 5,
    image: '/img/project-slider-img/portfolio-slider-4/portfolio-5.jpg',
    title: "AvoSlice Pro",
  },
  {
    id: 6,
    image: '/img/project-slider-img/portfolio-slider-4/portfolio-6.jpg',
    title: "AvoSculpt",
  },
  {
    id: 7,
    image: '/img/project-slider-img/portfolio-slider-4/portfolio-7.jpg',
    title: "SliceMaster",
  },
  {
    id: 8,
    image: '/img/project-slider-img/portfolio-slider-4/portfolio-4.jpg',
    title: "AvoEdge",
  },
  {
    id: 9,
    image: '/img/project-slider-img/portfolio-slider-4/portfolio-5.jpg',
    title: "GreenGrip Cutter",
  },
  {
    id: 10,
    image: '/img/project-slider-img/portfolio-slider-4/portfolio-6.jpg',
    title: "AvoSlice Pro",
  },
  {
    id: 11,
    image: '/img/project-slider-img/portfolio-slider-4/portfolio-7.jpg',
    title: "AvoSculpt",
  },
];

onMounted(() => {
  // Register modules
  const modules = [Navigation, EffectCoverflow, Autoplay, Keyboard, Controller];

  // Initialize main (image) swiper
  const coverflow_thumb_slider = new Swiper('.coverflow-slider-active', {
    loop: true,
    effect: "coverflow",
    modules:[...modules],
    autoHeight: true,
    mousewheel: true,
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 1500,
    },
    navigation: {
      nextEl: '.coverflow-slider-next',
      prevEl: '.coverflow-slider-prev',
    },
    breakpoints: {
      600: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
      1400: { slidesPerView: 4 },
    },
  });

  // Initialize text swiper
  const coverflow_text_slider = new Swiper('.coverflow-slider-text-active', {
    modules,
    spaceBetween: 30,
    slidesPerView: 1,
    direction: 'vertical',
    loop: true,
    touchRatio: 0.2,
    speed: 1500,
  });

  // 🔗 Sync both Swipers
  coverflow_thumb_slider.controller.control = coverflow_text_slider;
  coverflow_text_slider.controller.control = coverflow_thumb_slider;
});

</script>