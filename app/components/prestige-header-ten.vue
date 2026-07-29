<template>
  <header>
    <div class="tp-header-10-main header-transparent">
        <!-- header area start -->
        <div id="header-sticky" class="tp-header-10-area prestige-header-ten tp-header-blur sticky-black-bg tp-header-10-sticky">
            <div class="container container-1430">
                <div class="tp-header-10-wrapper mt-30">
                    <div class="row align-items-center">
                        <div class="col-xl-3 col-lg-4 col-6">
                            <div class="tp-header-10-logo">
                                <nuxt-link href="/">
                                  <img src="/assets/images/v3/prestigeone_logo_oneline_white-hr.svg" alt="Prestige One" width="220">
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="col-xl-6 d-none d-xl-block">
                            <div class="tp-header-10-box text-center">
                                <div class="tp-header-menu tp-header-10-menu tp-header-dropdown dropdown-white-bg">
                                    <nav class="tp-mobile-menu-active">
                                        <header-nav-menus-prestige />
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-8 col-6">
                            <div class="tp-header-10-right d-flex align-items-center justify-content-end">
                                <div class="tp-header-10-btn-box d-none d-sm-flex">
                                        <span class="tp-btn-black btn-white-bg">
                                            <span class="tp-btn-black-filter-blur">
                                                <svg-btn-blur-filter filter-id="buttonFilter10" />
                                            </span>
                                            <span class="tp-btn-black-filter d-inline-flex align-items-center" style="filter: url(#buttonFilter10)">
                                                <nuxt-link href="/contact-us" class="tp-btn-black-text">
                                                    Get in touch
                                                </nuxt-link>
                                                <nuxt-link href="https://wa.me/+971523412936" target="_blank" rel="noopener" class="tp-btn-black-circle tp-btn-black-circle-whatsapp">
                                                    <svg-social-whatsapp-three />
                                                </nuxt-link>
                                            </span>
                                        </span>
                                </div>
                                <!-- side menu trigger — mobile & iPad only (below xl / 1200px) -->
                                <div class="tp-header-10-offcanvas ml-20 d-xl-none">
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

    <!-- classic side menu — mobile & iPad only -->
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
  background: rgba(0, 0, 0, 0.2);
}

/* dropdown submenu — dark, blurred glass panel with white text by default,
   flipping to a white pill + black text on the hovered item (matches the
   provided design). .dropdown-white-bg's own base-theme rule sets the
   submenu to a solid white background, so this overrides it back to the
   dark glass look for this header only. */
.prestige-header-ten :deep(.dropdown-white-bg nav ul li .tp-submenu li a) {
  color: #fff;
}

.prestige-header-ten :deep(.dropdown-white-bg nav ul li .tp-submenu li:hover > a) {
  background-color: #F8F8FB;
  color: #000;
}

.prestige-header-ten :deep(.tp-header-dropdown nav ul li .tp-submenu) {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgba(38, 37, 40, 0.9);
}

.prestige-header-ten :deep(.dropdown-white-bg nav ul li .tp-submenu) {
  background: rgba(0, 0, 0, 0.24);
}

/* the WhatsApp glyph is an icon-font <i>, not an <svg>, so it falls
   outside the theme's ".tp-btn-black-circle > svg" sizing/color rule —
   size and center it to match that circle explicitly. */
.prestige-header-ten :deep(.tp-btn-black-circle-whatsapp) {
  font-size: 27px;
  color: #25D366;
  padding-top: 2px;
}

</style>
