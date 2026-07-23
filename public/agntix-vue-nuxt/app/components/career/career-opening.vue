<template>
  <section class="tp-career-opening-ptb pb-160">
    <div class="container container-1230">
      <!-- Section Heading -->
      <div class="row">
        <div class="col-lg-12">
          <div class="tp-benefit-heading mb-100">
            <div
              class="ar-about-us-4-title-box tp_fade_anim d-flex align-items-center mb-15"
            >
              <span class="tp-section-subtitle pre">Benefit</span>
              <div class="ar-about-us-4-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="9" viewBox="0 0 81 9" fill="none">
                    <rect y="4" width="80" height="1" fill="#111013" />
                    <path d="M77 7.96366L80.5 4.48183L77 1" stroke="#111013" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <h3 class="tp-section-title lts tp_fade_anim">
              Current Openings
            </h3>
          </div>
        </div>
      </div>

      <!-- Table Headers -->
      <div class="tp-career-opening-item">
        <div class="row">
          <div class="col-lg-4">
            <div class="tp-career-opening-heading">
              <span>Position</span>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="tp-career-opening-heading">
              <span>Roles</span>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="tp-career-opening-heading">
              <span>Type</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Job Listings -->
      <div
        v-for="(job, index) in jobOpenings"
        :key="index"
        class="tp-career-opening-item ptb"
      >
        <div class="row align-items-center">
          <div class="col-lg-4">
            <div class="tp-career-opening-title">
              <h4 class="tp-career-opening-title-name">
                {{ job.title }}
              </h4>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="tp-career-opening-role">
              <span>{{ job.openRoles }}</span>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="tp-career-opening-Type d-flex justify-content-between align-items-center"
            >
              <span>{{ job.type }}</span>
              <div class="tp-career-opening-btn">
                <NuxtLink
                  to="/career-details"
                  class="tp-btn-black btn-red-bg"
                >
                  <span class="tp-btn-black-filter-blur">
                    <svg-btn-blur-filter :filter-id="job.filterId" />
                  </span>
                  <span
                    class="tp-btn-black-filter d-inline-flex align-items-center"
                    :style="{ filter: `url(#${job.filterId})` }"
                  >
                    <span class="tp-btn-black-text">Apply Now</span>
                    <span class="tp-btn-black-circle">
                      <svg-arrow-up-four />
                    </span>
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

interface JobOpening {
  title: string
  openRoles: string
  type: string
  filterId: string
}

const jobOpenings: JobOpening[] = [
  {
    title: 'UI/UX Designer',
    openRoles: '(02 Open Roles)',
    type: 'Full-Time',
    filterId: 'buttonFilter'
  },
  {
    title: 'Frontend Developer',
    openRoles: '(01 Open Roles)',
    type: 'Remote',
    filterId: 'buttonFilter2'
  },
  {
    title: 'Product Manager',
    openRoles: '(03 Open Roles)',
    type: 'Full-Time',
    filterId: 'buttonFilter3'
  },
  {
    title: 'JavaScript Engineer',
    openRoles: '(01 Open Roles)',
    type: 'Remote',
    filterId: 'buttonFilter4'
  },
  {
    title: 'Joomla Developer',
    openRoles: '(02 Open Roles)',
    type: 'Full-Time',
    filterId: 'buttonFilter5'
  }
]
</script>
