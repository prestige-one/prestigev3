<template>
  <div class="it-step-area it-step-bg paste-bg-2 p-relative pt-120 pb-140">
    <div class="it-step-shape-1">
      <img data-speed="1.1" src="/img/home-11/step/about-shape-3.png" alt="Shape 1">
    </div>
    <div class="it-step-shape-2 d-none d-xxl-block">
      <img data-speed="1.1" src="/img/home-11/step/about-shape-4.png" alt="Shape 2">
    </div>
    <div class="container container-1230">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="it-step-title-box z-index-1 text-center mb-105">
            <span class="tp-section-subtitle-platform mb-20 tp-split-text tp-split-right">How we works</span>
            <h4 class="tp-section-title-platform mb-20 tp-split-text tp-split-right">Transforming IT, One Step at a Time</h4>
            <div class="tp_text_anim">
              <p>
                Every business is unique, and so are our solutions. Here’s
                how we tailor <br> our expertise to your needs
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-xl-5">
          <div class="it-step-thumb-wrap p-relative">
            <div class="it-step-thumb">
              <img src="/img/home-11/step/about-1.jpg" alt="Main Image">
            </div>
            <img class="it-step-thumb-shape-1" data-speed=".9" src="/img/home-11/step/about-shape-1.jpg" alt="Shape 1">
            <img class="it-step-thumb-shape-2" src="/img/home-11/step/about-shape-2.png" alt="Shape 2">
          </div>
        </div>
        <div class="col-xl-7">
          <div class="it-step-accordion-wrap it-faq-wrap">
            <div id="accordionExample" :class="`accordion it-faq-accordion`">
              <div v-for="(faq, index) in faq_data" :key="index" class="accordion-items" :class="{ 'faq-active': faq.isOpen }">
                <h2 class="accordion-header">
                  <button
                    class="accordion-buttons"
                    :class="{ collapsed: !faq.isOpen }"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse${index}`"
                    :aria-expanded="faq.isOpen"
                    :aria-controls="`collapse${index}`"
                    @click="setActiveFaq(index)"
                  >
                    <i>Step {{ index + 1 }}</i>
                    <span>{{ faq.title }}</span>
                  </button>
                </h2>
                <div
                  :id="`collapse${index}`"
                  class="accordion-collapse collapse"
                  :class="{ show: faq.isOpen }"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>{{ faq.description }}</p>
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

interface FaqItem {
  id: number;
  title: string;
  description: string;
  isOpen: boolean;
}

const faq_data = ref<FaqItem[]>([
  {
    id:1,
    title: 'Discovery',
    description: 'Leveraging our findings, we craft a comprehensive IT plan. This involves designing systems, networks, and software that align with your business goals.',
    isOpen: true
  },
  {
    id:2,
    title: 'Planning & Design',
    description: 'Leveraging our findings, we craft a comprehensive IT plan. This involves designing systems, networks, and software that align with your business goals.',
    isOpen: false
  },
  {
    id:3,
    title: 'Implementation',
    description: 'Leveraging our findings, we craft a comprehensive IT plan. This involves designing systems, networks, and software that align with your business goals.',
    isOpen: false
  },
  {
    id:4,
    title: 'Quality Assurance',
    description: 'Leveraging our findings, we craft a comprehensive IT plan. This involves designing systems, networks, and software that align with your business goals.',
    isOpen: false
  }
])

const setActiveFaq = (index: number) => {
  faq_data.value.forEach((faq, i) => {
    faq.isOpen = i === index
  })
}
</script>
