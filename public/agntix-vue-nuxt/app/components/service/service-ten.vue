<template>
  <div class="st-service-area st-service-ptb pt-160 pb-160" data-bg-color="#151515" style="background-color: #151515;">
    <div class="container container-1320">
        <div class="row">
            <div class="col-lg-5">
                <div class="st-service-heading mb-70 tp_fade_anim" data-delay=".3">
                    <span class="tp-section-subtitle st">// OUR SERVICES</span>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="st-service-heading mb-70">
                    <h3 class="tp-section-title-playfair mb-20 tp_fade_anim" data-delay=".3">SERVICE WE’RE <br> ALWAYS <span>PROVIDE</span></h3>
                    <div class="tp_text_anim">
                        <p>Agntix power of our 8+ years of experience. We build excellence works. <br> That will help you to grow your business products.</p>
                    </div>
                </div>
            </div>
        </div>

        <div v-for="item in service_data" :key="item.id" class="st-service-item fix">
            <div class="row gx-0">
                <div class="col-lg-6">
                    <div class="st-service-item-wrap d-flex align-items-center">
                        <div class="st-service-item-thumb">
                            <nuxt-link href="/service-details">
                              <img :src="item.image" alt="">
                            </nuxt-link>
                        </div>
                        <div class="st-service-item-text">
                            <h4 class="st-service-item-title">
                              <nuxt-link class="tp-line-white" href="/service-details">
                                {{ item.title }}
                              </nuxt-link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="st-service-item-wrapper p-relative fix">
                        <div class="st-service-item-btn">
                            <nuxt-link href="/service-details">
                              <span>
                                 <svg-arrow-up-seven/>
                              </span>
                            </nuxt-link>
                        </div>
                        <div class="st-service-item-slider">
                            <div class="st-service-item-tags">
                                <span v-for="(t,i) in item.categories" :key="i">
                                  {{ t }}
                                </span>
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
const service_data = [
  {
    id: 39,
    title: 'DEVELOPMENT',
    image: '/img/home-12/service/st-service-1.jpg',
    categories: [
      'UX Design', 'User Testing', 'Product Prototype', 'Mobile UI', 'Web app design',
      'UX Design', 'User Testing', 'Product Prototype', 'Mobile UI', 'Web app design',
      'UX Design', 'User Testing', 'Product Prototype', 'Mobile UI', 'Web app design'
    ],
  },
  {
    id: 40,
    title: 'MARKETING',
    image: '/img/home-12/service/st-service-2.jpg',
    categories: [
      'UX Design', 'User Testing', 'Product Prototype', 'Mobile UI', 'Web app design',
      'UX Design', 'User Testing', 'Product Prototype', 'Mobile UI', 'Web app design',
      'UX Design', 'User Testing', 'Product Prototype', 'Mobile UI', 'Web app design'
    ],
  },
  {
    id: 41,
    title: 'GRAPHICS',
    image: '/img/home-12/service/st-service-3.jpg',
    categories: [
      'UX Design', 'User Testing', 'Product Prototype', 'Mobile UI', 'Web app design',
      'UX Design', 'User Testing', 'Product Prototype', 'Mobile UI', 'Web app design',
      'UX Design', 'User Testing', 'Product Prototype', 'Mobile UI', 'Web app design'
    ],
  },
  {
    id: 42,
    title: 'TECHNOLOGY',
    image: '/img/home-12/service/st-service-4.jpg',
    categories: [
      'UX Design', 'User Testing', 'Product Prototype', 'Mobile UI', 'Web app design',
      'UX Design', 'User Testing', 'Product Prototype', 'Mobile UI', 'Web app design',
      'UX Design', 'User Testing', 'Product Prototype', 'Mobile UI', 'Web app design'
    ],
  },
]
</script>