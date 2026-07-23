<template>
  <footer>
    <!-- footer area start -->
    <div :class="`pp-footer-area pp-footer-ptb ${spacing}`">
      <div class="container container-1750">
        <div class="pp-footer-box">
          <div class="row">
            <div class="col-lg-12">
              <div class="pp-footer-wrapper text-center">
                <span class="pp-footer-subtitle tp_fade_anim">
                  Looking for a new talent
                </span>
                <h4
                  class="pp-footer-title tp_fade_anim not-hide-cursor"
                  data-cursor="Send<br>Mail"
                >
                  <a class="codetext cursor-hide" href="mailto:hello@gmail.com">
                    hello@gmail.com
                  </a>
                </h4>
                <div class="pp-footer-btn-box d-flex justify-content-center z-index-1">
                  <div
                    class="tp_fade_anim"
                    data-delay=".3"
                    data-fade-from="top"
                    data-ease="bounce"
                  >
                    <nuxt-link class="pp-footer-btn mr-15" href="/contact-me">Contact Me
                      <span>
                        <svg-arrow-up-eight />
                      </span>
                    </nuxt-link>
                  </div>
                  <div
                    class="tp_fade_anim"
                    data-delay=".5"
                    data-fade-from="top"
                    data-ease="bounce"
                  >
                    <a class="pp-footer-btn" href="/img/cv/mycv.doc">Download CV
                      <span>
                        <svg-arrow-up-eight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer area end -->
    <!-- footer copyright area start -->
    <div class="pp-footer-copyright-area pp-footer-copyright-ptb">
      <div class="container container-1430">
        <div class="row">
          <div class="col-lg-12">
            <div class="pp-footer-copyright-wrap">
              <div class="pp-footer-copyright-text">
                <p>© {{ new Date().getFullYear() }} all rights reserved</p>
              </div>
              <div class="pp-footer-copyright-text-center">
                <p>Available for a full-time position</p>
              </div>
              <div class="pp-footer-copyright-text">
                <p>Made by Agntix.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer copyright area end -->
  </footer>
</template>

<script setup lang="ts">
withDefaults(defineProps<{spacing?: string}>(), {
  spacing:'pt-115'
})
</script>
