<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-white-bg" />
    <!-- End magic cursor -->

    <nuxt-layout>

      <!-- header area start -->
      <header-fifteen top-cls="header-fixed tp-header-main-custom pt-10" :logo-black="true" />
      <!-- header area end -->

      <!-- portfolio coverflow slider start -->
      <client-only>
        <portfolio-coverflow-slider />
      </client-only>
      <!-- portfolio coverflow slider end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Agntix - Portfolio Coverflow Slider Light vue nuxt Template",
});
useHead({
  htmlAttrs: {
    class: "no-js agntix-light",
  },
});
</script>
