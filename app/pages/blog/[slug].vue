<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <prestige-editorial-article-page class="prestige-blog-detail" :article="article" :articles="articles" />
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { getEditorialArticle, getEditorialArticles, type EditorialArticle } from "~/data/editorial-data";

definePageMeta({ layout: false });

const route = useRoute();
const slug = String(route.params.slug ?? "");
const articles: EditorialArticle[] = getEditorialArticles("blog");
const article = getEditorialArticle("blog", slug);

if (!article) {
  throw createError({ statusCode: 404, statusMessage: "Article not found", fatal: true });
}

useSeoMeta({
  title: `${article.seoTitle || article.title} | Prestige One`,
  description: article.seoDescription || article.excerpt,
  ogImage: article.cover,
});
usePrestigePage({ hero: false });
</script>

<style scoped>
:deep(.prestige-blog-detail .prestige-editorial__body h2) {
  font-size: clamp(20px, 3vw, 23px);
}
</style>
