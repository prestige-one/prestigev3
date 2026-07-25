<template>
  <ClientOnly>
    <div :class="`shop-text-slider-area ${topCls}`">
      <div class="shop-text-slider-wrap">
        <div class="shop-text-slider-active">
          <Vue3Marquee :speed="50" pause-on-hover>
            <div
              v-for="(slide, index) in slides"
              :key="`text-slide-${index}`"
              class="shop-text-slider-item"
            >
              <span>{{ slide.content }}</span>
            </div>
          </Vue3Marquee>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
interface Slide {
  content: string;
}

// Generate 8 slides with the same text
const slides: Slide[] = Array(8).fill({
  content: "Free Shipping for all orders over $ 500",
});
withDefaults(
  defineProps<{
    topCls?: string;
  }>(),
  {
    topCls: "shop-text-slider-style",
  }
);
</script>

<style scoped>
.shop-text-slider-item {
  width: 380px;
}
</style>
