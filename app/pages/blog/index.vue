<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Blog"
              title="Insights & Stories"
              lead="Perspectives on design, investment and living well in Dubai — from the team shaping Prestige One's communities."
              image="/assets/images/v2/our-destinations/palm-jumeira.webp"
            />

            <section class="prestige-section">
              <div class="container container-1430">
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
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { getAllArticles } from "~/data/blog-data";

definePageMeta({ layout: false });
useSeoMeta({
  title: "Blog | Prestige One",
  description:
    "Insights and stories on design, investment and living well in Dubai from Prestige One Developments.",
});

const allArticles = getAllArticles();

usePrestigePage({ hero: false });
</script>
