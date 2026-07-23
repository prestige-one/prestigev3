<template>
  <div class="ai-instagram-area p-relative">
    <!-- Shape -->
    <div class="ai-instagram-shape-1">
      <img src="/img/home-07/shape/shape-6.png" alt="shape">
    </div>

    <div class="container-fluid p-0">
      <div class="row gx-0">
        <div class="col-xl-12">
          <!-- Swiper -->
          <Swiper class="ai-instagram-active" v-bind="swiper_params">
            <SwiperSlide v-for="post in instagramPosts" :key="post.id">
              <div class="ai-instagram-img">
                <a class="popup-image" href="https://www.instagram.com/" target="_blank">
                  <img :src="post.image" :alt="`img-${post.id}`" class="img-fluid">
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

// Swiper config
const swiper_params = {
  modules: [Autoplay],
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 0,
  speed: 1000,
  breakpoints: {
    1600: { slidesPerView: 6 },
    1400: { slidesPerView: 5 },
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 4 },
    768: { slidesPerView: 3 },
    576: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
}

const instagramPosts = [
  {
    id: 1,
    image: '/img/home-07/instagram/instagram-1.jpg',
    popupImage: '/img/home-07/instagram/instagram-1-1.jpg',
  },
  {
    id: 2,
    image: '/img/home-07/instagram/instagram-2.jpg',
    popupImage: '/img/home-07/instagram/instagram-2-2.jpg',
  },
  {
    id: 3,
    image: '/img/home-07/instagram/instagram-3.jpg',
    popupImage: '/img/home-07/instagram/instagram-3-3.jpg',
  },
  {
    id: 4,
    image: '/img/home-07/instagram/instagram-4.jpg',
    popupImage: '/img/home-07/instagram/instagram-4-4.jpg',
  },
  {
    id: 5,
    image: '/img/home-07/instagram/instagram-5.jpg',
    popupImage: '/img/home-07/instagram/instagram-5-5.jpg',
  },
  {
    id: 6,
    image: '/img/home-07/instagram/instagram-6.jpg',
    popupImage: '/img/home-07/instagram/instagram-6-6.jpg',
  },
  {
    id: 7,
    image: '/img/home-07/instagram/instagram-3.jpg',
    popupImage: '/img/home-07/instagram/instagram-3-3.jpg',
  }
];
</script>