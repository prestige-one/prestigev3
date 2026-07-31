<template>
  <section class="journey-three-area pb-140">
    <div
      class="journey-three-shell"
      @mouseenter="pauseForHover"
      @mouseleave="resumeFromHover"
      @focusin="pauseForFocus"
      @focusout="resumeFromFocus"
    >
      <button
        type="button"
        class="journey-three-side-arrow is-previous"
        aria-label="Previous milestone"
        :disabled="activeIndex === 0"
        @click="scrollToIndex(activeIndex - 1)"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
      </button>

      <div
      ref="viewportRef"
      class="journey-three-viewport"
      :class="{ 'is-dragging': isDragging }"
      role="region"
      aria-label="Prestige One milestones"
      tabindex="0"
      @scroll.passive="handleScroll"
      @pointerdown="startDrag"
      @pointermove="dragTimeline"
      @pointerup="stopDrag"
      @pointercancel="stopDrag"
      >
      <ol class="journey-three-track">
        <li
          v-for="(milestone, index) in milestones"
          :key="milestone.year"
          class="journey-three-item"
          :class="{ 'is-active': activeIndex === index }"
        >
          <span class="journey-three-dot" aria-hidden="true"><i /></span>

          <article class="journey-three-card">
            <figure class="journey-three-media">
              <img
                :src="milestone.image"
                :alt="`${milestone.year} — ${milestone.title}`"
                loading="lazy"
                draggable="false"
              >
              <span class="journey-three-chapter">Milestone {{ String(index + 1).padStart(2, "0") }}</span>
            </figure>

            <div class="journey-three-content">
              <div class="journey-three-year" aria-hidden="true">
                <prestige-metallic-number :value="milestone.year" />
              </div>
              <h3>{{ milestone.title }}</h3>
              <p>{{ milestone.description }}</p>
            </div>
          </article>
        </li>
        </ol>
      </div>

      <button
        type="button"
        class="journey-three-side-arrow is-next"
        aria-label="Next milestone"
        @click="goToNextMilestone"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
      </button>
    </div>

    <div class="container container-1230">
      <p class="journey-three-hint">
        <span aria-hidden="true">↔</span> Drag, swipe, or use the arrows to explore the timeline
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
interface HorizontalMilestone {
  year: number;
  title: string;
  description: string;
  image: string;
}

const sharedJourneyImage = "/assets/images/v3/timeline-placeholder.svg";

const milestones: HorizontalMilestone[] = [
  { year: 1967, title: "A Strong Foundation", description: "Prestige Holding Group is established, beginning a business journey built over decades.", image: sharedJourneyImage },
  { year: 2007, title: "Entering Dubai Real Estate", description: "Prestige enters Dubai’s real estate market, beginning a new chapter of investment and growth.", image: sharedJourneyImage },
  { year: 2009, title: "Expanding Across Dubai", description: "Prestige expands its real estate investments across key Dubai communities and builds a growing portfolio.", image: sharedJourneyImage },
  { year: 2018, title: "Investing in What Comes Next", description: "Years of market experience lead to land acquisitions across Dubai freehold communities.", image: sharedJourneyImage },
  { year: 2022, title: "Recognised in Dubai", description: "Ajmal Saifi is recognised by Dubai Land Department as one of Dubai’s top property investors.", image: sharedJourneyImage },
  { year: 2023, title: "From Investment to Development", description: "Prestige One turns years of market knowledge into original developments of its own.", image: sharedJourneyImage },
  { year: 2024, title: "Building Global Connections", description: "Prestige One becomes the first regional real estate sponsor of the Argentina National Team.", image: sharedJourneyImage },
  { year: 2025, title: "Expanding Global Presence", description: "Globally recognised partnerships strengthen Prestige One’s international presence.", image: sharedJourneyImage },
  { year: 2026, title: "From Vision to Delivery", description: "Project handovers mark a defining milestone as new developments and partnerships continue.", image: sharedJourneyImage },
];

