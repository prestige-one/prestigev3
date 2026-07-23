<template>
  <ClientOnly>
    <div
      class="pp-brand-area ar-brand-style"
      data-bg-color="#0E0F11"
      style="background-color: #0E0F11"
    >
      <div class="tp-brand-wrapper pp-text-slider-wrapper z-index-1">
        <Vue3Marquee
          :duration="40"
          :pause-on-hover="true"
          class="slide-transtion"
        >
          <div
            v-for="item in portfolioBrandSlideData"
            :key="item.id"
            class="pp-brand-item"
            style="margin-right: 30px"
          >
            <span class="pp-brand-title">{{ item.title }}</span>
            <span class="pp-brand-icon">
              <svg-spark-one fill="#FFF669" />
            </span>
          </div>
        </Vue3Marquee>
      </div>
    </div>
 </ClientOnly>
</template>


<script setup lang="ts">
// Data for brand slides
const portfolioBrandSlideData = [
  { id: 1, title: "E-commerce"},
  { id: 2, title: "Landing page"},
  { id: 3, title: "Social network"},
  { id: 4, title: "Blog"},
  { id: 5, title: "Corporate website"},
  { id: 6, title: "Dashboard"},
  { id: 7, title: "Landing page"},
  { id: 8, title: "Social network"},
  { id: 9, title: "Blog"},
]
</script>