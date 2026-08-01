<template>
  <header>
    <div class="tp-header-10-main header-transparent">
        <!-- header area start -->
        <div id="header-sticky" class="tp-header-10-area prestige-header-eleven tp-header-blur sticky-black-bg tp-header-10-sticky">
            <div class="container container-1430">
                <div class="tp-header-10-wrapper mt-30">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-4 col-6">
                            <div class="tp-header-10-logo">
                                <nuxt-link href="/">
                                  <img src="/assets/images/v3/prestigeone_logo_oneline_white-hr.svg" alt="Prestige One" width="220">
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="col-xl-7 d-none d-xl-block">
                            <div class="tp-header-10-box text-start">
                                <header-prestige-mega-nav-left />
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-8 col-6">
                            <div class="tp-header-10-right d-flex align-items-center justify-content-end">
                                <div class="tp-header-10-btn-box d-none d-sm-flex">
                                    <div class="prestige-getintouch">
                                        <nuxt-link href="/contact-us" class="prestige-getintouch__text">
                                            Get in touch
                                        </nuxt-link>
                                        <nuxt-link href="https://wa.me/+971523412936" target="_blank" rel="noopener" class="prestige-getintouch__wa" aria-label="WhatsApp">
                                            <svg-social-whatsapp-three />
                                        </nuxt-link>
                                    </div>
                                </div>
                                <!-- menu-panel trigger - shown at the end on every breakpoint
                                     (desktop included); opens the full slide-in menu panel -->
                                <div class="tp-header-10-offcanvas ml-20">
                                    <div class="tp-header-bar">
                                        <button class="tp-offcanvas-open-btn" aria-label="Open menu" @click="openMobileOffcanvas = true">
                                            <i/>
                                            <i/>
                                            <i/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- header area end -->
    </div>

    <!-- classic side menu - mobile & iPad only -->
    <offcanvas-mobile-area-prestige
        :is-open="openMobileOffcanvas"
        @close="openMobileOffcanvas = false"
    />
  </header>
</template>

<script setup lang="ts">
const openMobileOffcanvas = ref(false);
</script>

<style scoped>
/* permanently fixed dark header (matches header-ten) with the new
   left-aligned compact-dropdown nav. */
.prestige-header-eleven {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: transparent !important;
}
.prestige-header-eleven :deep(.tp-header-10-wrapper) {
  border-radius: 60px !important;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  background: rgba(0, 0, 0, 0.2);
}
/* "Get in touch" - plain white text link + green WhatsApp, no white pill */
.prestige-header-eleven :deep(.prestige-getintouch) {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}
.prestige-header-eleven :deep(.prestige-getintouch__text) {
  color: #fff;
  font-size: 15px;
  letter-spacing: 0.01em;
  white-space: nowrap;
  transition: opacity 0.25s ease;
}
.prestige-header-eleven :deep(.prestige-getintouch__text:hover) { opacity: 0.72; }
.prestige-header-eleven :deep(.prestige-getintouch__wa) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #25D366;
}
</style>
