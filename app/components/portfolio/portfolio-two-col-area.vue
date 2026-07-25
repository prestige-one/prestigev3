<template>
  <div class="tp-portfolio-inner-ptb pb-120">
      <div class="container container-1430">
          <div class="tp-portfolio-tab-content-wrap">
              <div class="row">
                  <div v-for="item in portfolio_data" :key="item.id" class="col-md-6">
                      <div class="tp-portfolio-inner-item mb-65">
                          <div :ref="addToRefs" class="tp-portfolio-inner-thumb tp--hover-item">
                              <nuxt-link href="/portfolio-details-gallery">
                                  <div class=" tp--hover-img" data-displacement="/img/webgl/1.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                                      <img :src="item.image" :alt="item.title">
                                  </div>
                              </nuxt-link>
                          </div>
                          <div class="tp-portfolio-inner-content">
                              <h4 class="tp-portfolio-inner-title">
                                <nuxt-link class="tp-line-white" href="/portfolio-details-gallery">  
                                  {{item.title}}
                                </nuxt-link>
                              </h4>
                              <span>{{ item.category }}</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row justify-content-center">
                  <div class="col-md-8">
                      <div class="tp-portfolio-masonry-grid-bottom">
                          <a class="tp-btn-animation" href="#">
                              <span v-for="i in 5" :key="i">Load more Projects 
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                      <path d="M6.5 1V12M6.5 12L12 6.5M6.5 12L1 6.5" :stroke="isDark?'#fff':'black'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                              </span>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
const { addToRefs } = useHoverEffect();

const portfolio_data = [
  {
    id: 1,
    image: '/img/portfolio/portfolio-col-2/portfolio-thumb-1.jpg',
    title: "Olivia Rivers",
    category: "Branding - 2025",
  },
  {
    id: 2,
    image: '/img/portfolio/portfolio-col-2/portfolio-thumb-2.jpg',
    title: "Corporate Branding",
    category: "Branding - 2025",
  },
  {
    id: 3,
    image: '/img/portfolio/portfolio-col-2/portfolio-thumb-3.jpg',
    title: "Pastel Ladies",
    category: "Branding - 2025",
  },
  {
    id: 4,
    image: '/img/portfolio/portfolio-col-2/portfolio-thumb-4.jpg',
    title: "Taller Alvarado",
    category: "Branding - 2025",
  },
  {
    id: 5,
    image: '/img/portfolio/portfolio-col-2/portfolio-thumb-5.jpg',
    title: "Simple Logistics",
    category: "Branding - 2025",
  },
  {
    id: 6,
    image: '/img/portfolio/portfolio-col-2/portfolio-thumb-6.jpg',
    title: "Electro Hub",
    category: "Branding - 2025",
  },
]
</script>