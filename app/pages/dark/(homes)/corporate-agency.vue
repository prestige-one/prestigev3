<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor />
    <!-- End magic cursor -->

    <nuxt-layout name="layout-nine">
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- hero area start -->
            <hero-nine />
            <!-- hero area end -->

            <!-- banner area start -->
            <div class="crp-banner-area">
              <div class="crp-banner-wrap">
                <img class="w-100" data-speed=".8" src="/img/home-09/banner/banner-1.jpg" alt="banner-img">
              </div>
            </div>
            <!-- banner area end -->

            <!-- about area start -->
            <about-eight />
            <!-- about area end -->

            <!-- brand area start -->
            <brand-area-nine />
            <!-- brand area end -->

            <!-- service area start -->
            <service-seven />
            <!-- service area end -->

            <!-- success area start -->
            <success-area-one />
            <!-- success area end -->

            <!-- project area start -->
            <project-nine />
            <!-- project area end -->

            <!-- banner area start -->
            <div class="crp-banner-area crp-banner-style">
              <div class="crp-banner-wrap">
                <img class="w-100" data-speed=".8" src="/img/home-09/banner/banner-2.jpg" alt="banner-img">
              </div>
            </div>
            <!-- banner area end -->

            <!-- brand area start -->
            <brand-area-ten />
            <!-- brand area end -->

            <!-- process area start -->
            <process-area-one />
            <!-- process area end -->

            <!-- pricing area start -->
            <pricing-two />
            <!-- pricing area end -->

            <!-- testimonial area start -->
            <testimonial-six />
            <!-- testimonial area end -->

            <!-- text slider area start -->
            <text-slider-six />
            <!-- text slider area end -->

            <!-- blog area start -->
            <blog-area-five />
            <!-- blog area end -->

          </main>

          <!-- footer area start -->
          <footer-eight />
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
  title: "Agntix - Corporate Agency vue nuxt Template",
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
      panelPin();
      zoomAnimation();
      movingText();
    });
  }
});

useHead({
  bodyAttrs:{
    style:"background-color: #2A4C3A;"
  }
})
</script>
