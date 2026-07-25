<template>
  <div class="studio-showcase-area mb-200 black-bg">
    <div class="container-fluid">
      <div class="studio-showcase-wrap">
        <div class="studio-showcase-main d-flex">
          <div
            v-for="(column, index) in showcaseColumns"
            :key="index"
            class="studio-showcase-item"
            :class="{ 'd-none d-md-block': column.hiddenOnMobile }"
            :data-speed="column.speed"
          >
            <div
              v-for="(image, imgIndex) in column.images"
              :key="imgIndex"
              class="studio-showcase-thumb mb-30"
            >
              <img
                :src="image"
                alt="Showcase"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const showcaseColumns = [
  {
    speed: 0.7,
    hiddenOnMobile: true,
    images: [
      "/img/home-06/showcase/showcase-2.jpg",
      "/img/home-06/showcase/showcase-1.jpg",
      "/img/home-06/showcase/showcase-7.jpg",
      "/img/home-06/showcase/showcase-2.jpg",
      "/img/home-06/showcase/showcase-1.jpg",
      "/img/home-06/showcase/showcase-7.jpg",
    ],
  },
  {
    speed: 1.1,
    hiddenOnMobile: false,
    images: [
      "/img/home-06/showcase/showcase-5.jpg",
      "/img/home-06/showcase/showcase-4.jpg",
      "/img/home-06/showcase/showcase-6.jpg",
      "/img/home-06/showcase/showcase-5.jpg",
      "/img/home-06/showcase/showcase-4.jpg",
      "/img/home-06/showcase/showcase-5.jpg",
      "/img/home-06/showcase/showcase-4.jpg",
      "/img/home-06/showcase/showcase-6.jpg",
      "/img/home-06/showcase/showcase-5.jpg",
      "/img/home-06/showcase/showcase-4.jpg",
      "/img/home-06/showcase/showcase-6.jpg",
      "/img/home-06/showcase/showcase-5.jpg",
    ],
  },
  {
    speed: 0.7,
    hiddenOnMobile: true,
    images: [
      "/img/home-06/showcase/showcase-8.jpg",
      "/img/home-06/showcase/showcase-6.jpg",
      "/img/home-06/showcase/showcase-9.jpg",
      "/img/home-06/showcase/showcase-8.jpg",
      "/img/home-06/showcase/showcase-6.jpg",
      "/img/home-06/showcase/showcase-9.jpg",
    ],
  },
];
</script>
