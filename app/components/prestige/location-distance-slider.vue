<template>
  <section ref="root" class="prestige-distance" aria-label="Nearby driving distances">
    <div class="prestige-distance__swiper swiper">
      <div class="swiper-wrapper">
        <div v-for="slide in slides" :key="slide.name" class="prestige-distance__slide swiper-slide">
          <article class="prestige-distance__card">
            <img :src="slide.image" :alt="slide.name" loading="lazy">
            <div class="prestige-distance__card-shade" aria-hidden="true" />
            <div class="prestige-distance__copy">
              <span>{{ slide.time }}</span>
              <h3>{{ slide.name }}</h3>
            </div>
          </article>
        </div>
      </div>
    </div>

    <div class="prestige-distance__edge prestige-distance__edge--left" aria-hidden="true" />
    <div class="prestige-distance__edge prestige-distance__edge--right" aria-hidden="true" />

    <button ref="prevButton" type="button" class="prestige-distance__arrow prestige-distance__arrow--prev" aria-label="Previous location">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m15 5-7 7 7 7" /></svg>
    </button>
    <button ref="nextButton" type="button" class="prestige-distance__arrow prestige-distance__arrow--next" aria-label="Next location">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m9 5 7 7-7 7" /></svg>
    </button>

    <div ref="pagination" class="prestige-distance__progress" aria-hidden="true" />
  </section>
</template>

<script setup lang="ts">
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import type { ProjectDistanceSlide } from "~/data/project-distance-slides";

defineProps<{ slides: ProjectDistanceSlide[] }>();

const root = ref<HTMLElement | null>(null);
const prevButton = ref<HTMLElement | null>(null);
const nextButton = ref<HTMLElement | null>(null);
const pagination = ref<HTMLElement | null>(null);
let distanceSwiper: Swiper | undefined;

onMounted(() => {
  const swiperElement = root.value?.querySelector<HTMLElement>(".prestige-distance__swiper");
  if (!swiperElement || !prevButton.value || !nextButton.value || !pagination.value) return;

  distanceSwiper = new Swiper(swiperElement, {
    modules: [Autoplay, Navigation, Pagination],
    centeredSlides: true,
    loop: true,
    speed: 900,
    grabCursor: true,
    slidesPerView: 1.12,
    spaceBetween: 14,
    autoplay: {
      delay: 3200,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    navigation: {
      prevEl: prevButton.value,
      nextEl: nextButton.value,
    },
    pagination: {
      el: pagination.value,
      type: "progressbar",
    },
    breakpoints: {
      640: { slidesPerView: 1.65, spaceBetween: 18 },
      992: { slidesPerView: 2.85, spaceBetween: 18 },
      1400: { slidesPerView: 3.5, spaceBetween: 20 },
    },
  });
});

onBeforeUnmount(() => {
  distanceSwiper?.destroy(true, true);
  distanceSwiper = undefined;
});
</script>

<style scoped>
.prestige-distance {
  position: relative;
  left: 50%;
  width: 100vw;
  max-width: 1480px;
  margin: 0 0 clamp(70px, 7vw, 110px);
  padding: 18px 0 40px;
  overflow: hidden;
  background: #000;
  transform: translateX(-50%);
}
.prestige-distance__swiper { overflow: visible; }
.prestige-distance__slide {
  height: clamp(360px, 29vw, 500px);
  opacity: 0.38;
  transform: scale(0.9);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
.prestige-distance__slide.swiper-slide-active {
  z-index: 2;
  opacity: 1;
  transform: scale(1);
}
.prestige-distance__card {
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  background: #101116;
}
.prestige-distance__card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 5.5s ease;
}
.prestige-distance__slide.swiper-slide-active img { transform: scale(1.04); }
.prestige-distance__card-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.03) 35%, rgba(4, 5, 7, 0.32) 62%, rgba(4, 5, 7, 0.96) 100%);
}
.prestige-distance__copy {
  position: absolute;
  right: 28px;
  bottom: 30px;
  left: 28px;
  text-align: center;
}
.prestige-distance__copy span {
  display: block;
  margin-bottom: 8px;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.68);
}
.prestige-distance__copy h3 {
  margin: 0;
  font-size: clamp(15px, 2vw, 15px);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: 0.02em;
  color: #fff;
}
.prestige-distance__slide.swiper-slide-active .prestige-distance__copy span,
.prestige-distance__slide.swiper-slide-active .prestige-distance__copy h3 { color: #f28bd7; }
.prestige-distance__edge {
  position: absolute;
  top: 0;
  bottom: 30px;
  z-index: 3;
  width: min(16vw, 260px);
  pointer-events: none;
}
.prestige-distance__edge--left { left: 0; background: linear-gradient(90deg, #000 10%, rgba(0, 0, 0, 0)); }
.prestige-distance__edge--right { right: 0; background: linear-gradient(270deg, #000 10%, rgba(0, 0, 0, 0)); }
.prestige-distance__arrow {
  position: absolute;
  top: 50%;
  z-index: 5;
  display: grid;
  width: 58px;
  height: 58px;
  place-items: center;
  padding: 0;
  border: 1px solid rgba(242, 139, 215, 0.8);
  border-radius: 50%;
  background: rgba(24, 11, 24, 0.72);
  color: #f28bd7;
  box-shadow: 0 0 22px rgba(226, 75, 185, 0.25);
  cursor: pointer;
  transform: translateY(-50%);
  transition: color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}
.prestige-distance__arrow svg { width: 25px; height: 25px; }
.prestige-distance__arrow--prev { left: clamp(18px, 3vw, 58px); }
.prestige-distance__arrow--next { right: clamp(18px, 3vw, 58px); }
.prestige-distance__arrow:hover,
.prestige-distance__arrow:focus-visible {
  background: #f28bd7;
  color: #0a070a;
  box-shadow: 0 0 30px rgba(226, 75, 185, 0.48);
  outline: none;
}
.prestige-distance__progress {
  position: absolute;
  top: auto;
  right: 25%;
  bottom: 4px;
  left: 25%;
  z-index: 5;
  height: 4px;
  overflow: hidden;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.17);
}
.prestige-distance__progress :deep(.swiper-pagination-progressbar-fill) { background: #ed64ca; }

@media (max-width: 767.98px) {
  .prestige-distance { padding-top: 8px; }
  .prestige-distance__slide { height: 400px; }
  .prestige-distance__edge { width: 10vw; }
  .prestige-distance__arrow { width: 46px; height: 46px; }
  .prestige-distance__arrow--prev { left: 12px; }
  .prestige-distance__arrow--next { right: 12px; }
  .prestige-distance__progress { right: 12%; left: 12%; }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-distance__slide,
  .prestige-distance__card img,
  .prestige-distance__arrow { transition-duration: 0.01ms; }
}
.prestige-distance__progress {
	display: none !important;
}
</style>
