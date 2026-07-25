<template>
  <div
    class="it-feature-area it-feature-ptb z-index-2 p-relative pb-55"
    :data-bg-color="bg_clr"
    :style="{ backgroundColor: bg_clr }"
  >
    <!-- Background Shape -->
    <div class="it-feature-brand-shape">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="1980" height="121" viewBox="0 0 1980 121" fill="none">
            <path d="M1651.4 1.13373L1970.71 75.1373C1976.15 76.3979 1980 81.2437 1980 86.8274V108.077C1980 114.74 1974.57 120.127 1967.91 120.076L11.9091 105.258C5.31738 105.208 0 99.8504 0 93.2584V24.3544C0 16.5721 7.29346 10.8483 14.8527 12.6984L339.997 92.2748C346.375 93.8356 352.822 89.9816 354.467 83.6255L373.536 9.94507C375.18 3.59379 381.62 -0.260145 387.994 1.29266L759.617 91.8242C765.947 93.3664 772.352 89.5756 774.045 83.2841L793.964 9.2801C795.654 3.00175 802.036 -0.788759 808.358 0.731769L1183.03 90.8533C1189.4 92.3843 1195.82 88.5314 1197.46 82.1939L1216.04 10.4265C1217.68 4.07977 1224.11 0.22659 1230.48 1.77277L1603.51 92.3026C1609.89 93.8489 1616.32 89.995 1617.96 83.6477L1637.07 9.81727C1638.7 3.51669 1645.06 -0.335644 1651.4 1.13373Z" :fill="isDark?'#0E0F11':'#FDF7F4'" />
        </svg>
      </span>
    </div>

    <!-- Shape Image -->
    <div class="it-feature-shape-1">
      <img data-speed="1.1" src="/img/home-11/feature/shape-1.png" alt="shape">
    </div>

    <div class="container container-1460">
      <!-- Title Section -->
      <div class="row justify-content-center">
        <div class="col-xl-6">
          <div class="it-feature-title-box text-center mb-70">
            <span
              class="tp-section-subtitle-platform platform-text-black tp-split-text tp-split-right"
            >
              Core Expertise
            </span>
            <h4
              class="tp-section-title-platform platform-text-black fs-200 tp-split-text tp-split-right"
            >
              Features
            </h4>
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="row">
        <div
          v-for="feature in serviceData"
          :key="feature.id"
          class="col-xl-4 col-md-6 mb-25 tp_fade_anim"
          :data-delay="feature.delay"
        >
          <div class="it-feature-item text-center tp_fade_ainm">
            <h4 class="it-feature-title">
              <NuxtLink class="tp-line-black" to="/service-details">
                {{ feature.title }}
              </NuxtLink>
            </h4>

            <div :class="['it-feature-icon', feature.colorClass]">
              <img
                v-if="feature.image"
                :src="feature.image"
                :alt="`icon-${feature.id}`"
              >
            </div>

            <div class="it-feature-content">
              <p>{{ feature.description }}</p>
            </div>

            <div class="it-feature-category">
              <span
                v-for="(category, i) in feature.categories"
                :key="i"
                class="me-1"
              >
                {{ category }}
              </span>
            </div>
          </div>
        </div>

        <!-- Special Last Box -->
        <div
          class="col-xl-4 col-md-6 mb-25 tp_fade_anim"
          data-delay=".7"
        >
          <div
            class="it-feature-item it-feature-item-style-bg d-flex justify-content-between flex-column z-index-1 tp_fade_ainm"
            :style="{ backgroundImage: 'url(/img/home-11/feature/img-1.png)' }"
          >
            <div class="it-feature-content">
              <h4 class="it-feature-title">
                Schedule a Call <br>
                With a Client Success <br>
                Expert Now.
              </h4>
            </div>

            <div class="it-feature-btn-box">
              <NuxtLink
                class="tp-btn-black-radius btn-blur d-flex align-items-center justify-content-between"
                to="/service-details"
              >
                <span>
                  <span class="text-1">Our all Services</span>
                  <span class="text-2">Our all Services</span>
                </span>
                <i>
                  <span>
                    <svg-arrow-up-four color="#21212D" />
                    <svg-arrow-up-four color="#21212D" />
                  </span>
                </i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
const bg_clr = computed(() => (isDark.value ? '#0E0F11' : '#FDF7F4'));
const serviceData = [
  {
    id: 1,
    title: "IT Consultation",
    image: '/img/home-11/feature/icon-1.png',
    description: "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    categories: ["Strategy", "Consultation", "Management"],
    colorClass: "color-1",
    delay: ".3",
  },
  {
    id: 2,
    title: "Data Security",
    image: '/img/home-11/feature/icon-2.png',
    description: "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    categories: ["Management", "Backup & Recovery", "Transfer"],
    colorClass: "color-2",
    delay: ".5",
  },
  {
    id: 3,
    title: "IT Consultation",
    image: '/img/home-11/feature/icon-3.png',
    description: "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    categories: ["Strategy", "Consultation", "Management"],
    colorClass: "color-3",
    delay: ".7",
  },
  {
    id: 4,
    title: "Cloud Services",
    image: '/img/home-11/feature/icon-4.png',
    description: "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    categories: ["Cloud Storerage", "Hosting & VPS"],
    colorClass: "color-4",
    delay: ".3",
  },
  {
    id: 5,
    title: "UI/UX Design",
    image: '/img/home-11/feature/icon-5.png',
    description: "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    categories: ["Website", "Landing Page", "Mobile App"],
    colorClass: "color-5",
    delay: ".5",
  },
]
</script>
