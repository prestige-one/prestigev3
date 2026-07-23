<template>
   <footer>
     <div :class="`tp-footer-area ${topCls}`" :style="bgColor ? { backgroundColor: bgColor } : {}">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-xl-4 col-lg-4">
                  <div class="tp-footer-widget tp-footer-col-1 pb-40 tp_fade_anim" data-delay=".3">
                      <h4 class="tp-footer-widget-title">Helping <br> start-ups scale & grow.</h4>
                      <div class="tp-footer-widget-social">
                         <a href="#">
                            <span>
                                <svg-social-fb-three/>
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <svg-social-x-three/>
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <svg-social-dribble-two/>
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <svg-social-instagram-two/>
                            </span>
                        </a>
                      </div>
                  </div>
              </div>
              <div class="col-xl-5 col-lg-4 col-md-6">
                  <div class="tp-footer-widget tp-footer-col-2 pb-40 tp_fade_anim" data-delay=".5">
                      <h4 class="tp-footer-widget-title-sm pre mb-25">Quick links</h4>
                      <div class="tp-footer-widget-menu">
                          <ul>
                              <li><a href="#">About</a></li>
                              <li><a href="#">Who we are</a></li>
                              <li><a href="#">Services</a></li>
                              <li><a href="#">Projects</a></li>
                              <li><a href="#">Blog</a></li>
                              <li><a href="#">Pricing</a></li>
                              <li><a href="#">Contact Us</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6">
                  <div class="tp-footer-widget tp-footer-col-3 pb-40 mb-30 tp_fade_anim" data-delay=".7">
                      <h4 class="tp-footer-widget-title-sm pre mb-20">Contact</h4>
                      <div class="tp-footer-widget-info">
                          <a href="mailto:agntixs@studio.com">agntixs@studio.com</a>
                          <a href="tel:+3025550107">+(302) 555-0107</a>
                      </div>
                      <div class="tp-footer-widget-info">
                          <a href="https://www.google.com/maps/" target="_blank">
                            4517 Washington Ave. Manchester, <br> Kentucky 39495
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
     </div>

     <!-- footer copyright -->
     <footer-copyright :bg-color="bgColor" />
     <!-- footer copyright -->
   </footer>
</template>

<script setup lang="ts">
withDefaults(defineProps<{topCls?: string;bgColor?: string}>(), {
    topCls: 'pt-160 pb-35',
    bgColor:''
})
</script>