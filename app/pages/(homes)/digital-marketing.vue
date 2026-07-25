<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor />
    <!-- End magic cursor -->

    <nuxt-layout name="layout-three">
      <div id="smooth-wrapper">
        <div id="smooth-content" class="body-padding">

          <main>

            <!-- hero area start -->
            <hero-three />
            <!-- hero area end -->

            <!-- about area start -->
            <about-three />
            <!-- about area end -->

            <!-- step area start -->
            <step-area />
            <!-- step area end -->

            <!-- service area start -->
             <service-two/>
            <!-- service area end -->

            <!-- brand area start -->
            <brand-area-two />
            <!-- brand area end -->

            <!-- project area start -->
            <project-three />
            <!-- project area end -->

            <!-- team area start -->
            <team-area-two/>
            <!-- team area end -->

            <!-- brand area start -->
            <brand-area-three />
            <!-- brand area end -->

            <!-- testimonial area start -->
            <testimonial-two />
            <!-- testimonial area end -->

            <!-- blog area start -->
            <blog-area-one />
            <!-- blog area end -->

          </main>

          <!-- footer area start -->
          <footer-three />
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
  title: "Agntix - Digital Marketing vue nuxt Template",
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
      zoomAnimation();
    });
  }
});
</script>
