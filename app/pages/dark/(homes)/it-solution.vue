<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor />
    <!-- End magic cursor -->

    <nuxt-layout name="layout-eleven">
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- hero area start -->
            <hero-eleven />
            <!-- hero area end -->

            <!-- step area start -->
            <step-area-four />
            <!-- step area end -->

            <!-- brand area start -->
            <div class="creative-brand-area it-brand-style text-center paste-bg-2 p-relative pb-200">
              <span class="creative-brand-top-text tp-split-text tp-split-right">Trusted by worldwide companies</span>
              <div class="creative-brand-wrapper">
                <brand-logo-slider />
              </div>
            </div>
            <!-- brand area end -->

            <!-- service area start -->
            <service-eight />
            <!-- service area end -->

            <!-- about area start -->
            <about-nine />
            <!-- about area end -->

            <!-- project area start -->
            <project-ten />
            <!-- project area end -->

            <!-- brand area start -->
            <brand-area-twelve />
            <!-- brand area end -->

            <!-- testimonial area start -->
            <testimonial-eight />
            <!-- testimonial area end -->

            <!-- comparison area start -->
            <comparison-area />
            <!-- comparison area end -->

            <!-- benefits area start -->
            <benefit-area-two />
            <!-- benefits area end -->

            <!-- faq area start -->
            <faq-three />
            <!-- faq area end -->

          </main>

          <!-- footer area start -->
          <footer-ten />
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
  title: "Agntix - It Solution vue nuxt Template",
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
      splitTextAnimation();
      textParagraphAnimation();
    });
  }
});

useHead({
  htmlAttrs:{
    class:'no-js agntix-dark'
  }
})
</script>
