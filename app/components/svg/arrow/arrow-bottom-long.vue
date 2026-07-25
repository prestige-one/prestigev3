<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="73"
    height="72"
    viewBox="0 0 73 72"
    fill="none"
  >
    <path
      d="M39.7519 0.249535V59.2614L67.5 31.5133L72.4725 36.4858L38.7225 70.2358C38.0628 70.8946 37.1686 71.2646 36.2362 71.2646C35.3039 71.2646 34.4097 70.8946 33.75 70.2358L0 36.4858L4.9725 31.5133L32.7206 59.2614V0.249535H39.7519Z"
      :fill="isDark ? '#FFFFFF' : fill"
    />
  </svg>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
withDefaults(defineProps<{
  fill?: string;
}>(), {
  fill: '#453030',
}); 
</script>