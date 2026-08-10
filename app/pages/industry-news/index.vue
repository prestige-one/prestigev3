<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              class="prestige-listing-hero"
              :eyebrow="t('mdata.news.heroEyebrow')"
              :title="t('mdata.news.heroTitle')"
              :lead="t('mdata.news.heroLead')"
              image="/assets/images/v2/news/sales-gallery-1-scaled.webp"
            />

            <prestige-listing-intro
              :title="t('mdata.news.introEyebrow')"
              :text="t('mdata.news.introBody')"
              uppercase
            />

            <section class="prestige-section prestige-section--tight prestige-editorial-grid prestige-editorial-grid--after-intro">
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
                  {{ t('mdata.news.empty') }}
                </p>
              </div>
            </section>

            <prestige-cta-band
              :eyebrow="t('mdata.news.ctaEyebrow')"
              :title="t('mdata.news.ctaTitle')"
              :text="t('mdata.news.ctaText')"
              image="/assets/images/v2/locations/JBR.webp"
              :primary-label="t('mdata.news.ctaPrimary')"
              primary-to="/contact-us"
              :secondary-label="t('mdata.news.ctaSecondary')"
              secondary-to="/destinations"
            />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { getEditorialArticles, type EditorialArticle } from "~/data/editorial-data";

const { t } = useI18n();

definePageMeta({ layout: false });
useSeoMeta({
  title: () => t("mdata.news.seoTitle"),
  description: () => t("mdata.news.seoDesc"),
});

// Source articles are migrated from Prestige v2 and retain their original order.
const items: EditorialArticle[] = getEditorialArticles("industry");

usePrestigePage({ hero: false });
</script>

