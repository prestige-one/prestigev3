<template>
  <div class="creative-project-area creative-project-2-style pb-120">
    <div class="container container-1580">
      <!-- Top Section -->
      <div class="creative-project-2-top">
        <div class="row align-items-end">
          <div class="col-lg-3">
            <div class="creative-project-title-box">
              <span class="tp-section-subtitle mb-20 fs-17 pre-circle tp_fade_anim" data-delay=".3">
                Work Showcase
              </span>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="creative-project-title-box">
              <h4 class="tp-section-title fs-64 tp_fade_anim" data-delay=".5">
                Discover my <br> Creative Expertise
              </h4>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="creative-project-2-btn text-lg-end tp_fade_anim"
              data-fade-from="top"
              data-delay=".3"
              data-ease="bounce"
            >
              <NuxtLink to="/about-us" class="tp-btn-black btn-green-light-bg mb-20">
                <!-- Blur Filter SVG -->
                <span class="tp-btn-black-filter-blur">
                  <svg-btn-blur-filter filter-id="buttonFilter1" />
                </span>
                <!-- Button Content -->
                <span
                  class="tp-btn-black-filter d-inline-flex align-items-center"
                  style="filter: url(#buttonFilter1)"
                >
                  <span class="tp-btn-black-text">About Agntix</span>
                  <span class="tp-btn-black-circle">
                    <svg-arrow-four/>
                  </span>
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="row gx-40">
        <div v-for="project in project_data" :key="project.id" class="col-lg-6">
          <div class="creative-project-item mb-100">
            <!-- Project Thumbnail -->
            <div class="creative-project-thumb anim-zoomin-wrap p-relative">
              <div class="anim-zoomin not-hide-cursor" data-cursor="View<br/>Demo">
                <NuxtLink class="cursor-hide" to="/portfolio-details-classic-stack">
                  <img :src="project.image" :alt="project.title">
                </NuxtLink>
              </div>
              <div class="creative-project-category">
                <span v-for="(category, index) in project.categories" :key="index">
                  {{ category }}
                </span>
              </div>
            </div>
            <!-- Project Content -->
            <div class="creative-project-content">
              <div class="creative-project-meta">
                <span>{{ project.year }}</span>
                <span>{{ project.client }}</span>
              </div>
              <h4 class="creative-project-title-sm">
                <NuxtLink class="tp-line-white" to="/portfolio-details-classic-stack">
                  {{ project.title }}
                </NuxtLink>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const project_data = [
  {
      id: 1,
      image: '/img/home-04/project/project-3.jpg',
      categories: ["Website", "SEO", "Business"],
      year: "2025",
      client: "Agntix",
      title: "Urban Green Spaces"
  },
  {
      id: 2,
      image: '/img/home-04/project/project-4.jpg',
      categories: ["Website", "SEO", "Business"],
      year: "2025",
      client: "Agntix",
      title: "Logistics Made Simple"

  },
  {
      id: 3,
      image: '/img/home-04/project/project-1.jpg',
      categories: ["Website", "SEO", "Business"],
      year: "2025",
      client: "Agntix",
      title: "AI in Healthcare"
  },
  {
      id: 4,
      image: '/img/home-04/project/project-2.jpg',
      categories: ["Website", "SEO", "Business"],
      year: "2025",
      client: "Agntix",
      title: "Social Media Impact"
  },
]
</script>