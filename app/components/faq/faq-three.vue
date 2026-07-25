<template>
  <div class="app-faq-area p-relative pb-120">
    <div class="it-faq-shape-1">
      <img data-speed=".9" src="/img/home-11/faq/faq-1.png" alt="Shape 1">
    </div>
    <div class="container container-1230">
      <div class="row">
        <div class="col-lg-4">
          <div class="app-faq-heading p-relative mb-40">
            <span class="tp-section-subtitle border-bg bg-color">FAQ</span>
            <h3 class="tp-section-title-platform platform-text-black fs-84 tp-split-text tp-split-right mb-70">
              Got any <br> Questions?
            </h3>
            <img data-speed="1.1" class="it-faq-shape-2" src="/img/home-11/faq/faq-2.png" alt="Shape 2">
          </div>
        </div>
        <div class="col-lg-8">
          <div class="app-faq-wrap pl-70 z-index-1 tp_fade_anim" data-fade-from="right">
            <div class="ai-faq-accordion-wrap">
              <div id="accordionExample1" class="accordion">
                <div v-for="(faq, index) in faq_data" :key="index" class="accordion-items">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-buttons"
                      :class="{ collapsed: !faq.isOpen }"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse${index}`"
                      :aria-expanded="faq.isOpen"
                      :aria-controls="`collapse${index}`"
                    >
                      {{ faq.question }}
                      <span class="accordion-icon"/>
                    </button>
                  </h2>
                  <div
                    :id="`collapse${index}`"
                    class="accordion-collapse collapse"
                    :class="{ show: faq.isOpen }"
                    data-bs-parent="#accordionExample1"
                  >
                    <div class="accordion-body">
                      <p>{{ faq.answer }}</p>
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

interface FaqItem {
  question: string
  answer: string
  isOpen: boolean
}

const faq_data = ref<FaqItem[]>([
  {
    question: 'What is Agntix?',
    answer: 'Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.',
    isOpen: true
  },
  {
    question: 'Is there a mobile app available?',
    answer: 'Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.',
    isOpen: false
  },
  {
    question: 'Can Google mobile monetize your app?',
    answer: 'Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.',
    isOpen: false
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.',
    isOpen: false
  },
  {
    question: 'Can I lock my note app?',
    answer: 'Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.',
    isOpen: false
  }
])

// const toggleAccordion = (index: number) => {
//   faq_data.value.forEach((faq, i) => {
//     faq.isOpen = i === index ? !faq.isOpen : false
//   })
// }
</script>
