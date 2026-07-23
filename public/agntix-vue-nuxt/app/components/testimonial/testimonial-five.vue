<template>
  <div class="ar-testimonial-area pb-200">
    <div class="container container-1330">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="ar-testimonial-slider-wrap p-relative">
            <!-- background image -->
            <div class="ar-testimonial-shape-1">
              <img
                src="/img/home-08/testimonial/test-bg-1.png"
                alt="testimonial background"
              >
            </div>

            <!-- Swiper Slider -->
            <Swiper
              class="ar-testimonial-active fix"
              :modules="[Navigation, Pagination, Autoplay]"
              :slides-per-view="1"
              :loop="true"
              :autoplay="{ delay: 3000, disableOnInteraction: false }"
              :space-between="0"
              :speed="1000"
              :navigation="{
                prevEl: '.ar-testimonial-prev',
                nextEl: '.ar-testimonial-next',
              }"
              :pagination="{
                el: '#paginations',
                type: 'custom',
                renderCustom(swiper, current, total) {
                  const zero = total > 9 ? '' : '0';
                  const index = zero + current;
                  const all = zero + total;
                  return `
                    <div class='shop-slider-pagination'>
                      <span>${index}</span>
                      <span>${all}</span>
                    </div>
                  `;
                },
              }"
            >
              <SwiperSlide
                v-for="testimonial in testimonials"
                :key="testimonial.id"
              >
                <div class="ar-testimonial-item text-center">
                  
                  <p v-html="sanitizeHtml(testimonial.content)"/>
                </div>
              </SwiperSlide>
            </Swiper>

            <!-- Pagination + progress -->
            <div class="fraction-wrapper d-none d-lg-block">
              <div id="paginations"/>
              <div class="shop-slider-progress-bar">
                <span/>
              </div>
            </div>

            <!-- Arrows -->
            <div class="ar-testimonial-arrow">
              <button class="ar-testimonial-prev">
                <span><svg-arrow-left width="14" height="14" /></span>
              </button>
              <button class="ar-testimonial-next">
                <span><svg-arrow-right width="14" height="14" /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface TestimonialItem {
  id: number;
  content: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    content:
      "agntix began as a collaborative <br /> architectural and landscape workshop, and <br /> has remained true to its trans disciplinary way <br /> of thinking since its inception",
  },
  {
    id: 2,
    content:
      "agntix began as a collaborative <br /> architectural and landscape workshop, and <br /> has remained true to its trans disciplinary way <br /> of thinking since its inception",
  },
  {
    id: 3,
    content:
      "agntix began as a collaborative <br /> architectural and landscape workshop, and <br /> has remained true to its trans disciplinary way <br /> of thinking since its inception",
  },
];
</script>
