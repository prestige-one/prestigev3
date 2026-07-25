<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-white-bg" />
    <!-- End magic cursor -->
    <nuxt-layout>
      <!-- header area start -->
      <header-fifteen top-cls="header-fixed pt-10" :logo-black="true" />
      <!-- header area end -->
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <!-- portfolio slider elegant area start -->
            <portfolio-slider-elegant-area />
            <!-- portfolio slider elegant area end -->
          </main>
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Agntix - Portfolio Slider Elegant vue nuxt Template",
});

onMounted(async () => {
  await useScrollSmooth();
});
useHead({
  htmlAttrs: {
    class: "no-js agntix-light",
  },
  bodyAttrs: {
    style: "background-color: #fff;",
  },
});
</script>
