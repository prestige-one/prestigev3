<template>
  <nuxt-link :to="`/blog/${article.slug}`" class="prestige-acard">
    <div class="prestige-acard__media">
      <img :src="article.cover" :alt="article.title" loading="lazy">
    </div>
    <div class="prestige-acard__body">
      <div class="prestige-acard__meta">
        <span class="prestige-acard__cat">{{ categoryLabel(article.category) }}</span>
        <span class="prestige-acard__dot">·</span>
        <span class="prestige-acard__date">{{ formattedDate }}</span>
      </div>
      <h3 class="prestige-acard__title">{{ article.title }}</h3>
      <p class="prestige-acard__excerpt">{{ article.excerpt }}</p>
      <span class="prestige-acard__cta">Read article<i class="prestige-acard__arrow">→</i></span>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import { categoryLabel, type Article } from "../../data/blog-data";

const props = defineProps<{ article: Article }>();

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
  color: var(--tp-common-gold, #d9b382);
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
