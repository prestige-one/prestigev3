<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Media Center"
              title="Industry News"
              lead="Market perspective and analysis on Dubai real estate — the trends shaping how and where people invest."
              image="/assets/images/v2/our-destinations/dubai-Islands.webp"
            />

            <section class="prestige-section">
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
                  No industry news just yet — check back soon for our latest market insight.
                </p>
              </div>
            </section>
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { getArticlesByCategory } from "~/data/blog-data";

definePageMeta({ layout: false });
useSeoMeta({
  title: "Industry News | Prestige One",
  description:
    "Dubai real estate market insight and analysis from Prestige One Developments.",
});

const items = getArticlesByCategory("industry");

usePrestigePage({ hero: false });
</script>
