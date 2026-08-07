<template>
  <div class="prestige-hero">
    <video
      class="prestige-hero-video"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="/assets/videos/Hero-Video-opt.mp4" type="video/mp4">
    </video>
    <div class="prestige-hero-overlay" />
    <div class="prestige-hero-bottom-fade" />

    <div class="prestige-hero-content" />

    <div class="prestige-hero-logo">
      <img src="/assets/images/v3/only-logo-light.webp" alt="Prestige One">
    </div>

    <div class="prestige-hero-headline prestige-hero-headline-1">
      <h2>{{ $t('hp.hero.headline1') }}</h2>
    </div>
    <div class="prestige-hero-headline prestige-hero-headline-2">
      <h2>{{ $t('hp.hero.headline2') }}</h2>
    </div>
    <div class="prestige-hero-headline prestige-hero-headline-3">
      <h2>{{ $t('hp.hero.headline3') }}</h2>
    </div>

    <!-- mobile-only static hero (the scroll-driven sequence above is
         desktop-only, >=992px) -->
    <div class="prestige-hero-mobile">
      <img class="prestige-hero-mobile-logo" src="/assets/images/v3/only-logo-light.webp" alt="Prestige One">
      <h2 class="prestige-hero-mobile-title">{{ $t('hp.hero.mobileTitle') }}</h2>
      <span class="prestige-hero-mobile-sub">{{ $t('hp.hero.mobileSub') }}</span>
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

/* hidden by default so the video reads clean and bright on load - GSAP
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
  width: min(190px, 25vw);
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

/* the 3 story sentences each get their own padded wrapper */
.prestige-hero-headline-1,
.prestige-hero-headline-2,
.prestige-hero-headline-3 {
  padding: 20px 10px;
}
 
/* mobile-only static hero content - hidden on desktop where the GSAP
   scroll sequence runs (>=992px) */
.prestige-hero-mobile {
  display: none;
}

@media (max-width: 991px) {
  .prestige-hero-logo,
  .prestige-hero-headline {
    display: none;
  }
  .prestige-hero-mobile {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 26px 12vh;
    gap: 18px;
  }
  .prestige-hero-mobile-logo {
    width: min(180px, 44vw);
    height: auto;
    opacity: 0;
    animation: prestigeHeroMobileIn 1s ease 0.2s forwards;
  }
  .prestige-hero-mobile-title {
    font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
    font-size: clamp(26px, 8vw, 40px);
    font-weight: 400;
    line-height: 1.15;
    color: #fff;
    margin: 0;
    max-width: 460px;
    opacity: 0;
    animation: prestigeHeroMobileIn 1s ease 0.5s forwards;
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
  }
  .prestige-hero-mobile-sub {
    font-size: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--tp-common-gold, #ffffff);
    opacity: 0;
    animation: prestigeHeroMobileIn 1s ease 0.8s forwards;
  }
  /* keep the overlay visible on mobile so text stays legible over video */
  .prestige-hero-overlay {
    opacity: 1;
  }
}

@keyframes prestigeHeroMobileIn {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.prestige-hero-headline h2 {
  font-size: clamp(20px, 2vw, 33px);
	font-weight: 400;
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
