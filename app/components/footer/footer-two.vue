<template>
 <footer>
    <!-- footer area start -->
    <div class="des-footer-wrap pb-15">
        <div class="container-fluid">
            <div class="des-footer-area des-footer-bg text-center include-bg" data-background="/img/home-02/footer/footer-bg.jpg" style="background-image: url(/img/home-02/footer/footer-bg.jpg);">
                <div class="des-footer-top d-flex align-items-center justify-content-between">
                    <span>Creative Design Agency</span>
                    <div class="des-footer-logo">
                        <nuxt-link href="/">
                          <img data-width="140px" src="/img/logo/logo-white.png" alt="">
                        </nuxt-link>
                    </div>
                    <span>Based in London</span>
                </div>
                <div class="des-footer-middle">
                    <span>Contact us and let’s bring your vision to life</span>
                    <h3 class="des-footer-title"><nuxt-link class="text-scale-anim" href="/contact">Contact Us</nuxt-link></h3>
                </div>
                <div class="des-footer-bottom d-flex align-items-center justify-content-between">
                    <span>Powered by ThemePure</span>
                    <div class="des-footer-bottom-social text-center">
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                        <a href="#">Behance</a>
                        <a href="#">Dribbble</a>
                    </div>
                    <span>Copyright © {{ new Date().getFullYear() }}</span>
                </div>
            </div>
        </div>
    </div>
    <!-- footer area end -->

 </footer>
</template>

<script setup lang="ts">
onMounted(() => {
  textScaleAnimation();
})
</script>