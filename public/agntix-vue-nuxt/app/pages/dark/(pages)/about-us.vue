<template>
  <div>
    <nuxt-layout>

      <!-- magic cursor -->
      <common-magic-cursor bg-cls="cursor-bg-yellow" />
      <!-- end magic cursor -->
  
      <!-- header area start -->
      <header-seventeen top-cls="tp-header-blur header-inner-white sticky-black-bg @@class" />
      <!-- header area end -->
  
      <div id="smooth-wrapper">
        <div id="smooth-content">
  
          <main>
  
            <!-- about us hero start -->
            <about-us-hero />
            <!-- about us hero end -->
  
            <!-- text slider start -->
            <about-us-text-slider />
            <!-- text slider end -->
  
            <!-- banner area start -->
            <div class="ar-banner-area">
              <div class="ar-banner-wrap ar-about-us-4">
                <img class="w-100" src="/img/about-us/about-us-4/about-us-4-thumb-1.jpg" alt="" data-speed=".8">
              </div>
            </div>
            <!-- banner area end -->
  
            <!-- about area start -->
            <about-one spacing="pb-140" bg-colur="#1A1B1E" />
            <!-- about area end -->
  
            <!-- service area start -->
            <about-us-service />
            <!-- service area end -->
  
            <!-- fun fact area start -->
            <fun-fact-one />
            <!-- fun fact area end -->
  
            <!-- work area start -->
            <work-area-one />
            <!-- work area end -->
  
            <!-- team area start -->
            <team-area-four />
            <!-- team area end -->
  
            <!-- award area start -->
            <div class="tp-award-area tp-award-bg black-bg-3" data-background="/img/home-01/testimonial/noise.png" style="background-image: url(/img/home-01/testimonial/noise.png)">
              <div class="container container-1230">
                <award-item />
              </div>
            </div>
            <!-- award area end -->
  
          </main>
  
          <!-- footer area start -->
          <footer-five bg-clr="" />
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
      textBounceAnimation();
      panelAnimation();
      panelPin();
    });
  }
});
useHead({
  htmlAttrs: {
    class:'no-js agntix-dark',
  }
});
</script>
