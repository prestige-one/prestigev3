<template>
   <div class="tp-pd-1-np-ptb pt-40">
      <div class="container container-1230">
          <div class="row justify-content-md-center">
              <div class="col-lg-8">
                  <div class="tp-pd-1-np-box hover-reveal-item p-relative" @mousemove="(e) => handleMouseMove(e, '.hover-reveal-item')">
                      <a href="#" class="tp-award-box-left tp-pd-1-np-content z-index-1 text-center">
                          <span>next</span>
                          <h4 class="tp-pd-1-np-title">merit global</h4>
                          <p>Research, UX, UI Design</p>
                      </a>
                      <!-- <div class="tp-award-reveal-img" data-background="/img/portfolio/portfolio-details-1/portfolio-details-np.jpg" style="background-image: url(/img/portfolio/portfolio-details-1/portfolio-details-np.jpg);"/> -->
                      <div
                        class="tp-award-reveal-img"
                        :style="{ backgroundImage: `url(/img/portfolio/portfolio-details-1/portfolio-details-np.jpg)` }"
                    />
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const { handleMouseMove } = useMouseImageReveal();
</script>