<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <prestige-editorial-article-page :article="article" :articles="articles" />
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { getEditorialArticle, getEditorialArticles } from "~/data/editorial-data";

definePageMeta({ layout: false });

const route = useRoute();
const slug = String(route.params.slug ?? "");
const articles = getEditorialArticles("industry");
const article = getEditorialArticle("industry", slug);

if (!article) {
  throw createError({ statusCode: 404, statusMessage: "News article not found", fatal: true });
}

useSeoMeta({
  title: `${article.seoTitle || article.title} | Prestige One`,
  description: article.seoDescription || article.excerpt,
  ogImage: article.cover,
});
usePrestigePage({ hero: false });
</script>
