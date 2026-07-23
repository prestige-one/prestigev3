<template>
  <div class="ai-price-area p-relative pt-120 pb-130">
    <!-- background shape -->
    <div class="ai-price-shape-2">
      <img src="/img/home-07/shape/shape-4.png" alt="shape">
    </div>

    <div class="container container-1230">
      <div class="row justify-content-center">
        <div class="col-xl-6">
          <div class="ai-price-title-box text-center mb-40">
            <div class="tp-section-subtitle-gradient mb-20 tp_fade_anim" data-delay=".3">
              <div>
                <img src="/img/title-shape/title-shape-1.png" alt="shape">
              </div>
              flexable & affordable
            </div>
            <h4 class="tp-section-title fs-54 mb-10 tp_fade_anim" data-delay=".5">
              Exclusive price plans
            </h4>
            <div class="tp_fade_anim" data-delay=".7">
              <p>Choose the plan that works for you.</p>
            </div>
          </div>

          <!-- Tabs -->
          <div class="ai-price-tab-wrap text-center mb-60 tp_fade_anim" data-delay=".7">
            <div class="ai-price-tab tp-marker-tab d-inline-flex justify-content-center p-relative">
              <ul class="nav nav-tab" role="tablist">
                <li class="nav-items" role="presentation" :class="{ active: activeTab === 'desktop' }">
                  <button
                    class="nav-links"
                    :class="{ active: activeTab === 'desktop' }"
                    type="button"
                    @click="activeTab = 'desktop'"
                  >
                    Desktop
                  </button>
                </li>
                <li class="nav-items" role="presentation" :class="{ active: activeTab === 'mobile' }">
                  <button
                    class="nav-links"
                    :class="{ active: activeTab === 'mobile' }"
                    type="button"
                    @click="activeTab = 'mobile'"
                  >
                    Mobile
                  </button>
                </li>
              </ul>
              <span id="lineMarker" ref="markerRef"/>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab Content -->
      <div class="tab-content">
        <div v-if="activeTab === 'desktop'" :class="`tab-pane fade ${activeTab === 'desktop' ? 'show active' : ''}`">
          <div class="row align-items-end">
            <div
              v-for="plan in desktopPlans"
              :key="plan.id"
              class="col-xl-4 col-lg-6 col-md-6"
            >
              <div class="ai-price-wrap mb-60" :class="{ active: plan.isPopular }">
                <!-- Popular Badge -->
                <div v-if="plan.isPopular" class="ai-price-badge text-center">
                  <span>
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.97633 6.39783C8.97633 6.39783 8.85614 7.19905 6.37234 10.404C4.04077 13.4246 7.41393 15.7241 7.81455 15.9885C7.83858 16.0045 7.86262 16.0045 7.89467 15.9885C8.4395 15.652 14.5048 11.75 8.97633 6.39783Z" fill="#0E0F11" />
                      <path d="M7.05299 4.62712C7.05299 2.7843 6.33189 1.10172 5.61078 0.140249C5.37041 -0.100119 4.9698 -0.0199964 4.88968 0.300494C4.56919 1.50233 3.60771 4.06626 1.28416 7.11092C-1.68038 10.9568 1.04379 15.1232 3.84808 15.9244C5.37041 16.325 3.44747 15.1232 3.2071 12.6394C2.96673 9.5146 7.05299 7.19105 7.05299 4.62712Z" fill="#0E0F11" />
                    </svg>
                  </span>
                  <span>Popular Plan</span>
                </div>

                <!-- Price Item -->
                <div class="ai-price-item">
                  <div class="ai-price-head">
                    <span>{{ plan.name }}</span>
                    <h4>
                      {{ plan.price }} <i>/ month</i>
                    </h4>
                  </div>

                  <!-- Button -->
                  <div class="ai-price-btn tp-price-light-anim">
                    <div class="animated-border-box w-100">
                      <NuxtLink
                        :class="`${plan.isPopular ? 'tp-btn-gradient sm' : 'tp-btn-black-border'} w-100 text-center`"
                        to="/contact"
                      >
                        <span><svg-star-five/></span>
                        Select Plan
                      </NuxtLink>
                    </div>
                  </div>

                  <!-- Features -->
                  <div class="ai-price-list">
                    <div
                      v-for="(feature, index) in plan.features"
                      :key="index"
                      class="ai-price-list-item d-flex align-items-start"
                    >
                      <i><svg-check-one/></i>
                      <span>{{ feature }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'mobile'" :class="`tab-pane fade ${activeTab === 'mobile' ? 'show active' : ''}`">
          <div class="row align-items-end">
            <div
              v-for="plan in mobilePlans"
              :key="plan.id"
              class="col-xl-4 col-lg-6 col-md-6"
            >
              <div class="ai-price-wrap mb-60" :class="{ active: plan.isPopular }">
                <div v-if="plan.isPopular" class="ai-price-badge text-center">
                  <span>
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.97633 6.39783C8.97633 6.39783 8.85614 7.19905 6.37234 10.404C4.04077 13.4246 7.41393 15.7241 7.81455 15.9885C7.83858 16.0045 7.86262 16.0045 7.89467 15.9885C8.4395 15.652 14.5048 11.75 8.97633 6.39783Z" fill="#0E0F11" />
                      <path d="M7.05299 4.62712C7.05299 2.7843 6.33189 1.10172 5.61078 0.140249C5.37041 -0.100119 4.9698 -0.0199964 4.88968 0.300494C4.56919 1.50233 3.60771 4.06626 1.28416 7.11092C-1.68038 10.9568 1.04379 15.1232 3.84808 15.9244C5.37041 16.325 3.44747 15.1232 3.2071 12.6394C2.96673 9.5146 7.05299 7.19105 7.05299 4.62712Z" fill="#0E0F11" />
                    </svg>
                  </span>
                  <span>Popular Plan</span>
                </div>

                <div class="ai-price-item">
                  <div class="ai-price-head">
                    <span>{{ plan.name }}</span>
                    <h4>
                      {{ plan.price }} <i>/ month</i>
                    </h4>
                  </div>
                   <div class="ai-price-btn tp-price-light-anim">
                      <div class="animated-border-box w-100">
                          <nuxt-link :class="`${plan.isPopular ? 'tp-btn-gradient sm' : 'tp-btn-black-border'} w-100 text-center`" href="/contact">
                              <span>
                                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M15.5728 1.05275C15.4917 0.72789 15.1998 0.5 14.8649 0.5C14.5301 0.5 14.2382 0.72789 14.1569 1.05275C13.9343 1.94324 13.6187 2.53851 13.1935 2.96373C12.7683 3.38895 12.173 3.70456 11.2825 3.92719C10.9577 4.0084 10.7297 4.30029 10.7297 4.63514C10.7297 4.96998 10.9577 5.26187 11.2825 5.34308C12.173 5.56571 12.7683 5.88132 13.1935 6.30654C13.6187 6.73176 13.9343 7.32703 14.1569 8.21752C14.2382 8.5424 14.5301 8.77027 14.8649 8.77027C15.1998 8.77027 15.4917 8.5424 15.5728 8.21752C15.7955 7.32703 16.111 6.73176 16.5363 6.30654C16.9615 5.88132 17.5568 5.56571 18.4473 5.34308C18.7721 5.26187 19 4.96998 19 4.63514C19 4.30029 18.7721 4.0084 18.4473 3.92719C17.5568 3.70456 16.9615 3.38895 16.5363 2.96373C16.111 2.53851 15.7955 1.94324 15.5728 1.05275Z" fill="currentcolor" />
                                      <path d="M7.76195 5.94484C7.6808 5.61998 7.38891 5.39209 7.05402 5.39209C6.71921 5.39209 6.42732 5.61998 6.34611 5.94484C5.915 7.66931 5.28664 8.89006 4.3923 9.78438C3.49797 10.6787 2.27722 11.3071 0.552746 11.7382C0.22789 11.8195 0 12.1112 0 12.4461C0 12.781 0.22789 13.0728 0.552746 13.1541C2.27722 13.5852 3.49797 14.2135 4.3923 15.1079C5.28664 16.0023 5.915 17.223 6.34611 18.9475C6.42732 19.2723 6.71921 19.5002 7.05402 19.5002C7.38891 19.5002 7.6808 19.2723 7.76195 18.9475C8.19308 17.223 8.82142 16.0023 9.71578 15.1079C10.6101 14.2135 11.8309 13.5852 13.5553 13.1541C13.8802 13.0728 14.1081 12.781 14.1081 12.4461C14.1081 12.1112 13.8802 11.8195 13.5553 11.7382C11.8309 11.3071 10.6101 10.6787 9.71578 9.78438C8.82152 8.89006 8.19308 7.66931 7.76195 5.94484Z" fill="currentcolor" />
                                  </svg>
                              </span>
                              Select Plan
                          </nuxt-link>
                      </div>
                  </div>

                  <div class="ai-price-list">
                    <div
                      v-for="(feature, index) in plan.features"
                      :key="index"
                      class="ai-price-list-item d-flex align-items-start"
                    >
                      <i><svg-check-one/></i>
                      <span>{{ feature }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Text -->
      <div class="row">
        <div class="col-xl-12">
          <div
            class="ai-price-bottom-text text-center tp_fade_anim"
            data-delay=".3"
            data-fade-from="top"
            data-ease="bounce"
          >
            <span>
              Still have a question?
              <NuxtLink to="#">Browse documentation</NuxtLink>
              or
              <NuxtLink to="#">Submit a ticket.</NuxtLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTabIndicator } from "@/composables/useTabIndicator"
import pricePlans from "~/data/pricing-data";
// active tab
const activeTab = ref<"desktop" | "mobile">("desktop");

const { markerRef } = useTabIndicator();

const desktopPlans = pricePlans.slice(0,6).filter(plan => plan.tab === 'desktop');
const mobilePlans = pricePlans.slice(0,6).filter(plan => plan.tab === 'mobile');
</script>

