<template>
  <div id="down" class="pp-project-area pp-project-ptb z-index-1 pt-160 pb-100">
      <div class="container container-1430">
          <div class="row">
              <div class="col-xxl-3 col-xl-12 col-md-4">
                  <div class="pp-project-sub-heading mb-70 tp_fade_anim" data-delay=".3">
                      <span class="tp-section-subtitle-clash clash-subtitle-pos body-ff">
                          Work Showcase
                          <i>
                              <svg width="102" height="9" viewBox="0 0 102 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M98 8L101.5 4.5L98 1M1 4H101V5H1V4Z" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                          </i>
                      </span>
                  </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-md-8">
                  <div class="pp-project-heading mb-70 tp_fade_anim" data-delay=".5">
                      <h3 class="tp-section-title-teko fs-120">
                        Discover my <br>Creative Expertise
                      </h3>
                  </div>
              </div>
              <div class="col-xxl-3 col-xl-6 col-md-6">
                  <div class="pp-project-btn pb-90">
                      <div class="tp-btn-red-circle-box tp-pp-btn-style tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                          <nuxt-link class="tp-btn-red-circle-icon" href="/portfolio-masonry">
                              <span>
                                  <svg-arrow-up-five stroke="currentcolor" stroke-width="1.5"/>
                              </span>
                          </nuxt-link>
                          <nuxt-link class="tp-btn-red-circle-text" href="/portfolio-masonry">View all Projects</nuxt-link>
                          <nuxt-link class="tp-btn-red-circle-icon" href="/portfolio-masonry">
                              <span>
                                  <svg-arrow-up-five stroke="currentcolor" stroke-width="1.5"/>
                              </span>
                          </nuxt-link>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row gx-40">
              <div v-for="project in project_data" :key="project.id" class="col-lg-6 tp_fade_anim" :data-delay="project.delay" :data-fade-from="project.fadeDirection">
                  <div class="pp-project-item tp--hover-item mb-65">
                      <div class="pp-project-item-thumb not-hide-cursor" data-cursor="View<br>Demo">
                          <nuxt-link class="cursor-hide" href="/portfolio-details-modern">
                              <img :src="project.image" alt="project-img">
                          </nuxt-link>
                      </div>
                      <div class="pp-project-item-contenet">
                          <h4 class="pp-project-item-title">
                            <nuxt-link href="/portfolio-details-modern">
                              {{ project.title }}
                            </nuxt-link>
                          </h4>
                          <span class="pp-project-item-meta">
                            {{ project.category }} - {{ project.year }}
                          </span>
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
    image: '/img/home-04/project/project-4.jpg',
    title: 'Corporate Branding',
    category: 'Branding',
    year: '2025',
    delay: '.3',
    fadeDirection: 'left',
  },
  {
    id: 2,
    image: '/img/home-04/project/project-5.jpg',
    title: 'AI in Healthcare',
    category: 'Branding',
    year: '2025',
    delay: '.5',
    fadeDirection: 'right',
  },
  {
    id: 3,
    image: '/img/home-04/project/project-6.jpg',
    title: 'Urban Green Spaces',
    category: 'Branding',
    year: '2025',
    delay: '.3',
    fadeDirection: 'left',
  },
  {
    id: 4,
    image:'/img/home-04/project/project-7.jpg',
    title: 'Logistics Made Simple',
    category: 'Branding',
    year: '2025',
    delay: '.5',
    fadeDirection: 'right',
  }
]
</script>