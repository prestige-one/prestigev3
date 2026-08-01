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

            <!-- our developments area start (only the 3 main projects) -->
            <prestige-our-developments :slides="mainProjects" />
            <!-- our developments area end -->

            <!-- upcoming developments area start -->
            <prestige-upcoming-developments />
            <!-- upcoming developments area end -->

            <!-- why prestige one area start -->
            <prestige-why-us />
            <!-- why prestige one area end -->

            <!-- where opportunity grows (locations map) area start -->
            <prestige-opportunity />
            <!-- where opportunity grows area end -->

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
import residentialDevelopments from "~/data/residential-developments-data";

// homepage features only the 3 main (flagship) projects in the developments slider
const MAIN_TITLES = [
  "FAUCHON Résidences by Prestige One",
  "Hilton Residences Dubai Maritime City",
  "Sanctuary Residences by Prestige One",
];
const mainProjects = residentialDevelopments.filter((d) => MAIN_TITLES.includes(d.title));

definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Prestige One Developments",
  ogTitle: "Prestige One Developments",
  description: "Prestige One Developments is a premium real estate developer, redefining luxury living across Dubai's most prestigious destinations.",
  ogDescription: "Prestige One Developments is a premium real estate developer, redefining luxury living across Dubai's most prestigious destinations.",
  ogImage: "/assets/images/v3/prestigeone_logo_oneline_dark-hr.svg",
  twitterCard: "summary_large_image",
});

// shared GSAP + scroll-smooth + reveal bootstrap (see usePrestigePage)
usePrestigePage();
</script>
