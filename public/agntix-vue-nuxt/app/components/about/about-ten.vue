
<template>
  <div class="st-about-area st-about-ptb p-relative pt-160 pb-160">
      <div class="st-about-shape" data-speed=".9">
          <img src="/img/home-12/hero/hero-shape.png" alt="">
      </div>
      <div class="container container-1320">
          <div class="row">
              <div class="col-lg-6">
                  <div class="st-about-wrap pl-80">
                      <div class="st-about-card">
                          <div class="st-about-card-content">
                              <div class="st-about-card-top d-flex align-items-center justify-content-between mb-35">
                                  <div class="st-about-card-tag">
                                      <span>2019, 2025</span>
                                  </div>
                                  <div class="st-about-card-btn">
                                      <nuxt-link href="/about-creative">
                                        <svg-arrow-up-six/>
                                      </nuxt-link>
                                  </div>
                              </div>
                              <div class="st-about-card-thumb text-center mb-35">
                                  <img src="/img/home-12/about/about-ball.png" alt="">
                              </div>
                              <div class="st-about-card-bottom">
                                  <span>Award <br> winning agency</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6">
                  <div class="st-about-wrapper">
                      <div class="st-about-heading mb-60">
                          <div class="tp_fade_anim" data-delay=".3">
                              <h4 class="st-about-title">We're a San Francisco design and <br>
                                  development team dedicated to <br>
                                  creating user-friendly digital <br>
                                  Products experiences.</h4>
                          </div>
                      </div>
                      <div class="st-about-box">
                          <div class="tp-about-funcact-wrap">
                              <div class="tp-about-avater-info">
                                  <img class="tp_fade_anim" data-delay=".3" data-fade-from="right" src="/img/home-01/about/about-avater.png" alt="">
                                  <div class="tp_text_anim">
                                      <p>Driven by a passion for innovation, we specialize in <br> delivering top-quality design solutions</p>
                                  </div>
                              </div>
                              <div class="row">
                                  <div v-for="item in counter_data" :key="item.id" class="col-md-6 col-sm-6">
                                      <div class="tp-about-funcact-item tp_fade_anim mb-30" :data-delay="item.delay">
                                          <span><counter-item :min="0" :max="item.value" />{{ item.suffix }}</span>
                                          <p v-html="sanitizeHtml(item.description)" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="col-lg-5">
                  <div class="st-about-thumb-box" data-speed="1.1">
                      <img src="/img/home-12/about/about-thumb-1.jpg" alt="">
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const counter_data = [
    {
        id: 1,
        value: 98,
        suffix: '%',
        description: 'Clients Satisfied and <br> Repeating',
        delay: '.3',
    },
    {
        id: 2,
        value: 125,
        suffix: '+',
        description: 'Projects Completed in <br> 24 Countries',
        delay: '.5',
    }
];
</script>