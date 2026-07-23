<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-bg-red-2" />
    <!-- End magic cursor -->

    <nuxt-layout name="layout-thirteen">
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- hero area start -->
            <hero-thirteen />
            <!-- hero area end -->

            <!-- banner area start -->
            <banner-three />
            <!-- banner area end -->

            <!-- brand area start -->
            <brand-area-fourteen />
            <!-- brand area end -->

            <!-- about area start -->
            <about-ten />
            <!-- about area end -->

            <!-- service area start -->
            <service-ten />
            <!-- service area end -->

            <!-- portfolio area start -->
            <portfolio-two />
            <!-- portfolio area end -->

            <!-- video area start -->
            <video-area-two />
            <!-- video area end -->

            <!-- testimonial area start -->
            <testimonial-ten />
            <!-- testimonial area end -->

            <!-- award area start -->
            <award-area-four />
            <!-- award area end -->

            <!-- choose area start -->
            <choose-area-three />
            <!-- choose area end -->

            <!-- counter area start -->
            <counter-two />
            <!-- counter area end -->

            <!-- blog area start -->
            <blog-area-seven />
            <!-- blog area end -->

            <!-- cta area start -->
            <cta-two />
            <!-- cta area end -->
          </main>

          <!-- footer area start -->
          <footer-twelve />
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
  title: "Agntix - Startup Agency vue nuxt Template",
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
      stPortfolioAnimation();
      ctaBgCircleAnimation();
      textParagraphAnimation()
      textRevealAnimation();
      buttonBounceAnimation();
    });
  }
});

useHead({
  htmlAttrs:{
    class:'no-js agntix-dark'
  }
})
</script>
