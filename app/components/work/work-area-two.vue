<template>
  <div class="creative-work-area creative-work-2-style">
    <div class="container container-1580">
      <div class="creative-work-bg p-relative" data-bg-color="#F6F6F9" :style="{backgroundColor: isDark ? '' : '#F6F6F9;'}" :class="{'black-bg-8': isDark}">
        <!-- Title & Button -->
        <div class="creative-work-title-wrap mb-65">
          <div class="row">
            <div class="col-xl-4">
              <div class="creative-work-title-box">
                <span
                  class="tp-section-subtitle fs-17 pre-circle tp_fade_anim"
                  data-delay=".3"
                >
                  Sharing the love
                </span>
              </div>
            </div>
            <div class="col-xl-7">
              <div class="creative-work-title-box mb-30">
                <h4
                  class="tp-section-title fs-44 tp_fade_anim"
                  data-delay=".5"
                >
                  Speak up in a crowded digital world. Build a reputation on the
                  voice of your brand.
                </h4>
              </div>
              <div
                class="creative-work-btn tp_fade_anim"
                data-delay=".5"
                data-fade-from="top"
                data-ease="bounce"
              >
                <NuxtLink
                  to="/contact-us"
                  class="tp-btn-black btn-green-light-bg pr-15"
                >
                  <span class="tp-btn-black-filter-blur">
                    <svg-btn-blur-filter filter-id="buttonFilter7" />
                  </span>
                  <span
                    class="tp-btn-black-filter d-inline-flex align-items-center"
                    style="filter: url(#buttonFilter7)"
                  >
                    <span class="tp-btn-black-text">Let’s chat</span>
                    <span class="tp-btn-black-circle">
                      <svg-arrow-four/>
                    </span>
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Achievements -->
        <div class="row">
          <div
            v-for="item in achievements"
            :key="item.id"
            class="col-xl-3 col-lg-4 col-md-6"
          >
            <div
              class="creative-work-item text-center mb-30 tp_fade_anim"
              :data-delay="item.delay"
            >
              <div class="creative-work-icon">
                <img :src="item.image" alt="brand-image">
              </div>
              <div class="creative-work-content">
                
                <p v-html="sanitizeHtml(item.description)"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark()
const achievements = [
  {
    id: 1,
    delay: ".3",
    image: "/img/home-04/brand/brand-1-1.png",
    description: "#1 Team in the world on Dribbble",
  },
  {
    id: 2,
    delay: ".4",
    image: "/img/home-04/brand/brand-1-2.png",
    description: "Top 100 Global Companies on Clutch",
  },
  {
    id: 3,
    delay: ".5",
    image: "/img/home-04/brand/brand-1-3.png",
    description: "5 Stars Rating on <br> GoodFirms",
  },
  {
    id: 4,
    delay: ".6",
    image: "/img/home-04/brand/brand-1-4.png",
    description: "100% Job Success on Upwork",
  },
]
</script>
