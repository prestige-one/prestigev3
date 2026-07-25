<template>
  <footer class="tp-footer-15-area pt-140" :class="{'coffe-bg': isDark }">
    <div class="container container-1230">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-footer-15-cta-wrap mb-100">
            <div class="tp-about-5-title-box text-center p-relative">
              <span class="tp-about-5-subtitle">
                GET TO <br> X <br> KNOW ME
              </span>
              <h2 class="tp-section-title-5 fs-140 tp-char-animation">
                <em>Find me</em>{{" "}}
                <span class="d-none d-md-inline-block">
                  <img src="/img/home-15/about/about-img.jpg" alt="About me">
                </span>
                <br>
                <span>in the best suites</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <!-- Social Links -->
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div
            class="tp-footer-15-social-wrap mb-100 d-flex align-items-center justify-content-between"
          >
            <div
              v-for="(link, index) in socialLinks"
              :key="index"
              class="tp-footer-15-social"
            >
              <span>{{ link.description }}</span>
              <NuxtLink class="d-flex align-items-center" to="#">
                {{ link.title }}
                <span>
                  <svg-arrow-up-seven/>
                  <svg-arrow-up-seven/>
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Instagram Gallery -->
    <div class="container container-1350">

      <div class="tp-footer-15-instagram-wrap">
        <div class="row">
          <div
            v-for="(image, index) in instagramImages"
            :key="index"
            class="col-xl-3 col-lg-3 col-md-6"
          >
            <div class="tp-footer-15-instagram-thumb fix mb-30">
              <NuxtLink to="#">
                <NuxtImg
                  :src="image"
                  :alt="`Instagram post ${index + 1}`"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- copyright area -->
      <div class="tp-footer-15-copyright pb-30">
          <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="tp-footer-15-copyright-text text-center text-md-start">
                      <span>
                          © All Rights Reserved. By ThemePure
                      </span>
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="tp-footer-15-copyright-text text-center text-md-end">
                      <span>
                          <a href="mailto:info@example.com">info@example.com</a>
                      </span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </footer>
</template>


<script setup lang="ts">
const {isDark} = useIsDark();
// Social links
const socialLinks = [
  {
    title: 'Instagram',
    description: 'REGULAR UPDATES ON',
  },
  {
    title: 'Twitter',
    description: 'WORD TALKS',
  },
  {
    title: 'Dribbble',
    description: 'SINGLE SHOTS',
  },
  {
    title: 'Behance',
    description: 'COMPLETE PROJECTS',
  }
]

// Instagram images (direct path use)
const instagramImages = [
  '/img/home-15/instagram/insta-1.jpg',
  '/img/home-15/instagram/insta-2.jpg',
  '/img/home-15/instagram/insta-3.jpg',
  '/img/home-15/instagram/insta-4.jpg'
]

</script>