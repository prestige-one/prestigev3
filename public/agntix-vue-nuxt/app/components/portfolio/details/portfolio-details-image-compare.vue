<template>
  <div class="tp-pd-6-hero-ptb z-index-1 pt-100">
    <div class="container-fluid">
      <div class="tp-pd-6-hero-wrapper">
        <div class="row">
          <!-- LEFT (heading + progress) -->
          <div class="col-lg-3 col-md-6 order-2 order-lg-1">
            <div class="tp-pd-6-hero-heading pt-100 pb-80">
              <h3 class="tp-pd-6-hero-title">Simple Logistics</h3>
              <p>Studio focusing on designing and <br>
                developing advanced and intuitive <br>
                mobile ecosystems.</p>

              <div :class="isDark ? 'tp-pd-6-hero-btn' : 'tp-pd-6-hero-btn-wrap'">
                <a class="tp-portfolio-details-btn" href="#">Visit Site
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <!-- Progress Circle -->
            <div class="tp-pd-6-hero-progress d-none d-lg-block">
              <div class="progress-circle">
                <svg viewBox="0 0 36 36" class="progress-svg" aria-hidden="true">
                  <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path ref="circlePath" class="circle" :stroke-dasharray="`${progressPercent}, 100`" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <text x="18" y="20.35" class="percentage-text" text-anchor="middle" font-size="4">
                    {{ progressPercent }}%
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <!-- CENTER (Swiper) -->
          <div class="col-lg-6 col-md-12 order-1 order-lg-2">
            <div class="tp-pd-6-hero-slider-wrapper">
              <ClientOnly>
                <Swiper
                  ref="swiperRef"
                  :modules="swiperModules"
                  :direction="direction"
                  :slides-per-view="slidesPerView"
                  :space-between="30"
                  :loop="true"
                  :mousewheel="mousewheelOptions"
                  :grab-cursor="true"
                  :class="['tp-pd-6-hero-swiper', { 'is-vertical': direction === 'vertical' }]"
                  @swiper="onSwiperInit"
                  @slide-change="onSlideChange"
                >
                  <SwiperSlide
                    v-for="(img, idx) in images"
                    :key="idx"
                    class="tp-pd-6-hero-slider-thumb"
                  >
                    <img :src="img.src" alt="image">
                  </SwiperSlide>
                </Swiper>
              </ClientOnly>
            </div>
          </div>

          <!-- RIGHT (info) -->
          <div class="col-lg-3 col-md-6 order-3 order-lg-3">
            <div class="tp-pd-6-hero-wrap">
              <div class="tp-pd-6-hero-content pb-100">
                <div class="tp-pd-6-hero-fraction">
                  <div id="slider-counter">
                    <span id="current-slide">{{ currentSlide }}</span>
                    <span class="ml-10">/</span>
                    <span id="total-slides">{{ totalSlides }}</span>
                  </div>
                </div>
                <div class="tp-pd-6-hero-info-box">
                  <div class="tp-pd-6-hero-info-item mb-20"><span>Client</span><h5>Envato Market</h5></div>
                  <div class="tp-pd-6-hero-info-item mb-20"><span>Role</span><h5>full stack dev/ motion</h5></div>
                  <div class="tp-pd-6-hero-info-item mb-20"><span>Date</span><h5>8 March 2025</h5></div>
                  <div class="tp-pd-6-hero-info-item mb-20"><span>Awards</span><h5>FWA of the day</h5></div>
                </div>
              </div>

              <div class="tp-pd-6-hero-thumb p-relative d-none d-lg-block">
                <div class="tp-pd-6-hero-thumb-text">
                  <span class="text-1">02</span>
                  <span class="text-2">2025</span>
                </div>
                <img src="/img/portfolio/portfolio-details-6/portfolio-details-author.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type SwiperType from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel } from 'swiper/modules';
import { ref, onMounted, onBeforeUnmount } from 'vue';
const { isDark } = useIsDark();

// images
interface ImageData { src: string; }
const images: ImageData[] = [
  { src: '/img/portfolio/portfolio-details-6/portfolio-details-thumb-1.jpg' },
  { src: '/img/portfolio/portfolio-details-6/portfolio-details-thumb-2.jpg' },
  { src: '/img/portfolio/portfolio-details-6/portfolio-details-thumb-3.jpg' },
  { src: '/img/portfolio/portfolio-details-6/portfolio-details-thumb-4.jpg' },
  { src: '/img/portfolio/portfolio-details-6/portfolio-details-thumb-5.jpg' },
];

