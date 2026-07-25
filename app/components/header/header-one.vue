<template>
 <div>
   <div :class="`tp-header-area tp-header-ptb tp-header-blur sticky-${isDark ? 'black' : 'white'}-bg header-transparent tp-header-border ${isSticky ? 'header-sticky' : ''}`">
      <div class="container container-1750">
          <div class="row align-items-center">
              <div class="col-xl-2 col-lg-6 col-6">
                  <div class="tp-header-logo">
                      <nuxt-link to="/">
                          <img class="logo-white" src="/img/logo/logo-white.png" alt="logo-white" width="120">
                          <img class="logo-black d-none" src="/img/logo/logo-black.png" alt="logo-black" width="120">
                      </nuxt-link>
                  </div>
              </div>
              <!-- Rest of your header content -->
              <div class="col-xl-7 d-none d-xl-block">
                  <div class="tp-header-box text-center">
                      <div :class="`tp-header-menu tp-header-dropdown dropdown-${isDark ? 'black' : 'white'}-bg`">
                          <nav class="tp-mobile-menu-active">
                              <header-nav-menus />
                          </nav>
                      </div>
                  </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-6">
                  <div class="tp-header-right d-flex align-items-center justify-content-end">
                      <div class="tp-header-lang d-none d-xl-flex">
                          <nuxt-link class="active" href="#">En</nuxt-link>
                          <nuxt-link href="#">De</nuxt-link>
                      </div>
                      <div class="tp-header-btn-box ml-25 d-none d-md-flex">
                          <nuxt-link href="/portfolio-col-2" class="tp-btn-black btn-red-bg">
                              <span class="tp-btn-black-filter-blur">
                                  <svg-btn-blur-filter filter-id="buttonFilter" />
                              </span>
                              <span class="tp-btn-black-filter d-inline-flex align-items-center" style="filter: url(#buttonFilter)">
                                  <span class="tp-btn-black-text">Start a Project</span>
                                  <span class="tp-btn-black-circle">
                                      <svg-arrow-one />
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
  </div>
</template>

<script setup lang="ts">
 const { isSticky } = useSticky();
 const { isDark } = useIsDark();
 const openMobileOffcanvas = ref(false);
</script>