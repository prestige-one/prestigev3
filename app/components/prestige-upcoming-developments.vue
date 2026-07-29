<template>
  <section class="prestige-developments-area pb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="prestige-developments-title-box text-center">
            <h2 class="prestige-developments-title prestige-text-paint">
              Upcoming Projects
            </h2>
            <img
              src="/assets/images/v3/slogan.png"
              alt="The Heart of Every Location"
              class="prestige-developments-slogan"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- static 2-box grid instead of a slider (only 2 projects) — same
         hover-distortion effect as /portfolio-col-2
         (portfolio-two-col-area.vue: useHoverEffect + tp--hover-item /
         tp--hover-img), boxed in the page .container rather than
         full-bleed. -->
    <div class="container">
      <div class="row">
        <div v-for="item in upcomingDevelopments" :key="item.id" class="col-md-6">
          <div class="prestige-upcoming-item mb-40">
            <div :ref="addToRefs" class="prestige-upcoming-thumb tp--hover-item">
              <NuxtLink :to="linkFor(item)">
                <div class="tp--hover-img" data-displacement="/img/webgl/1.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img :src="item.image" :alt="item.title">
                </div>
              </NuxtLink>
            </div>
            <div class="prestige-upcoming-content text-center">
              <h4 class="prestige-upcoming-title">
                <NuxtLink class="tp-line-white" :to="linkFor(item)">
                  {{ item.title }}
                </NuxtLink>
              </h4>
              <span class="prestige-upcoming-location">[{{ item.location }}]</span>
              <p class="prestige-upcoming-description">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import upcomingDevelopments from "../data/upcoming-developments-data";
import { slugify } from "../data/projects";
import type { DevelopmentSlide } from "../data/residential-developments-data";

const { addToRefs } = useHoverEffect();

function linkFor(item: DevelopmentSlide) {
  return item.href && item.href !== "#" ? item.href : `/projects/${slugify(item.title)}`;
}
</script>

<style scoped>
.prestige-developments-title {
  font-size: clamp(28px, 4.5vw, 52px);
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* same small, contained aurora-style glow as the residential section's
   headline — see prestige-our-developments.vue for the full rationale. */
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
  margin: 0 auto 50px;
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

/* mirrors .tp-portfolio-inner-* from portfolio-two-col-area.vue
   (/portfolio-col-2) — rounded thumb, CSS zoom on hover layered on top
   of the WebGL ripple-distortion effect from useHoverEffect(). */
.prestige-upcoming-thumb {
  overflow: hidden;
  margin-bottom: 26px;
  border-radius: 20px;
}

.prestige-upcoming-thumb img {
  width: 100%;
  display: block;
  transition: 0.9s;
  border-radius: 20px;
}

.prestige-upcoming-item:hover .prestige-upcoming-thumb img {
  transform: scale(1.1);
}

.prestige-upcoming-title {
  font-size: 30px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -1px;
  color: #fff;
  margin: 0 0 8px;
}

.prestige-upcoming-location {
  font-size: 15px;
  font-weight: 500;
  display: inline-block;
  color: rgba(255, 255, 255, 0.6);
}

.prestige-upcoming-description {
  margin: 10px 0 0;
  font-size: 15px;
  line-height: 1.5;
  color: rgb(255, 255, 255);
}
</style>
