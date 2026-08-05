<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-home4">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <hero-prestige />
            <prestige-home5-how-we-work />
            <prestige-why-dubai />

            <prestige-our-developments :slides="mainProjects" />
            <prestige-upcoming-developments />

            <prestige-client-stories />
            <prestige-contact-form centered />
          </main>

          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import residentialDevelopments from "~/data/residential-developments-data";

const MAIN_TITLES = [
  "FAUCHON RÃ©sidences by Prestige One",
  "Hilton Residences Dubai Maritime City",
  "Sanctuary Residences by Prestige One",
];
const mainProjects = residentialDevelopments.filter((development) => MAIN_TITLES.includes(development.title));

const { t } = useI18n();

definePageMeta({
  layout: false,
});

useSeoMeta({
  title: () => t("hp.seo.title"),
  ogTitle: () => t("hp.seo.title"),
  description: () => t("hp.seo.description"),
  ogDescription: () => t("hp.seo.description"),
  ogImage: "/assets/images/v3/prestigeone_logo_oneline_dark-hr.svg",
  twitterCard: "summary_large_image",
});

usePrestigePage({ panelPins: true, panelPinOffset: 80 });
</script>
