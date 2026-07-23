
<template>
  <div class="crp-service-area p-relative pt-80 pb-90">
      <div class="crp-service-shape-wrap">
          <img class="crp-service-shape-1" data-speed="1.1" src="/img/home-09/service/service-shape-1.png" alt="">
          <img class="crp-service-shape-2" data-speed="1.1" src="/img/home-09/service/service-shape-2.png" alt="">
          <img class="crp-service-shape-3" data-speed="1.1" src="/img/home-09/service/service-shape-3.png" alt="">
      </div>
      <div class="container container-1330">
          <div class="row">
              <div class="col-md-6">
                  <div class="crp-service-title-box">
                      <span class="tp-section-subtitle-teko mb-25 tp_fade_anim" data-delay=".3">Creative approach</span>
                      <h4 class="tp-section-title-teko tp_fade_anim" data-delay=".5">Smart <span>Business</span> <br> Solutions</h4>
                  </div>
              </div>
              <div v-for="service in service_data" :key="service.id" class="col-md-6">
                  <div class="crp-service-item mt-50 pb-65 d-flex tp_fade_anim" data-delay=".3">
                      <div class="crp-service-icon">
                          <span v-html="sanitizeHtml(service.svgIcon)" />
                      </div>
                      <div class="crp-service-content">
                          <h4 class="crp-service-title-sm">
                            <nuxt-link class="tp-line-white cream" href="/service-details-2">{{ service.title }}</nuxt-link>
                          </h4>
                          <p v-html="sanitizeHtml(service.description)"/>
                          <nuxt-link class="crp-service-link" href="/service-details-2">
                              <span>
                                  <span class="text-1">View More</span>
                                  <span class="text-2">View More</span>
                              </span>
                              <i>
                                  <svg-arrow-up-two/>
                                  <svg-arrow-up-two/>
                              </i>
                          </nuxt-link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
const service_data = [
  {
        id: 1,
        delay: ".3",
        svgIcon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9994 4.25453e-08C15.9996 2.10111 15.5858 4.18169 14.7818 6.12289C13.9779 8.0641 12.7994 9.82793 11.3136 11.3136C9.82793 12.7994 8.0641 13.9779 6.12289 14.7818C4.18169 15.5858 2.10111 15.9996 4.25443e-08 15.9994C0.000309438 11.7562 1.68606 7.68687 4.68647 4.68647C7.68687 1.68606 11.7562 0.000309438 15.9994 4.25453e-08ZM15.9994 32C18.1007 32.0002 20.1814 31.5864 22.1228 30.7823C24.0642 29.9783 25.828 28.7997 27.3139 27.3139C28.7997 25.828 29.9783 24.0642 30.7823 22.1228C31.5864 20.1814 32.0002 18.1007 32 15.9994C27.7565 15.9997 23.6868 17.6856 20.6863 20.6863C17.6856 23.6868 15.9997 27.7565 15.9994 32ZM4.25443e-08 15.9994C-0.000153182 18.1005 0.41357 20.1812 1.21755 22.1224C2.02153 24.0638 3.20002 25.8277 4.6857 27.3134C6.17141 28.7993 7.93522 29.9779 9.87644 30.7821C11.8177 31.5861 13.8982 32 15.9994 32C15.9994 27.7565 14.3138 23.687 11.3134 20.6863C8.31292 17.6856 4.24341 15.9997 4.25443e-08 15.9994ZM15.9994 4.25453e-08C15.9997 4.24341 17.6856 8.31292 20.6863 11.3134C23.687 14.3138 27.7565 15.9994 32 15.9994C32 13.8982 31.5861 11.8177 30.7821 9.87644C29.9779 7.93522 28.7993 6.17141 27.3134 4.6857C25.8277 3.20002 24.0638 2.02153 22.1224 1.21755C20.1812 0.41357 18.1005 -0.000153182 15.9994 4.25453e-08Z" fill="${isDark.value?'#2A4C3A': '#e9ff48'}"></path>
        </svg>`,
        title: "Business Consultation",
        description: "Lorem ipsum dolor sit amet, conse ctetur sadipiscing elit, sed dominus eiusmc od tempor omincid idu nt ut labore et dolore <br> magna aliqua.",
    },
    {
        id: 2,
        delay: ".5",
        svgIcon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34 13.6615V14.1329C34 22.644 28.6701 30.3065 20.5342 33.4779C15.6984 35.3635 10.4303 31.9094 10.4303 26.8438C18.3722 23.7411 23.5698 16.2671 23.5698 7.96178V7.15609L23.8963 7.02753C28.7318 5.1419 34 8.60461 34 13.6615ZM23.5698 7.15609C23.5698 2.09061 18.3016 -1.36353 13.4659 0.5221C5.32987 3.6934 0 11.3559 0 19.867V20.3299C0 25.3954 5.2681 28.8495 10.1038 26.9639L10.4303 26.8353V26.0296C10.4303 17.7328 15.6278 10.2588 23.5698 7.15609Z" fill="${isDark.value?'#2A4C3A':'#e9ff48'}"></path>
        </svg>`,
        title: "Professional Business",
        description: "Lorem ipsum dolor sit amet, conse ctetur sadipiscing elit, sed dominus eiusmc od tempor omincid idu nt ut labore et dolore <br> magna aliqua.",
    },
    {
        id: 3,
        delay: ".7",
        svgIcon: `<svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.4002 5.09777V24.7863L8.09429 32V23.708L18.2976 19.6885V8.2839L26.4002 5.09777ZM18.2976 8.2839V0L0 7.20551V26.8941L8.09429 23.708V12.3033L18.2976 8.2839Z" fill="${isDark.value?'#2A4C3A': '#e9ff48'}"></path>
        </svg>`,
        title: "Business Growth",
        description: "Lorem ipsum dolor sit amet, conse ctetur sadipiscing elit, sed dominus eiusmc od tempor omincid idu nt ut labore et dolore <br> magna aliqua.",
    },
]
</script>