<template>
  <div class="des-brand-moving-wrap">
    <!-- Top moving brand row -->
    <div class="des-brand-moving-top moving-text pb-10">
      <div
        :class="`des-brand-item wrapper-text ${blackStyle?'black-style':''} d-flex align-items-center`"
      >
        <div
          v-for="(logo, index) in movingBrandLogos"
          :key="`top-${index}`"
          class="des-brand-item-inner"
        >
          <img :src="logo" alt="brand-logo">
        </div>
      </div>
    </div>

    <!-- Bottom moving brand row -->
    <div class="des-brand-moving-bottom moving-text">
      <div :class="`des-brand-item wrapper-text ${blackStyle?'black-style':''} d-flex align-items-center`">
        <div
          v-for="(logo, index) in movingBrandLogos"
          :key="`bottom-${index}`"
          class="des-brand-item-inner"
        >
          <img :src="logo" alt="brand-logo">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{blackStyle?: boolean;}>(),
  {blackStyle: true}
);
const brandLogos = [
  "/img/about-us/about-us/brand/icon-1.png",
  "/img/about-us/about-us/brand/icon-2.png",
  "/img/about-us/about-us/brand/icon-3.png",
  "/img/about-us/about-us/brand/icon-4.png",
  "/img/about-us/about-us/brand/icon-5.png",
];

// Double the logos for seamless animation
const movingBrandLogos = [...brandLogos, ...brandLogos.slice(0, 2)];
</script>
