<template>
  <section ref="root" class="svh" :style="{ height: scrollVh + 'vh' }">
    <div class="svh__pin">
      <video
        ref="videoEl"
        class="svh__video"
        :src="src"
        :poster="poster"
        muted
        playsinline
        preload="auto"
      />
      <div class="svh__veil" />
      <div class="svh__cue" aria-hidden="true"><span /></div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string;
    poster?: string;
    /** how many viewport-heights of scrolling drive the full video */
    scrollVh?: number;
  }>(),
  { poster: "", scrollVh: 400 },
);

const root = ref<HTMLElement | null>(null);
const videoEl = ref<HTMLVideoElement | null>(null);

let raf = 0;
let current = 0;
let io: IntersectionObserver | null = null;

onMounted(() => {
  if (import.meta.server) return;
  const v = videoEl.value;
  const r = root.value;
  if (!v || !r) return;
  v.pause();

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Read scroll position every frame (no dependency on scroll events, which
  // can be swallowed by smooth-scroll libs) and ease the video's currentTime
  // toward the target derived from how far we've scrolled through the section.
  const frame = () => {
    const dur = v.duration;
    if (dur && isFinite(dur)) {
      const rect = r.getBoundingClientRect();
      const total = Math.max(r.offsetHeight - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const target = (scrolled / total) * dur;
      current = reduce ? target : current + (target - current) * 0.15;
      if (Math.abs(target - current) < 0.004) current = target;
      // only seek when it actually changed, to avoid redundant work when idle
      if (v.readyState >= 2 && Math.abs(v.currentTime - current) > 0.01) {
        try {
          v.currentTime = current;
        } catch {
          /* not seekable yet */
        }
      }
    }
    raf = requestAnimationFrame(frame);
  };
  const startLoop = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };
  const stopLoop = () => {
    if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };

  // only run the loop while the hero is on screen
  io = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) startLoop();
      else stopLoop();
    },
    { threshold: 0 },
  );
  io.observe(r);
  startLoop();
});

onBeforeUnmount(() => {
  if (raf) cancelAnimationFrame(raf);
  io?.disconnect();
});
</script>

<style scoped>
.svh {
  position: relative;
  width: 100%;
  background: #000;
}
/* CSS sticky pin — bulletproof, no JS pinning needed */
.svh__pin {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #000;
}
.svh__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.svh__veil {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 26vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
  pointer-events: none;
}
/* minimal scroll cue (no logo / no text, per brief) */
.svh__cue {
  position: absolute;
  left: 50%;
  bottom: 34px;
  transform: translateX(-50%);
  width: 24px;
  height: 38px;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 14px;
}
.svh__cue span {
  position: absolute;
  top: 8px;
  left: 50%;
  width: 3px;
  height: 7px;
  border-radius: 3px;
  background: #fff;
  transform: translateX(-50%);
  animation: svhCue 1.6s ease-in-out infinite;
}
@keyframes svhCue {
  0% { opacity: 0; transform: translate(-50%, 0); }
  40% { opacity: 1; }
  100% { opacity: 0; transform: translate(-50%, 12px); }
}
@media (prefers-reduced-motion: reduce) {
  .svh__cue span { animation: none; }
}
</style>
