<template>
  <div class="studio-project-area studio-project-ptb pb-60">
    <div class="container container-1830">
      <!-- Top Section -->
      <div class="studio-project-top-wrap mb-70">
        <div class="row">
          <div class="col-xxl-4 col-xl-2">
            <div class="studio-project-subtitle-box">
              <h3 :class="`tp-section-subtitle-clash ${subtitleTextClr} mb-0`">
                Our <br> case studies
                <i>
                  <svg-arrow-one
                    width="102"
                    height="9"
                    viewBox="0 0 102 9"
                    path-value="M98 8L101.5 4.5L98 1M1 4H101V5H1V4Z"
                    stroke-width="1.5"
                  />
                </i>
              </h3>
            </div>
          </div>
          <div class="col-xxl-8 col-xl-10">
            <div class="studio-project-title-wrap">
              <div class="row align-items-end">
                <div class="col-xl-8 col-lg-9">
                  <div class="studio-project-title-box">
                    <h3 class="tp-section-title-clash mb-0 tp-text-revel-anim">
                      OUR RECENT PROJECTS
                    </h3>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-3">
                  <div class="studio-project-btn text-start text-lg-end">
                    <NuxtLink class="tp-btn-red-border" to="/portfolio-col-3">
                      Explore work
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- End Top Section -->

      <!-- Project Items -->
      <div class="studio-project-wrap">
        <div
          v-for="project in project_data"
          :key="project.id"
          class="studio-project-item mb-80"
        >
          <div class="row">
            <div class="col-xl-4">
              <div class="studio-project-content-wrap d-flex align-items-start">
                <div class="studio-project-number">
                  <span>{{ project.id > 9 ? project.id : '0' + project.id }}</span>
                  <i>
                    <svg-arrow-one
                      width="202"
                      height="9"
                      viewBox="0 0 202 9"
                      path-value="M198 8L201.5 4.5L198 1M1 4H201V5H1V4Z"
                      stroke-width="1.5"
                    />
                  </i>
                </div>
                <div class="studio-project-content">
                  <h4 class="studio-project-title-sm">
                    <NuxtLink to="/portfolio-details-gallery">
                      {{ project.title }}
                    </NuxtLink>
                  </h4>
                  <span>{{ project.services }}</span>
                </div>
              </div>
            </div>

            <div class="col-xl-8">
              <div class="not-hide-cursor" :data-cursor="showDataCursor ? 'View<br>Demo' : ''">
                <NuxtLink class="cursor-hide" to="/portfolio-details-gallery">
                  <div class="studio-project-thumb">
                    <img
                      :src="project.image"
                      :alt="project.title"
                    >
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- End Project Items -->
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
    showDataCursor?: boolean;
    subtitleTextClr?: string;
}
withDefaults(defineProps<Props>(), {
    showDataCursor: true,
    subtitleTextClr: 'color-red',
});

const project_data = [
  {
    id: 1,
    title: 'Simple Logistics',
    services: 'Supply Chain Platform',
    image: '/img/home-06/project/project-2.jpg',
  },
  {
    id: 2,
    title: 'Made Logistics',
    services: 'Enterprise Solution',
    image: '/img/home-06/project/project-3.jpg',
  },
  {
    id: 3,
    title: 'UX Design System',
    services: 'Design Framework',
    image: '/img/home-06/project/project-4.jpg',
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    services: 'Fintech Solution',
    image: '/img/home-06/project/project-1.jpg',
  },
]
</script>