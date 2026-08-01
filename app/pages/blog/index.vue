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
              lead="Perspectives on design, investment and living well in Dubai - from the team shaping Prestige One's communities."
              image="/assets/images/v2/our-destinations/palm-jumeira.webp"
            />

            <!-- intro -->
            <prestige-feature-split
              eyebrow="Notes from Prestige One"
              title="More than a place to live"
              image="/assets/images/v3/Designed-for-Real-Living.webp"
              :paragraphs="[
                'Buying a home is one of the biggest decisions most people ever make - and one of the most personal. These pages are where we share what we have learned along the way, from the design choices that make a space feel like home to the practical realities of investing in Dubai.',
                'No jargon, no hard sell. Just honest perspective from the people who design, build and stand behind every Prestige One address.',
              ]"
              :points="[
                'Guidance for first-time and seasoned buyers',
                'The thinking behind how we design homes',
                'Clear-eyed views on the Dubai market',
                'Stories from the communities we build',
              ]"
            />

            <prestige-stat-band :stats="blogStats" />

            <!-- article grid -->
            <section class="prestige-section prestige-section--tight">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">All articles</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">Latest reading</h2>
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

            <prestige-cta-band
              eyebrow="Let's talk"
              title="Have a question we haven't answered?"
              text="Whether you are weighing your first purchase or adding to a portfolio, our team is happy to help you think it through - no obligation."
              image="/assets/images/v2/our-destinations/palm-jumeira.webp"
              primary-label="Get in touch"
              primary-to="/contact-us"
              secondary-label="Explore developments"
              secondary-to="/projects"
            />
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

const blogStats: { value: string; label: string }[] = [
  { value: `${allArticles.length}`, label: "Articles & stories" },
  { value: "4", label: "Topics we cover" },
  { value: "0%", label: "Property tax in Dubai" },
  { value: "100%", label: "Written in-house" },
];

usePrestigePage({ hero: false });
</script>
