<template>
     <div :class="`des-project-area ${topSpacing}`">
        <div v-if="showBanner" class="des-project-banner">
            <img
                class="w-100"
                data-speed=".7"
                src="/img/home-02/project/project-1.jpg"
                alt="project-image"
            >
        </div>
        <!-- counter section -->
         <div class="container container-1510">
            <div :class="`des-project-title-wrap pb-90 ${spacingCls}`">
              <div class="row align-items-center">
                <div class="col-xxl-6 col-xl-5">
                  <div class="des-project-title-box">
                    <span class="tp-section-subtitle text-capitalize text-black mb-15">
                      Fun Facts
                    </span>
                    <h3 class="tp-section-title-mango mb-0">
                      Numbers that Speak Volumes
                    </h3>
                  </div>
                </div>
                <div class="col-xxl-6 col-xl-7">
                  <div class="des-project-top-text">
                    <p>
                      We are a team of passionate and crazy individuals dedicated to bringing
                      your ideas to life. With a keen eye for aesthetics, attention to detail, &
                      a deep understanding of design principles, we strive to deliver exceptional
                      results that exceed your expectations!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="des-project-wrap">
              <div class="row">
                <div
                  v-for="stat in stats"
                  :key="stat.id"
                  class="col-xxl-6 offset-xxl-6 col-xl-7 offset-xl-5"
                >
                  <div class="des-project-item d-flex align-items-center">
                    <div class="des-project-total">
                      <span>
                        <counter-item :min="0" :max="stat.value" />{{ stat.suffix }}
                      </span>
                    </div>
                    <div class="des-project-info">
                      <span>{{ stat.tagline }}</span>
                      <h4>{{ stat.title }}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <!-- End couter section  -->
    </div>
</template>

<script setup lang="ts">
type Props = {
  spacingCls?: string;
  topSpacing?: string;
  showBanner?: boolean
}
withDefaults(defineProps<Props>(),
  {
    spacingCls: "pt-140",
    topSpacing: "pb-200",
    showBanner: true
  } 
)
const stats = [
    {
        id: 1,
        value: 120,
        suffix: "+",
        duration: 1,
        tagline: "[ Nice! ]",
        title: "Projects Completed"
    },
    {
        id: 2,
        value: 16,
        suffix: "+",
        duration: 1,
        tagline: "[ Holy Moly! ]",
        title: "Years of Experience"
    },
    {
        id: 3,
        value: 185,
        suffix: "%",
        duration: 1,
        tagline: "[ Ho Ho! ]",
        title: "Growing Agency"
    }
];
</script>