<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// keep <html lang> and <html dir> in sync with the active locale (Arabic = RTL)
const { locale, localeProperties } = useI18n();
useHead({
  htmlAttrs: {
    lang: locale,
    dir: computed(() => localeProperties.value?.dir ?? "ltr"),
  },
});
</script>
