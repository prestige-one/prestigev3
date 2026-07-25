<template>
  <div class="design-service-area pt-100 pb-140">
    <div class="container container-1680">
      <!-- Section Title -->
      <div class="row">
        <div class="col-xl-12">
          <div class="design-service-big-text text-center mb-120">
            <h4 class="tp_text_invert_2">services</h4>
          </div>
        </div>
      </div>

      <div class="row gx-20">
        <!-- Left Text -->
        <div class="col-xxl-5 col-xl-3">
          <div class="design-service-left d-none d-xl-block">
            <span>services we offer</span>
          </div>
        </div>

        <!-- Accordion -->
        <div class="col-xxl-7 col-xl-9">
          <div class="design-service-right">
            <div id="accordionExample" class="accordion design-service-accordion">
              <div
                v-for="service in servicesData"
                :key="service.id"
                class="accordion-items"
              >
                <!-- Header -->
                <h2 class="accordion-header">
                  <button
                    class="accordion-buttons"
                    :class="service.isExpanded ? '' : 'collapsed'"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#${service.slug}`"
                    :aria-expanded="service.isExpanded ? 'true' : 'false'"
                    :aria-controls="service.slug"
                  >
                    <span>[ {{ service.id > 9 ? service.id : '0' + service.id }} ]</span>
                    <i>{{ service.title }}</i>
                    <img
                      v-if="service.image"
                      class="design-service-img d-none d-md-block"
                      :src="service.image"
                      :alt="service.title"
                    >
                  </button>
                </h2>

                <!-- Content -->
                <div
                  :id="service.slug"
                  class="accordion-collapse collapse"
                  :class="{ show: service.isExpanded }"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      {{ service.description.split('and')[0] }} <br>
                      and{{ service.description.split('and')[1] }}
                    </p>
                    <div class="design-service-category">
                      <NuxtLink
                        v-for="(category, linkIndex) in service.categories"
                        :key="linkIndex"
                        to="/service-details-2"
                      >
                        {{ category }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Accordion -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const servicesData = [
  {
    id: 1,
    slug: "collapseOne",
    title: "mobile app",
    image: "/img/home-05/service/service-1.jpg",
    description:
      "Our goal is your brand's wild influence. Exclusive logos, mockups, and corporate identities make your unique value stand out.",
    categories: ["Logo design", "Brand Guidelines", "Visual Identity", "Presentations"],
    isExpanded: true
  },
  {
    id: 2,
    slug: "collapseTwo",
    title: "branding",
    image: "/img/home-05/service/service-2.jpg",
    description:
      "Our goal is your brand's wild influence. Exclusive logos, mockups, and corporate identities make your unique value stand out.",
    categories: ["Logo design", "Brand Guidelines", "Visual Identity", "Presentations"],
    isExpanded: false
  },
  {
    id: 3,
    slug: "collapseThree",
    title: "ux design",
    image: "/img/home-05/service/service-3.jpg",
    description:
      "Our goal is your brand's wild influence. Exclusive logos, mockups, and corporate identities make your unique value stand out.",
    categories: ["Logo design", "Brand Guidelines", "Visual Identity", "Presentations"],
    isExpanded: false
  },
  {
    id: 4,
    slug: "collapseFour",
    title: "development",
    image: "/img/home-05/service/service-4.jpg",
    description:
      "Our goal is your brand's wild influence. Exclusive logos, mockups, and corporate identities make your unique value stand out.",
    categories: ["Logo design", "Brand Guidelines", "Visual Identity", "Presentations"],
    isExpanded: false
  },
];
</script>