<template>
  <section class="prestige-drives-v4" aria-labelledby="prestige-drives-v4-title">
    <div id="port-showcase-slider-main" class="prestige-drives-v4-stage">
      <div
        id="showcase-slider-holder"
        class="prestige-drives-v4-holder"
        data-pattern-img="/img/webgl/1.jpg"
      >
        <Swiper
          id="trigger-slides"
          class="prestige-drives-v4-swiper"
          direction="horizontal"
          :slides-per-view="1"
          :speed="1000"
          effect="fade"
          :fade-effect="{ crossFade: true }"
          :loop="true"
          :mousewheel="false"
          :simulate-touch="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: false }"
          :navigation="{ nextEl: '.prestige-drives-v4-next', prevEl: '.prestige-drives-v4-prev' }"
          :pagination="{ el: '.prestige-drives-v4-pagination', clickable: true }"
          :modules="[Navigation, Pagination, Autoplay, EffectFade]"
          @slide-prev-transition-start="slidePrevTransitionStart"
          @slide-next-transition-start="slideNextTransitionStart"
        >
          <SwiperSlide v-for="(principle, index) in principles" :key="principle.title">
            <div class="slide-wrap" :class="{ active: index === 0 }" :data-slide="index" />
            <article class="prestige-drives-v4-content">
              <span class="prestige-drives-v4-eyebrow">{{ t('ap.drives.eyebrow') }}</span>
              <h2 v-if="index === 0" id="prestige-drives-v4-title" class="prestige-drives-v4-section-title">
                {{ t('ap.drives.title') }}
              </h2>
              <p v-else class="prestige-drives-v4-section-title" aria-hidden="true">
                {{ t('ap.drives.title') }}
              </p>
              <h3>{{ principle.title }}</h3>
              <p class="prestige-drives-v4-description">{{ principle.description }}</p>
            </article>
          </SwiperSlide>
        </Swiper>

        <div class="prestige-drives-v4-controls">
          <button class="prestige-drives-v4-prev" type="button" aria-label="Previous slide">Prev</button>
          <div class="prestige-drives-v4-pagination tp-slider-dot" />
          <button class="prestige-drives-v4-next" type="button" aria-label="Next slide">Next</button>
        </div>
      </div>
    </div>

    <div id="canvas-slider" ref="webGLContainerRef" class="prestige-drives-v4-canvas" aria-hidden="true">
      <div v-for="(principle, index) in principles" :key="principle.image" class="slider-img" :data-slide="index">
        <img class="slide-img" :src="principle.image" alt="">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import WebGL from "~/utils/webgl";

interface PrestigeDrivePrinciple {
  title: string;
  description: string;
  image: string;
}

const { t } = useI18n();
const webGLContainerRef = ref<HTMLElement | null>(null);
let webGLInstance: InstanceType<typeof WebGL> | null = null;

const principles = computed<PrestigeDrivePrinciple[]>(() => [
  { title: t("ap.drives.p1Title"), description: t("ap.drives.p1Desc"), image: "/assets/images/v3/MADE-AROUND-PEOPLE.webp" },
  { title: t("ap.drives.p2Title"), description: t("ap.drives.p2Desc"), image: "/assets/images/v3/Every-Detail-Has-a-purpose.webp" },
  { title: t("ap.drives.p3Title"), description: t("ap.drives.p3Desc"), image: "/assets/images/v2/project-featured-images/sanctuary/sanctuary-residential-exterior-view.webp" },
  { title: t("ap.drives.p4Title"), description: t("ap.drives.p4Desc"), image: "/assets/images/v3/Designed-Around-Life-3.webp" },
]);

onMounted(() => {
  if (!webGLContainerRef.value) return;
  webGLInstance = new WebGL({ vertex: verTextFragment().vertex, fragment: verTextFragment().fragment });
  addEvents(webGLInstance as never);
});

onBeforeUnmount(() => {
  webGLInstance?.stop();
  webGLInstance = null;
});
</script>

<style scoped>
.prestige-drives-v4 {
  position: relative;
  height: clamp(440px, 58vh, 580px);
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  background: #080a0d;
  isolation: isolate;
}

.prestige-drives-v4-stage,
.prestige-drives-v4-holder,
.prestige-drives-v4-swiper {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
}

/* The original showcase is a full-page experience. These ID-qualified
   overrides keep its WebGL machinery contained within this section. */
#showcase-slider-holder.prestige-drives-v4-holder {
  height: 100%;
}

.prestige-drives-v4-content {
  position: absolute;
  z-index: 3;
  right: 24px;
  bottom: clamp(70px, 9vh, 96px);
  left: 24px;
  width: min(760px, calc(100% - 48px));
  margin: 0 auto;
  padding: 0;
  text-align: center;
}

.prestige-drives-v4-eyebrow {
  display: block;
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.64);
}

.prestige-drives-v4-section-title {
  margin: 0 0 18px;
  font-size: clamp(12px, 1vw, 15px);
  font-weight: 500;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.72);
  text-transform: uppercase;
}

.prestige-drives-v4-content h3 {
  max-width: 760px;
  margin: 0 auto 14px;
  font-size: clamp(28px, 3.2vw, 46px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: #fff;
  text-transform: uppercase;
}

.prestige-drives-v4-description {
  max-width: 640px;
  margin: 0 auto;
  font-size: clamp(13px, 1vw, 16px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.76);
}

#canvas-slider.prestige-drives-v4-canvas {
  position: absolute;
  z-index: 1;
  inset: 0;
  width: 100%;
  height: 100%;
}

.prestige-drives-v4-canvas::after {
  position: absolute;
  z-index: 2;
  inset: 0;
  content: "";
  pointer-events: none;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.82) 0%,
    rgba(0, 0, 0, 0.46) 28%,
    rgba(0, 0, 0, 0.14) 48%,
    transparent 68%
  );
}

.prestige-drives-v4-canvas :deep(canvas) {
  width: 100% !important;
  height: 100% !important;
}

.slider-img {
  position: absolute;
  visibility: hidden;
  opacity: 0;
}

.prestige-drives-v4-controls {
  position: absolute;
  z-index: 5;
  right: clamp(24px, 6vw, 96px);
  bottom: clamp(24px, 5vw, 64px);
  left: clamp(24px, 6vw, 96px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 22px;
}

.prestige-drives-v4-controls button {
  padding: 8px 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: #fff;
  text-transform: uppercase;
}

.prestige-drives-v4-pagination {
  width: auto !important;
}

.prestige-drives-v4-pagination :deep(.swiper-pagination-bullet) {
  width: 7px;
  height: 7px;
  margin: 0 5px;
  background: #fff;
  opacity: 0.4;
}

.prestige-drives-v4-pagination :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

@media (max-width: 767.98px) {
  .prestige-drives-v4 {
    height: 500px;
  }

  .prestige-drives-v4-content {
    right: 18px;
    bottom: 68px;
    left: 18px;
    width: auto;
    padding: 0;
  }

  .prestige-drives-v4-section-title {
    margin-bottom: 14px;
  }

  .prestige-drives-v4-controls {
    right: 24px;
    bottom: 24px;
    left: 24px;
  }
}

</style>
