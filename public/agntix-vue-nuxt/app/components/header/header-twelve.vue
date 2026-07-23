<template>
 <header>
    <!-- header area start -->
    <div id="header-sticky" :class="`tp-header-area tp-header-13-ptb ${isDark?'':'sticky-white-bg'} tp-header-blur header-transparent ${isSticky ? 'header-sticky' : ''}`">
        <div class="container container-1750">
            <div class="row align-items-center">
                <div class="col-xl-2 col-lg-5 col-5">
                    <div class="tp-header-logo">
                        <nuxt-link href="/">
                            <img data-width="120" class="logo-white" src="/img/logo/logo-white.png" alt="logo" width="120">
                            <img data-width="120" class="logo-black d-none" src="/img/logo/logo-black.png" alt="logo" width="120">
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-xl-10 col-lg-7 col-7">
                    <div class="tp-header-box d-flex align-items-center justify-content-end justify-content-xl-between">
                        <div class="tp-header-menu tp-header-13-menu tp-header-dropdown dropdown-white-bg d-none d-xl-flex">
                            <nav class="tp-mobile-menu-active">
                                <header-nav-menus />
                            </nav>
                        </div>
                        <div class="tp-header-right d-flex align-items-center justify-content-end">
                            <div class="cr-header-login d-none d-lg-block">
                                <nuxt-link href="/login">Login</nuxt-link>
                            </div>
                            <div class="tp-header-btn-box d-none d-md-block ml-15">
                                <nuxt-link href="/contact" class="tp-btn-white-border tp-btn-light-bg">Get Started <span><svg-arrow-six/></span>
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
    </div>
    <!-- header area end -->

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
</script>