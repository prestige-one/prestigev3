<template>
  <header>
    <!-- header area start -->
    <div :class="`tp-header-5-area ${isDark?'':'header-style-light'} header-transparent pt-25`">
      <div class="container container-1830">
        <div class="row align-items-center">
          <div class="col-xl-12">
            <div
              class="tp-header-5-box d-flex align-items-center justify-content-between"
            >
              <div class="tp-header-5-logo">
                <nuxt-link href="/">
                  <img v-if="!isDark" data-width="120" src="/img/logo/logo-pink-black.png" alt="logo" width="120">
                  <img v-if="isDark" data-width="120" src="/img/logo/logo-pink.png" alt="logo" width="120">
                </nuxt-link>
              </div>
              <div class="tp-header-5-menu-bar">
                <button class="tp-header-5-bar tp-offcanvas-open-btn" @click="openOffcanvas = true">
                  <span />
                  <span />
                </button>
              </div>
              <div class="tp-header-5-button d-none d-md-block">
                <nuxt-link class="tp-btn-red-border" href="/contact">
                  Get in Touch
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- header area end -->
    <!-- offcanvas sidebar -->
    <offcanvas-area :is-open="openOffcanvas" @close="openOffcanvas = false" />
  </header>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
const openOffcanvas = ref(false);
</script>
