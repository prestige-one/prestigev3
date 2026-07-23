<template>
  <div class="ar-project-area pt-150 pb-55">
    <div class="container container-1430">
      <!-- Title Section -->
      <div class="ar-project-title-wrap ar-title-mlr mb-65">
        <div class="row align-items-end">
          <div class="col-xl-6 col-lg-8 col-md-7">
            <div class="ar-project-title-box">
              <span
                class="tp-section-subtitle-satisfy mb-20 tp_fade_anim"
                data-delay=".3"
              >
                Latest Project
              </span>
              <h3
                class="tp-section-title-clash-600 mb-0 tp_fade_anim"
                data-delay=".4"
              >
                Selected <br>
                case studies
              </h3>
            </div>
          </div>
          <div class="col-xl-6 col-lg-4 col-md-5">
            <div
              class="ar-project-btn-box d-flex justify-content-md-end justify-content-start mb-15"
            >
              <div
                class="tp-btn-red-circle-box tp_fade_anim"
                data-delay=".4"
                data-fade-from="top"
                data-ease="bounce"
              >
                <NuxtLink class="tp-btn-red-circle-icon" to="/portfolio-col-3">
                  <span><svg-arrow-two /></span>
                </NuxtLink>
                <NuxtLink class="tp-btn-red-circle-text" to="/portfolio-col-3">
                  all projects
                </NuxtLink>
                <NuxtLink class="tp-btn-red-circle-icon" to="/portfolio-col-3">
                  <span><svg-arrow-two /></span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project List -->
      <div class="row gx-40">
        <div
          v-for="project in project_data"
          :key="project.id"
          class="col-md-6"
        >
          <div class="ar-project-item mb-60">
            <div
              class="ar-project-category d-flex align-items-center justify-content-between"
            >
              <span>{{ project.title }}</span>
              <i>{{ project.year }}</i>
            </div>

            <div
              class="ar-project-thumb not-hide-cursor"
              data-cursor="View<br>Demo"
            >
              <NuxtLink class="cursor-hide" to="/portfolio-details-classic-stack">
                <img
                  v-if="project.image"
                  :src="project.image"
                  alt="project img"
                >
              </NuxtLink>
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
    title: 'Interior design',
    year: '2025',
    image: '/img/home-08/project/project-1.jpg',
  },
  {
    id: 2,
    title: 'Stylish Interior',
    year: '2025',
    image: '/img/home-08/project/project-2.jpg',
  },
  {
    id: 3,
    title: 'Interior Transformation',
    year: '2025',
    image: '/img/home-08/project/project-3.jpg',
  },
  {
    id: 4,
    title: 'Interior Spaces',
    year: '2025',
    image: '/img/home-08/project/project-4.jpg',
  },
]
</script>
