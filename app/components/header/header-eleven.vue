<template>
  <header>
      <!-- header area start -->
      <div id="header-sticky" :class="`tp-header-10-area tp-header-11-style tp-header-blur ${isDark?'sticky-black-bg header-11-dark-style':'sticky-white-bg'} header-transparent ${isSticky ? 'header-sticky' : ''}`">
          <div class="container container-1630">
              <div class="tp-header-10-wrapper mt-30">
                  <div class="row align-items-center">
                      <div class="col-xl-2 col-lg-4 col-md-6 col-5">
                          <div class="tp-header-10-logo">
                              <nuxt-link href="/">
                                  <img v-if="!isDark" data-width="120" src="/img/logo/logo-black.png" alt="logo" width="120">
                                  <img v-if="isDark" data-width="120" src="/img/logo/logo-white.png" alt="logo" width="120">
                              </nuxt-link>
                          </div>
                      </div>
                      <div class="col-xl-10 col-lg-8 col-md-6 col-7">
                          <div class="tp-header-10-box d-flex align-items-center justify-content-end justify-content-xl-between">
                              <div class="tp-header-menu tp-header-10-menu tp-header-dropdown dropdown-white-bg d-none d-xl-block">
                                  <nav class="tp-mobile-menu-active">
                                      <header-nav-menus />
                                  </nav>
                              </div>
                              <div class="tp-header-10-right d-flex align-items-center">
                                  <div class="tp-header-11-search-box d-none d-md-block">
                                      <button class="tp-header-11-search tp-search-open-btn" @click="searchOpen = true">
                                          <span>
                                              <svg-search-two />
                                          </span>
                                      </button>
                                  </div>
                                  <div class="tp-header-11-btn-box d-none d-md-block ml-20">
                                      <nuxt-link class="tp-btn-black-radius d-flex align-items-center justify-content-between" href="/contact">
                                          <span>
                                              <span class="text-1">Start a project</span>
                                              <span class="text-2">Start a project</span>
                                          </span>
                                          <i>
                                              <span>
                                                  <svg-arrow-up-four :color="isDark?'#fff':'#21212D'" />
                                                  <svg-arrow-up-four :color="isDark?'#fff':'#21212D'" />
                                              </span>
                                          </i>
                                      </nuxt-link>
                                  </div>
                                  <div class="tp-header-10-offcanvas ml-15">
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
      </div>
      <!-- header area end -->

    <!-- search area -->
    <common-search-area :is-open="searchOpen" @close="searchOpen = false" />
    <!-- offcanvas sidebar -->
    <offcanvas-mobile-area 
        :is-open="openMobileOffcanvas" 
        @close="openMobileOffcanvas = false" 
    />
  </header>
</template>

<script setup lang="ts">
const {isSticky} = useSticky();
const {isDark} = useIsDark();
const openMobileOffcanvas = ref(false);
const searchOpen = ref(false);

</script>