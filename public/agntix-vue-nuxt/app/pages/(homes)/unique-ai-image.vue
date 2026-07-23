<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor />
    <!-- End magic cursor -->

    <nuxt-layout name="layout-eight">
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- hero area start -->
            <client-only>
              <hero-eight />
            </client-only>
            <!-- hero area end -->

            <!-- brand area start -->
            <brand-area-eight />
            <!-- brand area end -->

            <!-- choose area start -->
            <choose-area-two />
            <!-- choose area end -->

            <!-- about area start -->
            <about-seven />
            <!-- about area end -->

            <!-- text slider area start -->
            <text-slider-five />
            <!-- text slider area end -->

            <!-- service area start -->
            <service-six />
            <!-- service area end -->

            <!-- project area start -->
            <project-eight />
            <!-- project area end -->

            <!-- pricing area start -->
            <pricing-one />
            <!-- pricing area end -->

            <!-- faq area start -->
            <faq-one />
            <!-- faq area end -->

            <!-- blog area start -->
            <blog-area-four />
            <!-- blog area end -->

            <!-- instagram area start -->
            <instagram-one />
            <!-- instagram area end -->

          </main>

          <!-- footer area start -->
          <footer-seven />
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
  title: "Agntix - Unique AI Image vue nuxt Template",
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
      textParagraphAnimation();
    });
  }
});

useHead({
  htmlAttrs: {
    class: "no-js agntix-light",
  },
});
</script>
