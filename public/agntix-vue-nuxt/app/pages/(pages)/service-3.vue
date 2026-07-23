<template>
  <div>
    <nuxt-layout>
      <!-- magic cursor -->
      <common-magic-cursor bg-cls="" />
      <!-- end magic cursor -->

      <!-- header area start -->
      <header-two />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- about modern hero start -->
            <service-three-hero />
            <!-- about modern hero end -->

            <!-- project area start -->
            <div class="des-project-area pb-200">
              <div class="des-project-banner">
                <img class="w-100" data-speed=".7" src="/img/home-02/project/project-1.jpg" alt="">
              </div>
            </div>
            <!-- project area end -->

            <!-- text slider start -->
            <text-slider-three spacing-cls="pt-20" />
            <!-- text slider end -->

            <!-- about success start -->
            <about-modern-success />
            <!-- about success end -->

            <!-- project area start -->
            <project-two top-spacing="pt-70 pb-120" :show-banner="false" spacing-cls="" />
            <!-- project area end -->

            <!-- brand area start -->
            <brand-area-one />
            <!-- brand area end -->

            <!-- faq area start -->
            <faq-four />
            <!-- faq area end -->
          </main>

          <!-- footer area start -->
          <footer-two />
          <!-- footer area end -->
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: "Agntix - About us vue nuxt Template",
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
      textScaleAnimation();
      movingText();
      textInvertTwo('tp_text_invert_3');
    });
  }
});
useHead({
  htmlAttrs: {
    class: "no-js agntix-light",
  },
});
</script>
