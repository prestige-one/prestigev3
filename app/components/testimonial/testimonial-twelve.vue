<template>
  <div class="pp-testimonial-area pp-testimonial-ptb pb-160">
    <div class="container container-1430">
      <div class="row">
        <div class="col-lg-12">
          <div class="pp-testimonial-heading mb-50">
            <span class="tp-section-subtitle-clash clash-subtitle-pos body-ff">
              Testimonials
              <i><svg-arrow-long-two /></i>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="pp-testimonial-slider-wrapper">
      <div class="design-testimonial-slide-wrap">
        <Swiper class="design-testimonial-active" v-bind="swiperParams" :modules="[Autoplay]">
          <SwiperSlide v-for="testimonial in testimonialsData" :key="testimonial.id">
            <div class="design-testimonial-item">
              <div class="design-testimonial-author">
                <h4>{{ testimonial.name }}</h4>
                <span>{{ testimonial.position }}</span>
              </div>
              <div class="design-testimonial-review d-flex align-items-end">
                <h4>{{ testimonial.rating }}.0</h4>
                <div class="design-testimonial-review-icon">
                  <span v-for="i in testimonial.rating" :key="i">
                    <svg-star-three/>
                  </span>
                </div>
              </div>
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

const testimonialsData = [
  {
    id: 1,
    name: 'Andrew Gross',
    position: 'CEO & Co-Founder',
    rating: 5,
    quote: 'I was really impressed with their speed and how quickly things moved.'
  },
  {
    id: 2,
    name: 'Matthew Blake',
    position: 'Chief Executive Officer',
    rating: 5,
    quote: 'Their speed and swift execution truly impressed me on this project.'
  },
  {
    id: 3,
    name: 'Jonathan Cross',
    position: 'Founder & Chief Executive',
    rating: 5,
    quote: "I couldn't believe how quickly everything came together."
  },
  {
    id: 4,
    name: 'Benjamin Hayes',
    position: 'CEO & Head of Innovation',
    rating: 5,
    quote: 'I was blown away by how fast and smoothly things moved.'
  },
  {
    id: 5,
    name: 'William Tate',
    position: 'Managing Partner & CEO',
    rating: 5,
    quote: 'I was amazed by their efficiency and how fast everything progressed.'
  },
  {
    id: 6,
    name: 'Jonathan Cross',
    position: 'Founder & Chief Executive',
    rating: 5,
    quote: "I couldn't believe how quickly everything came together."
  },
];

const swiperParams = {
  speed: 1000,
  loop: true,
  autoplay: true,
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
</script>
