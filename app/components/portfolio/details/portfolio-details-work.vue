<template>
  <div class="tp-pd-1-work-ptb pb-130">
      <div class="container container-1230">
          <div class="tp-pd-1-work-top pb-70">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="tp-pd-1-work-heading pb-60 tp_fade_anim" data-delay=".3">
                          <h2 class="tp-pd-1-work-title">Work <br> overview</h2>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="tp-pd-1-work-heading tp_fade_anim" data-delay=".5">
                          <span class="tp-pd-1-about-title">OUR <br>
                              APPROACH <svg xmlns="http://www.w3.org/2000/svg" width="102" height="9" viewBox="0 0 102 9" fill="none">
                                  <path d="M98 7.91996L101.5 4.43813L98 0.956299M1 3.99989H101V4.99989H1V3.99989Z" :stroke="isDark?'#fff':'black'" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                          </span>
                      </div>
                  </div>
                  <div class="col-lg-8">
                      <div class="tp-pd-1-work-content pl-20 tp_fade_anim" data-delay=".5">
                          <p>Our journey has been marked by countless successful <br>
                              projects that not only achieved but surpassed our clients' <br>
                              goals, reinforcing their trust in us as a leading <br>
                              innovator in the digital.</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-6">
                  <div class="tp-pd-1-work-item mb-30">
                      <h3 class="tp-pd-1-work-item-title"><span>
                        <counter-item :min="2" :max="120" />%</span>
                      </h3>
                      <div class="tp-pd-1-work-item-text">
                          <span>Increase in conversions</span>
                      </div>
                  </div>
                  <div class="tp-pd-1-work-item mb-30">
                      <h3 class="tp-pd-1-work-item-title"><span>
                        <counter-item :min="2" :max="140" />%</span>
                      </h3>
                      <div class="tp-pd-1-work-item-text">
                          <span>Increase in website traffic</span>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6">
                  <div class="tp-pd-1-work-item mb-30">
                      <h3 class="tp-pd-1-work-item-title"><span>
                        <counter-item :min="2" :max="80" />%</span>
                      </h3>
                      <div class="tp-pd-1-work-item-text">
                          <span>Average daily signups</span>
                      </div>
                  </div>
                  <div class="tp-pd-1-work-item mb-30">
                      <h3 class="tp-pd-1-work-item-title"><span>
                        <counter-item :min="2" :max="130" />%</span>
                      </h3>
                      <div class="tp-pd-1-work-item-text">
                          <span>Increase in conversions</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
</script>