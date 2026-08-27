<template>
  <div class="prestige-section-gradient-border" aria-hidden="true" />
</template>

<style scoped>
.prestige-section-gradient-border {
  position: relative;
  z-index: 3;
  width: min(480px, 60%);
  height: 1px;
  margin-inline: auto;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #000 0%,
    rgba(255, 255, 255, 0.05) 22%,
    rgba(255, 255, 255, 0.18) 50%,
    rgba(255, 255, 255, 0.05) 78%,
    #000 100%
  );
}
</style>
