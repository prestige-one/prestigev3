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
onMounted(() => {
  setTimeout(() => {
    cursorAnimation();
  }, 50)
});
useHead({
  bodyAttrs: {
    class: 'tp-magic-cursor'
  }
});
</script>