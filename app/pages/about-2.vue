<template>
  <div>
    <common-magic-cursor />

    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <prestige-about-hero />

            <div id="our-story" class="prestige-anchor">
              <prestige-legacy-stats />
            </div>

            <prestige-founder-profile />

            <div id="vision" class="prestige-anchor">
              <prestige-drives-us />
            </div>

            <div id="leadership" class="prestige-anchor">
              <prestige-leadership />
            </div>

            <div id="milestones" class="prestige-anchor">
              <prestige-journey-scroll />
            </div>

            <prestige-about-developments />
            <prestige-global-perspective />
            <prestige-next-chapter />
          </main>

          <prestige-footer-digital-marketing />
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
  title: "About Us - Prestige One Developments",
  ogTitle: "About Us - Prestige One Developments",
  description: "Nearly 60 years as a business group and 19 years shaping Dubai real estate - learn about Prestige One Developments' story, legacy, and credibility.",
  ogDescription: "Nearly 60 years as a business group and 19 years shaping Dubai real estate - learn about Prestige One Developments' story, legacy, and credibility.",
  ogImage: "/assets/images/v3/prestigeone_logo_oneline_dark-hr.svg",
  twitterCard: "summary_large_image",
});

usePrestigePage({ hero: false });
</script>
