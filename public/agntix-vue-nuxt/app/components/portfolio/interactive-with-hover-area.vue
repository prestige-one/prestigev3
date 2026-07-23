<template>
  <div class="tp-porfolio-10-area tp-porfolio-10-height p-relative fix">
    <!-- Background Images -->
    <div class="tp-porfolio-10-bg-wrap">
      <div id="tp-porfolio-10-bg-box" :class="activeBg">
        <img
          v-for="(img, index) in bgImages"
          :key="index"
          :src="img"
          alt="bg-img"
          :class="`tp-porfolio-10-bg-${index + 1}`"
        >
      </div>
    </div>

    <!-- Titles -->
    <div class="container container-1380">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-porfolio-10-title-wrap z-index-5">
            <ul>
              <li
                v-for="item in portfolioTitles"
                :key="item.id"
                :class="activeBg === `tp-porfolio-10-bg-${item.id}` ? 'active' : ''"
                :rel="`tp-porfolio-10-bg-${item.id}`"
                @mouseenter="handleActiveBg(item.id)"
                @mouseleave="handleDeactiveBg"
              >
                <NuxtLink to="/portfolio-details-gallery">
                  <div class="tp-porfolio-10-title-box d-flex align-items-end">
                    <h2 class="tp-porfolio-10-title">{{ item.title }}</h2>
                    <span class="tp-porfolio-10-category">/ {{ item.category }}</span>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const bgImages = [
  "/img/interactive-img/port-1.jpg",
  "/img/interactive-img/port-2.jpg",
  "/img/interactive-img/port-3.jpg",
  "/img/interactive-img/port-4.jpg",
  "/img/interactive-img/port-5.jpg",
  "/img/interactive-img/port-6.jpg",
  "/img/interactive-img/port-7.jpg",
  "/img/interactive-img/port-5.jpg",
];

const portfolioTitles = [
  { id: 1, title: "Silkvision", category: "Visual" },
  { id: 2, title: "Disefio Gräfico", category: "Creative" },
  { id: 3, title: "PSD Mockup", category: "Branding" },
  { id: 4, title: "Fastwire", category: "Branding" },
  { id: 5, title: "Tesla", category: "Mobile Application" },
  { id: 6, title: "Ecommerce", category: "Digital Design" },
  { id: 7, title: "Cosmetic", category: "Visual" },
  { id: 8, title: "Waves", category: "UI Design" },
];

const activeBg = ref("tp-porfolio-10-bg-4");

function handleActiveBg(id: number) {
  activeBg.value = `tp-porfolio-10-bg-${id}`;
}

function handleDeactiveBg() {
  activeBg.value = "tp-porfolio-10-bg-4";
}
</script>
