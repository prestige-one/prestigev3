<script setup lang="ts">
interface SvgProps {
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  strokeWidth?: string | number;
  pathValue?: string;
}

const props = withDefaults(defineProps<SvgProps>(), {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  strokeWidth: "1.5",
  pathValue:
    "M10.8907 6H0.895874M0.895874 6L5.89327 1M0.895874 6L5.89327 11",
});
</script>

<template>
  <svg
    :width="props.width"
    :height="props.height"
    :viewBox="props.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :d="props.pathValue"
      stroke="currentcolor"
      :stroke-width="props.strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
