<template>
  <section class="prestige-global-area pt-80 pb-0">
    <div class="container container-1430">
      <header class="prestige-global-header">
        <span class="prestige-global-eyebrow">{{ t('ap.global.eyebrow') }}</span>
        <h2 class="prestige-global-title tp_reveal_anim" data-delay="0.05">
          {{ t('ap.global.title') }}
        </h2>
        <p class="prestige-global-lead">
          {{ t('ap.global.lead') }}
        </p>
      </header>
    </div>

    <!-- full-bleed map -->
    <div class="prestige-global-map tp_fade_anim" data-fade-from="bottom" data-fade-offset="30">
      <img
        src="/assets/images/v3/timeline/location-map-updated.webp"
        alt="Prestige One global perspective"
        loading="lazy"
      >
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped>
.prestige-global-area {
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  overflow: hidden;
}
/* soft aurora gradient behind the section */
.prestige-global-area::before {
  content: "";
  position: absolute;
  top: -4%;
  left: 50%;
  transform: translateX(-50%);
  width: min(1000px, 96vw);
  height: 560px;
  z-index: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 50% 30%, rgba(96, 156, 210, 0.22), transparent 62%),
    radial-gradient(circle at 28% 62%, rgba(150, 120, 210, 0.16), transparent 60%);
  filter: blur(80px);
}
.prestige-global-header,
.prestige-global-map {
  position: relative;
  z-index: 1;
}
.prestige-global-header {
  max-width: 760px;
  margin: 0 auto clamp(40px, 5vw, 60px);
  text-align: center;
}
.prestige-global-eyebrow {
  display: block;
  margin-bottom: 18px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.55);
}
.prestige-global-title {
  margin: 0 0 16px;
  font-size: clamp(25px, 2.3vw, 40px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.5px;
  color: #fff;
}
.prestige-global-lead {
  margin: 0;
  font-size: clamp(15px, 1.2vw, 18px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
}
.prestige-global-map {
  width: 100%;
  overflow: hidden;
}
.prestige-global-map img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 767.98px) {
  .prestige-global-area {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
</style>
