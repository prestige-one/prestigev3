<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-white-bg" />
    <!-- End magic cursor -->
    <nuxt-layout>

      <!-- header area start -->
      <header-fifteen top-cls="header-transparent" />
      <!-- header area end -->

      <!-- portfolio wrapper slider start -->
      <portfolio-wrapper-slider />
      <!-- portfolio wrapper slider end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Agntix - Portfolio Wrapper Slider vue nuxt Template",
});
useHead({
  bodyAttrs: {
    style: "background-color: #0E0F11;",
  },
});
</script>
