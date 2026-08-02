<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              :eyebrow="t('mdata.csr.heroEyebrow')"
              :title="t('mdata.csr.heroTitle')"
              :lead="t('mdata.csr.heroLead')"
              image="/assets/images/v2/pages/core-values/sustainability.webp"
            >
              <template #actions>
                <nuxt-link :to="localePath('/about-us')" class="prestige-btn">{{ t('mdata.common.aboutPrestige') }}</nuxt-link>
              </template>
            </prestige-page-hero>

            <!-- intro prose -->
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-4 col-lg-4 mb-30">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('mdata.csr.introEyebrow') }}</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">
                      {{ t('mdata.csr.introTitle') }}
                    </h2>
                  </div>
                  <div class="col-xl-7 offset-xl-1 col-lg-8">
                    <div class="prestige-prose tp_fade_anim" data-delay=".4">
                      <p v-for="(para, i) in introParas" :key="i">{{ para }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- three pillars as feature-splits -->
            <prestige-feature-split
              :eyebrow="t('mdata.csr.p1Eyebrow')"
              :title="t('mdata.csr.p1Title')"
              image="/assets/images/v2/pages/core-values/sustainability.webp"
              :paragraphs="sustainabilityParagraphs"
              :points="sustainabilityPoints"
            />

            <prestige-feature-split
              :eyebrow="t('mdata.csr.p2Eyebrow')"
              :title="t('mdata.csr.p2Title')"
              image="/assets/images/v2/locations/city-walk-1024x768-1.webp"
              :paragraphs="communityParagraphs"
              :points="communityPoints"
              reverse
            />

            <prestige-feature-split
              :eyebrow="t('mdata.csr.p3Eyebrow')"
              :title="t('mdata.csr.p3Title')"
              image="/assets/images/v3/Built-on-Trust.webp"
              :paragraphs="responsibleParagraphs"
              :points="responsiblePoints"
            />

            <prestige-stat-band :stats="stats" />

            <prestige-cta-band
              :eyebrow="t('mdata.csr.ctaEyebrow')"
              :title="t('mdata.csr.ctaTitle')"
              :text="t('mdata.csr.ctaText')"
              image="/assets/images/v3/A-Global-Perspective.webp"
              :primary-label="t('mdata.common.aboutPrestige')"
              :primary-to="localePath('/about-us')"
              :secondary-label="t('mdata.common.contactUs')"
              :secondary-to="localePath('/contact-us')"
            />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
interface StatItem {
  value: string;
  label: string;
}

const { t, tm, rt } = useI18n();
const localePath = useLocalePath();

definePageMeta({ layout: false });
useSeoMeta({
  title: "Corporate Social Responsibility | Prestige One",
  description:
    "Prestige One's commitment to sustainable development, community and responsible building across every project we deliver.",
});

const strList = (key: string): string[] =>
  (tm(key) as unknown[]).map((m) => rt(m as string));

const introParas = computed(() => strList("mdata.csr.introParas"));
const sustainabilityParagraphs = computed(() => strList("mdata.csr.p1Paras"));
const sustainabilityPoints = computed(() => strList("mdata.csr.p1Points"));
const communityParagraphs = computed(() => strList("mdata.csr.p2Paras"));
const communityPoints = computed(() => strList("mdata.csr.p2Points"));
const responsibleParagraphs = computed(() => strList("mdata.csr.p3Paras"));
const responsiblePoints = computed(() => strList("mdata.csr.p3Points"));

const stats = computed<StatItem[]>(() => [
  { value: t("mdata.csr.statPillarsValue"), label: t("mdata.csr.statPillarsLabel") },
  { value: t("mdata.csr.statFreeholdValue"), label: t("mdata.csr.statFreeholdLabel") },
  { value: t("mdata.csr.statYearsValue"), label: t("mdata.csr.statYearsLabel") },
  { value: t("mdata.csr.statSafetyValue"), label: t("mdata.csr.statSafetyLabel") },
]);

usePrestigePage({ hero: false });
</script>
