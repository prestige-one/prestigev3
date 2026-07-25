<template>
  <div class="cr-feature-2-item">
    <span class="bullet-top-left"/>
    <span class="bullet-top-right"/>
    <span class="bullet-bottom-left"/>
    <span class="bullet-bottom-right"/>
    <div class="cr-feature-2-item-icon" :class="animationClass">
      <img :src="image" alt="feature-icon">
    </div>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  image: string
  animationClass?: string
}>()
</script>