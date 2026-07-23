<template>
  <main>
    <div ref="sliderRef" class="tp-portfolio-slider__main fix">
      <!-- Contact info -->
      <div class="tp-portfolio-slider__copyright d-none d-lg-block">
        <p>
          Have a project in mind?
          <NuxtLink to="#">Let's Talk.</NuxtLink>
        </p>
      </div>

      <div class="tp-portfolio-slider__mail d-none d-sm-block">
        <a href="mailto:agntix@gmail.com">agntix@gmail.com</a>
      </div>

      <div class="tp-portfolio-slider__social d-none d-sm-block">
        <NuxtLink to="#">Fb</NuxtLink>
        <NuxtLink to="#">In</NuxtLink>
        <NuxtLink to="#">Be</NuxtLink>
      </div>

      <!-- Main slider (background images) -->
      <div ref="sliderBGRef" class="tp-portfolio-slider__wrap slider slider--bg">
        <div
          v-for="item in portfolioThumbSliderItems"
          :key="`main-${item.id}`"
          class="tp-portfolio-slider__item"
        >
          <div
            class="tp-portfolio-slider__item-inner"
            :style="{ backgroundImage: `url(${item.image})` }"
          />
        </div>
      </div>

      <!-- Small slider (foreground images) -->
      <div ref="sliderFGRef" class="tp-portfolio-slider__wrap tp-portfolio-slider-small__wrap slider slider--fg">
        <div
          v-for="item in portfolioThumbSliderItems"
          :key="`small-${item.id}`"
          class="tp-portfolio-slider__item"
        >
          <div
            class="tp-portfolio-slider__item-inner"
            :style="{ backgroundImage: `url(${item.smallImage})` }"
          />
        </div>
      </div>

      <!-- Portfolio names -->
      <div class="tp-portfolio-slider-type">
        <div
          v-for="(item, index) in portfolioThumbSliderItems"
          :key="`name-${item.id}`"
          :ref="el => { if (el) titlesRef[index] = el as HTMLDivElement }"
          class="type__item"
        >
          <h4 class="tp-portfolio-slider-type-title">
            <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
          </h4>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="slider-nav mb-80">
        <button
          ref="prevBtnRef"
          class="slider-nav__item slider-nav__item--prev d-flex align-items-center ml-100"
          aria-label="Previous slide"
        >
          <span class="icon-1">
            <svg-arrow-slide-prev/>
          </span>
          <span class="slider-nav-text ml-5">Prev</span>
        </button>

        <button
          ref="nextBtnRef"
          class="slider-nav__item slider-nav__item--next d-flex align-items-center mr-100"
          aria-label="Next slide"
        >
          <span class="slider-nav-text mr-5">Next</span>
          <span class="icon-2">
            <svg-arrow-slide-next/>
          </span>
        </button>
      </nav>
    </div>
  </main>
</template>


<script setup lang="ts">
const { sliderRef, sliderBGRef, sliderFGRef, titlesRef, nextBtnRef, prevBtnRef } = useSlideshowPortfolio();
const portfolioThumbSliderItems = [
    {
        id: 1,
        image: '/img/project-slider-img/cr-slider-6.jpg',
        smallImage: '/img/project-slider-img/cr-slider-small-6.jpg',
        name: 'Jon Piterson',
        link: '/portfolio-details-image-comparison'
    },
    {
        id: 2,
        image: '/img/project-slider-img/cr-slider-7.jpg',
        smallImage: '/img/project-slider-img/cr-slider-small-7.jpg',
        name: 'Jean Gomez',
        link: '/portfolio-details-image-comparison'
    },
    {
        id: 3,
        image: '/img/project-slider-img/cr-slider-8.jpg',
        smallImage: '/img/project-slider-img/cr-slider-small-8.jpg',
        name: 'Katia Ivanova',
        link: '/portfolio-details-image-comparison'
    },
    {
        id: 4,
        image: '/img/project-slider-img/cr-slider-9.jpg',
        smallImage: '/img/project-slider-img/cr-slider-small-9.jpg',
        name: 'Adaora Musa',
        link: '/portfolio-details-image-comparison'
    },
    {
        id: 5,
        image: '/img/project-slider-img/cr-slider-10.jpg',
        smallImage: '/img/project-slider-img/cr-slider-small-10.jpg',
        name: 'Mia Tobez',
        link: '/portfolio-details-image-comparison'
    },
    {
        id: 6,
        image: '/img/project-slider-img/cr-slider-1.jpg',
        smallImage: '/img/project-slider-img/cr-slider-small-1.jpg',
        name: 'Anni Marire',
        link: '/portfolio-details-image-comparison'
    }
];
</script>