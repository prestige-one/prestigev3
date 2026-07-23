
<template>
   <div class="ar-testimonial-area crp-testimonial-style crp-price-bg">
    <div class="container container-1330">
      <div class="row justify-content-center">
        <div class="col-xxl-8 col-xl-10 col-lg-10">
          <div class="ar-testimonial-slider-wrap p-relative">
            <Swiper
              ref="swiperRef"
              class="ar-testimonial-active fix"
              :modules="[Autoplay, Navigation, Pagination]"
              :slides-per-view="1"
              :loop="true"
              :autoplay="{ delay: 3000, disableOnInteraction: false }"
              :speed="1000"
              :space-between="0"
              :navigation="{
                prevEl: '.ar-testimonial-prev',
                nextEl: '.ar-testimonial-next'
              }"
            >
              <SwiperSlide
                v-for="testimonial in testimonial_data"
                :key="testimonial.id"
              >
                <div class="ar-testimonial-item text-center">
                  <div class="ar-testimonial-quote">
                    <span>
                      <svg-quote-three/>
                    </span>
                  </div>
                  <p>
                    <span
                      v-html="sanitizeHtml(testimonial.desc)"
                    />
                  </p>
                  <div class="ar-testimonial-author">
                    <span>{{ testimonial.name }}, <i>{{ testimonial.role }}</i></span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <!-- Custom pagination -->
            <div id="paginations"/>

            <!-- Navigation arrows -->
            <div class="ar-testimonial-arrow">
              <button class="ar-testimonial-prev">
                <span>
                   <svg-arrow-left-two/>
                </span>
              </button>
              <button class="ar-testimonial-next">
                <span>
                  <svg-arrow-right-two/>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const testimonial_data = [
  {
    id: 1,
    desc: " When we talk about Alts, we do not mean a typical <br> business partner, but rather a team that collaborates with us daily,<br> always there for us when we encounter difficulties and <br> celebrate achievements.",
    name: "Mike David",
    role: "Developer"
  },
  {
    id: 2,
    desc: "When we talk about Alts, we do not mean a typical <br> business partner, but rather a team that collaborates with us daily,<br> always there for us when we encounter difficulties and <br> celebrate achievements.",
    name: "Sarah Johnson",
    role: "Product Manager"
  },
  {
    id: 3,
    desc: "When we talk about Alts, we do not mean a typical <br> business partner, but rather a team that collaborates with us daily,<br> always there for us when we encounter difficulties and <br> celebrate achievements.",
    name: "James Wilson",
    role: "CEO"
  },
]
</script>
