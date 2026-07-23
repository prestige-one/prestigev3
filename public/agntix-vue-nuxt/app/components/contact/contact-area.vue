<template>
   <div class="tp-contact-me-ptb p-relative z-index-3 pb-105">
      <div class="pp-about-shape">
          <img data-speed=".8" src="/img/home-14/about/about-shape.png" alt="">
      </div>
      <div class="tp-career-shape-1">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="123" height="130" viewBox="0 0 123 130" fill="none">
                  <path d="M58.2803 1.15449C63.3023 14.3017 71.049 54.3533 48.1082 67.0973C36.1831 73.4283 11.7107 77.3064 2.37778 43.9355C-1.14293 31.3468 9.61622 20.8908 32.0893 28.8395C45.055 33.4255 76.4207 44.0467 90.5787 70.0771C98.0511 83.8154 104.166 111.84 99.1745 129.671M99.1745 129.671C100.942 121.014 108.128 104.495 122.737 107.673M99.1745 129.671C100.181 123.978 97.0522 110.014 76.485 99.698M75.3644 33.2431C80.479 35.6688 96.6446 46.4742 101.81 64.2891" :stroke="isDark?'white':'currentColor'" stroke-width="1.5" />
              </svg>
          </span> 
      </div>
      <div class="container container-1230">
          <div class="row">
              <div class="col-lg-12">
                  <div class="tp-contact-me-heading pb-75 tp_fade_anim" data-delay=".3">
                      <span class="tp-section-subtitle-clash clash-subtitle-pos body-ff mb-40">
                          Contact me
                          <i>
                              <svg width="102" height="9" viewBox="0 0 102 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M98 8L101.5 4.5L98 1M1 4H101V5H1V4Z" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                          </i>
                      </span>
                      <h3 class="pp-service-details-title">
                          Let's discuss <br>
                          <img src="/img/contact/contact-me/contact-me-thumb.jpg" alt="">your project!
                      </h3>
                  </div>
                  <div class="tp-contact-me-wrap">
                      <div class="pp-about-content tp_text_anim">
                          <p>
                              Let's start a conversation! fill out our <br> contact form and we’ll get back to you <br> as soon as possible
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="pp-service-shape">
          <img data-speed="1.1" src="/img/home-14/about/about-shape-2.png" alt="">
      </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
</script>