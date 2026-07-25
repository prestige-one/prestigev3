<template>
  <div class="it-comparison-area tp_fade_anim">
    <div class="container container-1230">
      <div class="it-comparison-bg">
        <div class="row gx-0">
          <div
            v-for="brand in brandData"
            :key="brand.id"
            class="col-lg-4"
          >
            <div class="it-comparison-item text-center">
              <div class="it-comparison-logo">
                <img :src="brand.logo" :alt="`Brand ${brand.id}`">
              </div>
              <div class="it-comparison-content">
                <span>
                  {{ brand.description }} -
                  <i>{{ brand.growth }}</i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const brandData = [
  {
    id: 1,
    logo: "/img/home-11/brand/brand-1.png",
    description: "Project management",
    growth: "285% Growth"
  },
  {
    id: 2,
    logo: "/img/home-11/brand/brand-2.png",
    description: "Marketing automation",
    growth: "320% Growth"
  },
  {
    id: 3,
    logo: "/img/home-11/brand/brand-3.png",
    description: "Customer support",
    growth: "210% Growth"
  }
]
</script>