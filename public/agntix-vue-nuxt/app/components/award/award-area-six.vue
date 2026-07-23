

<template>
  <div class="design-award-area title-box pb-140">
    <div class="container container-1230">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="design-award-title-box text-center mb-130">
            <h4 class="tp-section-title-dirtyline">
              <span class="tp-text-right-scroll tp_text_invert_2">honors</span><br>
              <span class="tp_text_invert_2">& awards</span>
            </h4>
            <p>
              We're India's top award-winning digital
              agency, carving our own path in the digital
              jungle, and the journey persists.
            </p>
          </div>
        </div>
      </div>

      <!-- Awards List -->
      <div class="design-award-wrap">
        <div class="row row-cols-1">
          <div v-for="award in awardsData" :key="award.id" class="col">
            <div class="design-award-item hover-reveal-item active p-relative">
              <div class="design-award-content design-award-content-xs d-flex align-items-center justify-content-between">
                <h4>{{ award.title }}</h4>
                <span>{{ award.award }}</span>
              </div>
              <div
                class="design-award-reveal-img"
                :style="{ backgroundImage: `url(${award.image})` }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useImageHoverReveal();
const awardsData = [
  {
    id: 1,
    title: "A' Design Awards & competition",
    award: "Silver Medal",
    image: "/img/home-05/award/award.jpg",
  },
  {
    id: 2,
    title: "AWWWARDS",
    award: "2X - Honorable",
    image: "/img/home-05/award/award-2.jpg",
  },
  {
    id: 3,
    title: "CSS Design Awards",
    award: "2X - Website of the day",
    image: "/img/home-05/award/award-3.jpg",
  },
  {
    id: 4,
    title: "2X - Website of the day",
    award: "2X - Website of the day",
    image: "/img/home-05/award/award-4.jpg",
  },
  {
    id: 5,
    title: "CSS Reels",
    award: "Featured of the day",
    image: "/img/home-05/award/award-5.jpg",
  },
  {
    id: 6,
    title: "Web Gurus",
    award: "2X - Guru of the day",
    image: "/img/home-05/award/award-6.jpg",
  },
];
</script>