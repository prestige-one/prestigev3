<template>
  <div ref="root" class="prestige-counter">
    <span class="prestige-counter__value">{{ prefix }}{{ display }}{{ suffix }}</span>
    <span class="prestige-counter__label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
  }>(),
  {
    suffix: "",
    prefix: "",
  },
);

const root = ref<HTMLElement | null>(null);
// Fallback text (SSR / no-JS) always shows the final, rounded number so the
// stat is meaningful without JavaScript.
const display = ref<number>(Math.round(props.value));

let observer: IntersectionObserver | null = null;
let frame = 0;
let started = false;

const DURATION = 1600;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function run(): void {
  if (started) return;
  started = true;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    display.value = Math.round(props.value);
    return;
  }

  const target = props.value;
  const start = performance.now();

  const tick = (now: number): void => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / DURATION, 1);
    display.value = Math.round(target * easeOutCubic(progress));
    if (progress < 1) {
      frame = requestAnimationFrame(tick);
    } else {
      display.value = Math.round(target);
    }
  };

  // begin from zero so the count-up reads clearly
  display.value = 0;
  frame = requestAnimationFrame(tick);
}

onMounted(() => {
  if (!import.meta.client || !root.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          run();
          if (observer) observer.disconnect();
          break;
        }
      }
    },
    { threshold: 0.4 },
  );
  observer.observe(root.value);
});

onBeforeUnmount(() => {
  if (frame) cancelAnimationFrame(frame);
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.prestige-counter {
  text-align: center;
}
.prestige-counter__value {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(40px, 5vw, 68px);
  line-height: 1;
  color: #fff;
}
.prestige-counter__label {
  display: block;
  margin-top: 12px;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
}
</style>
