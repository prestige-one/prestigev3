<template>
 <div class="tp-service-4-process-ptb pt-140 pb-140">
      <div class="container container-1230">
          <div class="row">
              <div class="col-lg-12">
                  <div class="dgm-service-title-box service-4-heading z-index-1 mb-60">
                      <span :class="`tp-section-subtitle subtitle-grey mb-15 ${isDark?'':'text-black'} tp_fade_anim`" data-delay=".3">Services</span>
                      <h4 :class="`tp-section-title-grotesk ${isDark?'':'text-black'} tp_fade_anim`" data-delay=".5">
                          We think out of the box <br>
                          and follow the
                          <span class="p-relative">
                              working
                              <span class="tp-section-title-shape">
                                  <svg-shape-one/>
                              </span>
                          </span>
                          <br>
                          process
                      </h4>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-4">
                  <div class="tp-service-4-process-wrap">
                      <div class="tp-service-4-process-list">
                          <span>01</span>
                          <p>Thinking <br>
                              and research</p>
                      </div>
                      <div class="tp-service-4-process-list">
                          <span>02</span>
                          <p>Discovering the <br>
                              problem</p>
                      </div>
                      <div class="tp-service-4-process-list">
                          <span>03</span>
                          <p>Scratch, design, <br>
                              and wireframing</p>
                      </div>
                      <div class="tp-service-4-process-list">
                          <span>04</span>
                          <p>Implementation <br>
                              and solution</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-8">
                  <div class="tp-service-4-process-wrapper pl-70 p-relative">
                      <p class="pl-200 mb-50">Our design system energy comes from a natural source <br>
                          such as wind power, water power, or the heat of the sun. <br>
                          They are more friendly.</p>
                      <div class="tp-service-4-process-thumb fix">
                          <div class="tp_img_reveal">
                              <img src="/img/service/service-4-thumb-1.png" alt="">
                          </div>
                      </div>
                      <div class="tp-service-4-process-video">
                          <modal-video cls="popup-video dgm-testimonial-playbtn" :show-icon="false">
                            <svg-video-play-one />
                          </modal-video>
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