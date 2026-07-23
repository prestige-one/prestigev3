<template>
  <header>
    <div class="tp-header-10-main header-transparent">
        <!-- header top area start -->
        <div v-if="showAnnounce" class="tp-header-10-announcement-area p-relative include-bg" data-background="/img/home-10/header-img/announcement.png" style="background-image: url(/img/home-10/header-img/announcement.png);">
            <div class="tp-header-10-announcement-close">
                <button class="hide-button" @click="showAnnounce = false">
                    <svg-close-one/>
                </button>
            </div>
            <div class="container container-1430">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tp-header-10-announcement-wrapper">
                            <div class="tp-header-10-announcement-content d-flex align-items-center justify-content-center">
                                <p><span>Free Update</span>Free support, Free updates, Free plugins.</p>
                                <nuxt-link class="d-none d-sm-block" href="/contact">
                                  Join Us <span>
                                  <svg-arrow-up-four/>
                                </span>
                               </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- header area start -->
        <div id="header-sticky" :class="`tp-header-10-area tp-header-blur ${isDark?'header-10-dark-style sticky-black-bg':'sticky-white-bg'} tp-header-10-sticky ${isSticky ? 'header-sticky' : ''}`">
            <div class="container container-1430">
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
                                    <div class="tp-header-10-btn-box d-none d-sm-block">
                                        <div class="animated-border-box radius-style-2">
                                            <nuxt-link class="tp-btn-gradient sm p-relative" href="/register">Sign up</nuxt-link>
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
        </div>
        <!-- header area end -->
    </div>

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
const showAnnounce = ref(true);
const openMobileOffcanvas = ref(false);
</script>