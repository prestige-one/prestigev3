<template>
  <section class="prestige-global-perspective-area pt-40 pb-80">
    <div class="container container-1430">
      <header class="prestige-global-perspective-header">
        <span class="prestige-global-perspective-eyebrow">Global Perspective</span>
        <h2 class="prestige-global-perspective-title tp_reveal_anim" data-delay="0.05">
          Global Experience. A Dubai Focus
        </h2>
        <p class="prestige-global-perspective-description tp_fade_anim" data-fade-from="bottom" data-fade-offset="18">
          A wider perspective, shaping what we create in Dubai
        </p>
      </header>
    </div>

    <figure class="prestige-global-perspective-map tp_fade_anim" data-fade-from="bottom" data-fade-offset="28" data-duration="0.8">
      <img
        src="/assets/images/v3/location-map.webp"
        alt="Prestige One global presence across Canada, North America, the United Kingdom, Greece, Istanbul, Turkey, and the UAE"
        width="2048"
        height="1024"
        loading="lazy"
        decoding="async"
      >
    </figure>
  </section>
</template>

<style scoped>
.prestige-global-perspective-area {
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  background:
    radial-gradient(circle at 50% 5%, rgba(87, 101, 112, 0.08), transparent 34%),
    #000;
}

.prestige-global-perspective-header {
  max-width: 860px;
  margin: 0 auto clamp(58px, 7vw, 88px);
  text-align: center;
}

.prestige-global-perspective-eyebrow {
  display: block;
  margin-bottom: 22px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.prestige-global-perspective-title {
  margin: 0;
  font-size: var(--prestige-about-section-title-size, clamp(25px, 2.3vw, 40px));
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.8px;
  color: #fff;
  text-align: center;
}

.prestige-global-perspective-description {
  margin: 20px 0 0;
  font-size: clamp(15px, 1.25vw, 18px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.62);
}

.prestige-global-perspective-map {
  width: 100%;
  margin: 0;
}

.prestige-global-perspective-map img {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 767.98px) {
  .prestige-global-perspective-area {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .prestige-global-perspective-header {
    margin-bottom: 46px;
  }

  .prestige-global-perspective-description {
    margin-top: 16px;
    padding: 0 10px;
  }

  .prestige-global-perspective-map {
    width: 140%;
    margin-left: -20%;
  }
}
</style>
