<template>
  <footer :class="`${topCls} pb-20`">

    <div class="dgm-footer-bg p-relative">

        <!-- footer area start -->
        <div class="dgm-footer-area black-bg-5 pt-100 pb-60">
            <div class="container container-1430">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-40">
                        <div class="dgm-footer-widget dgm-footer-col-1 z-index-1 tp_fade_anim" data-delay=".3">
                            <div class="dgm-footer-logo mb-30">
                                <nuxt-link href="/">
                                  <img src="/img/logo/logo-white.png" alt="logo" width="120">
                                </nuxt-link>
                            </div>
                            <div class="dgm-footer-widget-paragraph mb-35">
                                <p>We are committed to helping you succeed, and we will work with you every step of the way.</p>
                            </div>
                            <div class="dgm-footer-widget-social">
                                <footer-social/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2  col-md-3 mb-40">
                        <div class="dgm-footer-widget dgm-footer-col-2 tp_fade_anim" data-delay=".4">
                            <h4 class="dgm-footer-widget-title">Service</h4>
                            <div class="dgm-footer-widget-menu">
                                <ul>
                                    <li><a href="#">UI/UX Design</a></li>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Branding</a></li>
                                    <li><a href="#">Webflow</a></li>
                                    <li><a href="#">Development</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-3 mb-40">
                        <div class="dgm-footer-widget dgm-footer-col-3 tp_fade_anim" data-delay=".5">
                            <h4 class="dgm-footer-widget-title">Company</h4>
                            <div class="dgm-footer-widget-menu">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Agency</a></li>
                                    <li><a href="#">Achievement</a></li>
                                    <li><a href="#">Webflow</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-40">
                        <div class="dgm-footer-widget dgm-footer-col-4 z-index-1 tp_fade_anim" data-delay=".6">
                            <h4 class="dgm-footer-widget-title">Newsletter</h4>
                            <div class="dgm-footer-widget-paragraph color-style mb-35">
                                <p>Subscribe our newsletter to get the <br> latest news and updates!</p>
                            </div>
                            <div class="dgm-footer-widget-input p-relative">
                                <form action="#">
                                    <input type="text" placeholder="Enter your email">
                                    <span class="input-icon">
                                        <svg-email-one color-name="#A1A4AA" stroke-width="1.5"/>
                                    </span>
                                    <button class="input-button" type="submit">
                                        <span>
                                            <svg-plane-one/>
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer area end -->

        <!-- copyright area start -->
        <div class="tp-copyright-2-area tp-copyright-2-border black-bg-5">
            <div class="container container-1430">
                <div class="row align-items-center">
                    <div class="col-xl-4 col-lg-5 col-md-6">
                        <div class="tp-copyright-2-left text-center text-md-start z-index-1">
                            <p>© {{new Date().getFullYear()}} <a href="#">Agntix</a>. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                        <div class="tp-copyright-2-middle">
                            <a href="mailto:agntix@gmail.com">
                                <span>
                                    <svg-email-two/>
                                </span>
                                agntix@gmail.com
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-4 col-md-6">
                        <div class="tp-copyright-2-right">
                            <div class="tp-copyright-2-menu text-md-end text-center">
                                <ul>
                                    <li><a href="#">Privacy policy </a></li>
                                    <li><a href="#">Terms and conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- copyright area end -->

    </div>

  </footer>
</template>

<script setup lang="ts">
withDefaults(defineProps<{topCls?: string}>(), {
  topCls:''
})
</script>