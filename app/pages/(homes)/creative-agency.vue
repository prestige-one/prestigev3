<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-bg-red" />
    <!-- End magic cursor -->

    <nuxt-layout name="layout-six">
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- hero area start -->
            <hero-six />
            <!-- hero area end -->

            <!-- banner area start -->
            <banner-two />
            <!-- banner area end -->

            <!-- about area start -->
            <about-five />
            <!-- about area end -->

            <!-- step area start -->
            <step-area-two />
            <!-- step area end -->

            <!-- project area start -->
            <project-six />
            <!-- project area end -->

            <!-- showcase area start -->
            <showcase-one />
            <!-- showcase area end -->

            <!-- service area start -->
            <service-four />
            <!-- service area end -->

            <!-- brand area start -->
            <brand-area-five />
            <!-- brand area end -->

            <!-- award area start -->
            <award-area-two />
            <!-- award area end -->

            <!-- testimonial area start -->
            <testimonial-four />
            <!-- testimonial area end -->

            <!-- team area start -->
             <team-area-three/>
            <!-- team area end -->

          </main>

          <!-- footer area start -->
           <footer-five/>
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
  title: "Agntix - Creative Agency vue nuxt Template",
});

// use image hover reveal
useImageHoverReveal();

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
      initImageTrail();
      textPerspectiveAnimation();
      creativeAgencyProjectAnimation();
      teamAnimation();
      movingText();
    });
  }
});
useHead({
  htmlAttrs: {
    class: "no-js agntix-light",
  },
});
</script>
