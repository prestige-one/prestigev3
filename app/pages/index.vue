<template>
  <div>
    <!-- Begin magic cursor -->
    <common-magic-cursor />
    <!-- End magic cursor -->
    <nuxt-layout name="layout-one">

      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <!-- hero area start -->
            <hero-prestige />
            <!-- hero area end -->

            <!-- our developments area start -->
            <prestige-our-developments />
            <!-- our developments area end -->

            <!-- upcoming developments area start -->
            <prestige-upcoming-developments />
            <!-- upcoming developments area end -->

            <!-- why prestige one area start -->
            <prestige-why-us />
            <!-- why prestige one area end -->

            <!-- testimonials area start -->
            <prestige-testimonials />
            <!-- testimonials area end -->

            <!-- contact form area start -->
            <prestige-contact-form centered />
            <!-- contact form area end -->

          </main>

          <!-- footer area start -->
          <prestige-footer-digital-marketing />
          <!-- footer area end -->
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
  title: "Prestige One Developments",
  ogTitle: "Prestige One Developments",
  description: "Prestige One Developments is a premium real estate developer, redefining luxury living across Dubai's most prestigious destinations.",
  ogDescription: "Prestige One Developments is a premium real estate developer, redefining luxury living across Dubai's most prestigious destinations.",
  ogImage: "/assets/images/v3/prestigeone_logo_oneline_dark-hr.svg",
  twitterCard: "summary_large_image",
});

// shared GSAP + scroll-smooth + reveal bootstrap (see usePrestigePage)
usePrestigePage();
</script>
