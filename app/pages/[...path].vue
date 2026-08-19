<template>
  <prestige-error-state-page
    :status-code="404"
    not-found
    @return-home="returnHome"
  />
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

const localePath = useLocalePath();
const event = useRequestEvent();

if (event) setResponseStatus(event, 404, "Page Not Found");

function returnHome() {
  return navigateTo(localePath("/"));
}

useSeoMeta({
  title: "Page Not Found | Prestige One",
  robots: "noindex, nofollow",
});

useHead({
  bodyAttrs: {
    class: "prestige-error-body",
  },
});
</script>
