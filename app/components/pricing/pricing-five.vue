<template>
  <div class="tp-service-5-price-ptb pt-200 pb-140">
    <div class="container container-1230">
      <div class="row">
        <div class="col-lg-12">
          <div :class="`tp-service-5-price-heading ${isDark?'service-details':''} d-flex align-items-start tp_fade_anim pb-25`">
            <div class="ar-about-us-4-title-box d-flex align-items-center mb-20">
              <span :class="`tp-section-subtitle pre ${isDark?'text-white':''}`">
                pricing plans
              </span>
              <div class="ar-about-us-4-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="9" viewBox="0 0 81 9" fill="none">
                    <rect y="4" width="80" height="1" :fill="isDark?'#fff':'#111013'" />
                    <path d="M77 7.96366L80.5 4.48183L77 1" :stroke="isDark?'#fff':'#111013'" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <h3 :class="`tp-career-title fs-${isDark?'100':'60'} pb-40`">
              Profitable <br>
              pricing plans
            </h3>
          </div>
        </div>
      </div>
      
      <div 
        v-for="item in displayPricingData" 
        :key="item.id"
        class="tp-service-5-price-item tp_fade_anim"
        :class="{'service-details':isDark}"
      >
        <div class="row">
          <div class="col-lg-3">
            <div class="tp-service-5-price-item-heading">
              <h4 class="tp-service-5-price-item-title">{{ item.name }}</h4>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="tp-service-5-price-item-list">
              <ul>
                <li 
                  v-for="(feature, index) in item.features" 
                  :key="index"
                >
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M11 1L4.125 8L1 4.81818" :stroke="isDark?'white':'black'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="tp-service-5-price-item-head text-lg-end">
              <h4>{{ item.price }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
interface PricingItem {
  id: number;
  name: string;
  price: string;
  features: string[];
}

const displayPricingData: PricingItem[] = [
  {
    id: 1,
    name: 'Branding',
    price: '$250',
    features: [
      'Quality Control',
      'Budget Management',
      'Custom design concept',
      'Interior Design',
      'Custom design concept',
      '3D Rendering of propose design'
    ]
  },
  {
    id: 2,
    name: 'UI design',
    price: '$450',
    features: [
      'Quality Control',
      'Budget Management',
      'Custom design concept',
      'Interior Design',
      'Custom design concept',
      '3D Rendering of propose design'
    ]
  },
  {
    id: 3,
    name: 'Research',
    price: '$550',
    features: [
      'Quality Control',
      'Budget Management',
      'Custom design concept',
      'Interior Design',
      'Custom design concept',
      '3D Rendering of propose design'
    ]
  },
];
</script>