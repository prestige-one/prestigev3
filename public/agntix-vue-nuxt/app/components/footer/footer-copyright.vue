<template>
  <div class="tp-copyright-area" :style="bgColor ? { backgroundColor: bgColor } : {}">
      <div class="container">
          <div class="row">
              <div class="col-xl-12">
                  <div class="tp-copyright-content text-center text-md-start">
                      <h2 class="tp-copyright-big-text p-relative" data-delay=".5" data-fade-from="bottom" data-ease="bounce" data-on-scroll="3">
                          Agntix.studio
                          <img class="tp-copyright-img d-none d-md-block" src="/img/home-01/footer/footer-shape-1.png" alt="">
                      </h2>
                  </div>
              </div>
          </div>
          <div class="tp-copyright-bottom">
              <div class="row">
                  <div class="col-md-6">
                      <div class="tp-copyright-left text-center text-md-start">
                          <span>©{{new Date().getFullYear()}} Agntix Design Studio.</span>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="tp-copyright-right text-center text-md-end">
                          <a href="#">Terms and Conditions</a>
                          <a href="#">Privacy Policy</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  bgColor?: string
}
withDefaults(defineProps<Props>(), {
  bgColor: ''
})
</script>