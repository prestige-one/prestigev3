<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="9" viewBox="0 0 81 9" fill="none">
      <rect y="4" width="80" height="1" :fill="isDark?'#fff': '#111013'" />
      <path d="M77 7.96366L80.5 4.48183L77 1" :stroke="isDark?'#fff': '#111013'" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup lang="ts">
const { isDark } = useIsDark()
</script>