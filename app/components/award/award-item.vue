<template>
  <div class="row">
    <div class="col-xl-12">
      <div class="tp-award-subtitle-box mb-30">
        <span class="tp-award-subtitle">( Awards! )</span>
      </div>
    </div>

    <div class="tp-award-item-wrap p-relative">
      <div
        v-for="award in award_data"
        :key="award.id"
        class="tp-award-item tp-award-1-style hover-reveal-item p-relative mb-5"
        @mousemove="(e) => handleMouseMove(e, '.hover-reveal-item')"
      >
        <div class="row align-items-center">
          <div class="col-md-8">
            <div class="tp-award-box-left z-index-3">
              <span class="tp-award-year">{{ award.year }}</span>
              <span class="tp-award-text">{{ award.title }}</span>
            </div>
          </div>

          <div class="col-md-4">
            <div
              class="tp-award-box-right z-index-3 d-flex justify-content-between align-items-center"
            >
              <span class="tp-award-position">{{ award.position }}</span>
              <span class="tp-award-icon">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11L11 1M11 1H1M11 1V11"
                    stroke="currentcolor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <!-- Hover reveal background -->
        <div
          class="tp-award-reveal-img"
          :style="{ backgroundImage: `url(${award.image})` }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { handleMouseMove } = useMouseImageReveal();
const award_data = [
  {
    id: 1,
    year: "2008",
    title: "1x agency of the year",
    position: "Winner",
    image: "/img/home-01/award/award-1.jpg",
  },
  {
    id: 2,
    year: "2009",
    title: "3x creative agency of the day",
    position: "Awarded",
    image: "/img/home-01/award/award-2.jpg",
  },
  {
    id: 3,
    year: "2011",
    title: "2x Featured design of the week",
    position: "Mentioned",
    image: "/img/home-01/award/award-3.jpg",
  },
  {
    id: 4,
    year: "2016",
    title: "5x honorable mentioned",
    position: "Mentioned",
    image: "/img/home-01/award/award-4.jpg",
  },
  {
    id: 5,
    year: "2022",
    title: "8x Best design of the day",
    position: "Winner",
    image: "/img/home-01/award/award-5.jpg",
  },
  {
    id: 6,
    year: "2025",
    title: "3x Mobile Excellence Award",
    position: "Awarded",
    image: "/img/home-01/award/award-6.jpg",
  },
];
</script>
