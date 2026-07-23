<template>
  <div class="design-project-area pt-200 pb-80 title-box">
    <div class="container container-1680">
      <div class="design-project-title-wrap p-relative mb-140">
        <div class="tp-portfolio-metro-shape">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="732"
              height="9"
              viewBox="0 0 732 9"
              fill="none"
            >
              <path
                d="M728 7.96512L731.5 4.48256L728 1M1 4H731V5H1V4Z"
                :stroke="isDark?'#fff':'#000'"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Know More
          </span>
        </div>
        <div class="row align-items-end">
          <div class="col-xl-9 col-lg-9 col-md-9">
            <div class="design-project-title-box">
              <h4 class="tp-section-title-dirtyline">
                <span class="tp-text-right-scroll tp_text_invert_2">recent</span>
                <br>
                <span class="tp_text_invert_2">work</span>
              </h4>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3">
            <div class="tp-portfolio-metro-social text-md-end pb-50">
              <div>
                <a href="#">Linkedin</a>
              </div>
              <div>
                <a href="#">Instagram</a>
              </div>
              <div>
                <a href="#">Dribbble</a>
              </div>
              <div>
                <a href="#">Behance</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="top" class="design-project-item-wrap">
        <div
          v-for="(project, index) in portfolio_data"
          :key="project.id"
          class="design-project-item mb-120"
        >
          <div class="row align-items-center">
            <!-- Image Column -->
            <div
              class="col-xl-7"
              :class="{ 'order-xl-1 order-0': project.layout === 'left' }"
            >
              <div
                :class="[
                  'design-project-thumb',
                  `item-${index % 2 === 0 ? '1' : '2'}`,
                  { 'text-end': project.layout === 'left' },
                ]"
              >
                <img :src="project.image" alt="portfolio-img">
              </div>
            </div>

            <!-- Content Column -->
            <div
              class="col-xl-5"
              :class="{ 'order-xl-0 order-1': project.layout === 'left' }"
            >
              <div class="design-project-content" :class="project.contentClass">
                <h4 class="design-project-title tp_reveal_anim">
                  <NuxtLink to="/portfolio-details-modern">
                    
                    <div v-html="sanitizeHtml(project.title)" />
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
const {isDark} = useIsDark();
const portfolio_data = [
  {
    id: 1,
    title: "taller <br> alvarado",
    services: "Research, UX, UI Design",
    image: "/img/home-05/project/project-1.jpg",
    layout: "left",
  },
  {
    id: 2,
    title: "simple <br> logistics",
    services: "Research, UX, UI Design",
    image: "/img/home-05/project/project-2.jpg",
    contentClass: "pl-200",
  },
  {
    id: 3,
    title: "diego <br> project",
    services: "Research, UX, UI Design",
    image: "/img/home-05/project/project-3.jpg",
    layout: "left",
  },
  {
    id: 4,
    title: "imusic",
    services: "Research, UX, UI Design",
    image: "/img/home-05/project/project-4.jpg",
    contentClass: "pl-200",
  },
  {
    id: 5,
    title: "genesis",
    services: "Research, UX, UI Design",
    image: "/img/home-05/project/project-5.jpg",
    layout: "left",
  },
];
</script>
