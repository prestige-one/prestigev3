<template>
  <div class="tp-copyright-area" :style="bgColor ? { backgroundColor: bgColor } : {}">
      <div class="container">
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