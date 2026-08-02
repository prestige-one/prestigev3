<template>
  <section class="prestige-stories pt-120 pb-120">
    <div class="container container-1430">
      <header class="prestige-stories__head">
        <span class="prestige-stories__eyebrow">CLIENT STORIES</span>
        <h2 class="prestige-stories__title prestige-text-paint">Homes Handed Over. Stories That Stay.</h2>
        <p class="prestige-stories__lead">
          From the first viewing to the moment they receive their keys, Prestige One
          owners become part of a growing community. Here are a few of their journeys,
          in their own words.
        </p>
      </header>

      <div class="prestige-stories__grid">
        <article v-for="(v, i) in videos" :key="i" class="prestige-stories__card tp_fade_anim" :data-delay="i * 0.08">
          <div class="prestige-stories__media">
            <video
              class="prestige-stories__video"
              controls
              playsinline
              preload="metadata"
              :poster="v.poster"
            >
              <source :src="v.video" type="video/mp4">
            </video>
          </div>
          <div class="prestige-stories__meta">
            <h3 class="prestige-stories__name">{{ v.name }}</h3>
            <span class="prestige-stories__project">{{ v.project }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const videos = [
  { name: "A Homeowner's Story", project: "Prestige One", video: "/assets/videos/handover-1.mp4", poster: "/assets/videos/handover-1-poster.jpg" },
  { name: "Handover Day", project: "Vista by Prestige One", video: "/assets/videos/handover-2.mp4", poster: "/assets/videos/handover-2-poster.jpg" },
  { name: "Receiving the Keys", project: "Vista by Prestige One", video: "/assets/videos/handover-3.mp4", poster: "/assets/videos/handover-3-poster.jpg" },
];
</script>

<style scoped>
.prestige-stories__head {
  max-width: 760px;
  margin: 0 auto clamp(44px, 5vw, 66px);
  text-align: center;
}
.prestige-stories__eyebrow {
  display: block;
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.5);
}
.prestige-stories__title {
  margin: 0 0 18px;
  font-size: clamp(24px, 2.6vw, 40px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
}
.prestige-stories__lead {
  margin: 0;
  font-size: clamp(15px, 1.2vw, 17px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.62);
}
.prestige-stories__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(16px, 1.8vw, 26px);
}
.prestige-stories__media {
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  overflow: hidden;
  background: #0d0e12;
}
.prestige-stories__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.prestige-stories__meta { padding: 16px 4px 0; text-align: center; }
.prestige-stories__name {
  margin: 0 0 4px;
  font-size: clamp(16px, 1.4vw, 19px);
  font-weight: 500;
  color: #fff;
}
.prestige-stories__project {
  font-size: 12.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 767.98px) {
  .prestige-stories__grid { grid-template-columns: minmax(0, 320px); }
}
</style>
