<template>
  <prestige-error-state-page
    :status-code="statusCode"
    :not-found="isNotFound"
    @return-home="returnHome"
  />
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
const localePath = useLocalePath();

const statusCode = computed(() => props.error?.statusCode || 500);
const isNotFound = computed(() => statusCode.value === 404);

function returnHome() {
  clearError({ redirect: localePath("/") });
}

useSeoMeta({
  title: () => isNotFound.value ? "Page Not Found | Prestige One" : "Error | Prestige One",
  robots: "noindex, nofollow",
});

useHead({
  bodyAttrs: {
    class: "prestige-error-body",
  },
});
</script>
