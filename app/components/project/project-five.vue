<template>
  <div class="design-project-area design-project-2-style pt-200 pb-60 title-box">
    <div class="container container-1680">
      <!-- Title -->
      <div class="design-project-title-wrap mb-140">
        <div class="row align-items-end">
          <div class="col-xl-9 col-lg-9 col-md-9">
            <div class="design-project-title-box">
              <h4 class="tp-section-title-dirtyline">
                <span class="tp-text-right-scroll tp_text_invert_2">recent</span>
                <br>
                <span class="tp_text_invert_2">work</span>
              </h4>
              <p class="tp_reveal_anim" data-delay=".5">
                In the creative wilderness, clients find our work truly beloved.
              </p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3">
            <div class="design-project-btn text-start text-md-end">
              <NuxtLink class="tp-btn-sky-border" to="/portfolio-metro">
                Explore work
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects -->
      <div class="design-project-item-wrap">
        <div
          v-for="(project, index) in project_data"
          :key="project.id"
          class="design-project-item mb-120"
        >
          <div class="row align-items-center">
            <!-- Image Column -->
            <div
              class="col-xl-7"
              :class="project.layout === 'left' ? 'order-xl-1 order-0' : ''"
            >
              <div
                class="design-project-thumb"
                :class="[
                  index % 2 === 0 ? 'item-1' : 'item-2',
                  project.layout === 'left' ? 'text-end' : ''
                ]"
              >
                <img
                  :src="project.image"
                  :alt="project.title"
                >
              </div>
            </div>

            <!-- Content Column -->
            <div
              class="col-xl-5"
              :class="project.layout === 'left' ? 'order-xl-0 order-1' : ''"
            >
              <div
                class="design-project-content"
                :class="project.contentClass || ''"
              >
                <h4 class="design-project-title tp_reveal_anim">
                  <NuxtLink to="/portfolio-details-modern">
                    
                    <div v-html="sanitizeHtml(project.title)"/>
                  </NuxtLink>
                </h4>
                <span class="tp_reveal_anim">{{ project.services }}</span>
                <NuxtLink
                  class="tp-btn-sky-border height-50"
                  to="/portfolio-details-modern"
                >
                  View project
                </NuxtLink>
              </div>
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
    title: "automap",
    services: "Research, UX, UI Design",
    image: '/img/home-05/project/project-1.jpg',
    layout: "left",
  },
  {
    id: 2,
    title: "kashtech <br> doyel",
    services: "Research, UX, UI Design",
    image: '/img/home-05/project/project-2.jpg',
    contentClass: "pl-200",
  },
  {
    id: 3,
    title: "rebrand",
    services: "Research, UX, UI Design",
    image: '/img/home-05/project/project-3.jpg',
    layout: "left",
  },
]
</script>