const viewportRef = ref<HTMLElement | null>(null);
const activeIndex = ref(0);
const isDragging = ref(false);
let scrollFrame: number | undefined;
let dragStartX = 0;
let dragScrollStart = 0;
let autoplayTimer: ReturnType<typeof setInterval> | undefined;
let isHoverPaused = false;
let isFocusPaused = false;

function stopAutoplay() {
  if (autoplayTimer !== undefined) {
    clearInterval(autoplayTimer);
    autoplayTimer = undefined;
  }
}

function startAutoplay() {
  stopAutoplay();

  if (
    isHoverPaused
    || isFocusPaused
    || isDragging.value
    || window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) return;

  autoplayTimer = setInterval(() => {
    const nextIndex = activeIndex.value >= milestones.length - 1 ? 0 : activeIndex.value + 1;
    scrollToIndex(nextIndex);
  }, 4200);
}

function pauseForHover() {
  isHoverPaused = true;
  stopAutoplay();
}

function resumeFromHover() {
  isHoverPaused = false;
  startAutoplay();
}

function pauseForFocus() {
  isFocusPaused = true;
  stopAutoplay();
}

function resumeFromFocus() {
  isFocusPaused = false;
  startAutoplay();
}

function updateActiveIndex() {
  const viewport = viewportRef.value;
  if (!viewport) return;

  const cards = Array.from(viewport.querySelectorAll<HTMLElement>(".journey-three-item"));
  const viewportFocus = viewport.scrollLeft + viewport.clientWidth * 0.25;
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  cards.forEach((card, index) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const distance = Math.abs(cardCenter - viewportFocus);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  activeIndex.value = closestIndex;
}

function handleScroll() {
  if (scrollFrame !== undefined) cancelAnimationFrame(scrollFrame);
  scrollFrame = requestAnimationFrame(updateActiveIndex);
}

function startDrag(event: PointerEvent) {
  const viewport = viewportRef.value;
  if (!viewport || event.button !== 0) return;

  isDragging.value = true;
  stopAutoplay();
  dragStartX = event.clientX;
  dragScrollStart = viewport.scrollLeft;
  viewport.setPointerCapture(event.pointerId);
}

function dragTimeline(event: PointerEvent) {
  const viewport = viewportRef.value;
  if (!viewport || !isDragging.value) return;

  event.preventDefault();
  viewport.scrollLeft = dragScrollStart - (event.clientX - dragStartX) * 1.1;
}

function stopDrag(event: PointerEvent) {
  const viewport = viewportRef.value;
  if (!viewport || !isDragging.value) return;

  isDragging.value = false;
  if (viewport.hasPointerCapture(event.pointerId)) {
    viewport.releasePointerCapture(event.pointerId);
  }
  updateActiveIndex();
  startAutoplay();
}

function scrollToIndex(index: number) {
  const viewport = viewportRef.value;
  if (!viewport) return;

  const safeIndex = Math.max(0, Math.min(index, milestones.length - 1));
  const cards = viewport.querySelectorAll<HTMLElement>(".journey-three-item");
  const card = cards[safeIndex];
  if (!card) return;

  viewport.scrollTo({
    left: card.offsetLeft - Math.max(24, (window.innerWidth - 1230) / 2),
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
  activeIndex.value = safeIndex;
}

function goToNextMilestone() {
  const nextIndex = activeIndex.value >= milestones.length - 1 ? 0 : activeIndex.value + 1;
  scrollToIndex(nextIndex);
}

onMounted(() => {
  updateActiveIndex();
  window.addEventListener("resize", updateActiveIndex);
  startAutoplay();
});

onBeforeUnmount(() => {
  stopAutoplay();
  if (scrollFrame !== undefined) cancelAnimationFrame(scrollFrame);
  window.removeEventListener("resize", updateActiveIndex);
});
</script>

<style scoped>
.journey-three-area {
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.journey-three-area::before {
  position: absolute;
  top: 5%;
  right: -15%;
  width: 700px;
  height: 700px;
  content: "";
  pointer-events: none;
  background: radial-gradient(circle, rgba(88, 164, 205, 0.12), transparent 68%);
  filter: blur(25px);
}

.journey-three-shell {
  position: relative;
  padding-top: 40px;
}

.journey-three-side-arrow {
  position: absolute;
  z-index: 6;
  top: 50%;
  display: grid;
  width: 52px;
  height: 52px;
  padding: 0;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 50%;
  color: #fff;
  background: rgba(5, 11, 15, 0.76);
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
  transform: translateY(-50%);
  transition: border-color 0.3s ease, background 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
}

.journey-three-side-arrow.is-previous {
  left: 24px;
}

.journey-three-side-arrow.is-next {
  right: 24px;
}

.journey-three-side-arrow svg {
  width: 20px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
}

.journey-three-side-arrow:hover:not(:disabled) {
  border-color: rgba(204, 231, 246, 0.7);
  background: rgba(104, 164, 199, 0.2);
  transform: translateY(-50%) scale(1.06);
}

.journey-three-side-arrow:disabled {
  cursor: default;
  opacity: 0.2;
}

.journey-three-header {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
  padding-top: 72px;
}

.journey-three-eyebrow {
  display: block;
  margin-bottom: 18px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.52);
}

.journey-three-title {
  margin: 0;
  font-size: var(--prestige-about-section-title-size, clamp(25px, 2.3vw, 40px));
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -1px;
  color: #fff;
}

.journey-three-navigation {
  display: flex;
  align-items: center;
  gap: 10px;
}

.journey-three-count {
  display: flex;
  min-width: 112px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.68);
}

.journey-three-count i {
  width: 24px;
  height: 1px;
  background: rgba(255, 255, 255, 0.28);
}

.journey-three-arrow {
  display: grid;
  width: 46px;
  height: 46px;
  padding: 0;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  color: #fff;
  background: rgba(255, 255, 255, 0.045);
  transition: border-color 0.3s ease, background 0.3s ease, opacity 0.3s ease;
}

.journey-three-arrow svg {
  width: 18px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
}

.journey-three-arrow:hover:not(:disabled) {
  border-color: rgba(199, 226, 242, 0.58);
  background: rgba(150, 200, 229, 0.12);
}

.journey-three-arrow:disabled {
  cursor: default;
  opacity: 0.28;
}

.journey-three-progress {
  height: 2px;
  margin-top: 38px;
  overflow: hidden;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
}

.journey-three-progress span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #709bb6, #e4f2fa);
  box-shadow: 0 0 15px rgba(157, 205, 233, 0.45);
  transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.journey-three-viewport {
  position: relative;
  z-index: 1;
  width: 100%;
  margin-top: 0;
  overflow-x: auto;
  overflow-y: hidden;
  outline: none;
  overscroll-behavior-x: contain;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  cursor: grab;
  touch-action: pan-y;
  user-select: none;
}

.journey-three-viewport.is-dragging {
  cursor: grabbing;
  scroll-behavior: auto;
  scroll-snap-type: none;
}

.journey-three-viewport::-webkit-scrollbar {
  display: none;
}

.journey-three-viewport:focus-visible {
  box-shadow: inset 0 0 0 2px rgba(167, 211, 236, 0.55);
}

.journey-three-track {
  position: relative;
  display: flex;
  width: max-content;
  min-height: 665px;
  gap: 32px;
  margin: 0;
  padding: 0 max(24px, calc((100vw - 1230px) / 2)) 30px;
  list-style: none;
}

.journey-three-track::before {
  position: absolute;
  top: 324px;
  right: max(24px, calc((100vw - 1230px) / 2));
  left: max(24px, calc((100vw - 1230px) / 2));
  height: 1px;
  content: "";
  background: linear-gradient(90deg, rgba(203, 227, 241, 0.22), rgba(203, 227, 241, 0.72) 10%, rgba(108, 168, 202, 0.5) 90%, rgba(203, 227, 241, 0.12));
}

.journey-three-item {
  position: relative;
  flex: 0 0 clamp(305px, 33vw, 430px);
  width: clamp(305px, 33vw, 430px);
  padding-top: 90px;
  scroll-snap-align: start;
}

.journey-three-dot {
  position: absolute;
  z-index: 2;
  top: 315px;
  left: -9px;
  display: grid;
  width: 19px;
  height: 19px;
  place-items: center;
  border: 1px solid rgba(194, 221, 237, 0.58);
  border-radius: 50%;
  background: #071016;
  box-shadow: 0 0 0 7px rgba(111, 169, 203, 0.06);
  transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
}

.journey-three-dot i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(217, 237, 248, 0.7);
}

.journey-three-card {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 22px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.022));
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.22);
  opacity: 0.72;
  transition: opacity 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}

