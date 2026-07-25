<template>
  <ClientOnly>
    <div class="pp-text-slider-area ar-brand-style" data-bg-color="#0E0F11" style="background-color: #0E0F11">
      <div class="tp-brand-wrapper z-index-1">
        <Vue3Marquee :duration="40" :pause-on-hover="false">
          <div
            v-for="slide in portfolioTextSlideData"
            :key="slide.id"
            class="pp-text-slider-item"
            style="margin-right: 30px"
          >
            <span class="pp-text-slider-title">{{ slide.title }}</span>
            <span class="pp-text-slider-svg">
              <img :src="slide.icon" alt="icon">
            </span>
          </div>
        </Vue3Marquee>
      </div>
    </div>
  </ClientOnly>
</template>


<script setup lang="ts">

const portfolioTextSlideData = [
  {
    id: 1,
    title: "Teaming up with ambitious agencies",
    icon: "/img/home-14/slider/text-slider.svg",
  },
  {
    id: 2,
    title: "Currently working Independently",
    icon: "/img/home-14/slider/text-slider.svg",
  },
  {
    id: 3,
    title: "Teaming up with ambitious agencies",
    icon: "/img/home-14/slider/text-slider.svg",
  },
  {
    id: 4,
    title: "Open to projects and Partnerships",
    icon: "/img/home-14/slider/text-slider.svg",
  },
  {
    id: 5,
    title: "Teaming up with ambitious agencies",
    icon: "/img/home-14/slider/text-slider.svg",
  },
  {
    id: 6,
    title: "Currently working Independently",
    icon: "/img/home-14/slider/text-slider.svg",
  },
  {
    id: 7,
    title: "Teaming up with ambitious agencies",
    icon: "/img/home-14/slider/text-slider.svg",
  },
]
</script>
