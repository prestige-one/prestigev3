<template>
  <div :class="`des-text-moving-area ${isDark ? '' : 'black-bg-4'} pt-100 pb-160`">
    <div class="des-text-moving-top moving-text">
      <div class="des-text-item wrapper-text d-flex align-items-center">
        <span>Digital Experience</span>
        <span>Digital Experience</span>
      </div>
    </div>
    <div class="des-text-moving-bottom moving-text">
      <div class="des-text-item wrapper-text d-flex align-items-center">
        <span>Digital Experience</span>
        <span>Digital Experience</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
</script>