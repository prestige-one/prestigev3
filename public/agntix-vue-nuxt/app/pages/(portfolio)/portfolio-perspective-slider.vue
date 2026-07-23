<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-white-bg" />
    <!-- End magic cursor -->

    <nuxt-layout>
      <!-- header area start -->
      <header-fifteen top-cls="header-fixed pt-10" :logo-black="true" />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <!-- portfolio perspective slider start -->
            <portfolio-perspective-slider />
            <!-- portfolio perspective slider end -->
          </main>
        </div>
      </div>

      <!-- footer area start -->
      <div class="tp-perspective-social-wrap pb-40">
        <div class="container container-1800">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-6">
              <div class="tp-perspective-social-info">
                <span>© {{ new Date().getFullYear() }} | Agntix</span>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-6">
              <div class="tp-perspective-scroll text-end smooth">
                <a href="#">(Scroll)</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- footer area end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Agntix - Portfolio Perspective Slider vue nuxt Template",
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
      perspective();
      revealAnimation();
    });
  }
});

useHead({
  htmlAttrs: {
    class: "no-js agntix-light",
  },
  bodyAttrs: {
    style: "background-color: #fff;",
  }
});
</script>
