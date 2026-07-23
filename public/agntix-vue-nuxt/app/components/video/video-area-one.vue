
<template>
  <section :class="`tp-video-area black-bg ${topCls} ${spacing} fix`">
    <div class="container-fluid p-0">
      <div class="tp-video-thumb-wrap">
        
        <!-- First image (hidden on mobile) -->
        <div :class="['tp-video-thumb', first_image?.className]">
          <img
            :src="first_image.image"
            alt="video thumbnail"
          >
        </div>

        <!-- Main video player (always visible) -->
        <div class="tp-video-thumb mb-25">
          <video-player video-url="https://html.aqlova.com/videos/liko/liko.mp4" />
        </div>

        <!-- Remaining images -->
        <div
          v-for="(img, index) in video_data.slice(1)"
          :key="`video-img-${index}`"
          :class="['tp-video-thumb', img.className]"
        >
          <img
            :src="img.image"
            :alt="`video thumbnail ${index + 1}`"
          >
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
withDefaults(defineProps<{
  topCls?: string;
  spacing?: string;
}>(), { 
  topCls: '',
  spacing: 'mt-120'
});
const video_data = [
  {
    id: 1,
    image: '/img/home-01/video/video-1.jpg',
    className: 'd-none d-xl-block'
  },
  {
    id: 2,
    image: '/img/home-01/video/video-3.jpg',
    className: 'd-none d-xl-block mb-25'
  },
  {
    id: 3,
    image: '/img/home-01/video/video-4.jpg',
    className: 'd-none d-xl-block mb-25'
  },
  {
    id: 4,
    image: '/img/home-01/video/video-5.jpg',
    className: 'd-none d-xl-block'
  },
  {
    id: 5,
    image: '/img/home-01/video/video-6.jpg',
    className: 'd-none d-xl-block'
  }
];
const first_image = video_data[0]!;
</script>
