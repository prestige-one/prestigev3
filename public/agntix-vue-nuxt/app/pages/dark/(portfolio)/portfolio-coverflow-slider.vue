<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-white-bg" />
    <!-- End magic cursor -->

    <nuxt-layout>
      <header-fifteen top-cls="header-fixed tp-header-main-custom pt-10" :logo-black="false" />
      <!-- header area end -->

      <!-- portfolio coverflow slider start -->
      <portfolio-coverflow-slider />
      <!-- portfolio coverflow slider end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Agntix - Portfolio Coverflow Slider Light vue nuxt Template",
});
useHead({
  bodyAttrs: {
    style: "background-color: #000;",
  }
});
</script>
