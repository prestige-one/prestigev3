<template>
  <section class="prestige-global-area pt-140 pb-140">
    <div class="container container-1230">
      <header class="prestige-global-header">
        <span class="prestige-global-eyebrow">GLOBAL PERSPECTIVE</span>
        <h2 class="prestige-global-title tp_reveal_anim" data-delay="0.05">
          Global Experience. A Dubai Focus.
        </h2>
        <p class="prestige-global-lead">
          A wider perspective, shaping what we create in Dubai.
        </p>
      </header>

      <div class="prestige-global-map tp_fade_anim" data-fade-from="bottom" data-fade-offset="30">
        <img
          src="/assets/images/v2/pages/global-present.webp"
          alt="Prestige One global perspective"
          loading="lazy"
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.prestige-global-area {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
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
  overflow: hidden;
  border-radius: 12px;
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
