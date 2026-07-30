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
                                        <div class="prestige-header-cta">
                                            <nuxt-link href="#" target="_blank" rel="noopener" class="prestige-header-cta-text">
                                                Get in touch
                                            </nuxt-link>
                                            <nuxt-link href="https://wa.me/+971523412936" target="_blank" rel="noopener" class="prestige-header-cta-whatsapp">
                                                <svg-social-whatsapp-three />
                                            </nuxt-link>
                                        </div>
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
  background-color: transparent;
	color: #818181;
}
.tp-header-dropdown nav ul li .tp-submenu li a {
	padding: 5px 18px;
}
.prestige-header-ten :deep(.tp-header-dropdown nav ul li .tp-submenu) {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.9);
}

.prestige-header-ten :deep(.dropdown-white-bg nav ul li .tp-submenu) {
  background: rgba(0, 0, 0, 0.9);
}

/* "Get in touch" CTA — plain text + WhatsApp glyph directly on the
   header's own glass pill, no separate solid-fill button chrome. */
.prestige-header-cta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.prestige-header-cta-text {
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  white-space: nowrap;
  transition: opacity 0.3s;
}

.prestige-header-cta-text:hover {
  opacity: 0.75;
}

/* the WhatsApp glyph is an icon-font <i>, not an <svg> — font-size/color
   are inherited by it directly from this wrapping link. */
.prestige-header-cta-whatsapp {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  color: #25D366;
}

/* simple thumbnail-list submenus (Projects, Destinations) — same dark
   glass panel as the plain .tp-submenu above, just wider to fit a small
   preview image per row plus a "view all" button at the bottom. */
.prestige-header-ten :deep(.prestige-thumb-submenu) {
  width: 340px;
  padding: 18px 10px;
}

.prestige-header-ten :deep(.prestige-thumb-submenu-label) {
  padding: 0 10px 12px;
  margin: 0 8px 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.prestige-header-ten :deep(.prestige-thumb-submenu li a) {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 10px;
}

.prestige-header-ten :deep(.prestige-thumb-submenu li a span) {
  font-size: 15px;
}

.prestige-header-ten :deep(.prestige-thumb-submenu-img) {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 8px;
  object-fit: cover;
}

.prestige-header-ten :deep(.prestige-thumb-submenu-viewall) {
  margin: 10px 8px 0;
}

.prestige-header-ten :deep(.prestige-thumb-submenu-viewall a) {
  justify-content: center;
  gap: 8px;
  padding: 14px 18px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 10px;
}

/* the general .tp-submenu li:hover > a rule (transparent bg, #818181
   text) has higher specificity than a plain .prestige-thumb-submenu-viewall
   a:hover override would — matching its exact ancestor chain here (plus
   the extra class) is what actually wins. */
.prestige-header-ten :deep(.dropdown-white-bg nav ul li .tp-submenu li.prestige-thumb-submenu-viewall:hover > a) {
  background-color: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.4);
  color: #fff;
}
</style>
