<template>
  <div class="pp-service-area pp-service-ptb p-relative pb-160">
    <!-- Background Shape -->
    <div class="pp-service-shape">
      <img data-speed="1.1" src="/img/home-14/about/about-shape-2.png" alt="shape">
    </div>

    <!-- Heading -->
    <div class="container container-1430">
      <div class="row">
        <div class="col-lg-12">
          <div class="pp-service-heading z-index-2">
            <span>What I Do</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Service Links -->
    <div class="container-fluid gx-0">
      <div class="row">
        <div class="col-lg-12">
          <div class="pp-service-wrapper z-index-1">
            <NuxtLink
              v-for="(service, index) in services"
              :key="index"
              to="/service-1"
              class="pp-service-item z-index-1"
              :class="{ current: service.current }"
            >
              <span class="pp-service-item-title">{{ service.title }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const services = [
  { title: '3D'},
  { title: 'Motion'},
  { title: 'Animation',current: true },
  { title: 'Product Renders'},
  { title: '3d design'},
]
</script>