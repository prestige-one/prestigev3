<template>
  <div class="ar-brand-area ar-brand-style crp-text-slider-style fix">
    <div class="tp-brand-wrapper yellow-green-bg z-index-1">
      <client-only>
        <Vue3Marquee
          class="tp-brand-active slide-transtion"
          :duration="50"   
          :pause-on-hover="true"
          :clone="true"
        >
          <div
            v-for="item in brandItems"
            :key="item.id"
            class="tp-brand-item"
          >
            <span class="tp-brand-title">{{ item.title }}</span>
          </div>
        </Vue3Marquee>
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">

const brandItems = [
  { id: 1, title: 'Creative agency' },
  { id: 2, title: 'Website marketing' },
  { id: 3, title: 'Digital marketing' },
  { id: 4, title: 'Product marketing' },
  { id: 5, title: 'Research marketing' },
  { id: 6, title: 'Website marketing' },
  { id: 7, title: 'Lifetime Update' },
  { id: 8, title: 'Creative agency' },
  { id: 9, title: 'Website marketing' },
  { id: 10, title: 'Digital marketing' },
]
</script>

<style scoped>
.tp-brand-item {
  margin-right: 30px;
}
</style>
