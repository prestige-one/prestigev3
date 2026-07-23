<template>
  <div class="ar-hero-area p-relative" :style="{backgroundImage:`url(${bg_img})`}">
      <div class="tp-career-shape-1">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                  <path d="M36.3761 0.5993C40.3065 8.98556 47.3237 34.898 32.8824 44.3691C25.3614 49.0997 9.4871 52.826 1.7513 31.3747C-1.16691 23.2826 5.38982 15.9009 20.5227 20.0332C29.2536 22.4173 50.3517 27.8744 60.9 44.2751C66.4672 52.9311 71.833 71.0287 69.4175 82.9721M69.4175 82.9721C70.1596 77.2054 74.079 66.0171 83.8204 67.3978M69.4175 82.9721C69.8033 79.1875 67.076 70.1737 53.0797 64.3958M49.1371 20.8349C52.611 22.1801 63.742 28.4916 67.9921 39.9344" :stroke="isDark?'#fff':'#030303'" stroke-width="1.5" />
              </svg>
          </span>
      </div>
      <div class="container container-1230">
          <div class="ar-about-us-4-hero-ptb">
              <div class="row justify-content-center">
                  <div class="col-xl-12">
                      <div class="ar-hero-title-box tp_fade_anim" data-delay=".3">
                          <div class="ar-about-us-4-title-box d-flex align-items-center mb-20">
                              <span class="tp-section-subtitle pre tp_fade_anim">pricing plans</span>
                              <div class="ar-about-us-4-icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="9" viewBox="0 0 81 9" fill="none">
                                      <rect y="4" width="80" height="1" :fill="isDark?'#fff': '#111013'" />
                                      <path d="M77 7.96366L80.5 4.48183L77 1" :stroke="isDark?'#fff' : '#111013'" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                              </div>
                          </div>
                          <h3 class="tp-career-title pb-30">Start with <span class="shape-1">
                            <img v-if="!isDark" src="/img/about-us/about-us-4/about-us-4-shape-1.png" alt="">
                            <img v-if="isDark" src="/img/portfolio/portfolio-shape.png" alt="">
                         </span> <br>affordable price</h3>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-4"/>
                  <div class="col-lg-8">
                      <div class="tp-faq-text tp_fade_anim">
                          <p>Agntix is a beacon of best innovation and the dynamic <br> parent a company of wealcoder and many other subsidiaries.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
const bg_img = isDark.value ? '/img/blog/blog-masonry/blog-bradcum-bg.png' : '/img/team/team-bg.png';
</script>