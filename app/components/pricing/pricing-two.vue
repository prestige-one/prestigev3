<template>
  <div class="crp-price-area crp-price-bg fix p-relative z-index-1 pt-120 pb-100">
    <!-- Shapes -->
    <div class="crp-price-shape d-none d-xl-block">
      <img data-speed="1.1" src="/img/home-09/price/shape-1.png" alt="shape">
    </div>
    <div class="crp-price-shape-2 d-none d-xl-block">
      <img data-speed="1.1" src="/img/home-09/price/shape-1.png" alt="shape">
      <img src="/img/home-09/price/shape-2.png" alt="shape">
    </div>

    <div class="container container-1330">
      <!-- Title -->
      <div class="row justify-content-center">
        <div class="col-xl-6">
          <div class="crp-price-title-box mb-60 text-center">
            <span class="tp-section-subtitle-teko mb-25 tp_fade_anim" data-delay=".3">
              Predictable pricing
            </span>
            <h4 class="tp-section-title-teko tp_fade_anim" data-delay=".5">
              Special offer! <span>choose</span> <span>your pack</span> today
            </h4>
          </div>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="row">
        <div
          v-for="plan in pricingPlans"
          :key="plan.id"
          class="col-xl-4 col-lg-6 col-md-6"
        >
          <div
            class="crp-price-item mb-40 tp_fade_anim"
            :class="{ active: plan.active }"
            :data-delay="plan.delay"
          >
            <div class="crp-price-head">
              <span>{{ plan.title }}</span>
              <h4>
                {{ plan.price }}
                <i>{{ plan.period }}</i>
              </h4>
              <p>{{ plan.description }}</p>
            </div>

            <div class="crp-price-list">
              <ul>
                <li v-for="(feature, index) in plan.features" :key="index">
                  {{ feature }}
                </li>
              </ul>
            </div>

            <div class="crp-price-btn-box">
              <NuxtLink class="tp-btn-yellow-border sm" to="/contact">
                <span>
                  <span class="text-1">Get Started</span>
                  <span class="text-2">Get Started</span>
                </span>
                <i>
                  <svg-arrow-one/>
                  <svg-arrow-one/>
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
// Pricing data
const pricingPlans = [
  {
    id: 1,
    delay: ".3",
    title: "Basic Plan",
    price: "$9.00",
    period: "/ Weekly",
    description: "10% taxes will include after make price.",
    features: [
      "Unlimited cards",
      "Automated management",
      "SOX compliance",
      "Local video issuance",
      "Limited tools"
    ],
    active: false
  },
  {
    id: 2,
    delay: ".5",
    title: "Standard Plan",
    price: "$79.00",
    period: "/ Month",
    description: "10% taxes will include after make price.",
    features: [
      "Unlimited cards",
      "Automated management",
      "SOX compliance",
      "Local video issuance",
      "Limited tools"
    ],
    active: true
  },
  {
    id: 3,
    delay: ".7",
    title: "Premium Plan",
    price: "$99.00",
    period: "/ Yearly",
    description: "10% taxes will include after make price.",
    features: [
      "Unlimited cards",
      "Automated management",
      "SOX compliance",
      "Local video issuance",
      "Limited tools"
    ],
    active: false
  }
]
</script>
