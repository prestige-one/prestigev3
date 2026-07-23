<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="21" viewBox="0 0 15 21" fill="none">
        <rect x="6.25781" width="1.5" height="21" :fill="isDark?'#fff':'#000'" />
        <path d="M14.1641 13.6257C10.28 13.6257 7.13714 16.9239 7.13714 21" :stroke="isDark?'#fff':'#000'" stroke-width="1.5" stroke-miterlimit="10" />
        <path d="M7.13672 21C7.13672 16.9239 3.99384 13.6257 0.109797 13.6257" :stroke="isDark?'#fff':'#000'" stroke-width="1.5" stroke-miterlimit="10" />
  </svg>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
</script>