<template>
  <section class="prestige-amen-showcase">
    <div class="prestige-amen-showcase__media" aria-hidden="true">
      <Transition name="prestige-amen-showcase-image">
        <img :key="activeImage" :src="activeImage" :alt="activeAmenity" class="prestige-amen-showcase__image">
      </Transition>
    </div>
    <div class="prestige-amen-showcase__veil" aria-hidden="true" />

    <div class="prestige-amen-showcase__inner container container-1430">
      <div class="prestige-amen-showcase__content">
        <span class="prestige-amen-showcase__eyebrow">{{ eyebrow }}</span>
        <h2 class="prestige-amen-showcase__title">{{ title }}</h2>
        <p v-if="lead" class="prestige-amen-showcase__lead">{{ lead }}</p>

        <div class="prestige-amen-showcase__list" aria-label="Amenities">
          <button
            v-for="(amenity, index) in items"
            :key="amenity"
            type="button"
            class="prestige-amen-showcase__item"
            :class="{ 'prestige-amen-showcase__item--active': index === activeIndex }"
            :aria-current="index === activeIndex ? 'true' : undefined"
            @mouseenter="selectAmenity(index)"
            @focus="selectAmenity(index)"
            @click="selectAmenity(index)"
          >
            <span class="prestige-amen-showcase__marker" aria-hidden="true" />
            <span class="prestige-amen-showcase__number">{{ pad(index + 1) }}</span>
            <span class="prestige-amen-showcase__name">{{ amenity }}</span>
          </button>
        </div>
      </div>

      <button type="button" class="prestige-amen-showcase__next" :aria-label="`Show next amenity after ${activeAmenity}`" @click="showNext">
        <span>View amenity</span>
        <span class="prestige-amen-showcase__next-line" aria-hidden="true" />
        <span class="prestige-amen-showcase__counter">
          {{ pad(activeIndex + 1) }} <small>/</small> {{ pad(items.length) }}
        </span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const defaultImages = [
  "/assets/images/v2/project-featured-images/sanctuary/Rooftop-Pool-scaled.jpg",
  "/assets/images/v2/project-featured-images/sanctuary/8.-Residential-Amenities-Gym-Level-9-Option-1-scaled.jpg",
  "/assets/images/v3/Designed-Around-Life.webp",
  "/assets/images/v2/pages/pages-internal-images/apartment-inside/Lobby-2-1200x900.webp",
  "/assets/images/v3/projects-hero-cover.webp",
  "/assets/images/v2/pages/pages-internal-images/apartment-inside/04-Kids-Play-Area-scaled.webp",
  "/assets/images/v2/pages/pages-internal-images/apartment-inside/Owners-lounge_Final_4.webp",
  "/assets/images/v2/pages/pages-internal-images/apartment-inside/fauchon-Dining.webp",
];

const props = withDefaults(defineProps<{
  items: string[];
  eyebrow: string;
  title: string;
  lead?: string;
  images?: string[];
  autoplayDelay?: number;
}>(), {
  lead: "",
  images: () => [],
  autoplayDelay: 3000,
});

const activeIndex = ref(0);
let autoplayTimer: ReturnType<typeof setInterval> | undefined;
let reduceMotion = false;

const imageSet = computed(() => props.images.length ? props.images : defaultImages);
const activeImage = computed(() => imageSet.value[activeIndex.value % imageSet.value.length] ?? "");
const activeAmenity = computed(() => props.items[activeIndex.value] ?? "Amenity");
const pad = (value: number) => String(value).padStart(2, "0");

function pauseAutoplay() {
  if (!autoplayTimer) return;
  clearInterval(autoplayTimer);
  autoplayTimer = undefined;
}

function showNext() {
  if (props.items.length) activeIndex.value = (activeIndex.value + 1) % props.items.length;
}

function startAutoplay() {
  pauseAutoplay();
  if (!reduceMotion && props.items.length > 1) autoplayTimer = setInterval(showNext, props.autoplayDelay);
}

function selectAmenity(index: number) {
  activeIndex.value = index;
}

onMounted(() => {
  reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  startAutoplay();
});

onBeforeUnmount(pauseAutoplay);
</script>

