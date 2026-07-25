<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor />
    <!-- End magic cursor -->

    <nuxt-layout name="layout-five">
      <client-only>
        <div id="smooth-wrapper">
          <div id="smooth-content">

            <main>

              <!-- hero area start -->
              <hero-five />
              <!-- hero area end -->

              <!-- banner area start -->
              <div class="design-video-area">
                <div class="design-video-thumb">
                  <img class="w-100" data-speed=".7" src="/img/home-05/video-img.jpg" alt="video-image">
                </div>
              </div>
              <!-- banner area end -->

              <!-- project area start -->
              <project-five />
              <!-- project area end -->

              <!-- video area start -->
              <video-area-one spacing="" />
              <!-- video area end -->

              <!-- choose area start -->
              <choose-area-four />
              <!-- choose area end -->

              <!-- service area start -->
              <service-twelve />
              <!-- service area end -->

              <!-- testimonial area start -->
              <testimonial-fourteen />
              <!-- testimonial area end -->

              <!-- award area start -->
              <award-area-six />
              <!-- award area end -->

            </main>

            <!-- footer area start -->
            <footer-sixteen />
            <!-- footer area end -->
          </div>
        </div>
      </client-only>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Agntix - Design Agency vue nuxt Template",
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
      initImageTrail();
      fadeAnimation();
      textInvertTwo('tp_text_invert_2');
      textRightScroll();
      designProjectAnimation();
      designChooseAnimation();
      workChooseAnimation();
      designAwardAnimation();
      videoAnimation();
    });
  }
});
useHead({
  htmlAttrs: {
    class: "no-js agntix-light",
  },
});
</script>
