<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor />
    <!-- End magic cursor -->
    <nuxt-layout name="layout-home4">

      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- hero area start (autoplay background video hero, no scroll-scrub) -->
            <hero-prestige />
            <!-- hero area end -->

            <!-- why prestige one area start -->
            <prestige-why-us />
            <!-- why prestige one area end -->

            <!-- why dubai area start -->
            <prestige-why-dubai />
            <!-- why dubai area end -->


            <!-- our developments area start (only the 3 main projects) -->
            <prestige-our-developments :slides="mainProjects" />
            <!-- our developments area end -->

            <!-- upcoming developments area start -->
            <prestige-upcoming-developments />
            <!-- upcoming developments area end -->


            <!-- client handover stories area start -->
            <prestige-client-stories />
            <!-- client handover stories area end -->

            <!-- contact form area start (centered single-column variant) -->
            <prestige-contact-form centered />
            <!-- contact form area end -->

          </main>

          <!-- footer area start -->
          <prestige-footer-digital-marketing />
          <!-- footer area end -->
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

// shared GSAP + scroll-smooth + reveal bootstrap (see usePrestigePage)
usePrestigePage();
</script>
