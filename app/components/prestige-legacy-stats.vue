<template>
  <section class="prestige-legacy-area pb-40">
    <div class="container container-1430 prestige-legacy-panel">
      <div class="prestige-legacy-header">
        <span class="prestige-legacy-eyebrow">OUR LEGACY</span>
        <h2 class="prestige-legacy-title tp_reveal_anim" data-delay="0.05">
          Decades of Experience. Built for What's Next.
        </h2>
      </div>

      <div
        ref="gridRef"
        class="prestige-legacy-grid"
        :class="{ 'is-visible': isVisible }"
        role="list"
      >
        <article
          v-for="(stat, index) in legacyStats"
          :key="stat.id"
          class="prestige-legacy-stat"
          :style="{ '--prestige-legacy-delay': `${index * 90}ms` }"
          role="listitem"
        >
          <div class="prestige-legacy-stat-value">
            <span class="prestige-legacy-stat-number" aria-hidden="true">
              <prestige-metallic-number :value="formatValue(index)" />
              <span class="prestige-legacy-stat-suffix">{{ stat.suffix }}</span>
            </span>
          </div>
          <span class="visually-hidden">{{ formatFinalValue(stat) }}{{ stat.suffix }} {{ stat.label }}</span>
          <span class="prestige-legacy-stat-label">{{ stat.label }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface LegacyStat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  thousands?: boolean;
}

const legacyStats: LegacyStat[] = [
  { id: 1, value: 60, suffix: " Years", label: "Group Business Legacy" },
  { id: 2, value: 19, suffix: " Years", label: "Dubai Real Estate Experience" },
  { id: 3, value: 32, suffix: "+", label: "Projects in Development" },
  { id: 4, value: 3500, suffix: "+", label: "Residential & Commercial Units", thousands: true },
  { id: 5, value: 21, suffix: "+", label: "Destinations Worldwide" },
];

const countedValues = ref<number[]>(legacyStats.map(() => 0));
const gridRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let started = false;
let observer: IntersectionObserver | null = null;
let animationFrameId: number | null = null;

function formatValue(index: number) {
  const stat = legacyStats[index];
  const value = countedValues.value[index] ?? 0;
  return stat?.thousands ? value.toLocaleString("en-US") : value;
}

function formatFinalValue(stat: LegacyStat) {
  return stat.thousands ? stat.value.toLocaleString("en-US") : stat.value;
}

function animateStats() {
  const duration = 1400;
  const startTime = performance.now();

  const tick = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    legacyStats.forEach((stat, index) => {
      countedValues.value[index] = Math.round(stat.value * eased);
    });

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(tick);
    }
  };

  animationFrameId = requestAnimationFrame(tick);
}

onMounted(() => {
  if (!gridRef.value) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    countedValues.value = legacyStats.map((stat) => stat.value);
    isVisible.value = true;
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          isVisible.value = true;
          animateStats();
          observer?.disconnect();
        }
      });
    },
    { threshold: 0.25 }
  );
  observer.observe(gridRef.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
.prestige-legacy-panel {
  padding: clamp(40px, 5vw, 64px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background:
    radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.045), transparent 42%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0.008));
}

.prestige-legacy-header {
  max-width: 820px;
  margin: 0 auto clamp(38px, 5vw, 58px);
  text-align: center;
}

.prestige-legacy-eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 18px;
}

.prestige-legacy-eyebrow::before {
  display: none;
}

.prestige-legacy-title {
  font-size: var(--prestige-about-section-title-size, clamp(25px, 2.3vw, 40px));
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.5px;
  color: #fff;
  margin: 0 auto;
}

.prestige-legacy-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(16px, 2vw, 24px);
}

.prestige-legacy-stat {
  --prestige-legacy-delay: 0ms;
  --prestige-legacy-card-accent: 105, 139, 161;
  grid-column: span 2;
  display: flex;
  min-height: clamp(210px, 20vw, 250px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding: clamp(34px, 4vw, 50px) clamp(20px, 3vw, 36px);
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 8px;
  background:
    radial-gradient(
      circle at 12% 0%,
      rgba(var(--prestige-legacy-card-accent), 0.2),
      transparent 58%
    ),
    linear-gradient(
      145deg,
      rgba(var(--prestige-legacy-card-accent), 0.09),
      rgba(14, 17, 21, 0.88) 58%,
      rgba(var(--prestige-legacy-card-accent), 0.035)
    );
  text-align: center;
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 0.65s ease var(--prestige-legacy-delay),
    transform 0.65s ease var(--prestige-legacy-delay),
    border-color 0.35s ease;
}

.prestige-legacy-stat:nth-child(n + 4) {
  grid-column: span 3;
}

.prestige-legacy-grid.is-visible .prestige-legacy-stat {
  opacity: 1;
  transform: translateY(0);
}

.prestige-legacy-stat-value {
  width: 100%;
}

.prestige-legacy-stat-number {
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
  font-size: clamp(52px, 5vw, 72px);
  line-height: 1;
  letter-spacing: -2px;
}

.prestige-legacy-stat-suffix {
  font-size: 0.32em;
  font-weight: 400;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 0.72);
}

.prestige-legacy-stat-label {
  display: block;
  max-width: 240px;
  margin: 22px auto 0;
  padding-top: 18px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
}

.prestige-legacy-stat-label::before {
  content: "";
  display: block;
  width: 38px;
  height: 1px;
  margin: 0 auto 18px;
  background: rgba(255, 255, 255, 0.14);
}

@media (max-width: 991.98px) {
  .prestige-legacy-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .prestige-legacy-stat,
  .prestige-legacy-stat:nth-child(n + 4) {
    grid-column: auto;
  }

  .prestige-legacy-stat:last-child {
    grid-column: 1 / -1;
    width: calc(50% - 12px);
    justify-self: center;
  }
}

@media (max-width: 767.98px) {
  .prestige-legacy-area {
    padding-bottom: 100px;
  }

  .prestige-legacy-header {
    margin-bottom: 32px;
  }

  .prestige-legacy-panel {
    width: calc(100% - 30px);
    padding: 30px 20px 20px;
    border-radius: 8px;
  }

  .prestige-legacy-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .prestige-legacy-stat,
  .prestige-legacy-stat:last-child {
    grid-column: auto;
    width: 100%;
    min-height: 190px;
    padding: 32px 18px;
  }

  .prestige-legacy-stat-number {
    font-size: clamp(48px, 15vw, 62px);
    letter-spacing: -2px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-legacy-stat {
    transition: none;
  }
}
</style>
