<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-bg-red-2" />
    <!-- End magic cursor -->

    <nuxt-layout name="layout-seven">
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- hero area start -->
            <hero-seven />
            <!-- hero area end -->

            <!-- category area start -->
            <category-architecture />
            <!-- category area end -->

            <!-- banner area start -->
            <div class="ar-banner-area">
              <div class="ar-banner-wrap">
                <img class="w-100" src="/img/home-08/banner/banner.jpg" alt="banner" data-speed=".8">
              </div>
              <div class="ar-scroll-image">
                <div class="ar-banner-shape d-flex align-items-center">
                  <img src="/img/home-08/banner/banner-shape.png" alt="shape">
                  <img src="/img/home-08/banner/banner-shape.png" alt="shape">
                </div>
              </div>
            </div>
            <!-- banner area end -->

            <!-- about are start -->
            <about-six />
            <!-- about are end -->

            <!-- service area start -->
            <service-five />
            <!-- service area end -->

            <!-- project area start -->
            <project-seven />
            <!-- project area end -->

            <!-- fun fact area start -->
            <fun-fact-two />
            <!-- fun fact area end -->

            <!-- testimonial area start -->
            <testimonial-five />
            <!-- testimonial area end -->

            <!-- text slider area start -->
            <text-slider-four />
            <!-- text slider area end -->

            <!-- step area start -->
            <step-are-three />
            <!-- step area end -->

            <!-- brand area start -->
            <brand-area-six />
            <!-- brand area end -->

            <!-- award area start -->
            <award-area-three />
            <!-- award area end -->

            <!-- brand area start -->
            <brand-area-seven />
            <!-- brand area end -->

            <!-- blog area start -->
            <blog-area-three />
            <!-- blog area end -->

          </main>

          <!-- footer area start -->
          <footer-six />
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
  title: "Agntix - Architecture Hub vue nuxt Template",
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
    });
  }
});
useHead({
  htmlAttrs: {
    class: "no-js agntix-light",
  },
  bodyAttrs: {
    style: "background-color: #F2F1EE;",
  }
});
</script>
