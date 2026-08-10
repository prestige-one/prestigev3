<template>
  <section v-if="items.length" class="prestige-dtimeline" :aria-label="ariaLabel">
    <div class="container container-1430">
      <div class="prestige-dtimeline__shell">
        <div class="prestige-dtimeline__media" aria-live="polite">
          <article
            v-for="(item, index) in items"
            :key="`${item.name}-${item.image}`"
            :class="['prestige-dtimeline__slide', getSlidePosition(index)]"
            :aria-hidden="activeIndex !== index && !(pinFirst && index === 0)"
          >
            <img
              :src="item.image"
              :alt="item.imageAlt || item.name"
              :style="{ objectPosition: item.imagePosition || 'center' }"
              :loading="index < 3 ? 'eager' : 'lazy'"
              decoding="async"
            >
            <strong v-if="pinFirst && index === 0" class="prestige-dtimeline__origin-name">
              {{ item.name }}
            </strong>
            <div class="prestige-dtimeline__slide-shade" aria-hidden="true" />
          </article>

          <div class="prestige-dtimeline__veil" aria-hidden="true" />

          <button
            type="button"
            class="prestige-dtimeline__arrow prestige-dtimeline__arrow--previous"
            aria-label="Previous destination"
            @click="stepSlide(-1)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <path d="m15 5-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            class="prestige-dtimeline__arrow prestige-dtimeline__arrow--next"
            aria-label="Next destination"
            @click="stepSlide(1)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        <div ref="trackScroller" class="prestige-dtimeline__track-scroller">
          <ol
            class="prestige-dtimeline__track"
            :style="{ '--prestige-dtimeline-count': String(items.length) }"
          >
            <li v-for="(item, index) in items" :key="item.name" class="prestige-dtimeline__stop">
              <button
                :ref="(element) => setStopButton(element, index)"
                type="button"
                :class="[
                  'prestige-dtimeline__button',
                  { 'prestige-dtimeline__button--active': activeIndex === index },
                  { 'prestige-dtimeline__button--pinned': pinFirst && index === 0 },
                ]"
                :aria-label="getButtonLabel(item)"
                :aria-pressed="activeIndex === index"
                :disabled="pinFirst && index === 0"
                @click="selectSlide(index)"
              >
                <span class="prestige-dtimeline__dot" aria-hidden="true" />
                <span class="prestige-dtimeline__name">{{ item.name }}</span>
                <span v-if="item.time" class="prestige-dtimeline__time">{{ item.time }}</span>
              </button>
            </li>
          </ol>
        </div>

        <p v-if="note" class="prestige-dtimeline__note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
          <span>{{ note }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from "vue";
import type { DestinationTimelineItem } from "~/data/destination-timeline-data";

const props = withDefaults(defineProps<{
  items: readonly DestinationTimelineItem[];
  interval?: number;
  note?: string;
  ariaLabel?: string;
  pinFirst?: boolean;
}>(), {
  interval: 5600,
  note: "Approximate driving times",
  ariaLabel: "Nearby destinations and approximate driving times",
  pinFirst: false,
});

const activeIndex = ref(getInitialIndex());
const trackScroller = ref<HTMLElement | null>(null);
const stopButtons = ref<(HTMLElement | null)[]>([]);
let autoplayTimer: ReturnType<typeof setInterval> | undefined;
let reduceMotion: MediaQueryList | undefined;

function getButtonLabel(item: DestinationTimelineItem): string {
  return item.time ? `${item.name}, ${item.time}` : item.name;
}

function getSlidePosition(index: number): string {
  const count = props.items.length;

  if (props.pinFirst && count > 1) {
    if (index === 0) return "prestige-dtimeline__slide--origin";
    const animatedCount = count - 1;
    const difference = (index - activeIndex.value + animatedCount) % animatedCount;
    if (difference === 0) return "prestige-dtimeline__slide--active";
    if (difference === 1) return "prestige-dtimeline__slide--next";
    return "prestige-dtimeline__slide--before";
  }

  const difference = (index - activeIndex.value + count) % count;
  if (difference === 0) return "prestige-dtimeline__slide--active";
  if (difference === 1) return "prestige-dtimeline__slide--next";
  if (difference === count - 1) return "prestige-dtimeline__slide--previous";
  if (difference < count / 2) return "prestige-dtimeline__slide--after";
  return "prestige-dtimeline__slide--before";
}

function getInitialIndex(): number {
  return props.pinFirst && props.items.length > 1 ? 1 : 0;
}

function getAdjacentIndex(direction: -1 | 1): number {
  const firstIndex = getInitialIndex();
  const animatedCount = props.items.length - firstIndex;
  if (animatedCount < 1) return firstIndex;
  const offset = activeIndex.value - firstIndex;
  return firstIndex + ((offset + direction + animatedCount) % animatedCount);
}

function setStopButton(element: Element | ComponentPublicInstance | null, index: number): void {
  stopButtons.value[index] = element instanceof HTMLElement ? element : null;
}

function stopAutoplay(): void {
  if (autoplayTimer) clearInterval(autoplayTimer);
  autoplayTimer = undefined;
}

function startAutoplay(): void {
  stopAutoplay();
  if (props.items.length < 2 || reduceMotion?.matches || document.hidden) return;
  autoplayTimer = setInterval(() => {
    activeIndex.value = getAdjacentIndex(1);
  }, Math.max(props.interval, 2200));
}

function centerActiveStop(): void {
  const scroller = trackScroller.value;
  const button = stopButtons.value[activeIndex.value];
  if (!scroller || !button || scroller.scrollWidth <= scroller.clientWidth) return;

  const left = button.offsetLeft - ((scroller.clientWidth - button.offsetWidth) / 2);
  scroller.scrollTo({ left: Math.max(0, left), behavior: reduceMotion?.matches ? "auto" : "smooth" });
}

function selectSlide(index: number): void {
  if (props.pinFirst && index === 0) return;
  activeIndex.value = index;
  startAutoplay();
}

function stepSlide(direction: -1 | 1): void {
  activeIndex.value = getAdjacentIndex(direction);
  startAutoplay();
}

function handleVisibilityChange(): void {
  if (document.hidden) stopAutoplay();
  else startAutoplay();
}

watch(activeIndex, () => nextTick(centerActiveStop));
watch([() => props.items.length, () => props.pinFirst], () => {
  activeIndex.value = getInitialIndex();
  nextTick(centerActiveStop);
  startAutoplay();
});

onMounted(() => {
  reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  document.addEventListener("visibilitychange", handleVisibilityChange);
  startAutoplay();
});

onBeforeUnmount(() => {
  stopAutoplay();
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>

<style scoped>
.prestige-dtimeline {
  padding: 0 0 clamp(60px, 7vw, 100px);
  overflow: hidden;
  background: #08090b;
  color: #fff;
}

.prestige-dtimeline__shell {
  overflow: hidden;
  border: 1px solid rgba(124, 120, 120, 0.28);
  border-radius: 10px;
  background: #06090d;
}

.prestige-dtimeline__media {
  position: relative;
  min-height: clamp(320px, 39vw, 560px);
  overflow: hidden;
  background: #030507;
}

.prestige-dtimeline__slide {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(48%, 660px);
  height: 88%;
  overflow: hidden;
  border-radius: 8px;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%) scale(0.74);
  filter: saturate(0.5) brightness(0.3);
  transition:
    opacity 1.3s ease,
    transform 1.45s cubic-bezier(0.22, 1, 0.36, 1),
    filter 1.3s ease;
}

.prestige-dtimeline__slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.025);
  transition: transform 5.5s ease;
}

