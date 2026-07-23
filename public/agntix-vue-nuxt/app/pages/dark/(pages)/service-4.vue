<template>
  <div>
    <nuxt-layout>

      <!-- magic cursor -->
      <common-magic-cursor bg-cls="cursor-bg-red-2" />
      <!-- end magic cursor -->

      <!-- header area start -->
      <header-seventeen top-cls="tp-header-blur header-inner-white sticky-black-bg" />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

            <!-- service hero start -->
            <service-four-hero />
            <!-- service hero end -->

            <!-- banner area start -->
            <div class="tp-service-4-banner-area p-relative">
              <div class="tp-service-4-bg-shape">
                <img src="/img/service/service-4-bg.png" alt="">
              </div>
              <div class="container container-1320">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="tp-service-4-banner-breadcrumb p-relative pb-25">
                      <span><nuxt-link href="/">Home</nuxt-link></span>
                      <span>Service 04</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ar-banner-wrap ar-about-us-4">
                <img class="w-100" src="/img/about-us/about-us-4/about-us-4-thumb-1.jpg" alt="" data-speed=".8">
              </div>
            </div>
            <!-- banner area end -->

            <!-- service solution area start -->
            <service-inner-four-solution />
            <!-- service solution area end -->

            <div class="tp-service-4-padding-area" data-bg-color="#F6F8EF" style="background-color: #1A1B1E;">

              <!-- service area start -->
              <service-two top-cls="pt-120 z-index-1" wrap-cls="dgm-service-white" :dark-text="false" />
              <!-- service area end -->

              <!-- brand area start -->
              <brand-area-two :style2="true" />
              <!-- brand area end -->

              <!-- pricing area start -->
              <pricing-four price-box-cls="service-4-price" />
              <!-- pricing area end -->
            </div>

            <!-- process area start -->
            <service-inner-process-area />
            <!-- process area end -->

            <!-- brand area start -->
             <brand-area-three />
            <!-- brand area end -->

          </main>

          <!-- footer area start -->
          <footer-three top-cls="tp-service-4-padding-area" />
          <!-- footer area end -->
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: "Agntix - Service four vue nuxt Template",
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
      imagRevealAnimation();
    });
  }
});
useHead({
  htmlAttrs: {
    class:'no-js agntix-dark',
  }
});
</script>
