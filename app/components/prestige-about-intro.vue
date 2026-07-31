<template>
  <section class="prestige-intro-area pt-140 pb-140">
    <div class="container container-1230">
      <div class="prestige-intro-grid">
        <div class="prestige-intro-media tp_fade_anim" data-fade-from="left" data-fade-offset="40">
          <video
            class="prestige-intro-video"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
            poster="/assets/images/v3/MADE-AROUND-PEOPLE.webp"
          >
            <source src="/assets/videos/company-showcase.mp4" type="video/mp4">
          </video>
        </div>

        <div class="prestige-intro-content tp_fade_anim" data-fade-from="right" data-fade-offset="40">
          <span class="prestige-intro-eyebrow">WHO WE ARE</span>
          <h2 class="prestige-intro-title">
            We Build With Purpose.<br>We Create For Life.
          </h2>
          <p class="prestige-intro-text">
            Prestige One Developments is a Dubai-based real estate developer creating
            residential and commercial spaces shaped around how people live, work, and
            experience the city.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.prestige-intro-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: clamp(36px, 5vw, 80px);
  align-items: center;
}
.prestige-intro-media {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  aspect-ratio: 4 / 3;
  background: #101013;
}
.prestige-intro-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.prestige-intro-eyebrow {
  display: block;
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.55);
}
.prestige-intro-title {
  margin: 0 0 24px;
  font-size: clamp(28px, 3vw, 46px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.5px;
  color: #fff;
}
.prestige-intro-text {
  max-width: 520px;
  margin: 0;
  font-size: clamp(15px, 1.2vw, 18px);
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 991.98px) {
  .prestige-intro-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
@media (max-width: 767.98px) {
  .prestige-intro-area {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
</style>
