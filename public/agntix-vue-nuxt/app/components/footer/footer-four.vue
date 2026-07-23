<template>
   <footer :class="['creative-footer-style',topCls,'p-relative z-index-1',{ 'black-bg-8': isDark}]" :style="{ backgroundColor: isDark ? '' : '#F6F6F9' }">
      <div class="tp-footer-widget-social">
          <div class="tp_fade_anim" data-delay=".9" data-fade-from="top" data-ease="bounce">
              <a href="#">
                  <span>
                      <svg-social-fb-three/>
                  </span>
              </a>
          </div>
          <div class="tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
              <a href="#">
                  <span>
                      <svg-social-x-three/>
                  </span>
              </a>
          </div>
          <div class="tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
              <a href="#">
                  <span>
                      <svg-social-dribble-two/>
                  </span>
              </a>
          </div>
          <div class="tp_fade_anim" data-delay=".3" data-fade-from="top" data-ease="bounce">
              <a href="#">
                  <span>
                      <svg-social-instagram-two/>
                  </span>
              </a>
          </div>
      </div>

      <div class="creative-footer-text d-none d-lg-block">
          <p>Agntix I’ve gone too far, send me back up 👆</p>
      </div>

      <!-- footer area start -->
      <div class="creative-footer-area pt-160 pb-35">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-xl-4 col-lg-4">
                      <div class="tp-footer-widget tp-footer-col-1 pb-40 tp_fade_anim" data-delay=".3">
                          <h4 class="tp-footer-widget-title">Helping <br> start-ups scale & grow.</h4>
                      </div>
                  </div>
                  <div class="col-xl-5 col-lg-4 col-md-6">
                      <div class="tp-footer-widget tp-footer-col-2 pb-40 tp_fade_anim" data-delay=".5">
                          <h4 class="tp-footer-widget-title-sm pre mb-25">Quick links</h4>
                          <div class="tp-footer-widget-menu">
                              <ul>
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">Who we are</a></li>
                                  <li><a href="#">Services</a></li>
                                  <li><a href="#">Projects</a></li>
                                  <li><a href="#">Blog</a></li>
                                  <li><a href="#">Pricing</a></li>
                                  <li><a href="#">Contact Us</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6">
                      <div class="tp-footer-widget tp-footer-col-3 pb-40 mb-30 tp_fade_anim" data-delay=".7" data-on-scroll="3">
                          <h4 class="tp-footer-widget-title-sm pre mb-20">Contact</h4>
                          <div class="tp-footer-widget-info">
                              <a href="mailto:agntixs@studio.com">agntixs@studio.com</a>
                              <a href="tel:+3025550107">+(302) 555-0107</a>
                          </div>
                          <div class="tp-footer-widget-info">
                              <a href="https://www.google.com/maps/" target="_blank">4517 Washington Ave. Manchester, <br> Kentucky 39495</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="tp-copyright-area">
          <div class="container">
              <div class="row">
                  <div class="col-xl-12">
                      <div class="tp-copyright-content text-center">
                          <h2 class="tp-copyright-big-text">Agntix.studio</h2>
                      </div>
                  </div>
              </div>
              <div class="tp-copyright-bottom">
                  <div class="row">
                      <div class="col-lg-5">
                          <div class="tp-copyright-left text-center text-lg-start">
                              <span>©{{new Date().getFullYear()}} Agntix Design Studio.</span>
                          </div>
                      </div>
                      <div class="col-lg-7">
                          <div class="tp-copyright-right text-center text-lg-end">
                              <a href="#">Terms and Conditions</a>
                              <a href="#">Privacy Policy</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- footer area end -->

  </footer>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
withDefaults(defineProps<{topCls?:string}>(),{
    topCls: ''
});
</script>