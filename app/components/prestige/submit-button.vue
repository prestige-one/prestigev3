<template>
  <button class="prestige-submit" type="submit" :disabled="disabled">
    <span class="prestige-submit__label">{{ label }}</span>
    <span class="prestige-submit__arrow" aria-hidden="true">&#8594;</span>
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label: string;
  disabled?: boolean;
}>(), {
  disabled: false,
});
</script>

<style scoped>
.prestige-submit {
  position: relative;
  display: flex;
  width: 50%;
  min-height: 60px;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  padding: 12px 62px 12px 24px;
  border: 0;
  border-radius: 60px;
  background: #fff;
  color: #0b0b0d;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: background 0.25s ease, transform 0.25s ease;
}

.prestige-submit:hover {
  background: #efefef;
  transform: translateY(-2px);
}

.prestige-submit:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 4px;
}

.prestige-submit:disabled {
  cursor: default;
  opacity: 0.6;
  transform: none;
}

.prestige-submit__arrow {
  position: absolute;
  right: 8px;
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #0b0b0d;
  color: #fff;
  flex: 0 0 auto;
  font-size: 18px;
}

@media (max-width: 575.98px) {
  .prestige-submit {
    width: 100%;
  }
}
</style>
