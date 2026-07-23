<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor />
    <!-- End magic cursor -->

    <nuxt-layout name="layout-ten">
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- hero area start -->
            <hero-ten />
            <!-- hero area end -->

            <!-- brand area start -->
            <brand-area-eleven />
            <!-- brand area end -->

            <!-- feature area start -->
            <feature-area-one />
            <!-- feature area end -->

            <!-- feature area start -->
            <feature-area-two />
            <!-- feature area end -->

            <!-- review area start -->
            <review-area-one />
            <!-- review area end -->

            <!-- stack area start -->
            <stack-area-one />
            <!-- stack area end -->

            <!-- benefit area start -->
            <benefit-area-one />
            <!-- benefit area end -->

            <!-- pricing area start -->
            <pricing-three />
            <!-- pricing area end -->

            <!-- testimonial area start -->
            <testimonial-seven />
            <!-- testimonial area end -->

            <!-- faq area start -->
            <faq-two />
            <!-- faq area end -->

            <!-- cta area start -->
            <cta-one />
            <!-- cta area end -->

          </main>

          <!-- footer area start -->
          <footer-nine />
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
  title: "Agntix - Mobile Application vue nuxt Template",
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
    smoothWrapper.style.backgroundColor = '#F7F7FD';
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
      stackPanelPin();
      gsapBgAnimation();
    });
  }
});
onUnmounted(() => {
  const smoothWrapper = document.getElementById('smooth-wrapper');
  if (smoothWrapper) smoothWrapper.style.backgroundColor = '';
})
</script>
