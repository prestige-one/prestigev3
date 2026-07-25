
<template>
  <div class="st-testimonial-area p-relative st-testimonial-ptb tp-bounce-trigger pt-160 pb-180">
    <div class="st-testimonial-shape">
      <div class="st-testimonial-shape-1">
        <img src="/img/home-12/testimonial/testimonial-bg.png" alt="">
      </div>
      <div class="st-testimonial-shape-2 tp-bounce">
        <img
          src="/img/home-12/testimonial/testimonial-shape.png"
          alt=""
        >
      </div>
    </div>
    <div class="container container-1320">
      <div class="row">
        <div class="col-lg-12">
          <div class="st-testimonial-heading mb-70">
            <span class="tp-section-subtitle st tp_fade_anim" data-delay=".3">
              // OUR FEEDBACK
            </span>
            <h3
              class="tp-section-title-playfair mb-20 tp_fade_anim"
              data-delay=".5"
            >
              WHAT THEY <br>
              SAY <span>ABOUT US</span>
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="st-testimonial-box text-center mb-30">
            <div class="st-testimonial-box-top">
              <h4 class="st-testimonial-box-rating">4.9</h4>
              <span class="st-testimonial-box-star">
                <svg-star-eleven />
                <svg-star-eleven />
                <svg-star-eleven />
                <svg-star-eleven />
              </span>
              <i>( 35 REVIEWS )</i>
            </div>
            <div class="st-testimonial-box-content">
              <p>
                Enhancing top-tier companies <br>
                with innovative startup and <br>
                business solutions!"
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="st-testimonial-wrapper">
            <Swiper
              :slides-per-view="1.7"
              :loop="true"
              :space-between="30"
              :breakpoints="{
                1200: { slidesPerView: 1.7 },
                992: { slidesPerView: 1.7 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }"
              class="st-testimonial-active"
            >
              <SwiperSlide
                v-for="testimonial in testimonial_data"
                :key="testimonial.id"
              >
                <div class="st-testimonial-item">
                  <div class="st-testimonial-item-user">
                    <span>David Hussey</span>
                    <p>Co-Founder</p>
                  </div>
                  <div class="st-testimonial-item-content">
                    <div class="st-testimonial-item-quote">
                      <img
                        src="/img/home-12/testimonial/quote.png"
                        alt="quote"
                      >
                    </div>
                    <p v-html="sanitizeHtml(testimonial.quote)"/>
                    <span><svg-star-long/></span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div
            class="st-testimonial-bottom text-center tp_fade_anim"
            data-delay=".3"
          >
            <span>Let's make something great work together.
              <nuxt-link href="/portfolio-details-creative-slider">
                Start a project
              </nuxt-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
const testimonial_data = [
  {
    id: 1,
    name: "David Hussey",
    position: "Co-Founder",
    quote:
      "We’ve had good experiences with calling <br> centres through agntix. We hired my <br> own remote team that I have <i>complete <br> control over the remote</i> team that <br> means work from home",
    rating: 5,
  },
  {
    id: 2,
    name: "Kim Armstrong",
    position: "Co-Founder",
    quote:
      "We’ve had good experiences with calling <br> centres through agntix. We hired my <br> own remote team that I have <i>complete <br> control over the remote</i> team that <br> means work from home",
    rating: 5,
  },
  {
    id: 3,
    name: "David Hussey",
    position: "Co-Founder",
    quote:
      "We’ve had good experiences with calling <br> centres through agntix. We hired my <br> own remote team that I have <i>complete <br> control over the remote</i> team that <br> means work from home",
    rating: 5,
  },
  {
    id: 4,
    name: "Kim Armstrong",
    position: "Co-Founder",
    quote:
      "We’ve had good experiences with calling <br> centres through agntix. We hired my <br> own remote team that I have <i>complete <br> control over the remote</i> team that <br> means work from home",
    rating: 5,
  },
];
</script>
