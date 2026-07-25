<template>
 <div :class="`tp-hero-5-area ${isDark?'coffe-bg':''} p-relative`">
      <div class="container container-1750">
          <div class="tp-hero-5-bdr-left tp-hero-5-ptb">
              <div class="row">
                  <div class="col-xxl-3 tp-hero-5-thumb-wrap">
                      <div class="tp-hero-5-thumb-wrap">
                          <div class="tp-hero-5-thumb-content">
                              <p>
                                  <span>01</span> <br>
                                  I fell in love <br> with modelling.
                              </p>
                          </div>
                          <div class="tp-hero-5-thumb-sm">
                              <div class="tp_img_reveal">
                                  <img src="/img/home-15/hero/hero-1.jpg" alt="" data-speed="1.1">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xxl-9">
                      <div class="tp-hero-5-title-box z-index-5 mb-120">
                          <h4 class="tp-hero-5-title tp_fade_anim" data-delay=".3"><span>Hello</span> <br> I’m Rose</h4>
                          <div class="tp_fade_anim" data-delay=".5">
                              <p>A Creative Fashion Designer</p>
                          </div>
                          <div class="tp_fade_anim" data-delay=".7">
                              <nuxt-link class="tp-btn-cream-bdr" href="/portfolio-details-modern">See portfolio</nuxt-link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="tp-hero-5-big-thumb anim-zoomin-wrap">
          <div class="anim-zoomin">
              <img src="/img/home-15/hero/hero-2.jpg" alt="">
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
</script>