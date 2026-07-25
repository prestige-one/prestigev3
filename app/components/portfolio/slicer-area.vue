<template>
  <div class="tp-portfolio-slicer-area pt-170">
    <div class="container container-1720">
      <div class="row">
        <div class="col-xl-12">
          <div
            v-for="(item, index) in projectsData"
            :key="index"
            class="tp-portfolio-slicer-wrap"
          >
            <div class="row">
              <!-- Left Image -->
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="tp-portfolio-slicer-thumb pro-img-1">
                  <img
                    :src="item.leftImg"
                    :alt="item.title"
                  >
                </div>
              </div>

              <!-- Content -->
              <div class="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                <div class="tp-portfolio-slicer-content text-center">
                  <div
                    class="tp-portfolio-slicer-meta-box d-flex justify-content-center"
                  >
                    <span class="tp-portfolio-slicer-meta">
                      {{ item.date }}
                    </span>
                    <span class="tp-portfolio-slicer-meta">
                      {{ item.category }}
                    </span>
                  </div>
                  <h4 class="tp-portfolio-slicer-title-sm">
                    <NuxtLink to="/portfolio-details-creative-slider">
                      <span
                        v-for="(word, i) in item.title.split(' ')"
                        :key="i"
                      >
                        {{ word }} <br>
                      </span>
                    </NuxtLink>
                  </h4>
                  <NuxtLink
                    class="tp-btn-white-border tp-btn-transparent"
                    to="/portfolio-details-creative-slider"
                  >
                    Get Started
                  </NuxtLink>
                </div>
                <div
                  class="tp-portfolio-slicer-border color-1 text-center"
                >
                  <span/>
                </div>
              </div>

              <!-- Right Image -->
              <div class="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                <div class="tp-portfolio-slicer-thumb pro-img-2">
                  <img
                    :src="item.rightImg"
                    :alt="item.title"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projectsData = [
  {
    leftImg: "/img/home-03/portfolio/port-1.jpg",
    rightImg: "/img/home-03/portfolio/port-2.jpg",
    date: "DEC 2025",
    category: "Creative",
    title: "Pellente dapibus"
  },
  {
    leftImg: "/img/home-03/portfolio/port-3.jpg",
    rightImg: "/img/home-03/portfolio/port-4.jpg",
    date: "DEC 2025",
    category: "Creative",
    title: "Stickers Pack"
  },
  {
    leftImg: "/img/home-03/portfolio/port-5.jpg",
    rightImg: "/img/home-03/portfolio/port-6.jpg",
    date: "DEC 2025",
    category: "Creative",
    title: "Diseno Grafico"
  },
  {
    leftImg: "/img/home-03/portfolio/port-7.jpg",
    rightImg: "/img/home-03/portfolio/port-8.jpg",
    date: "DEC 2025",
    category: "Creative",
    title: "Bright Captive"
  },
];
</script>
