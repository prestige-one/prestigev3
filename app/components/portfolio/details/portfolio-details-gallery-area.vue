<template>
  <div>

    <!-- portfolio details 2 area start -->
    <div class="tp-pd-2-ptb pt-200 pb-80">
        <div class="container container-1230">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="tp-pd-2-top pb-70 text-center">
                        <div class="tp-pd-2-categories mb-30 tp_fade_anim" data-delay=".3">
                            <span>Website</span>
                            <span>Services</span>
                        </div>
                        <h3 class="tp-pd-2-title tp_fade_anim" data-delay=".5">Olivia Rivers</h3>
                    </div>
                    <div class="tp-pd-2-bottom d-flex justify-content-between tp_fade_anim" data-delay=".7">
                        <div class="tp-pd-2-bottom-item text-center">
                            <span>Client</span>
                            <h6>Envato</h6>
                        </div>
                        <div class="tp-pd-2-bottom-item text-center">
                            <span>Role</span>
                            <h6>Branding</h6>
                        </div>
                        <div class="tp-pd-2-bottom-item text-center">
                            <span>Duration</span>
                            <h6>8 March 2025</h6>
                        </div>
                        <div class="tp-pd-2-bottom-item text-center">
                            <span>Designer</span>
                            <h6>ThemePure</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- portfolio details 2 area end -->


    <!-- portfolio details area start -->
    <div class="tp-pd-2-area pb-140">
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-pd-2-banner">
                        <img data-speed=".8" src="/img/portfolio/portfolio-details-2/portfolio-details-thumb-1.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- portfolio details area end -->


    <!-- portfolio details overview start -->
    <div class="tp-pd-2-overview-ptb pb-70">
        <div class="container container-1230">
            <div class="row">
                <div class="col-lg-6">
                    <div class="tp-pd-2-overview-heading tp_fade_anim" data-delay=".3">
                        <h3 class="tp-pd-2-overview-title">Brand overview</h3>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-pd-2-overview-wrap">
                        <p>Solfeggio Obscuro is a music event shaped by the pulse of the underground,
                            where rhythm moves the body and sound opens the mind. Obscuro suggests
                            more than darkness-it speaks to the hidden,</p>
                        <p>the not immediately understood. That mood shaped a visual language that
                            doesn’t explain, but invites. Nothing screams for attention, but everything
                            pulls you in. It’s not trying to be nostalgic,</p>
                        <ul>
                            <li>Branding and identity</li>
                            <li>Websites and digital platforms</li>
                            <li>Content strategy for social media</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- portfolio details overview end -->


    <!-- portfolio details thumb slider -->
    <div class="tp-pd-2-slider-ptb pb-140">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="tp-pd-2-slider-wrapper">
              <div class="tp-pd-2-active swiper">
                <Swiper
                  :modules="modules"
                  :loop="true"
                  :space-between="20"
                  :speed="1000"
                  :pagination="{
                    el: '.tp-pd-2-dot',
                    clickable: true,
                  }"
                  :breakpoints="{
                    1600: { slidesPerView: 3 },
                    1400: { slidesPerView: 3 },
                    1200: { slidesPerView: 3 },
                    992: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    576: { slidesPerView: 1 },
                    0: { slidesPerView: 1 }
                  }"
                >
                  <SwiperSlide 
                    v-for="(img, index) in sliderData" 
                    :key="index"
                  >
                    <div class="tp-pd-2-slider-thumb">
                      <img
                        :src="img"
                        :alt="`portfolio-thumb-${index + 1}`"
                        class="w-100"
                      >
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div class="tp-pd-2-dot text-center"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- portfolio details thumb slider -->


    <!-- portfolio details step start -->
    <div class="tp-pd-2-step-ptb pb-70">
        <div class="container container-1230">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-pd-2-step-heading pb-60 tp_fade_anim" data-delay=".3">
                        <h3 class="tp-pd-2-step-title">Out of love for stylish & functional <br>
                            WP themes and for taking pride to <br>
                            support you.</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="tp-pd-2-step-item mb-30">
                        <h4 class="tp-pd-2-step-item-title">01. Development</h4>
                        <span>A wonderful serenity has taken possession <br>
                            of my entire soul, like these sweet mornings <br>
                            which I enjoy with my whole heart.</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="tp-pd-2-step-item mb-30">
                        <h4 class="tp-pd-2-step-item-title">02. Concept Design</h4>
                        <span>A wonderful serenity has taken possession <br>
                            of my entire soul, like these sweet mornings <br>
                            which I enjoy with my whole heart.</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="tp-pd-2-step-item mb-30">
                        <h4 class="tp-pd-2-step-item-title">03. Implementation</h4>
                        <span>A wonderful serenity has taken possession <br>
                            of my entire soul, like these sweet mornings <br>
                            which I enjoy with my whole heart.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- portfolio details step end -->


    <!-- portfolio details thumb start -->
    <div class="tp-pd-2-thumb-ptb pb-120">
        <div class="container container-1230">
            <div class="row gx-20">
                <div class="col-lg-12">
                    <div class="tp-pd-2-thumb-item mb-20">
                        <img data-speed=".8" src="/img/portfolio/portfolio-details-2/portfolio-details-thumb-5.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-pd-2-thumb-item mb-20">
                        <img data-speed=".8" src="/img/portfolio/portfolio-details-2/portfolio-details-thumb-6.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-pd-2-thumb-item mb-20">
                        <img data-speed=".8" src="/img/portfolio/portfolio-details-2/portfolio-details-thumb-7.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- portfolio details thumb end -->


    <!-- portfolio details np start -->
    <div class="tp-pd-2-np-ptb pb-120">
        <div class="container container-1230">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-pd-2-np-content d-flex justify-content-center align-items-center flex-wrap">
                        <div class="tp_fade_anim" data-delay=".3" data-fade-from="top" data-ease="bounce">
                            <a href="#">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                                      <path d="M0.250745 12.3137C0.250745 12.7279 0.586531 13.0637 1.00074 13.0637H7.75074C8.16496 13.0637 8.50074 12.7279 8.50074 12.3137C8.50074 11.8995 8.16496 11.5637 7.75074 11.5637L1.75074 11.5637L1.75074 5.56371C1.75074 5.14949 1.41496 4.81371 1.00074 4.81371C0.586531 4.81371 0.250745 5.14949 0.250745 5.56371V12.3137ZM12.3145 1L11.7841 0.46967L0.470415 11.7834L1.00074 12.3137L1.53107 12.844L12.8448 1.53033L12.3145 1Z" fill="currentColor" />
                                  </svg>
                                </span> Prev Work
                            </a>
                        </div>
                        <div class="tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                            <a href="#">Next Work 
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                      <path d="M13.0637 0.828381C13.0637 0.414168 12.7279 0.0783817 12.3137 0.0783812L5.56371 0.0783814C5.14949 0.0783814 4.81371 0.414168 4.81371 0.828382C4.81371 1.2426 5.14949 1.57838 5.56371 1.57838H11.5637V7.57838C11.5637 7.9926 11.8995 8.32838 12.3137 8.32838C12.7279 8.32838 13.0637 7.9926 13.0637 7.57838L13.0637 0.828381ZM1 12.1421L1.53033 12.6724L12.844 1.35871L12.3137 0.828382L11.7834 0.298051L0.46967 11.6118L1 12.1421Z" fill="currentColor" />
                                  </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- portfolio details np end -->

  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

// Swiper modules
const modules = [Pagination]

// Slider data with direct image paths
const sliderData = [
  '/img/portfolio/portfolio-details-2/portfolio-details-thumb-2.jpg',
  '/img/portfolio/portfolio-details-2/portfolio-details-thumb-3.jpg',
  '/img/portfolio/portfolio-details-2/portfolio-details-thumb-4.jpg',
  '/img/portfolio/portfolio-details-2/portfolio-details-thumb-2.jpg',
  '/img/portfolio/portfolio-details-2/portfolio-details-thumb-3.jpg'
]
</script>
