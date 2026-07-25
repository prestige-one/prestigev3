<template>
  <div class="pp-about-area pp-about-ptb p-relative z-index-3 pt-160 pb-160" data-bg-color="#ffff" :style="{'background-color': bg_clr}">
      <div class="pp-about-shape">
          <img data-speed=".8" src="/img/home-14/about/about-shape.png" alt="">
      </div>
      <div class="container container-1430">
          <div class="row">
              <div class="col-lg-3">
                  <div class="pp-about-left">
                      <span class="tp-section-subtitle-clash clash-subtitle-pos body-ff">
                          About Me
                          <i>
                              <svg-arrow-long-two/>
                          </i>
                      </span>
                  </div>
              </div>
              <div class="col-lg-9">
                  <div class="pp-about-heading pb-55">
                      <h3 class="tp-section-title-teko fs-80 tp_fade_anim">
                          I’m a <span>selectively skilled</span> product <br>
                          designer with strong focus on producing <br>
                          high quality and impactful digital <br>
                          experience.
                      </h3>
                  </div>
                  <div class="pp-about-wrap">
                      <div class="pp-about-bottom-btn smooth">
                          <a href="#down">
                            <span>
                               <svg xmlns="http://www.w3.org/2000/svg" width="10" height="21" viewBox="0 0 10 21" fill="none">
                                  <path d="M4.57574 20.4243C4.81005 20.6586 5.18995 20.6586 5.42426 20.4243L9.24264 16.6059C9.47696 16.3716 9.47696 15.9917 9.24264 15.7574C9.00833 15.523 8.62843 15.523 8.39411 15.7574L5 19.1515L1.60589 15.7574C1.37157 15.523 0.991674 15.523 0.757359 15.7574C0.523045 15.9917 0.523045 16.3716 0.757359 16.6059L4.57574 20.4243ZM4.4 0L4.4 20H5.6L5.6 0L4.4 0Z" fill="currentColor" />
                                </svg>
                              </span>
                            </a>
                      </div>
                      <div class="pp-about-content tp_text_anim">
                          <p>
                              I'm a French digital designer and web developer <br>
                              with over 10 years of experience. At the crossroads <br>
                              of design, motion and web development, <br>
                              the diversity of my skills
                          </p>
                          <div class="pp-about-btn">
                              <div class="tp-btn-red-circle-box tp-pp-btn-style tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                                  <a class="tp-btn-red-circle-icon" href="/img/cv/mycv.docx">
                                      <span>
                                          <svg-arrow-up-eight/>
                                      </span>
                                  </a>
                                  <a class="tp-btn-red-circle-text" href="/img/cv/mycv.docx">Download CV</a>
                                  <a class="tp-btn-red-circle-icon" href="/img/cv/mycv.docx">
                                      <span>
                                          <svg-arrow-up-eight/>
                                      </span>
                                  </a>
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
const {isDark} = useIsDark();
const bg_clr = isDark.value ? '#0E0F11' : '#ffff';
</script>