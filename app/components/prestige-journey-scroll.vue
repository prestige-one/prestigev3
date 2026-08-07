<template>
  <section class="prestige-journey-scroll-area pt-80 pb-100">
    <div class="container container-1430">
      <prestige-section-heading
        class="prestige-journey-scroll-header"
        :title="t('ap.journey.eyebrow')"
        :subtitle="t('ap.journey.title')"
      />

      <ol ref="timeline" class="prestige-journey-scroll-timeline">
        <span class="prestige-journey-scroll-line" aria-hidden="true" />
        <span ref="progressLine" class="prestige-journey-scroll-progress" aria-hidden="true" />

        <li
          v-for="milestone in milestones"
          :key="milestone.year"
          class="prestige-journey-scroll-item"
        >
          <div class="prestige-journey-scroll-year">
            <prestige-metallic-number :value="milestone.year" />
          </div>

          <div class="prestige-journey-scroll-marker" aria-hidden="true">
            <span />
          </div>

          <article class="prestige-journey-scroll-content">
            <h3>{{ milestone.title }}</h3>
            <p>{{ milestone.text }}</p>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PrestigeJourneyMilestone {
  year: string;
  title: string;
  text: string;
}

const { t } = useI18n();
const timeline = ref<HTMLOListElement | null>(null);
const progressLine = ref<HTMLElement | null>(null);

const milestones = computed<PrestigeJourneyMilestone[]>(() => [
  { year: "1967", title: t("ap.journey.m1Title"), text: t("ap.journey.m1Text") },
  { year: "2007", title: t("ap.journey.m2Title"), text: t("ap.journey.m2Text") },
  { year: "2009", title: t("ap.journey.m3Title"), text: t("ap.journey.m3Text") },
  { year: "2018", title: t("ap.journey.m4Title"), text: t("ap.journey.m4Text") },
  { year: "2022", title: t("ap.journey.m5Title"), text: t("ap.journey.m5Text") },
  { year: "2023", title: t("ap.journey.m6Title"), text: t("ap.journey.m6Text") },
  { year: "2024", title: t("ap.journey.m7Title"), text: t("ap.journey.m7Text") },
  { year: "2025", title: t("ap.journey.m8Title"), text: t("ap.journey.m8Text") },
  { year: "2026", title: t("ap.journey.m9Title"), text: t("ap.journey.m9Text") },
]);

let animationContext: { revert: () => void } | null = null;
let refreshFrame = 0;
let isUnmounted = false;

onMounted(async () => {
  await nextTick();

  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/all");
  gsap.registerPlugin(ScrollTrigger);

  // Child components mount before the page creates ScrollSmoother. Waiting two
  // frames ensures every trigger measures against the final smooth-scroll setup.
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });

  const timelineElement = timeline.value;
  const progressElement = progressLine.value;
  if (isUnmounted || !timelineElement || !progressElement) return;

  animationContext = gsap.context(() => {
    gsap.fromTo(
      progressElement,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineElement,
          start: "top 68%",
          end: "bottom 42%",
          scrub: 0.55,
          invalidateOnRefresh: true,
        },
      },
    );

    timelineElement
      .querySelectorAll<HTMLElement>(".prestige-journey-scroll-item")
      .forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 68%",
          end: "bottom 32%",
          onToggle: (self) => item.classList.toggle("is-active", self.isActive),
          onRefresh: (self) => item.classList.toggle("is-active", self.isActive),
          invalidateOnRefresh: true,
        });
      });
  }, timelineElement);

  refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
});

onBeforeUnmount(() => {
  isUnmounted = true;
  cancelAnimationFrame(refreshFrame);
  animationContext?.revert();
  animationContext = null;
});
</script>

<style scoped>
.prestige-journey-scroll-area {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  overflow: hidden;
}

.prestige-journey-scroll-header {
  position: relative;
  margin: 0 auto clamp(58px, 7vw, 94px);
  text-align: center;
}

