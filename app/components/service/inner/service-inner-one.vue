<template>
  <div class="tp-inner-service-area pt-120 pb-120">
    <div class="container container-1830">
      <div class="row">
        <!-- Left Sidebar -->
        <div class="col-lg-3">
          <div class="inner-service-1-left">
            <span>Services</span>
            <ul>
              <li
                v-for="(service, index) in displayServiceData"
                :key="service.id"
              >
                <span>{{ index + 1 }}. {{ service.title }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Main Content -->
        <div class="col-lg-9">
          <!-- Services -->
          <div
            v-for="(service, index) in displayServiceData"
            :key="service.id"
            :class="['tp-inner-service-item', service.spacingCls]"
          >
            <div class="inner-service-1-right">
              <div class="row">
                <div class="col-xl-4">
                  <div class="inner-service-1-number">
                    <h1>
                      <counter-item :min="0" :max="index + 1" :no-itag="true" />
                    </h1>
                  </div>
                </div>
                <div class="col-xl-8">
                  <div class="inner-service-1-text">
                    <span>{{ service.title }}</span>
                    <p v-for="(paragraph, idx) in service.text" :key="idx">
                      {{ paragraph }}
                    </p>
                  </div>
                  <div class="inner-service-1-category">
                    <NuxtLink
                      v-for="(category, idx) in service.categories"
                      :key="idx"
                      :to="service.link"
                      class="inner-service-1-category-item d-flex justify-content-between align-items-center"
                    >
                      <span>{{ category }}</span>
                      <i>
                       <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </i>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <div class="row gx-10">
              <div class="inner-service-1-thumb-text">
                <span>(Our recent Digital work)</span>
              </div>
              <div
                v-for="(image, idx) in service.images"
                :key="idx"
                class="col-xl-6"
              >
                <div
                  :ref="addToRefs"
                  class="inner-service-1-thumb tp--hover-item"
                >
                  <div
                    class="tp--hover-img"
                    data-displacement="/img/webgl/1.jpg"
                    data-intensity="0.6"
                    data-speedin="1"
                    data-speedout="1"
                  >
                    <img
                      :src="image"
                      alt="service image"
                      class="w-100"
                      draggable="false"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Services -->
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
// hover refs
const { addToRefs } = useHoverEffect()

const displayServiceData = [
  {
    id: 1,
    title: 'Branding',
    spacingCls: 'mb-200',
    text: [
      'Strong branding sets your startup apart, signaling quality and professionalism.',
      'It builds trust with your audience, making you stand out in a crowded market.'
    ],
    categories: [
      'Brand Naming',
      'Creative Direction',
      'Brand Strategy',
      'Graphic charter',
      'Logo Design'
    ],
    images: [
      '/img/inner-service/service-3.jpg',
      '/img/inner-service/service-4.jpg'
    ],
    link: '/service-details-2'
  },
  {
    id: 2,
    title: 'Digital Design',
    spacingCls: 'mb-200',
    text: [
      'A process of assumption & validation with a goal of taking into account all the necessary variables, which are always custom and are to be uncovered',
      'Every business has digital potential, and we are here to help you leverage that potential.'
    ],
    categories: [
      'Wireframe',
      'UI design',
      'Prototyping',
      'Design system',
      'UI & UX audit',
      'Design System',
      'Interactive Experiences'
    ],
    images: [
      '/img/inner-service/service-1.jpg',
      '/img/inner-service/service-2.jpg'
    ],
    link: '/service-details-2'
  },
  {
    id: 3,
    title: 'Marketing',
    spacingCls: 'mb-200',
    text: [
      "Marketing strategy is proudly responsible for the half of a campaign's success, another half relies solely on its implementation.",
      'We focus on creating visuals that communicate your value and engage your audience.'
    ],
    categories: [
      'Animated logos',
      'Product Illustrations',
      'Launch Videos',
      'Illustrations',
      'Visual Effects',
      'Illustration 3D'
    ],
    images: [
      '/img/inner-service/service-5.jpg',
      '/img/inner-service/service-6.jpg'
    ],
    link: '/service-details-2'
  },
  {
    id: 4,
    title: 'Development',
    spacingCls: '',
    text: [
      'Efficiency and scalability. The two factors which any decision gets filtered out with - programming language, framework, library, each line of code, and server side'
    ],
    categories: ['Integration', 'Front-end', 'Back-end', 'Webflow'],
    images: [
      '/img/inner-service/service-7.jpg',
      '/img/inner-service/service-8.jpg'
    ],
    link: '/service-details-2'
  }
]
</script>
