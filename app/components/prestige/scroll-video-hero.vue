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
let autoY = 0;
let autoInit = false;
let lastManual = 0;
let io: IntersectionObserver | null = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let markManual: any = null;

onMounted(() => {
  if (import.meta.server) return;
  const v = videoEl.value;
  const r = root.value;
  if (!v || !r) return;
  v.pause();

  // prime the decoder: a muted play()->pause() forces the first frame to paint
  // and makes seeking responsive immediately (otherwise a paused video can sit
  // black until the first seek decodes).
  const prime = () => {
    const p = v.play();
    if (p && typeof p.then === "function") {
      p.then(() => v.pause()).catch(() => {});
    } else {
      v.pause();
    }
  };
  if (v.readyState >= 2) prime();
  else v.addEventListener("loadeddata", prime, { once: true });

  // Don't auto-scroll until the clip can play through, and never seek past what
  // has downloaded — seeking ahead of the buffer is what makes it stall at the
  // very start (before scrolling has "primed" the buffer).
  let canScrub = v.readyState >= 4;
  const markReady = () => {
    canScrub = true;
  };
  if (!canScrub) {
    v.addEventListener("canplaythrough", markReady, { once: true });
    v.addEventListener("canplay", markReady, { once: true });
    // safety net: enable after a moment even if those events are missed
    window.setTimeout(markReady, 2500);
  }
  const bufferedEnd = () => {
    try {
      return v.buffered.length ? v.buffered.end(v.buffered.length - 1) : 0;
    } catch {
      return 0;
    }
  };

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // auto-scroll only on desktop pointers — on touch it would fight finger-scroll
  const desktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const autoAllowed = desktop && !reduce;
  // seconds to auto-play the whole clip (capped so the hero doesn't drag)
  const AUTO_SECONDS = 18;

  // pause auto-scroll whenever the user drives the page themselves
  markManual = () => {
    lastManual = performance.now();
  };
  window.addEventListener("wheel", markManual, { passive: true });
  window.addEventListener("touchmove", markManual, { passive: true });
  window.addEventListener("keydown", markManual);

  // Read scroll position every frame (no dependency on scroll events) and ease
  // the video's currentTime toward the target derived from how far through the
  // section we are. While the section is pinned and the user is idle, gently
  // auto-scroll so the video plays on its own — but the moment they scroll,
  // they take over.
  const frame = () => {
    const dur = v.duration;
    if (dur && isFinite(dur)) {
      const total = Math.max(r.offsetHeight - window.innerHeight, 1);
      let rect = r.getBoundingClientRect();
      const pinned = rect.top <= 0.5;
      const scrolled0 = Math.min(Math.max(-rect.top, 0), total);
      const atEnd = scrolled0 >= total - 1;
      const idle = performance.now() - lastManual > 1100;

      if (autoAllowed && pinned && !atEnd && idle && canScrub) {
        if (!autoInit) {
          autoY = window.scrollY;
          autoInit = true;
        }
        autoY += total / (AUTO_SECONDS * 60);
        window.scrollTo(0, Math.round(autoY));
      } else {
        autoY = window.scrollY;
        autoInit = pinned;
      }

      rect = r.getBoundingClientRect();
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const target = (scrolled / total) * dur;
      current = reduce ? target : current + (target - current) * 0.2;
      if (Math.abs(target - current) < 0.004) current = target;
      // clamp the seek to what's actually buffered so we never seek into the
      // void (which stalls the element), and don't queue a seek while one is
      // still resolving
      const be = bufferedEnd();
      const seekTo = be > 0.2 ? Math.min(current, be - 0.15) : current;
      if (v.readyState >= 2 && !v.seeking && Math.abs(v.currentTime - seekTo) > 0.01) {
        try {
          v.currentTime = seekTo;
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
  if (markManual) {
    window.removeEventListener("wheel", markManual);
    window.removeEventListener("touchmove", markManual);
    window.removeEventListener("keydown", markManual);
  }
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
