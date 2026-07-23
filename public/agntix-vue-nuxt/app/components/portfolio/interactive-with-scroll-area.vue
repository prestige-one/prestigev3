<template>
  <main>
    <!-- portfolio area start -->
    <div class="tp-port-slider-area">
      <div class="tp-port-slider-main p-relative">
        <!-- Thumbnails -->
        <div id="tp-port-slider-wrap" :class="activeId">
          <div
            v-for="item in portfolioItems"
            :key="item.id"
            :class="['tp-port-slider-thumb', item.id]"
          >
            <img :src="item.img" :alt="item.title">
          </div>
        </div>

        <!-- Titles -->
        <div class="tp-port-slider-content-wrap z-index-5">
          <div class="tp-port-slider-content">
            <h4
              v-for="item in portfolioItems"
              :key="item.id"
              :class="[
                'tp-port-slider-title',
                { active: activeId === item.id },
              ]"
              :rel="item.id"
              @mouseenter="handleActive(item.id)"
              @mouseleave="handleDeactive"
            >
              <NuxtLink :to="item.link">
                {{ item.title }}
              </NuxtLink>
            </h4>
          </div>
        </div>
      </div>
    </div>
    <!-- portfolio area end -->
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const portfolioItems = [
  {
    id: "tp-port-1",
    img: "/img/interactive-img/port-1.jpg",
    title: "Milo",
    link: "/portfolio-details-gallery",
  },
  {
    id: "tp-port-2",
    img: "/img/interactive-img/port-2.jpg",
    title: "FASTWIRE",
    link: "/portfolio-details-gallery",
  },
  {
    id: "tp-port-3",
    img: "/img/interactive-img/port-3.jpg",
    title: "MEDIABION",
    link: "/portfolio-details-gallery",
  },
  {
    id: "tp-port-4",
    img: "/img/interactive-img/port-4.jpg",
    title: "Spruce",
    link: "/portfolio-details-gallery",
  },
  {
    id: "tp-port-5",
    img: "/img/interactive-img/port-5.jpg",
    title: "PSDMockup",
    link: "/portfolio-details-gallery",
  },
  {
    id: "tp-port-6",
    img: "/img/interactive-img/port-6.jpg",
    title: "JQ Wine",
    link: "/portfolio-details-gallery",
  },
  {
    id: "tp-port-7",
    img: "/img/interactive-img/port-4.jpg",
    title: "Diseño",
    link: "/portfolio-details-gallery",
  },
  {
    id: "tp-port-8",
    img: "/img/interactive-img/port-5.jpg",
    title: "Photoshoot",
    link: "/portfolio-details-gallery",
  },
  {
    id: "tp-port-9",
    img: "/img/interactive-img/port-6.jpg",
    title: "Gráfico",
    link: "/portfolio-details-gallery",
  },
];

const defaultId = portfolioItems[0]?.id;
const activeId = ref(defaultId);

function handleActive(id: string) {
  activeId.value = id;
}

function handleDeactive() {
  activeId.value = defaultId;
}
</script>
