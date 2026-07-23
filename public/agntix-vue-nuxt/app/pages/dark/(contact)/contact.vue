<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-bg-red-2" />
    <!-- End magic cursor -->

    <nuxt-layout>

      <!-- header area start -->
      <header-seventeen top-cls="tp-header-blur header-inner-white sticky-black-bg" />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

            <!-- contact us hero area start -->
            <contact-hero-two />
            <!-- contact us hero area end -->

            <!-- inner map area start -->
            <div class="tp-contact-map-ptb p-relative pb-120">
              <div class="tp-contact-map-wrapper p-relative">
                <div class="tp-contact-map-icon-box">
                  <div class="tp-contact-map-icon">
                    <span><img src="/img/contact/map-icon.svg" alt=""></span>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26002818075!2d-74.1443121872927!3d40.69728463485858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1745055504744!5m2!1sen!2sbd"
                  width="600" height="450" style="border:0;" allowfullscreen loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade" />
              </div>
            </div>
            <!-- inner map area end -->

            <!-- contact form area start -->
            <div class="tp-contact-form-ptb pb-140">
              <div class="container container-1230">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="tp-contact-form-heading tp_fade_anim mb-50">
                      <div class="ar-about-us-4-title-box d-flex align-items-center mb-15">
                        <span class="tp-section-subtitle pre">Contact Us</span>
                        <div class="ar-about-us-4-icon">
                          <svg-arrow-long-right/>
                        </div>
                      </div>
                      <h3 class="tp-section-title lts">Let's make <br>
                        your brand <br>
                        brilliant!</h3>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="tp-contact-form-wrap">
                      <form-contact />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- contact form area end -->

            <!-- contact location area start -->
            <contact-location />
            <!-- contact location area end -->

          </main>

          <!-- footer area start -->
          <footer-five :bg-clr="''" />
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
  title: "Agntix - Contact vue nuxt Template",
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
      gsapBgAnimation();
    });
  } else {
    setTimeout(() => {
      fadeAnimation();
      gsapBgAnimation();
    }, 50);
  }
});

useHead({
  htmlAttrs: {
    class: "no-js agntix-dark",
  }
});

</script>
