<template>
  <svg width="0" height="0">
    <defs>
      <filter :id="filterId">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
        <feColorMatrix
          in="blur"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
        />
        <feComposite in="SourceGraphic" :in2="filterId" operator="atop" />
        <feBlend in="SourceGraphic" :in2="filterId" />
      </filter>
    </defs>
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ filterId?: string }>(), {
  filterId: "buttonFilter1",
});
</script>