.journey-three-item.is-active .journey-three-card {
  border-color: rgba(183, 216, 235, 0.32);
  box-shadow: 0 32px 85px rgba(0, 0, 0, 0.34), 0 0 45px rgba(88, 159, 198, 0.08);
  opacity: 1;
}

.journey-three-item.is-active .journey-three-dot {
  border-color: rgba(222, 240, 250, 0.95);
  box-shadow: 0 0 0 8px rgba(111, 169, 203, 0.12), 0 0 24px rgba(140, 197, 228, 0.4);
  transform: scale(1.12);
}

.journey-three-media {
  position: relative;
  height: 215px;
  margin: 0;
  overflow: hidden;
}

.journey-three-media::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(180deg, transparent 42%, rgba(5, 10, 14, 0.8));
}

.journey-three-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.journey-three-item.is-active .journey-three-media img {
  transform: scale(1.035);
}

.journey-three-chapter {
  position: absolute;
  z-index: 1;
  right: 17px;
  bottom: 15px;
  padding: 7px 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  font-size: 9px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.82);
  background: rgba(4, 10, 14, 0.5);
  backdrop-filter: blur(8px);
}

.journey-three-content {
  min-height: 252px;
  padding: 27px 28px 30px;
}

.journey-three-year {
  margin-bottom: 15px;
  font-size: clamp(39px, 3.6vw, 52px);
  line-height: 0.9;
  letter-spacing: -2px;
}

