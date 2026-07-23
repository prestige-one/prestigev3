<template>
  <div class="it-testimonial-area it-testimonial-ptb pt-140 pb-120">
    <div class="container container-1230">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12">
          <div class="it-testimonial-title-box text-center mb-70">
            <span
              class="tp-section-subtitle-platform platform-text-black mb-20 tp-split-text tp-split-right"
            >
              Feedbacks
            </span>
            <h4
              class="tp-section-title-platform platform-text-black mb-20 tp-split-text tp-split-right"
            >
              Trusted by the World's Fastest Growing Companies.
            </h4>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="it-testimonial-slider-wrap p-relative">
            <!-- Navigation Arrows -->
            <div class="it-testimonial-arrow">
              <button class="it-testimonial-prev">
                <svg-arrow-left-two stroke-width="2" />
              </button>
              <button class="it-testimonial-next">
                <svg-arrow-right-two stroke-width="2" />
              </button>
            </div>

            <!-- Swiper -->
            <Swiper
              class="it-testimonial-active fix"
              :modules="[Autoplay, Navigation]"
              :slides-per-view="1"
              :loop="true"
              :autoplay="true"
              :space-between="30"
              :speed="1500"
              :navigation="{
                nextEl: '.it-testimonial-next',
                prevEl: '.it-testimonial-prev'
              }"
            >
              <SwiperSlide
                v-for="testimonial in testimonialData"
                :key="testimonial.id"
              >
                <div class="it-testimonial-item">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="it-testimonial-thumb">
                        <img
                          v-if="testimonial.avatar"
                          :src="testimonial.avatar"
                          alt="testimonial-image"
                        >
                      </div>
                    </div>
                    <div class="col-lg-8">
                      <div class="it-testimonial-content">
                        <img
                          v-if="testimonial.brandLogo"
                          :src="testimonial.brandLogo"
                          alt="testi-brand"
                        >
                        
                        <p v-html="sanitizeHtml(testimonial.desc)"/>
                        <span>{{ testimonial.name }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, Navigation } from "swiper/modules"

// Testimonial data
const testimonialData = [
  {
    id: 1,
    avatar: "/img/home-11/testimonial/testi-img-1.jpg",
    brandLogo: "/img/home-11/testimonial/testi-brand-1.jpg",
    desc:"“ It uses a directory of over 200 latin words combine a half of model sentence structures. Allgenerations on the internet trends to repeat predefined chunks as nessessary to <br> make this file. ”",
    name: "Christian B."
  },
  {
    id: 2,
    avatar: "/img/home-11/testimonial/testi-img-1.jpg",
    brandLogo: "/img/home-11/testimonial/testi-brand-1.jpg",
    desc:"“ It uses a directory of over 200 latin words combine a half of model sentence structures. Allgenerations on the internet trends to repeat predefined chunks as nessessary to <br> make this file. ”",
    name: "Sarah K."
  },
  {
    id: 3,
    avatar: "/img/home-11/testimonial/testi-img-1.jpg",
    brandLogo: "/img/home-11/testimonial/testi-brand-1.jpg",
    desc:"“ It uses a directory of over 200 latin words combine a half of model sentence structures. Allgenerations on the internet trends to repeat predefined chunks as nessessary to <br> make this file. ”",
    name: "Michael T."
  },
  {
    id: 4,
    avatar: "/img/home-11/testimonial/testi-img-1.jpg",
    brandLogo: "/img/home-11/testimonial/testi-brand-1.jpg",
    desc:"“ It uses a directory of over 200 latin words combine a half of model sentence structures. Allgenerations on the internet trends to repeat predefined chunks as nessessary to <br> make this file. ”",
    name: "Christian B."
  },
  {
    id: 5,
    avatar: "/img/home-11/testimonial/testi-img-1.jpg",
    brandLogo: "/img/home-11/testimonial/testi-brand-1.jpg",
    desc:"“ It uses a directory of over 200 latin words combine a half of model sentence structures. Allgenerations on the internet trends to repeat predefined chunks as nessessary to <br> make this file. ”",
    name: "Sarah K."
  }
]
</script>
