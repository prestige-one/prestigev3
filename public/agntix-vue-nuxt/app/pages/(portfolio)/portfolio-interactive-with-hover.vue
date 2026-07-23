<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-white-bg" />
    <!-- End magic cursor -->

    <nuxt-layout>
      <!-- header area start -->
      <header-fifteen top-cls="header-transparent" />
      <!-- header area end -->
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <!-- portfolio interactive with hover start -->
            <portfolio-interactive-with-hover-area />
            <!-- portfolio interactive with hover end -->
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
  title: "Agntix - Portfolio Interactive With Hover vue nuxt Template",
});


onMounted(async () => {
  await useScrollSmooth();
});

useHead({
  bodyAttrs: {
    style: 'background-color: #000;',
  },
});
</script>
