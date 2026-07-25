<template>
  <div class="tp-text-slide-area">
    <client-only>
      <div :class="['tp-text-slide-wrapper', bgColor]">
        <Vue3Marquee
          :duration="80"
          :pause-on-hover="true"
          :class="wrapperCls"
        >
          <div
            v-for="(title, index) in slideData"
            :key="index"
            class="tp-text-slide-item me-2"
          >
            <span :class="titleCls">{{ title }}</span>
          </div>
        </Vue3Marquee>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
// Props
withDefaults(
  defineProps<{
    wrapperCls?:string;
    bgColor?: string;
    titleCls?: string;
  }>(),
  {
    wrapperCls:'tp-text-slide-item-wrapper',
    bgColor: "red-bg-2",
    titleCls: "tp-text-slide-title",
  }
);

// Slide data
const slideData = [
  "UI Design",
  "Design Agency",
  "Strategy",
  "Digital Solution",
  "Business Growth",
  "Development",
  "IT Company",
  "SEO Agency",
  "Consulting",
  "Branding",
  "Lifetime Update",
  "UI Design",
  "Design Agency",
  "Strategy",
  "Digital Solution",
  "Business Growth",
  "Strategy",
  "Digital Solution",
  "Business Growth",
  "Development",
  "IT Company",
  "SEO Agency",
];
</script>
