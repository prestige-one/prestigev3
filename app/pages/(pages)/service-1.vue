<template>
  <div>
    <nuxt-layout>

      <!-- magic cursor -->
      <common-magic-cursor />
      <!-- end magic cursor -->

      <!-- header area start -->
      <header-two top-cls="header-black-style z-index-3 mt-40" :logo-black="true" />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

            <!-- service hero start -->
            <hero-six title='Service' font-style="fs-400" />
            <!-- service hero end -->

            <!-- banner area start -->
            <banner-two />
            <!-- banner area end -->

            <!-- service inner area start -->
            <service-inner-one />
            <!-- service inner area end -->

            <!-- text slider start -->
            <text-slider-eleven />
            <!-- text slider end -->

          </main>

          <!-- footer area start -->
          <footer-one top-cls="tp-footer-white-style pt-160 pb-35" bg-color="#F6F6F9" />
          <!-- footer area end -->
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: "Agntix - Service one vue nuxt Template",
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
      textPerspectiveAnimation();
      innerServiceAnimation();
      initImageTrail();
    });
  }
});
useHead({
  htmlAttrs: {
    class: "no-js agntix-light",
  },
});
</script>
