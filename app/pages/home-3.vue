<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <main class="prestige-page">
        <!-- scroll-scrubbed video hero (no logo / no text) -->
        <prestige-scroll-video-hero
          src="/assets/videos/Hero-Video-opt.mp4"
          :scroll-vh="400"
        />

        <!-- the rest of the homepage story -->
        <prestige-our-developments />
        <prestige-upcoming-developments />
        <prestige-why-us />
        <prestige-testimonials />
        <prestige-contact-form />
      </main>

      <prestige-footer-digital-marketing />
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });
useSeoMeta({
  title: "Prestige One Developments",
  ogTitle: "Prestige One Developments",
  description:
    "Prestige One Developments is a premium real estate developer, redefining luxury living across Dubai's most prestigious destinations.",
});

// Native scroll (no ScrollSmooth) so the hero video scrubs directly with the
// scroll position. Reveal animations for the sections below still run on
// ScrollTrigger. The scroll-video hero sets up its own pinned scrub.
onMounted(async () => {
  const { gsap } = await import("gsap");
  const { ScrollTrigger, ScrollToPlugin } = await import("gsap/all");
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  distortionImg();

  const imagesLoaded = (await import("imagesloaded")).default;
  const imgLoad = imagesLoaded(document.body, { background: true });
  imgLoad.on("always", () => {
    prestigeDevelopmentsReveal();
    fadeAnimation();
    revealAnimation();
    zoomAnimation();
    portfolioAnimation(80);
    ScrollTrigger.refresh();
  });
});
</script>
