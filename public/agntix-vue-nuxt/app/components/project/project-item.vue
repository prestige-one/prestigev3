

<template>
  <div :ref="addToRefs" class="tp-project-item mb-95 tp--hover-item">
    <div class="tp-project-thumb not-hide-cursor" data-cursor="View<br>Demo">
      <NuxtLink
        class="cursor-hide tp--hover-img"
        :data-displacement="'/img/webgl/1.jpg'"
        data-intensity="0.6"
        data-speedin="1"
        data-speedout="1"
        :to="project.link"
      >
        <img
          class="fade-in"
          :src="project.image"
          :alt="`${project.title} project image`"
        >
      </NuxtLink>
    </div>

    <div class="tp-project-content">
      <h4 class="tp-project-title">
        <NuxtLink class="tp-line-black" :to="project.link">
          {{ project.title }}
        </NuxtLink>
      </h4>

      <div v-if="project.categories" class="tp-project-category">
        <span v-for="(category, index) in project.categories" :key="index">{{ category }}</span>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue';

type VNodeRef = Element | ComponentPublicInstance | null;

interface Project {
  id: number
  title: string
  image: string
  link: string
  categories?: string[]
}

interface Props {
  project: Project
  addToRefs: (el: VNodeRef) => void
}

// Validate required props
defineProps<Props>()
</script>