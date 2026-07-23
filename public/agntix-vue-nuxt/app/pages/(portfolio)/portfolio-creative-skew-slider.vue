<template>
  <div>
    
    <nuxt-layout>

      <!-- Begin magic cursor -->
      <common-magic-cursor bg-cls="cursor-white-bg" />
      <!-- End magic cursor -->
       
      <!-- header area start -->
      <header-fifteen top-cls="header-transparent pt-10" :show-email="false" container-cls="1750" />
      <!-- header area end -->

      <!-- portfolio creative skew slider start -->
      <portfolio-creative-skew-slider />
      <!-- portfolio creative skew slider end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Agntix - Portfolio Creative Skew Slider vue nuxt Template",
});

useHead({
  bodyAttrs: {
    style: 'background-color: #000;'
  }
})
</script>
