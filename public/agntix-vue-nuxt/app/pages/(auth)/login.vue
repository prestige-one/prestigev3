<template>
  <div class="no-js">

    <!-- Begin magic cursor -->
    <common-magic-cursor bg-cls="cursor-bg-red" />
    <!-- End magic cursor -->

    <nuxt-layout>

      <!-- header area start -->
      <header-sixteen />
      <!-- header area end -->

      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- login area start -->
            <auth-login-area />
            <!-- login area end -->

          </main>

          <!-- footer area start -->
          <footer-fifteen />
          <!-- footer area end -->
        </div>
      </div>
    </nuxt-layout>

  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: "Agntix - Login vue nuxt Template",
});
if (import.meta.client) {
  useScrollSmooth();
}

onMounted(async () => {
  const { gsap } = await import('gsap');
  const { ScrollTrigger, ScrollToPlugin } = await import('gsap/all');
  
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  setTimeout(() => {
    fadeAnimation();
  }, 100);
});
useHead({
  bodyAttrs: {
    style: "background-color: #F4F0EA;",
  },
});
</script>
