<template>
  <div
    class="tp-testimonial-area tp-team-bg black-bg-3 p-relative fix"
    style="background-image: url('/img/home-01/testimonial/noise.png')"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6">
          <div class="tp-testimonial-title-wrap z-index-3">
            <div class="tp-testimonial-title-box mb-75 text-center">
              <h4 class="tp-section-title text-white fs-140">
                meet <br> our team
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Swiper Slider -->
    <div class="tp-team-slider-wrap">
      <Swiper
        class="tp-team-slider-active slide-transtion"
        :modules="[Autoplay]"
        :loop="true"
        :space-between="30"
        :speed="8000"
        :autoplay="{ delay: 1 }"
        :breakpoints="{
          1600: { slidesPerView: 5 },
          1400: { slidesPerView: 5 },
          1200: { slidesPerView: 4 },
          992: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          576: { slidesPerView: 1 },
          0: { slidesPerView: 1 }
        }"
      >
        <SwiperSlide v-for="member in displayTeamData" :key="member.id">
          <div class="tp-team-item">
            <div class="tp-team-item-thumb">
              <img
                :src="member.image"
                :alt="member.name"
              >
              <div class="studio-team-content text-center">
                <h4 class="studio-team-title-sm">
                  <nuxt-link href="/team-details">
                    {{ member.name }}
                  </nuxt-link>
                </h4>
                <span>{{ member.position }}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

// Simplified team data (serial ids, direct img paths, no link)
const displayTeamData = [
  { id: 1, image: "/img/about-us/about-us-4/team/team-1.jpg", name: "Andrew", position: "Developer" },
  { id: 2, image: "/img/about-us/about-us-4/team/team-2.jpg", name: "Sophia", position: "Developer" },
  { id: 3, image: "/img/about-us/about-us-4/team/team-3.jpg", name: "Emma", position: "Developer" },
  { id: 4, image: "/img/about-us/about-us-4/team/team-4.jpg", name: "James", position: "Developer" },
  { id: 5, image: "/img/about-us/about-us-4/team/team-5.jpg", name: "Oliver", position: "Developer" },
  { id: 6, image: "/img/about-us/about-us-4/team/team-2.jpg", name: "Sophia", position: "Developer" },
  { id: 7, image: "/img/about-us/about-us-4/team/team-3.jpg", name: "Emma", position: "Developer" }
];
</script>
