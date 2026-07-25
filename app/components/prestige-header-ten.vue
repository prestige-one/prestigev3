<template>
  <header>
    <div class="tp-header-10-main header-transparent">
        <!-- header area start -->
        <div id="header-sticky" class="tp-header-10-area prestige-header-ten tp-header-blur sticky-black-bg tp-header-10-sticky">
            <div class="container container-1430">
                <div class="tp-header-10-wrapper mt-30">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-4 col-md-6 col-5">
                            <div class="tp-header-10-logo">
                                <nuxt-link href="/">
                                  <img src="/assets/images/v3/prestigeone_logo_oneline_white-hr.svg" alt="Prestige One" width="220">
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-4 d-none d-xl-block">
                            <div class="tp-header-10-box text-center">
                                <div class="tp-header-menu tp-header-10-menu tp-header-dropdown dropdown-white-bg">
                                    <nav class="tp-mobile-menu-active">
                                        <header-nav-menus-prestige />
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-7">
                            <div class="tp-header-10-right d-flex align-items-center justify-content-end">
                                <div class="tp-header-10-btn-box d-none d-sm-flex">
                                    <nuxt-link href="#" class="tp-btn-black btn-white-bg">
                                        <span class="tp-btn-black-filter-blur">
                                            <svg-btn-blur-filter filter-id="buttonFilter10" />
                                        </span>
                                        <span class="tp-btn-black-filter d-inline-flex align-items-center" style="filter: url(#buttonFilter10)">
                                            <span class="tp-btn-black-text">Get in touch</span>
                                            <span class="tp-btn-black-circle">
                                                <svg-arrow-one />
                                            </span>
                                        </span>
                                    </nuxt-link>
                                </div>
                                <div class="tp-header-10-offcanvas ml-20">
                                    <div class="tp-header-bar">
                                        <button class="tp-offcanvas-open-btn" @click="openMobileOffcanvas = true">
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

    <!-- offcanvas sidebar -->
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
/* our site is permanently dark-themed, so this header always uses the
   white-text/white-logo look regardless of scroll state — overriding the
   theme's default sticky-white-bg (dark text) behavior. */
.prestige-header-ten :deep(.tp-header-menu > nav > ul > li > a) {
  color: #fff;
}

.prestige-header-ten :deep(li.has-dropdown::after) {
  color: #fff;
}

/* permanently fixed at the top — no scroll-triggered class toggle, so
   there's no state change to animate/glitch on first scroll. Same rounded
   pill, same position, all the time. */
.prestige-header-ten {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: transparent !important;
}

.prestige-header-ten :deep(.tp-header-10-wrapper) {
  border-radius: 60px !important;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}
</style>
