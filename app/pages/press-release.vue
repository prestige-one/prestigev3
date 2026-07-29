<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Media Center"
              title="Press Releases"
              lead="Official announcements from Prestige One — partnerships, launches and milestones shaping the business."
              image="/assets/images/v2/press-releases/First-Hilton-branded-residences-to-debut-in-UAE-with-Prestige-One.webp"
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
                  No press releases just yet — check back soon for our latest announcements.
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
  title: "Press Releases | Prestige One",
  description:
    "Official press announcements and news from Prestige One Developments.",
});

const items = getArticlesByCategory("press");

usePrestigePage({ hero: false });
</script>
