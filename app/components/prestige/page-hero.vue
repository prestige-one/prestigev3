<template>
  <section ref="root" class="prestige-hero-band" :class="{ 'prestige-hero-band--short': short }">
    <div class="prestige-hero-band__media">
      <video
        v-if="video"
        ref="videoRef"
        :src="video"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        :poster="image"
        :style="mediaPosition ? { objectPosition: mediaPosition } : undefined"
        @canplay="playVideo"
      />
      <img
        v-else-if="image"
        :src="image"
        :alt="title"
        :style="mediaPosition ? { objectPosition: mediaPosition } : undefined"
      >
    </div>
    <div class="prestige-hero-band__veil" />
    <div ref="inner" class="prestige-hero-band__inner container container-1430">
      <div class="row">
        <div class="col-xl-9">
          <span v-if="eyebrow" class="prestige-hero-band__eyebrow tp_fade_anim" data-delay=".2">{{ eyebrow }}</span>
          <h1 class="prestige-hero-band__title tp_fade_anim" data-delay=".3">{{ title }}</h1>
          <p v-if="lead" class="prestige-hero-band__lead tp_fade_anim" data-delay=".45">{{ lead }}</p>
          <div v-if="showActions && $slots.actions" class="prestige-hero-band__actions tp_fade_anim" data-delay=".55">
            <slot name="actions" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string;
  eyebrow?: string;
  lead?: string;
  image?: string;
  video?: string;
  short?: boolean;
  mediaPosition?: string;
  showActions?: boolean;
}>(), {
  showActions: true,
});

const root = ref<HTMLElement | null>(null);
const inner = ref<HTMLElement | null>(null);
const videoRef = ref<HTMLVideoElement | null>(null);

function playVideo() {
  const element = videoRef.value;
  if (!element) return;
  element.muted = true;
  void element.play().catch(() => {
    // The muted autoplay attributes handle supported browsers; a rejected
    // promise simply means the browser requires direct user interaction.
  });
}

// layered parallax: the hero copy drifts up and fades as the hero scrolls
// away, at a different rate than the ken-burns image behind it - depth.
onMounted(async () => {
  if (import.meta.server) return;
  playVideo();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!root.value || !inner.value) return;
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/all");
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(inner.value, {
    yPercent: -24,
    opacity: 0.25,
    ease: "none",
    scrollTrigger: {
      trigger: root.value,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});
</script>

<style scoped>
.prestige-hero-band--short {
  min-height: 58vh;
}
.prestige-hero-band__actions {
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

/* slow ken-burns drift on the hero media for a living, cinematic feel */
.prestige-hero-band :deep(.prestige-hero-band__media img),
.prestige-hero-band :deep(.prestige-hero-band__media video) {
  animation: prestigeKenBurns 22s ease-in-out infinite alternate;
  transform-origin: center;
}
@keyframes prestigeKenBurns {
  from { transform: scale(1.02); }
  to { transform: scale(1.12); }
}
@media (prefers-reduced-motion: reduce) {
  .prestige-hero-band :deep(.prestige-hero-band__media img),
  .prestige-hero-band :deep(.prestige-hero-band__media video) {
    animation: none;
  }
}
</style>
