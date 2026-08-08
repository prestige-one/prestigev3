<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              class="prestige-destinations-hero"
              :eyebrow="t('dp.hero.eyebrow')"
              :title="t('dp.hero.title')"
              :lead="t('dp.hero.lead')"
              image="/assets/images/v3/our-destinations/Landing-Cover.webp"
            >
              <template #actions>
                <a class="prestige-destinations-hero__link" href="#prestige-destinations-grid">
                  <span>{{ t('dp.hero.cta') }}</span>
                  <span aria-hidden="true">&#8595;</span>
                </a>
              </template>
            </prestige-page-hero>

            <prestige-feature-split
              class="prestige-destinations-feature"
              :eyebrow="t('dp.feature.eyebrow')"
              :title="t('dp.feature.title')"
              image="/assets/images/v3/dubai-view.webp"
              :paragraphs="[t('dp.feature.p1')]"
              equal-height
            />

            <section id="prestige-destinations-grid" class="prestige-section">
              <div class="container container-1430">
                <prestige-section-heading
                  class="prestige-destinations-grid__heading"
                  title="EXPLORE OUR DESTINATIONS"
                />
                <div class="row">
                  <div
                    v-for="card in destinationCards"
                    :key="card.slug"
                    class="col-xl-4 col-lg-4 col-md-6 mb-50 tp_fade_anim"
                    data-delay=".2"
                  >
                    <nuxt-link :to="localePath(`/destinations/${card.slug}`)" class="prestige-dest-card">
                      <div class="prestige-dest-card__media">
                        <img :src="card.image" :alt="card.title" loading="lazy">
                        <div class="prestige-dest-card__veil" />
                        <div class="prestige-dest-card__body">
                          <h3 class="prestige-dest-card__name">{{ card.title }}</h3>
                          <p class="prestige-dest-card__tagline">{{ card.tagline }}</p>
                          <span class="prestige-dest-card__explore">Explore <span aria-hidden="true">&#8594;</span></span>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </section>

            <prestige-cta-band
              :eyebrow="t('dp.cta.eyebrow')"
              :title="t('dp.cta.title')"
              :text="t('dp.cta.text')"
              image="/assets/images/v2/locations/Meydan.webp"
              :primary-label="t('dp.cta.primary')"
              :primary-to="localePath('/projects')"
            />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { destinationListing } from "~/data/destination-listing";
import { getDestinationBySlug } from "~/data/destinations-data";

definePageMeta({ layout: false });

const { t } = useI18n();
const localePath = useLocalePath();

const destinationCards = destinationListing.flatMap((item) => {
  const destination = getDestinationBySlug(item.slug);
  return destination ? [{ ...item, image: destination.image }] : [];
});

useSeoMeta({
  title: () => t("dp.seo.title"),
  description: () => t("dp.seo.description"),
});

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-destinations-hero {
  align-items: center;
}
:deep(.prestige-destinations-hero .prestige-hero-band__inner) {
  padding-top: clamp(110px, 15vh, 170px);
  padding-bottom: clamp(60px, 9vh, 110px);
}
:deep(.prestige-destinations-hero .row) {
  justify-content: center;
  text-align: center;
}
:deep(.prestige-destinations-hero .col-xl-9) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
:deep(.prestige-destinations-hero .prestige-hero-band__eyebrow) {
  margin-bottom: 10px;
}
:deep(.prestige-destinations-hero .prestige-hero-band__title) {
  line-height: 1.05;
}
:deep(.prestige-destinations-hero .prestige-hero-band__lead) {
  margin-top: 12px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
:deep(.prestige-destinations-hero .prestige-hero-band__actions) {
  width: 100%;
  margin-top: 18px;
  justify-content: center;
  text-align: center;
}
.prestige-destinations-hero__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding-bottom: 7px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.55);
  color: #fff;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: gap 0.3s ease, border-color 0.3s ease;
}
.prestige-destinations-hero__link:hover {
  gap: 18px;
  border-color: #fff;
  color: #fff;
}

</style>
<style scoped>
:deep(.prestige-fsplit .prestige-heading) {
  font-size: clamp(26px, 3.2vw, 35px);
}
:deep(.prestige-destinations-feature .col-lg-6:last-child) {
  display: flex;
  align-items: center;
}
:deep(.prestige-destinations-feature .prestige-fsplit__body) {
  width: 100%;
}
.prestige-destinations-grid__heading {
  margin-bottom: clamp(38px, 5vw, 64px);
}

.prestige-dest-card {
  display: block;
  color: #fff;
}
.prestige-dest-card__media {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 6px;
  background: #101013;
}
.prestige-dest-card__media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-dest-card:hover .prestige-dest-card__media img {
  transform: scale(1.07);
}
.prestige-dest-card__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 30%, rgba(0, 0, 0, 0.85) 100%);
}
.prestige-dest-card__body {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 26px;
  z-index: 2;
}
.prestige-dest-card__name {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  margin: 0 0 8px;
  line-height: 1.15;
}
.prestige-dest-card__tagline {
  max-width: 360px;
  margin: 0;
  color: rgba(255, 255, 255, 0.74);
  font-size: 14px;
  line-height: 1.5;
}
.prestige-dest-card__explore {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 15px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: gap 0.3s ease;
}
.prestige-dest-card:hover .prestige-dest-card__explore {
  gap: 14px;
}
</style>
