<template>
  <section class="prestige-developments-area pt-120 pb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="prestige-developments-title-box text-center">
            <h2 class="prestige-developments-title prestige-text-paint">
              Our Developments
            </h2>
            <p class="prestige-developments-subtitle">
              From vision to reality
            </p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xl-8">
          <img
            src="/assets/images/v3/slogan.png"
            alt="The Heart of Every Location"
            class="prestige-developments-slogan"
          >
        </div>
      </div>
    </div>

    <!-- theater-mode coverflow slider, same effect as /dark/portfolio-coverflow-slider
         (portfolio-coverflow-slider.vue) — kept as the original slider for
         this first section; the two-row marquee variant
         (prestige-residential-marquee.vue) is not used here anymore. -->
    <prestige-coverflow-slider :slides="residentialDevelopments" />
  </section>
</template>

<script setup lang="ts">
import residentialDevelopments from "../data/residential-developments-data";
</script>

<style scoped>
.prestige-developments-title {
  font-size: clamp(25px, 3vw, 55px);
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.prestige-developments-subtitle {
  font-size: clamp(14px, 1.6vw, 18px);
  margin: 0 0 36px;
  color: #fff;
}

/* soft aurora-style glow behind the headline — same idea as the "why
   choose us" section's gradient-shape image on /dark/unique-ai-image, but
   rebuilt as a small, contained CSS gradient (that page's pastel PNG is
   sized for a full light-page backdrop and would bleed edge-to-edge here).
   Kept compact and positioned within the title box's own top padding so it
   never reaches up into the hero section's bottom-fade gradient above it. */
.prestige-developments-title-box {
  position: relative;
}

.prestige-developments-title-box::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: min(560px, 90vw);
  height: 320px;
  z-index: -1;
  pointer-events: none;
  background-image: radial-gradient(
      circle at 65% 35%,
      rgba(120, 210, 255, 0.32),
      transparent 60%
    ),
    radial-gradient(circle at 32% 68%, rgba(255, 140, 210, 0.24), transparent 60%);
  filter: blur(60px);
}

.prestige-developments-slogan {
  display: block;
  width: 270px;
  height: auto;
  margin: 0 auto 30px;
  opacity: 0.7;
}


/* text-paint reveal — same technique as the hero's 3 sentences: a gradient
   text-clip swept via backgroundPositionX. Driven by a scrub ScrollTrigger
   (see prestige-developments-reveal.ts) so it plays forward on scroll down
   and un-paints in reverse on scroll up, exactly like the hero sentences. */
.prestige-text-paint {
  background-image: linear-gradient(
    to right,
    #ffffff 50%,
    rgba(255, 255, 255, 0.32) 50%
  );
  background-size: 200% 100%;
  background-position-x: 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
