<template>
  <div :class="`tp-about-area pt-140 ${spacingCls} tp-bounce-trigger`" :data-bg-color="bgColur" :style="{backgroundColor:bgColur}">
      <div class="container">
          <div class="tp-about-box p-relative">
              <div class="tp-about-shape-1 tp-bounce d-none d-md-block">
                  <img src="/img/home-01/about/about-shape-1.png" alt="about-shape">
              </div>
              <div class="row">
                  <div class="col-xl-3">
                      <div class="tp-about-title-box">
                          <span class="tp-section-subtitle pre tp_fade_anim">WHO WE ARE</span>
                      </div>
                  </div>

                  <div class="col-xl-9">
                      <div class="tp-about-wrap">
                          <div class="tp-about-text tp_fade_anim">
                              <p>
                                  An independent web design and branding agency in Manchester set up in 2010 who care,
                                  build relationships, have industry experience, and win awards.
                              </p>
                          </div>
                          <div class="row">
                              <div class="col-xl-5 col-lg-4 col-md-5">
                                  <div class="tp-about-thumb">
                                      <img data-speed=".8" src="/img/home-01/about/about-1.jpg" alt="about-image">
                                  </div>
                              </div>
                              <div class="col-xl-7 col-lg-8 col-md-7">
                                  <div class="tp-about-funcact-wrap">
                                      <div class="tp-about-avater-info">
                                          <img class="tp_fade_anim" data-delay=".3" data-fade-from="right" src="/img/home-01/about/about-avater.png" alt="about-avater">
                                          <div class="tp_text_anim">
                                              <p>Driven by a passion for innovation, we specialize in <br> delivering top-quality design solutions</p>
                                          </div>
                                      </div>
                                      <!-- counter area -->
                                      <counter-one />
                                      <!-- counter area end -->
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
interface Props{
    bgColur?:string;
    spacingCls?:string
}
withDefaults(defineProps<Props>(),{
    bgColur:"",
    spacingCls:"pb-120"
})
</script>