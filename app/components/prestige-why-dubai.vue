<template>
  <section class="prestige-whydubai pt-120 pb-120">
    <div class="container container-1430">
      <header class="prestige-whydubai__head">
        <span class="prestige-whydubai__eyebrow">{{ $t('hp.whyDubai.eyebrow') }}</span>
        <h2 class="prestige-whydubai__title prestige-text-paint">{{ $t('hp.whyDubai.title') }}</h2>
        <p class="prestige-whydubai__lead">
          {{ $t('hp.whyDubai.lead') }}
        </p>
      </header>

      <div class="prestige-whydubai__grid">
        <article v-for="(r, i) in reasons" :key="i" class="prestige-whydubai__card tp_fade_anim" :data-delay="i * 0.06">
          <span class="prestige-whydubai__stat">{{ r.stat }}</span>
          <h3 class="prestige-whydubai__cardtitle">{{ r.title }}</h3>
          <p class="prestige-whydubai__text">{{ r.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const reasons = computed(() => [
  { stat: "0%", title: t("hp.whyDubai.r1Title"), text: t("hp.whyDubai.r1Text") },
  { stat: "6-8%", title: t("hp.whyDubai.r2Title"), text: t("hp.whyDubai.r2Text") },
  { stat: "10-Yr", title: t("hp.whyDubai.r3Title"), text: t("hp.whyDubai.r3Text") },
  { stat: "#1", title: t("hp.whyDubai.r4Title"), text: t("hp.whyDubai.r4Text") },
  { stat: "8 Hrs", title: t("hp.whyDubai.r5Title"), text: t("hp.whyDubai.r5Text") },
  { stat: "100%", title: t("hp.whyDubai.r6Title"), text: t("hp.whyDubai.r6Text") },
]);
</script>

<style scoped>
.prestige-whydubai__head {
  max-width: 720px;
  margin: 0 auto clamp(44px, 5vw, 66px);
  text-align: center;
}
.prestige-whydubai__eyebrow {
  display: block;
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.5);
}
.prestige-whydubai__title {
  margin: 0 0 18px;
  font-size: clamp(24px, 2.6vw, 40px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
}
.prestige-whydubai__lead {
  margin: 0;
  font-size: clamp(15px, 1.2vw, 17px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.62);
}
.prestige-whydubai__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(14px, 1.6vw, 22px);
}
.prestige-whydubai__card {
  padding: clamp(26px, 3vw, 40px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.008));
}
.prestige-whydubai__stat {
  display: block;
  margin-bottom: 16px;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(34px, 3.6vw, 50px);
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1;
  color: transparent;
  background: linear-gradient(180deg, #f8fcff 0%, #b7cad7 22%, #819bab 23%, #edf8ff 46%, #7896aa 47%, #eaf6ff 79%, #9bb4c5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(232, 245, 253, 0.9);
}
.prestige-whydubai__cardtitle {
  margin: 0 0 10px;
  font-size: clamp(18px, 1.6vw, 22px);
  font-weight: 500;
  color: #fff;
}
.prestige-whydubai__text {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.64);
}

@media (max-width: 991.98px) {
  .prestige-whydubai__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 575.98px) {
  .prestige-whydubai__grid { grid-template-columns: 1fr; }
}
</style>
