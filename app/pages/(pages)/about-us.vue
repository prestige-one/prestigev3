<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor />
    <!-- End magic cursor -->
    <nuxt-layout name="layout-one">

      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- about hero area start -->
            <prestige-about-hero />
            <!-- about hero area end -->

            <!-- legacy & credibility area start -->
            <prestige-legacy-stats />
            <!-- legacy & credibility area end -->

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
definePageMeta({
  layout: false,
});

useSeoMeta({
  title: "About Us | Prestige One Developments",
  ogTitle: "About Us | Prestige One Developments",
  description: "Discover our story, values, and the people shaping exceptional living experiences in Dubai and beyond.",
  ogDescription: "Discover our story, values, and the people shaping exceptional living experiences in Dubai and beyond.",
  ogImage: "/assets/images/v3/prestigeone_logo_oneline_dark-hr.svg",
  twitterCard: "summary_large_image",
});

onMounted(async () => {
  const { gsap } = await import('gsap');
  const { ScrollTrigger, ScrollToPlugin } = await import('gsap/all');

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // use scroll smooth
  await useScrollSmooth();

  const imagesLoaded = (await import('imagesloaded')).default;
  const smoothWrapper = document.getElementById('smooth-wrapper');
  if (smoothWrapper) {
    const imgLoad = imagesLoaded(smoothWrapper, { background: true });
    imgLoad.on('always', () => {
      revealAnimation();
    });
  }
});
</script>
