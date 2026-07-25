<template>
  <div>
    <nuxt-layout>
      <!-- magic cursor -->
      <common-magic-cursor bg-cls="cursor-bg-yellow" />
      <!-- end magic cursor -->

      <!-- header area start -->
      <header-fifteen top-cls="header-transparent tp-header-light" />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>
            <!-- about me hero start -->
            <about-me-hero />
            <!-- about me hero end -->

            <!-- about me area start -->
            <about-me-area />
            <!-- about me area end -->

            <!-- about me service start -->
            <about-me-service />
            <!-- about me service end -->
          </main>

          <!-- footer area start -->
          <footer-fourteen spacing="" />
          <!-- footer area end -->
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: "Agntix - About me vue nuxt Template",
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
      charAnimation();
      PPAboutAnimation();
      textParagraphAnimation();
    });
  }
});
useHead({
  bodyAttrs: {
    style: "background-color: #0E0F11;",
  }
})
</script>
