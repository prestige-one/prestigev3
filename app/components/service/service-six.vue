<template>
    <div class="ai-service-area pt-130 pb-140 p-relative">
      <div class="ai-service-shape">
          <img src="/img/home-07/shape/shape-1.png" alt="">
      </div>
      <div class="container container-1230">
          <div class="ai-service-title-wrap mb-60">
              <div class="row align-items-end">
                  <div class="col-lg-6">
                      <div class="ai-service-title-box">
                          <div class="tp-section-subtitle-gradient icon-left mb-20 tp_fade_anim" data-delay=".3">
                              <div><img src="/img/title-shape/title-shape-1.png" alt=""></div>
                              Our Expertise
                          </div>
                          <h4 class="tp-section-title fs-54 fs-60 mb-15 tp_fade_anim" data-delay=".5">
                              More algorithms than anywhere else.
                          </h4>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="ai-service-top-text tp_text_anim">
                          <p>
                              Unlocking growth and efficiency through advanced
                              artificial intelligence solutions and services. Adipiscing elit,
                              sed do eiusmod tempor incididunt
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div v-for="service in service_data" :key="service.id" class="col-lg-4 col-md-6">
                  <div class="tp_fade_anim" :data-delay="`${service.delay}`">
                      <div class="ai-service-item mb-30 text-center">
                          <div class="ai-service-icon">
                              
                              <span v-html="sanitizeHtml(service.svgIcon)"/>
                          </div>
                          <div class="ai-service-content">
                              <h4 class="ai-service-title-sm"><nuxt-link class="tp-line-white" href="/service-details-2">Expert Support</nuxt-link></h4>
                              <p>
                                  {{ service.description }}
                              </p>
                          </div>
                          <div class="ai-service-link">
                              <nuxt-link href="/service-details-2">
                                  <span>
                                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                  </span>
                              </nuxt-link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">

