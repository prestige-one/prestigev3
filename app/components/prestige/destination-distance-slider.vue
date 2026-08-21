<template>
  <section
    ref="root"
    class="prestige-destination-distance-mobile"
    aria-label="Driving Distances"
  >
    <h2 class="prestige-destination-distance-mobile__title">Driving Distances</h2>

    <div
      class="prestige-destination-distance-mobile__viewport"
      @pointerdown="onPointerDown"
      @pointerup="onPointerUp"
      @pointercancel="onPointerCancel"
    >
      <div
        class="prestige-destination-distance-mobile__track"
        :style="{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }"
        aria-live="off"
      >
        <div
          v-for="(slide, index) in slides"
          :key="slide.image"
          class="prestige-destination-distance-mobile__slide"
          :aria-hidden="index !== activeIndex"
        >
          <img
            :src="slide.image"
            :alt="slide.alt"
            loading="lazy"
            draggable="false"
          >
        </div>
      </div>
    </div>

    <div v-if="slides.length > 1" class="prestige-destination-distance-mobile__dots">
      <button
        v-for="(_, index) in slides"
        :key="index"
        type="button"
        class="prestige-destination-distance-mobile__dot"
        :class="{ 'is-active': index === activeIndex }"
        :aria-label="`Show driving distance ${index + 1}`"
        :aria-current="index === activeIndex ? 'true' : undefined"
        @click="selectSlide(index)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { DestinationDistanceSlide } from "~/data/destination-distance-slides";

const props = defineProps<{ slides: DestinationDistanceSlide[] }>();

const AUTOPLAY_DELAY_MS = 3200;
const SWIPE_THRESHOLD_PX = 42;
const root = ref<HTMLElement | null>(null);
const activeIndex = ref(0);
let autoplayTimer: ReturnType<typeof setInterval> | undefined;
let intersectionObserver: IntersectionObserver | undefined;
let mobileQuery: MediaQueryList | undefined;
let reducedMotionQuery: MediaQueryList | undefined;
let isVisible = false;
let pointerStartX: number | undefined;

function stopAutoplay(): void {
  if (autoplayTimer) clearInterval(autoplayTimer);
  autoplayTimer = undefined;
}

function canAutoplay(): boolean {
  return Boolean(
    props.slides.length > 1
    && mobileQuery?.matches
    && !reducedMotionQuery?.matches
    && isVisible
    && !document.hidden,
  );
}

function startAutoplay(): void {
  stopAutoplay();
  if (!canAutoplay()) return;
  autoplayTimer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % props.slides.length;
  }, AUTOPLAY_DELAY_MS);
}

function selectSlide(index: number): void {
  activeIndex.value = index;
  startAutoplay();
}

function onPointerDown(event: PointerEvent): void {
  pointerStartX = event.clientX;
  stopAutoplay();
}

function onPointerUp(event: PointerEvent): void {
  if (pointerStartX === undefined || props.slides.length < 2) {
    pointerStartX = undefined;
    startAutoplay();
    return;
  }

  const distance = event.clientX - pointerStartX;
  if (Math.abs(distance) >= SWIPE_THRESHOLD_PX) {
    const direction = distance < 0 ? 1 : -1;
    activeIndex.value = (activeIndex.value + direction + props.slides.length) % props.slides.length;
  }
  pointerStartX = undefined;
  startAutoplay();
}

function onPointerCancel(): void {
  pointerStartX = undefined;
  startAutoplay();
}

function syncAutoplay(): void {
  startAutoplay();
}

onMounted(() => {
  mobileQuery = window.matchMedia("(max-width: 767.98px)");
  reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mobileQuery.addEventListener("change", syncAutoplay);
  reducedMotionQuery.addEventListener("change", syncAutoplay);
  document.addEventListener("visibilitychange", syncAutoplay);

  if (root.value && "IntersectionObserver" in window) {
    intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = Boolean(entry?.isIntersecting);
      startAutoplay();
    }, { threshold: 0.1 });
    intersectionObserver.observe(root.value);
  } else {
    isVisible = true;
    startAutoplay();
  }
});

onBeforeUnmount(() => {
  stopAutoplay();
  intersectionObserver?.disconnect();
  mobileQuery?.removeEventListener("change", syncAutoplay);
  reducedMotionQuery?.removeEventListener("change", syncAutoplay);
  document.removeEventListener("visibilitychange", syncAutoplay);
});
</script>

<style scoped>
.prestige-destination-distance-mobile {
  display: none;
}

@media (max-width: 767.98px) {
  .prestige-destination-distance-mobile {
    display: block;
    overflow: hidden;
    padding: 42px 18px 48px;
    background: #000;
  }

  .prestige-destination-distance-mobile__title {
    margin: 0 0 22px;
    color: #fff;
    font-size: clamp(25px, 8vw, 30px);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: 0;
    text-align: center;
  }

  .prestige-destination-distance-mobile__viewport {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    touch-action: pan-y;
  }

  .prestige-destination-distance-mobile__viewport::before,
  .prestige-destination-distance-mobile__viewport::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    width: clamp(24px, 10vw, 46px);
    pointer-events: none;
  }

  .prestige-destination-distance-mobile__viewport::before {
    left: 0;
    background: linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0) 100%);
  }

  .prestige-destination-distance-mobile__viewport::after {
    right: 0;
    background: linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0) 100%);
  }

  .prestige-destination-distance-mobile__track {
    display: flex;
    will-change: transform;
    transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .prestige-destination-distance-mobile__slide {
    flex: 0 0 100%;
    min-width: 0;
  }

  .prestige-destination-distance-mobile__slide img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 400 / 710;
    object-fit: contain;
    background: #05080d;
  }

  .prestige-destination-distance-mobile__dots {
    display: flex;
    justify-content: center;
    gap: 9px;
    margin-top: 18px;
  }

  .prestige-destination-distance-mobile__dot {
    width: 7px;
    height: 7px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.35);
    transition: width 250ms ease, border-radius 250ms ease, background-color 250ms ease;
  }

  .prestige-destination-distance-mobile__dot.is-active {
    width: 24px;
    border-radius: 999px;
    background: #fff;
  }
}

@media (max-width: 767.98px) and (prefers-reduced-motion: reduce) {
  .prestige-destination-distance-mobile__track,
  .prestige-destination-distance-mobile__dot {
    transition-duration: 0.01ms;
  }
}
</style>
