<template>
  <section class="prestige-legacy-area" aria-labelledby="prestige-legacy-title">
    <div class="prestige-legacy-shell">
      <header class="prestige-legacy-copy">
        <span class="prestige-legacy-eyebrow">{{ t("ap.legacy.eyebrow") }}</span>
        <h2
          id="prestige-legacy-title"
          class="prestige-legacy-title tp_reveal_anim"
          data-delay="0.05"
          data-duration="1.1"
          data-stagger="0.025"
        >
          {{ t("ap.legacy.title") }}
        </h2>
        <span class="prestige-legacy-copy-line" aria-hidden="true"></span>
      </header>

      <figure class="prestige-legacy-artwork anim-zoomin">
        <img
          src="/assets/images/v3/60yrs-2.webp"
          width="560"
          height="700"
          alt="60 years of group business legacy"
          loading="eager"
          decoding="async"
        />
      </figure>

      <div
        ref="statsRef"
        class="prestige-legacy-metrics"
        :class="{ 'is-visible': isVisible }"
        role="list"
        :aria-label="t('ap.legacy.eyebrow')"
      >
        <article
          v-for="(stat, index) in legacyStats"
          :key="stat.id"
          class="prestige-legacy-metric"
          :style="{ '--prestige-legacy-delay': `${index * 100}ms` }"
          role="listitem"
        >
          <span class="prestige-legacy-node" aria-hidden="true"></span>

          <div class="prestige-legacy-number-wrap" aria-hidden="true">
            <span class="prestige-legacy-number">{{ formatValue(index) }}</span>
            <span v-if="stat.suffix" class="prestige-legacy-suffix">{{ stat.suffix }}</span>
            <span v-if="stat.unit" class="prestige-legacy-unit">{{ stat.unit }}</span>
          </div>

          <span class="prestige-legacy-metric-line" aria-hidden="true"></span>
          <p class="prestige-legacy-label">{{ stat.label }}</p>
          <span class="visually-hidden">{{ formatFinalValue(stat) }}{{ stat.suffix }} {{ stat.unit }} {{ stat.label }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface LegacyStat {
  id: number;
  value: number;
  suffix?: string;
  unit?: string;
  label: string;
  thousands?: boolean;
}

const { t } = useI18n();

const legacyStats = computed<LegacyStat[]>(() => [
  { id: 1, value: 19, unit: t("ap.legacy.yearsSuffix").trim(), label: t("ap.legacy.stat2") },
  { id: 2, value: 32, suffix: "+", label: t("ap.legacy.stat3") },
  { id: 3, value: 3500, suffix: "+", label: t("ap.legacy.stat4"), thousands: true },
  { id: 4, value: 21, suffix: "+", label: t("ap.legacy.stat5") },
]);

const countedValues = ref<number[]>(legacyStats.value.map((stat) => stat.value));
const statsRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;
let animationFrameId: number | null = null;
let hasAnimated = false;

function formatValue(index: number) {
  const stat = legacyStats.value[index];
  const value = countedValues.value[index] ?? 0;
  return stat?.thousands ? value.toLocaleString("en-US") : value;
}

function formatFinalValue(stat: LegacyStat) {
  return stat.thousands ? stat.value.toLocaleString("en-US") : stat.value;
}

function animateStats() {
  const duration = 1500;
  const startTime = performance.now();

  const tick = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    legacyStats.value.forEach((stat, index) => {
      countedValues.value[index] = Math.round(stat.value * eased);
    });

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(tick);
    }
  };

  animationFrameId = requestAnimationFrame(tick);
}

onMounted(() => {
  if (!statsRef.value) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    isVisible.value = true;
    return;
  }

  countedValues.value = legacyStats.value.map(() => 0);
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting || hasAnimated) return;

      hasAnimated = true;
      isVisible.value = true;
      animateStats();
      observer?.disconnect();
    },
    { threshold: 0.25 }
  );
  observer.observe(statsRef.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
.prestige-legacy-area {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: clamp(76px, 6vw, 95px) 0;
  background: #000;
}

.prestige-legacy-area::after {
  position: absolute;
  z-index: -1;
  inset: 0;
  content: "";
  opacity: 0.17;
  pointer-events: none;
  background-image: linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px);
  background-size: 100% 5px;
}

.prestige-legacy-shell {
  display: grid;
  grid-template-columns: minmax(250px, 0.85fr) minmax(370px, 1.15fr) minmax(430px, 1.1fr);
  align-items: center;
  width: min(calc(100% - 72px), 1580px);
  min-height: clamp(560px, 40vw, 650px);
  margin: 0 auto;
}

.prestige-legacy-copy {
  position: relative;
  z-index: 2;
  align-self: center;
  padding-right: clamp(20px, 2vw, 40px);
}

