<template>
  <div class="tp-project-5-2-area pt-120 pb-130 z-index-1" :class="{'coffe-bg': isDark }">
    <div class="container container-1800">
      <!-- Title -->
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-project-5-2-title-box mb-170 text-center">
            <h4 class="tp-project-5-2-title">Portfolio</h4>
          </div>
        </div>
      </div>

      <!-- Portfolio Rows -->
      <div class="tp-project-5-2-wrap z-index-1">
        <!-- Row 1 -->
        <div class="tp-project-5-2-item-wrap">
          <div class="row align-items-center justify-content-between">
            <div
              v-for="item in row1Items"
              :key="item.id"
              :class="item.colClass"
            >
              <NuxtLink :to="item.link" class="cursor-hide">
                <div
                  class="tp-project-5-2-item not-hide-cursor"
                  :class="{ 'space-left': item.hasSpaceLeft }"
                  data-cursor="View<br>Demo"
                >
                  <div class="tp-project-5-2-thumb">
                    <img :src="item.image" :alt="item.title">
                  </div>
                  <div class="tp-project-5-2-content">
                    <span>{{ item.category }}</span>
                    <h4 class="tp-project-5-2-title-sm">{{ item.title }}</h4>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="tp-project-5-2-item-wrap">
          <div class="row align-items-center justify-content-between">
            <div
              v-for="item in row2Items"
              :key="item.id"
              :class="item.colClass"
            >
              <NuxtLink :to="item.link" class="cursor-hide">
                <div
                  class="tp-project-5-2-item not-hide-cursor"
                  :class="{ 'space-left': item.hasSpaceLeft }"
                  data-cursor="View<br>Demo"
                >
                  <div class="tp-project-5-2-thumb">
                    <img :src="item.image" :alt="item.title">
                  </div>
                  <div class="tp-project-5-2-content">
                    <span>{{ item.category }}</span>
                    <h4 class="tp-project-5-2-title-sm">{{ item.title }}</h4>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Row 3 -->
        <div class="tp-project-5-2-item-wrap">
          <div class="row align-items-center justify-content-between">
            <div
              v-for="item in row3Items"
              :key="item.id"
              :class="item.colClass"
            >
              <NuxtLink :to="item.link" class="cursor-hide">
                <div
                  class="tp-project-5-2-item not-hide-cursor"
                  :class="{ 'space-left': item.hasSpaceLeft }"
                  data-cursor="View<br>Demo"
                >
                  <div class="tp-project-5-2-thumb">
                    <img :src="item.image" :alt="item.title">
                  </div>
                  <div class="tp-project-5-2-content">
                    <span>{{ item.category }}</span>
                    <h4 class="tp-project-5-2-title-sm">{{ item.title }}</h4>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- See More Button -->
      <div class="row justify-content-center">
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="tp-project-5-2-btn text-center p-relative">
            <div class="tp-project-5-2-shape d-none d-lg-block">
              <span>
                <svg width="205" height="209" viewBox="0 0 205 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9992 110.499C79.4994 235.001 90.4995 23.4983 192.778 88.2089" stroke="#CFC292" stroke-width="1.5" />
                    <path d="M191.52 76.8785C188.858 81.4883 190.33 87.3118 194.811 89.8989" stroke="#CFC292" stroke-width="1.5" stroke-miterlimit="10" />
                    <path d="M194.814 89.8969C190.333 87.3098 184.553 88.9466 181.892 93.5563" stroke="#CFC292" stroke-width="1.5" stroke-miterlimit="10" />
                </svg>
              </span>
            </div>
            <NuxtLink to="/portfolio-col-3">
              SEE MORE PROJECTS
              <span>
                <svg-arrow-up-seven/>
                <svg-arrow-up-seven/>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup lang="ts">
const {isDark} = useIsDark();
interface PortfolioItem {
  id: number;
  image: string;
  category: string;
  title: string;
  colClass: string;
  link: string;
  hasSpaceLeft?: boolean;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 11,
    image: "/img/home-15/project-2/project-1.jpg",
    category: "Modelling - 2025",
    title: "Hannah & John",
    colClass: "col-xxl-3 col-xl-4 col-lg-6 col-md-6",
    link: "/portfolio-details-modern",
  },
  {
    id: 12,
    image: "/img/home-15/project-2/project-2.jpg",
    category: "Modelling - 2025",
    title: "Siyantika Glory",
    colClass: "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
    link: "/portfolio-details-modern",
  },
  {
    id: 13,
    image: "/img/home-15/project-2/project-3.jpg",
    category: "Modelling - 2025",
    title: "Out of this world",
    colClass: "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
    hasSpaceLeft: true,
    link: "/portfolio-details-modern",
  },
  {
    id: 14,
    image: "/img/home-15/project-2/project-4.jpg",
    category: "Modelling - 2025",
    title: "Album cover",
    colClass: "col-xxl-3 col-xl-4 col-lg-5 col-md-6",
    link: "/portfolio-details-modern",
  },
  {
    id: 15,
    image: "/img/home-15/project-2/project-5.jpg",
    category: "Modelling - 2025",
    title: "The Smiths",
    colClass: "col-xxl-3 col-xl-4 col-lg-6 col-md-6",
    link: "/portfolio-details-modern",
  },
  {
    id: 16,
    image: "/img/home-15/project-2/project-6.jpg",
    category: "Modelling - 2025",
    title: "Digital Paintings",
    colClass: "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
    link: "/portfolio-details-modern",
  },
];

// Group items into rows
const row1Items = portfolioData.slice(0, 2);
const row2Items = portfolioData.slice(2, 4); 
const row3Items = portfolioData.slice(4, 6); 
</script>