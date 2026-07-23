<template>
  <footer>
      <div :class="`design-footer-area ${spacing}`">
          <div class="container container-1680">
              <div class="design-footer-top-wrap pb-50">
                  <div class="row align-items-end">
                      <div class="col-lg-8">
                          <div class="design-footer-top-text">
                              <h4 class="tp-section-title-dirtyline title-box">
                                  <span class="tp-text-right-scroll tp_text_invert_2">rise</span><br>
                                  <span class="tp-text-left-scroll tp_text_invert_2">and roar</span>
                              </h4>
                          </div>
                      </div>
                      <div class="col-lg-4">
                          <div class="design-footer-top-btn text-start text-lg-end">
                              <nuxt-link class="tp-btn-sky-border solid-bg" href="/contact-us">Let’s talk!</nuxt-link>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="design-footer-middle pt-55">
                  <div class="row align-items-center">
                      <div class="col-xl-4 col-lg-5 col-md-6">
                          <div class="design-footer-widget design-footer-col-1 pb-60">
                              <h4 class="design-footer-widget-title">Our Newsletter</h4>
                              <div class="design-footer-widget-input p-relative">
                                  <input type="text" placeholder="Your email address">
                                  <span class="design-footer-widget-input-icon">
                                      <svg-email-one />
                                  </span>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-8 col-lg-7 col-md-6">
                          <div class="design-footer-right pb-60">
                              <div class="row align-items-center">
                                  <div class="col-xl-4">
                                      <div class="design-footer-widget design-footer-col-2">
                                          <h4 class="design-footer-widget-title sm">Call us</h4>
                                          <div class="design-footer-widget-info">
                                              <a class="tp-line-white" href="tel:+(213)555-8573">+(213) 555-8573</a>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-xl-4">
                                      <div class="design-footer-widget design-footer-col-3">
                                          <h4 class="design-footer-widget-title sm">Drop us a line</h4>
                                          <div class="design-footer-widget-info">
                                              <a class="tp-line-white" href="mailto:inquiry@agntix.com">inquiry@agntix.com</a>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-xl-4">
                                      <div class="design-footer-widget design-footer-col-4">
                                          <h4 class="design-footer-widget-title sm">Skype</h4>
                                          <div class="design-footer-widget-info">
                                              <a class="tp-line-white" href="#">agntix.agency</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="design-copyright-area pt-45">
          <div class="container container-1680">
              <div class="row">
                  <div class="col-md-6">
                      <div class="design-copyright-text text-center text-md-start mb-10">
                          <p>© {{ new Date().getFullYear()}} Agntix, All rights reserved.</p>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="design-copyright-backtoTop text-center smooth  text-md-end smooth mb-10">
                          <a href="#top">
                              Back to top
                              <span>
                                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8 19V1M8 1L1 8M8 1L15 8" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                              </span>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="design-copyright-big-text pt-120">
              <img src="/img/home-05/footer/agntix.png" alt="">
          </div>
      </div>
  </footer>
</template>

<script setup lang="ts">
withDefaults(defineProps<{spacing?:string}>(),{
 spacing:'pt-150'
})
</script>