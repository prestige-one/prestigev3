<template>
  <div
    class="pp-service-details-process-ptb pt-130 pb-90"
    :style="{ backgroundColor: background }"
  >
    <div class="container container-1350">
      <!-- Heading -->
      <div class="row">
        <div class="col-lg-12">
          <div
            class="pp-service-details-process-heading text-center pb-100 tp_fade_anim"
            data-delay=".3"
          >
            <span class="pp-service-details-process-subtitle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <circle cx="5" cy="5" r="5" fill="currentColor" />
              </svg>
              Working Process
            </span>
            <h3 class="pp-service-details-process-title">
              Product making for <br>
              friendly users
            </h3>
          </div>
        </div>
      </div>

      <!-- Steps -->
      <div
        class="pp-service-details-process-box z-index-1 pb-40 tp_fade_anim"
        data-delay=".5"
      >
        <div class="row">
          <div
            v-for="step in steps"
            :key="step.id"
            class="col-lg-3 col-sm-6"
          >
            <div class="pp-service-details-process-item text-center mb-30">
              <span>{{ step.id }}</span>
              
              <h4 v-html="sanitizeHtml(step.title)"/>
              <p>{{ step.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="row">
        <div class="col-lg-12">
          <div class="pp-service-details-process-bottom text-center">
            <span>
              Don’t hesitate collaborate with expertise -
              <NuxtLink :to="isDark?'/dark/contact-us':'/contact-us'">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="11"
                  viewBox="0 0 25 11"
                  fill="none"
                >
                  <path
                    d="M18.675 10.0096L24.72 5.70942C24.806 5.64025 24.8766 5.54578 24.9255 5.43455C24.9744 5.32331 25 5.19883 25 5.07235C25 4.94587 24.9744 4.82138 24.9255 4.71015C24.8766 4.59892 24.806 4.50445 24.72 4.43528L18.675 0.135054C18.5572 0.0563568 18.4215 0.0281769 18.2892 0.0549569C18.157 0.0817369 18.0358 0.161954 17.9446 0.282961C17.8535 0.403968 17.7977 0.558882 17.7859 0.723281C17.7742 0.88768 17.8072 1.05221 17.8798 1.19094L19.633 4.335H0.598757C0.439957 4.335 0.287661 4.41268 0.175371 4.55096C0.0630817 4.68924 0 4.87679 0 5.07235C0 5.26791 0.0630817 5.45545 0.175371 5.59373C0.287661 5.73201 0.439957 5.8097 0.598757 5.8097H19.633L17.8798 8.95376C17.8072 9.09249 17.7742 9.25702 17.7859 9.42142C17.7977 9.58582 17.8535 9.74073 17.9446 9.86174C18.0358 9.98274 18.157 10.063 18.2892 10.0897C18.4215 10.1165 18.5572 10.0883 18.675 10.0096Z"
                    fill="currentColor"
                  />
                </svg>
                Let’s Talk
              </NuxtLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();

const props = defineProps<{
  bgColor?: string;
}>();

// Default background if none is passed
const background = ref(isDark.value ? "#1B1B1D" : props.bgColor || "#F6F6F9");

const steps = [
  {
    id: "01",
    title: "Research <br> And Analysis",
    text: "Conduct user research (interviews, surveys, analytics).",
  },
  {
    id: "02",
    title: "Design <br> And Prototyping",
    text: "Transform wireframes into high-fidelity UI designs.",
  },
  {
    id: "03",
    title: "Testing <br> And Iteration",
    text: "Conduct usability testing to gather user feedback.",
  },
  {
    id: "04",
    title: "Prepare for <br> Delivery",
    text: "Track performance using analytics and user feedback.",
  },
];
</script>
