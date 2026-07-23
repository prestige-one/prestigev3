
<template>
  <div class="app-brand-area pt-120 pb-130">
    <div class="container container-1230">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="app-brand-heading text-center mb-45">
            <span class="tp-section-subtitle subtitle-black">
              Trusted by these amazing companies
            </span>
          </div>
        </div>
        <div class="col-lg-8">
          <client-only>
            <Vue3Marquee
              class="app-brand-active fix slider-transtion"
              :duration="70"
              :pause-on-hover="false"
            >
              <div
                v-for="brand in brands"
                :key="brand.id"
                class="app-brand-item"
              >
                <img :src="brand.logo" :alt="`brand-${brand.id}`">
              </div>
            </Vue3Marquee>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const brands = [
  { id: 1, logo: "/img/home-10/brand/app-brand-1.png"},
  { id: 2, logo: "/img/home-10/brand/app-brand-2.png"},
  { id: 3, logo: "/img/home-10/brand/app-brand-3.png"},
  { id: 4, logo: "/img/home-10/brand/app-brand-4.png"},
  { id: 5, logo: "/img/home-10/brand/app-brand-1.png"},
  { id: 6, logo: "/img/home-10/brand/app-brand-2.png"},
  { id: 7, logo: "/img/home-10/brand/app-brand-3.png"},
  { id: 8, logo: "/img/home-10/brand/app-brand-4.png"}
]
</script>

<style scoped>
.app-brand-item{
  width: 195px;
}
</style>
