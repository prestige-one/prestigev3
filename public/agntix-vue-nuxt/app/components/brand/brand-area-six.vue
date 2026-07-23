<template>
  <div class="ar-brand-area ar-brand-style">
    <div class="tp-brand-wrapper red-bg z-index-1">
      <client-only>
        <Vue3Marquee
          :duration="80"
          :pause-on-hover="false"
          class="tp-brand-active slide-transtion"
        >
          <div
            v-for="item in brandItems"
            :key="item.id"
            class="tp-brand-item"
            style="margin-right: 30px"
          >
            <span class="tp-brand-title">{{ item.title }}</span>
          </div>
        </Vue3Marquee>
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">

interface BrandItem {
  id: number;
  title: string;
}

const brandItems: BrandItem[] = [
  { id: 1, title: "Creative agency" },
  { id: 2, title: "Website marketing" },
  { id: 3, title: "Digital marketing" },
  { id: 4, title: "Product marketing" },
  { id: 5, title: "Research marketing" },
  { id: 6, title: "Website marketing" },
  { id: 7, title: "Lifetime Update" },
  { id: 8, title: "Social Media Marketing" },
  { id: 9, title: "SEO Optimization" },
];
</script>
