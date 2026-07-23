<template>
  <div
    class="creative-service-area"
    :class="[wrapClass, spacingCls]"
    :data-bg-color="bgColor"
    :style="{backgroundColor:isDark?'':bgColor}"
  >
    <div class="container container-1580">
      <!-- Header -->
      <div class="creative-service-2-top mb-70">
        <div class="row align-items-end">
          <div class="col-xl-3">
            <div class="creative-blog-subtitle-box">
              <span class="tp-section-subtitle mb-20 fs-17 pre-circle">
                Our Services
              </span>
            </div>
          </div>
          <div class="col-xl-6 col-lg-7">
            <div class="creative-blog-title-box">
              <h4 class="tp-section-title fs-44">
                How we take your <br> business to the next level
              </h4>
            </div>
          </div>
          <div class="col-xl-3 col-lg-5">
            <div class="creative-blog-top-content">
              <NuxtLink :to="'/service-3'" :class="`tp-btn-black ${btnClass} pr-15`">
                <!-- Blur Filter -->
                <span class="tp-btn-black-filter-blur">
                  <svg-btn-blur-filter filter-id="buttonFilter5" />
                </span>
                <!-- Button Content -->
                <span
                  class="tp-btn-black-filter d-inline-flex align-items-center"
                  style="filter: url(#buttonFilter5)"
                >
                  <span class="tp-btn-black-text">See all Articles</span>
                  <span class="tp-btn-black-circle">
                   <svg-arrow-four/>
                  </span>
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Service List -->
      <div class="creative-service-wrap">
        <div class="row">
          <div class="offset-xl-3 col-xl-9">
            <div
              v-for="(service, index) in services"
              :key="service.id"
              :class="`creative-service-item ${isDark?'':'about-us-4'} d-flex align-items-start justify-content-between tp_fade_anim`"
            >
              <!-- Left side -->
              <div class="creative-service-content d-flex align-items-start">
                <span>({{ String(index + 1).padStart(2, '0') }})</span>
                <div class="creative-service-title-info">
                  <h4 class="creative-service-title">
                    <NuxtLink to="/service-details">{{ service.title }}</NuxtLink>
                  </h4>
                  <div class="creative-service-category">
                    <span v-for="(category, i) in service.categories" :key="i">
                      {{ category }}
                    </span>
                  </div>
                </div>
              </div>
              <!-- Right side -->
              <div class="creative-service-link">
                <NuxtLink to="/service-details">
                  <span>
                    <svg-arrow-one width="14" height="14" viewBox="0 0 14 14" path-value="M1 13L13 1M13 1H1M13 1V13" />
                  </span>
                </NuxtLink>
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
withDefaults(
  defineProps<{
    wrapClass?: string;
    bgColor?: string;
    spacingCls?: string;
    btnClass?: string;
  }>(),
  {
    wrapClass: "creative-service-2-style black-bg-8",
    bgColor: "#F6F6F9",
    spacingCls: "pb-120 pt-120",
    btnClass: "btn-green-light-bg",
  }
)

const services = [
  {
        id: 9,
        title: "Branding",
        categories: ["Logo design", "Brand Guidelines", "Visual Identity", "Custom Emails", "Presentations"],
    },
    {
        id: 10,
        title: "Identity",
        categories: ["Logo design", "Brand Guidelines", "Visual Identity", "Custom Emails", "Presentations"],
    },
    {
        id: 11,
        title: "Impact",
        categories: ["Logo design", "Brand Guidelines", "Visual Identity", "Custom Emails", "Presentations"],
    },
]
</script>
