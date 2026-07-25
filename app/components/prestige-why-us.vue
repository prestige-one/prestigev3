<template>
  <section class="prestige-why-us-area pt-120 pb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="prestige-developments-title-box text-center">
            <h2 class="prestige-developments-title prestige-text-paint">
              Why Prestige One
            </h2>
            <p class="prestige-developments-subtitle">
              Built on Strong Principles
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
/* thin separator from the section above (Upcoming Projects) — subtle,
   matching the site's other hairline borders (e.g. footer copyright bar,
   offcanvas contact icons) rather than a hard visual break. */
.prestige-why-us-area {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.prestige-developments-title {
  font-size: clamp(28px, 4.5vw, 52px);
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.prestige-developments-subtitle {
  font-size: clamp(14px, 1.6vw, 18px);
  margin: 0;
  color: #fff;
}

/* same small, contained aurora-style glow as the developments sections'
   headlines — see prestige-our-developments.vue for the full rationale. */
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

/* text-paint reveal — same technique as the hero's 3 sentences: a gradient
   text-clip swept via backgroundPositionX. Driven by a scrub ScrollTrigger
   (see prestige-developments-reveal.ts) so it plays forward on scroll down
   and un-paints in reverse on scroll up, exactly like the hero sentences.
   The scroll trigger and the subtitle zoom are wired generically off these
   same class names, so this section picks them up automatically. */
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
