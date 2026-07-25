<template>
  <div class="studio-service-area pb-200">
    <div class="container container-1830">
      <div class="studio-service-wrap">
        <div class="row">
          <div class="col-xl-9">
            <div class="studio-service-title-box mb-90">
              <span class="tp-section-subtitle-clash clash-subtitle-pos">
                Our <br>
                Services
                <i><svg-arrow-long-two /></i>
              </span>
              <h3 class="tp-section-title-clash tp-text-revel-anim">
                <span class="clash-subtitle-space-1">Explore</span><br>Our
                Expertise
              </h3>
            </div>
          </div>
          <!-- Service section -->
          <div class="col-xl-12">
            <div class="studio-service-item-wrap">
              <div class="tp-award-item-wrap p-relative">
                <nuxt-link
                  v-for="service in service_data"
                  :key="service.id"
                  href="/service-details-2"
                >
                  <div class="tp-award-item hover-reveal-item p-relative">
                    <div class="row align-items-center">
                      <div class="col-md-8">
                        <div class="tp-award-box-left z-index-3">
                          <span class="tp-award-year">
                            {{service.id > 9 ? service.id : '0' + service.id}}
                          </span>
                          <span class="tp-award-text">
                            {{service.title}}
                          </span>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div
                          class="tp-award-box-right z-index-3 d-flex justify-content-start justify-content-md-end"
                        >
                          <span class="tp-award-icon">
                            <svg-arrow-two
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              path-value="M1 11L11 1M11 1H1M11 1V11"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="studio-service-reveal-img" :style="{ backgroundImage: `url(${service.image})` }"/>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <!-- Service section -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const service_data = [
  {
    id: 1,
    title: "mobile app",
    image: "/img/home-06/service/service-1.jpg",
  },
  {
    id: 2,
    title: "UI / ux design",
    image: "/img/home-06/service/service-2.jpg",
  },
  {
    id: 3,
    title: "3D Modeling Services",
    image: "/img/home-06/service/service-3.jpg",
  },
  {
    id: 4,
    title: "Creative Direction",
    image: "/img/home-06/service/service-4.jpg",
  },
  {
    id: 5,
    title: "WEB Development",
    image: "/img/home-06/service/service-5.jpg",
  },
  {
    id: 6,
    title: "Brand Identity",
    image: "/img/home-06/service/service-6.jpg",
  },
];
</script>
