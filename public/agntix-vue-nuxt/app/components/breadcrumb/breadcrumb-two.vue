<template>
  <div class="tp-breadcrumb-area tp-breadcrumb-ptb include-bg" :style="{backgroundImage:`url(${bg_img})`}">
      <div :class="`container container-${container}`">
          <div class="row justify-content-center">
              <div class="col-xxl-12">
                  <div class="tp-blog-heading-wrap p-relative pb-130">
                      <span class="tp-section-subtitle pre tp_fade_anim">Blog Post 
                        <svg-arrow-long-right/>
                      </span>

                      <h3 class="tp-blog-title tp_fade_anim smooth">Best blog  
                        <img v-if="!isDark" src="/img/about-us/about-us-4/about-us-4-shape-1.png" alt="shape">
                        <img v-if="isDark" src="/img/blog/blog-masonry/blog-bradcum-shape.png" alt="shape">
                            <br> <a href="#down">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M9.99999 1V19M9.99999 19L1 10M9.99999 19L19 10" :stroke="isDark?'#fff':'black'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </a> of the week...
                      </h3>

                      <div class="tp-blog-shape">
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109" fill="none">
                                  <path d="M46.8918 0.652597C52.0111 11.5756 61.1509 45.3262 42.3414 57.6622C32.5453 63.8237 11.8693 68.6772 1.79348 40.7372C-2.00745 30.1973 6.53261 20.5828 26.243 25.965C37.6149 29.0703 65.0949 36.1781 78.8339 57.5398C86.0851 68.8141 93.074 92.3859 89.9278 107.942M89.9278 107.942C90.8943 100.431 95.9994 85.8585 108.687 87.6568M89.9278 107.942C90.4304 103.013 86.878 91.2724 68.6481 83.7468M63.5129 27.0092C68.0375 28.7613 82.5356 36.982 88.0712 51.886" :stroke="isDark?'white':'black'" stroke-width="1.5" />
                              </svg>
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{container?:string}>(),{
    container:'1230'
});

const {isDark} = useIsDark();
const bg_img = computed(() => isDark.value ? '/img/blog/blog-masonry/blog-bradcum-bg.png' : '/img/about-us/about-us-4/about-us-4-bg.png');
</script>