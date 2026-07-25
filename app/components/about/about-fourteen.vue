<template>
  <div class="pp-about-area pp-service-details-ptb p-relative pb-100">
      <div class="pp-about-shape">
          <img data-speed=".8" src="/img/home-14/about/about-shape.png" alt="">
      </div>
      <div class="pp-service-shape service-details-shape">
          <img data-speed="1.1" src="/img/home-14/about/about-shape-2.png" alt="">
      </div>
      <div class="pp-service-details-top pb-50">
          <div class="container container-1230">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="pp-service-details-heading pb-55 tp_fade_anim mb-80" data-delay=".3">
                          <h3 class="pp-service-details-title">
                              Website Designs <br>
                              That Turn Clicks into <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="123" height="130" viewBox="0 0 123 130" fill="none">
                                      <path d="M58.2803 1.15449C63.3023 14.3017 71.049 54.3533 48.1082 67.0973C36.1831 73.4283 11.7107 77.3064 2.37778 43.9355C-1.14293 31.3468 9.61622 20.8908 32.0893 28.8395C45.055 33.4255 76.4207 44.0467 90.5787 70.0771C98.0511 83.8154 104.166 111.84 99.1745 129.671M99.1745 129.671C100.942 121.014 108.128 104.495 122.737 107.673M99.1745 129.671C100.181 123.978 97.0522 110.014 76.485 99.698M75.3644 33.2431C80.479 35.6688 96.6446 46.4742 101.81 64.2891" :stroke="isDark?'#fff':'black'" stroke-width="1.5" />
                                </svg></i> <br> Customers <span>Web Design <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                      <path d="M1.95047 15.9635C0.349769 15.5874 0.171812 13.4796 1.68557 12.8255L1.93099 12.7195C6.64382 10.6828 10.2834 6.75878 11.9603 1.90627C12.481 0.397291 14.6914 0.346013 15.2509 1.82979L21.2703 17.8126C21.3776 18.0967 21.4017 18.4043 21.34 18.7025C21.2783 19.0007 21.133 19.2781 20.9199 19.5049C20.7068 19.7317 20.4338 19.8993 20.1304 19.9897C19.827 20.0801 19.5047 20.0898 19.198 20.0178L1.95047 15.9635Z" fill="#FFF669" />
                                  </svg>
                                </span>
                          </h3>
                      </div>
                      <div class="pp-service-details-about-wrap ">
                          <div class="pp-about-content tp_text_anim">
                              <p>
                                  Crafting your website can be brutal…For <br>
                                  10 years we make iteasier, more predictable <br>
                                  and stress free for small businesses.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="pp-service-details-bottom">
          <div class="container container-1230">
              <div class="row gx-0">
                  <div class="col-lg-4 col-md-6">
                      <div class="pp-service-details-about-item mb-30 tp_fade_anim" data-delay=".3">
                          <span>
                              <counter-item :min="0" :max="50" /> %
                          </span>
                          <p>Boost In <br> Web Traffic</p>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="pp-service-details-about-item mb-30 tp_fade_anim" data-delay=".5">
                          <span>
                              <counter-item :min="0" :max="23" /> %
                          </span>
                          <p>Growth in User <br> Engagement</p>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="pp-service-details-about-item mb-30 tp_fade_anim" data-delay=".7">
                          <span>
                              <counter-item :min="0" :max="50" /> %
                          </span>
                          <p>Boost In <br> Web Traffic</p>
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
