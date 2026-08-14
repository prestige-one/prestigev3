<template>
  <section class="prestige-whydubai">
    <div class="container container-1430">
      <prestige-section-heading
        class="prestige-whydubai__head"
        :title="$t('hp.whyDubai.eyebrow')"
        :subtitle="$t('hp.whyDubai.title')"
        :description="$t('hp.whyDubai.lead')"
      />

      <div class="prestige-whydubai__grid">
        <article
          v-for="reason in reasons"
          :key="reason.title"
          class="prestige-whydubai__card"
        >
          <figure class="prestige-whydubai__media">
            <img
              class="prestige-whydubai__image"
              :src="reason.image"
              alt=""
              loading="lazy"
              decoding="async"
            >
          </figure>

          <div class="prestige-whydubai__content">
            <span class="prestige-whydubai__icon">
              <prestige-dubai-reason-icon :name="reason.icon" />
            </span>
            <span
              class="prestige-whydubai__stat"
              :class="{ 'prestige-whydubai__stat--compact': reason.compact }"
            >
              {{ reason.stat }}
            </span>
            <p class="prestige-whydubai__text">{{ reason.text }}</p>
            <h3 class="prestige-whydubai__cardtitle">{{ reason.title }}</h3>
          </div>
        </article>
      </div>
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
.prestige-whydubai {
  padding: clamp(92px, 9vw, 100px) 0 clamp(90px, 8vw, 120px);
  background: #0e0e12;
}

.prestige-whydubai__head {
  margin-bottom: clamp(44px, 5vw, 66px);
}

.prestige-whydubai__grid {
  --prestige-whydubai-card-gap: clamp(14px, 1.6vw, 22px);

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  row-gap: var(--prestige-whydubai-card-gap);
  column-gap: var(--prestige-whydubai-card-gap);
}

.prestige-whydubai__card {
  position: relative;
  isolation: isolate;
  display: flex;
  min-width: 0;
  overflow: hidden;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 16px;
  background: linear-gradient(145deg, #18191e 0%, #111216 100%);
  box-shadow: 0 24px 54px rgba(0, 0, 0, 0.18);
  transition: border-color 350ms ease, box-shadow 350ms ease, transform 350ms ease;
}

.prestige-whydubai__media {
  position: relative;
  z-index: 0;
  aspect-ratio: 2 / 1;
  margin: 0;
  overflow: hidden;
  background: #0d0e11;
}

.prestige-whydubai__media::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(180deg, transparent 54%, rgba(8, 9, 12, 0.28));
  pointer-events: none;
}

.prestige-whydubai__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
}

.prestige-whydubai__content {
  position: relative;
  z-index: 1;
  display: flex;
  min-height: 165px;
  padding: 34px clamp(22px, 2vw, 28px) 22px;
  flex: 1;
  flex-direction: column;
}

.prestige-whydubai__icon {
  position: absolute;
  z-index: 2;
  top: -26px;
  right: clamp(22px, 2.2vw, 32px);
  display: grid;
  width: 52px;
  height: 52px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 50%;
  background: linear-gradient(145deg, #292b31, #141519);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.38), inset 0 1px rgba(255, 255, 255, 0.08);
  overflow: visible;
  place-items: center;
}

.prestige-whydubai__icon :deep(svg) {
  overflow: visible;
}

.prestige-whydubai__stat {
  display: block;
  margin-bottom: 12px;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(34px, 3.1vw, 48px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.035em;
  color: #fff;
}

.prestige-whydubai__stat--compact {
  font-size: clamp(20px, 6vw, 25px);
  line-height: 1.12;
}

.prestige-whydubai__cardtitle {
  margin: 0;
  font-size: clamp(14px, 1.1vw, 16px);
  font-weight: 400;
  line-height: 1.25;
  color: #ffffffa6;
}

.prestige-whydubai__text {
  margin: 0 0 7px;
  font-size: clamp(15px, 1.35vw, 20px);
  line-height: 1.55;
  color: rgb(255, 255, 255);
}

@media (hover: hover) {
  .prestige-whydubai__card:hover {
    border-color: rgba(255, 255, 255, 0.24);
    box-shadow: 0 30px 66px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }

  .prestige-whydubai__card:hover .prestige-whydubai__image {
    transform: scale(1.045);
  }
}

@media (min-width: 1200px) {
  .prestige-whydubai {
    display: flex;
    min-height: 100svh;
    box-sizing: border-box;
    align-items: center;
    padding-block: clamp(24px, 4vh, 42px);
  }

  .prestige-whydubai > .container {
    width: 100%;
  }

  .prestige-whydubai__head {
    margin-bottom: clamp(18px, 2.8vh, 28px);
  }

  .prestige-whydubai__head :deep(.prestige-section-heading__title) {
    font-size: clamp(30px, 2.5vw, 35px);
  }

  .prestige-whydubai__head :deep(.prestige-section-heading__subtitle) {
    margin-top: 10px;
    font-size: clamp(15px, 1.2vw, 17px);
  }

  .prestige-whydubai__head :deep(.prestige-section-heading__description) {
    margin-top: 7px;
    font-size: 14px;
    line-height: 1.4;
  }

  .prestige-whydubai__grid {
    --prestige-whydubai-card-gap: clamp(10px, 1.7vh, 16px);
  }

  .prestige-whydubai__card {
    border-radius: 14px;
  }

  .prestige-whydubai__media {
    height: clamp(130px, 22vh, 165px);
    aspect-ratio: auto;
  }

  .prestige-whydubai__content {
    min-height: 110px;
    padding: clamp(25px, 2.4vh, 23px) 18px 25px;
  }

  .prestige-whydubai__icon {
    top: -21px;
    right: 18px;
    width: 42px;
    height: 42px;
  }

  .prestige-whydubai__stat {
    margin-bottom: 5px;
  }

  .prestige-whydubai__stat--compact {
    font-size: clamp(18px, 1.45vw, 21px);
    line-height: 1.1;
  }

  .prestige-whydubai__text {
    margin-bottom: 15px;
    font-size: clamp(14px, 1vw, 16px);
    line-height: 1.25;
  }

  .prestige-whydubai__cardtitle {
    font-size: 15px;
    line-height: 1.25;
  }
}

@media (max-width: 1199.98px) {
  .prestige-whydubai__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 575.98px) {
  .prestige-whydubai {
    padding-block: 56px 48px;
  }

  .prestige-whydubai__head {
    margin-bottom: 36px;
  }

  .prestige-whydubai__grid {
    grid-template-columns: 1fr;
  }

  .prestige-whydubai__content {
    min-height: 0;
    padding: 34px 20px 22px;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-whydubai__image {
    transition: none;
  }

  .prestige-whydubai__card {
    transition: none;
  }
}
</style>
