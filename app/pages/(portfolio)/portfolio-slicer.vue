<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-white-bg" />
    <!-- End magic cursor -->
    <nuxt-layout>
      <!-- header area start -->
      <header-seventeen top-cls="tp-header-blur sticky-white-bg" />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <!-- portfolio masonry area start -->
            <div class="tp-portfolio-masonry-ptb pt-130">
              <div class="container container-1830">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="tp-portfolio-masonry-heading pb-80">
                      <h2 class="tp-portfolio-masonry-big-text tp-char-animation">Skill vison</h2>
                    </div>
                  </div>
                </div>
                <div class="tp-portfolio-masonry-wrap">
                  <div class="row">
                    <div class="col-xl-6 col-lg-4" />
                    <div class="col-xl-6 col-lg-8">
                      <div class="tp-portfolio-masonry-top-right">
                        <p>
                          A Product Designer focus on the main aim growing <br>
                          your business, while I'll make sure that your business <br>
                          is effectively represented in the digital environment <br>
                          and stands out from the competitors.
                        </p>
                        <div class="tp-portfolio-masonry-social">
                          <a href="#">Instagram</a>
                          <a href="#">Behance</a>
                          <a href="#">Dribbble</a>
                          <a href="#">Linkedin</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- portfolio masonry area end -->

            <!-- portfolio slicer area start -->
            <portfolio-slicer-area />
            <!-- portfolio slicer area end -->
          </main>

          <!-- footer area start -->
          <footer-five />
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
  title: "Agntix - Portfolio Slicer vue nuxt Template",
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
      perspective();
      revealAnimation();
      portfolioSlicerAnimation();
      charAnimation();
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
