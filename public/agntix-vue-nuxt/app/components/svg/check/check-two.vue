<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="10"
    viewBox="0 0 11 10"
    fill="none"
  >
    <path
      d="M9.50631 0.886963L4.26771 6.12552L1.49369 3.35158L0 4.84527L4.26771 9.11302L11 2.38065L9.50631 0.886963Z"
      :fill="isDark ? '#FFFFFF' : 'black'"
    />
  </svg>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
</script>
