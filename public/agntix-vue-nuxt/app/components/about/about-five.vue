<template>
  <div class="studio-about-area pt-200 pb-140">
      <div class="container container-1830">
          <div class="studio-about-wrap">
              <div class="row align-items-start">
                  <div class="col-xl-10">
                      <div class="studio-about-title-box mb-80">
                          <span class="tp-section-subtitle-clash clash-subtitle-pos">
                              Our <br> Services
                              <i>
                                  <svg width="102" height="9" viewBox="0 0 102 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M98 8L101.5 4.5L98 1M1 4H101V5H1V4Z" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                              </i>
                          </span>
                          <h3 class="tp-section-title-clash tp-text-revel-anim"><span class="clash-subtitle-space-1">We're</span><br> a creative digital studio.</h3>
                      </div>
                  </div>
                  <div class="col-xl-2 d-none d-xl-block">
                      <div class="studio-about-thumb">
                          <img v-if="!aboutStyle" data-speed=".8" src="/img/home-06/about/about-3.jpg" alt="">
                          <img v-if="aboutStyle" data-speed=".8" src="/img/about-us/about-us/about-us-2-1.jpg" alt="">
                      </div>
                  </div>
              </div>
              <div class="row align-items-end">
                  <div class="col-xl-4 col-lg-6 col-md-6">
                      <div class="studio-about-thumb thumb-1">
                          <img v-if="!aboutStyle" data-speed=".8" src="/img/home-06/about/about-1.jpg" alt="">
                          <img v-if="aboutStyle" data-speed=".8" src="/img/about-us/about-us/about-us-2-2.jpg" alt="">
                      </div>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-md-6">
                      <div 
                          class="studio-about-content tp_text_anim" 
                          :class="{'about-us-2':aboutStyle}"
                        >
                          <p class="mb-30">
                              We have been creating digital
                              products & providing design support
                              to ambitious startups & corporations
                              since 2016.
                          </p>
                          <p class="mb-40">
                              As an award-winning agency with
                              in the digital jungle, agntix® transcends aesthetics,
                              crafting your vision into a legacy that endures.
                          </p>
                          <div class="tp_fade_anim" data-fade-from="top" data-delay=".7" data-ease="bounce">
                              <nuxt-link class="tp-btn-red-border" href="/contact" :class="{'about-us-2':aboutStyle}">
                                Get in Touch
                              </nuxt-link>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-4 col-lg-6 d-none d-xl-block">
                      <div v-if="!aboutStyle" class="studio-about-thumb text-end text-xxl-start">
                          <img data-speed="1.1" src="/img/home-06/about/about-2.jpg" alt="">
                      </div>
                      <div v-if="aboutStyle" data-speed="1.1" class="ar-about-exp-wrap d-flex justify-content-xxl-start justify-content-end">
                        <div class="ar-about-exp-box" data-background="assets/img/home-08/hero/hero-bg-shape-2.png">
                            <span>Years of <br> Experience</span>
                            <h4>17</h4>
                        </div>
                     </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  aboutStyle?:boolean;
}
withDefaults(defineProps<Props>(), {
    aboutStyle:false,
})
</script>