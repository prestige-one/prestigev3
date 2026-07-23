<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-bg-red-2" />
    <!-- End magic cursor -->

    <nuxt-layout name="layout-sixteen">
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- hero area start -->
            <client-only>
              <hero-sixteen />
            </client-only>
            <!-- hero area end -->

            <!-- text slider area start -->
            <text-slider-ten />
            <!-- text slider area end -->

            <!-- category area start -->
            <category-modern-shop />
            <!-- category area end -->

            <!-- product trending area start -->
            <product-trending />
            <!-- product trending area end -->

            <!-- about area start -->
            <about-thirteen />
            <!-- about area end -->

            <!-- product area start -->
            <product-modern-shop />
            <!-- product area end -->

            <!-- banner related area end -->
            <div class="tp-shop-banner-area mt-90">
                <div class="tp-shop-banner-wrap">
                    <img class="tp-shop-banner-img" data-speed=".8" src="/img/shop-home/banner/banner-1.jpg" alt="banner-img">
                    <div class="tp-shop-banner-sm-img">
                        <img data-speed=".8" src="/img/shop-home/banner/banner-2.jpg" alt="banner-img">
                    </div>
                </div>
            </div>
            <!-- banner related area end -->

            <!-- news letter area start -->
            <news-letter-one />
            <!-- news letter area end -->

            <!-- testimonial area start -->
            <testimonial-thirteen />
            <!-- testimonial area end -->

            <!-- feature area start -->
            <feature-area-five />
            <!-- feature area end -->

            <!-- instagram area start -->
            <instagram-two />
            <!-- instagram area end -->
          </main>

          <!-- footer area start -->
           <footer-fifteen />
          <!-- footer area end -->
        </div>
      </div>
    </nuxt-layout>

    <!-- product modal -->
    <product-modal/>
    <!-- product modal end -->
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Agntix - Modern Shop vue nuxt Template",
});

onMounted(async () => {
  const { gsap } = await import('gsap');
  const { ScrollTrigger, ScrollToPlugin } = await import('gsap/all');
  
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // use scroll smooth
  await useScrollSmooth();
  
  // Wait for images to load before running animations
  const imagesLoaded = (await import('imagesloaded')).default;
  const smoothWrapper = document.getElementById('smooth-wrapper');
  
  if (smoothWrapper) {
    // Initialize imagesLoaded on the container
    const imgLoad = imagesLoaded('.tp-shop-product-area', { background: true });    
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
      productAnimation();
      charAnimation();
    });

  }
});
useHead({
  bodyAttrs: {
    style: "background-color: #453528;",
  },
  htmlAttrs:{
    class:'no-js agntix-dark'
  },
})
</script>
