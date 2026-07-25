<template>
  <div class="ai-project-area">
      <div class="container container-1230">
          <div class="row justify-content-center">
              <div class="col-xl-10">
                  <div class="ai-project-title-box p-relative text-center mb-60">
                      <div class="ai-project-shape-1">
                          <img src="/img/home-07/shape/shape-2.png" alt="">
                      </div>
                      <div class="tp-section-subtitle-gradient mb-20 tp_fade_anim" data-delay=".3">
                          <div><img src="/img/title-shape/title-shape-1.png" alt=""></div>
                          what we create
                      </div>
                      <h4 class="tp-section-title fs-54 mb-20 tp_fade_anim" data-delay=".5">
                          Image Generator showcases our capabilities in visual content creation
                      </h4>
                      <div class="tp_fade_anim" data-fade-from="top" data-delay=".7" data-ease="bounce">
                          <span>
                              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.8267 7.78875V9.76887L7.58239 14.6467H7.34091V12.5579L14.8267 7.78875ZM0 7.78875L7.4858 12.5579V14.6467H7.24432L0 9.76887V7.78875ZM14.8267 0.606934V2.58705L7.58239 7.46489H7.34091V5.37611L14.8267 0.606934ZM0 0.606934L7.4858 5.37611V7.46489H7.24432L0 2.58705V0.606934Z" fill="white" />
                              </svg>
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="container-fluid p-0">
          <div class="ai-project-thumb-wrap">
              <div class="row gx-0">
                  <div v-for="item in project_data" :key="item.id" class="col-xl-4 col-lg-6 col-md-6">
                      <div class="ai-project-item anim-zoomin-wrap p-relative">
                          <div :ref="addToRefs" class="ai-project-thumb anim-zoomin tp--hover-item fix">
                              <div class=" tp--hover-img" :data-displacement="item.image" data-intensity="0.6" data-speedin="1" data-speedout="1">
                                  <img :src="item.image" alt="project-img">
                              </div>
                          </div>
                          <div class="ai-project-content">
                              <span class="ai-project-subtitle">{{ item.subtitle }}</span>
                              <h4 class="ai-project-title">
                                <nuxt-link class="tp-line-black" href="/portfolio-details-gallery">
                                  {{ item.title }}
                                </nuxt-link>
                              </h4>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const { addToRefs } = useHoverEffect()
const project_data = [
  {
      id: 1,
      image: '/img/home-07/project/project-1.jpg',
      subtitle: "Creative",
      title: "DT ASSOCIATION",
  },
  {
      id: 2,
      image: '/img/home-07/project/project-2.jpg',
      subtitle: "Creative",
      title: "DT COLLABORATION",
  },
  {
      id: 3,
      image: '/img/home-07/project/project-3.jpg',
      subtitle: "Creative",
      title: "DT NETWORK",
  },
  {
      id: 4,
      image: '/img/home-07/project/project-4.jpg',
      subtitle: "Creative",
      title: "DT COALITION",
  },
  {
      id: 5,
      image: '/img/home-07/project/project-5.jpg',
      subtitle: "Creative",
      title: "DT SYNDICATE",
  },
  {
      id: 6,
      image: '/img/home-07/project/project-6.jpg',
      subtitle: "Creative",
      title: "DT CONGLOMERATE",
  },
]
</script>
