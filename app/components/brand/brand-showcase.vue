<template>
  <div class="tp-brand-inner-area pb-80">
    <div class="container container-1230">
      <div
        class="row gx-70 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1"
      >
        <div
          v-for="(img, index) in brandImages"
          :key="index"
          class="col"
        >
          <div class="tp-brand-inner-item mb-65">
            <img
              :src="img"
              :alt="`brand-${index + 1}`"
             >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const brandImages = [
  "/img/brand/brand-1.jpg",
  "/img/brand/brand-2.jpg",
  "/img/brand/brand-3.jpg",
  "/img/brand/brand-4.jpg",
  "/img/brand/brand-5.jpg",
  "/img/brand/brand-6.jpg",
  "/img/brand/brand-7.jpg",
  "/img/brand/brand-8.jpg",
  "/img/brand/brand-9.jpg",
  "/img/brand/brand-10.jpg",
  "/img/brand/brand-11.jpg",
  "/img/brand/brand-12.jpg",
  "/img/brand/brand-13.jpg",
  "/img/brand/brand-14.jpg",
  "/img/brand/brand-15.jpg",
];
</script>
