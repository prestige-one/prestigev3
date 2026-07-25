
<template>
  <div :class="`${wrapClass} ${spacingCls}`" :data-bg-color="bgClass" :style="{backgroundColor:bgClass}">
    <!-- Shape -->
    <div class="crp-price-shape-2 d-none d-xl-block">
      <img src="/img/home-09/price/shape-2.png" alt="shape">
    </div>

    <div class="container container-1430">
      <!-- Header -->
      <div class="row mb-5">
        <div class="col-lg-2">
          <div class="pp-award-left">
            <span class="tp-section-subtitle-clash clash-subtitle-pos body-ff">
              Award <i>
                <svg width="102" height="9" viewBox="0 0 102 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M98 8L101.5 4.5L98 1M1 4H101V5H1V4Z" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </i>
            </span>
          </div>
        </div>
        <div class="col-lg-10">
          <div class="pp-about-heading pb-55">
            <h3 class="tp-section-title-teko fs-120">
              Awards & <br> Recognitions
            </h3>
          </div>
        </div>
      </div>

      <!-- Award List -->
      <div class="row">
        <div class="col-lg-12">
          <div class="pp-award-wrapper">
            <div class="tp-award-item-wrap p-relative">
              <!-- Table Header -->
              <div class="tp-award-item pp-award-header p-relative mb-5">
                <div class="row align-items-center">
                  <div class="col-lg-8 col-md-6">
                    <div class="tp-award-box-left z-index-3">
                      <span class="tp-award-year tp-award-text-2">year</span>
                      <span class="tp-award-text tp-award-text-2">Recognition</span>
                      <span class="tp-award-text-2">platform</span>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="tp-award-box-right z-index-3 d-flex justify-content-between align-items-center">
                      <span class="tp-award-text-2">Project</span>
                      <span class="tp-award-icon tp-award-text-2">Link</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Awards -->
              <div
                v-for="award in portfolioAwardsData"
                :key="award.id"
                class="tp-award-item hover-reveal-item p-relative tp_fade_anim"
                @mousemove="(e) => handleMouseMove(e, '.hover-reveal-item')"
              >
                <div class="row align-items-center">
                  <div class="col-lg-8 col-md-6">
                    <div class="tp-award-box-left z-index-3">
                      <span class="tp-award-year">{{ award.year }}</span>
                      <span class="tp-award-text">{{ award.recognition }}</span>
                      <span class="tp-award-year">{{ award.platform }}</span>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="tp-award-box-right z-index-3 d-flex justify-content-between align-items-center">
                      <span class="tp-award-position">{{ award.project }}</span>
                      <span class="tp-award-link">Link</span>
                    </div>
                  </div>
                </div>

                <!-- Hover Reveal Image -->
                <div
                    v-if="!hideHoverImg"
                    class="tp-award-reveal-img"
                    :style="{ backgroundImage: `url(${award.image})` }"
                    :data-background="award.image"
                 />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const { handleMouseMove } = useMouseImageReveal();
interface Props {
  wrapClass?: string
  spacingCls?: string
  bgClass?: string;
  hideHoverImg?: boolean
}

withDefaults(defineProps<Props>(), {
  wrapClass: "pp-award-area pp-award-ptb",
  spacingCls: "pt-160 pb-160",
  bgClass: "",
  hideHoverImg: false
})

// Award data
const portfolioAwardsData = [
  {
    id: 1,
    year: '2025',
    recognition: 'Honors',
    platform: 'AWWWARDS',
    project: 'Agntix',
    image: '/img/home-01/award/award-1.jpg'
  },
  {
    id: 2,
    year: '2025',
    recognition: 'Site of the Day',
    platform: 'Mindsparkle Mag',
    project: 'Personal Portfolio',
    image: '/img/home-01/award/award-2.jpg'
  },
  {
    id: 3,
    year: '2023',
    recognition: 'Best Innovation',
    platform: 'MUSE Awards',
    project: 'Thom Evans Fitness',
    image: '/img/home-01/award/award-3.jpg'
  },
  {
    id: 4,
    year: '2022',
    recognition: 'Mobile Excellence',
    platform: 'Mindsparkle Mag',
    project: 'Pixel Forged',
    image: '/img/home-01/award/award-4.jpg'
  },
  {
    id: 5,
    year: '2021',
    recognition: 'Site of the Day',
    platform: 'CSS Awards',
    project: 'Portfolio',
    image: '/img/home-01/award/award-5.jpg'
  },
  {
    id: 6,
    year: '2020',
    recognition: 'Honors',
    platform: 'AWWWARDS',
    project: 'Agntix Studio',
    image: '/img/home-01/award/award-6.jpg'
  }
]
</script>
