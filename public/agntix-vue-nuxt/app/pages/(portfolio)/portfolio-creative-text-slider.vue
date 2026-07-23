<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-white-bg" />
    <!-- End magic cursor -->

    <nuxt-layout>
      <!-- header area start -->
      <header-fifteen top-cls="header-transparent pt-10" />
      <!-- header area end -->

      <!-- portfolio creative text slider start -->
      <portfolio-creative-text-slider />
      <!-- portfolio creative text slider end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Agntix - Portfolio Creative Text Slider vue nuxt Template",
});

</script>
