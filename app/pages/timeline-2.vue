<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-timeline-page-main">
            <section class="prestige-timeline-page-hero">
              <div class="container container-1230 text-center">
                <h1 class="prestige-timeline-page-title tp_reveal_anim">Timeline Version 2</h1>
              </div>
            </section>

            <prestige-journey-two />
          </main>

          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

useSeoMeta({
  title: "Timeline Two | Prestige One Developments",
  ogTitle: "Timeline Two | Prestige One Developments",
  description: "Explore the journey and milestones of Prestige One Developments.",
  ogDescription: "Explore the journey and milestones of Prestige One Developments.",
  ogImage: "/assets/images/v3/prestigeone_logo_oneline_dark-hr.svg",
  twitterCard: "summary_large_image",
});

onMounted(async () => {
  const { gsap } = await import("gsap");
  const { ScrollTrigger, ScrollToPlugin } = await import("gsap/all");
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  await useScrollSmooth();
  await nextTick();

  const imagesLoaded = (await import("imagesloaded")).default;
  const smoothWrapper = document.getElementById("smooth-wrapper");

  if (smoothWrapper) {
    imagesLoaded(smoothWrapper, { background: true }).on("always", () => {
      fadeAnimation();
      revealAnimation();
      zoomAnimation();
    });
  }
});
</script>

<style scoped>
.prestige-timeline-page-main {
  --prestige-about-section-title-size: clamp(25px, 2.3vw, 40px);
  min-height: 100vh;
}

.prestige-timeline-page-hero {
  padding: 190px 0 82px;
}

.prestige-timeline-page-title {
  margin: 0;
  font-size: clamp(34px, 4vw, 46px);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
}

@media (max-width: 767.98px) {
  .prestige-timeline-page-hero {
    padding: 150px 0 54px;
  }
}
</style>
