<template>
  <div class="tp-project-5-area pb-140 z-index-1" :class="{'coffe-bg': isDark }">
    <div class="container container-1350">
      <div class="row">
        <div class="col-xl-12">
          <div
            class="tp-project-5-section-box pb-130 d-flex justify-content-between align-items-center"
          >
            <span class="tp-project-5-section-subtitle">Services</span>
            <h4 class="tp-project-5-section-title">
              My expertise in this area
            </h4>
            <NuxtLink
              class="tp-project-5-section-link"
              to="/portfolio-details-modern"
            >
              View more
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="tp-project-5-wrap p-relative">
      <div class="row justify-content-center">
        <div class="col-xl-12">
          <div class="tp-project-5-title-wrap">
            <div
              v-for="project in projects"
              :key="project.id"
              class="tp-project-5-title-box text-center"
              :class="{ active: project.id === activeProject }"
              @mouseenter="handleAwardHover(project.id)"
            >
              <div class="tp-project-5-title-box-bg" />
              <div
                class="tp-project-5-thumb-box d-flex justify-content-between align-items-end"
              >
                <div class="tp-project-5-thumb thumb-1">
                  <img :src="project.images.left" :alt="project.title">
                </div>
                <div class="tp-project-5-thumb thumb-2">
                  <img :src="project.images.right" :alt="project.title">
                </div>
              </div>
              <h4 class="tp-project-5-title">
                <NuxtLink :to="project.link">{{ project.title }}</NuxtLink>
              </h4>
              <span>{{ project.subtitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const {isDark} = useIsDark();
interface Project {
  id: number;
  title: string;
  subtitle: string;
  images: { left: string; right: string };
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modelling",
    subtitle: "Fashion & Life Style",
    images: {
      left: "/img/home-15/project/project-1.jpg",
      right: "/img/home-15/project/project-2.jpg",
    },
    link: "/portfolio-details-modern",
  },
  {
    id: 2,
    title: "Acting",
    subtitle: "Character",
    images: {
      left: "/img/home-15/project/project-1.1.jpg",
      right: "/img/home-15/project/project-2.2.jpg",
    },
    link: "/portfolio-details-modern",
  },
  {
    id: 3,
    title: "Costume",
    subtitle: "Cloth & Wearing",
    images: {
      left: "/img/home-15/project/project-1.3.jpg",
      right: "/img/home-15/project/project-2.3.jpg",
    },
    link: "/portfolio-details-modern",
  },
  {
    id: 4,
    title: "Artist",
    subtitle: "Creative Designer",
    images: {
      left: "/img/home-15/project/project-1.4.jpg",
      right: "/img/home-15/project/project-2.4.jpg",
    },
    link: "/portfolio-details-modern",
  },
];

const activeProject = ref(2);

const handleAwardHover = (projectId: number) => {
  activeProject.value = projectId;
};
</script>