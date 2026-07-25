<template>
  <div class="tp-project-area pt-200 pb-60">
      <div class="container">
          <div class="tp-project-title-box mb-50">
              <div class="row">
                  <div class="col-md-6">
                      <div class="tp-project-subtitle-wrap">
                          <span class="tp-section-subtitle pre">Featured Projects</span>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="tp-project-link text-start text-md-end">
                          <nuxt-link href="/portfolio-col-3" class="tp-btn-black btn-red-bg">
                              <span class="tp-btn-black-filter-blur">
                                  <svg-btn-blur-filter filter-id='buttonFilter6' />
                              </span>
                              <span class="tp-btn-black-filter d-inline-flex align-items-center" style="filter: url(#buttonFilter6)">
                                  <span class="tp-btn-black-text">View all Works</span>
                                  <span class="tp-btn-black-circle">
                                      <svg-arrow-one />
                                  </span>
                              </span>
                          </nuxt-link>
                      </div>
                  </div>
              </div>
          </div>
          <!-- Display the list of featured project cards -->
          <div class="row gx-135">
              <!-- Left Column -->
              <div class="col-md-6">
                <project-item
                  v-for="project in left_col_projects"
                  :key="project.id"
                  :project="project"
                  :add-to-refs="addToRefs"
                />
              </div>

              <!-- Right Column -->
              <div class="col-md-6">
                <project-item
                  v-for="project in right_col_projects"
                  :key="project.id"
                  :project="project"
                  :add-to-refs="addToRefs"
                />
              </div>
            </div>
          <!-- End Project Item -->
      </div>
  </div>
</template>

<script setup lang="ts">
const { addToRefs } = useHoverEffect()
const project_data = [
  {
      id: 1,
      title: "Acme Studio",
      image: '/img/home-01/project/project-1.jpg',
      categories: ["Product Design", "Branding", "Creative"],
      link: "/portfolio-details-gallery",
  },
  {
      id: 2,
      title: "Digital Farming",
      image: '/img/home-01/project/project-4.jpg',
      categories: ["Product Design", "Branding", "Creative"],
      link: "/portfolio-details-gallery",

  },
  {
      id: 3,
      title: "Grace Clinic",
      image: '/img/home-01/project/project-2.jpg',
      categories: ["Creative", "Branding", "Development"],
      link: "/portfolio-details-gallery",
  },
  {
      id: 4,
      title: "Virtual Reality",
      image: '/img/home-01/project/project-5.jpg',
      categories: ["Product Design", "Branding", "Creative"],
      link: "/portfolio-details-gallery",
  },
  {
      id: 5,
      title: "Smart Cities",
      image: '/img/home-01/project/project-3.jpg',
      categories: ["Product Design", "Branding", "Creative"],
      link: "/portfolio-details-gallery",
  },
  {
      id: 6,
      title: "Cloud Computing",
      image: '/img/home-01/project/project-6.jpg',
      categories: ["Product Design", "Branding", "Creative"],
      link: "/portfolio-details-gallery",
  },
];

const left_col_projects = project_data.filter((_, index) => index % 2 === 0)
const right_col_projects = project_data.filter((_, index) => index % 2 !== 0)
</script>