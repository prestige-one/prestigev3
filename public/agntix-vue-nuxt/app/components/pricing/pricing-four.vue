<template>
  <section class="tp-service-4-price-ptb z-index-1 pb-140">
    <!-- Shape -->
    <div class="tp-service-4-price-shape">
      <img src="/img/service/service-4-price-shape.png" alt="price shape">
    </div>

    <div class="container container-1230">
      <div class="row">
        <div class="col-lg-12">
          <div class="dgm-service-title-box text-center z-index-1 mb-60">
            <span
              :class="`tp-section-subtitle subtitle-grey mb-15 ${isDark?'':'text-black'} tp_fade_anim`"
              data-delay=".3"
            >
              Affordable pricing
            </span>
            <h4
              :class="`tp-section-title-grotesk ${isDark?'':'text-black'} tp_fade_anim`"
              data-delay=".5"
            >
              Special offer! choose <br>
              your pack today
            </h4>
          </div>
        </div>
      </div>

      <div class="row">
        <div :class="`app-price-box app-price-service ${priceBoxCls}`">
          <div class="row">
            <div
              v-for="plan in pricingPlans"
              :key="plan.id"
              class="col-xl-4 col-lg-6 col-md-6"
            >
              <div class="crp-price-item" :class="{ active: plan.isActive }">
                <!-- Head -->
                <div class="crp-price-head">
                  <span>{{ plan.name }}</span>
                  <h4>
                    {{ plan.price }} <i>/ month</i>
                  </h4>
                  <p>{{ plan.description }}</p>
                </div>

                <!-- Features -->
                <div class="crp-price-list">
                  <ul>
                    <li v-for="(feature, index) in plan.features" :key="index">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                            <path d="M1 5.6941C1 5.6941 2.6 6.60188 3.4 7.93242C3.4 7.93242 5.8 2.70967 9 0.96875" stroke="#21212D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      {{ feature }}
                    </li>
                  </ul>
                </div>

                <!-- Button -->
                <div class="app-price-btn-box">
                  <div
                    class="animated-border-box w-100"
                    :class="{ 'radius-style-2': plan.buttonVariant === 'gradient' }"
                  >
                    <NuxtLink
                      class="w-100 text-center"
                      :class="plan.buttonVariant === 'gradient'
                        ? 'tp-btn-gradient sm'
                        : 'tp-btn-black-border'"
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
  </section>
</template>


<script setup lang="ts">
const {isDark} = useIsDark();
withDefaults(defineProps<{priceBoxCls?:string}>(),{
  priceBoxCls:''
})
// Pricing data
const pricingPlans = [
  {
    id: 1,
    name: "Free",
    price: "$0",
    description: "Organize your daily task for free",
    features: [
      "Unlimited cards",
      "Automated management",
      "SOX compliance",
      "Local video issuance",
      "Limited tools"
    ],
    buttonVariant: "black-border"
  },
  {
    id: 2,
    name: "Pro",
    price: "$48",
    description: "Organize your daily task for free",
    features: [
      "Unlimited cards",
      "Automated management",
      "SOX compliance",
      "Local video issuance",
      "Limited tools"
    ],
    isActive: true,
    buttonVariant: "gradient"
  },
  {
    id: 3,
    name: "Business",
    price: "$140",
    description: "Organize your daily task for free",
    features: [
      "Unlimited cards",
      "Automated management",
      "SOX compliance",
      "Local video issuance",
      "Limited tools"
    ],
    buttonVariant: "black-border"
  }
]
</script>