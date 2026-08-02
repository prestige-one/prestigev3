<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              :eyebrow="t('mdata.press.heroEyebrow')"
              :title="t('mdata.press.heroTitle')"
              :lead="t('mdata.press.heroLead')"
              image="/assets/images/v2/press-releases/First-Hilton-branded-residences-to-debut-in-UAE-with-Prestige-One.webp"
            />

            <section class="prestige-section--tight">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-9">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('mdata.press.introEyebrow') }}</span>
                    <div class="prestige-prose tp_fade_anim" data-delay=".3" style="margin-top: 18px;">
                      <p>{{ t('mdata.press.introBody') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="prestige-section prestige-section--tight">
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
              image="/assets/images/v2/press-releases/First-Hilton-branded-residences-to-debut-in-UAE-with-Prestige-One.webp"
              :primary-label="t('mdata.press.ctaPrimary')"
              primary-to="/contact-us"
              :secondary-label="t('mdata.press.ctaSecondary')"
              secondary-to="/media"
            />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { getArticlesByCategory } from "~/data/blog-data";

const { t } = useI18n();

definePageMeta({ layout: false });
useSeoMeta({
  title: () => t("mdata.press.seoTitle"),
  description: () => t("mdata.press.seoDesc"),
});

const items = getArticlesByCategory("press");

usePrestigePage({ hero: false });
</script>
