<template>
  <section class="prestige-residential-marquee-area pt-80 pb-80">
    <div v-if="!hideTitle" class="container container-1510">
      <div class="row">
        <div class="col-xl-6">
          <div class="prestige-residential-marquee-title-box mb-40">
            <h3 class="prestige-residential-marquee-title">Residential Projects</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="prestige-residential-marquee-wrap">
      <!-- top row, scrolling left -->
      <div class="prestige-residential-marquee-row">
        <div class="prestige-residential-marquee-track prestige-residential-marquee-track-left">
          <NuxtLink
            v-for="(item, index) in topRowSlides"
            :key="`top-${index}`"
            :to="item.href"
            class="prestige-residential-marquee-item"
          >
            <img :src="item.image" :alt="item.title">
            <span class="prestige-residential-marquee-caption">
              <span class="prestige-residential-marquee-name">{{ item.title }}</span>
              <small>[{{ item.location }}]</small>
              <span class="prestige-residential-marquee-description">{{ item.description }}</span>
            </span>
          </NuxtLink>
        </div>
      </div>

      <!-- bottom row, scrolling right — a different half of the project
           list than the top row (see script) so the same project never
           shows in both rows, moving opposite direction same as the
           Collaborators section's two-row logo marquee on
           /dark/service-3 -->
      <div class="prestige-residential-marquee-row">
        <div class="prestige-residential-marquee-track prestige-residential-marquee-track-right">
          <NuxtLink
            v-for="(item, index) in bottomRowSlides"
            :key="`bottom-${index}`"
            :to="item.href"
            class="prestige-residential-marquee-item"
          >
            <img :src="item.image" :alt="item.title">
            <span class="prestige-residential-marquee-caption">
              <span class="prestige-residential-marquee-name">{{ item.title }}</span>
              <small>[{{ item.location }}]</small>
              <span class="prestige-residential-marquee-description">{{ item.description }}</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import residentialDevelopments from "../data/residential-developments-data";

withDefaults(defineProps<{ hideTitle?: boolean }>(), { hideTitle: false });

// split the project list in half — one half per row — so the same
// project never appears in both rows at once (it used to be the full
// list on both, just scrolling opposite ways, which read as duplicated
// content). Each half is then doubled so its row's track is exactly two
// copies wide — paired with the -50% keyframe below, that's what makes
// the loop seamless: by the time it's translated a full copy-width, the
// second copy sits exactly where the first started.
const half = Math.ceil(residentialDevelopments.length / 2);
const topRowSlides = [
  ...residentialDevelopments.slice(0, half),
  ...residentialDevelopments.slice(0, half),
];
const bottomRowSlides = [
  ...residentialDevelopments.slice(half),
  ...residentialDevelopments.slice(half),
];
</script>

<style scoped>
.prestige-residential-marquee-title {
  font-size: clamp(22px, 2.4vw, 32px);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
  margin: 0;
}

.prestige-residential-marquee-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.prestige-residential-marquee-row {
  overflow: hidden;
}

.prestige-residential-marquee-track {
  display: flex;
  width: max-content;
  gap: 24px;
  animation: prestige-residential-marquee-scroll 45s linear infinite;
}

.prestige-residential-marquee-track:hover {
  animation-play-state: paused;
}

.prestige-residential-marquee-track-right {
  animation-direction: reverse;
}

@keyframes prestige-residential-marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* real project photography reads much smaller than the theme's usual
   marquee content (brand logos, tag pills) at their default sizing —
   sized up so each slide is a proper showcase card, not a strip icon. */
.prestige-residential-marquee-item {
  position: relative;
  flex: 0 0 auto;
  display: block;
  width: 460px;
  height: 340px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #211e1e;
}

.prestige-residential-marquee-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.prestige-residential-marquee-item:hover img {
  transform: scale(1.06);
}

.prestige-residential-marquee-caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  padding: 16px 18px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  opacity: 1;
  /* small, contained gradient behind just the text block rather than a
     fade sweeping most of the way up the image */
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.55) 55%,
    rgba(0, 0, 0, 0) 100%
  );
}

.prestige-residential-marquee-name {
  display: block;
  font-size: 20px;
  font-weight: 700;
}

.prestige-residential-marquee-caption small {
  display: block;
  margin-top: 2px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.prestige-residential-marquee-description {
  display: none;
  margin-top: 6px;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  opacity: 0.85;
}

@media (max-width: 600px) {
  .prestige-residential-marquee-item {
    width: 300px;
    height: 230px;
  }
}
</style>
