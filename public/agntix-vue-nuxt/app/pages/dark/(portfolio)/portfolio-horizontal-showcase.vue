<template>
  <div>
    <nuxt-layout>
      <!-- header area start -->
      <header-fifteen top-cls="header-fixed pt-10" :logo-black="false" />
      <!-- header area end -->

      <!-- portfolio horizontal showcase start -->
      <portfolio-horizontal-showcase />
      <!-- portfolio horizontal showcase end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Agntix - Portfolio Showcase vue nuxt Template",
});

onMounted(async () => {
  const { gsap } = await import('gsap');
  const { ScrollTrigger, ScrollToPlugin } = await import('gsap/all');
  
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // use scroll smooth
  await useScrollSmooth();
  setTimeout(() => {
    parallaxSlider();
  }, 50);
});
useHead({
  bodyAttrs: {
    style: "background-color: #000;",
  }
});
</script>
