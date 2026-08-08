<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor />
    <!-- End magic cursor -->
    <nuxt-layout name="layout-one">

      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- about us hero area start -->
            <div id="our-story" class="prestige-anchor"><prestige-about-hero /></div>
            <!-- about us hero area end -->

            <!-- legacy & credibility area start -->
            <div class="prestige-about-us-legacy"><prestige-legacy-stats /></div>
            <!-- legacy & credibility area end -->

            <!-- founder and CEO area start -->
            <div id="about-ceo" class="prestige-anchor"><prestige-founder-profile /></div>
            <!-- founder and CEO area end -->

            <!-- our leadership area start -->
            <div id="leadership" class="prestige-anchor"><prestige-leadership /></div>
            <!-- our leadership area end -->

            <!-- what drives us area start -->
            <div id="what-drives-us" class="prestige-anchor"><prestige-drives-us /></div>
            <!-- what drives us area end -->

            <!-- our journey / timeline area start -->
            <div id="our-journey" class="prestige-anchor"><prestige-journey-scroll /></div>
            <!-- our journey / timeline area end -->

            <!-- our developments (by year) area start -->
            <prestige-about-developments />
            <!-- our developments (by year) area end -->

            <!-- global perspective area start -->
            <div id="global-perspective" class="prestige-anchor"><prestige-global-perspective /></div>
            <!-- global perspective area end -->

            <!-- the next chapter / closing CTA area start -->
            <prestige-next-chapter />
            <!-- the next chapter / closing CTA area end -->

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
  title: "About Us - Prestige One Developments",
  ogTitle: "About Us - Prestige One Developments",
  description: "Nearly 60 years as a business group and 19 years shaping Dubai real estate - learn about Prestige One Developments' story, legacy, and credibility.",
  ogDescription: "Nearly 60 years as a business group and 19 years shaping Dubai real estate - learn about Prestige One Developments' story, legacy, and credibility.",
  ogImage: "/assets/images/v3/prestigeone_logo_oneline_dark-hr.svg",
  twitterCard: "summary_large_image",
});

onMounted(async () => {
  const { gsap } = await import('gsap');
  const { ScrollTrigger, ScrollToPlugin } = await import('gsap/all');

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // use scroll smooth
  await useScrollSmooth();
  await nextTick();
  prestigeDevelopmentsReveal();

  const imagesLoaded = (await import('imagesloaded')).default;
  const smoothWrapper = document.getElementById('smooth-wrapper');
  if (smoothWrapper) {
    const imgLoad = imagesLoaded(smoothWrapper, { background: true });

    // Handle individual image load failures
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imgLoad.on('fail', (instance: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const failedImages = instance.images.filter((img: any) => !img.isLoaded);
      if (failedImages.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        console.warn('[imagesLoaded] Some images failed to load:', failedImages.map((img: any) => img.img?.src || img.img?.getAttribute('data-background') || 'unknown'));
      }
    });

    // Handle progress for each image
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imgLoad.on('progress', (_instance: any, image: any) => {
      if (!image.isLoaded) {
        const imgSrc = image.img?.src || image.img?.getAttribute('data-background') || image.img?.getAttribute('src') || 'unknown';
        console.error('[imagesLoaded] Failed to load image:', imgSrc);
      }
    });

    // Always run animations regardless of success/failure
    imgLoad.on('always', () => {
      fadeAnimation();
      revealAnimation();
      zoomAnimation();
      ScrollTrigger.refresh();
    });
  }
});
</script>

<style scoped>
.prestige-about-us-legacy :deep(.prestige-legacy-copy) {
  max-width: 390px;
}

.prestige-about-us-legacy :deep(.prestige-legacy-title) {
  max-width: 380px;
  font-size: clamp(15px, 1.35vw, 20px);
}

</style>
