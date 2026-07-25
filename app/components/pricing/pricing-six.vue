<template>
  <div class="app-price-area p-relative pb-130">
    <div class="container container-1230">
      <!-- Tabs -->
      <div class="row align-items-end">
        <div class="col-lg-12">
          <div class="app-price-tab-wrap mb-30 tp_fade_anim" data-delay=".7">
            <div class="ai-price-tab tp-marker-tab d-inline-flex justify-content-center p-relative">
              <ul class="nav nav-tab" role="tablist">
                <li class="nav-items" role="presentation">
                  <button
                    class="nav-links"
                    :class="{ active: activeTab === 'desktop' }"
                    @click="activeTab = 'desktop'"
                  >
                    Monthly
                  </button>
                </li>
                <li class="nav-items" role="presentation">
                  <button
                    class="nav-links"
                    :class="{ active: activeTab === 'mobile' }"
                    @click="activeTab = 'mobile'"
                  >
                    Yearly
                  </button>
                </li>
              </ul>
              <span id="lineMarker" ref="markerRef" />
            </div>
          </div>
        </div>
      </div>

      <!-- Tab Content -->
      <div class="tab-content">
        <!-- Desktop Plans -->
        <div v-if="activeTab === 'desktop'" class="tab-pane fade show active">
          <div :class="`app-price-box ${isDark?'':'app-price-inner-style'}`">
            <div class="row">
              <div
                v-for="plan in desktopPlans"
                :key="plan.id"
                class="col-xl-4 col-lg-6 col-md-6"
              >
                <div class="crp-price-item" :class="{ active: plan.isPopular }">
                  <div class="crp-price-head">
                    <span>{{ plan.name }}</span>
                    <h4>{{ plan.price }} <i>/ month</i></h4>
                    <p>{{ plan.description }}</p>
                  </div>

                  <div class="crp-price-list">
                    <ul>
                      <li v-for="(feature, index) in plan.features" :key="index">
                        <span><svg-check-one /></span> {{ feature }}
                      </li>
                    </ul>
                  </div>

                  <div class="app-price-btn-box">
                    <div class="animated-border-box w-100">
                      <NuxtLink
                        :class="`tp-btn-${plan.buttonVariant} sm w-100 text-center`"
                        to="/contact"
                      >
                        Join this plan
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Plans -->
        <div v-else class="tab-pane fade show active">
          <div :class="`app-price-box ${isDark?'':'app-price-inner-style'}`">
            <div class="row">
              <div
                v-for="plan in mobilePlans"
                :key="plan.id"
                class="col-xl-4 col-lg-6 col-md-6"
              >
                <div class="crp-price-item" :class="{ active: plan.isPopular }">
                  <div class="crp-price-head">
                    <span>{{ plan.name }}</span>
                    <h4>{{ plan.price }} <i>/ month</i></h4>
                    <p>{{ plan.description }}</p>
                  </div>

                  <div class="crp-price-list">
                    <ul>
                      <li v-for="(feature, index) in plan.features" :key="index">
                        <span><svg-check-one /></span> {{ feature }}
                      </li>
                    </ul>
                  </div>

                  <div class="app-price-btn-box">
                    <div class="animated-border-box w-100">
                      <NuxtLink
                        :class="`tp-btn-${plan.buttonVariant} sm w-100 text-center`"
                        to="/contact"
                      >
                        Join this plan
                      </NuxtLink>
                    </div>
                  </div>
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
const { markerRef } = useTabIndicator();

const pricePlans = [
  {
    id: 7,
    name: 'Free',
    price: '$0',
    description: "Organize your daily task for free",
    isPopular: false,
    features: [
      'Unlimited cards',
      'Automated management',
      'SOX compliance',
      'Local video issuance',
      'Limited tools'
    ],
    buttonVariant: 'black-border',
    tab: 'desktop'
  },
  {
    id: 8,
    name: 'Basic',
    description: "Organize your daily task for free",
    price: '$48',
    isPopular: true,
    features: [
      'Unlimited cards',
      'Automated management',
      'SOX compliance',
      'Local video issuance',
      'Limited tools'
    ],
    buttonVariant: 'gradient',
    tab: 'desktop'
  },
  {
    id: 9,
    name: 'Basic',
    description: "Organize your daily task for free",
    price: '$140',
    isPopular: false,
    features: [
      'Unlimited cards',
      'Automated management',
      'SOX compliance',
      'Local video issuance',
      'Limited tools'
    ],
    buttonVariant: 'black-border',
    tab: 'desktop'
  },
  {
    id: 10,
    name: 'Basic',
    description: "Organize your daily task for free",
    price: '$0',
    isPopular: false,
    features: [
      'Unlimited cards',
      'Automated management',
      'SOX compliance',
      'Local video issuance',
      'Limited tools'
    ],
    buttonVariant: 'black-border',
    tab: 'mobile'
  },
  {
    id: 11,
    name: 'Basic',
    description: "Organize your daily task for free",
    price: '$78',
    isPopular: true,
    features: [
      'Unlimited cards',
      'Automated management',
      'SOX compliance',
      'Local video issuance',
      'Limited tools'
    ],
    buttonVariant: 'gradient',
    tab: 'mobile'
  },
  {
    id: 12,
    name: 'Basic',
    description: "Organize your daily task for free",
    price: '$99',
    isPopular: false,
    features: [
      'Unlimited cards',
      'Automated management',
      'SOX compliance',
      'Local video issuance',
      'Limited tools'
    ],
    buttonVariant: 'black-border',
    tab: 'mobile'
  }
]

const activeTab = ref("desktop")

const desktopPlans = computed(() => pricePlans.filter(plan => plan.tab === "desktop"))
const mobilePlans = computed(() => pricePlans.filter(plan => plan.tab === "mobile"))
</script>
