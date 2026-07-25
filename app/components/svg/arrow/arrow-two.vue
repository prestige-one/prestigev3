<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :d="pathValue"
      stroke="currentcolor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    viewBox?: string;
    pathValue?: string;
  }>(),
  {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    pathValue: "M1 11L11 1M11 1H1M11 1V11",
  }
);
</script>
