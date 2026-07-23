<template>
 <div class="app-hero-area app-hero-ptb p-relative include-bg z-index-1" :data-background="bg_img" :style="{backgroundImage: `url(${bg_img})`}">
    <div class="container container-1430">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="app-hero-wrap z-index-2 pb-65 pl-55">
                    <div class="app-hero-heading mb-40">
                        <span class="tp-section-subtitle border-bg tp_fade_anim" data-delay=".3">Heyo !
                            We launched our Alpha!</span>
                        <h4 class="tp-section-title-phudu tp_fade_anim" data-delay=".5">One global
                            <br>plan. No hassle.
                        </h4>
                    </div>
                    <div class="app-hero-btn-box d-flex align-item-center">
                        <div class="app-hero-btn mr-35 tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                            <div class="animated-border-box border-icon">
                                <nuxt-link class="tp-btn-gradient p-relative" href="/contact">
                                    <span>
                                        <svg-apple/>
                                    </span>
                                    Download App
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="app-hero-btn-text tp_text_anim">
                            <p>
                                Your ultimate travel partner. <br>
                                Carries the information you need <br>
                                while travelling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="app-hero-round-shape">
                    <img src="/img/home-10/hero/hero-round-shape.png" alt="">
                </div>
            </div>
        </div>
        <div class="app-hero-bottom-thumb-main z-index-1 tp_fade_anim" data-delay=".5">
            <img src="/img/home-10/hero/hero-hand-shape.png" alt="">
            <img class="shape-1" src="/img/home-10/hero/hero-shape.png" alt="">
            <img class="shape-2" data-speed="1.1" src="/img/home-10/hero/hero-user.png" alt="">
            <img class="shape-3" data-speed="1.1" src="/img/home-10/hero/hero-one-app.png" alt="">
            <img class="shape-4" src="/img/home-10/hero/hero-tools.png" alt="">
            <img class="shape-5" data-speed=".8" src="/img/home-10/hero/hero-secure.png" alt="">
        </div>
        <div class="app-hero-bottom-wrapper include-bg p-relative" :data-background="bottom_bg" :style="{backgroundImage: `url(${bottom_bg})`}">
            <div class="row">
                <div class="col-lg-6">
                    <div class="app-hero-bottom-wrap pt-100 pb-65 pl-60">
                        <div class="app-hero-bottom-icon mb-20">
                            <img src="/img/home-10/hero/app-store.png" alt="">
                        </div>
                        <div class="app-hero-bottom-content">
                            <span class="app-hero-bottom-subtitle">App Store rating</span>
                            <div class="app-hero-bottom-rating z-index-1">
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
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
const bg_img = isDark.value ? '' : '/img/home-10/hero/app-hero-bg.png';
const bottom_bg = isDark.value ? '/img/home-10/hero/app-hero-bottom-bg-dark.png' : '/img/home-10/hero/app-hero-bottom-bg.png';
</script>