.prestige-legacy-eyebrow {
  display: block;
  margin-bottom: clamp(30px, 3vw, 46px);
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 8px;
  color: rgba(255, 255, 255, 0.88);
  text-transform: uppercase;
}

.prestige-legacy-title {
  max-width: 430px;
  margin: 0;
  font-size: clamp(48px, 4.2vw, 70px);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -2.3px;
  color: #f5f6f7;
}

.prestige-legacy-copy-line {
  display: block;
  width: min(100%, 155px);
  height: 1px;
  margin-top: clamp(34px, 4vw, 56px);
  background: linear-gradient(90deg, rgba(235, 242, 247, 0.9), rgba(235, 242, 247, 0));
}

.prestige-legacy-artwork {
  position: relative;
  z-index: 1;
  isolation: isolate;
  width: 100%;
  margin: 0;
}

.prestige-legacy-artwork::before {
  position: absolute;
  z-index: -1;
  top: 48%;
  left: 50%;
  width: 66%;
  aspect-ratio: 0.82;
  content: "";
  pointer-events: none;
  background: radial-gradient(
    ellipse at center,
    rgba(218, 233, 244, 0.28) 0%,
    rgba(126, 157, 179, 0.15) 38%,
    rgba(76, 101, 120, 0.06) 58%,
    transparent 76%
  );
  filter: blur(30px);
  transform: translate(-50%, -50%);
}

