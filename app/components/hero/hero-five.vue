<template>
  <div id="top" :class="`design-hero-area p-relative fix ${isDark?'':'white-bg'}`">
    <!-- Background Images -->
    <div class="content z-index-2 d-none d-md-block">
      <div
        v-for="img in heroImages"
        :key="img.id"
        class="content__img"
      >
        <div
          class="content__img-inner"
          :style="{ backgroundImage: `url(${img.imageUrl})` }"
        />
      </div>
    </div>

    <!-- Decorative Circles -->
    <div class="design-hero-circle-wrap">
      <span class="design-hero-circle-1"/>
      <span class="design-hero-circle-2 d-none d-md-block"/>
    </div>

    <!-- Hero Content -->
    <div class="design-hero-ptb">
      <!-- Slider -->
      <div
        class="design-hero-wrap z-index-5 tp_fade_anim"
        data-delay=".3"
      >
        <Swiper
          :modules="[Autoplay, FreeMode]"
          :loop="true"
          :free-mode="true"
          :space-between="40"
          slides-per-view="auto"
          :centered-slides="true"
          :allow-touch-move="false"
          :speed="14000"
          :autoplay="{ delay: 1, disableOnInteraction: true }"
          class="design-hero-slide-active slide-transtion"
        >
          <SwiperSlide v-for="slide in slides" :key="slide.id">
            <div class="design-hero-slide-text">
              <span>{{ slide.text }}<i>.</i></span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Main Text -->
      <div class="design-hero-content-wrap mb-110 z-index-5">
        <div class="container container-1230">
          <div class="row">
            <div class="offset-xl-7 offset-lg-6 col-xl-5 col-lg-6">
              <div class="design-hero-content tp_text_anim">
                <p>
                  Studio focusing on designing <br>
                  and developing advanced & intuitive <br>
                  mobile ecosystems.
                </p>
                <div
                  class="tp_fade_anim"
                  data-delay=".7"
                  data-fade-from="top"
                  data-ease="bounce"
                >
                  <NuxtLink
                    to="/portfolio-metro"
                    class="tp-btn-sky-border solid-bg"
                  >
                    Explore work
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Info -->
      <div class="design-hero-info-wrap z-index-5">
        <div class="container container-1680">
          <div class="row">
            <div
              class="col-xl-6 col-lg-6 col-md-6 tp_fade_anim"
              data-delay=".3"
              data-on-scroll="3"
            >
              <div class="design-hero-social">
                <NuxtLink to="#">Instagram</NuxtLink>
                <NuxtLink to="#">Behance</NuxtLink>
                <NuxtLink to="#">Twitter</NuxtLink>
              </div>
            </div>
            <div
              class="col-xl-6 col-lg-6 col-md-6 tp_fade_anim"
              data-delay=".5"
              data-on-scroll="3"
            >
              <div class="design-hero-social text-md-end">
                <NuxtLink
                  class="tp-line-black"
                  to="mailto:info@example.com"
                >
                  info@example.com
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode } from "swiper/modules";
const { isDark } = useIsDark();
const heroImages = [
  { id: 1, imageUrl: "/img/home-06/hero/1.png" },
  { id: 2, imageUrl: "/img/home-06/hero/2.png" },
  { id: 3, imageUrl: "/img/home-06/hero/3.png" },
  { id: 4, imageUrl: "/img/home-06/hero/4.png" },
  { id: 5, imageUrl: "/img/home-06/hero/5.png" },
  { id: 6, imageUrl: "/img/home-06/hero/6.png" },
  { id: 7, imageUrl: "/img/home-06/hero/7.png" },
  { id: 8, imageUrl: "/img/home-06/hero/8.png" },
  { id: 9, imageUrl: "/img/home-06/hero/9.png" },
  { id: 10, imageUrl: "/img/home-06/hero/10.png" },
  { id: 11, imageUrl: "/img/home-06/hero/11.png" },
  { id: 12, imageUrl: "/img/home-06/hero/12.png" },
  { id: 13, imageUrl: "/img/home-06/hero/13.png" },
  { id: 14, imageUrl: "/img/home-06/hero/14.png" },
  { id: 15, imageUrl: "/img/home-06/hero/15.png" },
  { id: 16, imageUrl: "/img/home-06/hero/16.png" },
  { id: 17, imageUrl: "/img/home-06/hero/17.png" }
]

const slides = [
  { id: 1, text: "design studio" },
  { id: 2, text: "design studio" },
  { id: 3, text: "design studio" }
]
</script>
