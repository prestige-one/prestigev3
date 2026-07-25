<template>
  <div class="design-testimonial-area pt-140 pb-200 title-box">
    <div class="container container-1680">
      <div class="design-testimonial-title-wrap mb-70">
        <div class="row align-items-end">
          <div class="col-lg-6">
            <div class="design-testimonial-title-box">
              <h4 class="tp-section-title-dirtyline">
                <span class="tp-text-right-scroll tp_text_invert_2">7o+</span><br>
                <span class="tp_text_invert_2">Review</span>
              </h4>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="design-testimonial-right d-flex justify-content-start justify-content-lg-end">
              <div class="tp-testimonial-ratting-box d-flex justify-content-center">
                <div class="tp-testimonial-ratting d-inline-flex align-items-center">
                  <img src="/img/home-01/testimonial/testi-logo.png" alt="testimonial-logo">
                  <div class="tp-testimonial-ratting-info">
                    <div class="tp-testimonial-ratting-icon">
                      <span>4.9/5</span>
                      <i> <svg-star-one /></i>
                      <i> <svg-star-one /></i>
                      <i> <svg-star-one /></i>
                      <i> <svg-star-one /></i>
                      <i> <svg-star-one /></i>
                    </div>
                    <p>Based on 24 reviews on Clutch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- testimonial item -->
      <div class="design-testimonial-slide-wrap">
        <Swiper class="design-testimonial-active" v-bind="swiper_params" :modules="[Autoplay]">
          <SwiperSlide v-for="testimonial in testimonialsData" :key="testimonial.id">
            <div class="design-testimonial-item">
              <!-- Author Info -->
              <div class="design-testimonial-author">
                <h4>{{ testimonial.name }}</h4>
                <span>{{ testimonial.position }}</span>
              </div>

              <!-- Rating -->
              <div class="design-testimonial-review d-flex align-items-end">
                <h4>{{ testimonial.rating }}</h4>
                <div class="design-testimonial-review-icon">
                  <span v-for="i in 5" :key="i">
                    <svg-star-three />
                  </span>
                </div>
              </div>

              <!-- Quote -->
              <div class="design-testimonial-text">
                <p>{{ testimonial.quote }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

const swiper_params = {
  speed: 1000,
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: false },
  spaceBetween: 10,
  breakpoints: {
    1600: { slidesPerView: 4 },
    1400: { slidesPerView: 4 },
    1200: { slidesPerView: 2 },
    992: { slidesPerView: 2 },
    768: { slidesPerView: 1 },
    576: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  },
};

const testimonialsData = [
  {
    id: 1,
    name: 'Andrew Gross',
    position: 'CEO & Co-Founder',
    rating: 5.0,
    quote: `"I was really impressed with their speed and how quickly things moved."`,
  },
  {
    id: 2,
    name: 'Matthew Blake',
    position: 'Chief Executive Officer',
    rating: 5.0,
    quote: 'Their speed and swift execution truly impressed me on this project.',
  },
  {
    id: 3,
    name: 'Jonathan Cross',
    position: 'Founder & Chief Executive',
    rating: 5.0,
    quote: "I couldn't believe how quickly everything came together.",
  },
  {
    id: 4,
    name: 'Benjamin Hayes',
    position: 'CEO & Head of Innovation',
    rating: 5.0,
    quote: `"I was blown away by how fast and smoothly things moved."`,
  },
  {
    id: 5,
    name: 'William Tate',
    position: 'Managing Partner & CEO',
    rating: 5.0,
    quote: `"I was amazed by their efficiency and how fast everything progressed."`,
  },
];
</script>
