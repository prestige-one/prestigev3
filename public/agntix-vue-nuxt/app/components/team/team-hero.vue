<template>
  <div class="tp-team-inner-ptb p-relative pb-70 include-bg" :style="{backgroundImage:`url(${bg_img})`}">
      <div class="tp-career-shape-1">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                  <path d="M36.3761 0.5993C40.3065 8.98556 47.3237 34.898 32.8824 44.3691C25.3614 49.0997 9.4871 52.826 1.7513 31.3747C-1.16691 23.2826 5.38982 15.9009 20.5227 20.0332C29.2536 22.4173 50.3517 27.8744 60.9 44.2751C66.4672 52.9311 71.833 71.0287 69.4175 82.9721M69.4175 82.9721C70.1596 77.2054 74.079 66.0171 83.8204 67.3978M69.4175 82.9721C69.8033 79.1875 67.076 70.1737 53.0797 64.3958M49.1371 20.8349C52.611 22.1801 63.742 28.4916 67.9921 39.9344" :stroke="isDark?'#fff':'#030303'" stroke-width="1.5" />
              </svg>
          </span>
      </div>
      <div class="container container-1230">
          <div class="ar-about-us-4-hero-ptb">
              <div class="row justify-content-center">
                  <div class="col-xl-12">
                      <div class="ar-hero-title-box tp_fade_anim" data-delay=".3">
                          <div class="ar-about-us-4-title-box d-flex align-items-center mb-20" :class="{'shape-color':isDark}">
                              <span class="tp-section-subtitle pre tp_fade_anim">Team</span>
                              <div class="ar-about-us-4-icon">
                                  <svg-arrow-long-right/>
                              </div>
                          </div>
                          <h3 class="tp-career-title">Meet the mins 
                          <span class="shape-1">
                            <img v-if="!isDark" src="/img/about-us/about-us-4/about-us-4-shape-1.png" alt="">
                            <img v-if="isDark" src="/img/portfolio/portfolio-shape.png" alt="">
                          </span> <br>
                              <span class="shape-2">
                                <img src="/img/about-us/about-us-4/career-user.png" alt=""></span>behind the magic
                          </h3>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-4">
                  <div class="tp-team-hero-subtitle tp_fade_anim" data-delay=".3">
                      <span>Good people <br> Big projects</span>
                  </div>
              </div>
              <div class="col-lg-8">
                  <div class="tp-team-hero-text">
                      <div class="tp_fade_anim" data-delay=".5">
                          <p>At Agntix, our team is our greatest asset. Comprised <br>
                              of creative thinkers, technical wizards, and strategic <br>
                              visionaries, we work in harmony to bring your digital <br>
                              dreams to life. <br>
                          </p>
                      </div>
                      <div class="tp_fade_anim" data-delay=".7">
                          <p>Get to know the passionate professionals dedicated <br>
                              to pushing the boundaries of design and innovation. <br>
                              Join us on a tour of talent and discover how our <br>
                              people make all the difference.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="tp-career-btn">
          <div class="st-hero-btn tp-bounce">
              <nuxt-link href="/team">
                  <span class="st-hero-btn-svg"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3793 3.0269C14.6433 2.80336 18.8918 1.42595 22 0C20.5735 3.10763 19.1955 7.35556 18.9725 10.6196L16.8278 6.04382L1.05218 21.82C0.936508 21.9354 0.77977 22.0001 0.616396 22C0.494507 22 0.375362 21.9638 0.274025 21.8961C0.172686 21.8284 0.0936985 21.7321 0.0470581 21.6195C0.000415802 21.5069 -0.0117893 21.383 0.0119839 21.2634C0.0357552 21.1439 0.0944386 21.034 0.180614 20.9478L15.9563 5.17221L11.3793 3.0269Z" fill="currentColor" />
                      </svg></span>
                  <span class="st-hero-btn-text">Meet with <br> the team</span>
              </nuxt-link>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
const bg_img = isDark.value ? '/img/blog/blog-masonry/blog-bradcum-bg.png' : '/img/team/team-bg.png';
</script>