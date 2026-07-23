<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-white-bg" />
    <!-- End magic cursor -->
    <nuxt-layout>
      <!-- header area start -->
      <header-fifteen />
      <!-- header area end -->

      <!-- portfolio webgl showcase start -->
      <portfolio-webgl-showcase />
      <!-- portfolio webgl showcase end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Agntix - Portfolio Webgl Showcase vue nuxt Template",
});
</script>
