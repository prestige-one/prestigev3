<template>
  <prestige-legal-document-page :document="privacyDocument" />
</template>

<script setup lang="ts">
import { legalV2Documents } from "~/data/legal-v2-content";

const privacyDocument = legalV2Documents.privacy;

definePageMeta({ layout: false });
</script>
