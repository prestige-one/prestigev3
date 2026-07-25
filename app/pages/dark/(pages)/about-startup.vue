<template>
  <div>
    <nuxt-layout>
      <!-- magic cursor -->
      <common-magic-cursor bg-cls="" />
      <!-- end magic cursor -->

      <!-- header area start -->
      <header-nine />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <!-- about startup start -->
            <about-startup-hero />
            <!-- about startup end -->

            <!-- banner area start -->
            <div class="crp-banner-area">
              <div class="crp-banner-wrap">
                <img
                  class="w-100"
                  data-speed=".8"
                  src="/img/home-09/banner/banner-1.jpg"
                  alt="banner"
                >
              </div>
            </div>
            <!-- banner area end -->

            <!-- about area start -->
            <about-startup-area />
            <!-- about area end -->

            <!-- brand area start -->
            <brand-area-four spacing="pb-80 fix" />
            <!-- brand area end -->

            <!-- service area start -->
            <service-seven />
            <!-- service area end -->

            <!-- about success area start -->
            <about-modern-success bg-clr="#45653C" />
            <!-- about success area end -->

            <!-- team area start -->
            <team-area-one
              wrap-class="des-team-inner-style"
              spacing-cls="pb-180"
            />
            <!-- team area end -->

            <!-- award area start -->
            <award-area-five
              wrap-class="crp-price-area crp-price-bg fix p-relative z-index-1 pt-120 pb-140"
              spacing-cls="pt-120 pb-140"
              bg-class=""
              :hide-hover-img="true"
            />
            <!-- award area end -->

            <!-- project area start -->
            <about-startup-project />
            <!-- project area end -->
          </main>

          <!-- footer area start -->
          <footer-eight />
          <!-- footer area end -->
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: "Agntix - About startup vue nuxt Template",
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
      panelPin();
    });
  }
});
useHead({
  bodyAttrs: {
    style: "background-color: #2A4C3A",
  }
})
</script>
