<template>
  <section class="prestige-opp-area pt-120 pb-120">
    <div class="container container-1430">
      <div class="prestige-opp-grid">
        <div class="prestige-opp-map tp_fade_anim" data-fade-from="left" data-fade-offset="40">
          <img src="/assets/images/v3/map-locations.webp" alt="Prestige One locations across Dubai" loading="lazy">
        </div>

        <div class="prestige-opp-content tp_fade_anim" data-fade-from="right" data-fade-offset="40">
          <span class="prestige-opp-num">01</span>
          <h2 class="prestige-opp-title">Where Opportunity Grows</h2>
          <p class="prestige-opp-text">
            We choose well-connected locations that offer great lifestyles and lasting value.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.prestige-opp-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: clamp(36px, 5vw, 80px);
  align-items: center;
}
.prestige-opp-map {
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #0c0c0f;
}
.prestige-opp-map img {
  width: 100%;
  height: auto;
  display: block;
}
.prestige-opp-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.06), rgba(20, 22, 26, 0.6));
  font-family: "Google Sans", sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 28px;
}
.prestige-opp-title {
  margin: 0 0 18px;
  font-size: clamp(26px, 3vw, 44px);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  color: #fff;
}
.prestige-opp-text {
  margin: 0;
  max-width: 460px;
  font-size: clamp(15px, 1.2vw, 18px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.66);
}

@media (max-width: 991.98px) {
  .prestige-opp-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
