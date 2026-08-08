<template>
  <main class="prestige-page">
    <prestige-page-hero
      :eyebrow="categoryLabel"
      :title="article.title"
      :lead="article.excerpt"
      :image="article.cover"
    />

    <section class="prestige-section">
      <div class="container container-1430">
        <div class="row">
          <div class="col-xl-8 offset-xl-2">
            <div class="prestige-editorial__meta tp_fade_anim" data-delay=".2">
              <span v-if="article.author" class="prestige-editorial__author">{{ article.author }}</span>
              <span v-if="article.author && formattedDate" class="prestige-editorial__dot">·</span>
              <span v-if="formattedDate" class="prestige-editorial__date">{{ formattedDate }}</span>
            </div>

            <!-- eslint-disable-next-line vue/no-v-html -- trusted editorial HTML migrated from Prestige v2 -->
            <div class="prestige-prose prestige-editorial__body tp_fade_anim" data-delay=".3" v-html="cleanBody" />

            <div
              v-if="article.categories?.length || article.tags?.length"
              class="prestige-editorial__taxonomy tp_fade_anim"
              data-delay=".2"
            >
              <div v-if="article.categories?.length" class="prestige-editorial__taxonomy-group">
                <span class="prestige-eyebrow">Categories</span>
                <div class="prestige-editorial__chips">
                  <span v-for="item in article.categories" :key="item" class="prestige-editorial__chip">{{ item }}</span>
                </div>
              </div>
              <div v-if="article.tags?.length" class="prestige-editorial__taxonomy-group">
                <span class="prestige-eyebrow">Tags</span>
                <div class="prestige-editorial__chips">
                  <span v-for="item in article.tags" :key="item" class="prestige-editorial__chip">#{{ item }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="moreStories.length" class="prestige-section prestige-section--tight prestige-editorial__more">
      <div class="container container-1430">
        <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Keep reading</span>
        <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">More stories</h2>
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
      title="Discover what comes next"
      text="Explore our developments or speak with our team for more information."
      :image="article.cover"
      primary-label="Get in touch"
      :primary-to="localePath('/contact-us')"
      secondary-label="View developments"
      :secondary-to="localePath('/projects')"
    />
  </main>
</template>

<script setup lang="ts">
import {
  editorialCategoryLabel,
  type EditorialArticle,
} from "~/data/editorial-data";

const props = defineProps<{
  article: EditorialArticle;
  articles: EditorialArticle[];
}>();

const localePath = useLocalePath();
const categoryLabel = computed(() => editorialCategoryLabel(props.article.category));
const formattedDate = computed(() => {
  if (!props.article.date) return "";
  const date = new Date(props.article.date);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
});
const cleanBody = computed(() =>
  props.article.body
    .replace(/<p[^>]*>(?:\s|&nbsp;|\u00a0)*<\/p>/gi, "")
    .trim(),
);
const moreStories = computed(() =>
  props.articles.filter((item) => item.slug !== props.article.slug).slice(0, 3),
);
</script>

<style scoped>
.prestige-editorial__meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 34px;
  padding-bottom: 26px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.prestige-editorial__author {
  color: #fff;
}

.prestige-editorial__dot,
.prestige-editorial__date {
  color: rgba(255, 255, 255, 0.5);
}

.prestige-editorial__body :deep(img) {
  display: block;
  width: 100%;
  height: auto;
  margin: clamp(30px, 5vw, 60px) 0;
  border-radius: 8px;
}

.prestige-editorial__body :deep(a) {
  color: #fff;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.prestige-editorial__taxonomy {
  display: grid;
  gap: 24px;
  margin-top: 48px;
  padding-top: 34px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.prestige-editorial__taxonomy-group {
  display: grid;
  gap: 14px;
}

.prestige-editorial__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.prestige-editorial__chip {
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  letter-spacing: 0.06em;
}

.prestige-editorial__more {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
</style>
