<template>
  <div>

    <!-- magic cursor -->
    <common-magic-cursor bg-cls="cursor-bg-yellow" />
    <!-- magic cursor end -->

    <nuxt-layout name="layout-fourteen">
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- hero area start -->
            <hero-fourteen />
            <!-- hero area end -->

            <!-- text slider area start -->
            <text-slider-eight />
            <!-- text slider area end -->

            <!-- about area start -->
            <about-eleven />
            <!-- about area end -->

            <!-- project area start -->
            <project-eleven />
            <!-- project area end -->

            <!-- video area start -->
            <video-area-three />
            <!-- video area end -->

            <!-- portfolio area start -->
            <portfolio-three />
            <!-- portfolio area end -->

            <!-- testimonial area start -->
            <testimonial-eleven />
            <!-- testimonial area end -->

          </main>

          <!-- footer area start -->
          <footer-thirteen />
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
  title: "Agntix - Fashion studio vue nuxt Template",
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
      zoomAnimation();
      imagRevealAnimation();
      charAnimation();
      portfolioAnimationTwo();
    });
  }
});
</script>
