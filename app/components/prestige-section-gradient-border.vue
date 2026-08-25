<template>
  <div class="prestige-section-gradient-border" aria-hidden="true" />
</template>

<style scoped>
.prestige-section-gradient-border {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 1px;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    rgba(71, 104, 45, 0) 0%,
    rgba(79, 113, 48, 0.38) 18%,
    rgba(65, 101, 43, 0.22) 50%,
    rgba(79, 113, 48, 0.38) 82%,
    rgba(71, 104, 45, 0) 100%
  );
  box-shadow:
    0 -7px 18px rgba(66, 103, 42, 0.16),
    0 1px 10px rgba(66, 103, 42, 0.08);
}

.prestige-section-gradient-border::before {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 18px;
  content: "";
  background: linear-gradient(180deg, rgba(56, 91, 39, 0.13), transparent);
  filter: blur(8px);
}
</style>
