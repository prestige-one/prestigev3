<template>
  <div
    class="dgm-testimonial-area dgm-testimonial-radius dgm-testimonial-space pt-120 pb-120 p-relative"
    :class="{ 'black-bg': isDark, 'grey-bg-2': !isDark }"
  >
    <!-- Background Shape -->
    <div
      class="dgm-testimonial-bg"
      :style="{
        backgroundImage: `url('/img/home-03/testimonial/test-bg-shape.jpg')`,
      }"
    />

    <!-- Testimonial Thumb / Video -->
    <div class="dgm-testimonial-thumb">
      <div class="anim-zoomin-wrap">
        <img
          class="anim-zoomin"
          src="/img/home-03/testimonial/test-bg.jpg"
          alt="bg-image"
        >
      </div>
      <modal-video cls="dgm-testimonial-playbtn" :show-icon="false">
         <span>
          <svg-video-play-one />
        </span>
      </modal-video>
    </div>

    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="offset-xl-6 col-xl-6 col-lg-8 col-md-9">
          <!-- Title -->
          <div class="dgm-testimonial-title-box text-center z-index-1 mb-45">
            <span
              class="tp-section-subtitle subtitle-grey mb-15 tp_fade_anim"
              data-delay=".3"
            >
              Testimonials
            </span>
            <h4 class="tp-section-title-grotesk tp_fade_anim" data-delay=".5">
              What
              <span class="p-relative">
                clients say
                <span class="tp-section-title-shape d-none d-md-block">
                  <svg-title-shape-four />
                </span>
              </span>
              <br>
              about us
            </h4>
          </div>

          <!-- Testimonial Slider -->
          <div class="dgm-testimonial-slider-wrap z-index-1">
            <Swiper
              :slides-per-view="1"
              :loop="true"
              :space-between="0"
              :speed="1000"
              :pagination="{ el: '.dgm-testimonial-dot', clickable: true }"
              :modules="[Pagination]"
            >
              <SwiperSlide
                v-for="testimonial in testimonials"
                :key="testimonial.id"
              >
                <div class="dgm-testimonial-slider-item text-center">
                  <div class="dgm-testimonial-quote">
                    <span>
                      <svg-quote-one />
                    </span>
                  </div>
                  <div class="dgm-testimonial-text">
                    <p>{{ testimonial.text }}</p>
                  </div>
                  <div
                    class="dgm-testimonial-author-wrap d-flex align-items-center justify-content-center"
                  >
                    <div class="dgm-testimonial-author p-relative">
                      <img
                        class="dgm-testimonial-author-img"
                        :src="testimonial.authorImg"
                        :alt="testimonial.authorName"
                      >
                      <img
                        class="dgm-testimonial-author-logo"
                        :src="testimonial.logo"
                        alt="company logo"
                      >
                    </div>
                    <div class="dgm-testimonial-author-info">
                      <h4 class="dgm-testimonial-author-name">
                        {{ testimonial.authorName }}
                      </h4>
                      <span>{{ testimonial.position }}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div class="dgm-testimonial-dot text-center" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
const {isDark} = useIsDark();
const testimonials = [
  {
    id: 1,
    text: "We will help you identify your target market, develop a marketing plan, and grow your customer base. We are committed to helping you succeed, and we will work with you every step of the way.",
    authorImg: "/img/home-03/avater/author-1.jpg",
    logo: "/img/home-03/testimonial/testi-logo.png",
    authorName: "Leslie Alexander",
    position: "CEO at Specter",
  },
  {
    id: 2,
    text: "We will help you identify your target market, develop a marketing plan, and grow your customer base. We are committed to helping you succeed, and we will work with you every step of the way.",
    authorImg: "/img/home-03/avater/author-1.jpg",
    logo: "/img/home-03/testimonial/testi-logo.png",
    authorName: "Leslie Alexander",
    position: "CEO at Specter",
  },
  {
    id: 3,
    text: "We will help you identify your target market, develop a marketing plan, and grow your customer base. We are committed to helping you succeed, and we will work with you every step of the way.",
    authorImg: "/img/home-03/avater/author-1.jpg",
    logo: "/img/home-03/testimonial/testi-logo.png",
    authorName: "Leslie Alexander",
    position: "CEO at Specter",
  },
];
</script>
