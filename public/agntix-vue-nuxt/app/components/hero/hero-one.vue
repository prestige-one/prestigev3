<template>
  <div
    class="tp-hero-area tp-hero-ptb tp-image-distortion p-relative fix z-index-1"
    style="background-image: url(/img/bg-wrap-2.jpg); background-size: cover"
    data-background="/img/bg-wrap-2.jpg"
  >
    <div class="container container-1750">
      <div class="row">
        <div class="col-xl-9">
          <div class="tp-hero-title-box">
            <h2 class="tp-hero-title tp-char-animation">
              <span>Digital</span> <br>
              <span>
                <img
                  class="tp-hero-video d-none d-xl-inline-block"
                  src="/img/home-01/hero/hero-video-1.jpg"
                  alt="hero-video-image"
                >
                Design</span
              >
              Experience
            </h2>
          </div>
        </div>
        <div class="col-xl-3">
          <div
            class="tp-hero-content-wrap d-flex flex-xl-column justify-content-between pb-20"
          >
            <div
              class="tp-hero-info d-flex align-items-start justify-content-between tp_text_anim"
            >
              <p>
                Hey! is the ultimate Agntix <br>
                Agency template for professionals <br>
                in the design industry.
              </p>
              <span>
                <nuxt-link href="/contact">
                  <svg-arrow-one
                    width="22"
                    height="22"
                    color="currentcolor"
                    viewBox="0 0 22 22"
                    path-value="M1 21L21 1M21 1H1M21 1V21"
                  />
                  <svg-arrow-one
                    width="22"
                    height="22"
                    color="currentcolor"
                    viewBox="0 0 22 22"
                    path-value="M1 21L21 1M21 1H1M21 1V21"
                  />
                </nuxt-link>
              </span>
            </div>
            <div
              class="tp-hero-more-info-wrap d-inline-flex justify-content-end tp_fade_anim"
              data-delay="1.5"
            >
              <div
                class="tp-hero-more-info p-relative"
                style="background-image: url(/img/home-01/hero/hero-svg-1.svg)"
              >
                <span class="tp-hero-line d-none d-sm-block" />
                <div
                  class="tp-hero-avater d-flex align-items-center justify-content-between"
                >
                  <img
                    src="/img/home-01/hero/hero-avater.jpg"
                    alt="avater-image"
                  >
                  <span>Juan Mauel</span>
                </div>
                <p>
                  “The depth of exploration and quality of the work was great”
                </p>
                <div class="tp-hero-link text-end">
                  <nuxt-link to="/about-us">More</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
