<template>
  <div>
   <nuxt-layout>
      <!-- magic cursor -->
      <common-magic-cursor bg-cls="cursor-bg-red" />
      <!-- end magic cursor -->

      <!-- header area start -->
      <header-seventeen top-cls="tp-header-blur sticky-white-bg @@class" />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <!-- about creative hero start -->
            <about-creative-area />
            <!-- about creative hero end -->

            <!-- text slider start -->
            <text-slider-one
              wrapper-cls="tp-text-slide-active about-us-2"
              title-cls="tp-about-us-2-text-title"
              bg-color=""
            />
            <!-- text slider end -->

            <!-- about area start -->
            <about-five :about-style="true" />
            <!-- about area end -->

            <!-- banner area start -->
            <div class="tp-banner-area">
              <div class="tp-banner-img pink-style">
                <img
                  class="w-100"
                  data-speed=".7"
                  src="/img/home-01/banner/banner-1.jpg"
                  alt="banner"
                >
              </div>
            </div>
            <!-- banner area end -->

            <!-- text slider start -->
            <text-slider-one bg-color="pink-bg" />
            <!-- text slider end -->

            <!-- team area start -->
            <team-area-three spacing-cls="pt-140" />
            <!-- team area end -->

            <!-- brand area start -->
            <brand-area-five title-class="brand-subtitle-color" :black-style="false" />
            <!-- brand area end -->

            <!-- award area start -->
            <award-area-two spacing-cls="pb-120" :black-style="true" />
            <!-- award area end -->

            <!-- fun fact area start -->
            <fun-fact-two spacing-cls="mb-60" />
            <!-- fun fact area end -->

            <!-- service area start -->
             <about-creative-service/>
            <!-- service area end -->
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
      textRevealAnimation();
      textParagraphAnimation();
      movingText();
      zoomAnimation();
      fadeAnimation();
      teamAnimation();
    });
  }
});
</script>
