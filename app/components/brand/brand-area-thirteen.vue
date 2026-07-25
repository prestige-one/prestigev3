
<template>
  <div class="cr-brand-area cr-brand-ptb fix cr-multi-border-bottom">
    <div class="container container-1230">
      <div class="cr-multi-border pt-100">
        <!-- Heading -->
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="cr-brand-heading text-center mb-60">
              <div class="ca-brand-sub mb-70">
                <img src="/img/home-13/brand/brand-sub.png" alt="brand-sub">
              </div>
              <div class="tp_text_anim">
                <p>
                  +88,500 high-performing teams <br>
                  at companies worldwide build with Agntix
                </p>
              </div>
            </div>
          </div>

          <!-- Brand Marquee -->
          <div class="col-lg-8">
            <div class="cr-brand-wrapper pb-80">
              <client-only>
                <Vue3Marquee
                  :clone="true"
                  :duration="30"
                  :pause-on-hover="false"
                  class="app-brand-active fix slider-transtion"
                >
                  <div
                    v-for="brand in brands"
                    :key="brand.id"
                    class="app-brand-item"
                  >
                    <img :src="brand.image" :alt="`brand-${brand.id}`">
                  </div>
                </Vue3Marquee>
              </client-only>
            </div>
            <div class="cr-brand-bottom">
              <img
                src="/img/home-13/brand/brand-bottom.png"
                alt="brand bottom"
              >
            </div>
          </div>
        </div>

        <!-- Features -->
        <div class="row">
          <div class="col-lg-12">
            <div class="cr-feature-heading text-center pt-100 pb-100">
              <div
                class="tp-section-subtitle-gradient ct mb-20 tp_fade_anim"
                data-delay=".3"
              >
                Features
              </div>
              <h4 class="tp-section-title-onest fs-72 tp-text-revel-anim">
                Trading crypto <br>
                is a few clicks away
              </h4>
              <div class="tp_text_anim">
                <p>
                  Our platform is designed to make trading simple, accessible, &
                  profitable for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature Items -->
        <div class="cr-feature-item-box">
          <div class="row gx-0">
            <div
              v-for="feature in features"
              :key="feature.id"
              :class="feature.colClass"
            >
              <div
                class="cr-feature-item mb-15"
                :class="{ hight: feature.isBig }"
              >
                <div class="cr-feature-item-content">
                  <div
                    class="cr-feature-item-icon"
                    :class="{ 'd-flex': !feature.isBig }"
                  >
                    <span :class="feature.isBig ? 'mb-25 d-inline-block' : ''">
                      <img :src="feature.icon" alt="feature">
                    </span>
                    <h5 class="cr-feature-item-icon-title">
                      {{ feature.title }}
                    </h5>
                  </div>
                  <p v-html="sanitizeHtml(feature.description)"/>
                </div>
                <div
                  class="cr-feature-thumb anim-zoomin-wrap text-center"
                  :class="{ big: feature.isBig }"
                >
                  <img
                    class="anim-zoomin"
                    :src="feature.thumb"
                    alt="thumb"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

const brands = [
  { id: 1, image: "/img/home-13/brand/brand-1.png"},
  { id: 2, image: "/img/home-13/brand/brand-2.png"},
  { id: 3, image: "/img/home-13/brand/brand-3.png"},
  { id: 4, image: "/img/home-13/brand/brand-4.png"},
  { id: 5, image: "/img/home-13/brand/brand-5.png"},
  { id: 6, image: "/img/home-13/brand/brand-1.png"},
  { id: 7, image: "/img/home-13/brand/brand-2.png"},
  { id: 8, image: "/img/home-13/brand/brand-3.png"},
  { id: 9, image: "/img/home-13/brand/brand-4.png"}
];

const features = [
  {
    id: 1,
    icon: "/img/home-13/feature/feature-icon-1.png",
    title: "Trading Platform",
    description:
      "We offer low fees and fast execution times, so you can <br> make the most of it.",
    thumb: "/img/home-13/feature/feature-thumb-1.png",
    colClass: "col-md-6"
  },
  {
    id: 2,
    icon: "/img/home-13/feature/feature-icon-2.png",
    title: "Educational Resources",
    description:
      "Learn trading strategies and market dynamics with our expertly crafted educational content.",
    thumb: "/img/home-13/feature/feature-thumb-2.png",
    colClass: "col-md-6"
  },
  {
    id: 3,
    icon: "/img/home-13/feature/feature-icon-3.png",
    title: "Market Analysis Tool",
    description:
      "Our platform provides up-to-date news and analysis <br> on the crypto markets.",
    thumb: "/img/home-13/feature/feature-thumb-3.png",
    colClass: "col-lg-12",
    isBig: true
  }
];
</script>


<style scoped>
.app-brand-item {
  width: 195px;
}
</style>