<style scoped>
.prestige-amen-showcase {
  position: relative;
  isolation: isolate;
  min-height: clamp(720px, 52vw, 920px);
  overflow: hidden;
  background: #08090b;
  color: #fff;
}
.prestige-amen-showcase__media,
.prestige-amen-showcase__image,
.prestige-amen-showcase__veil { position: absolute; inset: 0; }
.prestige-amen-showcase__media { z-index: -2; overflow: hidden; background: #0c0d0f; }
.prestige-amen-showcase__image { width: 100%; height: 100%; object-fit: cover; object-position: center; }
.prestige-amen-showcase__veil {
  z-index: -1;
  background:
    linear-gradient(90deg, rgba(4, 5, 7, 0.99) 0%, rgba(4, 5, 7, 0.94) 21%, rgba(4, 5, 7, 0.64) 38%, rgba(4, 5, 7, 0.14) 64%, rgba(4, 5, 7, 0.08) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.32));
}
.prestige-amen-showcase__inner {
  position: relative;
  display: flex;
  min-height: inherit;
  align-items: center;
  justify-content: space-between;
  padding-top: clamp(70px, 7vw, 118px);
  padding-bottom: clamp(58px, 6vw, 98px);
}
.prestige-amen-showcase__content { width: min(100%, 540px); }
.prestige-amen-showcase__eyebrow {
  display: block;
  margin-bottom: 24px;
  font-size: 13px;
  line-height: 1;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.88);
}
.prestige-amen-showcase__title {
  max-width: 520px;
  margin: 0;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(38px, 4vw, 35px) !important;
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: #fff;
}
.prestige-amen-showcase__lead {
  max-width: 420px;
  margin: 28px 0 30px;
  font-size: clamp(15px, 1.15vw, 18px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.68);
}
.prestige-amen-showcase__list { display: grid; max-width: 500px; gap: 1px; }
.prestige-amen-showcase__item {
  position: relative;
  display: grid;
  width: 100%;
  min-height: 49px;
  grid-template-columns: 4px 52px minmax(0, 1fr);
  align-items: center;
  padding: 5px 0;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.58);
  text-align: left;
  cursor: pointer;
  transition: color 0.35s ease;
}
.prestige-amen-showcase__marker { width: 1px; height: 0; background: #fff; transition: height 0.35s ease; }
.prestige-amen-showcase__number { padding-left: 18px; font-size: 17px; font-variant-numeric: tabular-nums; }
.prestige-amen-showcase__name { padding-left: 4px; font-size: clamp(15px, 1.15vw, 18px); line-height: 1.3; }
.prestige-amen-showcase__item--active,
.prestige-amen-showcase__item:hover,
.prestige-amen-showcase__item:focus-visible { color: #fff; outline: none; }
.prestige-amen-showcase__item--active .prestige-amen-showcase__marker,
.prestige-amen-showcase__item:hover .prestige-amen-showcase__marker,
.prestige-amen-showcase__item:focus-visible .prestige-amen-showcase__marker { height: 34px; }
.prestige-amen-showcase__next {
  position: absolute;
  right: 12px;
  bottom: clamp(38px, 5vw, 72px);
  display: grid;
  width: min(350px, 34vw);
  grid-template-columns: auto minmax(50px, 1fr) auto;
  align-items: center;
  gap: 20px;
  padding: 8px 0;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.88);
  font-size: 13px;
  text-align: left;
  cursor: pointer;
}
.prestige-amen-showcase__next-line { position: relative; height: 1px; background: rgba(255, 255, 255, 0.58); }
.prestige-amen-showcase__next-line::after {
  position: absolute;
  top: -3px;
  right: 0;
  width: 7px;
  height: 7px;
  content: "";
  border-top: 1px solid currentColor;
  border-right: 1px solid currentColor;
  transform: rotate(45deg);
}
.prestige-amen-showcase__counter { font-size: 16px; letter-spacing: 0.08em; white-space: nowrap; }
.prestige-amen-showcase__counter small { margin: 0 5px; color: rgba(255, 255, 255, 0.44); }
.prestige-amen-showcase__next:hover .prestige-amen-showcase__next-line,
.prestige-amen-showcase__next:focus-visible .prestige-amen-showcase__next-line { background: #fff; }
.prestige-amen-showcase__next:focus-visible { outline: 1px solid rgba(255, 255, 255, 0.6); outline-offset: 8px; }

.prestige-amen-showcase-image-enter-active,
.prestige-amen-showcase-image-leave-active {
  transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}
.prestige-amen-showcase-image-enter-from { opacity: 0; transform: scale(1.025); }
.prestige-amen-showcase-image-leave-to { opacity: 0; }

@media (max-width: 991.98px) {
  .prestige-amen-showcase { min-height: 800px; }
  .prestige-amen-showcase__veil { background: linear-gradient(90deg, rgba(4, 5, 7, 0.96), rgba(4, 5, 7, 0.82) 52%, rgba(4, 5, 7, 0.28)); }
  .prestige-amen-showcase__next { width: min(320px, 42vw); }
}
@media (max-width: 767.98px) {
  .prestige-amen-showcase { min-height: 850px; }
  .prestige-amen-showcase__image { object-position: 62% center; }
  .prestige-amen-showcase__veil { background: linear-gradient(90deg, rgba(4, 5, 7, 0.95), rgba(4, 5, 7, 0.77) 68%, rgba(4, 5, 7, 0.5)); }
  .prestige-amen-showcase__inner { align-items: flex-start; }
  .prestige-amen-showcase__content { width: 100%; }
  .prestige-amen-showcase__title { max-width: 420px; }
  .prestige-amen-showcase__lead { max-width: 360px; }
  .prestige-amen-showcase__next { right: 20px; bottom: 28px; left: 20px; width: auto; }
}
@media (max-width: 479.98px) {
  .prestige-amen-showcase { min-height: 820px; }
  .prestige-amen-showcase__inner { padding-top: 68px; }
  .prestige-amen-showcase__eyebrow { margin-bottom: 18px; }
  .prestige-amen-showcase__title { font-size: 42px; }
  .prestige-amen-showcase__lead { margin-block: 20px 22px; line-height: 1.55; }
  .prestige-amen-showcase__item { min-height: 45px; grid-template-columns: 3px 43px minmax(0, 1fr); }
  .prestige-amen-showcase__number { padding-left: 13px; font-size: 15px; }
  .prestige-amen-showcase__name { font-size: 14px; }
}
@media (prefers-reduced-motion: reduce) {
  .prestige-amen-showcase-image-enter-active,
  .prestige-amen-showcase-image-leave-active,
  .prestige-amen-showcase__item,
  .prestige-amen-showcase__marker { transition-duration: 0.01ms; }
}
</style>
