<template>
 <div class="cr-testimonial-area cr-testimonial-ptb">
    <div class="container container-1230">
      <div class="cr-testimonial-box">
        <div class="row">
          
          <!-- LEFT -->
          <div class="col-lg-4">
            <div class="cr-testimonial-wrap pt-40 pl-50">
              <div class="cr-testimonial-content">
                <span>
                  4.8
                  <svg-star-two width="18" height="18" color='#F9A811' />
                </span>
                <p>86+ reviews</p>
              </div>
              <h3 class="cr-testimonial-title">
                Helping world-class <br>
                company by creative <br>
                design.
              </h3>
              <div class="cr-testimonial-nav">
                <button class="cr-testimonial-prev">
                  <svg-arrow-left-two stroke-width="2" />
                </button>
                <button class="cr-testimonial-next">
                  <svg-arrow-right-two stroke-width="2" />
                </button>
              </div>
            </div>
          </div>

          <!-- RIGHT -->
          <div class="col-lg-8">
            <div class="cr-testimonial-wrapper z-index-1">
              <div class="cr-testimonial-item-shape">
                <img
                  src="/img/home-13/testimonial/testimonial-line.png"
                  alt="testi-line"
                >
              </div>

              <!-- Swiper -->
              <Swiper
                class="cr-testimonial-active fix"
                :modules="[Navigation, Autoplay]"
                :slides-per-view="1"
                :loop="true"
                :autoplay="true"
                :space-between="30"
                :speed="1500"
                :navigation="{
                  nextEl: '.cr-testimonial-next',
                  prevEl: '.cr-testimonial-prev'
                }"
              >
                <SwiperSlide
                  v-for="testimonial in testimonial_data"
                  :key="testimonial.id"
                >
                  <div class="cr-testimonial-item z-index-1 text-center">
                    <div class="cr-testimonial-item-top pb-40">
                      <p class="cr-testimonial-item-subtitle">
                        {{ testimonial.reviewedOn }}
                      </p>
                      <img
                        v-if="testimonial.logo"
                        :src="testimonial.logo"
                        alt="company logo"
                      >
                    </div>
                    <h3 class="cr-testimonial-item-title">
                      {{ testimonial.quote }}
                    </h3>
                    <div class="cr-testimonial-item-user">
                      <span>{{ testimonial.name }}</span>
                      <p>{{ testimonial.position }}</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';

const testimonial_data = [
  {
    id: 1,
    reviewedOn: "reviewed On",
    logo: '/img/home-13/testimonial/envato.png',
    quote: "“ It uses a directory of over 200 latin words combine a half of model sentence structures. All generations on the internet trends to repeat predefined chunks as nessessary to make this file. ”",
    name: "Christian B.",
    position: "Mid-Level Developer"
  },
  {
    id: 2,
    reviewedOn: "reviewed On",
    logo: '/img/home-13/testimonial/envato.png',
    quote: "“ It uses a directory of over 200 latin words combine a half of model sentence structures. All generations on the internet trends to repeat predefined chunks as nessessary to make this file. ”",
    name: "Christian B.",
    position: "Mid-Level Developer"
  },
  {
    id: 3,
    reviewedOn: "reviewed On",
    logo: '/img/home-13/testimonial/envato.png',
    quote: "“ It uses a directory of over 200 latin words combine a half of model sentence structures. All generations on the internet trends to repeat predefined chunks as nessessary to make this file. ”",
    name: "Christian B.",
    position: "Mid-Level Developer"
  },
]
</script>