const swiperModules = [Mousewheel];
const swiperRef = ref<SwiperType | null>(null);

const direction = ref<'vertical' | 'horizontal'>(window.innerWidth >= 992 ? 'vertical' : 'horizontal');
const slidesPerView = ref<number>(window.innerWidth >= 992 ? 2 : 1);
const mousewheelOptions = { forceToAxis: true, releaseOnEdges: true };

const currentSlide = ref(1);
const totalSlides = ref(images.length);

// progress
const progressPercent = ref(0);
let animFrame = 0;
let lastRenderedPercent = 0;

function animateProgressTo(target: number) {
  cancelAnimationFrame(animFrame);
  const step = () => {
    const diff = target - lastRenderedPercent;
    if (Math.abs(diff) < 0.5) {
      lastRenderedPercent = target;
    } else {
      lastRenderedPercent += diff * 0.22;
    }
    progressPercent.value = Math.round(lastRenderedPercent);
    if (Math.round(lastRenderedPercent) !== Math.round(target)) {
      animFrame = requestAnimationFrame(step);
    }
  };
  animFrame = requestAnimationFrame(step);
}

// ✅ FIXED VERSION for loop:true compatibility
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function computeProgressForSwiper(swiper: any) {
  if (!swiper) return;

  // use original image count (ignore duplicated slides)
  const total = images?.length ?? (swiper.slides ? swiper.slides.length : 0);
  totalSlides.value = total;

  // numeric slidesPerView
  let spv = Number(swiper.params?.slidesPerView ?? slidesPerView.value);
  if (!Number.isFinite(spv) || spv <= 0) spv = slidesPerView.value || 1;
  spv = Math.max(1, Math.floor(spv));

  // when loop enabled, use realIndex
  const isLoop = !!swiper.params?.loop;
  const logicalIndex = isLoop
    ? (typeof swiper.realIndex === 'number' ? swiper.realIndex : 0)
    : (typeof swiper.activeIndex === 'number' ? swiper.activeIndex : 0);

  const maxActiveIndex = Math.max(0, total - spv);
  const active = Math.min(Math.max(0, logicalIndex), maxActiveIndex);

  // counter shows first visible slide
  currentSlide.value = active + 1;

  // progress uses last visible slide
  const visibleEndIndex = Math.min(active + spv - 1, total - 1);
  const percent = total <= 1 ? 100 : Math.round((visibleEndIndex / (total - 1)) * 100);
  animateProgressTo(percent);
}

function onSwiperInit(swiper: SwiperType) {
  swiperRef.value = swiper;
  swiper.params.slidesPerView = slidesPerView.value;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((swiper as any).changeDirection) (swiper as any).changeDirection(direction.value);
  computeProgressForSwiper(swiper);
}

function onSlideChange() {
  if (!swiperRef.value) return;
  computeProgressForSwiper(swiperRef.value);
}

function handleResize() {
  const wantVertical = window.innerWidth >= 992;
  const wantSlides = wantVertical ? 2 : 1;
  const newDir = wantVertical ? 'vertical' : 'horizontal';

  if (direction.value !== newDir) {
    direction.value = newDir;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (swiperRef.value && (swiperRef.value as any).changeDirection) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (swiperRef.value as any).changeDirection(direction.value);
    }
  }

  if (slidesPerView.value !== wantSlides) {
    slidesPerView.value = wantSlides;
    if (swiperRef.value) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (swiperRef.value as any).params.slidesPerView = wantSlides;
      swiperRef.value.update();
      computeProgressForSwiper(swiperRef.value);
    }
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize, { passive: true });
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animFrame);
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.tp-pd-6-hero-swiper { width: 100%; min-height: 420px; max-height: 780px; }
.tp-pd-6-hero-swiper .swiper-wrapper { align-items: center; }
.tp-pd-6-hero-swiper .swiper-slide { height:auto !important; }
.tp-pd-6-hero-swiper img { width:100%; height:auto; border-radius:18px; display:block; }
</style>
