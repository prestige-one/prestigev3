<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-white-bg" />
    <!-- End magic cursor -->

    <nuxt-layout>
      <!-- header area start -->
      <header-fifteen top-cls="header-transparent" />
      <!-- header area end -->
      <main>
        <!-- portfolio interactive with scroll start -->
        <portfolio-interactive-with-scroll-area />
        <!-- portfolio interactive with scroll end -->
      </main>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Agntix - Portfolio Interactive With Scroll vue nuxt Template",
});
useHead({
  bodyAttrs: {
    style: "background-color: #000;",
  },
});
</script>
