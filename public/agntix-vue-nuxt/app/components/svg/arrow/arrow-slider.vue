<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="22"
    viewBox="0 0 12 22"
    fill="none"
  >
    <path
      :d="direction === 'right' ? 'M1 21L11 11L1 1' : 'M11 21L1 11L11 1'"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  direction?: "left" | "right";
}

withDefaults(defineProps<Props>(), {
  direction: "right",
});

</script>
