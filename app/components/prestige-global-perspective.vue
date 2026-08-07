<template>
  <section class="prestige-global-area pt-80 pb-0">
    <div class="container container-1430">
      <prestige-section-heading
        class="prestige-global-header"
        :title="t('ap.global.eyebrow')"
        :subtitle="t('ap.global.title')"
      />
    </div>

    <!-- full-bleed map -->
    <div class="prestige-global-map tp_fade_anim" data-fade-from="bottom" data-fade-offset="30">
      <img
        src="/assets/images/v3/location-map-updated-1.webp"
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
  margin: 0 auto clamp(40px, 5vw, 80px);
  text-align: center;
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
