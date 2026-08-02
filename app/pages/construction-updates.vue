<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              :eyebrow="t('mdata.constr.heroEyebrow')"
              :title="t('mdata.constr.heroTitle')"
              :lead="t('mdata.constr.heroLead')"
              image="/assets/images/v2/pages/pages-internal-images/constructions/The-One-Construction-Update-1.webp"
            />

            <section class="prestige-section--tight">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-9">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('mdata.constr.introEyebrow') }}</span>
                    <div class="prestige-prose tp_fade_anim" data-delay=".3" style="margin-top: 18px;">
                      <p>{{ t('mdata.constr.introBody') }}</p>
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
                  {{ t('mdata.constr.empty') }}
                </p>
              </div>
            </section>

            <prestige-cta-band
              :eyebrow="t('mdata.constr.ctaEyebrow')"
              :title="t('mdata.constr.ctaTitle')"
              :text="t('mdata.constr.ctaText')"
              image="/assets/images/v2/news/Seaside_Building-1-scaled-2.webp"
              :primary-label="t('mdata.constr.ctaPrimary')"
              primary-to="/contact-us"
              :secondary-label="t('mdata.constr.ctaSecondary')"
              secondary-to="/projects"
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
  title: () => t("mdata.constr.seoTitle"),
  description: () => t("mdata.constr.seoDesc"),
});

const items = getArticlesByCategory("construction");

usePrestigePage({ hero: false });
</script>
