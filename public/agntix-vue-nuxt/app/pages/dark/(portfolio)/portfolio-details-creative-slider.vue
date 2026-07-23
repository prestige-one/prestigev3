<template>
  <div>
    <nuxt-layout>

      <!-- magic cursor -->
      <common-magic-cursor bg-cls="cursor-bg-red" />
      <!-- end magic cursor -->

      <!-- header area start -->
      <header-two top-cls="z-index-3 mt-55" />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- portfolio details 3 area start -->
            <div class="tp-pd-3-hero-area">
              <div class="tp-pd-3-hero-style">
                <div class="container-fluid">
                  <div class="des-portfolio-item p-relative mb-30">
                    <div class="des-portfolio-thumb anim-zoomin-wrap p-relative">
                      <img class="w-100 anim-zoomin" src="/img/home-02/portfolio/portfolio-1.jpg" alt="">
                    </div>
                    <div class="des-portfolio-category d-none d-lg-block">
                      <span>Web Design</span>
                      <span>Web Development</span>
                    </div>
                    <div class="des-portfolio-category portfolio-meta d-none d-lg-block">
                      <span>2025</span>
                    </div>
                    <div class="des-portfolio-content">
                      <h2 class="des-portfolio-title tp-text-revel-anim">
                        <nuxt-link href="/portfolio-details-creative-slider">
                          Electro Hub
                        </nuxt-link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- portfolio details 3 area end -->


            <!-- portfolio-details-overview start -->
            <portfolio-details-overview/>
            <!-- portfolio-details-overview end -->

            <!-- portfolio details 3 gallery-->
            <div class="tp-pd-3-gallery-area">
                <div class="container container-1800">
                    <div class="row gx-20">
                        <div class="col-lg-4">
                            <div class="tp-pd-3-gallery-img small-img mb-20">
                                <img data-speed=".8" src="/img/portfolio/portfolio-details-3/port-1.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="tp-pd-3-gallery-img small-img mb-20">
                                <img data-speed=".8" src="/img/portfolio/portfolio-details-3/port-2.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="tp-pd-3-gallery-img small-img mb-20">
                                <img data-speed=".8" src="/img/portfolio/portfolio-details-3/port-3.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="tp-pd-3-gallery-img height mb-20">
                                <img data-speed=".8" src="/img/portfolio/portfolio-details-3/port-4.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- portfolio details 3 gallery-->

            <!-- portfolio-details-three-portfolio start -->
             <portfolio-details-three-portfolio/>
            <!-- portfolio-details-three-portfolio end -->

             <!-- portfolio details 3 gallery-->
              <div class="tp-pd-3-gallery-area">
                  <div class="container-fluid">
                      <div class="row gx-20">
                          <div class="col-lg-6">
                              <div class="tp-pd-3-gallery-img medium-img mb-20">
                                  <img data-speed=".8" src="/img/portfolio/portfolio-details-3/port-7.jpg" alt="">
                              </div>
                          </div>
                          <div class="col-lg-6">
                              <div class="tp-pd-3-gallery-img medium-img mb-20">
                                  <img data-speed="1.1" src="/img/portfolio/portfolio-details-3/port-8.jpg" alt="">
                              </div>
                          </div>
                          <div class="col-lg-12">
                              <div class="tp-pd-3-gallery-img height mb-20">
                                  <img data-speed=".8" src="/img/portfolio/portfolio-details-3/port-9.jpg" alt="">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- portfolio details 3 gallery-->

              <!-- portfolio-details-three-navigation start -->
               <portfolio-details-three-navigation/>
              <!-- portfolio-details-three-navigation end -->
          </main>

          <!-- footer area start -->
          <footer-two />
          <!-- footer area end -->
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: "Agntix - Portfolio details creative slider vue nuxt Template",
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
      portfolioItemPinAnimation();
      textRevealAnimation();
    });
  }
});
useHead({
  bodyAttrs: {
    class: "black-bg-7",
  },
});
</script>
