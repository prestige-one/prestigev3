<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor />
    <!-- End magic cursor -->
    <nuxt-layout name="layout-one">

      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- hero area start -->
            <hero-one />
            <!-- hero area end -->

            <!-- about area start -->
            <about-one />
            <!-- about area end -->

            <!-- banner area start -->
            <banner-one />
            <!-- banner area end -->

            <!-- text slider area start -->
            <text-slider-one />
            <!-- text slider area end -->

            <!-- service area start -->
            <service-one />
            <!-- service area end -->

            <!-- video area start -->
            <video-area-one />
            <!-- video area end -->

            <!-- project area start -->
            <project-one />
            <!-- project area end -->

            <!-- fun fact area start -->
            <fun-fact-one />
            <!-- fun fact area end -->

            <!-- work area start -->
            <work-area-one />
            <!-- work area end -->

            <!-- testimonial area start -->
            <testimonial-one />
            <!-- testimonial area end -->

            <!-- award area start -->
            <award-area-one />
            <!-- award area end -->

          </main>

          <!-- footer area start -->
          <footer-one />
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
  title: "Agntix - Digital Agency & Creative Portfolio vue nuxt Template",
  ogTitle: "Agntix - Digital Agency & Creative Portfolio vue nuxt Template",
  description: "Agntix is a premium Digital Agency & Creative Portfolio Nuxt template, designed for digital agencies, creative studios, and freelancers.",
  ogDescription: "Agntix is a premium Digital Agency & Creative Portfolio Nuxt template, designed for digital agencies, creative studios, and freelancers.",
  ogImage: "/img/logo/logo-black.png",
  twitterCard: "summary_large_image",
});

onMounted(async () => {
  const { gsap } = await import('gsap');
  const { ScrollTrigger, ScrollToPlugin } = await import('gsap/all');

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // use scroll smooth
  await useScrollSmooth();

  // distortion image
  distortionImg();

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
      videoAnimation();
      serviceAnimation();
      textInvert();
      fadeAnimation();
      charAnimation();
      bounceAnimation();
      textBounceAnimation();
      panelAnimation();
      panelPin();
    });
  }
});
</script>
