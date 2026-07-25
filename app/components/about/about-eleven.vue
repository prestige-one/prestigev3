<template>
  <div class="tp-about-5-area pt-140 pb-120" :class="{'coffe-bg': isDark }">
    <div class="container container-1230">
        <div class="row">
            <div class="col-xl-12">
                <div class="tp-about-5-title-wrap text-xl-end text-center">
                    <div class="tp-about-5-title-box text-center p-relative">
                        <span class="tp-about-5-subtitle tp-char-animation">GET TO <br> X <br> KNOW ME</span>
                        <h2 class="tp-section-title-5 fs-140 tp-char-animation">
                            Fashion
                            <span class="d-none d-md-inline-block">
                              <img src="/img/home-15/about/about-img.jpg" alt="about-img">
                            </span>
                            <br>for passion and <em>life style</em>
                        </h2>
                        <p>Working as a creative & outsource your fashion design project & get it quickly done and delivered remotely online.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
</script>