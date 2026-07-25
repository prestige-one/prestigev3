<template>
  <div :class="`tp-offcanvas-2-area p-relative ${offcanvasClass} ${isOpen?'opened':''}`">
      <div class="tp-offcanvas-2-bg is-left left-box"/>
      <div class="tp-offcanvas-2-bg is-right right-box d-none d-md-block"/>
      <div class="tp-offcanvas-2-wrapper">
          <div class="tp-offcanvas-2-left left-box">
              <div class="tp-offcanvas-2-left-wrap d-flex justify-content-between align-items-center">
                  <div class="tp-offcanvas-2-logo">
                      <nuxt-link href="/">
                          <img class="logo-1" data-width="140" src="/img/logo/logo-white.png" alt="logo" width="140">
                          <img class="logo-2" data-width="140" src="/img/logo/logo-black.png" alt="logo" width="140">
                      </nuxt-link>
                  </div>
                  <div class="tp-offcanvas-2-close d-md-none text-end">
                      <button class="tp-offcanvas-2-close-btn" @click="$emit('close')">
                          <span class="text">
                              <span>close</span>
                          </span>
                          <span class="d-inline-block">
                              <span>
                                  <svg-close-four/>
                              </span>
                          </span>
                      </button>
                  </div>
              </div>
              <div class="tp-offcanvas-menu counter-row">
                  <nav>
                    <offcanvas-menus/>
                  </nav>
              </div>
          </div>
          <div class="tp-offcanvas-2-right right-box d-none d-md-block p-relative">
              <div class="tp-offcanvas-2-close text-end">
                  <button class="tp-offcanvas-2-close-btn" @click="$emit('close')">
                      <span class="text"><span>close</span></span>
                      <span class="d-inline-block">
                          <span>
                              <svg-close-three/>
                          </span>
                      </span>
                  </button>
              </div>
              <div class="tp-offcanvas-2-right-info-box mt-160">
                  <h4 class="tp-offcanvas-2-right-info-title">Get In Touch</h4>
                  <div class="tp-offcanvas-2-right-info-item">
                      <label class="mb-10">Phone</label>
                      <a class="tp-line-white" href="tel:42345678910">+4 (234) 567 8910</a>
                  </div>
                  <div class="tp-offcanvas-2-right-info-item">
                      <label class="mb-10">Email</label>
                      <a class="tp-line-white" href="mailto:hello@gmail.com">hello@gmail.com</a>
                  </div>
                  <div class="tp-offcanvas-2-right-info-item">
                      <label class="mb-10">Address</label>
                      <a class="tp-line-white" href="https://www.google.com.bd/maps/@23.7806365,90.4193257,12z?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                          602 Elgin St. Celina, Delaware <br> 1009
                      </a>
                  </div>
                  <div class="tp-offcanvas-2-right-info-item">
                      <label class="mb-15">Follow us</label>
                      <div class="tp-offcanvas-2-right-social">
                          <a href="#">
                              <svg-social-dribble-two/>
                          </a>
                          <a href="#">
                              <svg-social-x-three/>
                          </a>
                          <a href="#">
                              <svg-social-instagram-two/>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();

defineEmits<{
  close: [];
}>();

const route = useRoute();
const {isDark} = useIsDark();

const darkPaths = [
  "/portfolio-wrapper-slider",
  "/portfolio-webgl-showcase",
  "/portfolio-creative-thumb-slider",
  "/portfolio-creative-skew-slider",
  "/portfolio-creative-text-slider",
  "/portfolio-parallax-slider",
  "/portfolio-showcase",
  "/portfolio-interactive-with-hover",
  "/portfolio-interactive-with-scroll",
];

const isDarkPath = computed(() => {
  return isDark.value || darkPaths.includes(route.path);
});
const offcanvasClass = computed(() => {
  return isDarkPath.value ? "offcanvas-2-black-bg" : "offcanvas-2-white-bg";
});
</script>