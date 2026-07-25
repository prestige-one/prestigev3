<template>
  <div class="prestige-hero">
    <video
      class="prestige-hero-video"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="/assets/videos/Hero-Video-v1.mp4" type="video/mp4">
    </video>
    <div class="prestige-hero-overlay" />
    <div class="prestige-hero-bottom-fade" />

    <div class="prestige-hero-content" />

    <div class="prestige-hero-logo">
      <img src="/assets/images/v3/only-logo-light.webp" alt="Prestige One">
    </div>

    <div class="prestige-hero-headline prestige-hero-headline-story">
      <h2>Our Story</h2>
    </div>
    <div class="prestige-hero-headline prestige-hero-headline-1">
      <h2>It started with a vision</h2>
    </div>
    <div class="prestige-hero-headline prestige-hero-headline-2">
      <h2>To create homes people truly love living in</h2>
    </div>
    <div class="prestige-hero-headline prestige-hero-headline-3">
      <h2>Today, that vision shapes every Prestige One home</h2>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.prestige-hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
}

.prestige-hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
}

/* hidden by default so the video reads clean and bright on load — GSAP
   fades it in (see prestige-hero-animation.ts) right before the headlines
   start appearing, then leaves it in place for the rest of the sequence. */
.prestige-hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.44);
  opacity: 0;
}

.prestige-hero-bottom-fade {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 42vh;
  min-height: 160px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  pointer-events: none;
  z-index: 1;
}

.prestige-hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
}

.prestige-hero-logo {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
}

.prestige-hero-logo img {
  width: min(460px, 40vw);
  height: auto;
}

.prestige-hero-headline {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  opacity: 0;
  pointer-events: none;
}

/* each later headline stacks above the previous so it visually covers it
   as it reveals in */
.prestige-hero-headline-1 {
  z-index: 3;
}

.prestige-hero-headline-2 {
  z-index: 4;
}

.prestige-hero-headline-3 {
  z-index: 5;
}

/* the 3 story sentences (not the "Our Story" title) each get their own
   padded wrapper */
.prestige-hero-headline-1,
.prestige-hero-headline-2,
.prestige-hero-headline-3 {
  padding: 20px 10px;
}

.prestige-hero-headline h2 {
  font-size: clamp(20px, 3vw, 45px);
  font-weight: 500;
  line-height: 1.2;
  max-width: 900px;
  margin: 0 auto;
  /* brighter glow so the revealed text reads as a clear focal point
     against the video, not just a plain dark drop-shadow */
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35), 0 0 45px rgba(255, 255, 255, 0.6);

  /* text-paint reveal, same technique as .tp_text_invert but tuned for
     white text on a dark video background: starts dim, sweeps in bright
     white left-to-right as backgroundPositionX animates 100% -> 0%. */
  background-image: linear-gradient(
    to right,
    #ffffff 50%,
    rgba(255, 255, 255, 0.32) 50%
  );
  background-size: 200% 100%;
  background-position-x: 100%;
  color: white;
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
