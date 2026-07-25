<template>
  <div>

    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-white-bg" />
    <!-- End magic cursor -->

    <nuxt-layout>
      <!-- header area start -->
      <header-fifteen top-cls="header-transparent pt-10" :show-email="false" container-cls="1750" />
      <!-- header area end -->

      <!-- portfolio creative thumb slider start -->
      <portfolio-creative-thumb-slider />
      <!-- portfolio creative thumb slider end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Agntix - Portfolio Creative Thumb Slider vue nuxt Template",
});
</script>
