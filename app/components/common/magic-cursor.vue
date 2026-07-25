<template>
  <!-- Begin magic cursor -->
  <div id="magic-cursor" :class="bgCls">
    <div id="ball" />
  </div>
  <!-- End magic cursor -->
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  bgCls?: string
}>(), {
  bgCls: 'cursor-white-bg'
});
// Custom trailing-dot cursor disabled — site uses the native pointer.
// #magic-cursor stays display:none since we no longer add the
// tp-magic-cursor body class that CSS relies on to reveal it.
</script>