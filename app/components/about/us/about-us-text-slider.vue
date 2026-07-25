<template>
  <section class="ar-about-us-4-text-area">
    <div class="">
      <div class="row">
        <div class="col-lg-12">
          <div :class="`ar-about-us-4-text-warp ${isDark?'':'title-black-color'}`">
            <div class="tp-brand-active">
              <Vue3Marquee
                :clone="true"
                :duration="50"
                :pause-on-hover="false"
                class="slide-transtion"
              >
                <div
                  v-for="i in 6"
                  :key="i"
                  style="margin-right: 30px"
                >
                  <h2 class="ar-about-us-4-text-title">
                    About Us
                  </h2>
                </div>
              </Vue3Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
</script>

<style scoped></style>