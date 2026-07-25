<template>
   <footer>
      <!-- footer area start -->
      <div class="ai-footer-area pt-110 pb-120 p-relative" data-bg-color="#08041D" :style="{ backgroundColor: bg_clr }">
          <div class="container container-1230">
              <div class="row">
                  <div class="col-xl-5 col-lg-6">
                      <div class="ai-footer-widget ai-footer-col-1 tp_fade_anim" data-delay=".3">
                          <h4 class="ai-footer-widget-title">
                              We develop <br>
                              <span class="p-relative">
                                  & create AI experience
                                  <svg-title-shape-five/>
                              </span>
                          </h4>
                          <div class="ai-footer-newsletter">
                              <form action="#">
                                  <label>Newsletter Signup</label>
                                  <div class="ai-footer-input p-relative">
                                      <input type="text" placeholder="Enter your email address">
                                      <span class="ai-footer-icon-1">
                                          <svg-email-three/>
                                      </span>
                                      <button class="ai-footer-icon-2" type="submit">
                                          <span>
                                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                              </svg>
                                          </span>
                                      </button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                      <div class="ai-footer-widget ai-footer-col-2 mt-25 tp_fade_anim" data-delay=".5">
                          <h4 class="ai-footer-widget-title-sm">Socials</h4>
                          <div class="ai-footer-menu">
                              <ul>
                                  <li><a href="#">Twitter</a></li>
                                  <li><a href="#">Facebook</a></li>
                                  <li><a href="#">Instagram</a></li>
                                  <li><a href="#">Dribble</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                      <div class="ai-footer-widget ai-footer-col-3 mt-25 tp_fade_anim" data-delay=".7">
                          <h4 class="ai-footer-widget-title-sm">Menu</h4>
                          <div class="ai-footer-menu">
                              <ul>
                                  <li><a href="#">Home</a></li>
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">Services</a></li>
                                  <li><a href="#">Shop</a></li>
                                  <li><a href="#">Contacts</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div class="ai-footer-widget ai-footer-col-4 mt-25 tp_fade_anim" data-delay=".9">
                          <h4 class="ai-footer-widget-title-sm">Say Hello</h4>
                          <div class="ai-footer-contact-info">
                              <div class="ai-footer-contact-item mb-20">
                                  <a href="mailto:info@email.com">info@email.com</a>
                                  <a href="tel:+18005552569">+1 800 555 25 69</a>
                              </div>
                              <div class="ai-footer-contact-item">
                                  <a href="https://www.google.com/maps/" target="_blank">
                                      The USA — <br> 685 15h Street, Office 408 Seattle, WA 80066
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="ai-copyright-area ai-copyright-ptb p-relative" data-bg-color="#08041D" :style="{ backgroundColor: bg_clr }">
          <div class="ai-copyright-shape-1">
              <img src="/img/home-07/shape/shape-7.png" alt="">
          </div>
          <div class="container container-1230">
              <div class="row align-items-center">
                  <div class="col-md-6">
                      <div class="ai-copyright-logo text-center text-md-start">
                          <nuxt-link href="/"><img data-width="120" src="/img/logo/logo-white.png" alt="logo" width="120"></nuxt-link>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="ai-copyright-content text-center text-md-end">
                          <p>ThemePure © {{new Date().getFullYear()}}. All rights reserved.</p>
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
const bg_clr = computed(() => isDark.value ? '' : '#08041D');
</script>