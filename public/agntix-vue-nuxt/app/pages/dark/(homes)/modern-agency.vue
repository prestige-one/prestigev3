<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor />
    <!-- End magic cursor -->
    <nuxt-layout name="layout-one">

      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- hero area start -->
            <hero-one />
            <!-- hero area end -->

            <!-- about area start -->
            <about-one />
            <!-- about area end -->

            <!-- banner area start -->
            <banner-one />
            <!-- banner area end -->

            <!-- text slider area start -->
            <text-slider-one />
            <!-- text slider area end -->

            <!-- service area start -->
            <service-one />
            <!-- service area end -->

            <!-- video area start -->
            <video-area-one />
            <!-- video area end -->

            <!-- project area start -->
            <project-one />
            <!-- project area end -->

            <!-- fun fact area start -->
            <fun-fact-one />
            <!-- fun fact area end -->

            <!-- work area start -->
            <work-area-one />
            <!-- work area end -->

            <!-- testimonial area start -->
            <testimonial-one />
            <!-- testimonial area end -->

            <!-- award area start -->
            <award-area-one />
            <!-- award area end -->

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
  title: "Agntix - Digital Agency & Creative Portfolio vue nuxt Template",
});

onMounted(async () => {
  const { gsap } = await import('gsap');
  const { ScrollTrigger, ScrollToPlugin } = await import('gsap/all');

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // use scroll smooth
  await useScrollSmooth();
  // all animation function
  setTimeout(() => {
      videoAnimation();
      serviceAnimation();
      textInvert();
      fadeAnimation();
      charAnimation();
      bounceAnimation();
      textBounceAnimation();
      panelAnimation();
      panelPin();
  }, 50);
});

useHead({
  htmlAttrs: {
    class: "no-js agntix-dark",
  },
});
</script>