.prestige-legacy-artwork img {
  position: relative;
  z-index: 1;
  display: block;
  width: 82%;
  max-width: 460px;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
  -webkit-mask-image: radial-gradient(ellipse 78% 88% at center, #000 64%, transparent 100%);
  mask-image: radial-gradient(ellipse 78% 88% at center, #000 64%, transparent 100%);
}

.prestige-legacy-metrics {
  position: relative;
  display: grid;
  align-self: stretch;
  align-content: center;
  min-width: 0;
  padding-left: 36px;
}

.prestige-legacy-metrics::before {
  position: absolute;
  top: 12.5%;
  bottom: 12.5%;
  left: 11px;
  width: 1px;
  content: "";
  background: linear-gradient(
    180deg,
    rgba(220, 231, 239, 0.12),
    rgba(220, 231, 239, 0.66) 8%,
    rgba(220, 231, 239, 0.66) 92%,
    rgba(220, 231, 239, 0.12)
  );
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 1.25s cubic-bezier(0.22, 1, 0.36, 1);
}

.prestige-legacy-metrics.is-visible::before {
  transform: scaleY(1);
}

.prestige-legacy-metric {
  --prestige-legacy-delay: 0ms;
  position: relative;
  display: grid;
  grid-template-columns: minmax(185px, 0.85fr) minmax(30px, 0.2fr) minmax(170px, 1fr);
  align-items: center;
  min-height: clamp(112px, 9vw, 148px);
  opacity: 0;
  transform: translateX(18px);
  transition:
    opacity 0.65s ease var(--prestige-legacy-delay),
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) var(--prestige-legacy-delay);
}

.prestige-legacy-metrics.is-visible .prestige-legacy-metric {
  opacity: 1;
  transform: translateX(0);
}

.prestige-legacy-node {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: -34px;
  width: 19px;
  height: 19px;
  border: 2px solid #dce6ed;
  border-radius: 50%;
  background: #0b0d10;
  transform: translateY(-50%) scale(0.72);
  transition: transform 0.45s ease calc(var(--prestige-legacy-delay) + 180ms);
}

.prestige-legacy-node::after {
  position: absolute;
  inset: 4px;
  border-radius: inherit;
  content: "";
  background: #dce6ed;
  opacity: 0;
  transition: opacity 0.4s ease calc(var(--prestige-legacy-delay) + 320ms);
}

.prestige-legacy-metrics.is-visible .prestige-legacy-node {
  transform: translateY(-50%) scale(1);
}

.prestige-legacy-metrics.is-visible .prestige-legacy-node::after {
  opacity: 1;
}

.prestige-legacy-number-wrap {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: baseline;
  justify-self: start;
  min-width: 118px;
  padding: 4px 14px 4px 0;
  background: transparent;
}

.prestige-legacy-number {
  display: inline-block;
  padding-right: 0.08em;
  margin-right: -0.08em;
  font-family: "Google Sans", "Google Sans Fallback: Arial", sans-serif;
  font-size: clamp(60px, 5vw, 60px);
  font-weight: 400;
  line-height: 0.8;
  letter-spacing: -4px;
  color: transparent;
  background: linear-gradient(180deg, #ffffff 0%, #ccd8df 45%, #f7fbfd 70%, #9aaab5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.4px rgba(247, 252, 255, 0.8);
}

.prestige-legacy-suffix {
  align-self: end;
  margin: 0 0 -1px 4px;
  font-family: "Cormorant Garamond", "Times New Roman", serif;
  font-size: clamp(35px, 3vw, 48px);
  font-weight: 300;
  line-height: 1;
  color: rgba(236, 242, 246, 0.9);
}

.prestige-legacy-unit {
  grid-column: 1 / -1;
  margin-top: 12px;
  padding-left: 8px;
  font-size: clamp(18px, 1.45vw, 25px);
  font-weight: 300;
  line-height: 1;
  color: rgba(247, 248, 249, 0.86);
}

.prestige-legacy-metric-line {
  display: block;
  height: 1px;
  background: linear-gradient(90deg, rgba(220, 231, 239, 0.72), rgba(220, 231, 239, 0.18));
}

.prestige-legacy-label {
  position: relative;
  z-index: 1;
  max-width: 220px;
  margin: 0;
  padding-left: 18px;
  font-size: clamp(12px, 1vw, 15px);
  font-weight: 400;
  line-height: 1.7;
  letter-spacing: 4px;
  color: rgba(247, 249, 250, 0.8);
  text-transform: uppercase;
  background: transparent;
}

@media (max-width: 1199.98px) {
  .prestige-legacy-shell {
    grid-template-columns: minmax(230px, 0.8fr) minmax(320px, 1fr) minmax(380px, 1.15fr);
    width: min(calc(100% - 48px), 1120px);
  }

  .prestige-legacy-title {
    font-size: clamp(42px, 4.3vw, 56px);
  }

  .prestige-legacy-metric {
    grid-template-columns: minmax(160px, 0.8fr) minmax(24px, 0.18fr) minmax(155px, 1fr);
  }

  .prestige-legacy-label {
    padding-left: 12px;
    letter-spacing: 2.5px;
  }
}

@media (max-width: 991.98px) {
  .prestige-legacy-area {
    padding: 90px 0;
  }

  .prestige-legacy-shell {
    grid-template-columns: minmax(240px, 0.8fr) minmax(340px, 1.2fr);
    width: min(calc(100% - 40px), 850px);
  }

  .prestige-legacy-metrics {
    grid-column: 1 / -1;
    width: min(100%, 720px);
    margin: 40px auto 0;
  }

  .prestige-legacy-metric {
    grid-template-columns: minmax(165px, 0.75fr) minmax(50px, 0.25fr) minmax(210px, 1fr);
  }

  .prestige-legacy-number {
    font-size: clamp(76px, 11vw, 96px);
  }
}

@media (max-width: 767.98px) {
  .prestige-legacy-area {
    padding: 80px 0;
  }

  .prestige-legacy-shell {
    display: block;
    width: min(calc(100% - 30px), 560px);
    min-height: auto;
  }

  .prestige-legacy-copy {
    padding-right: 0;
  }

  .prestige-legacy-eyebrow {
    margin-bottom: 24px;
    font-size: 11px;
    letter-spacing: 6px;
  }

  .prestige-legacy-title {
    max-width: 340px;
    font-size: clamp(40px, 12vw, 55px);
    line-height: 1.12;
    letter-spacing: -1.5px;
  }

  .prestige-legacy-copy-line {
    margin-top: 30px;
  }

  .prestige-legacy-artwork {
    width: min(100%, 440px);
    margin: 32px auto 18px;
  }

  .prestige-legacy-metrics {
    width: 100%;
    margin-top: 10px;
    padding-left: 30px;
  }

  .prestige-legacy-metrics::before {
    left: 8px;
  }

  .prestige-legacy-metric {
    grid-template-columns: minmax(105px, 0.65fr) minmax(18px, 0.15fr) minmax(130px, 1fr);
    min-height: 118px;
  }

  .prestige-legacy-node {
    left: -30px;
    width: 17px;
    height: 17px;
  }

  .prestige-legacy-number-wrap {
    min-width: 100px;
    padding-right: 8px;
  }

  .prestige-legacy-number {
    font-size: clamp(58px, 17vw, 76px);
    letter-spacing: -3px;
  }

  .prestige-legacy-suffix {
    font-size: clamp(28px, 8vw, 38px);
  }

  .prestige-legacy-unit {
    margin-top: 8px;
    padding-left: 4px;
    font-size: 16px;
  }

  .prestige-legacy-label {
    padding-left: 10px;
    font-size: 10px;
    line-height: 1.55;
    letter-spacing: 1.6px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-legacy-metrics::before,
  .prestige-legacy-metric,
  .prestige-legacy-node,
  .prestige-legacy-node::after {
    transition: none;
  }
}
</style>
