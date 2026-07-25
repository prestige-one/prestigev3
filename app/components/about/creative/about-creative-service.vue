<template>
  <div :class="`studio-service-area ${isDark?'studio-service-dark':''} pt-60 pb-200`">
    <div class="container container-1830">
      <div class="studio-service-wrap">
        <div class="row">
          <div class="col-xl-10">
            <div class="studio-award-title-box mb-65">
              <h3 class="tp-section-title-clash tp-text-revel-anim">
                Awards & recognition
              </h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="studio-award-subtitle-box mb-50">
              <h3 class="tp-section-subtitle-clash color-red mb-0">
                Our <br>
                Achievements
                <i>
                  <svg width="102" height="9" viewBox="0 0 102 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M98 8L101.5 4.5L98 1M1 4H101V5H1V4Z" stroke="#FF535B" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </i>
              </h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div :class="`studio-service-item-wrap ${isDark?'':'black-style'}`">
              <div class="tp-award-item-wrap p-relative">
                <nuxt-link
                  v-for="(award, index) in awards"
                  :key="index"
                  href="/service-details"
                >
                  <div class="tp-award-item hover-reveal-item p-relative" @mousemove="(e) => handleMouseMove(e, '.hover-reveal-item')">
                    <div class="row align-items-center">
                      <div class="col-md-8">
                        <div class="tp-award-box-left z-index-3">
                          <span class="tp-award-year">{{ award.year }}</span>
                          <span class="tp-award-text">{{ award.text }}</span>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div
                          class="tp-award-box-right z-index-3 d-flex justify-content-start justify-content-md-end"
                        >
                          <span class="tp-award-icon">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="tp-award-reveal-img" :data-background="award.image" :style="{ backgroundImage: `url(${award.image})` }"/>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
const { handleMouseMove } = useMouseImageReveal();
interface Award {
  year: string;
  text: string;
  image: string;
}

const awards: Award[] = [
  {
    year: "01",
    text: "mobile app",
    image: "/img/home-06/service/service-1.jpg",
  },
  {
    year: "02",
    text: "UI / ux design",
    image: "/img/home-06/service/service-2.jpg",
  },
  {
    year: "03",
    text: "3D Modeling Services",
    image: "/img/home-06/service/service-3.jpg",
  },
  {
    year: "04",
    text: "Creative Direction",
    image: "/img/home-06/service/service-4.jpg",
  },
  {
    year: "05",
    text: "WEB Development",
    image: "/img/home-06/service/service-5.jpg",
  },
  {
    year: "06",
    text: "Brand Identity",
    image: "/img/home-06/service/service-6.jpg",
  },
];
</script>
