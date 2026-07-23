<template>
  <section class="tp-career-slider-ptb pb-180">
    <div class="tp-career-slider-wrapper">
      <div class="align-items-center slide-transtion">
        <client-only>
          <Vue3Marquee
            :duration="25"
            :pause-on-hover="false"
            :gradient="false"
            class="tp-career-slider-active"
          >
            <div
              v-for="item in images"
              :key="item.id"
              class="tp-career-slider-thumb"
              style="margin-right: 30px;"
            >
              <img
                :src="item.image"
                alt="career-slide"
                draggable="false"
              >
            </div>
          </Vue3Marquee>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const images = [
  { id: 1, image: "/img/career/career-slide-1.jpg" },
  { id: 2, image: "/img/career/career-slide-2.jpg" },
  { id: 3, image: "/img/career/career-slide-3.jpg" },
  { id: 4, image: "/img/career/career-slide-4.jpg" },
  { id: 5, image: "/img/career/career-slide-5.jpg" },
  { id: 6, image: "/img/career/career-slide-2.jpg" },
  { id: 7, image: "/img/career/career-slide-3.jpg" }
]
</script>
