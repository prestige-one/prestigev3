<template>
  <div ref="sectionRef" class="crp-hero-area crp-hero-bg" data-bg-color="#2A4C3A" data-background="/img/home-09/hero/hero-bg-shape.png" style="background-image: url(/img/home-09/hero/hero-bg-shape.png);background-color: #2A4C3A;">
      <div class="container container-1550">
          <div class="row align-items-end">
              <div class="col-xl-9 col-lg-8">
                  <div class="crp-hero-ptb">
                      <div class="crp-hero-title-box mb-35">
                          <h2 class="crp-hero-title tp_fade_anim">
                              Grow your
                              <i class="box d-none d-sm-inline-flex">
                                  <span class="eye"/>
                                  <span class="eye"/>
                              </i>
                              company with our
                              <span>corporate</span> agency
                          </h2>
                      </div>
                      <div class="crp-hero-review-box d-flex align-items-center">
                          <div class="crp-hero-avater tp_fade_anim" data-delay=".3">
                              <img src="/img/home-09/avater/avater-1.png" alt="">
                          </div>
                          <div class="crp-hero-ratting d-flex align-items-center tp_fade_anim" data-delay=".5">
                              <div class="crp-hero-ratting-text">
                                  <span>4.8</span>
                              </div>
                              <div class="crp-hero-ratting">
                                  <div class="crp-hero-ratting-icon">
                                      <span><svg-star-six/></span>
                                      <span><svg-star-six/></span>
                                      <span><svg-star-six/></span>
                                      <span><svg-star-six/></span>
                                      <span><svg-star-six/></span>
                                  </div>
                                  <div class="crp-hero-ratting-details">
                                      <a href="#">
                                          Based on 204 Reviews
                                          <span>
                                              <svg-arrow-down/>
                                          </span>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-xl-3 col-lg-4">
                  <div class="crp-hero-funfact-wrap crp-hero-funfact-bg z-index-1 p-relative tp_fade_anim" data-delay=".5" data-background="/img/home-09/hero/funfact-bg-shape.png" style="background-image: url(/img/home-09/hero/funfact-bg-shape.png);">
                      <div class="crp-hero-funfact-line d-none d-xl-inline-block"/>
                      <div class="crp-hero-funfact-img">
                          <img src="/img/home-09/hero/funfact-circle-shape.png" alt="shape">
                      </div>
                      <div class="crp-hero-funfact-top-content">
                          <h4>Modern Moves</h4>
                          <p>Building outstanding design, development and strategy</p>
                      </div>
                      <div class="crp-hero-funfact-item">
                          <h4><counter-item :min="0" :max="98" :no-itag="true" />+</h4>
                          <div class="crp-hero-funfact-more-details d-flex justify-content-between">
                              <p>Task Completion <br> Achieved</p>
                              <a href="#">
                                  <svg-arrow-up/>
                              </a>
                          </div>
                      </div>
                      <div class="crp-hero-funfact-item">
                          <h4><counter-item :min="0" :max="95" :no-itag="true" />%</h4>
                          <div class="crp-hero-funfact-more-details d-flex justify-content-between">
                              <p>Genuine repeated happy customers.</p>
                              <a href="#">
                                  <svg-arrow-up/>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const {sectionRef} = useEyeAnimation();
</script>