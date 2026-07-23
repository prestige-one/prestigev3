<template>
  <div class="cr-feature-2-area p-relative cr-feature-2-ptb">
    <div class="cr-feature-2-bg">
      <img :src="feature2Bg" alt="feature">
    </div>

    <div class="container-fluid gx-0">
      <div class="row g-0">

        <!-- LEFT -->
        <div class="col-xxl-4 col-xl-6 order-2 order-xxl-1">
          <div class="cr-feature-2-left">
            <!-- box 1 -->
            <div class="cr-feature-2-box">
              <div class="row row-cols-xl-5 gx-0">
                <div class="col">
                  <feature-crypto-item :image="featureImages.f1" />
                </div>
                <div class="col"/>
                <div class="col">
                  <feature-crypto-item :image="featureImages.f2" animation-class="animation-2" />
                </div>
              </div>
            </div>

            <!-- box 2 -->
            <div class="cr-feature-2-box">
              <div class="row row-cols-xl-5 gx-0">
                <div class="col">
                  <feature-crypto-item :image="featureImages.f3" />
                </div>
                <div class="col">
                  <feature-crypto-item :image="featureImages.f4" animation-class="animation-2" />
                </div>
                <div class="col">
                  <feature-crypto-item :image="featureImages.f5" />
                </div>
                <div class="col"/>
                <div class="col">
                  <feature-crypto-item :image="featureImages.f6" animation-class="animation-2" />
                </div>
              </div>
            </div>

            <!-- box 3 -->
            <div class="cr-feature-2-box">
              <div class="row row-cols-xl-5 gx-0">
                <div class="col">
                  <feature-crypto-item :image="featureImages.f7" />
                </div>
                <div class="col"/>
                <div class="col"/>
                <div class="col">
                  <feature-crypto-item :image="featureImages.f8" animation-class="animation-2" />
                </div>
                <div class="col"/>
              </div>
            </div>
          </div>
        </div>

        <!-- CENTER -->
        <div class="col-xxl-4 order-xl-12 order-1 order-xxl-2">
          <div class="cr-feature-2-heading text-center">
            <div class="tp-section-subtitle-gradient ct mb-20 tp_fade_anim" data-delay=".3">Features</div>
            <h4 class="tp-section-title-onest tp-text-revel-anim">Supported tokens</h4>
            <div class="tp_text_anim">
              <p>
                Agntix offers a comprehensive selection of digital <br>
                that meet our rigorous criteria for quality, safety, and regulatory <br>
                compliance
              </p>
            </div>
            <div
              class="cr-feature-2-btn tp_fade_anim"
              data-delay=".7"
              data-fade-from="top"
              data-ease="bounce"
            >
              <NuxtLink href="/service-3" class="tp-btn-white-border">
                Find out more
                <span>
                  <svg-arrow-six/>
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="col-xxl-4 col-xl-6 order-2 order-xxl-3">
          <div class="cr-feature-2-right">
            <!-- box 1 -->
            <div class="cr-feature-2-box">
              <div class="row row-cols-xl-5 gx-0 justify-content-end">
                <div class="col">
                  <feature-crypto-item :image="featureImages.f9" animation-class="animation-2" />
                </div>
                <div class="col">
                  <div class="cr-feature-2-item"/>
                </div>
              </div>
            </div>

            <!-- box 2 -->
            <div class="cr-feature-2-box">
              <div class="row row-cols-xl-5 gx-0">
                <div class="col">
                  <feature-crypto-item :image="featureImages.f10" />
                </div>
                <div class="col"/>
                <div class="col">
                  <feature-crypto-item :image="featureImages.f11" animation-class="animation-2" />
                </div>
                <div class="col">
                  <feature-crypto-item :image="featureImages.f12" />
                </div>
                <div class="col">
                  <feature-crypto-item :image="featureImages.f13" animation-class="animation" />
                </div>
              </div>
            </div>

            <!-- box 3 -->
            <div class="cr-feature-2-box">
              <div class="row row-cols-xl-5 gx-0">
                <div class="col"/>
                <div class="col">
                  <feature-crypto-item :image="featureImages.f14" />
                </div>
                <div class="col"/>
                <div class="col">
                  <feature-crypto-item :image="featureImages.f15" animation-class="animation-2" />
                </div>
                <div class="col">
                  <div class="cr-feature-2-item"/>
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
const feature2Bg = '/img/home-13/feature/feature-2/feature-2-bg.png'
const featureImages = {
  f1: '/img/home-13/feature/feature-2/feature-2-1.png',
  f2: '/img/home-13/feature/feature-2/feature-2-2.png',
  f3: '/img/home-13/feature/feature-2/feature-2-3.png',
  f4: '/img/home-13/feature/feature-2/feature-2-4.png',
  f5: '/img/home-13/feature/feature-2/feature-2-5.png',
  f6: '/img/home-13/feature/feature-2/feature-2-6.png',
  f7: '/img/home-13/feature/feature-2/feature-2-7.png',
  f8: '/img/home-13/feature/feature-2/feature-2-8.png',
  f9: '/img/home-13/feature/feature-2/feature-2-9.png',
  f10: '/img/home-13/feature/feature-2/feature-2-10.png',
  f11: '/img/home-13/feature/feature-2/feature-2-11.png',
  f12: '/img/home-13/feature/feature-2/feature-2-12.png',
  f13: '/img/home-13/feature/feature-2/feature-2-13.png',
  f14: '/img/home-13/feature/feature-2/feature-2-14.png',
  f15: '/img/home-13/feature/feature-2/feature-2-15.png'
}
</script>