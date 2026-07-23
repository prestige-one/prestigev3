<template>
   <div :class="`des-portfolio-area ${spacing}`">
      <div class="container container-1750">
        <div class="row">
          <div class="col-xl-12">
            <div class="des-portfolio-wrap">

              <div
                v-for="item in portfolio_data"
                :key="item.id"
                class="des-portfolio-item des-portfolio-panel p-relative not-hide-cursor mb-30">
                <nuxt-link :href="item.link" class="cursor-hide">
                    <div class="des-portfolio-thumb p-relative">
                        <img
                            :src="item.image"
                            alt="portfolio-image"
                        >
                    </div>
                    <div class="des-portfolio-category">
                        <span v-for="(category, index) in item.categories" :key="index">
                          {{category}}
                        </span>
                    </div>
                    <div class="des-portfolio-category portfolio-meta">
                        <span>{{item.year}}</span>
                    </div>
                </nuxt-link>
                  <div class="des-portfolio-content">
                      <h2 class="des-portfolio-title">
                          <nuxt-link :href="item.link">{{item.title}}</nuxt-link>
                      </h2>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  spacing?: string;
}>(), {
  spacing: 'pb-160'
});
const portfolio_data = [
  {
    id: 1,
    image: '/img/home-02/portfolio/portfolio-1.jpg',
    categories: ["Web Design", "Web Development"],
    year: "2025",
    title: "Electro Hub",
    link: "/portfolio-details-creative-slider",
  },
  {
    id: 2,
    image: '/img/home-02/portfolio/portfolio-2.jpg',
    categories: ["Web Design", "Web Development"],
    year: "2025",
    title: "Creative Vision",
    link: "/portfolio-details-creative-slider",
  },
  {
    id: 3,
    image: '/img/home-02/portfolio/portfolio-3.jpg',
    categories: ["Web Design", "Web Development"],
    year: "2025",
    title: "Design Essence",
    link: "/portfolio-details-creative-slider",
  },
  {
    id: 4,
    image: '/img/home-02/portfolio/portfolio-4.jpg',
    categories: ["Web Design", "Web Development"],
    year: "2025",
    title: "Innovative Works",
    link: "/portfolio-details-creative-slider",
  },
];
</script>