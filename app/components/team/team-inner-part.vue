<template>
  <section class="tp-team-part-ptb pt-20 pb-120">
    <div class="container container-1230">
      <div class="tp-team-part-top tp-bounce-trigger pb-140">
        <div class="row">
          <div class="col-lg-4">
            <div class="tp-team-part-shape tp-bounce">
              <img src="/img/team/team-shape-1.png" alt="team shape">
            </div>
          </div>
          <div class="col-lg-8">
            <div class="tp-team-part-heading">
              <div class="ar-hero-title-box tp_fade_anim" data-delay=".3">
                <div
                  class="ar-about-us-4-title-box d-flex align-items-center mb-20"
                >
                  <span class="tp-section-subtitle pre tp_fade_anim">Team</span>
                  <div class="ar-about-us-4-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="81"
                      height="9"
                      viewBox="0 0 81 9"
                      fill="none"
                    >
                      <rect y="4" width="80" height="1" fill="#111013" />
                      <path
                        d="M77 7.96366L80.5 4.48183L77 1"
                        stroke="#111013"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <h3 class="tp-career-title fs-100 pb-40">
                  Wan't to be a <br>
                  part of our team?
                </h3>
                <p class="pb-30">
                  Our journey has been marked by countless successful <br>
                  projects that not only achieved but surpassed our clients'
                  <br>
                  goals, reinforcing their trust in us as a leading innovator
                  <br>
                  in the digital landscape.
                </p>
                <div class="tp-team-part-btn">
                  <NuxtLink href="/career" class="tp-btn-black btn-red-bg">
                    <span class="tp-btn-black-filter-blur">
                      <svg-btn-blur-filter filter-id="buttonFilter" />
                    </span>
                    <span
                      class="tp-btn-black-filter d-inline-flex align-items-center"
                      style="filter: url(#buttonFilter)"
                    >
                      <span class="tp-btn-black-text"> Open Positions </span>
                      <span class="tp-btn-black-circle">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 9L9 1M9 1H1M9 1V9"
                            stroke="currentcolor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <team-inner-fun-fact :spacing="spacing"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{spacing?:string}>(), {
  spacing:'',
})
</script>
