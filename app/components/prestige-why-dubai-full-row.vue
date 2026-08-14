<template>
  <section class="prestige-whydubai-full-row">
    <div class="container container-1430">
      <prestige-section-heading
        class="prestige-whydubai-full-row__head"
        :title="$t('hp.whyDubai.eyebrow')"
        :subtitle="$t('hp.whyDubai.title')"
        :description="$t('hp.whyDubai.lead')"
      />
    </div>

    <div class="prestige-whydubai-full-row__list">
      <article
        v-for="reason in reasons"
        :key="reason.title"
        class="prestige-whydubai-full-row__item"
      >
        <figure class="prestige-whydubai-full-row__media">
          <img
            class="prestige-whydubai-full-row__image"
            :src="reason.image"
            alt=""
            loading="lazy"
            decoding="async"
          >
        </figure>

        <div class="prestige-whydubai-full-row__content">
          <span class="prestige-whydubai-full-row__stat">{{ reason.stat }}</span>
          <p class="prestige-whydubai-full-row__text">{{ reason.text }}</p>
          <h3 class="prestige-whydubai-full-row__description">{{ reason.title }}</h3>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PRESTIGE_DUBAI_V2_REASON_IMAGES } from "~/composables/usePrestigeWhyDubaiReasons";

const { reasons: sharedReasons } = usePrestigeWhyDubaiReasons();

const reasons = computed(() => sharedReasons.value.map((reason, index) => ({
  ...reason,
  image: PRESTIGE_DUBAI_V2_REASON_IMAGES[index] ?? reason.image,
})));
</script>

<style scoped>
.prestige-whydubai-full-row {
  overflow: hidden;
  padding: clamp(72px, 7vw, 100px) 0 clamp(66px, 6vw, 88px);
  background: #0e0e12;
}

.prestige-whydubai-full-row__head {
  margin-bottom: clamp(38px, 4vw, 56px);
}

.prestige-whydubai-full-row__list {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(14px, 1.25vw, 22px);
}

.prestige-whydubai-full-row__item {
  min-width: 0;
  text-align: center;
}

.prestige-whydubai-full-row__media {
  aspect-ratio: 4 / 3;
  margin: 0;
  overflow: hidden;
  background: #111216;
}

.prestige-whydubai-full-row__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
}

.prestige-whydubai-full-row__content {
  display: flex;
  min-height: 142px;
  align-items: center;
  padding: clamp(18px, 1.8vw, 25px) clamp(10px, 1.25vw, 18px) 0;
  flex-direction: column;
}

.prestige-whydubai-full-row__stat {
  color: #fff;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(15px, 1.25vw, 19px);
  font-weight: 500;
  line-height: 1.2;
}

.prestige-whydubai-full-row__text {
  margin: 9px 0 7px;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(13px, 1vw, 15px);
  line-height: 1.35;
}

.prestige-whydubai-full-row__description {
  max-width: 220px;
  margin: 0;
  color: rgba(255, 255, 255, 0.52);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 1.45;
}

@media (hover: hover) {
  .prestige-whydubai-full-row__item:hover .prestige-whydubai-full-row__image {
    transform: scale(1.045);
  }
}

@media (max-width: 1199.98px) {
  .prestige-whydubai-full-row__list {
    grid-template-columns: none;
    grid-auto-columns: clamp(220px, 32vw, 280px);
    grid-auto-flow: column;
    overflow-x: auto;
    padding-bottom: 16px;
    scroll-snap-type: x proximity;
    scrollbar-width: thin;
  }

  .prestige-whydubai-full-row__item {
    scroll-snap-align: start;
  }
}

@media (max-width: 575.98px) {
  .prestige-whydubai-full-row {
    padding-block: 56px 48px;
  }

  .prestige-whydubai-full-row__head {
    margin-bottom: 34px;
  }

  .prestige-whydubai-full-row__list {
    grid-auto-columns: minmax(240px, 80vw);
  }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-whydubai-full-row__image {
    transition: none;
  }
}
</style>
