<template>
  <div :class="`crp-success-area ${spacing} p-relative`">
      <div class="container-fluid p-0">
          <div class="row gx-10">
              <div class="col-xl-6">
                  <div class="row gx-10">
                      <div class="col-xl-6 col-lg-6 col-md-6 mb-10">
                          <div class="crp-success-item about-us p-relative" data-bg-color="#1B1B1D" data-background="/img/about-us/about-us-thumb-3.png" style="background-image: url(/img/about-us/about-us-thumb-3.png);" :style="{'background-color': bgClr}">
                              <div class="crp-about-us-item-wrap">
                                  <div class="crp-about-us-item-icon">
                                      <span>
                                        <svg-circle-one/>
                                      </span>
                                  </div>
                                  <h4 class="crp-about-us-item-title">
                                    Unique and <br> New Business Tips</h4>
                                  <div class="crp-about-us-item-btn-box">
                                      <span>42k people</span>
                                      <a href="#"><span>Explore 
                                        <svg-arrow-up-nine/>
                                          </span>
                                       </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 mb-10">
                          <div class="crp-success-item">
                              <div class="crp-success-img anim-zoomin-wrap">
                                  <img class="w-100 anim-zoomin" src="/img/about-us/about-us-thumb-2.jpg" alt="">
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 mb-10">
                          <div class="crp-success-item about-us">
                              <div class="crp-success-video anim-zoomin-wrap">
                                  <video loop muted autoplay playsinline src="/img/about-us/about-us-3.mp4"/>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 mb-10">
                          <div class="crp-success-item about-us-img p-relative" data-bg-color="#1B1B1D" style="background-color: #1B1B1D;">
                              <div class="crp-about-us-item-img">
                                  <img src="/img/about-us/about-us-thumb-4.png" alt="">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="crp-success-about-us-big-img anim-zoomin-wrap">
          <img class="w-100 anim-zoomin" src="/img/about-us/about-us-thumb-1.jpg" alt="">
      </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{bgClr?: string;spacing?:string}>(), {
    bgClr:'#1B1B1D',
    spacing:'mb-70'
})
</script>

