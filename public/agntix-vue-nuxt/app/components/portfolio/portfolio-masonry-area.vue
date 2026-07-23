<template>
  <div>
    <!-- portfolio masonry area start -->
    <div class="tp-portfolio-masonry-ptb pt-130">
      <div class="container container-1830">
        <div class="row">
          <div class="col-lg-12">
            <div class="tp-portfolio-masonry-heading pb-80">
              <h2 class="tp-portfolio-masonry-big-text tp-char-animation">Skill vison</h2>
            </div>
          </div>
        </div>
        <div class="tp-portfolio-masonry-wrap">
          <div class="row">
            <div class="col-xl-6 col-lg-4"/>
            <div class="col-xl-6 col-lg-8">
              <div class="tp-portfolio-masonry-top-right">
                <p>
                  A Product Designer focus on the main aim growing <br>
                  your business, while I'll make sure that your business <br>
                  is effectively represented in the digital environment <br>
                  and stands out from the competitors.
                </p>
                <div class="tp-portfolio-masonry-social">
                  <a href="#">Instagram</a>
                  <a href="#">Behance</a>
                  <a href="#">Dribbble</a>
                  <a href="#">Linkedin</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- portfolio masonry area end -->


    <!-- portfolio masonry grid start -->
    <div class="tp-portfolio-masonry-grid-ptb pt-55 pb-140">
      <div class="container container-1830">
        <div class="row">
          <div class="col-lg-12">
            <div class="tp-portfolio-masonry-grid-heading pb-40">
              <span>Featured Project:</span>
            </div>
          </div>

          <div v-for="item in masonry_data" :key="item.id" :class="item.colClass">
            <div class="tp-portfolio-masonry-grid-item mb-70">
              <div :ref="addToRefs" class="tp-portfolio-masonry-grid-thumb tp--hover-item">
                <nuxt-link href="/portfolio-details-gallery">
                  <div class="tp--hover-img" data-displacement="/img/webgl/1.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                    <img :src="item.image" :alt="item.title">
                  </div>
                </nuxt-link>
              </div>
              <div class="tp-portfolio-masonry-grid-content d-flex align-items-center justify-content-between">
                <div class="tp-portfolio-masonry-grid-left">
                  <h4 class="tp-portfolio-masonry-grid-title">
                    <nuxt-link class="tp-line-white" href="/portfolio-details-gallery">
                      {{item.title}}
                    </nuxt-link>
                  </h4>
                </div>
                <div class="tp-portfolio-masonry-grid-categories">
                  <span v-for="(c,i) in item.categories" :key="i">
                    {{ c }}
                  </span>
                </div>
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
    <!-- portfolio masonry grid end -->
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
const { addToRefs } = useHoverEffect();
const masonry_data = [
  {
    id: 1,
    image: '/img/portfolio/portfolio-masonry/portfolio-masonry-1.jpg',
    title: "Olivia Rivers",
    categories: ["Website", "Services"],
    colClass: "col-lg-6",
  },
  {
    id: 2,
    image: '/img/portfolio/portfolio-masonry/portfolio-masonry-2.jpg',
    title: "Isla Monroe",
    categories: ["Website", "Services"],
    colClass: "col-lg-6",
  },
  {
    id: 3,
    image: '/img/portfolio/portfolio-masonry/portfolio-masonry-3.jpg',
    title: "Ella Whitmore",
    categories: ["Website", "Services"],
    colClass: "col-lg-12",
  },
  {
    id: 4,
    image: '/img/portfolio/portfolio-masonry/portfolio-masonry-4.jpg',
    title: "Nora Sinclair",
    categories: ["Website", "Services"],
    colClass: "col-lg-6",
  },
  {
    id: 5,
    image: '/img/portfolio/portfolio-masonry/portfolio-masonry-5.jpg',
    title: "Hazel Quinn",
    categories: ["Website", "Services"],
    colClass: "col-lg-6",
  },
]
</script>