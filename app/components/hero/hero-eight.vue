
<template>
  <div class="ai-hero-area p-relative z-index-1">
    <!-- Video Background -->
    <div class="ai-hero-video">
      <video-player
        video-url="https://html.aqlova.com/videos/agntix/agntix-video.mov"
      />
    </div>

    <div class="container-fluid">
      <div class="row align-items-center">
        <!-- Left Content -->
        <div class="col-xl-7 col-lg-6 col-md-6">
          <div class="ai-hero-ptb">
            <div class="ai-hero-title-box">
              <span class="ai-hero-subtitle tp_fade_anim" data-delay=".3">
                Driving AI Excellence
              </span>
              <h4 class="ai-hero-title tp_fade_anim" data-delay=".5">
                Generate <br>
                <span class="d-none d-md-inline-block">
                  <img
                    src="/img/home-07/hero/hero-text-img.png"
                    alt="hero-text"
                  >
                </span>
                unique AI Images.
              </h4>

              <div class="tp_fade_anim" data-delay=".7">
                <div class="animated-border-box">
                  <NuxtLink
                    class="tp-btn-gradient p-relative"
                    to="/portfolio-col-3"
                  >
                    <span><svg-star-four /></span>
                    Explore project
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Sliders -->
        <div class="col-xl-5 col-lg-6 col-md-6">
          <div class="ai-hero-slider-main fix p-relative">
            <div class="row gx-12">
              <div class="col-6">
                <div class="ai-hero-slider-wrap">
                  <div class="ai-hero-slider-track ai-hero-slider-up">
                    <!-- First set -->
                    <div v-for="image in sliderImages" :key="`up-1-${image.id}`" class="ai-hero-slider-item">
                      <img class="w-100" :src="image.src" alt="image">
                    </div>
                    <!-- Duplicate for seamless loop -->
                    <div v-for="image in sliderImages" :key="`up-2-${image.id}`" class="ai-hero-slider-item">
                      <img class="w-100" :src="image.src" alt="image">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="ai-hero-slider-wrap">
                  <div class="ai-hero-slider-track ai-hero-slider-down">
                    <!-- First set -->
                    <div v-for="image in sliderImages" :key="`down-1-${image.id}`" class="ai-hero-slider-item">
                      <img class="w-100" :src="image.src" alt="image">
                    </div>
                    <!-- Duplicate for seamless loop -->
                    <div v-for="image in sliderImages" :key="`down-2-${image.id}`" class="ai-hero-slider-item">
                      <img class="w-100" :src="image.src" alt="image">
                    </div>
                  </div>
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
// Images list
const sliderImages = [
  { id: 1, src: "/img/home-07/hero/slider/slider-1.jpg" },
  { id: 2, src: "/img/home-07/hero/slider/slider-2.jpg" },
  { id: 3, src: "/img/home-07/hero/slider/slider-3.jpg" },
  { id: 4, src: "/img/home-07/hero/slider/slider-4.jpg" },
  { id: 5, src: "/img/home-07/hero/slider/slider-5.jpg" },
  { id: 6, src: "/img/home-07/hero/slider/slider-6.jpg" },
  { id: 7, src: "/img/home-07/hero/slider/slider-7.jpg" },
  { id: 8, src: "/img/home-07/hero/slider/slider-3.jpg" },
  { id: 9, src: "/img/home-07/hero/slider/slider-4.jpg" },
  { id: 10, src: "/img/home-07/hero/slider/slider-5.jpg" },
];
</script>


<style scoped>
.ai-hero-slider-main {
  overflow: hidden;
  height: 100vh;
}

.ai-hero-slider-wrap {
  overflow: hidden;
  height: 100%;
  position: relative;
}

.ai-hero-slider-track {
  display: flex;
  flex-direction: column;
  gap: 5px;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.ai-hero-slider-up {
  animation: slideUp 18s linear infinite;
}

.ai-hero-slider-down {
  animation: slideDown 18s linear infinite;
}

.ai-hero-slider-item {
  flex-shrink: 0;
  width: 100%;
  overflow: hidden;
}

.ai-hero-slider-item img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

@keyframes slideUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}

/* Pause on hover */
.ai-hero-slider-track:hover {
  animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .ai-hero-slider-main {
    height: 500px;
  }
}

@media (max-width: 480px) {
  .ai-hero-slider-main {
    height: 400px;
  }
}
</style>