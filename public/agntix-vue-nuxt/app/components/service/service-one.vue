<template>
  <section id="down" class="tp-service-area pt-120">
    <div class="container-fluid p-0">
      <div class="row gx-0">
        <div class="col-12">
          <div class="tp-service-title-box">
            <span class="tp-section-subtitle pre">Services</span>
          </div>
        </div>
      </div>

      <div class="tp-service-pin">
        <div
          v-for="service in service_data"
          :key="service.id"
          class="tp-service-item tp-service-panel"
        >
          <div class="row">
            <!-- Number -->
            <div class="col-xxl-3 col-xl-2 col-lg-1 col-md-1">
              <div class="tp-service-number">
                <span>0{{ service.id }}.</span>
              </div>
            </div>

            <!-- Content -->
            <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-7">
              <div class="tp-service-content">
                <h4 class="tp-section-title">
                  <NuxtLink class="tp_text_invert" to="/service-details">
                    {{ service.title }}
                  </NuxtLink>
                </h4>

                
                <p v-html="sanitizeHtml(service.description)"/>

                <!-- Button -->
                <div class="tp-service-btn">
                  <NuxtLink to="/service-details" class="tp-btn-black btn-red-bg">
                    <span class="tp-btn-black-filter-blur">
                      <svg-btn-blur-filter
                        :filter-id="`buttonFilter${service.id + 1}`"
                      />
                    </span>
                    <span
                      class="tp-btn-black-filter d-inline-flex align-items-center"
                      :style="{ filter: `url(#buttonFilter${service.id + 1})` }"
                    >
                      <span class="tp-btn-black-text">See Our Services</span>
                      <span class="tp-btn-black-circle">
                        <svg-arrow-one />
                      </span>
                    </span>
                  </NuxtLink>
                </div>

                <!-- Categories -->
                <div class="tp-service-category">
                  <template
                    v-for="(category, catIndex) in service.categories"
                    :key="catIndex"
                  >
                    <span>{{ category }}</span>
                    <br
                      v-if="
                        (catIndex === 2 && service.id === 1) ||
                        (catIndex === 3 && service.id === 3) ||
                        (catIndex === 2 && service.id === 4)
                      "
                    >
                  </template>
                </div>
              </div>
            </div>

            <!-- Image -->
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div class="tp-service-thumb text-end">
                <img
                  v-if="service.image"
                  class="tp_fade_anim"
                  data-fade-from="right"
                  data-delay=".2"
                  :src="service.image"
                  :alt="`${service.title} image`"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const service_data = [
  {
    id: 1,
    title: "Web Design",
    image: "/img/home-01/service/service-1.jpg",
    description:
      "Whether you need stunning visuals for your website, captivating graphics <br> for your marketing materials, or innovative UI/UX designs for your app, our <br> team of experts is here to turn your vision into reality.",
    categories: [
      "UX Design",
      "User Testing",
      "Motion Design",
      "Product Prototype",
    ]
  },
  {
    id: 2,
    title: "Product Design",
    image: "/img/home-01/service/service-2.jpg",
    description:
      "Our product design services focus on creating intuitive and aesthetically <br> pleasing products that resonate with your audience and stand out <br> in the market.",
    categories: [
      "UX Design",
      "User Testing",
      "Product Prototype",
      "Mobile UI",
      "Software UI design",
      "Web app design",
    ]
  },
  {
    id: 3,
    title: "Web Development",
    image: "/img/home-01/service/service-3.jpg",
    description:
      "From website development and e-commerce platforms to custom <br> software and mobile apps, our development team has the expertise to <br> bring your ideas to life.",
    categories: [
      "UX Design",
      "Frontend",
      "Backend",
      "E-commerce",
      "No Code / Low Code",
    ],
  },
  {
    id: 4,
    title: "Branding",
    image: "/img/home-01/service/service-4.jpg",
    description:
      "It's the core of your company's identity. It guides all business decisions, <br> ensuring a consistent and impactful presence in the market.",
    categories: [
      "Research & Insights",
      "Unique Ways",
      "Value Proposition",
      "Naming",
      "Verbal Identity",
    ]
  },
];
</script>
