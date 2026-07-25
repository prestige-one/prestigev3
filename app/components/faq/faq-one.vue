<template>
  <div class="ai-faq-area ai-faq-bg mb-130 p-relative">
    <!-- FAQ Thumb -->
    <div class="ai-faq-thumb">
      <div class="anim-zoomin-wrap">
        <img class="anim-zoomin" src="/img/home-07/faq/faq.jpg" alt="faq">
      </div>

      <div
        class="ai-faq-user-box d-flex align-items-center justify-content-end"
      >
        <div
          class="ai-faq-user-item mr-20 mb-20 tp_fade_anim"
          data-fade-from="top"
          data-ease="bounce"
          data-delay=".3"
          data-bg-color="#abecd6"
          style="background-color: #abecd6;"
        >
          <span>Users</span>
          <h4>1M+</h4>
          <span>From 173 countries</span>
        </div>

        <div
          class="ai-faq-user-item mb-20 tp_fade_anim"
          data-fade-from="top"
          data-ease="bounce"
          data-delay=".5"
          data-bg-color="#fff6bf"
          style="background-color: #fff6bf;"
        >
          <span>Images</span>
          <h4>1M+</h4>
          <span>Generated images</span>
        </div>
      </div>
    </div>

    <!-- FAQ Content -->
    <div class="container container-1720">
      <div class="row">
        <div class="offset-xl-7 offset-lg-6 col-xl-5 col-lg-6">
          <div class="ai-faq-content-wrap">
            <div class="ai-faq-title-box mb-20">
              <div class="ai-faq-video">
                <client-only>
                  <modal-video url="https://www.youtube.com/watch?v=ZXj5tn08Hgg" />
                </client-only>
              </div>
              <h4 class="tp-section-title fs-54">
                Frequently <br>
                ask questions
              </h4>
            </div>

            <!-- Accordion -->
            <div class="ai-faq-accordion-wrap">
              <div id="accordionExample" class="accordion">
                <div
                  v-for="(faq) in faqs"
                  :key="faq.id"
                  class="accordion-items"
                >
                  <h2 class="accordion-header">
                    <button
                      class="accordion-buttons"
                      :class="{ collapsed: !faq.show }"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#${faq.id}`"
                      :aria-expanded="faq.show ? 'true' : 'false'"
                      :aria-controls="faq.id"
                    >
                      {{ faq.question }}
                      <span class="accordion-icon"/>
                    </button>
                  </h2>
                  <div
                    :id="faq.id"
                    class="accordion-collapse collapse"
                    :class="{ show: faq.show }"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>{{ faq.answer }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Accordion -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No special script needed unless you want to make FAQ items dynamic
const faqs = [
  {
    id: "collapseOne",
    question: "Can I customize the images?",
    answer:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    show: true,
  },
  {
    id: "collapseTwo",
    question: "Can I Create Multiple Images at Once?",
    answer:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    show: false,
  },
  {
    id: "collapseThree",
    question: "What's the Standard Image Size?",
    answer:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    show: false,
  },
];
</script>
