<template>
  <div ref="sectionRef" class="crp-about-3-hero-ptb crp-hero-bg" data-background="/img/home-09/hero/hero-bg-shape.png" data-bg-color="#2A4C3A" :style="{'background-image': 'url(/img/home-09/hero/hero-bg-shape.png)', 'background-color': '#2A4C3A'}">
    <div class="container container-1750">
        <div class="row">
            <div class="col-xl-2">
                <div class="crp-hero-subtitle">
                    <span class="tp-section-subtitle-teko mb-50 tp_fade_anim" data-delay=".3">About Us</span>
                </div>
            </div>
            <div class="col-xl-7 col-lg-8 col-md-6">
                <div class="crp-hero-ptb-3">
                    <div class="crp-hero-title-box mb-35">
                        <h2 class="crp-hero-title fs-100 tp_fade_anim">
                            We make strategies, <br> design and development <br> <i class="box d-none d-sm-inline-flex">
                                <span class="eye"/>
                                <span class="eye"/>
                            </i> to create valuable <br> products.
                        </h2>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="crp-about-3-funfact">
                    <div class="crp-hero-funfact-wrap crp-hero-funfact-bg z-index-1 p-relative tp_fade_anim" data-delay=".5" data-background="/img/home-09/hero/funfact-bg-shape.png" style="background-image: url(/img/home-09/hero/funfact-bg-shape.png);">
                        <div class="crp-hero-funfact-line d-none d-xl-inline-block"/>
                        <div class="crp-hero-funfact-img">
                            <img src="/img/home-09/hero/funfact-circle-shape.png" alt="">
                        </div>
                        <div class="crp-hero-funfact-top-content">
                            <h4>Modern Moves</h4>
                            <p>Building outstanding design, development and strategy</p>
                        </div>
                        <div class="crp-hero-funfact-item">
                            <h4><span data-purecounter-duration="1" data-purecounter-end="98" class="purecounter">98</span>+</h4>
                            <div class="crp-hero-funfact-more-details d-flex justify-content-between">
                                <p>Task Completion <br> Achieved</p>
                                <a href="#">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 16L16 2M16 2V16M16 2L2 2" stroke="#17312F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="crp-hero-funfact-item">
                            <h4><span data-purecounter-duration="1" data-purecounter-end="99" class="purecounter">99</span>%</h4>
                            <div class="crp-hero-funfact-more-details d-flex justify-content-between">
                                <p>Genuine repeated happy customers.</p>
                                <a href="#">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 16L16 2M16 2V16M16 2L2 2" stroke="#17312F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
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
const {sectionRef} = useEyeAnimation();
</script>