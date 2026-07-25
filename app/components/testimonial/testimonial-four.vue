
<template>
  <div class="design-testimonial-area pb-200">
    <div class="container container-1830">
      <div class="row">
        <div class="col-xl-6">
          <div class="des-testtimonial-title-box mb-40">
            <h3 class="tp-section-subtitle-clash color-red mb-0">
              testimonials
              <i><svg-arrow-long-two /></i>
            </h3>
          </div>
        </div>
      </div>

      <div class="design-testimonial-slide-wrap">
        <Swiper class="design-testimonial-active" v-bind="swiper_options">
          <SwiperSlide
            v-for="testimonial in testimonial_data"
            :key="testimonial.id"
          >
            <div class="design-testimonial-item">
              <div class="design-testimonial-author">
                <h4>{{ testimonial.name }}</h4>
                <span>{{ testimonial.position }}</span>
              </div>

              <div class="design-testimonial-review d-flex align-items-end">
                <h4>{{ testimonial.rating?.toFixed(1) }}</h4>
                <div class="design-testimonial-review-icon">
                  <span v-for="i in 5" :key="i">
                    <svg-star-three />
                  </span>
                </div>
              </div>

              <div class="design-testimonial-text">
                <p>"{{ testimonial.quote }}"</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

// Swiper options
const swiper_options = {
  modules: [Autoplay],
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
    0: { slidesPerView: 1 }
  }
}

const testimonial_data = [
  {
      id: 1,
      name: "Andrew Gross",
      position: "CEO & Co-Founder",
      rating: 5.0,
      quote: "I was really impressed with their speed and how quickly things moved."
  },
  {
      id: 2,
      name: "Matthew Blake",
      position: "Chief Executive Officer",
      rating: 5.0,
      quote: "Their speed and swift execution truly impressed me on this project."
  },
  {
      id: 3,
      name: "Jonathan Cross",
      position: "Founder & Chief Executive",
      rating: 5.0,
      quote: "I couldn't believe how quickly everything came together."
  },
  {
      id: 4,
      name: "Benjamin Hayes",
      position: "CEO & Head of Innovation",
      rating: 5.0,
      quote: "I was blown away by how fast and smoothly things moved."
  },
  {
      id: 5,
      name: "William Tate",
      position: "Managing Partner & CEO",
      rating: 5.0,
      quote: "I was amazed by their efficiency and how fast everything progressed."
  },
]
</script>
