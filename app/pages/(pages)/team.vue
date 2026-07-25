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

            <!-- team hero start -->
            <team-hero />
            <!-- team hero end -->

            <!-- team thumb area start -->
            <div class="tp-team-inner-thumb-box mb-150">
              <div class="container container-1750">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="tp-team-inner-thumb-wrap">
                      <div class="tp-team-inner-thumb">
                        <img data-speed=".7" src="/img/team/team-thumb-1.jpg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- team thumb area end -->

            <!-- team area start -->
            <team-area-one item-cls="team-inner-color" />
            <!-- team area end -->

            <!-- about success start -->
            <about-modern-success spacing="mb-100" />
            <!-- about success end -->

            <!-- team inner part start -->
            <team-inner-part />
            <!-- team inner part end -->
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
  title: "Agntix - Pricing vue nuxt Template",
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
  } else {
    setTimeout(() => {
      fadeAnimation();
    }, 100);
  }
});

useHead({
  bodyAttrs: {
    style: "background-color: #fff;",
  }
});
</script>
