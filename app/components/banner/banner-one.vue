<template>
  <div class="tp-banner-area">
    <div :class="`tp-banner-img ${clr}`">
      <img class="w-100" data-speed=".7" src="/img/home-01/banner/banner-1.jpg" alt="banner-image">
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  clr?: string
}
withDefaults(defineProps<Props>(), {
  clr: ''
})
</script>