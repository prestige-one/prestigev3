<template>
  <div
    :class="`tp-funfact-img mb-20 ${delay ? 'tp_fade_anim' : ''} ${className}`"
    v-bind="delay ? { 'data-delay': delay } : {}"
  >
    <img :src="src" alt="funfact-image">
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string;
  delay?: string | number;
  className?: string;
}

withDefaults(defineProps<Props>(), {
  delay: "",
  className: "",
});
</script>
