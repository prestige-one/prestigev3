<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              :eyebrow="t('dp.hero.eyebrow')"
              :title="t('dp.hero.title')"
              :lead="t('dp.hero.lead')"
              image="/assets/images/v2/our-destinations/palm-jumeira.webp"
            />

            <prestige-stat-band :stats="portfolioStats" />

            <prestige-feature-split
              :eyebrow="t('dp.feature.eyebrow')"
              :title="t('dp.feature.title')"
              image="/assets/images/v2/locations/downtown-dubai.webp"
              :paragraphs="[t('dp.feature.p1'), t('dp.feature.p2')]"
              :points="[
                t('dp.feature.point1'),
                t('dp.feature.point2'),
                t('dp.feature.point3'),
                t('dp.feature.point4'),
              ]"
              equal-height
            />

            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div
                    v-for="dest in destinations"
                    :key="dest.slug"
                    class="col-xl-4 col-lg-4 col-md-6 mb-50 tp_fade_anim"
                    data-delay=".2"
                  >
                    <nuxt-link :to="localePath(`/destinations/${dest.slug}`)" class="prestige-dest-card">
                      <div class="prestige-dest-card__media">
                        <img :src="dest.image" :alt="dest.name" loading="lazy">
                        <div class="prestige-dest-card__veil" />
                        <div class="prestige-dest-card__body">
                          <span class="prestige-dest-card__region">{{ dest.region }}</span>
                          <h3 class="prestige-dest-card__name">{{ dest.name }}</h3>
                          <span class="prestige-dest-card__count">{{ countFor(dest) }}</span>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </section>

            <!-- immersive MapLibre map -->
            <section class="prestige-mapsection">
              <div class="container container-1430">
                <header class="prestige-mapsection__head">
                  <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('dp.map.eyebrow') }}</span>
                  <h2 class="prestige-heading tp_fade_anim" data-delay=".3">{{ t('dp.map.title') }}</h2>
                  <p class="prestige-mapsection__lead tp_fade_anim" data-delay=".4">
                    {{ t('dp.map.lead') }}
                  </p>
                </header>
              </div>
              <div class="prestige-mapsection__stage">
                <client-only>
                  <prestige-immersive-map />
                </client-only>
              </div>
            </section>

            <prestige-cta-band
              :eyebrow="t('dp.cta.eyebrow')"
              :title="t('dp.cta.title')"
              :text="t('dp.cta.text')"
              image="/assets/images/v2/locations/Meydan.webp"
              :primary-label="t('dp.cta.primary')"
              :primary-to="localePath('/contact-us')"
              :secondary-label="t('dp.cta.secondary')"
              :secondary-to="localePath('/projects')"
            />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { destinations, getProjectsForDestination, type Destination } from "~/data/destinations-data";
import { getAllProjects } from "~/data/projects";

definePageMeta({ layout: false });

const { t } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: () => t("dp.seo.title"),
  description: () => t("dp.seo.description"),
});

function countFor(dest: Destination) {
  const n = getProjectsForDestination(dest).length;
  return n === 1 ? t("dp.card.count_one", { n }) : t("dp.card.count_other", { n });
}

const portfolioStats = computed<{ value: string; label: string; col?: string }[]>(() => [
  { value: `${destinations.length}`, label: t("dp.stats.destinations"), col: "col-lg-2 col-md-6" },
  { value: `${getAllProjects().length}`, label: t("dp.stats.developments"), col: "col-lg-3 col-md-6" },
  { value: "AED 500M+", label: t("dp.stats.investment"), col: "col-lg-4 col-md-6" },
  { value: "100%", label: t("dp.stats.escrow"), col: "col-lg-3 col-md-6" },
]);

usePrestigePage({ hero: false });
</script>

<style scoped>
/* immersive map section */
.prestige-mapsection {
  position: relative;
  padding: clamp(70px, 8vw, 120px) 0 clamp(80px, 9vw, 130px);
}
.prestige-mapsection__head {
  max-width: 760px;
  margin: 0 auto clamp(34px, 4vw, 56px);
  text-align: center;
}
.prestige-mapsection__lead {
  max-width: 620px;
  margin: 20px auto 0;
  font-size: 17px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.72);
}
.prestige-mapsection__stage {
  width: min(100% - 40px, 1560px);
  height: min(82vh, 780px);
  min-height: 580px;
  margin: 0 auto;
}
@media (max-width: 767.98px) {
  .prestige-mapsection__stage {
    width: calc(100% - 20px);
    height: 78vh;
    min-height: 620px;
  }
}
</style>
<style scoped>
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
.prestige-dest-card__region {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
}
.prestige-dest-card__name {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  margin: 6px 0 8px;
  line-height: 1.15;
}
.prestige-dest-card__count {
  font-size: 13px;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.65);
}
</style>
