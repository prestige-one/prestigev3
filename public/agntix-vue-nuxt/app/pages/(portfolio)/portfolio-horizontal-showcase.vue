<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-white-bg" />
    <!-- End magic cursor -->

    <nuxt-layout>
      <!-- header area start -->
      <header-fifteen top-cls="header-fixed pt-10" :logo-black="true" />
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
  title: "Agntix - Portfolio Horizontal Showcase vue nuxt Template",
});
onMounted(() => {
  setTimeout(() => {
    parallaxSlider();
  }, 50);
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
