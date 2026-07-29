<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Media Center"
              title="News & Updates"
              lead="The latest from Prestige One — construction milestones, press announcements, market insight and stories from the communities we build."
              image="/assets/images/v2/news/2K6A3227-scaled.webp"
            />

            <!-- featured -->
            <section v-if="featured" class="prestige-section">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Featured</span>
                <nuxt-link
                  :to="`/blog/${featured.slug}`"
                  class="prestige-feature tp_fade_anim"
                  data-delay=".3"
                >
                  <div class="prestige-feature__media">
                    <img :src="featured.cover" :alt="featured.title" loading="lazy">
                  </div>
                  <div class="prestige-feature__body">
                    <div class="prestige-feature__meta">
                      <span class="prestige-feature__cat">{{ categoryLabel(featured.category) }}</span>
                      <span class="prestige-feature__dot">·</span>
                      <span>{{ formatDate(featured.date) }}</span>
                    </div>
                    <h2 class="prestige-feature__title">{{ featured.title }}</h2>
                    <p class="prestige-feature__excerpt">{{ featured.excerpt }}</p>
                    <span class="prestige-btn prestige-btn--ghost">Read the story<span>→</span></span>
                  </div>
                </nuxt-link>
              </div>
            </section>

            <!-- latest grid -->
            <section class="prestige-section prestige-section--tight">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Latest</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">Recent updates</h2>
                <div class="row">
                  <div
                    v-for="article in latest"
                    :key="article.slug"
                    class="col-xl-4 col-lg-4 col-md-6 mb-50 tp_fade_anim"
                    data-delay=".2"
                  >
                    <prestige-article-card :article="article" />
                  </div>
                </div>
              </div>
            </section>

            <!-- inside prestige one -->
            <prestige-feature-split
              eyebrow="Inside Prestige One"
              title="Built in the open"
              image="/assets/images/v2/news/website-banner-collage-01-scaled.webp"
              :paragraphs="[
                'We believe the story of a home should not begin on handover day. From groundbreaking ceremonies to façade milestones, we share the progress of our developments openly — so buyers can watch their future address take shape, floor by floor.',
                'Alongside construction news, our Media Center brings you the partnerships and market perspective that shape how we build: the brands we work with, the investments we make, and the fundamentals that keep Dubai at the forefront of global real estate.',
              ]"
              :points="[
                'Regular construction updates from active sites',
                'Official announcements and brand partnerships',
                'Market insight on investing in Dubai',
                'Design thinking behind every Prestige One home',
              ]"
              reverse
            />

            <!-- quick links -->
            <section class="prestige-section prestige-section--tight prestige-quicklinks">
              <div class="container container-1430">
                <div class="row align-items-center">
                  <div class="col-xl-5 col-lg-5 mb-30">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Explore the Media Center</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">Browse by category</h2>
                  </div>
                  <div class="col-xl-7 col-lg-7">
                    <div class="prestige-quicklinks__row tp_fade_anim" data-delay=".4">
                      <nuxt-link
                        v-for="cat in categories"
                        :key="cat.key"
                        :to="cat.route"
                        class="prestige-btn prestige-btn--ghost"
                      >
                        {{ cat.label }}
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <prestige-cta-band
              eyebrow="Stay in the loop"
              title="Never miss a milestone"
              text="Register your interest to receive construction updates, launch news and market insight from Prestige One — straight from the source."
              image="/assets/images/v2/news/2K6A3227-scaled.webp"
              primary-label="Get in touch"
              primary-to="/contact-us"
              secondary-label="Read the blog"
              secondary-to="/blog"
            />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import {
  getAllArticles,
  getArticlesByCategory,
  categoryLabel,
  categories,
} from "~/data/blog-data";

definePageMeta({ layout: false });
useSeoMeta({
  title: "Media Center | Prestige One",
  description:
    "News, construction updates, press releases and market insight from Prestige One Developments.",
});

const featured = getArticlesByCategory("press")[0];
const latest = getAllArticles()
  .filter((a) => a.slug !== featured?.slug)
  .slice(0, 6);

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-feature {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: center;
  color: #fff;
}
.prestige-feature__media {
  overflow: hidden;
  border-radius: 6px;
  aspect-ratio: 16 / 10;
  background: #101013;
}
.prestige-feature__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-feature:hover .prestige-feature__media img {
  transform: scale(1.05);
}
.prestige-feature__meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 16px;
}
.prestige-feature__cat {
  color: var(--tp-common-gold, #d9b382);
}
.prestige-feature__dot {
  color: rgba(255, 255, 255, 0.35);
}
.prestige-feature__title {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(28px, 3.2vw, 44px);
  font-weight: 400;
  line-height: 1.12;
  color: #fff;
  margin: 0 0 18px;
}
.prestige-feature__excerpt {
  font-size: 17px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 28px;
}
.prestige-quicklinks {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.prestige-quicklinks__row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
@media (max-width: 991px) {
  .prestige-feature {
    grid-template-columns: 1fr;
    gap: 26px;
  }
}
</style>
