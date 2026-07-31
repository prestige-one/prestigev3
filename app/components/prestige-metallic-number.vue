<template>
  <span class="prestige-metallic-number">{{ value }}</span>
</template>

<script setup lang="ts">
defineProps<{
  value: string | number;
}>();
</script>

<style scoped>
.prestige-metallic-number {
  display: inline-block;
  font-weight: 700;
  color: transparent;
  background: linear-gradient(
    180deg,
    #f8fcff 0%,
    #b7cad7 22%,
    #819bab 23%,
    #edf8ff 46%,
    #7896aa 47%,
    #eaf6ff 79%,
    #9bb4c5 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1.2px rgba(232, 245, 253, 0.94);
  filter: none;
  text-shadow: none;
}
</style>
