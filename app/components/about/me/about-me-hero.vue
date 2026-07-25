<template>
  <div class="pp-top-wrap">
      <!-- hero area start -->
      <div class="pp-about-me-area pp-about-me-ptb z-index-1" data-bg-color="#2F1F19" style="background-color: #2F1F19">
          <div class="container-fluid">
              <div class="pp-about-me-heading text-center z-index-1 d-none d-md-block">
                  <h4 class="pp-about-me-title tp-char-animation">Hello, I’m Joris Brian</h4>
              </div>
              <div class="pp-about-me-heading-slider text-center z-index-1 d-block d-md-none">
                  <div class="swiper-container tp-brand-active">
                      <div class="swiper-wrapper slide-transtion">
                          <div v-for="i in 5" :key="i" class="swiper-slide">
                              <h4 class="pp-about-me-title">Hello, I’m Joris Brian</h4>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container container-1350">
              <div class="row">
                  <div class="col-xl-4 col-lg-4 col-md-12">
                      <div class="pp-hero-left z-index-1">
                          <div class="pp-about-me-hero-left pt-90 pb-100 z-index-1">
                              <div class="pp-about-me-btn">
                                  <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                          <path d="M1 1L15 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                          <path d="M15 1V15H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                    </a>
                              </div>
                              <span class="pp-hero-text tp-split-text tp-split-right">Freelance 3D <br>designer based <br>in London</span>
                              <p>Open to work</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-7 col-lg-7 order-lg-2 order-3">
                      <div class="pp-about-me-thumb z-index-1 text-center">
                          <img src="/img/about-me/about-me-thumb-1.png" alt="">
                      </div>
                  </div>
                  <div class="col-xl-1 col-lg-1 col-md-12 order-lg-3 order-2">
                      <div class="pp-about-me-social text-start text-lg-end pt-160 z-index-2">
                          <div class="tp-footer-widget-social">
                              <a href="#">
                                  <span>
                                      <svg-social-dribble-two/>
                                  </span>
                              </a>
                              <a href="#">
                                  <span>
                                      <svg-social-x-three/>
                                  </span>
                              </a>
                              <a href="#">
                                  <span>
                                      <svg-social-instagram-two/>
                                  </span>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- hero area end -->

      <!-- brand area start -->
      <div class="pp-brand-area ar-brand-style z-index-4" data-bg-color="#FFF669" style="background-color: #FFF669">
          <div class="pp-about-me-shape">
              <div class="shape-left">
                  <img src="/img/about-me/about-me-hand-left.png" alt="">
              </div>
              <div class="shape-right">
                  <img src="/img/about-me/about-me-hand-right.png" alt="">
              </div>
          </div>
          <div class="tp-brand-wrapper pp-about-me-brand-wrap z-index-1">
              <brand-area-fifteen brand-cls="pp-about-me-brand" svg-fill="#852A1B" />
          </div>
      </div>
      <!-- brand area end -->
  </div>
</template>

<script setup lang="ts">

</script>