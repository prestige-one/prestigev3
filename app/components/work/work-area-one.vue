<template>
  <section class="tp-work-area pt-120 pb-145 tp-panel-pin-area">
    <div class="container">
      <div class="row">
        <!-- Left Title Section -->
        <div class="col-lg-6">
          <div class="tp-work-title-box tp-panel-pin">
            <span class="tp-section-subtitle pre mb-20">How we Work</span>
            <h2 class="tp-section-title fs-140">
              Our <br>
              design thinking process
            </h2>
          </div>
        </div>

        <!-- Right Steps Section -->
        <div class="col-lg-6">
          <div class="tp-work-wrapper">
            <div v-for="(step, index) in steps" :key="index" class="tp-work-item tp-panel-pin mb-15">
              <div class="tp-work-number p-relative">
                <span />
                <i>{{ step.number }}</i>
              </div>
              <div class="tp-work-content">
                <h4 class="tp-work-title">{{ step.title }}</h4>
                
                <p v-html="sanitizeHtml(step.description)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface WorkStep {
  number: string
  title: string
  description: string
}

const steps: WorkStep[] = [
  {
    number: "01",
    title: "User Research",
    description:
      "We listen stories of user to understand pain points and give a rough <br /> estimate about cost and time-frame"
  },
  {
    number: "02",
    title: "Define Problems",
    description:
      "We listen stories of user to understand pain points and give a rough <br /> estimate about cost and time-frame"
  },
  {
    number: "03",
    title: "Design & Prototype",
    description:
      "We listen stories of user to understand pain points and give a rough <br /> estimate about cost and time-frame"
  },
  {
    number: "04",
    title: "Evaluation & Testing",
    description:
      "We listen stories of user to understand pain points and give a rough <br /> estimate about cost and time-frame"
  }
]
</script>
