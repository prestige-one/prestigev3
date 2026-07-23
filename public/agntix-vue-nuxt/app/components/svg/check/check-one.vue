<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="9"
    viewBox="0 0 10 9"
    fill="none"
  >
    <path
      d="M1 5.75061C1 5.75061 2.6 6.66314 3.4 8.00061C3.4 8.00061 5.8 2.75061 9 1.00061"
      :stroke="strokeClr"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
const props = withDefaults(
  defineProps<{
    color?: string;
  }>(),
  {
    color: "currentColor",
  }
);
const strokeClr = computed(() => isDark.value ? '#fff' : props.color);
</script>
