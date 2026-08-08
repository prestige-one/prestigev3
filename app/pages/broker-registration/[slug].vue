<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <prestige-broker-registration-detail :slug="slug" :content="content" />
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import {
  brokerRegistrationPageContent,
  isBrokerRegistrationSlug,
} from "~/data/broker-registration";

const route = useRoute();
const routeSlug = String(route.params.slug ?? "");

if (!isBrokerRegistrationSlug(routeSlug)) {
  throw createError({ statusCode: 404, statusMessage: "Registration page not found" });
}

const slug = routeSlug;
const content = brokerRegistrationPageContent[slug];

definePageMeta({ layout: false });
useSeoMeta({
  title: `${content.heroTitle} | Prestige One Developments`,
  description: `Broker registration — ${content.heroTitle}. Prestige One Developments.`,
});
usePrestigePage({ hero: false });
</script>
