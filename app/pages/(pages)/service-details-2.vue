<template>
  <div>
    <nuxt-layout>
      <!-- magic cursor -->
      <common-magic-cursor bg-cls="cursor-bg-red-2" />
      <!-- end magic cursor -->

      <!-- header area start -->
      <header-seventeen top-cls="tp-header-blur sticky-white-bg @@class" />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- service details hero start -->
            <about-fourteen />
            <!-- service details hero end -->

            <!-- banner area start -->
            <div class="tp-service-4-banner-area p-relative">
              <div class="ar-banner-wrap ar-about-us-4">
                <img class="w-100" src="/img/service/service-details/service-details-banner.jpg" alt="" data-speed=".8">
              </div>
            </div>
            <!-- banner area end -->

            <!-- service -details overview -->
            <service-details-overview />
            <!-- service -details overview end -->

            <!-- service details solution -->
            <service-details-solution />
            <!-- service details solution end -->

            <!-- service details thumb area start -->
            <div class="pp-service-details-thumb-ptb pb-90">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="pp-service-details-thumb fix mb-30">
                      <div class="tp_img_reveal">
                        <img src="/img/service/service-details/service-details-thumb-2.jpg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="pp-service-details-thumb fix mb-30">
                      <div class="tp_img_reveal">
                        <img src="/img/service/service-details/service-details-thumb-3.jpg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- service details thumb area end -->

            <!-- service details process start -->
            <service-details-process />
            <!-- service details process end -->

            <!-- pricing area start -->
            <pricing-five />
            <!-- pricing area end -->
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
  title: "Agntix - Service details 2 vue nuxt Template",
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
    class: "no-js agntix-light",
  },
});
</script>
