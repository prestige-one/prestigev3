<template>
  <nuxt-link :to="`/blog/${article.slug}`" class="prestige-acard">
    <div class="prestige-acard__media">
      <img :src="article.cover" :alt="article.title" loading="lazy">
    </div>
    <div class="prestige-acard__body">
      <div class="prestige-acard__meta">
        <span class="prestige-acard__cat">{{ catLabel }}</span>
        <span class="prestige-acard__dot">·</span>
        <span class="prestige-acard__date">{{ formattedDate }}</span>
      </div>
      <h3 class="prestige-acard__title">{{ title }}</h3>
      <p class="prestige-acard__excerpt">{{ excerpt }}</p>
      <span class="prestige-acard__cta">{{ t('mdata.common.readArticle') }}<i class="prestige-acard__arrow">→</i></span>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import { categoryLabel, type Article } from "../../data/blog-data";

const props = defineProps<{ article: Article }>();

const { t, te, locale, getLocaleMessage } = useI18n();

// Raw (uncompiled) locale-message lookup by dotted path - used for article
// title/excerpt so translated copy is pulled without running large strings
// through vue-i18n's interpolation compiler. Falls back to the English data
// value. Reactive on locale switch (references locale.value).
function rawMsg(path: string): string | undefined {
  void locale.value;
  const msg = getLocaleMessage(locale.value) as Record<string, unknown>;
  const val = path.split(".").reduce<unknown>((o, k) => (o == null ? undefined : (o as Record<string, unknown>)[k]), msg);
  return typeof val === "string" && val ? val : undefined;
}

const postKey = computed(() => `mdata.blog.posts.${props.article.slug}`);
const title = computed(() => rawMsg(`${postKey.value}.title`) ?? props.article.title);
const excerpt = computed(() => rawMsg(`${postKey.value}.excerpt`) ?? props.article.excerpt);
const catLabel = computed(() => {
  const k = `mdata.categories.${props.article.category}`;
  return te(k) ? t(k) : categoryLabel(props.article.category);
});

const formattedDate = computed(() =>
  new Date(props.article.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }),
);
</script>

<style scoped>
.prestige-acard {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #fff;
}
.prestige-acard__media {
  position: relative;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: 6px;
  background: #101013;
}
.prestige-acard__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-acard:hover .prestige-acard__media img {
  transform: scale(1.06);
}
.prestige-acard__body {
  padding: 20px 4px 0;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.prestige-acard__meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.prestige-acard__cat {
  color: var(--tp-common-gold, #ffffff);
}
.prestige-acard__dot {
  color: rgba(255, 255, 255, 0.35);
}
.prestige-acard__date {
  color: rgba(255, 255, 255, 0.5);
}
.prestige-acard__title {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  margin: 12px 0 10px;
  line-height: 1.22;
}
.prestige-acard__excerpt {
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 16px;
}
.prestige-acard__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  transition: color 0.3s ease;
}
.prestige-acard:hover .prestige-acard__cta {
  color: #fff;
}
.prestige-acard__arrow {
  font-style: normal;
  transition: transform 0.3s ease;
}
.prestige-acard:hover .prestige-acard__arrow {
  transform: translateX(5px);
}
</style>