.journey-three-content h3 {
  margin: 0;
  font-size: clamp(18px, 1.5vw, 23px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.3px;
  text-transform: uppercase;
  color: #fff;
}

.journey-three-content p {
  margin: 13px 0 0;
  font-size: 14px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.58);
}

.journey-three-hint {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px 0 0;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
}

.journey-three-hint span {
  font-size: 18px;
  color: rgba(190, 219, 236, 0.62);
}

@media (max-width: 767.98px) {
  .journey-three-area {
    padding-bottom: 100px;
  }

  .journey-three-shell {
    padding-top: 24px;
  }

  .journey-three-side-arrow {
    width: 44px;
    height: 44px;
  }

  .journey-three-side-arrow.is-previous {
    left: 10px;
  }

  .journey-three-side-arrow.is-next {
    right: 10px;
  }

  .journey-three-track {
    min-height: 610px;
    gap: 18px;
    padding-right: 20px;
    padding-left: 20px;
  }

  .journey-three-track::before {
    top: 294px;
    right: 20px;
    left: 20px;
  }

  .journey-three-dot {
    top: 285px;
  }

  .journey-three-item {
    flex-basis: min(82vw, 340px);
    width: min(82vw, 340px);
    padding-top: 84px;
  }

  .journey-three-media {
    height: 185px;
  }

  .journey-three-content {
    min-height: 235px;
    padding: 24px 22px 27px;
  }

  .journey-three-year {
    font-size: 38px;
  }

  .journey-three-hint {
    margin-top: 4px;
  }
}
</style>
