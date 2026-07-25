<template>
  <div class="tp-shop-instagram-area p-relative">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="tp-product-instagram-heading text-center mb-50">
            <h4 class="tp-shop-section-title">Shop Gram</h4>
            <p>Here's some of our most popular products people are in love with.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid p-0">
      <div class="row gx-0">
        <div class="col-xl-12">
          <Swiper
            class="ai-instagram-active"
            :modules="[Autoplay]"
            :loop="true"
            :autoplay="{ delay: 2500, disableOnInteraction: false }"
            :space-between="0"
            :speed="1000"
            :breakpoints="{
              1600: { slidesPerView: 6 },
              1400: { slidesPerView: 5 },
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              576: { slidesPerView: 2 },
              0: { slidesPerView: 1 }
            }"
          >
            <SwiperSlide
              v-for="post in instagramPosts"
              :key="post.id"
            >
              <div class="tp-shop-instagram-item">
                <a class="popup-image" href="https://www.instagram.com/" target="_blank">
                  <img :src="post.image" :alt="`img-${post.id}`">
                </a>
                <div class="tp-shop-instagram-icon">
                  <svg-instagram-one />
                </div>
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

const instagramPosts = [
  { id: 1, image: '/img/product/instragram/instragram-thumb-1.jpg'},
  { id: 2, image: '/img/product/instragram/instragram-thumb-2.jpg'},
  { id: 3, image: '/img/product/instragram/instragram-thumb-3.jpg'},
  { id: 4, image: '/img/product/instragram/instragram-thumb-4.jpg'},
  { id: 5, image: '/img/product/instragram/instragram-thumb-5.jpg'},
  { id: 6, image: '/img/product/instragram/instragram-thumb-6.jpg'},
  { id: 7, image: '/img/product/instragram/instragram-thumb-7.jpg'}
]
</script>
