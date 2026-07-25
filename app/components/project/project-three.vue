<template>
  <div class="dgm-project-area pb-120 fix black-bg-5">
    <div class="container container-1330">
      <div class="dgm-project-top-wrap">
        <div class="row align-items-end">
          <div class="col-xl-4 col-lg-6">
            <div class="dgm-project-title-box z-index-1 mb-30">
              <h4
                class="tp-section-title-grotesk text-white mb-0 tp_fade_anim"
              >
                Our exclusive
                <span class="p-relative">
                  Case
                  <span class="tp-section-title-shape">
                    <svg-title-shape-two />
                  </span>
                </span>
                studies
              </h4>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="dgm-project-top-text mb-30 tp_fade_anim">
              <p>
                Our design services starts and ends with a best-in class
                experience strategy that builds to provide you with an informed
                response.
              </p>
            </div>
          </div>
          <div class="col-xl-2 col-lg-6">
            <div
              class="dgm-project-arrow text-start text-xl-end z-index-1 mb-30 tp_fade_anim"
            >
              <button class="dgm-project-prev">
                <span><svg-arrow-left width="16" height="16" /></span>
              </button>
              <button class="dgm-project-next">
                <span><svg-arrow-right width="16" height="16" /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Slider Section -->
    <div class="dgm-project-slider-wrap">
      <!-- Image Swiper (Horizontal) -->
      <div class="dgm-project-active">
        <Swiper
          :space-between="40"
          :centered-slides="true"
          :loop="true"
          :speed="1500"
          :keyboard="{ enabled: true }"
          :breakpoints="{
            1600: { slidesPerView: 3 },
            1400: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            992: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 1 },
            0: { slidesPerView: 1 }
          }"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          :navigation="{ nextEl: '.dgm-project-next', prevEl: '.dgm-project-prev' }"
        >
          <SwiperSlide
            v-for="project in project_data"
            :key="'img-' + project.id"
          >
            <div class="dgm-project-item">
              <div class="dgm-project-thumb">
                <img
                  :src="project.image"
                  :alt="project.title"
                >
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Text Swiper (Vertical) -->
      <div class="dgm-project-text-active fix mt-55">
        <Swiper
          direction="vertical"
          :space-between="30"
          :slides-per-view="1"
          :loop="true"
          :speed="1500"
          style="height: 100px"
          :free-mode="true"
          :watch-slides-progress="true"
          :modules="modules"
          @swiper="setThumbsSwiper"
        >
          <SwiperSlide
            v-for="project in project_data"
            :key="'text-' + project.id"
          >
            <div class="dgm-project-item">
              <div class="dgm-project-content text-center">
                <h4 class="dgm-project-title-sm">
                  <NuxtLink class="tp-line-white" to="/portfolio-details-classic-stack">
                    {{ project.title }}
                  </NuxtLink>
                </h4>
                <h5><span>{{ project.description }}</span></h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from "swiper";

const thumbsSwiper = ref<SwiperType | null>(null);

const setThumbsSwiper = (swiper: SwiperType) => {
  thumbsSwiper.value = swiper;
};
const modules = [FreeMode, Navigation, Thumbs];
const project_data = [
  {
    id: 1,
    image: '/img/home-03/project/project-1.jpg',
    title: "Avocado Cutter",
    description: "Digital marketing",
  },
  {
    id: 2,
    image: '/img/home-03/project/project-2.jpg',
    title: "Slice. Pit. Scoop.",
    description: "Digital marketing",
  },
  {
    id: 3,
    image: '/img/home-03/project/project-3.jpg',
    title: "Your guac's best friend.",
    description: "Digital marketing",
  },
  {
    id: 4,
    image: '/img/home-03/project/project-1.jpg',
    title: "Perfect halves, every time.",
    description: "Digital marketing",
  },
  {
    id: 5,
    image: '/img/home-03/project/project-2.jpg',
    title: "Three tools. One cutter.",
    description: "Digital marketing",
  },
  {
    id: 6,
    image: '/img/home-03/project/project-3.jpg',
    title: "Avocado Cutter",
    description: "Digital marketing",
  },
];
const {isDark} = useIsDark();
onMounted(() => {
  if(isDark.value){
    const service = document.querySelector('.dgm-project-area');
    if(service){
      (service as HTMLElement).style.backgroundColor = '#1A1B1E';
    }
  }
});
</script>