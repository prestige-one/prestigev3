<template>
   <header>
      <div id="header-sticky" :class="`tp-header-area tp-header-ptb tp-header-blur sticky-${isDark ? 'black' : 'white'}-bg header-transparent tp-header-3-style ${isSticky ? 'header-sticky' : ''}`">
          <div class="container container-1750">
              <div class="row align-items-center">
                  <div class="col-xl-1 col-lg-5 col-5">
                      <div class="tp-header-logo">
                          <nuxt-link href="/">
                              <img v-if="!isDark" class="logo-white" width="120" src="/img/logo/logo-black.png" alt="logo">
                              <img v-if="isDark" class="logo-white" width="120" src="/img/logo/logo-white.png" alt="logo">
                          </nuxt-link>
                      </div>
                  </div>
                  <div class="col-xl-11 col-lg-7 col-7">
                      <div class="tp-header-box d-flex align-items-center justify-content-end justify-content-xl-between">
                          <div class="tp-header-menu tp-header-dropdown dropdown-white-bg d-none d-xl-flex">
                              <nav class="tp-mobile-menu-active">
                                  <header-nav-menus />
                              </nav>
                          </div>
                          <div class="tp-header-btn d-none d-md-flex">
                              <nuxt-link class="tp-btn-yellow-green green-solid" href="/contact">
                                  <i>
                                      <svg-email-one color-name="currentcolor" stroke-width="1.5" />
                                  </i>
                                  <span>
                                      <span class="text-1">Send a message</span>
                                      <span class="text-2">Send a message</span>
                                  </span>
                              </nuxt-link>
                          </div>
                          <div class="tp-header-bar ml-15 d-xl-none">
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

    <!-- offcanvas sidebar -->
    <offcanvas-mobile-area 
        :is-open="openMobileOffcanvas" 
        @close="openMobileOffcanvas = false" 
    />
  </header>
</template>

<script setup lang="ts">
 const { isSticky } = useSticky();
 const {isDark} = useIsDark();
const openMobileOffcanvas = ref(false);
</script>
