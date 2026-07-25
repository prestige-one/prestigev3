<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-white-bg" />
    <!-- End magic cursor -->

    <nuxt-layout>
      <!-- header area start -->
       <header-fifteen top-cls="header-transparent pt-10"/>
      <!-- header area end -->
  
      <!-- portfolio parallax slider start -->
      <portfolio-parallax-slider />
      <!-- portfolio parallax slider end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Agntix - Portfolio Parallax Slider vue nuxt Template",
});
</script>