.prestige-journey-scroll-timeline {
  --prestige-journey-year-width: clamp(150px, 16vw, 220px);
  --prestige-journey-marker-width: 52px;
  position: relative;
  width: min(900px, 100%);
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

.prestige-journey-scroll-line,
.prestige-journey-scroll-progress {
  position: absolute;
  top: 28px;
  bottom: 28px;
  left: calc(var(--prestige-journey-year-width) + (var(--prestige-journey-marker-width) / 2));
  width: 3px;
  border-radius: 999px;
  transform: translateX(-50%);
  pointer-events: none;
}

.prestige-journey-scroll-line {
  background: rgba(171, 201, 219, 0.2);
}

.prestige-journey-scroll-progress {
  z-index: 1;
  background: linear-gradient(180deg, #e8f6ff 0%, #8fb3c8 52%, #e7f5fd 100%);
  box-shadow: 0 0 14px rgba(166, 214, 241, 0.32);
  transform: translateX(-50%) scaleY(0);
  transform-origin: 50% 0;
  will-change: transform;
}

.prestige-journey-scroll-item {
  position: relative;
  display: grid;
  min-height: clamp(118px, 9vw, 110px);
  grid-template-columns:
    var(--prestige-journey-year-width)
    var(--prestige-journey-marker-width)
    minmax(0, 1fr);
  align-items: start;
}

.prestige-journey-scroll-year {
  padding: 0 34px 0 0;
  line-height: 1;
  text-align: right;
}

.prestige-journey-scroll-year :deep(.prestige-metallic-number) {
  font-size: clamp(43px, 4.5vw, 45px);
  line-height: 1;
  letter-spacing: -2px;
}

.prestige-journey-scroll-marker {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding-top: 15px;
}

.prestige-journey-scroll-marker span {
  display: block;
  width: 16px;
  height: 16px;
  border: 3px solid #0b0b0d;
  border-radius: 50%;
  background: #99b4c5;
  box-shadow: 0 0 0 2px rgba(176, 207, 225, 0.2);
  transition: background-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
}

.prestige-journey-scroll-content {
  max-width: 780px;
  padding: 4px 0 20px 10px;
  opacity: 0.48;
  transform: translateY(16px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}

.prestige-journey-scroll-content h3 {
  margin: 0 0 10px;
  font-size: clamp(18px, 1.65vw, 25px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.45px;
  text-transform: uppercase;
  color: #fff;
}

.prestige-journey-scroll-content p {
  margin: 0;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.62);
}

.prestige-journey-scroll-item.is-active .prestige-journey-scroll-marker span {
  background: #edf9ff;
  box-shadow: 0 0 0 5px rgba(175, 218, 241, 0.13), 0 0 18px rgba(185, 226, 248, 0.5);
  transform: scale(1.08);
}

.prestige-journey-scroll-item.is-active .prestige-journey-scroll-content {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 767.98px) {
  .prestige-journey-scroll-area {
    padding-top: 70px;
    padding-bottom: 90px;
  }

  .prestige-journey-scroll-header {
    margin-bottom: 54px;
  }

  .prestige-journey-scroll-timeline {
    --prestige-journey-year-width: 86px;
    --prestige-journey-marker-width: 32px;
  }

  .prestige-journey-scroll-line,
  .prestige-journey-scroll-progress {
    width: 2px;
  }

  .prestige-journey-scroll-item {
    min-height: 132px;
  }

  .prestige-journey-scroll-year {
    padding-right: 13px;
  }

  .prestige-journey-scroll-year :deep(.prestige-metallic-number) {
    font-size: clamp(28px, 9vw, 38px);
  }

  .prestige-journey-scroll-marker {
    padding-top: 7px;
  }

  .prestige-journey-scroll-marker span {
    width: 13px;
    height: 13px;
    border-width: 2px;
  }

  .prestige-journey-scroll-content {
    padding: 0 0 20px 8px;
  }

  .prestige-journey-scroll-content h3 {
    font-size: clamp(16px, 4.8vw, 20px);
  }

  .prestige-journey-scroll-content p {
    font-size: 13.5px;
    line-height: 1.55;
  }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-journey-scroll-progress {
    transform: translateX(-50%) scaleY(1) !important;
  }

  .prestige-journey-scroll-content {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
