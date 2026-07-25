<template>
  <div class="app-faq-area p-relative pb-120">
    <div class="app-faq-shape" data-speed=".8">
      <img src="/img/home-10/faq/faq-shape-1.png" alt="FAQ Shape">
    </div>
    <div class="container container-1230">
      <div class="row">
        <div class="col-lg-4">
          <div class="app-faq-heading p-relative mb-40">
            <span class="tp-section-subtitle border-bg bg-color tp_fade_anim" data-delay=".3">FAQ</span>
            <h3 class="tp-section-title-phudu fs-70 mb-20 tp_fade_anim" data-delay=".5">Got any <br> questions?</h3>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="app-faq-wrap pl-70">
            <div class="ai-faq-accordion-wrap">
              <div id="accordionExample" class="accordion">
                <div v-for="(faq, index) in faqs" :key="index" class="accordion-items">
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
                    data-bs-parent="#accordionExample"
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

const faqs = ref<FaqItem[]>([
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
    question: 'Google mobile can monetize your app?',
    answer: 'Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.',
    isOpen: false
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.',
    isOpen: false
  },
  {
    question: 'Do you offer customer support?', // Note: Duplicate question in original HTML
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
//   faqs.value.forEach((faq, i) => {
//     faq.isOpen = i === index ? !faq.isOpen : false
//   })
// }
</script>
