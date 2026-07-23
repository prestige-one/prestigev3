<template>
  <footer>
      <!-- footer area start -->
      <div class="st-footer-area pt-115">
          <div class="container container-1320">
              <div class="st-footer-top-border p-relative">
                  <div class="row">
                      <div class="col-xl-5 col-lg-5 col-md-7">
                          <div class="st-footer-widget st-footer-col-1 mb-70 tp_fade_anim" data-delay=".3">
                              <div class="ar-footer-logo mb-30">
                                  <nuxt-link href="/">
                                    <img v-if="!isDark" data-width="140" src="/img/logo/logo-black.png" alt="logo" width="140">
                                    <img v-if="isDark" data-width="140" src="/img/logo/logo-white.png" alt="logo" width="140">
                                  </nuxt-link>
                              </div>
                              <div class="st-footer-widget-content">
                                  <p>
                                      @ {{new Date().getFullYear()}} Copyright - Agntix | Design by <br>
                                      <a href="#">“Themepure’’</a> | Powered by Envato
                                  </p>
                              </div>
                              <div class="st-footer-widget-social">
                                  <span class="st-footer-widget-social-title">Follow us on:</span>
                                  <div class="tp-footer-widget-social">
                                    <a href="#">
                                      <span><svg-social-fb-three/></span>
                                    </a>
                                    <a href="#">
                                        <span><svg-social-x-three/></span>
                                    </a>
                                    <a href="#">
                                        <span><svg-social-dribble-two/></span>
                                    </a>
                                    <a href="#">
                                        <span><svg-social-instagram-two/></span>
                                    </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-5">
                          <div class="st-footer-widget st-footer-col-2 mb-70 tp_fade_anim" data-delay=".5">
                              <div class="st-footer-widget-box d-lg-flex">
                                  <h4 class="st-footer-widget-title">Find us</h4>
                                  <div class="st-footer-widget-info">
                                      <div class="st-footer-widget-info-title">
                                          <a class="tp-line-black" href="#">Los angeles, USA</a>
                                      </div>
                                      <div class="st-footer-widget-info-title">
                                          <a class="tp-line-black" href="tel:0123456789">+1 (208) 120-802</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-3 col-lg-3 col-md-5">
                          <div class="st-footer-widget st-footer-col-3 mb-70 tp_fade_anim" data-delay=".6">
                              <div class="st-footer-widget-box d-lg-flex">
                                  <h4 class="st-footer-widget-title">Quick link</h4>
                                  <div class="st-footer-widget-menu">
                                      <ul>
                                          <li>
                                            <a class="tp-line-black" href="#">About us</a>
                                          </li>
                                          <li>
                                            <a class="tp-line-black" href="#">Services</a>
                                          </li>
                                          <li>
                                            <a class="tp-line-black" href="#">Projects</a>
                                          </li>
                                          <li>
                                            <a class="tp-line-black" href="#">Blogs</a>
                                          </li>
                                          <li>
                                            <a class="tp-line-black" href="#">Contact</a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="st-footer-top-icon">
                      <span><svg-arrow-bottom-long/></span>
                  </div>
              </div>
          </div>
      </div>
      <div class="st-copyright-area st-copyright-ptb">
          <div class="container container-1320">
              <div class="row align-items-center">
                  <div class="col-lg-12">
                      <div class="st-copyright-text text-center">
                          <span class="st-copyright-sub">Ready to work together?</span>
                          <h3 class="st-copyright-title">
                            <nuxt-link href="/portfolio-col-3">START PROJECT   <span><svg-arrow-seven/></span>
                            </nuxt-link>
                          </h3>
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
onMounted(() => {
  if(isDark.value) {
    const footerArea = document.querySelector('.st-footer-area') as HTMLElement;
    const copyrightArea = document.querySelector('.st-copyright-area') as HTMLElement;
    if(footerArea) footerArea.style.backgroundColor = '#1A1B1E';
    if(copyrightArea) copyrightArea.style.backgroundColor = '#1A1B1E';
  }
});
</script>