.prestige-dtimeline__slide-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.08) 48%, rgba(0, 0, 0, 0.52) 100%);
  transition: background 0.95s ease;
}

.prestige-dtimeline__slide--active {
  z-index: 3;
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, -50%) scale(1);
  filter: saturate(0.96) brightness(0.9);
}

.prestige-dtimeline__slide--active img { transform: scale(1); }

.prestige-dtimeline__slide--previous,
.prestige-dtimeline__slide--origin,
.prestige-dtimeline__slide--next {
  z-index: 2;
  opacity: 0.5;
  filter: saturate(0.58) brightness(0.43);
}

.prestige-dtimeline__slide--previous { transform: translate(-132%, -50%) scale(0.83); }
.prestige-dtimeline__slide--origin { transform: translate(-132%, -50%) scale(0.83); }
.prestige-dtimeline__slide--next { transform: translate(32%, -50%) scale(0.83); }
.prestige-dtimeline__slide--before { transform: translate(-210%, -50%) scale(0.68); }
.prestige-dtimeline__slide--after { transform: translate(110%, -50%) scale(0.68); }

.prestige-dtimeline__slide--previous .prestige-dtimeline__slide-shade,
.prestige-dtimeline__slide--origin .prestige-dtimeline__slide-shade,
.prestige-dtimeline__slide--next .prestige-dtimeline__slide-shade {
  background: rgba(0, 0, 0, 0.28);
}

.prestige-dtimeline__origin-name {
  position: absolute;
  right: 18px;
  bottom: 20px;
  left: 18px;
  z-index: 2;
  font-size: clamp(11px, 1vw, 14px);
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.08em;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
}

.prestige-dtimeline__veil {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(1, 5, 10, 0.03) 46%, rgba(3, 7, 11, 0.48) 100%),
    linear-gradient(90deg, #030507 0%, rgba(3, 5, 7, 0.16) 13%, transparent 30%, transparent 70%, rgba(3, 5, 7, 0.16) 87%, #030507 100%);
}

.prestige-dtimeline__arrow {
  position: absolute;
  top: 50%;
  z-index: 5;
  display: grid;
  width: clamp(46px, 4vw, 60px);
  height: clamp(46px, 4vw, 60px);
  place-items: center;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.52);
  border-radius: 50%;
  background: rgba(4, 8, 12, 0.68);
  color: #fff;
  cursor: pointer;
  transform: translateY(-50%);
  transition: background 0.35s ease, color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
}

