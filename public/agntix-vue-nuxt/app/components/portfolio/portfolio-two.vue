<template>
  <div class="st-portfolio-area st-portfolio-ptb p-relative">
    <div class="container container-1320">
      <div class="row">
        <div class="col-lg-12">
          <div class="st-portfolio-heading text-center mb-200">
            <h3 class="tp-section-title-playfair st-portfolio-title mb-20">
              WE 'VE DONE <br>
              PERFECT <span>WORKS</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container container-1830">
      <div class="row">
        <div v-for="(item) in row1Items" :key="item.id" :class="[item.colClass, item.offsetClass]">
          <div :class="`st-portfolio-item ${item.itemClass} z-index-1 mb-30`">
            <div class="st-portfolio-item-thumb">
              <NuxtLink :to="item.link">
                <img :src="item.image" alt="">
              </NuxtLink>
            </div>
            <div class="st-portfolio-item-content">
              <h4 class="st-portfolio-item-title">
                <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
              </h4>
              <div class="st-portfolio-item-btn">
                <NuxtLink class="tp-line-black" :to="item.link">
                  View case study
                  <span><svg-arrow-seven /></span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item) in row2Items" :key="item.id" :class="[item.colClass, item.offsetClass]">
          <div :class="`st-portfolio-item ${item.itemClass} z-index-1 mb-30`">
            <div class="st-portfolio-item-thumb">
              <NuxtLink :to="item.link">
                <img :src="item.image" alt="">
              </NuxtLink>
            </div>
            <div class="st-portfolio-item-content">
              <h4 class="st-portfolio-item-title">
                <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
              </h4>
              <div class="st-portfolio-item-btn">
                <NuxtLink class="tp-line-black" :to="item.link">
                  View case study
                  <span><svg-arrow-seven /></span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item) in row3Items" :key="item.id" :class="[item.colClass, item.offsetClass]">
          <div :class="`st-portfolio-item ${item.itemClass} z-index-1 mb-30`">
            <div class="st-portfolio-item-thumb">
              <NuxtLink :to="item.link">
                <img :src="item.image" alt="">
              </NuxtLink>
            </div>
            <div class="st-portfolio-item-content">
              <h4 class="st-portfolio-item-title">
                <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
              </h4>
              <div class="st-portfolio-item-btn">
                <NuxtLink class="tp-line-black" :to="item.link">
                  View case study
                  <span><svg-arrow-seven /></span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  link: string;
  colClass: string;
  offsetClass?: string;
  itemClass: string;
}

const row1Items = ref<PortfolioItem[]>([
  {
    id: 1,
    title: 'Findrs',
    image: '/img/home-12/portfolio/portfolio-thumb-1.jpg',
    link: '/portfolio-details-creative-slider',
    colClass: 'col-xl-4 col-md-6',
    itemClass: 'st-portfolio-item-1',
  },
  {
    id: 2,
    title: 'Ciphr',
    image: '/img/home-12/portfolio/portfolio-thumb-3.jpg',
    link: '/portfolio-details-creative-slider',
    colClass: 'col-xl-3 col-md-6',
    offsetClass: 'offset-xl-5',
    itemClass: 'st-portfolio-item-2'
  }
])
const row2Items = ref<PortfolioItem[]>([
  {
    id: 3,
    title: 'Akash',
    image: '/img/home-12/portfolio/portfolio-thumb-2.jpg',
    link: '/portfolio-details-creative-slider',
    colClass: 'col-xxl-2 col-xl-3 col-md-6',
    offsetClass: 'offset-xxl-4',
    itemClass: 'st-portfolio-item-3'
  },
  {
    id: 4,
    title: 'FTA',
    image: '/img/home-12/portfolio/portfolio-thumb-5.jpg',
    link: '/portfolio-details-creative-slider',
    colClass: 'col-xl-3 col-md-6',
    offsetClass: 'offset-xl-3',
    itemClass: 'st-portfolio-item-5',
  }
])
const row3Items = ref<PortfolioItem[]>([
  {
    id: 5,
    title: 'ContentCal',
    image: '/img/home-12/portfolio/portfolio-thumb-4.jpg',
    link: '/portfolio-details-creative-slider',
    colClass: 'col-xl-3 col-md-6',
     itemClass: 'st-portfolio-item-4',
  },
  {
    id: 6,
    title: 'Propstore',
    image: '/img/home-12/portfolio/portfolio-thumb-6.jpg',
    link: '/portfolio-details-creative-slider',
    colClass: 'col-xl-7 col-md-6',
    offsetClass: 'offset-xl-2',
    itemClass: 'st-portfolio-item-6',
  }
])
</script>