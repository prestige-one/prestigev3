<!-- Data sources: app/data/projects.ts; i18n/locales/home/en.json -->
<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-home4">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <hero-prestige />
            <LazyPrestigeHome5HowWeWork hydrate-on-visible />
            <LazyPrestigeWhyDubaiRow hydrate-on-visible />

            <LazyPrestigeOurDevelopments
              :slides="mainProjects"
              :hydrate-on-visible="{ rootMargin: '600px' }"
            />
            <LazyPrestigeUpcomingDevelopments :hydrate-on-visible="{ rootMargin: '600px' }" />

            <LazyPrestigeClientStories :hydrate-on-visible="{ rootMargin: '500px' }" />
            <LazyPrestigeContactForm centered :hydrate-on-visible="{ rootMargin: '300px' }" />
          </main>

          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { getActiveProjectSlides } from "~/data/projects";

const mainProjects = getActiveProjectSlides();

const { t } = useI18n();

definePageMeta({
  layout: false,
});

useSeoMeta({
  title: () => t("hp.seo.title"),
  ogTitle: () => t("hp.seo.title"),
  description: () => t("hp.seo.description"),
  ogDescription: () => t("hp.seo.description"),
  ogImage: "/assets/images/v3/prestigeone_logo_oneline_dark-hr.svg",
  twitterCard: "summary_large_image",
});

usePrestigePage({ panelPins: true, panelPinOffset: 80, waitForImages: false });
</script>
