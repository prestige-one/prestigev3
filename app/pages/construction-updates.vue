<!-- Data sources: app/data/construction-updates.ts; app/data/construction-updates-content.json -->
<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="cu-hub">
            <prestige-page-hero
              eyebrow="Prestige One Developments"
              title="Construction Updates"
              lead="Track how Prestige One communities take shape across Dubai. Choose a project for dedicated progress updates, imagery and milestones."
              image="/assets/images/v3/construction-updates.webp"
            />

            <section class="cu-hub__section">
              <div class="container container-1430">
                <div class="cu-hub__grid">
                  <nuxt-link v-for="project in constructionListingProjects" :key="project.slug" :to="`/construction-update-${project.slug}`" class="cu-hub-card">
                    <div class="cu-hub-card__media"><img :src="project.cardImage ?? project.hero" :alt="project.shortTitle" loading="lazy"></div>
                    <div class="cu-hub-card__body">
                      <h2>{{ project.shortTitle }}</h2>
                      <p>Follow construction progress, key milestones and the latest on-site imagery.</p>
                      <span>Explore more <b aria-hidden="true">→</b></span>
                    </div>
                  </nuxt-link>
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
import { getConstructionProjectsForListing } from "~/data/construction-updates";

const constructionListingProjects = getConstructionProjectsForListing();

definePageMeta({ layout: false });
useSeoMeta({ title: "Construction Updates | Prestige One Developments", description: "Track construction progress across Prestige One developments in Dubai." });
usePrestigePage({ hero: false });
</script>

<style scoped>
.cu-hub { background: #0b0b0d; color: #fff; }
.cu-hub :deep(.prestige-hero-band__eyebrow) { color: #fff; }
.cu-hub :deep(.prestige-hero-band__inner .row) { justify-content: center; }
.cu-hub :deep(.prestige-hero-band__inner .col-xl-9) { display: flex; flex-direction: column; align-items: center; text-align: center; }
.cu-hub :deep(.prestige-hero-band__lead) { margin-right: auto; margin-left: auto; text-align: center; }
.cu-hub__section { padding: 100px 0 120px; }
.cu-hub__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 26px; }
.cu-hub-card { display: flex; min-width: 0; flex-direction: column; overflow: hidden; border: 1px solid rgba(255,255,255,.08); border-radius: 10px; color: #fff; text-decoration: none; background: #101012; transition: border-color .3s ease, transform .3s ease; }
.cu-hub-card:hover { border-color: rgba(255,255,255,.24); transform: translateY(-5px); }
.cu-hub-card__media { height: 290px; overflow: hidden; }
.cu-hub-card__media img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
.cu-hub-card:hover img { transform: scale(1.035); }
.cu-hub-card__body { display: flex; flex: 1; flex-direction: column; padding: 26px; }
.cu-hub-card h2 { margin: 0 0 10px; color: #fff; font-size: 25px; line-height: 1.2; }
.cu-hub-card p { margin: 0 0 22px; color: #b8b8ba; font-size: 16px; line-height: 1.55; }
.cu-hub-card span { margin-top: auto; color: #fff; font-size: 13px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
.cu-hub-card b { margin-left: 7px; font-size: 19px; }
@media (max-width: 991px) { .cu-hub__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .cu-hub__section { padding: 65px 0 80px; } .cu-hub__grid { grid-template-columns: 1fr; gap: 18px; } .cu-hub-card__media { height: 245px; } .cu-hub-card__body { padding: 21px; } }
</style>
