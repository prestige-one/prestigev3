<template>
  <prestige-construction-update-detail v-if="project" :project="project" />
</template>

<script setup lang="ts">
import { getConstructionProject } from "~/data/construction-updates";

definePageMeta({ layout: false });
const route = useRoute();
const project = computed(() => getConstructionProject(String(route.params.slug)));

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Construction update not found" });
}

useSeoMeta({
  title: () => project.value?.title || "Construction Updates",
  description: () => `View the latest construction progress and gallery for ${project.value?.shortTitle}.`,
});
</script>
