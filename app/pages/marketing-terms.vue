<template>
  <prestige-legal-document-page :document="legalV2Documents.marketing" />
</template>

<script setup lang="ts">
import { legalV2Documents } from "~/data/legal-v2-content";

definePageMeta({ layout: false });
</script>
