<template>
  <div>
   <nuxt-layout>
      <!-- magic cursor -->
      <common-magic-cursor bg-cls="cursor-bg-red" />
      <!-- end magic cursor -->

      <!-- header area start -->
      <header-seventeen top-cls="tp-header-blur sticky-white-bg @@class" />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- portfolio details area start -->
            <div class="tp-portfolio-details-1-area pt-110 pb-140">
              <div class="container container-1830">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="tp-portfolio-details-1-banner">
                      <img data-speed=".8" src="/img/portfolio/portfolio-details-1/portfolio-details-banner.jpg" alt="banner">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- portfolio details area end -->

            <!-- portfolio details area start -->
            <div class="tp-portfolio-details-1-ptb pb-100">
              <div class="container container-1430">
                  <div class="row">
                      <div class="col-lg-6">
                          <div class="tp-portfolio-details-1-heading">
                              <span class="tp-portfolio-details-1-sub tp_fade_anim" data-delay=".3">Digital platform</span>
                              <h3 class="tp-portfolio-details-1-title tp_fade_anim" data-delay=".5">
                                  Olivia Rivers
                              </h3>
                              <div class="tp-portfolio-details-1-btn tp_fade_anim" data-delay=".7">
                                  <a class="tp-portfolio-details-btn" href="#">Visit Site <span><svg-arrow-up-four/></span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-6">
                          <div class="tp-portfolio-details-1-content">
                              <p>We provide digital experience services to startups & <br>
                                  small businesses. We help our clients succeed by creating <br>
                                  brand identities, digital experiences.</p>
                              <div class="tp-portfolio-details-1-list">
                                  <ul>
                                      <li><span>Client :</span> ThemePure</li>
                                      <li><span>Date :</span> 8 June 2025</li>
                                      <li><span>Role :</span> Brand , Product</li>
                                      <li><span>Share :</span> Facebook ,Twitter, LinkedIn</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <!-- portfolio details area end -->

            <!-- portfolio details thumb area start -->
             <portfolio-details-thumb/>
            <!-- portfolio details thumb area end -->

            <!-- portfolio-details-about start -->
             <portfolio-details-about/>
            <!-- portfolio-details-about end -->

            <!-- portfolio-details-banner start -->
             <portfolio-details-banner/>
            <!-- portfolio-details-banner end -->

            <!-- portfolio-details-work start -->
             <portfolio-details-work/>
            <!-- portfolio-details-work end -->
             
            <!-- portfolio details thumb area start -->
             <portfolio-details-thumb-two/>
            <!-- portfolio details thumb area end -->
            <!-- portfolio-details-work end -->
             
            <!-- portfolio details next-prev area start -->
             <portfolio-details-next-prev/>
            <!-- portfolio details next-prev area end -->

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

useSeoMeta({
  title: "Agntix - Portfolio details classic vue nuxt Template",
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
});
</script>
