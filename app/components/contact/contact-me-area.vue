<template>
  <div class="tp-contact-me-interest-ptb p-relative">
    <div class="container container-1230">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- Category Section -->
          <div class="tp-contact-me-interest-wrapper pb-100">
            <h3 class="tp-contact-me-interest-title">I'm Interested in...</h3>
            <div class="tp-contact-me-interest-category">
              <span
                v-for="item in categories"
                :key="item"
                class="tp-contact-category-btn"
                :class="{ active: activeCategories.includes(item) }"
                @click="handleCategoryClick(item)"
              >
                {{ item }}
              </span>
            </div>
          </div>

          <!-- Form Section -->
          <div class="tp-contact-me-interest-form">
            <h3 class="tp-contact-me-interest-title">Request a Quote</h3>

            <div class="tp-contact-me-interest-form-wrap">
              <form id="contact-form" @submit.prevent="handleSubmit">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="tp-contact-form-input mb-20">
                      <label>Full name*</label>
                      <input v-model="form.name" name="name" type="text">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="tp-contact-form-input mb-20">
                      <label>Email address*</label>
                      <input v-model="form.email" name="email" type="email">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="tp-contact-form-input mb-20">
                      <label>Website link</label>
                      <input v-model="form.subject" name="subject" type="text">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="tp-contact-form-input mb-20">
                      <label>How Can We Help You*</label>
                      <textarea v-model="form.message" name="message"/>
                    </div>
                    <div class="tp-contact-form-btn">
                      <button class="w-100" type="submit">
                        <span>
                          <span class="text-1">Send Message</span>
                          <span class="text-2">Send Message</span>
                        </span>
                      </button>
                      <p class="ajax-response mt-5"/>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const categories = [
  "Branding",
  "Design Concept",
  "App Design",
  "Web Design",
  "Android Development",
  "iOS Development",
  "Logo",
];

const activeCategories = ref<string[]>(["App Design"]);

const handleCategoryClick = (item: string) => {
  if (activeCategories.value.includes(item)) {
    activeCategories.value = activeCategories.value.filter(
      (cat) => cat !== item
    );
  } else {
    activeCategories.value.push(item);
  }
};

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleSubmit = () => {
  console.log("Form submitted:", form.value);
  console.log("Selected categories:", activeCategories.value);
};
</script>
