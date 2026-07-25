<template>
  <main>
    <section class="tp-showcase-slider">
      <div class="tp-showcase-slider-main p-relative">
        <Swiper v-bind="swiperParallaxOptions" ref="swiperRef" class="tp-showcase-slider-active" :modules="modules" :pagination="{el:'.tp-showcase-slider-main .swiper-pagination',clickable: true,renderBullet: renderCustomBullet }">
          <SwiperSlide
            v-for="(slide, index) in parallaxSlideItems"
            :key="index"
          >
            <div
              class="tp-showcase-slider-bg"
              :data-background="slide.bgImg"
              data-swiper-parallax="1152"
              :style="{ backgroundImage: `url(${slide.bgImg})` }"
            >
              <div class="container container-1300">
                <div class="row">
                  <div class="tp-showcase-slider-content z-index-2">
                    <h6 class="tp-showcase-slider-subtitle">
                      {{ slide.subtitle }}
                    </h6>
                    <h1 class="tp-showcase-slider-title">
                      <NuxtLink to="/portfolio-details-gallery">
                        <span>{{ slide.title }}</span>
                      </NuxtLink>
                    </h1>
                    <NuxtLink
                      to="/portfolio-details-gallery"
                      class="tp-btn-black btn-green-light-bg"
                    >
                      <span class="tp-btn-black-filter-blur">
                        <svg-btn-blur-filter :filter-id="slide.filterId" />
                      </span>
                      <span
                        class="tp-btn-black-filter d-inline-flex align-items-center"
                        :style="{ filter: `url(#${slide.filterId})` }"
                      >
                        <span class="tp-btn-black-text">View our work</span>
                        <span class="tp-btn-black-circle">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </span>
                      </span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Navigation -->
        <div class="tp-showcase-slider-button-wrap">
          <div
            class="swiper-button-next"
            tabindex="0"
            role="button"
            aria-label="Next slide"
          >
            <div><span>Next Slide</span></div>
            <div><i class="fas fa-chevron-right"/></div>
          </div>
          <div
            class="swiper-button-prev"
            tabindex="0"
            role="button"
            aria-label="Previous slide"
          >
            <div><i class="fas fa-chevron-left"/></div>
            <div><span>Prev Slide</span></div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="swiper-pagination"/>
      </div>
    </section>
  </main>
</template>


<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Parallax, Mousewheel, Pagination, Navigation } from 'swiper/modules'

// Parallax Slides Data
const parallaxSlideItems = [
  {
    bgImg: '/img/project-slider-img/portfolio-slider-3/portfolio-2.jpg',
    subtitle: 'Brain Lara',
    title: 'Retouch Photo',
    filterId: 'buttonFilter3'
  },
  {
    bgImg: '/img/project-slider-img/portfolio-slider-3/portfolio-1.jpg',
    subtitle: 'Jone Deo',
    title: 'Dinámica',
    filterId: 'buttonFilter4'
  },
  {
    bgImg: '/img/project-slider-img/portfolio-slider-3/portfolio-3.jpg',
    subtitle: 'Farhan Firoz',
    title: 'Lifestyle App',
    filterId: 'buttonFilter5'
  },
  {
    bgImg: '/img/project-slider-img/portfolio-slider-3/portfolio-4.jpg',
    subtitle: 'Thomas Alvi',
    title: "World's Relays",
    filterId: 'buttonFilter9'
  },
  {
    bgImg: '/img/project-slider-img/portfolio-slider-3/portfolio-5.jpg',
    subtitle: 'Benzama Khalil',
    title: 'Stickers Pack',
    filterId: 'buttonFilter6'
  },
  {
    bgImg: '/img/project-slider-img/portfolio-slider-3/portfolio-6.jpg',
    subtitle: 'Orpa Tomez',
    title: 'Diseño Gráfico',
    filterId: 'buttonFilter7'
  }
]

// Swiper options
const swiperParallaxOptions = {
  speed: 1500,
  autoplay: { delay: 5000 },
  parallax: true,
  mousewheel: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}
const modules = [Autoplay, Parallax, Mousewheel, Pagination, Navigation]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const swiperRef = ref<any>(null)

onMounted(() => {
  if (swiperRef.value && swiperRef.value.swiper) {
    const swiper = swiperRef.value.swiper

    const updateParallax = () => {
      swiper.slides.forEach((slide: HTMLElement) => {
        const bg = slide.querySelector<HTMLElement>('.tp-showcase-slider-bg')
        if (bg) {
          bg.setAttribute('data-swiper-parallax', String(0.75 * swiper.width))
        }
      })
    }

    updateParallax()
    swiper.on('resize', updateParallax)

    onBeforeUnmount(() => {
      swiper.off('resize', updateParallax)
    })
  }
});

const renderCustomBullet = (index: number, className: string) => {
  return `<span class="${className}">
    <svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">
      <circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF" stroke-opacity="1" stroke-width="1px"></circle> 
      <circle cx="8" cy="8" r="3" fill="#FFF"></circle>
    </svg>
  </span>`;
};
</script>