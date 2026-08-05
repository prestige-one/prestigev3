<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <prestige-about-hero />
            <div id="our-story" class="prestige-anchor"><prestige-legacy-stats /></div>
            <prestige-founder-profile />
            <div id="vision" class="prestige-anchor"><prestige-drives-us-v4 /></div>
            <div id="leadership" class="prestige-anchor"><prestige-leadership /></div>
            <div id="milestones" class="prestige-anchor"><prestige-journey-scroll /></div>
            <prestige-about-developments />
            <prestige-global-perspective />
            <prestige-next-chapter />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

useSeoMeta({
  title: "About Us - Prestige One Developments",
  ogTitle: "About Us - Prestige One Developments",
  description: "Nearly 60 years as a business group and 19 years shaping Dubai real estate - learn about Prestige One Developments' story, legacy, and credibility.",
  ogDescription: "Nearly 60 years as a business group and 19 years shaping Dubai real estate - learn about Prestige One Developments' story, legacy, and credibility.",
  ogImage: "/assets/images/v3/prestigeone_logo_oneline_dark-hr.svg",
  twitterCard: "summary_large_image",
});

onMounted(async () => {
  const { gsap } = await import("gsap");
  const { ScrollTrigger, ScrollToPlugin } = await import("gsap/all");
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  await useScrollSmooth();
  await nextTick();
  prestigeDevelopmentsReveal();

  const imagesLoaded = (await import("imagesloaded")).default;
  const smoothWrapper = document.getElementById("smooth-wrapper");
  if (!smoothWrapper) return;

  imagesLoaded(smoothWrapper, { background: true }).on("always", () => {
    fadeAnimation();
    revealAnimation();
    zoomAnimation();
    ScrollTrigger.refresh();
  });
});
</script>
