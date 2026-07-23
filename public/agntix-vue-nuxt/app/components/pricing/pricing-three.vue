<template>
  <div class="app-price-area p-relative pt-120 pb-130">
    <div class="app-price-bg-shape">
      <img src="/img/home-09/price/price-bg.png" alt="Background Shape">
    </div>
    <div class="container container-1230">
      <div class="row align-items-end">
        <div class="col-lg-6">
          <div class="app-price-heading">
            <span
              class="tp-section-subtitle border-bg bg-color tp_fade_anim"
              data-delay=".3"
              >Affordable pricing</span
            >
            <h3
              class="tp-section-title-phudu fs-70 mb-55 tp_fade_anim"
              data-delay=".5"
            >
              Start With <br>
              Affordable Price
            </h3>
          </div>
          <div class="app-price-tab-wrap mb-30 tp_fade_anim" data-delay=".7">
            <div
              class="ai-price-tab tp-marker-tab d-inline-flex justify-content-center p-relative"
            >
              <ul id="myTab" class="nav nav-tab" role="tablist">
                <li class="nav-items" role="presentation">
                  <button
                    id="home-tab"
                    class="nav-links"
                    :class="{ active: activeTab === 'monthly' }"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    :aria-selected="activeTab === 'monthly'"
                    @click="activeTab = 'monthly'"
                  >
                    Monthly
                  </button>
                </li>
                <li class="nav-items" role="presentation">
                  <button
                    id="profile-tab"
                    class="nav-links"
                    :class="{ active: activeTab === 'yearly' }"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    :aria-selected="activeTab === 'yearly'"
                    @click="activeTab = 'yearly'"
                  >
                    Yearly
                  </button>
                </li>
              </ul>
              <span id="lineMarker" ref="markerRef" />
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="d-flex justify-content-start justify-content-lg-end">
            <div class="app-price-wrap mb-30">
              <div class="app-price-store d-flex align-items-center mb-20">
                <p><b>250K+</b> review</p>
                <p>
                  <span>
                    <img
                      src="/img/home-10/price/app-store.svg"
                      alt="App Store">
                    </span>
                    App Store
                </p>
                <p>
                  <span>
                    <img src="/img/home-10/price/google-store.svg" alt="Play Store">
                  </span>
                  Play Store
                </p>
              </div>
              <div class="app-price-heading">
                <p>
                  Unlock the full potential of Agntix app with our <br>
                  flexible pricing options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myTabContent" class="tab-content">
        <div
          id="home-tab-pane"
          class="tab-pane fade"
          :class="{ 'show active': activeTab === 'monthly' }"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <div class="app-price-box">
            <div class="row">
              <div
                v-for="(plan, index) in price_data.monthly"
                :key="index"
                class="col-xl-4 col-lg-6 col-md-6"
              >
                <div class="crp-price-item" :class="{ active: plan.active }">
                  <div class="crp-price-head">
                    <span>{{ plan.name }}</span>
                    <h4>{{ plan.price }} <i>/ month</i></h4>
                    <p>{{ plan.description }}</p>
                  </div>
                  <div class="crp-price-list">
                    <ul>
                      <li
                        v-for="(feature, fIndex) in plan.features"
                        :key="fIndex"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="9"
                            viewBox="0 0 10 9"
                            fill="none"
                          >
                            <path
                              d="M1 5.6941C1 5.6941 2.6 6.60188 3.4 7.93242C3.4 7.93242 5.8 2.70967 9 0.96875"
                              stroke="#21212D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        {{ feature }}
                      </li>
                    </ul>
                  </div>
                  <div class="app-price-btn-box">
                    <div
                      class="animated-border-box"
                      :class="{ 'radius-style-2': plan.active }"
                    >
                      <nuxt-link
                        :class="
                          plan.active
                            ? 'tp-btn-gradient sm w-100 text-center'
                            : 'tp-btn-black-border w-100 text-center'
                        "
                        :href="plan.link"
                      >
                        Join this plan
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="profile-tab-pane"
          class="tab-pane fade"
          :class="{ 'show active': activeTab === 'yearly' }"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <div class="app-price-box">
            <div class="row">
              <div
                v-for="(plan, index) in price_data.yearly"
                :key="index"
                class="col-xl-4 col-lg-6 col-md-6"
              >
                <div class="crp-price-item" :class="{ active: plan.active }">
                  <div class="crp-price-head">
                    <span>{{ plan.name }}</span>
                    <h4>{{ plan.price }} <i>/ yearly</i></h4>
                    <p>{{ plan.description }}</p>
                  </div>
                  <div class="crp-price-list">
                    <ul>
                      <li
                        v-for="(feature, fIndex) in plan.features"
                        :key="fIndex"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="9"
                            viewBox="0 0 10 9"
                            fill="none"
                          >
                            <path
                              d="M1 5.6941C1 5.6941 2.6 6.60188 3.4 7.93242C3.4 7.93242 5.8 2.70967 9 0.96875"
                              stroke="#21212D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        {{ feature }}
                      </li>
                    </ul>
                  </div>
                  <div class="app-price-btn-box">
                    <div
                      class="animated-border-box"
                      :class="{ 'radius-style-2': plan.active }"
                    >
                      <nuxt-link
                        :class="
                          plan.active
                            ? 'tp-btn-gradient sm w-100 text-center'
                            : 'tp-btn-black-border w-100 text-center'
                        "
                        :href="plan.link"
                      >
                        Join this plan
                      </nuxt-link>
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
const { markerRef } = useTabIndicator();
const activeTab = ref<string>("monthly");
const price_data = {
  monthly: [
    {
      name: "Free",
      price: "$0",
      description: "Organize your daily task for free",
      features: [
        "Unlimited cards",
        "Automated management",
        "SOX compliance",
        "Local video issuance",
        "Limited tools",
      ],
      link: "/contact",
      active: false,
    },
    {
      name: "Pro",
      price: "$48",
      description: "Organize your daily task for free",
      features: [
        "Unlimited cards",
        "Automated management",
        "SOX compliance",
        "Local video issuance",
        "Limited tools",
      ],
      link: "/contact",
      active: true,
    },
    {
      name: "Business",
      price: "$140",
      description: "Organize your daily task for free",
      features: [
        "Unlimited cards",
        "Automated management",
        "SOX compliance",
        "Local video issuance",
        "Limited tools",
      ],
      link: "/contact",
      active: false,
    },
  ],
  yearly: [
    {
      name: "Free",
      price: "$0",
      description: "Organize your daily task for free",
      features: [
        "Unlimited cards",
        "Automated management",
        "SOX compliance",
        "Local video issuance",
        "Limited tools",
      ],
      link: "/contact",
      active: false,
    },
    {
      name: "Pro",
      price: "$78",
      description: "Organize your daily task for free",
      features: [
        "Unlimited cards",
        "Automated management",
        "SOX compliance",
        "Local video issuance",
        "Limited tools",
      ],
      link: "/contact",
      active: true,
    },
    {
      name: "Business",
      price: "$199",
      description: "Organize your daily task for free",
      features: [
        "Unlimited cards",
        "Automated management",
        "SOX compliance",
        "Local video issuance",
        "Limited tools",
      ],
      link: "/contact",
      active: false,
    },
  ],
};
</script>
