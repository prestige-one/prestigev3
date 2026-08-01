<template>
  <div class="creative-testimonial-area pt-120 pb-120 fix">
    <div class="container container-1580">
      <div class="row align-items-center">
        <div class="col-xl-3 col-lg-4">
          <div class="creative-testimonial-title-box mb-25">
            <span
              class="tp-section-subtitle mb-20 fs-17 pre-circle tp_fade_anim"
              data-delay=".3">
              Testimonials
            </span>
            <h4 class="tp-section-title fs-44 tp_fade_anim" data-delay=".5">
              What our <br>
              happy clients <br>
              say about us.
            </h4>
          </div>
          <div
            class="creative-testimonial-btn mb-55 tp_fade_anim"
            data-delay=".7"
            data-fade-from="top"
            data-ease="bounce"
          >
            <nuxt-link href="/contact" class="tp-btn-black btn-green-light-bg pr-15">
              <span class="tp-btn-black-filter-blur">
                <svg-btn-blur-filter filter-id="buttonFilter6" />
              </span>
              <span
                class="tp-btn-black-filter d-inline-flex align-items-center"
                style="filter: url(#buttonFilter6)"
              >
                <span class="tp-btn-black-text">Let’s chat</span>
                <span class="tp-btn-black-circle">
                  <svg-arrow-one
                    width="10"
                    height="10"
                    stroke-width="1.5"
                    viewBox="0 0 10 10"
                    path-value="M1 9L9 1M9 1H1M9 1V9"
                  />
                </span>
              </span>
            </nuxt-link>
          </div>
          <div class="creative-testimonial-arrow">
            <button class="creative-testimonial-prev mr-5">
              <span><svg-arrow-left /></span>
            </button>
            <button class="creative-testimonial-next">
              <span><svg-arrow-right /></span>
            </button>
          </div>
        </div>
        <div class="col-xl-9 col-lg-8">
          <div class="creative-testimonial-slider-wrap">
            <Swiper
              class="creative-testimonial-active fix"
              :modules="[Navigation, Scrollbar, A11y, Autoplay]"
              :slides-per-view="3"
              :loop="true"
              :autoplay="false"
              :space-between="30"
              :speed="1000"
              :navigation="{
                prevEl: '.creative-testimonial-prev',
                nextEl: '.creative-testimonial-next',
              }"
              :scrollbar="{ el: '.tp-scrollbar' }"
              :breakpoints="{
                1600: { slidesPerView: 3 },
                1400: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
                992: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }"
            >
              <SwiperSlide
                v-for="testimonial in testimonial_data"
                :key="testimonial.id"
              >
                <div class="creative-testimonial-item">
                  <!-- Avatar & Info -->
                  <div
                    class="creative-testimonial-avater-wrap d-flex align-items-center justify-content-between"
                  >
                    <div
                      class="creative-testimonial-avater-box d-inline-flex align-items-center"
                    >
                      <div class="creative-testimonial-avater">
                        <img
                          v-if="testimonial.avatar"
                          :src="testimonial.avatar"
                          :alt="testimonial.name"
                        >
                      </div>
                      <div class="creative-testimonial-avater-info">
                        <h4>{{ testimonial.name }}</h4>
                        <span>{{ testimonial.position }}</span>
                      </div>
                    </div>
                    <div class="creative-testimonial-star">
                      <span v-for="i in testimonial.rating" :key="i">
                        <svg-star-two :color="isDark ? '#D0FF71' : 'currentColor'"/>
                      </span>
                    </div>
                  </div>

                  <!-- Quote -->
                  <div class="creative-testimonial-text">
                    <p>
                      <span>
                        <svg-quote-two />
                      </span>
                      {{ testimonial.quote }}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <!-- Scrollbar -->
            <div class="tp-scrollbar" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";

const { isDark } = useIsDark();

const testimonial_data = [
  {
    id: 1,
    avatar: "/img/home-04/avater/avater-1.jpg",
    name: "Bradley Gordon",
    position: "Co-Founder of Agntix",
    rating: 5,
    quote:
      "Agntix went above and beyond to make sure we got something we were happy with.",
  },
  {
    id: 2,
    avatar: "/img/home-04/avater/avater-3.jpg",
    name: "Tisha Norton",
    position: "Co-Founder of Agntix",
    rating: 5,
    quote:
      "The team at Agntix was incredibly attentive and made sure every detail was perfect.",
  },
  {
    id: 3,
    avatar: "/img/home-04/avater/avater-4.jpg",
    name: "Emma Berger",
    position: "Co-Founder of Agntix",
    rating: 5,
    quote:
      "We're beyond satisfied - Agntix made the entire process seamless and rewarding.",
  },
  {
    id: 4,
    avatar: "/img/home-04/avater/avater-5.jpg",
    name: "Mary Cruz",
    position: "Co-Founder of Agntix",
    rating: 5,
    quote:
      "From start to finish, Agntix went the extra mile to ensure we were thrilled with the result.",
  },
];
</script>
