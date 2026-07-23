<template>
  <div class="ar-award-area">
    <div class="container container-1430">
      <div class="ar-award-wrap p-relative pt-140 pb-160">
        
        <!-- Shape Image -->
        <div class="ar-award-shape-1">
          <img src="/img/home-08/award/award-shape-1.png" alt="award-shape">
        </div>

        <!-- Section Title -->
        <div class="row">
          <div class="col-xl-8">
            <div class="ar-award-title-box mb-50">
              <span
                class="tp-section-subtitle-satisfy mb-20 tp_fade_anim"
                data-delay=".3"
              >
                International Awards
              </span>
              <h3
                class="tp-section-title-clash-600 fs-60 mb-0 tp_fade_anim"
                data-delay=".4"
              >
                Awards & recognition
              </h3>
            </div>
          </div>
        </div>

        <!-- Awards List -->
        <div class="row">
          <div class="offset-xxl-4 col-xxl-8 offset-xl-2 col-xl-10">
            <div class="ar-award-right-wrap">
              <div
                v-for="award in awards"
                :key="award.id"
                class="ar-award-item tp_fade_anim"
                :data-delay="award.delay"
              >
                <div class="row align-items-center">
                  <div class="col-md-8">
                    <div class="ar-award-box-left z-index-3">
                      <span class="ar-award-year">{{ award.year }}</span>
                      <span class="ar-award-title">{{ award.title }}</span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="ar-award-box-right z-index-3 d-flex align-items-center justify-content-between">
                      <span class="ar-award-category">{{ award.category }}</span>
                      <span class="ar-award-icon">
                        <svg-arrow-two />
                      </span>
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

const awards = [
  {
    id: 1,
    year: '2005',
    title: 'Architecture project of the year',
    category: 'Architecture',
    delay: '.3'
  },
  {
    id: 2,
    year: '2010',
    title: 'Architecture MasterPriz',
    category: 'Interior',
    delay: '.4'
  },
  {
    id: 3,
    year: '2014',
    title: 'Best project of the year',
    category: 'Landscape',
    delay: '.5'
  },
  {
    id: 4,
    year: '2020',
    title: 'Architecture MasterPrize',
    category: 'Architecture',
    delay: '.6'
  }
]
</script>
