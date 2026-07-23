<template>
  <div class="tp-slider-elegant-area pt-140 pb-120">
    <div class="tp-slider-elegant-wrapper">
      <div class="tp-slider-elegant-inner-wrap">
        <div
          v-for="(item, index) in portfolioSliderElegantData"
          :key="index"
          class="tp-slider-elegant-item"
        >
          <div
            class="tp-slider-elegant-thumb not-hide-cursor"
            data-cursor="View<br>Demo"
          >
            <NuxtLink class="cursor-hide" to="/portfolio-details-gallery">
              <img :src="item.img" :alt="item.title">
            </NuxtLink>
          </div>
          <div class="tp-slider-elegant-content">
            <h4 class="tp-slider-elegant-title">
              <NuxtLink to="/portfolio-details-gallery">
                {{ item.title }}
              </NuxtLink>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const portfolioSliderElegantData = [
  {
    img: "/img/project-slider-img/portfolio-slider-5/port-7.jpg",
    title: "Brand promotion",
  },
  {
    img: "/img/project-slider-img/portfolio-slider-5/port-6.jpg",
    title: "Commercial",
  },
  {
    img: "/img/project-slider-img/portfolio-slider-5/port-5.jpg",
    title: "Wedding",
  },
  {
    img: "/img/project-slider-img/portfolio-slider-5/port-4.jpg",
    title: "Portrait",
  },
];
</script>
