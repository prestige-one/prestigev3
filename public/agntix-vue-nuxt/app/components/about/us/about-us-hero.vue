<template>
  <div class="ar-hero-area p-relative" :style="{'background-image': `url(${bg_img})`}">
      <div class="ar-about-us-4-shape">
          <img src="/img/about-us/about-us-4/about-us-4-shape-1.png" alt="">
      </div>
      <div class="container container-1230">
          <div class="ar-about-us-4-hero-ptb">
              <div class="row justify-content-center">
                  <div class="col-xl-12">
                      <div class="ar-hero-title-box tp_fade_anim" data-delay=".3">
                          <h3 class="ar-about-us-4-title">
                            Fueling Minds <br> Inspiring Designs..
                          </h3>
                          <div class="ar-about-us-4-title-box d-flex justify-content-end">
                              <span class="tp-section-subtitle pre">About Us</span>
                              <div class="ar-about-us-4-icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="9" viewBox="0 0 81 9" fill="none">
                                      <rect y="4" width="80" height="1" fill="#111013" />
                                      <path d="M77 7.96366L80.5 4.48183L77 1" stroke="#111013" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                              </div>
                              <p>An independent web design and branding agency <br>
                                  in Manchester set up in 2012 who care, build relationships, <br> have industry experience, and win awards.</p>
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
const bg_img = isDark.value ? '/img/blog/blog-masonry/blog-bradcum-bg.png' : '/img/about-us/about-us-4/about-us-4-bg.png';
</script>