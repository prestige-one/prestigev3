<template>
  <div class="st-video-area">
    <div class="st-video-wrapper p-relative">
        <div class="st-video-item">
            <div class="creative-choose-text z-index-1">
                <p>
                    <span class="creative-choose-text-top">
                        <svg-quote-four/>  Agntix created
                    </span><br>
                    <span class="creative-choose-text-middle">
                      something better then I ecer</span><br>
                    <span class="creative-choose-text-bottom">could have imagined</span>
                </p>
                <div class="creative-choose-avater-box d-inline-flex align-items-center">
                    <div class="creative-choose-avater">
                        <img src="/img/home-04/avater/avater-1.jpg" alt="">
                    </div>
                    <div class="creative-choose-avater-info">
                        <h4>Hear from Dang</h4>
                        <span>Co-Founder of Agntix</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="st-video-img">
            <img class="w-100" data-speed=".8" src="/img/home-12/video/st-video-thumb.jpg" alt="">
            <modal-video cls="popup-video dgm-testimonial-playbtn z-index-1" url="https://www.youtube.com/watch?v=VCPGMjCW0is" :show-icon="false">
                 <span>
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12L0.5 23.2583V0.74167L20 12Z" fill="currentcolor"/>
                    </svg>
                </span>
            </modal-video>
        </div>
       <text-slider-seven/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>