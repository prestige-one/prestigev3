<template>
  <header>
    <div class="tp-header-10-main header-transparent">
        <!-- header area start -->
        <div
            id="header-sticky"
            ref="headerRoot"
            class="tp-header-10-area prestige-header-eleven tp-header-10-sticky"
            :class="{ 'prestige-header-eleven--light': isLightHeader }"
        >
            <div class="container container-1430">
                <div class="tp-header-10-wrapper">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-4 col-6">
                            <div class="tp-header-10-logo">
                                <nuxt-link href="/">
                                  <img
                                    :src="isLightHeader
                                      ? '/assets/images/v3/prestigeone_logo_oneline_dark-hr.svg'
                                      : '/assets/images/v3/prestigeone_logo_oneline_white-hr.svg'"
                                    alt="Prestige One"
                                    width="220"
                                  >
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
                                <prestige-language-switcher class="prestige-header-lang" />
                                <div class="tp-header-10-btn-box d-none d-sm-flex">
                                    <div class="prestige-getintouch">
                                        <nuxt-link :to="localePath('/contact-us')" class="prestige-getintouch__text">
                                            {{ $t('nav.getInTouch') }}
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
const localePath = useLocalePath();
const route = useRoute();
const headerRoot = ref<HTMLElement | null>(null);
const isLightHeader = ref(false);

let transitionTarget: HTMLElement | null = null;
let transitionAtTargetStart = false;
let updateFrame = 0;

function resolveTransitionTarget() {
  const main = document.querySelector<HTMLElement>("#smooth-content main")
    || document.querySelector<HTMLElement>("main");
  const hero = main?.querySelector<HTMLElement>(".prestige-hero") || null;

  // The homepage hero is pinned by GSAP, so its own bounding rectangle does
  // not reliably represent the end of the hero scroll sequence. The next
  // section is a stable boundary before and after GSAP inserts its pin spacer.
  if (hero?.nextElementSibling instanceof HTMLElement) {
    transitionTarget = hero.nextElementSibling;
    transitionAtTargetStart = true;
    return;
  }

  transitionTarget = main?.firstElementChild instanceof HTMLElement
    ? main.firstElementChild
    : null;
  transitionAtTargetStart = false;
}

function updateHeaderState() {
  updateFrame = 0;
  if (!transitionTarget?.isConnected) resolveTransitionTarget();

  if (!transitionTarget) {
    isLightHeader.value = window.scrollY > 80;
    return;
  }

  const headerHeight = headerRoot.value?.offsetHeight || 64;
  const targetRect = transitionTarget.getBoundingClientRect();
  isLightHeader.value = transitionAtTargetStart
    ? targetRect.top <= headerHeight
    : targetRect.bottom <= headerHeight;
}

function scheduleHeaderUpdate() {
  if (updateFrame) return;
  updateFrame = window.requestAnimationFrame(updateHeaderState);
}

async function refreshTransitionTarget() {
  await nextTick();
  transitionTarget = null;
  window.requestAnimationFrame(updateHeaderState);
}

onMounted(() => {
  resolveTransitionTarget();
  updateHeaderState();
  window.addEventListener("scroll", scheduleHeaderUpdate, { passive: true });
  window.addEventListener("resize", scheduleHeaderUpdate, { passive: true });
});

watch(() => route.fullPath, refreshTransitionTarget);

onBeforeUnmount(() => {
  window.removeEventListener("scroll", scheduleHeaderUpdate);
  window.removeEventListener("resize", scheduleHeaderUpdate);
  if (updateFrame) window.cancelAnimationFrame(updateFrame);
});
</script>

<style scoped>
.prestige-header-eleven {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(8, 8, 10, 0.28) !important;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transition: background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
}

.prestige-header-eleven :deep(.tp-header-10-wrapper) {
  min-height: 64px;
  margin-top: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

.prestige-header-eleven :deep(.tp-header-10-logo img) {
  display: block;
  width: min(190px, 100%);
  height: auto;
  transition: opacity 0.35s ease;
}

.prestige-header-eleven :deep(.lnv__top > li > a),
.prestige-header-eleven :deep(.prestige-getintouch__text),
.prestige-header-eleven :deep(.lang-switch__btn) {
  transition: color 0.35s ease, border-color 0.35s ease, background-color 0.35s ease, opacity 0.25s ease;
}

.prestige-header-eleven :deep(.tp-header-10-right) {
  min-height: 64px;
}

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
  font-size: 30px;
  color: #25D366;
}

.prestige-header-eleven :deep(.tp-header-10-offcanvas),
.prestige-header-eleven :deep(.tp-header-bar) {
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.prestige-header-eleven :deep(.tp-offcanvas-open-btn) {
  display: flex;
  width: 26px;
  height: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0;
}

.prestige-header-eleven :deep(.tp-offcanvas-open-btn i) {
  display: block;
  width: 22px !important;
  min-width: 22px !important;
  max-width: 22px !important;
  height: 2px !important;
  min-height: 2px !important;
  max-height: 2px !important;
  flex: 0 0 2px;
  margin: 0 !important;
  border: 0 !important;
  border-radius: 0;
  background: #fff !important;
  transition: background-color 0.35s ease;
}

.prestige-header-eleven--light {
  border-bottom-color: rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.96) !important;
  box-shadow: 0 8px 24px rgba(18, 20, 25, 0.08);
}

.prestige-header-eleven--light :deep(.lnv__top > li > a),
.prestige-header-eleven--light :deep(.prestige-getintouch__text) {
  color: #111216;
}

.prestige-header-eleven--light :deep(.lang-switch__btn) {
  border-color: rgba(0, 0, 0, 0.14);
  background: rgba(0, 0, 0, 0.035);
  color: #111216;
}

.prestige-header-eleven--light :deep(.lang-switch__btn:hover) {
  border-color: rgba(0, 0, 0, 0.24);
  background: rgba(0, 0, 0, 0.07);
}

.prestige-header-eleven--light :deep(.tp-offcanvas-open-btn i) {
  background: #111216 !important;
}

@media (max-width: 1199.98px) {
  .prestige-header-eleven :deep(.tp-header-10-wrapper),
  .prestige-header-eleven :deep(.tp-header-10-right) {
    min-height: 60px;
  }

  .prestige-header-eleven :deep(.tp-header-10-logo img) {
    width: min(176px, 100%);
  }
}

@media (max-width: 575.98px) {
  .prestige-header-eleven :deep(.tp-header-10-wrapper) {
    padding: 0 2px !important;
  }

  .prestige-header-eleven :deep(.tp-header-10-logo img) {
    width: min(154px, 100%);
  }

  .prestige-header-eleven :deep(.tp-header-10-offcanvas) {
    margin-left: 12px !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-header-eleven,
  .prestige-header-eleven :deep(.tp-offcanvas-open-btn i) {
    transition: none;
  }
}
</style>
