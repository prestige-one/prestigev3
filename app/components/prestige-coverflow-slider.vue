<template>
  <main>
    <!-- project slider area start (same as portfolio-coverflow-slider-light) -->
    <div class="coverflow-slider-main fix">
      <div class="coverflow-slider-wrap">
        <div class="swiper-container coverflow-slider-active fix">
          <div class="swiper-wrapper">
            <div v-for="item in developmentSlides" :key="item.id" class="swiper-slide">
              <div class="coverflow-slider-item">
                <img :src="item.image" :alt="item.title">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="coverflow-slider-text-wrap">
        <div class="swiper-container coverflow-slider-text-active fix">
          <div class="swiper-wrapper">
            <div v-for="item in developmentSlides" :key="item.id" class="swiper-slide">
              <div class="coverflow-slider-item">
                <div class="coverflow-slider-content text-center">
                  <h4 class="coverflow-slider-title-sm">
                    <NuxtLink class="tp-line-white" :to="item.href">
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
            <svg-arrow-slide-prev />
          </span>
          <span>Prev</span>
        </button>
        <button class="coverflow-slider-next pr-100">
          <span>Next</span>
          <span>
            <svg-arrow-slide-next />
          </span>
        </button>
      </div>
    </div>
    <!-- project slider area end -->
  </main>
</template>

<script setup lang="ts">
import Swiper from "swiper";
import { Navigation, EffectCoverflow, Autoplay, Keyboard, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const baseDevelopmentSlides = [
  {
    id: 1,
    image: "/assets/project-featured-images/hilton/HILTON-NIGHT-VIEW-1.webp",
    title: "Hilton Residences",
    href: "#",
  },
  {
    id: 2,
    image: "/assets/project-featured-images/fauchon/fauchon-banner.webp",
    title: "Fauchon Residences",
    href: "#",
  },
  {
    id: 3,
    image: "/assets/project-featured-images/berkeley/Berkeley-Square-North.webp",
    title: "Berkeley Square",
    href: "#",
  },
  {
    id: 4,
    image: "/assets/project-featured-images/coastal-haven/Coastal-Haven.webp",
    title: "Coastal Haven",
    href: "#",
  },
  {
    id: 5,
    image: "/assets/project-featured-images/parkway/parkway.webp",
    title: "Parkway",
    href: "#",
  },
];

// Swiper's loop mode needs roughly slidesPerView * 2 slides to loop
// reliably (the demo used 11 for the same reason) — with only 5 real
// developments, duplicate the set so loop + autoplay work correctly at
// the wider breakpoints (slidesPerView up to 4).
const developmentSlides = [...baseDevelopmentSlides, ...baseDevelopmentSlides].map(
  (item, index) => ({ ...item, id: index + 1 }),
);

onMounted(() => {
  const modules = [Navigation, EffectCoverflow, Autoplay, Keyboard, Controller];

  // main (image) swiper — no mousewheel interaction, autoplay only
  const coverflowThumbSlider = new Swiper(".coverflow-slider-active", {
    loop: true,
    effect: "coverflow",
    modules: [...modules],
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".coverflow-slider-next",
      prevEl: ".coverflow-slider-prev",
    },
    breakpoints: {
      600: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
      1400: { slidesPerView: 4 },
    },
  });

  // text swiper, synced to the image swiper
  const coverflowTextSlider = new Swiper(".coverflow-slider-text-active", {
    modules,
    spaceBetween: 30,
    slidesPerView: 1,
    direction: "vertical",
    loop: true,
    touchRatio: 0.2,
    speed: 1500,
  });

  coverflowThumbSlider.controller.control = coverflowTextSlider;
  coverflowTextSlider.controller.control = coverflowThumbSlider;
});
</script>

<style scoped>
/* .coverflow-slider-text-wrap (theme CSS) is `position: absolute; bottom:
   60px;` with no positioned ancestor of its own — without a containing
   block here, it skips every static ancestor all the way up to GSAP
   ScrollSmoother's #smooth-wrapper (position: fixed, viewport-sized),
   so "bottom: 60px" ends up meaning "60px from the bottom of the
   viewport" rather than the bottom of this slider — pinning the title
   text to the screen everywhere, bleeding into the hero on load/scroll.
   Establishing a positioning context here contains it correctly. */
.coverflow-slider-main {
  position: relative;
}

.coverflow-slider-wrap {
  height: 70vh;
  min-height: 480px;
}

.coverflow-slider-title-sm {
  font-size: 40px;
  line-height: 1;
  letter-spacing: 0px;
  font-family: Poppins;
}
</style>
