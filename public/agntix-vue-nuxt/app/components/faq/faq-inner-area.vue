<template>
  <div class="app-faq-area p-relative pb-120">
    <div class="container container-1230">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="ai-faq-accordion-dark-wrap app-faq-wrap faq-inner-style">
            <div class="ai-faq-accordion-wrap">
              <div id="accordionExample" class="accordion">
                <div
                  v-for="(faq, index) in faqs"
                  :key="index"
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
                      <span class="accordion-icon" />
                    </button>
                  </h2>
                  <div
                    :id="`collapse${index}`"
                    class="accordion-collapse collapse"
                    :class="{ show: faq.isOpen }"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p v-html="sanitizeHtml(faq.answer)"/>
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
const faqs = ref([
  {
    question: "What is Agntix?",
    answer: `It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). <br> We always start a project with analysis, learning the requirements, and making estimates that will be shared in the
    price proposal. <br> Then it’s off to signing off, kicking off.`,
    isOpen: true,
  },
  {
    question: "Is there a mobile app available?",
    answer: `It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). <br> We always start a project with analysis, learning the requirements, and making estimates that will be shared in the
    price proposal. <br> Then it’s off to signing off, kicking off.`,
    isOpen: false,
  },
  {
    question: "Google mobile can monetize your app?",
    answer: `It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). <br> We always start a project with analysis, learning the requirements, and making estimates that will be shared in the
    price proposal. <br> Then it’s off to signing off, kicking off.`,
    isOpen: false,
  },
  {
    question: "Do you offer customer support?",
    answer: `It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). <br> We always start a project with analysis, learning the requirements, and making estimates that will be shared in the
    price proposal. <br> Then it’s off to signing off, kicking off.`,
    isOpen: false,
  },
  {
    question: "Do you offer customer support?", // Note: Duplicate question in original HTML
    answer: `It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). <br> We always start a project with analysis, learning the requirements, and making estimates that will be shared in the
    price proposal. <br> Then it’s off to signing off, kicking off.`,
    isOpen: false,
  },
  {
    question: "Can I lock my note app?",
    answer: `It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). <br> We always start a project with analysis, learning the requirements, and making estimates that will be shared in the
    price proposal. <br> Then it’s off to signing off, kicking off.`,
    isOpen: false,
  },
]);
</script>
