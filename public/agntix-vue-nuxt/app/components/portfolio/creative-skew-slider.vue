<template>
  <main>
    <div ref="sliderRef" class="skew-slider-area">

        <div class="skew-slider-wrap">
            <div
              v-for="(slide, index) in skewSliderData"
              :key="index"
              class="skew-slider-item slide"
            >
              <div
                class="slide__img"
                :style="{ backgroundImage: `url(${slide.image})` }"
              />
              <div class="skew-slider-content">
                <span>{{ slide.category }}</span>
                <h4>
                  <NuxtLink to="/portfolio-details-modern">
                    
                    <span v-html="sanitizeHtml(slide.title)"/>
                  </NuxtLink>
                </h4>
              </div>
            </div>
        </div>

        <div class="tp-portfolio-slider__copyright">
          <p>
            Have a project in mind?
            <NuxtLink to="/contact">Let's Talk.</NuxtLink>
          </p>
        </div>
        <div class="tp-portfolio-slider__social">
            <a href="#">Fb</a>
            <a href="#">In</a>
            <a href="#">Be</a>
        </div>
        <div class="skew-slider-arrow slides-nav">
          <button class="skew-slider-prev d-flex align-items-center" @click="prev">
            <span class="icon-1">
              <svg-arrow-slide-prev/>
            </span>
            <span class="ml-5">Prev</span>
          </button>
          <button class="skew-slider-next d-flex align-items-center" @click="next">
            <span class="mr-5">Next</span>
            <span class="icon-2">
              <svg-arrow-slide-next/>
            </span>
          </button>
        </div>

        <div class="slides-numbers-wrap">
          <div class="slides-numbers">
            <span ref="slideNumberRef" class="active text-1">01</span>
            <span class="text-2">/</span>
            <span class="text-3">{{ skewSliderData.length.toString().padStart(2, '0') }}</span>
          </div>
        </div>
    </div>

  </main>
</template>

<script setup lang="ts">
const { sliderRef, slideNumberRef, next, prev } = useSkewSlider();

const skewSliderData = [
  {
    image: '/img/slider-img/skew-1.jpg',
    category: 'Digital platform',
    title: 'Bright <br> Mind',
  },
  {
    image: '/img/slider-img/skew-2.jpg',
    category: 'Digital platform',
    title: 'simple<br> <span>logistics'
  },
  {
    image: '/img/slider-img/skew-3.jpg',
    category: 'Digital platform',
    title: 'Smart <br> platform'
  },
  {
    image: '/img/slider-img/skew-4.jpg',
    category: 'Digital platform',
    title: 'Royal <br> Benz'
  },
  {
    image: '/img/slider-img/skew-5.jpg',
    category: 'Digital platform',
    title: 'World’s <br> Relays'
  },
  {
    image: '/img/slider-img/skew-6.jpg',
    category: 'Interactive Mind',
    title: 'Bright <br> Captive'
  }
]
</script>
