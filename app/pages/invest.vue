<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              :eyebrow="t('mdata.invest.heroEyebrow')"
              :title="t('mdata.invest.heroTitle')"
              :lead="t('mdata.invest.heroLead')"
              image="/assets/images/v2/locations/Prestige-One-Invest-in-Dorra-Bay.webp"
            >
              <template #actions>
                <nuxt-link :to="localePath('/contact-us')" class="prestige-btn">{{ t('mdata.common.speakAdvisor') }}</nuxt-link>
                <nuxt-link :to="localePath('/projects')" class="prestige-btn prestige-btn--ghost">{{ t('mdata.common.viewDevelopments') }}</nuxt-link>
              </template>
            </prestige-page-hero>

            <!-- why dubai -->
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-4 col-lg-4 mb-30">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('mdata.invest.whyEyebrow') }}</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">
                      {{ t('mdata.invest.whyTitle') }}
                    </h2>
                  </div>
                  <div class="col-xl-7 offset-xl-1 col-lg-8">
                    <div class="prestige-prose tp_fade_anim" data-delay=".4">
                      <p v-for="(para, i) in whyParas" :key="i">{{ para }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <prestige-stat-band :stats="stats" />

            <prestige-feature-split
              :eyebrow="t('mdata.invest.whyUsEyebrow')"
              :title="t('mdata.invest.whyUsTitle')"
              image="/assets/images/v3/Built-on-Trust.webp"
              :paragraphs="whyUsParagraphs"
              :points="whyUsPoints"
            />

            <prestige-feature-split
              :eyebrow="t('mdata.invest.howEyebrow')"
              :title="t('mdata.invest.howTitle')"
              image="/assets/images/v2/locations/downtown.webp"
              :paragraphs="howParagraphs"
              :points="howPoints"
              reverse
            />

            <prestige-faq-accordion :title="t('mdata.invest.faqTitle')" :eyebrow="t('mdata.invest.faqEyebrow')" :items="faqs" />

            <prestige-cta-band
              :eyebrow="t('mdata.invest.ctaEyebrow')"
              :title="t('mdata.invest.ctaTitle')"
              :text="t('mdata.invest.ctaText')"
              image="/assets/images/v2/locations/Prestige-One-Invest-in-Embankment.webp"
              :primary-label="t('mdata.common.speakAdvisor')"
              :primary-to="localePath('/contact-us')"
              :secondary-label="t('mdata.common.viewDevelopments')"
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
import type { FaqItem } from "~/components/prestige/faq-accordion.vue";

interface StatItem {
  value: string;
  label: string;
}

const { t, tm, rt } = useI18n();
const localePath = useLocalePath();

definePageMeta({ layout: false });
useSeoMeta({
  title: "Invest | Prestige One",
  description:
    "Invest in Dubai real estate with Prestige One - strong rental yields, tax-free freehold ownership, capital appreciation and flexible payment plans.",
});

const strList = (key: string): string[] =>
  (tm(key) as unknown[]).map((m) => rt(m as string));

const whyParas = computed(() => strList("mdata.invest.whyParas"));

const stats = computed<StatItem[]>(() => [
  { value: t("mdata.invest.statYieldsValue"), label: t("mdata.invest.statYieldsLabel") },
  { value: t("mdata.invest.statTaxValue"), label: t("mdata.invest.statTaxLabel") },
  { value: t("mdata.invest.statOwnershipValue"), label: t("mdata.invest.statOwnershipLabel") },
  { value: t("mdata.invest.statPlansValue"), label: t("mdata.invest.statPlansLabel") },
]);

const whyUsParagraphs = computed(() => strList("mdata.invest.whyUsParas"));
const whyUsPoints = computed(() => strList("mdata.invest.whyUsPoints"));
const howParagraphs = computed(() => strList("mdata.invest.howParas"));
const howPoints = computed(() => strList("mdata.invest.howPoints"));

const faqs = computed<FaqItem[]>(() =>
  (tm("mdata.invest.faqs") as { q: unknown; a: unknown }[]).map((item) => ({
    q: rt(item.q as string),
    a: rt(item.a as string),
  })),
);

usePrestigePage({ hero: false });
</script>
