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
              lead="Progress from the ground up - milestones and site news from developments underway across our portfolio."
              image="/assets/images/v2/pages/pages-internal-images/constructions/The-One-Construction-Update-1.webp"
            />

            <section class="prestige-section--tight">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-9">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Progress you can follow</span>
                    <div class="prestige-prose tp_fade_anim" data-delay=".3" style="margin-top: 18px;">
                      <p>A building is only as good as the care that goes into making it. That is why we share the journey openly - from the first pour to the final façade panel. Each update below is a real snapshot from an active Prestige One site, measured against a clear delivery roadmap and independently signed off at every milestone.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="prestige-section prestige-section--tight">
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
                  No construction updates just yet - check back soon for the latest from our sites.
                </p>
              </div>
            </section>

            <prestige-cta-band
              eyebrow="Following a development?"
              title="Get milestone updates first"
              text="Register your interest and we'll keep you posted as your future home moves from foundation to handover."
              image="/assets/images/v2/news/Seaside_Building-1-scaled-2.webp"
              primary-label="Register interest"
              primary-to="/contact-us"
              secondary-label="View developments"
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
