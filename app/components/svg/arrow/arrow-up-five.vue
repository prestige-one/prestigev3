<template>
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 11L11 1M11 1H1M11 1V11"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ stroke?: string,strokeWidth?: string }>(), {
  stroke: "#21212D",
  strokeWidth: "2",
})
</script>
