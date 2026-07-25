<template>
  <div class="dgm-hero-top pt-20">
    <div :class="`dgm-hero-ptb ${isDark?'black-bg':'grey-bg-2'} fix z-index-1 p-relative`">
        <div class="dgm-hero-bg" data-background="/img/home-03/hero/hero-bg-shape.png" style="background-image: url(/img/home-03/hero/hero-bg-shape.png);"/>
        <div class="dgm-hero-rotate-text">
            <span>Award winning agency</span>
        </div>
        <div class="dgm-hero-social-box">
            <div class="dgm-hero-social-text">
                <span>Follow</span>
            </div>
            <div class="dgm-hero-social">
                <a href="#">
                    <span>
                        <svg-social-fb/>
                    </span>
                </a>
                <a href="#">
                    <span>
                        <svg-social-x/>
                    </span>
                </a>
                <a href="#">
                    <span>
                        <svg-social-instagram/>
                    </span>
                </a>
                <a href="#">
                    <span>
                        <svg-social-dribble/>
                    </span>
                </a>
            </div>
        </div>
        <div class="container container-1430">
            <div class="row">
                <div class="col-lg-6">
                    <div class="dgm-hero-content mb-120">
                        <span class="dgm-hero-subtitle tp_fade_anim" data-delay=".3">🔥 BEST MARKETING AGENCY</span>
                        <h4 class="dgm-hero-title tp_fade_anim" data-delay=".5">
                            Digital <img class="dgm-hero-title-mike d-none d-md-inline-block" src="/img/home-03/hero/mike.png" alt="mike-img">
                            marketing agency
                        </h4>
                        <div class="tp_fade_anim" data-delay=".7">
                            <nuxt-link class="tp-btn-black-square" href="/contact">
                                <span>
                                    <span class="text-1">Get in Touch</span>
                                    <span class="text-2">Get in Touch</span>
                                </span>
                                <i>
                                    <svg-arrow-two/>
                                    <svg-arrow-two/>
                                </i>
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="dgm-hero-funfact-wrap">
                        <div class="row">
                            <div v-for="item in funFacts" :key="item.id" class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                <div class="dgm-hero-funfact tp_fade_anim mb-40" :data-delay="item.delay" data-fade-from="top" data-ease="bounce">
                                  <span><counter-item :min="0" :max="item.end" />
                                    {{item.suffix}}
                                  </span>
                                  
                                  <p v-html="sanitizeHtml(item.text)"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dgm-hero-thumb anim-zoomin-wrap">
            <div class="anim-zoomin">
                <img src="/img/home-03/hero/hero-img.png" alt="hero-img">
            </div>
            <div class="dgm-hero-text-box" style="background-image: url(/img/home-03/hero/hero-text-shape.png);">
                <img src="/img/home-03/hero/hi-shape.png" alt="">
                <p>World-class digital media agency.</p>
                <nuxt-link class="dgm-hero-arrow" href="/contact">
                    <span>
                        <svg-arrow-three/>
                    </span>
                </nuxt-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
const funFacts = [
        {
            id: 1,
            end: 98,
            suffix: '%',
            text: "Clients Satisfied and <br /> Repeating",
            delay: '.7',
        },
        {
            id: 2,
            end: 125,
            suffix: '+',
            text: "Projects Completed <br /> in 24 Countries",
            delay: '.9',
        },
    ];
</script>