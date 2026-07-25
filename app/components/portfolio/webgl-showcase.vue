<template>
  <main>
    <div id="port-showcase-slider-main">
      <div class="port-showcase-slider-spaces p-relative">
        <div
          id="showcase-slider-holder"
          class="port-showcase-slider-wrap tp-slider-parallax fix"
          data-pattern-img="/img/webgl/1.jpg"
        >
          <div
            id="showcase-slider"
            class="swiper-container parallax-slider-active-2 p-relative"
          >
            <Swiper
              id="trigger-slides"
              direction="horizontal"
              :slides-per-view="'auto'"
              :speed="1000"
              effect="fade"
              :loop="true"
              :mousewheel="true"
              :simulate-touch="true"
              :navigation="{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev'
              }"
              :pagination="{
                el: '.tp-slider-dot',
                clickable: true
              }"
              :modules="[Navigation, Pagination, Mousewheel, Autoplay]"
              @slide-prev-transition-start="slidePrevTransitionStart"
              @slide-next-transition-start="slideNextTransitionStart"
            >
              <SwiperSlide
                v-for="(item, i) in portfolioWebglSlides"
                :key="item.id"
              >
                <div
                  class="slide-wrap"
                  :class="{ active: i === 0 }"
                  :data-slide="i"
                />

                <div class="container container-1230">
                  <div class="row justify-content-center">
                    <div class="col-xl-8">
                      <div class="port-showcase-slider-item">
                        <div class="port-showcase-slider-content">
                          <span class="port-showcase-slider-subtitle">
                            <span>[ {{ item.categories.join(', ') }} ]</span>
                          </span>
                          <NuxtLink :to="item.link">
                            <h4 class="port-showcase-slider-title">
                              <span>{{ item.title }}</span>
                            </h4>
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <!-- arrows -->
          <div class="tp-showcase-arrow-box d-flex justify-content-between">
            <button class="tp-showcase__button-prev swiper-prev d-inline-flex align-items-center">
              <i class="fas fa-chevron-left"/>
              <span>Prev</span>
            </button>
            <button class="tp-showcase__button-next swiper-next d-inline-flex align-items-center">
              <span>Next</span>
              <i class="fas fa-chevron-right"/>
            </button>
          </div>

          <div class="tp-slider-dot d-none d-md-block"/>
          <div class="port-showcase-slider-social d-none d-md-block">
            <NuxtLink class="tp-hover-btn-item" href="#">Fb</NuxtLink>
            <NuxtLink class="tp-hover-btn-item" href="#">In</NuxtLink>
            <NuxtLink class="tp-hover-btn-item" href="#">Be</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- canvas slider -->
    <div
      id="canvas-slider"
      ref="webGLContainerRef"
      class="canvas-slider"
    >
      <div
        v-for="(imgSrc, index) in sliderImages"
        :key="index"
        class="slider-img"
        :data-slide="index"
      >
        <img
          class="slide-img"
          :src="imgSrc"
          alt="showcase-img"
        >
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import WebGL from "~/utils/webgl";

// Slider data
const portfolioWebglSlides = [
  { id: 0, active: true, title: "Top Paddock" },
  { id: 1, active: false, title: "Stickers Pack" },
  { id: 2, active: false, title: "Diseno Grafico" },
  { id: 3, active: false, title: "Bright Cap" },
  { id: 4, active: false, title: "Grafico Jan" },
  { id: 5, active: false, title: "Bright Cap" },
].map((item) => ({
  ...item,
  categories: ["UI", "Web Design"],
  link: "/portfolio-details-classic-stack",
}));

const sliderImages = [
  "/img/webgl/webgl-1.jpg",
  "/img/webgl/webgl-2.jpg",
  "/img/webgl/webgl-3.jpg",
  "/img/webgl/webgl-4.jpg",
  "/img/webgl/webgl-5.jpg",
  "/img/webgl/webgl-6.jpg",
];

const webGLContainerRef = ref<HTMLElement | null>(null);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let webGLInstance: any = null;
onMounted(() => {
  if (webGLContainerRef.value) {
    webGLInstance = new WebGL({
      vertex: verTextFragment().vertex,
      fragment: verTextFragment().fragment,
    });

    addEvents(webGLInstance);

    webGLContainerRef.value.appendChild(webGLInstance.renderer.domElement);
  }
});

onBeforeUnmount(() => {
  if (webGLInstance) {
    webGLInstance.stop();
  }
});
</script>
