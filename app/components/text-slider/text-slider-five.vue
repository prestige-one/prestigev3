<template>
  <div class="ai-text-slider-area">
    <client-only>
      <Vue3Marquee
        class="ai-text-slider-active slide-transtion"
        :duration="80"
        :pause-on-hover="false"
        style="overflow: hidden;"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="ai-text-slider d-flex align-items-center"
          style="margin-right: 10px"
        >
          <span>{{ slide.text }}</span>
          <img :src="slide.image" alt="shape">
        </div>
      </Vue3Marquee>
    </client-only>
  </div>
</template>

<script setup lang="ts">
// const slides = Array(8).fill({
//   text: "AI Images Generate",
//   image: "/img/home-07/text-slider/text-shape.png",
// })
const slides = [
  {
    text: "AI Images Generate",
    image: "/img/home-07/text-slider/text-shape.png",
  },
  {
    text: "AI Images Generate",
    image: "/img/home-07/text-slider/text-shape.png",
  },
  {
    text: "AI Images Generate",
    image: "/img/home-07/text-slider/text-shape.png",
  },
  {
    text: "AI Images Generate",
    image: "/img/home-07/text-slider/text-shape.png",
  },
  {
    text: "AI Images Generate",
    image: "/img/home-07/text-slider/text-shape.png",
  },
  {
    text: "AI Images Generate",
    image: "/img/home-07/text-slider/text-shape.png",
  },
  {
    text: "AI Images Generate",
    image: "/img/home-07/text-slider/text-shape.png",
  },
  {
    text: "AI Images Generate",
    image: "/img/home-07/text-slider/text-shape.png",
  },
];
</script>
