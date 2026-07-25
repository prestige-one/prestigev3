<template>
  <header>
      <div id="header-sticky" :class="`tp-header-area tp-header-ptb tp-header-4-style ${isDark?'':'header-4-light-style sticky-white-bg'} tp-header-blur header-transparent tp-header-border ${isSticky ? 'header-sticky' : ''}`">
          <div class="container-fluid">
              <div class="row align-items-center">
                  <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                      <nuxt-link href="/">
                          <img v-if="!isDark" class="logo-black" width="120" src="/img/logo/logo-black.png" alt="logo-black" >
                          <img v-if="isDark" class="logo-white" width="120" src="/img/logo/logo-white.png" alt="logo-white" >
                      </nuxt-link>
                  </div>
                  <div class="col-xl-8 col-lg-7 d-none d-xl-block">
                      <div class="tp-header-box d-flex align-items-center justify-content-center">
                          <div class="tp-header-menu tp-header-dropdown dropdown-white-bg">
                              <nav class="tp-mobile-menu-active">
                                  <header-nav-menus />
                              </nav>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                      <div class="tp-header-right d-flex align-items-center justify-content-end">
                          <div class="tp-header-btn-box">
                              <nuxt-link href="/contact-us" class="tp-btn-black btn-green-light-bg">
                                  <span class="tp-btn-black-filter-blur">
                                      <svg-btn-blur-filter filter-id="buttonFilter" />
                                  </span>
                                  <span class="tp-btn-black-filter d-inline-flex align-items-center" style="filter: url(#buttonFilter)">
                                      <span class="tp-btn-black-text">Get in Touch</span>
                                      <span class="tp-btn-black-circle">
                                          <svg-arrow-two width="10" height="10" viewBox="0 0 10 10" path-value="M1 9L9 1M9 1H1M9 1V9" />
                                      </span>
                                  </span>
                              </nuxt-link>
                          </div>
                          <div class="tp-header-bar ml-20 d-xl-none">
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
