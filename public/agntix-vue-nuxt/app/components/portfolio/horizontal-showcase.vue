<template>
  <div class="parallax-slider-wrapper">
    <div class="parallax-sliders">
      <div class="parallax-slider-inner">
        <div
          v-for="(item, index) in sliderData"
          :key="index"
          class="parallax-item not-hide-cursor"
          data-cursor="View<br>Demo"
        >
          <NuxtLink class="cursor-hide" :to="item.href">
            <div class="parallax-content">
              <span>{{ item.category }}</span>
              <h4>{{ item.title }}</h4>
            </div>
            <div
              class="parallax-img"
              :data-src="item.img"
              :style="{ backgroundImage: `url(${item.img})` }"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface SliderItem {
  category: string
  title: string
  img: string
  href: string
}

const sliderData: SliderItem[] = [
  {
    category: 'Branding',
    title: 'Brand some',
    img: '/img/project-slider-img/portfolio-slider-5/port-1.jpg',
    href: '/portfolio-details-creative-slider'
  },
  {
    category: 'Digital',
    title: 'Digital Thinker',
    img: '/img/project-slider-img/portfolio-slider-5/port-2.jpg',
    href: '/portfolio-details-creative-slider'
  },
  {
    category: 'Markus',
    title: 'Markus Erickson',
    img: '/img/project-slider-img/portfolio-slider-5/port-5.jpg',
    href: '/portfolio-details-creative-slider'
  },
  {
    category: 'Emko',
    title: 'Emko Furniture',
    img: '/img/project-slider-img/portfolio-slider-5/port-6.jpg',
    href: '/portfolio-details-creative-slider'
  },
  {
    category: 'Branding',
    title: 'Brand some',
    img: '/img/project-slider-img/portfolio-slider-5/port-3.jpg',
    href: '/portfolio-details-creative-slider'
  },
  {
    category: 'Craig',
    title: 'Craig Reynolds',
    img: '/img/project-slider-img/portfolio-slider-5/port-4.jpg',
    href: '/portfolio-details-creative-slider'
  },
  {
    category: 'Green',
    title: 'Green Reel',
    img: '/img/project-slider-img/portfolio-slider-5/port-7.jpg',
    href: '/portfolio-details-creative-slider'
  }
];

</script>