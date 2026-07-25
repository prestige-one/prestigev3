<template>
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
        <p>{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const faqs = ref<FaqItem[]>([
  {
    question: "What is Agntix?",
    answer:
      "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
    isOpen: true,
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
    isOpen: false,
  },
  {
    question: "Google mobile can monetize your app?",
    answer:
      "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
    isOpen: false,
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
    isOpen: false,
  },
  {
    question: "Do you offer customer support?", // Note: Duplicate question in original HTML
    answer:
      "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
    isOpen: false,
  },
  {
    question: "Can I lock my note app?",
    answer:
      "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
    isOpen: false,
  },
]);
</script>
