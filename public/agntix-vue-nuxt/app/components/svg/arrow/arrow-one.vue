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
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
interface ArrowSvgProps {
  width?: number | string;
  height?: number | string;
  viewBox?: string;
  pathValue?: string;
  strokeWidth?: number | string;
}
withDefaults(defineProps<ArrowSvgProps>(), {
  width: "10",
  height: "10",
  strokeWidth: "1.5",
  viewBox: "0 0 10 10",
  pathValue: "M1 9L9 1M9 1H1M9 1V9",
});
</script>
