<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-bg-yellow" />
    <!-- End magic cursor -->

    <nuxt-layout name="layout-fifteen">
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- hero area start -->
            <hero-fifteen />
            <!-- hero area end -->

            <!-- brand area start -->
            <div class="pp-brand-area ar-brand-style">
              <div class="tp-brand-wrapper z-index-1">
                <brand-area-fifteen />
              </div>
            </div>
            <!-- brand area end -->

            <!-- about area start -->
            <about-twelve />
            <!-- about area end -->

            <!-- service area start -->
            <service-eleven />
            <!-- service area end -->

            <!-- banner area start -->
            <div class="pp-banner-area pp-banner-style">
              <div class="pp-banner-wrap">
                <img class="w-100" data-speed=".8" src="/img/home-14/banner/pp-banner-thumb.jpg" alt="thumb">
              </div>
            </div>
            <!-- banner area end -->

            <!-- project area start -->
            <project-twelve />
            <!-- project area end -->

            <!-- text slider area start -->
            <text-slider-nine />
            <!-- text slider area end -->

            <!-- skill area start -->
            <skill-area />
            <!-- skill area end -->

            <!-- brand area start -->
            <brand-area-sixteen />
            <!-- brand area end -->

            <!-- award area start -->
            <award-area-five />
            <!-- award area end -->

            <!-- testimonial area start -->
            <testimonial-twelve />
            <!-- testimonial area end -->

            <!-- social area start -->
            <social-pp-area />
            <!-- social area end -->

          </main>

          <!-- footer area start -->
          <footer-fourteen />
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
  title: "Agntix - Personal Portfolio vue nuxt Template",
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
      codeTextAnimation();
      textParagraphAnimation();
      textRevealAnimation();
      splitTextAnimation();
    });
  }
});
useHead({
  htmlAttrs: {
    class: "no-js agntix-light",
  },
});
</script>
