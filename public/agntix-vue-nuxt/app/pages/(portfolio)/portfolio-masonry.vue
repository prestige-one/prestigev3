<template>
  <div>
    <nuxt-layout>
      <!-- magic cursor -->
      <common-magic-cursor bg-cls="cursor-white-bg" />
      <!-- end magic cursor -->

      <!-- header area start -->
      <header-seventeen top-cls="tp-header-blur sticky-white-bg @@class" />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>
            
            <!-- portfolio area start -->
            <portfolio-masonry-area />
            <!-- portfolio area end -->

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

useSeoMeta({
  title: "Agntix - Portfolio masonry vue nuxt Template",
  ogTitle: "Agntix - Portfolio masonry vue nuxt Template",
  description: "View our portfolio masonry layout. Agntix offers a creative and modern way to showcase your projects.",
  ogDescription: "View our portfolio masonry layout. Agntix offers a creative and modern way to showcase your projects.",
  ogImage: "/img/logo/logo-black.png",
  twitterCard: "summary_large_image",
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
      charAnimation()
    });
  }
});
useHead({
  htmlAttrs: {
    class: "no-js agntix-light",
  },
});
</script>
