<template>
  <div class="app-faq-area service-faq-style p-relative pb-140">
    <div class="container container-1230">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="app-faq-heading p-relative mb-80 text-center">
            <h3 class="tp-section-title-mango fs-100">
              Frequently asked questions
            </h3>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="app-faq-wrap">
            <div class="ai-faq-accordion-wrap">
              <div id="accordionExample1" class="accordion">
                <div
                  v-for="(faq,index) in faqs"
                  :key="faq.id"
                  class="accordion-items"
                >
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

interface FAQItem {
  id: string
  question: string
  answer: string
  isOpen?: boolean
}

const faqs = ref<FAQItem[]>([
  {
    id: "collapseOne1",
    question: "How long does it take to get started?",
    answer:
      "It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). We always start a project with analysis, learning the requirements, and making estimates that will be shared in the price proposal. Then it's off to signing off, kicking off.",
    isOpen: true,
  },
  {
    id: "collapseTwo2",
    question: "What is your typical working process?",
    answer:
      "It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). We always start a project with analysis, learning the requirements, and making estimates that will be shared in the price proposal. Then it's off to signing off, kicking off.",
  },
  {
    id: "collapseThree3",
    question: "How do you usually start new collaborations?",
    answer:
      "It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). We always start a project with analysis, learning the requirements, and making estimates that will be shared in the price proposal. Then it's off to signing off, kicking off.",
  },
  {
    id: "collapseFour4",
    question: "What's the average project duration?",
    answer:
      "It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). We always start a project with analysis, learning the requirements, and making estimates that will be shared in the price proposal. Then it's off to signing off, kicking off.",
  },
  {
    id: "collapseFive5",
    question: "Can we start the design without wireframes?",
    answer:
      "It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). We always start a project with analysis, learning the requirements, and making estimates that will be shared in the price proposal. Then it's off to signing off, kicking off.",
  },
])

</script>