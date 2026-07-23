
<template>
  <div :class="`crp-project-area tp-panel-pin-area ${spacing}`">
      <div class="container container-1330">
          <div class="row">
              <div class="col-xl-5">
                  <div class="crp-project-title-box tp-panel-pin">
                      <h4 class="tp-section-title-teko fs-150 mb-50 tp_fade_anim" data-delay=".3">Our recent <span>projects</span></h4>
                      <div class="tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                          <nuxt-link class="tp-btn-yellow-border" href="/portfolio-col-3">
                              <span>
                                  <span class="text-1">See All Projects</span>
                                  <span class="text-2">See All Projects</span>
                              </span>
                          </nuxt-link>
                      </div>
                  </div>
              </div>
              <div class="col-xl-7">
                  <div class="crp-project-right">
                      <div v-for="project in project_data" :key="project.id" class="crp-project-item tp-panel-pin mb-40">
                          <div class="crp-project-meta d-flex justify-content-between align-items-center">
                              <span>
                                {{ project.id > 9 ? project.id : '0' + project.id }}
                              </span>
                              <span>{{ project.year }}</span>
                          </div>
                          <div class="crp-project-thumb text-center" data-background="/img/home-09/project/project-img-bg-shape.png" style="background-image: url(/img/home-09/project/project-img-bg-shape.png);">
                              <img :src="project.image" alt="project img">
                          </div>
                          <div class="crp-project-content">
                              <h4 class="crp-project-title-sm mb-15">
                                <nuxt-link class="tp-line-white green" href="/portfolio-details-gallery">
                                  <span v-html="sanitizeHtml(project.title)"/>
                                </nuxt-link>
                              </h4>
                              <div class="crp-project-category">
                                  <a v-for="(c,i) in project.categories" :key="i" href="#">  {{ c }}
                                  </a>
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
withDefaults(defineProps<{spacing?: string}>(), {
  spacing:'pt-100 mb-150'
})
const project_data = [
  {
    id: 1,
    year: '2025',
    image: '/img/home-09/project/project-1.png',
    title: 'A clean and minimal website <br> design template.',
    categories: ['Website', 'Business'],
  },
  {
    id: 2,
    year: '2025',
    image: '/img/home-09/project/project-2.png',
    title: 'Sleek and Simple Website <br>Template',
    categories: ['Website', 'Business'],
  },
  {
    id: 3,
    year: '2025',
    image: '/img/home-09/project/project-3.png',
    title: 'Minimalist Web Design <br> Framework',
    categories: ['Website', 'Business'],
  },
  {
    id: 4,
    year: '2025',
    image: '/img/home-09/project/project-4.png',
    title: 'Modern Minimal Web <br> Design Template',
    categories: ['Website', 'Business'],
  },
]
</script>