const service_data = [
  {
    id: 1,
    svgIcon: `<svg width="62" height="63" viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.66663 31.3804C7.66663 24.0549 13.6362 18.1163 21 18.1163H31M7.66663 31.3804C3.9848 31.3804 1 34.3497 1 38.0125V41.3285C1 44.9914 3.9848 47.9605 7.66663 47.9605M7.66663 31.3804V47.9605M31 18.1163H41C48.3638 18.1163 54.3334 24.0549 54.3334 31.3804M31 18.1163V11.4842M7.66663 47.9605C7.66663 55.2862 13.6362 61.2247 21 61.2247H24.3334M54.3334 31.3804C58.0152 31.3804 61 34.3497 61 38.0125V41.3285C61 44.9914 58.0152 47.9605 54.3334 47.9605M54.3334 31.3804V47.9605M54.3334 47.9605C54.3334 55.2862 48.3638 61.2247 41 61.2247H37.6666M41 47.9605H21M31 11.4842C28.2386 11.4842 26 9.25722 26 6.51018C26 3.76314 28.2386 1.53613 31 1.53613C33.7614 1.53613 36 3.76314 36 6.51018C36 9.25722 33.7614 11.4842 31 11.4842ZM35.1678 32.2105C35.1678 29.9213 37.0333 28.0655 39.3345 28.0655C41.6357 28.0655 43.5011 29.9213 43.5011 32.2105C43.5011 34.4998 41.6357 36.3556 39.3345 36.3556C37.0333 36.3556 35.1678 34.4998 35.1678 32.2105ZM18.5029 32.2104C18.5029 29.9212 20.3684 28.0654 22.6696 28.0654C24.9708 28.0654 26.8363 29.9212 26.8363 32.2104C26.8363 34.4998 24.9708 36.3556 22.6696 36.3556C20.3684 36.3556 18.5029 34.4998 18.5029 32.2104ZM61 7.33923C57.6666 8.16816 56 9.82625 55.1666 13.1422C54.3334 9.82625 52.6666 8.16816 49.3334 7.33923C52.6666 6.51018 54.3334 4.8522 55.1666 1.53613C56 4.8522 57.6666 6.51018 61 7.33923Z" stroke="url(#paint0_linear_6113_4771)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <defs>
                  <linearGradient id="paint0_linear_6113_4771" x1="11" y1="66.6964" x2="53.7082" y2="7.79107" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#3188FF"></stop>
                      <stop offset="0.465" stop-color="#D34BE9"></stop>
                      <stop offset="1" stop-color="#FFAF56"></stop>
                  </linearGradient>
              </defs>
          </svg>`,
    title: "Expert Support",
    description: "Our team has the expertise to help you achieve.",
    delay: ".3",
  },
  {
    id: 2,
    svgIcon: `<svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5439 47.4764L6.67631 51.4149C4.54011 52.2676 3.47191 52.6939 2.84751 52.309C2.65371 52.1896 2.49061 52.0265 2.37121 51.8327C1.98629 51.2082 2.41261 50.1401 3.26521 48.0039L7.20381 38.1362M16.5439 47.4764L15.5935 41.2818C15.4687 40.4687 15.4063 40.0621 15.1752 39.7636C15.0998 39.6661 15.0122 39.5786 14.9147 39.5031C14.6162 39.2721 14.2096 39.2098 13.3965 39.0852L7.20381 38.1362M16.5439 47.4764L32.3466 31.6737M7.20381 38.1362L39.5056 5.83438M39.5056 5.83438L42.4058 2.93418C44.985 0.354948 49.1668 0.354948 51.746 2.93418C54.3252 5.51338 54.3252 9.69518 51.746 12.2744L48.8458 15.1746M39.5056 5.83438L48.8458 15.1746M48.8458 15.1746L40.5962 23.4241M0.998047 11.3887C6.83141 9.93038 9.74801 7.01368 11.2064 1.18036C12.6647 7.01368 15.5814 9.93038 21.4147 11.3887C15.5814 12.8471 12.6647 15.7637 11.2064 21.5971C9.74801 15.7637 6.83141 12.8471 0.998047 11.3887ZM35.998 41.2846C38.9147 40.5554 40.373 39.0971 41.1022 36.1804C41.8314 39.0971 43.2897 40.5554 46.2064 41.2846C43.2897 42.0137 41.8314 43.4721 41.1022 46.3887C40.373 43.4721 38.9147 42.0137 35.998 41.2846Z" stroke="url(#paint0_linear_6113_4902)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <defs>
              <linearGradient id="paint0_linear_6113_4902" x1="9.77844" y1="57.1682" x2="46.3771" y2="5.75042" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#3188FF"></stop>
                  <stop offset="0.465" stop-color="#D34BE9"></stop>
                  <stop offset="1" stop-color="#FFAF56"></stop>
              </linearGradient>
          </defs>
      </svg>`,
    title: "Reliable Experts",
    description: "Our team has the expertise to help you achieve.",
    delay: ".5",
  },
  {
    id: 3,
    svgIcon: `<svg width="49" height="63" viewBox="0 0 49 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.6667 1.53613H19C11.5005 1.53613 7.7508 1.53613 5.1222 3.43602C4.2732 4.04962 3.5266 4.79234 2.9098 5.63684C1 8.25189 1 11.9821 1 19.4427V43.3181C1 50.7787 1 54.509 2.9098 57.124C3.5266 57.9685 4.2732 58.7112 5.1222 59.3248C7.7508 61.2247 11.5005 61.2247 19 61.2247H34.3333C37.4332 61.2247 38.9832 61.2247 40.2549 60.8858C43.7058 59.9659 46.4013 57.2844 47.3259 53.8514C47.6667 52.5863 47.6667 51.0444 47.6667 47.9606M27.6667 1.53613C29.801 1.53613 31.8479 2.37953 33.357 3.8809L45.3097 15.7715C46.8188 17.2728 47.6667 19.3091 47.6667 21.4323M27.6667 1.53613V3.52575C27.6667 10.9863 27.6667 14.7166 29.5765 17.3316C30.1933 18.1761 30.9399 18.9188 31.7888 19.5324C34.4175 21.4323 38.1672 21.4323 45.6667 21.4323H47.6667M47.6667 21.4323V34.6964M20.1667 28.0644C16.8333 28.8934 15.1667 30.5514 14.3333 33.8674C13.5 30.5514 11.8333 28.8934 8.5 28.0644C11.8333 27.2353 13.5 25.5774 14.3333 22.2613C15.1667 25.5774 16.8333 27.2353 20.1667 28.0644ZM40.1667 42.1575C33.5 43.8155 30.1667 47.1315 28.5 53.7636C26.8333 47.1315 23.5 43.8155 16.8333 42.1575C23.5 40.4995 26.8333 37.1834 28.5 30.5514C30.1667 37.1834 33.5 40.4995 40.1667 42.1575Z" stroke="url(#paint0_linear_6113_4903)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <defs>
                  <linearGradient id="paint0_linear_6113_4903" x1="8.77778" y1="66.6964" x2="53.6022" y2="18.6109" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#3188FF"></stop>
                      <stop offset="0.465" stop-color="#D34BE9"></stop>
                      <stop offset="1" stop-color="#FFAF56"></stop>
                  </linearGradient>
              </defs>
          </svg>`,
    title: "Image Quality",
    description: "Our team has the expertise to help you achieve.",
    delay: ".7",
  },
]
</script>
