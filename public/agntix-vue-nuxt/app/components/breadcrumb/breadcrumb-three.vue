<template>
 <div class="tp-breadcrumb-area tp-breadcrumb-ptb" :style="{backgroundImage:`url(${bg_img})`}">
      <div class="container container-1430">
          <div class="row justify-content-center">
              <div class="col-xl-12">
                  <div class="tp-portfolio-inner-box pb-100">
                      <div class="tp-portfolio-heading pb-30 d-flex p-relative tp_fade_anim">
                          <span class="tp-section-subtitle pre orange-color tp_fade_anim mr-95">Portfolio 
                            <svg xmlns="http://www.w3.org/2000/svg" width="82" height="9" viewBox="0 0 82 9" fill="none">
                                  <path d="M78 7.95425L81.5 4.47169L78 0.989136M1 3.98977H81V4.98977H1V3.98977Z" stroke="#FF5722" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                          </span>

                          <h3 class="tp-blog-title fs-100 tp_fade_anim">We Make 
                            <img v-if="!isDark" src="/img/about-us/about-us-4/about-us-4-shape-1.png" alt=""> 
                            <img v-if="isDark" src="/img/portfolio/portfolio-shape.png" alt=""> 
                            <br>
                             Digital Beautiful
                         </h3>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
const bg_img = isDark.value ? '/img/blog/blog-masonry/blog-bradcum-bg.png' : '/img/about-us/about-us-4/about-us-4-bg.png';
</script>