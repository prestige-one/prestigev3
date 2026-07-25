<template>
  <ClientOnly>
  <div class="tp-brand-area it-brand-style pt-200">
    <!-- First Brand Wrapper -->
    <div class="tp-brand-wrapper z-index-1" data-bg-color="#FFC4C0" style="background-color: #FFC4C0">
      <Vue3Marquee :speed="80" :pause-on-hover="true">
        <div
          v-for="item in brandItems"
          :key="'first-' + item.id"
          class="tp-brand-item"
          style="margin-right: 30px;"
        >
          <span class="tp-brand-title">{{ item.title }}</span>
          <span><svg-star-nine /></span>
        </div>
      </Vue3Marquee>
    </div>

    <!-- Second Brand Wrapper (RTL) -->
    <div class="tp-brand-wrapper tp-brand-style-2" data-bg-color="#DACBFF" style="background-color: #DACBFF">
      <Vue3Marquee :speed="80" :pause-on-hover="true" direction="reverse">
        <div
          v-for="item in brandItems"
          :key="'second-' + item.id"
          class="tp-brand-item"
          style="margin-right: 30px;"
        >
          <span class="tp-brand-title">{{ item.title }}</span>
          <span><svg-star-nine /></span>
        </div>
      </Vue3Marquee>
    </div>
  </div>
  </ClientOnly>
</template>

<script setup lang="ts">

const brandItems = [
  { id: 1, title: "IT Consultation" },
  { id: 2, title: "Data Security" },
  { id: 3, title: "Website Development" },
  { id: 4, title: "Cloud Services" },
  { id: 5, title: "UI/UX Design" },
  { id: 6, title: "Cybersecurity" },
  { id: 7, title: "Networking Solution" },
  { id: 8, title: "Data Security" },
  { id: 9, title: "Website Development" },
  { id: 10, title: "Cloud Services" },
  { id: 11, title: "UI/UX Design" }
]
</script>
