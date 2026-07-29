<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Media Center"
              title="Construction Updates"
              lead="Progress from the ground up — milestones and site news from developments underway across our portfolio."
              image="/assets/images/v2/pages/pages-internal-images/constructions/The-One-Construction-Update-1.webp"
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
                  No construction updates just yet — check back soon for the latest from our sites.
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
  title: "Construction Updates | Prestige One",
  description:
    "Construction milestones and site progress from Prestige One developments across Dubai.",
});

const items = getArticlesByCategory("construction");

usePrestigePage({ hero: false });
</script>
