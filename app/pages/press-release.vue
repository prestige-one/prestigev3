<!-- Data sources: app/data/editorial-data.ts; i18n/locales/shared/en.json -->
<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              class="prestige-listing-hero"
              :eyebrow="t('mdata.press.heroEyebrow')"
              :title="t('mdata.press.heroTitle')"
              :lead="t('mdata.press.heroLead')"
              image="/assets/images/v3/press.webp"
            />

            <prestige-listing-intro
              :title="t('mdata.press.introEyebrow')"
              :text="t('mdata.press.introBody')"
              uppercase
            />

            <section class="prestige-section prestige-section--tight prestige-press-grid prestige-editorial-grid">
              <div class="container container-1430">
                <div v-if="items.length" class="row">
                  <div
                    v-for="article in items"
                    :key="article.slug"
                    class="col-xl-4 col-lg-4 col-md-6 mb-50 tp_fade_anim"
                    data-delay=".2"
                  >
                    <prestige-article-card :article="article" />
                  </div>
                </div>
                <p v-else class="prestige-prose text-center">
                  {{ t('mdata.press.empty') }}
                </p>
              </div>
            </section>

            <prestige-cta-band
              :eyebrow="t('mdata.press.ctaEyebrow')"
              :title="t('mdata.press.ctaTitle')"
              :text="t('mdata.press.ctaText')"
              image="/assets/images/v3/press.webp"
              :primary-label="t('mdata.press.ctaPrimary')"
              primary-to="/contact-us"
            />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { getEditorialArticles } from "~/data/editorial-data";

const { t } = useI18n();

definePageMeta({ layout: false });
useSeoMeta({
  title: () => t("mdata.press.seoTitle"),
  description: () => t("mdata.press.seoDesc"),
});

const items = getEditorialArticles("press");

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-press-grid {
  padding-top: 0;
}
</style>
