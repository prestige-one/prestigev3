<template>
 <div class="app-benefits-area p-relative mt-20">
      <div class="tp-gsap-bg" :style="{backgroundColor:bgClr}"/>
      <div class="container container-1630">
          <div class="app-benefits-wrapper">
              <div class="row gx-24">
                  <div class="col-lg-4">
                      <div class="app-benefits-item z-index-1 mb-25">
                          <div class="app-benefits-item-thumb">
                              <img src="/img/home-10/benefits/benefits-img-1.png" alt="">
                          </div>
                          <div class="app-benefits-item-content text-center z-index-1">
                              <h4 class="app-benefits-item-title">Select <br> budget range</h4>
                          </div>
                      </div>
                      <div class="app-benefits-item z-index-1 mb-25">
                          <div class="app-benefits-item-thumb">
                              <img src="/img/home-10/benefits/benefits-img-2.png" alt="">
                          </div>
                          <div class="app-benefits-item-2-content text-center z-index-1">
                              <div class="app-benefits-item-2-star">
                                  <span><img src="/img/home-10/benefits/benefits-star.svg" alt=""></span>
                                  <span><img src="/img/home-10/benefits/benefits-star.svg" alt=""></span>
                                  <span><img src="/img/home-10/benefits/benefits-star.svg" alt=""></span>
                                  <span><img src="/img/home-10/benefits/benefits-star.svg" alt=""></span>
                                  <span><img src="/img/home-10/benefits/benefits-star.svg" alt=""></span>

                              </div>
                              <h4 class="app-benefits-item-2-title">100k</h4>
                              <p>Insert some statistic</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="app-benefits-item-3 z-index-1 mb-25">
                          <div class="app-benefits-item-3-bg">
                              <img src="/img/home-10/benefits/benefits-img-3-bg.png" alt="">
                          </div>
                          <div class="app-benefits-item-thumb">
                              <img src="/img/home-10/benefits/benefits-img-3.png" alt="">
                          </div>
                          <div class="app-benefits-item-3-content z-index-1 text-center">
                              <span>Insert some statistic </span>
                              <h4 class="app-benefits-item-2-title">100k</h4>
                              <p>Insert some statistic name</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="app-benefits-item z-index-1 mb-25">
                          <div class="app-benefits-item-thumb">
                              <img src="/img/home-10/benefits/benefits-img-4.png" alt="">
                          </div>
                          <div class="app-benefits-item-content text-center z-index-1">
                              <h4 class="app-benefits-item-title">Explore your <br> interests</h4>
                          </div>
                      </div>
                      <div class="app-benefits-item z-index-1 mb-25">
                          <div class="app-benefits-item-thumb">
                              <img src="/img/home-10/benefits/benefits-img-5.png" alt="">
                          </div>
                          <div class="app-benefits-item-content text-center z-index-1">
                              <h4 class="app-benefits-item-title">
                                Create the perfect <br> trip</h4>
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
const bgClr = computed(() => (isDark.value ? '' : '#101016'));
</script>