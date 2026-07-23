<template>
  <footer>
    <!-- footer area start -->
     <div class="app-footer-area pt-100 pb-60">
        <div class="container container-1230">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6 mb-40">
                    <div class="dgm-footer-widget app-footer-col-1 z-index-1">
                        <div class="dgm-footer-logo mb-30">
                            <nuxt-link href="/">
                              <img v-if="!isDark" data-width="120px" src="/img/logo/logo-black.png" alt="logo" width="120">
                              <img v-if="isDark" data-width="120px" src="/img/logo/logo-white.png" alt="logo" width="120">
                            </nuxt-link>
                        </div>
                        <div class="dgm-footer-widget-paragraph mb-35">
                            <p>Your ultimate travel partner. Carries the <br> info you need while travelling.</p>
                        </div>
                        <div class="app-footer-rating">
                            <div class="app-hero-bottom-rating">
                                <div class="app-hero-bottom-rating-point">
                                    <span>4.8</span>
                                </div>
                                <div class="app-hero-bottom-rating-star">
                                    <div class="app-hero-bottom-rating-stars">
                                        <span><svg-star-seven /></span>
                                        <span><svg-star-seven /></span>
                                        <span><svg-star-seven /></span>
                                        <span><svg-star-seven /></span>
                                        <span><svg-star-seven /></span>
                                    </div>
                                    <a href="#">Based on 204 Reviews <svg-arrow-down-two />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2  col-md-3 mb-40">
                    <div class="dgm-footer-widget app-footer-widget app-footer-col-2">
                        <h4 class="dgm-footer-widget-title">About product</h4>
                        <div class="dgm-footer-widget-menu">
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">How it works</a></li>
                                <li><a href="#">Reviews</a></li>
                                <li><a href="#">Subscribe</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3 mb-40">
                    <div class="dgm-footer-widget app-footer-widget app-footer-col-3">
                        <h4 class="dgm-footer-widget-title">Need help?</h4>
                        <div class="app-footer-widget-info mb-20">
                            <div class="app-footer-widget-info-title">Call us directly?</div>
                            <a class="tp-line-black" href="tel:123456789">(+123) 567 8910</a>
                        </div>

                        <div class="app-footer-widget-info">
                            <div class="app-footer-widget-info-title">Need live support?</div>
                            <a class="tp-line-black" href="mailto:qV2Ct@example.com">support@domain.com</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-40">
                    <div class="dgm-footer-widget app-footer-widget app-footer-col-4 z-index-1">
                        <h4 class="dgm-footer-widget-title">Keep in touch with us</h4>
                        <div class="dgm-footer-widget-paragraph color-style mb-25">
                            <p>Subscribe our newsletter to get the <br> latest news and updates!</p>
                        </div>
                        <div class="dgm-footer-widget-input p-relative">
                            <form action="#">
                                <input type="text" placeholder="Enter your email">
                                <div class="input-button">
                                    <div class="animated-border-box radius-style-2">
                                        <a class="tp-btn-gradient sm p-relative" href="#">Send
                                            <svg-plane-two/>
                                         </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    <!-- footer area end -->

    <!-- copyright area start -->
     <div class="tp-copyright-app-area tp-copyright-2-border app-copyright-border">
        <div class="container container-1430">
            <div class="row align-items-center">
                <div class="col-12">
                    <div class="app-copyright-text text-center z-index-1">
                        <p>© {{new Date().getFullYear()}} Copyrights by Agntix Co. All Rights Reserved. Developed by <a href="#">ThemePure</a></p>
                    </div>
                </div>
            </div>
        </div>
     </div>
    <!-- copyright area end -->
  </footer>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
</script>