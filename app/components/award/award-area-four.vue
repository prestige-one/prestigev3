<template>
  <div class="st-award-area fix st-award-ptb mb-180">
    <div class="container container-1320">
      <!-- Header Section -->
      <div class="row">
        <div class="col-lg-5">
          <div class="st-award-heading mb-30">
            <span class="tp-section-subtitle st">// AWARDS & ACHIEVEMENT</span>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="st-award-heading mb-70">
            <h4 class="st-award-title">
              We are excited for our work and how it positively impacts clients.
              With <br>
              <span>over 12 years of experience.</span>
            </h4>
          </div>
        </div>
      </div>

      <!-- Awards Content -->
      <div class="row">
        <!-- Awards Gallery -->
        <div class="col-lg-5">
          <div
            class="st-award-list-thumb-wrap p-relative tp_fade_anim"
            data-delay=".3"
          >
            <div id="st-award-thumb" :class="`st-award-list-thumb-${activeAward}`">
              <img
                v-for="award in startupAwardsData"
                :key="award.id"
                :src="award.image"
                :alt="award.title"
                :class="[
                  `st-award-list-thumb-${award.id}`
                ]"
              >

              <div
                v-for="i in 5"
                :key="`shape-${i}`"
                :class="[
                  `st-award-thumb-shape shape-${i}`,
                  { current: i === activeAward },
                ]"
              />
            </div>
          </div>
        </div>

        <!-- Awards List -->
        <div class="col-lg-7">
          <div class="st-award-wrapper">
            <div class="ar-award-right-wrap">
              <div
                v-for="award in startupAwardsData"
                :key="award.id"
                class="ar-award-item tp_fade_anim"
                :rel="`st-award-list-thumb-${award.id}`"
                data-delay=".3"
                :class="{ active: award.id === activeAward }"
                @mouseenter="handleAwardHover(award.id)"
              >
                <div class="row align-items-center">
                  <div class="col-sm-8">
                    <div class="ar-award-box-left z-index-3">
                      <span class="ar-award-year">
                        {{String(award.id).padStart(2, "0")}}.
                      </span>
                      <span class="ar-award-title">{{ award.title }}</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div
                      class="ar-award-box-right w-100 z-index-3 text-start text-md-end"
                    >
                      <span class="ar-award-category">{{ award.date }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

interface Award {
  id: number;
  title: string;
  date: string;
  image: string;
}

// Awards Data
const startupAwardsData: Award[] = [
  {
    id: 1,
    title: "BDM design awards",
    date: "Feb 15, 2025",
    image: "/img/home-12/award/st-award-thumb-1.jpg",
  },
  {
    id: 2,
    title: "Creative mind design awards",
    date: "Feb 15, 2025",
    image: "/img/home-01/award/award-2.jpg",
  },
  {
    id: 3,
    title: "The new creative UI Website awards",
    date: "Feb 15, 2025",
    image: "/img/home-01/award/award-3.jpg",
  },
  {
    id: 4,
    title: "FDM most creative UI/UX",
    date: "Feb 15, 2025",
    image: "/img/home-01/award/award-4.jpg",
  },
  {
    id: 5,
    title: "UI/UX design awards",
    date: "Feb 15, 2025",
    image: "/img/home-01/award/award-5.jpg",
  },
];

// Active Award
const activeAward = ref<number>(1);

const handleAwardHover = (awardId: number) => {
  activeAward.value = awardId;
};
</script>