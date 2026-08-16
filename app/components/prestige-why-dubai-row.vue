<template>
  <section class="prestige-whydubai-row">
    <div class="prestige-whydubai-row__inner">
      <prestige-section-heading
        class="prestige-whydubai-row__head"
        :title="$t('hp.whyDubai.eyebrow')"
        :subtitle="$t('hp.whyDubai.title')"
        :description="$t('hp.whyDubai.lead')"
      />

      <div class="prestige-whydubai-row__list">
        <article
          v-for="reason in reasons"
          :key="reason.title"
          class="prestige-whydubai-row__item"
        >
          <figure class="prestige-whydubai-row__media">
            <img
              class="prestige-whydubai-row__image"
              :src="reason.image"
              alt=""
              loading="lazy"
              decoding="async"
            >
          </figure>

          <div class="prestige-whydubai-row__content">
            <span class="prestige-whydubai-row__stat">{{ reason.stat }}</span>
            <p class="prestige-whydubai-row__text">{{ reason.text }}</p>
            <h3 class="prestige-whydubai-row__description">{{ reason.title }}</h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { reasons: sharedReasons } = usePrestigeWhyDubaiReasons();

const reasons = computed(() => sharedReasons.value.filter((reason) => reason.icon !== "protect"));
</script>

<style scoped>
.prestige-whydubai-row {
  overflow: hidden;
  padding: clamp(72px, 8vw, 108px) 0 clamp(68px, 7vw, 96px);
  background: #0e0e12;
}

.prestige-whydubai-row__inner {
  width: 95%;
  max-width: 95%;
  margin: 0 auto;
}

.prestige-whydubai-row__head {
  margin-bottom: clamp(38px, 4vw, 58px);
}

.prestige-whydubai-row__list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: clamp(8px, 0.8vw, 14px);
}

.prestige-whydubai-row__item {
  min-width: 0;
  border: 1px solid #3a3a3a;
  border-radius: 5px;
  text-align: center;
}

.prestige-whydubai-row__media {
  aspect-ratio: 4 / 3;
  margin: 0 0 clamp(18px, 2vw, 26px);
  overflow: hidden;
  background: #111216;
}

.prestige-whydubai-row__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
}

.prestige-whydubai-row__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 15px;
}

.prestige-whydubai-row__stat {
  color: #fff;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(14px, 2.2vw, 18px);
  font-weight: 500;
  line-height: 1.2;
}

.prestige-whydubai-row__text {
  margin: 9px 0 7px;
  color: rgba(255, 255, 255, 0.92);
  font-size: clamp(13px, 1vw, 15px);
  line-height: 1.35;
}

.prestige-whydubai-row__description {
  max-width: 220px;
  margin: 0;
  color: rgba(255, 255, 255, 0.52);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 1.45;
}

@media (hover: hover) {
  .prestige-whydubai-row__item:hover .prestige-whydubai-row__image {
    transform: scale(1.045);
  }
}

@media (max-width: 1199.98px) {
  .prestige-whydubai-row__list {
    grid-template-columns: none;
    grid-auto-columns: clamp(210px, 31vw, 270px);
    grid-auto-flow: column;
    overflow-x: auto;
    padding-bottom: 16px;
    scroll-snap-type: x proximity;
    scrollbar-width: thin;
  }

  .prestige-whydubai-row__item {
    scroll-snap-align: start;
  }
}

@media (max-width: 575.98px) {
  .prestige-whydubai-row {
    padding-block: 56px 48px;
  }

  .prestige-whydubai-row__head {
    margin-bottom: 34px;
  }

  .prestige-whydubai-row__list {
    grid-auto-columns: minmax(230px, 78vw);
  }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-whydubai-row__image {
    transition: none;
  }
}
</style>
