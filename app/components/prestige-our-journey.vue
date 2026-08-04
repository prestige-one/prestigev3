<template>
  <section class="prestige-journey-area pt-40 pb-80">
    <div class="container container-1430">
      <header class="prestige-journey-header">
        <span class="prestige-journey-eyebrow">{{ t('ap.journey.eyebrow') }}</span>
        <h2 class="prestige-journey-title tp_reveal_anim" data-delay="0.05">
          {{ t('ap.journey.title') }}
        </h2>
      </header>

      <div ref="root" class="prestige-journey-slider">
        <div class="swiper prestige-journey-swiper">
          <div class="swiper-wrapper">
            <div v-for="m in milestones" :key="m.year" class="swiper-slide">
              <article class="prestige-journey-card">
                <div class="prestige-journey-thumb">
                  <img :src="m.image" :alt="`${m.year} - ${m.title}`" loading="lazy">
                  <div class="prestige-journey-overlay" />
                  <span class="prestige-journey-year">{{ m.year }}</span>
                </div>
                <h3 class="prestige-journey-heading">{{ m.title }}</h3>
                <p class="prestige-journey-desc">{{ m.text }}</p>
              </article>
            </div>
          </div>
        </div>

        <div class="prestige-journey-nav">
          <button ref="prevBtn" class="prestige-journey-arrow" type="button" :aria-label="t('ap.journey.prev')">
            <span aria-hidden="true">‹</span>
          </button>
          <button ref="nextBtn" class="prestige-journey-arrow" type="button" :aria-label="t('ap.journey.next')">
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

interface Milestone {
  year: string;
  title: string;
  text: string;
  image: string;
}

const { t } = useI18n();

const milestones = computed<Milestone[]>(() => [
  { year: "1967", title: t("ap.journey.m1Title"), text: t("ap.journey.m1Text"), image: "/assets/images/v3/timeline/saifi-group.webp" },
  { year: "2007", title: t("ap.journey.m2Title"), text: t("ap.journey.m2Text"), image: "/assets/images/v3/timeline/2007.webp" },
  { year: "2009", title: t("ap.journey.m3Title"), text: t("ap.journey.m3Text"), image: "/assets/images/v3/timeline/2009-expanding.webp" },
  { year: "2018", title: t("ap.journey.m4Title"), text: t("ap.journey.m4Text"), image: "/assets/images/v3/timeline/2018-invest.webp" },
  { year: "2022", title: t("ap.journey.m5Title"), text: t("ap.journey.m5Text"), image: "/assets/images/v3/timeline/2022-recognized.webp" },
  { year: "2023", title: t("ap.journey.m6Title"), text: t("ap.journey.m6Text"), image: "/assets/images/v3/timeline/2023.webp" },
  { year: "2024", title: t("ap.journey.m7Title"), text: t("ap.journey.m7Text"), image: "/assets/images/v3/timeline/2024-sponsor.webp" },
  { year: "2025", title: t("ap.journey.m8Title"), text: t("ap.journey.m8Text"), image: "/assets/images/v3/timeline/2025-global.webp" },
  { year: "2026", title: t("ap.journey.m9Title"), text: t("ap.journey.m9Text"), image: "/assets/images/v3/timeline/2026.webp" },
]);

const root = ref<HTMLElement | null>(null);
const prevBtn = ref<HTMLElement | null>(null);
const nextBtn = ref<HTMLElement | null>(null);

onMounted(() => {
  const el = root.value?.querySelector<HTMLElement>(".swiper");
  if (!el || !prevBtn.value || !nextBtn.value) return;
  new Swiper(el, {
    modules: [Navigation, Autoplay],
    slidesPerView: 1.15,
    spaceBetween: 22,
    loop: true,
    speed: 800,
    grabCursor: true,
    autoplay: { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
    navigation: { prevEl: prevBtn.value, nextEl: nextBtn.value },
    breakpoints: {
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1400: { slidesPerView: 4 },
    },
  });
});
</script>

<style scoped>
.prestige-journey-area {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.prestige-journey-header {
  position: relative;
  margin: 0 auto clamp(34px, 4vw, 52px);
  text-align: center;
}
.prestige-journey-eyebrow {
  display: block;
  margin-bottom: 18px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.55);
}
.prestige-journey-title {
  margin: 0 auto;
  font-size: clamp(25px, 2.3vw, 40px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -1px;
  color: #fff;
}

.prestige-journey-slider {
  position: relative;
}
.prestige-journey-swiper {
  overflow: hidden;
}
.swiper-slide {
  height: auto;
}
.prestige-journey-card {
  height: 100%;
}
.prestige-journey-thumb {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: #101013;
}
.prestige-journey-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.prestige-journey-card:hover .prestige-journey-thumb img {
  transform: scale(1.05);
}
.prestige-journey-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 45%, rgba(0, 0, 0, 0.72) 100%);
}
/* silver-metallic year badge on the image */
.prestige-journey-year {
  position: absolute;
  left: 18px;
  bottom: 14px;
  z-index: 2;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(28px, 2.6vw, 40px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.5px;
  color: transparent;
  background: linear-gradient(180deg, #f8fcff 0%, #b7cad7 22%, #819bab 23%, #edf8ff 46%, #7896aa 47%, #eaf6ff 79%, #9bb4c5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(232, 245, 253, 0.9);
}
.prestige-journey-heading {
  margin: 20px 0 8px;
  font-size: clamp(16px, 1.4vw, 20px);
  font-weight: 500;
  letter-spacing: -0.2px;
  color: #fff;
  text-transform: uppercase;
}
.prestige-journey-desc {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.66);
}

/* prev / next controls */
.prestige-journey-nav {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: clamp(26px, 3vw, 40px);
}
.prestige-journey-arrow {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
  font-size: 26px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
}
.prestige-journey-arrow span { transform: translateY(-2px); }
.prestige-journey-arrow:hover {
  background: #fff;
  color: #0b0b0d;
  border-color: #fff;
  transform: translateY(-2px);
}

@media (max-width: 767.98px) {
  .prestige-journey-area {
    padding-top: 70px;
    padding-bottom: 90px;
  }
}
</style>
