<template>
  <span class="prestige-metallic-number">{{ value }}</span>
</template>

<script setup lang="ts">
defineProps<{
  value: string;
}>();
</script>

<style scoped>
.prestige-metallic-number {
  display: inline-block;
  font-family: "Google Sans", sans-serif;
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.055em;
  color: transparent;
  background: linear-gradient(
    180deg,
    #fbfdff 0%,
    #c4d7e4 20%,
    #7894a7 22%,
    #eff9ff 45%,
    #7793a6 48%,
    #e9f5fc 78%,
    #91aaba 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(231, 244, 252, 0.92);
  filter: drop-shadow(0 1px 0 rgba(255, 255, 255, 0.35));
}
</style>
