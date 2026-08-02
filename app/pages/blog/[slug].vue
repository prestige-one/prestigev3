<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main v-if="article" class="prestige-page">
            <prestige-page-hero
              :eyebrow="catLabel"
              :title="articleTitle"
              :lead="articleExcerpt"
              :image="article.cover"
            />

            <!-- article body -->
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-8 offset-xl-2">
                    <div class="prestige-article__meta tp_fade_anim" data-delay=".2">
                      <span v-if="article.author" class="prestige-article__author">{{ article.author }}</span>
                      <span v-if="article.author" class="prestige-article__dot">·</span>
                      <span class="prestige-article__date">{{ formatDate(article.date) }}</span>
                    </div>

                    <!-- eslint-disable-next-line vue/no-v-html -- authored article content, translated copy resolved via raw locale message -->
                    <div class="prestige-prose tp_fade_anim" data-delay=".3" v-html="articleBody" />

                    <div
                      v-if="relatedProject"
                      class="prestige-article__related tp_fade_anim"
                      data-delay=".2"
                    >
                      <span class="prestige-eyebrow">{{ t('mdata.blog.article.relatedDevelopment') }}</span>
                      <nuxt-link :to="`/projects/${relatedProject.slug}`" class="prestige-btn">
                        {{ relatedProject.title }}<span>→</span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- more stories -->
            <section v-if="moreStories.length" class="prestige-section prestige-section--tight prestige-article__more">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('mdata.blog.article.keepReading') }}</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">{{ t('mdata.blog.article.moreStories') }}</h2>
                <div class="row">
                  <div
                    v-for="story in moreStories"
                    :key="story.slug"
                    class="col-xl-4 col-lg-4 col-md-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <prestige-article-card :article="story" />
                  </div>
                </div>
              </div>
            </section>

            <prestige-cta-band
              eyebrow="Prestige One"
              :title="t('mdata.blog.article.ctaTitle')"
              :text="t('mdata.blog.article.ctaText')"
              :image="article.cover"
              :primary-label="t('mdata.common.getInTouch')"
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
import { getArticleBySlug, getAllArticles, categoryLabel } from "~/data/blog-data";
import { getProjectBySlug } from "~/data/projects";
import { blogBodies } from "~/data/i18n-bodies";

definePageMeta({ layout: false });

const { t, te, locale, getLocaleMessage } = useI18n();
const localePath = useLocalePath();

const route = useRoute();
const slug = computed(() => String(route.params.slug));
const article = computed(() => getArticleBySlug(slug.value));

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: "Article not found", fatal: true });
}

// Raw (uncompiled) locale-message lookup by dotted path - used for the article
// body/title/excerpt so large HTML strings (emails, markup) skip vue-i18n's
// interpolation compiler. Falls back to the English data value; reactive on
// locale switch.
function rawMsg(path: string): string | undefined {
  void locale.value;
  const msg = getLocaleMessage(locale.value) as Record<string, unknown>;
  const val = path.split(".").reduce<unknown>((o, k) => (o == null ? undefined : (o as Record<string, unknown>)[k]), msg);
  return typeof val === "string" && val ? val : undefined;
}

const postKey = computed(() => `mdata.blog.posts.${slug.value}`);
const articleTitle = computed(() => rawMsg(`${postKey.value}.title`) ?? article.value?.title ?? "");
const articleExcerpt = computed(() => rawMsg(`${postKey.value}.excerpt`) ?? article.value?.excerpt ?? "");
// Body HTML lives in the plain data module (not the locale JSON) - full markup
// with email @ breaks vue-i18n's message precompiler. Fall back to the English
// source body.
const articleBody = computed(() => blogBodies[locale.value]?.[slug.value] ?? article.value?.body ?? "");
const catLabel = computed(() => {
  const c = article.value?.category;
  if (!c) return "";
  const k = `mdata.categories.${c}`;
  return te(k) ? t(k) : categoryLabel(c);
});

const relatedProject = computed(() =>
  article.value?.project ? getProjectBySlug(article.value.project) : undefined,
);

const moreStories = computed(() =>
  getAllArticles()
    .filter((a) => a.slug !== article.value?.slug)
    .slice(0, 3),
);

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

useSeoMeta({
  title: () => `${articleTitle.value} | Prestige One`,
  description: () => articleExcerpt.value,
  ogImage: () => article.value?.cover,
});

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-article__meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 34px;
  padding-bottom: 26px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-article__author {
  color: #fff;
}
.prestige-article__dot {
  color: rgba(255, 255, 255, 0.35);
}
.prestige-article__date {
  color: rgba(255, 255, 255, 0.5);
}
.prestige-article__related {
  margin-top: 48px;
  padding-top: 34px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
.prestige-article__more {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
</style>
