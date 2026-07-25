<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
    <path
      d="M0 1.83165C-1.81031e-08 1.04049 0.875246 0.562645 1.54076 0.990474L12.6915 8.15881C13.3038 8.55245 13.3038 9.44753 12.6915 9.84117L1.54076 17.0095C0.875247 17.4373 3.46149e-07 16.9595 3.28046e-07 16.1683L0 1.83165Z"
      :fill="fill"/>
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{fill?:string}>(),{
  fill:'black'
})
</script>