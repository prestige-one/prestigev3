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
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
interface ArrowTwoProps {
  width?: string
  height?: string
  viewBox?: string
  pathValue?: string
}

// default props
const props = withDefaults(defineProps<ArrowTwoProps>(), {
  width: "102",
  height: "9",
  viewBox: "0 0 102 9",
  pathValue: "M98 8L101.5 4.5L98 1M1 4H101V5H1V4Z",
})
</script>