.prestige-dtimeline__arrow svg { width: 23px; height: 23px; }
.prestige-dtimeline__arrow--previous { left: clamp(14px, 3vw, 44px); }
.prestige-dtimeline__arrow--next { right: clamp(14px, 3vw, 44px); }

.prestige-dtimeline__arrow:hover,
.prestige-dtimeline__arrow:focus-visible {
  border-color: #fff;
  background: #fff;
  color: #070a0e;
  box-shadow: 0 0 24px rgba(255, 255, 255, 0.28);
  outline: none;
}

.prestige-dtimeline__track-scroller {
  position: relative;
  z-index: 3;
  margin-top: -1px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  background: linear-gradient(180deg, rgba(5, 9, 13, 0.78), #06090d 34%);
}

.prestige-dtimeline__track-scroller::-webkit-scrollbar { display: none; }

.prestige-dtimeline__track {
  position: relative;
  display: grid;
  grid-template-columns: repeat(var(--prestige-dtimeline-count), minmax(0, 1fr));
  min-width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

.prestige-dtimeline__track::before {
  position: absolute;
  top: 13px;
  right: 0;
  left: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.7);
  content: "";
}

.prestige-dtimeline__stop { min-width: 0; }

.prestige-dtimeline__button {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 152px;
  align-items: center;
  flex-direction: column;
  padding: 40px 12px 18px;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.58);
  text-align: center;
  cursor: pointer;
  transition: color 0.55s ease, opacity 0.55s ease;
}

.prestige-dtimeline__dot {
  position: absolute;
  top: 13px;
  left: 50%;
  width: 13px;
  height: 13px;
  border: 2px solid rgba(255, 255, 255, 0.64);
  border-radius: 50%;
  background: #ced5dd;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  transform: translate(-50%, -50%);
  transition:
    width 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    height 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.55s ease,
    background 0.55s ease,
    box-shadow 0.55s ease;
}

.prestige-dtimeline__name {
  max-width: 190px;
  min-height: 44px;
  font-size: clamp(12px, 1vw, 15px);
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: font-weight 0.35s ease, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}

.prestige-dtimeline__time {
  display: block;
  margin-top: 10px;
  font-size: clamp(15px, 1.5vw, 22px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: font-weight 0.35s ease;
}

.prestige-dtimeline__button--active { color: #fff; }

.prestige-dtimeline__button--pinned {
  color: #fff;
  cursor: default;
}

.prestige-dtimeline__button--pinned .prestige-dtimeline__name { font-weight: 700; }

.prestige-dtimeline__button--active .prestige-dtimeline__dot {
  width: 24px;
  height: 24px;
  border: 4px solid #fff;
  background: #111820;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.72), 0 0 24px rgba(255, 255, 255, 0.64);
}

.prestige-dtimeline__button--active .prestige-dtimeline__name,
.prestige-dtimeline__button--active .prestige-dtimeline__time { font-weight: 700; }

.prestige-dtimeline__button--active .prestige-dtimeline__name { transform: translateY(2px); }

.prestige-dtimeline__button:focus-visible {
  outline: none;
}

.prestige-dtimeline__button:focus-visible .prestige-dtimeline__dot {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5), 0 0 22px rgba(255, 255, 255, 0.55);
}

.prestige-dtimeline__note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding: 6px 18px 24px;
  font-size: 13px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.58);
}

.prestige-dtimeline__note svg {
  width: 24px;
  height: 24px;
  flex: 0 0 auto;
  color: rgba(255, 255, 255, 0.85);
}

@media (max-width: 767.98px) {
  .prestige-dtimeline__shell { border-radius: 7px; }
  .prestige-dtimeline__media { min-height: 310px; }
  .prestige-dtimeline__slide { width: 78%; height: 84%; }
  .prestige-dtimeline__slide--previous { transform: translate(-132%, -50%) scale(0.76); }
  .prestige-dtimeline__slide--origin { transform: translate(-132%, -50%) scale(0.76); }
  .prestige-dtimeline__slide--next { transform: translate(32%, -50%) scale(0.76); }
  .prestige-dtimeline__slide--before { transform: translate(-215%, -50%) scale(0.62); }
  .prestige-dtimeline__slide--after { transform: translate(115%, -50%) scale(0.62); }
  .prestige-dtimeline__arrow { width: 42px; height: 42px; }
  .prestige-dtimeline__arrow--previous { left: 9px; }
  .prestige-dtimeline__arrow--next { right: 9px; }
  .prestige-dtimeline__track { min-width: calc(var(--prestige-dtimeline-count) * 148px); }
  .prestige-dtimeline__button { min-height: 142px; padding-inline: 8px; }
  .prestige-dtimeline__name { min-height: 40px; }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-dtimeline__slide,
  .prestige-dtimeline__slide img,
  .prestige-dtimeline__arrow,
  .prestige-dtimeline__button,
  .prestige-dtimeline__dot,
  .prestige-dtimeline__name,
  .prestige-dtimeline__time { transition-duration: 0.01ms; }
}
</style>
