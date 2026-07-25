<template>
  <ClientOnly>
    <div class="st-video-text-slider">
      <div class="st-video-text-wrapper z-index-1">
        <Vue3Marquee
          :clone="true"
          :duration="50"
          :pause-on-hover="true"
          class="tp-brand-active slide-transtion"
        >
          <div
            v-for="slide in videoTextSlides"
            :key="slide.id"
            class="st-video-text"
            style="margin-right: 30px"
          >
            <span class="st-video-text-title">
              {{ slide.title }} <i>{{ slide.emphasizedText }}</i>
            </span>
          </div>
        </Vue3Marquee>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const videoTextSlides = Array(7)
  .fill({ title: "STARTUP", emphasizedText: "AGENCY" })
  .map((item, index) => ({
    ...item,
    id: index + 1,
  }));
</script>
