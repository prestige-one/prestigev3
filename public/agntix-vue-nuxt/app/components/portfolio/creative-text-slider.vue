<template>
  <!-- <client-only> -->
    <main>
      <div ref="sliderRef" class="tp-portfolio-slider__main tp-portfolio-slider__style-2 fix">

        <!-- Copyright -->
        <div class="tp-portfolio-slider__copyright">
          <p>We love to create©{{ new Date().getFullYear() }}</p>
        </div>

        <!-- Contact Mail -->
        <div class="tp-portfolio-slider__mail">
          <a href="mailto:agntix@gmail.com">agntix@gmail.com</a>
        </div>

        <!-- Social Links -->
        <div class="tp-portfolio-slider__social">
          <a href="#">Fb</a>
          <a href="#">In</a>
          <a href="#">Be</a>
        </div>

        <!-- Main Slider -->
        <div ref="sliderBGRef" class="tp-portfolio-slider__wrap slider slider--bg">
          <div
            v-for="(item, index) in textSliderItems"
            :key="index"
            class="tp-portfolio-slider__item"
          >
            <div
              class="tp-portfolio-slider__item-inner"
              :style="{ backgroundImage: `url(${item.bgImage})` }"
            />
          </div>
        </div>

        <!-- Small Slider (hidden) -->
        <div
          ref="sliderFGRef"
          class="tp-portfolio-slider__wrap tp-portfolio-slider-small__wrap slider slider--fg d-none"
        >
          <div
            v-for="(item, index) in textSmallSliderItems"
            :key="index"
            class="tp-portfolio-slider__item"
          >
            <div
              class="tp-portfolio-slider__item-inner"
              :style="{ backgroundImage: `url(${item.bgImage})` }"
            />
          </div>
        </div>

        <!-- Portfolio Items -->
        <div class="tp-portfolio-slider-type">
          <div
            v-for="(item, index) in textPortfolioItems"
            :key="index"
            :ref="el => { if (el) titlesRef[index] = el as HTMLDivElement }"
            class="type__item"
          >
            <h4 class="tp-portfolio-slider-type-title">
              <NuxtLink to="/portfolio-details-classic-stack">
                {{ item.name }}
              </NuxtLink>
            </h4>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="slider-nav mb-80">
          <button
            ref="prevBtnRef"
            class="slider-nav__item slider-nav__item--prev d-flex align-items-center ml-100"
          >
            <span class="icon-1">
              <svg-arrow-slide-prev/>
            </span>
            <span class="slider-nav-text ml-5">Prev</span>
          </button>
          <button
            ref="nextBtnRef"
            class="slider-nav__item slider-nav__item--next d-flex align-items-center mr-100"
          >
            <span class="slider-nav-text mr-5">Next</span>
            <span class="icon-2">
              <svg-arrow-slide-next/>
            </span>
          </button>
        </nav>
      </div>
    </main>
  <!-- </client-only>   -->
</template>

<script setup lang="ts">
// Data arrays
const textSliderItems = [
  { bgImage: '/img/project-slider-img/cr-slider-7.jpg' },
  { bgImage: '/img/project-slider-img/cr-slider-1.jpg' },
  { bgImage: '/img/project-slider-img/cr-slider-6.jpg' },
  { bgImage: '/img/project-slider-img/cr-slider-8.jpg' },
  { bgImage: '/img/project-slider-img/cr-slider-9.jpg' }
]

const textSmallSliderItems = [
  { bgImage: '/img/project-slider-img/6-small.jpg' },
  { bgImage: '/img/project-slider-img/7-small.jpg' },
  { bgImage: '/img/project-slider-img/8-small.jpg' },
  { bgImage: '/img/project-slider-img/9-small.jpg' },
  { bgImage: '/img/project-slider-img/10-small.jpg' }
]

const textPortfolioItems = [
  { name: 'Farhan Firoz' },
  { name: 'Jean Gomez' },
  { name: 'Katia Ivanova' },
  { name: 'Adaora Musa' },
  { name: 'Mia Petković' }
]

// Slider refs from composable
const {
  sliderRef,
  sliderBGRef,
  sliderFGRef,
  titlesRef,
  nextBtnRef,
  prevBtnRef
} = useSlideshowPortfolio()
</script>