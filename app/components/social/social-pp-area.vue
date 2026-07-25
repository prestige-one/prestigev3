
<template>
  <div class="pp-social-area pp-social-ptb pb-100">
    <div class="container-fluid gx-0">
      <div class="row gx-0">
        <div class="col-lg-12">
          <div class="pp-social-wrapper p-relative fix pt-20">
            <NuxtLink
              v-for="item in socialItems"
              :key="item.id"
              href="#"
              class="pp-social-item"
              :class="[item.position, item.id === activeProject ? 'active' : '']"
              @mouseenter="activeProject = item.id"
            >
              <div class="pp-social-item-wrap p-relative">
                <template v-if="item.position === 'img-pos-1' || item.position === 'img-pos-3'">
                  <h3 class="pp-social-item-title">{{ item.title }}</h3>
                  <p class="text-right" v-html="sanitizeHtml(item.description)"/>
                </template>
                <template v-else>
                  <p class="text-left" v-html="sanitizeHtml(item.description)"/>
                  <h3 class="pp-social-item-title">{{ item.title }}</h3>
                </template>
              </div>
              <div class="pp-social-item-thumb">
                <img
                  v-for="(thumb, index) in item.thumbs"
                  :key="index"
                  :src="thumb"
                  :alt="`${item.title} thumbnail ${index + 1}`"
                  :class="`thumb-${index + 1}`"
                >
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeProject = ref(2);
const socialItems = [
  {
    id: 1,
    title: 'Dribbble',
    description: 'Web-design<br />Shorts inspiration',
    position: 'img-pos-1',
    thumbs: [
      '/img/home-14/social/social-thumb-1.jpg',
      '/img/home-14/social/social-thumb-4.jpg',
      '/img/home-14/social/social-thumb-2.jpg',
      '/img/home-14/social/social-thumb-3.jpg'
    ]
  },
  {
    id: 2,
    title: 'Behance',
    description: 'Projects case<br />Studies',
    position: 'img-pos-2',
    thumbs: [
      '/img/home-14/social/social-thumb-6.jpg',
      '/img/home-14/social/social-thumb-5.jpg',
      '/img/home-14/social/social-thumb-7.png',
      '/img/home-14/social/social-thumb-10.jpg'
    ]
  },
  {
    id: 3,
    title: 'Pinterest',
    description: 'Inspiration for<br />your project',
    position: 'img-pos-3',
    thumbs: [
      '/img/home-14/social/social-thumb-17.jpg',
      '/img/home-14/social/social-thumb-13.jpg',
      '/img/home-14/social/social-thumb-11.jpg',
      '/img/home-14/social/social-thumb-8.png'
    ]
  },
  {
    id: 4,
    title: 'LinkedIn',
    description: 'Contact with<br />me',
    position: 'img-pos-4',
    thumbs: [
      '/img/home-14/social/social-thumb-14.jpg',
      '/img/home-14/social/social-thumb-18.jpg',
      '/img/home-14/social/social-thumb-9.png',
      '/img/home-14/social/social-thumb-12.jpg'
    ]
  }
];
</script>
