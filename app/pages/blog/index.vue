<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              class="prestige-listing-hero"
              :eyebrow="t('mdata.blog.heroEyebrow')"
              :title="t('mdata.blog.heroTitle')"
              :lead="t('mdata.blog.heroLead')"
              image="/assets/images/v2/our-destinations/palm-jumeira.webp"
            />

            <!-- article grid -->
            <section class="prestige-section prestige-section--tight prestige-editorial-grid">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('mdata.blog.allArticles') }}</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">{{ t('mdata.blog.latestReading') }}</h2>
                <div class="row">
                  <div
                    v-for="article in allArticles"
                    :key="article.slug"
                    class="col-xl-4 col-lg-4 col-md-6 mb-50 tp_fade_anim"
                    data-delay=".2"
                  >
                    <prestige-article-card :article="article" />
                  </div>
                </div>
              </div>
            </section>

            <prestige-cta-band
              :eyebrow="t('mdata.blog.ctaEyebrow')"
              :title="t('mdata.blog.ctaTitle')"
              :text="t('mdata.blog.ctaText')"
              image="/assets/images/v2/our-destinations/palm-jumeira.webp"
              :primary-label="t('mdata.common.getInTouch')"
              :primary-to="localePath('/contact-us')"
              :secondary-label="t('mdata.common.exploreDevelopments')"
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
import { getEditorialArticles, type EditorialArticle } from "~/data/editorial-data";

const { t, te } = useI18n();
const localePath = useLocalePath();

definePageMeta({ layout: false });
useSeoMeta({
  title: "Blog | Prestige One",
  description:
    "Insights and stories on design, investment and living well in Dubai from Prestige One Developments.",
});

// Localize title/excerpt from mdata with fallback to the English data.
function localizeArticle(a: EditorialArticle): EditorialArticle {
  const base = `mdata.blog.posts.${a.slug}`;
  return {
    ...a,
    title: te(`${base}.title`) ? t(`${base}.title`) : a.title,
    excerpt: te(`${base}.excerpt`) ? t(`${base}.excerpt`) : a.excerpt,
  };
}

const sourceArticles = getEditorialArticles("blog");
const allArticles = computed(() => sourceArticles.map(localizeArticle));

usePrestigePage({ hero: false });
</script>
