<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-bg-red-2" />
    <!-- End magic cursor -->

    <nuxt-layout>
      <!-- header area start -->
      <header-seventeen top-cls="tp-header-blur sticky-white-bg @@class" :sticky="true" container-cls="1750" />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

            <!-- contact us hero area start -->
            <contact-us-hero />
            <!-- contact us hero area end -->

            <!-- contact form area start -->
            <contact-form />
            <!-- contact form area end -->

            <!-- contact about area start -->
            <contact-about />
            <!-- contact about area end -->

            <!-- contact us area start -->
            <contact-us-area />
            <!-- contact us area end -->
          </main>

          <!-- footer area start -->
          <footer-five />
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
  title: "Agntix - Contact us vue nuxt Template",
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
    });
  } else {
    setTimeout(() => {
      fadeAnimation();
    }, 50);
  }
});
useHead({
  htmlAttrs: {
    class: "no-js agntix-light",
  },
});
</script>
