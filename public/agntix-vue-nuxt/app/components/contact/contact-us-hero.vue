<template>
 <div class="tp-contact-us-ptb p-relative">
      <div class="tp-career-shape-1">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="123" height="130" viewBox="0 0 123 130" fill="none">
                  <path d="M58.2803 1.15449C63.3023 14.3017 71.049 54.3533 48.1082 67.0973C36.1831 73.4283 11.7107 77.3064 2.37778 43.9355C-1.14293 31.3468 9.61622 20.8908 32.0893 28.8395C45.055 33.4255 76.4207 44.0467 90.5787 70.0771C98.0511 83.8154 104.166 111.84 99.1745 129.671M99.1745 129.671C100.942 121.014 108.128 104.495 122.737 107.673M99.1745 129.671C100.181 123.978 97.0522 110.014 76.485 99.698M75.3644 33.2431C80.479 35.6688 96.6446 46.4742 101.81 64.2891" :stroke="isDark?'white':'black'" stroke-width="1.5" />
              </svg>
          </span>
      </div>
      <div class="container container-1230">
          <div class="ar-about-us-4-hero-ptb">
              <div class="row justify-content-center">
                  <div class="col-xl-12">
                      <div class="tp-contact-us-heading tp_fade_anim" data-delay=".3">
                          <div class="ar-about-us-4-title-box d-flex align-items-center mb-20">
                              <span :class="`tp-section-subtitle ${isDark?'text-white':''} pre tp_fade_anim`">
                                contact us
                              </span>
                              <div class="ar-about-us-4-icon">
                                  <svg-arrow-long-right/>
                              </div>
                          </div>
                          <h3 :class="`tp-career-title ${isDark?'text-white':''} pb-30`">
                            Your creative
                              <span class="shape-1">
                                <img v-if="!isDark" src="/img/about-us/about-us-4/about-us-4-shape-1.png" alt="">
                                <img v-if="isDark" src="/img/portfolio/portfolio-shape.png" alt="">
                              </span> 
                              <br>journey starts here
                          </h3>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-4"/>
                  <div class="col-lg-8">
                      <div class="tp-faq-text tp_fade_anim">
                          <p :class="` ${isDark?'text-white':''} m-0`">Agntix is a beacon of best innovation and the dynamic <br> parent a company of wealcoder and many other subsidiaries.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="tp-contact-us-bottom">
          <div class="container">
              <div class="row">
                  <div class="col-md-6">
                      <div class="tp-contact-us-text smooth">
                          <a href="#down">
                              <p>
                                <svg-arrow-scroll-down/> Scroll to explore
                              </p>
                          </a>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="tp-contact-us-text d-none d-md-block text-md-end">
                          <p>See in Map our Office</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
</script>