<template>
   <div class="tp-testimonial-area tp-testimonial-bg black-bg-3 p-relative fix" style="background-image: url(/img/home-01/testimonial/noise.png);">
      <div class="tp-testimonial-global">
          <img class="global-img" src="/img/home-01/testimonial/global.png" alt="global-image">
          <img class="overlay-img" src="/img/home-01/testimonial/overlay.png" alt="overlay-image">
      </div>
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-xl-6">
                  <div class="tp-testimonial-title-wrap z-index-3">
                      <div class="tp-testimonial-title-box mb-20 text-center">
                          <h4 class="tp-section-title text-white">Client Reviews</h4>
                      </div>
                      <div class="tp-testimonial-ratting-box d-flex justify-content-center">
                          <div class="tp-testimonial-ratting d-inline-flex align-items-center">
                              <img src="/img/home-01/testimonial/testi-logo.png" alt="testimonial-logo">
                              <div class="tp-testimonial-ratting-info">
                                  <div class="tp-testimonial-ratting-icon">
                                      <span>4.9/5</span>
                                          <i v-for="i in 5" :key="i">
                                            <svg-star-one />
                                          </i>
                                   </div>
                                  <p>Based on 24 reviews on Clutch</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- Testimonial Slider Section -->
       <div class="tp-testimonial-slider-wrap z-index-3">
        <Swiper class="tp-testimonial-slider-active" v-bind="slider_options">
          <SwiperSlide v-for="testimonial in testimonial_data" :key="testimonial.id">
            <div class="tp-testimonial-item" :class="testimonial.style">
              <div class="tp-testimonial-text">
                <p>{{ testimonial.quote }}</p>
              </div>
              <div class="tp-testimonial-author d-flex align-items-center">
                <div v-if="testimonial.avatar" class="tp-testimonial-avater">
                  <img :src="testimonial.avatar" :alt="testimonial.name">
                </div>
                <div class="tp-testimonial-author-info">
                  <span>{{ testimonial.name }}</span>
                  <p>{{ testimonial.position }}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <!-- Testimonial Slider Section -->
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'


const slider_options = {
  modules: [Autoplay],
  loop: true,
  autoplay: false,
  spaceBetween: 0,
  speed: 1000,
  breakpoints: {
    1600: { slidesPerView: 6 },
    1400: { slidesPerView: 5 },
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 4 },
    768: { slidesPerView: 3 },
    576: { slidesPerView: 1 },
    0: { slidesPerView: 1 }
  },
  a11y: { enabled: false }
}

const testimonial_data = [
  {
    id: 1,
    quote: "“Agntix studio ability to create a high quality UI is stands out. It’s something we placed a premium on. A studio with passionate, professional, fun and full creativity.”",
    name: "Albert Juan",
    position: "CEO & Founder, Archin Studio",
    avatar: '/img/avater/avater-1.png',
    style: "white-style"
  },
  {
    id: 2,
    quote: "“Agntix studio ability to create a high quality UI is stands out. It’s something we placed a premium on. A studio with passionate, professional, fun and full creativity.”",
    name: "Koen Chegg",
    position: "CEO & Founder, Archin Studio",
    avatar: '/img/avater/avater-2.png',
    style: "green-style"
  },
  {
    id: 3,
    quote: "“Agntix studio ability to create a high quality UI is stands out. It’s something we placed a premium on. A studio with passionate, professional, fun and full creativity.”",
    name: "Warren Daniel",
    position: "CEO & Founder, Archin Studio",
    avatar: '/img/avater/avater-3.jpg',
    style: "black-style"
  },
  {
    id: 4,
    quote: "“Agntix studio ability to create a high quality UI is stands out. It’s something we placed a premium on. A studio with passionate, professional, fun and full creativity.”",
    name: "Elvin Bond",
    position: "CEO & Founder, Archin Studio",
    avatar: '/img/avater/avater-4.jpg',
    style: "white-style"
  },
  {
    id: 5,
    quote: "“Agntix studio ability to create a high quality UI is stands out. It’s something we placed a premium on. A studio with passionate, professional, fun and full creativity.”",
    name: "Abbas",
    position: "CEO & Founder, Archin Studio",
    avatar: '/img/avater/avater-5.jpg',
    style: "grey-style"
  },
  {
    id: 6,
    quote: "“Agntix studio ability to create a high quality UI is stands out. It’s something we placed a premium on. A studio with passionate, professional, fun and full creativity.”",
    name: "Jessamine Mumtaz",
    position: "CEO & Founder, Archin Studio",
    avatar: '/img/avater/avater-6.jpg',
    style: "green-style"
  },
  {
    id: 7,
    quote: "“Agntix studio ability to create a high quality UI is stands out. It’s something we placed a premium on. A studio with passionate, professional, fun and full creativity.”",
    name: "Koen Chegg",
    position: "CEO & Founder, Archin Studio",
    avatar: '/img/avater/avater-2.png',
    style: "black-style"
  },
]
</script>
