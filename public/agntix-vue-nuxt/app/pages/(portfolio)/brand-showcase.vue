<template>
 <div>

   <!-- Begin magic cursor -->
  <common-magic-cursor bg-cls="cursor-bg-red-2" />
  <!-- End magic cursor -->
    
   <nuxt-layout>

    <!-- header area start -->
    <header-seventeen top-cls="tp-header-blur sticky-white-bg" />
    <!-- header area end -->

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <!-- hero area start -->
           <div class="tp-contact-us-ptb p-relative">
              <div class="tp-career-shape-1">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="123" height="130" viewBox="0 0 123 130" fill="none">
                          <path d="M58.2803 1.15449C63.3023 14.3017 71.049 54.3533 48.1082 67.0973C36.1831 73.4283 11.7107 77.3064 2.37778 43.9355C-1.14293 31.3468 9.61622 20.8908 32.0893 28.8395C45.055 33.4255 76.4207 44.0467 90.5787 70.0771C98.0511 83.8154 104.166 111.84 99.1745 129.671M99.1745 129.671C100.942 121.014 108.128 104.495 122.737 107.673M99.1745 129.671C100.181 123.978 97.0522 110.014 76.485 99.698M75.3644 33.2431C80.479 35.6688 96.6446 46.4742 101.81 64.2891" stroke="white" stroke-width="1.5" />
                      </svg>
                  </span>
              </div>
              <div class="container container-1230">
                  <div class="ar-about-us-4-hero-ptb">
                      <div class="row justify-content-center">
                          <div class="col-xl-12">
                              <div class="ar-hero-title-box tp_fade_anim" data-delay=".3">
                                  <div class="ar-about-us-4-title-box d-flex align-items-center mb-20">
                                      <span class="tp-section-subtitle pre tp_fade_anim">Brand</span>
                                      <div class="ar-about-us-4-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="81" height="9" viewBox="0 0 81 9" fill="none">
                                              <rect y="4" width="80" height="1" fill="#000" />
                                              <path d="M77 7.96366L80.5 4.48183L77 1" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
                                          </svg>
                                      </div>
                                  </div>
                                  <h3 class="tp-career-title pb-30">Our Sponsors</h3>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-lg-4"/>
                          <div class="col-lg-8">
                              <div class="tp-faq-text tp_fade_anim" data-delay=".5">
                                  <p class="m-0">
                                      Agntix is a beacon of best innovation and the <br> dynamic parent a company of wealcoder and many <br>
                                      other subsidiaries.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- hero area end -->

          <!-- brand showcase area start -->
          <brand-showcase />
          <!-- brand showcase area end -->
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
  title: "Agntix - Brand Showcase vue nuxt Template",
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
      brandImgAnim();
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
