<template>
  <header>
    <!-- header area start -->
    <div id="header-sticky" :class="`tp-header-9-area tp-header-blur tp-header-9-sticky sticky-white-bg header-transparent tp-header-9-mt ${isSticky ? 'header-sticky' : ''}`">
        <div class="container container-1750">
            <div class="row align-items-center">
                <div class="col-xl-3 col-lg-4 col-md-6 col-4">
                    <div class="tp-header-9-logo">
                        <nuxt-link href="/">
                            <img class="logo-1" src="/img/logo/logo-white.png" alt="logo" width="120">
                            <img class="logo-2" src="/img/logo/logo-black.png" alt="logo" width="120">
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-8 col-md-6 col-8">
                    <div class="tp-header-9-box d-flex align-items-center justify-content-end justify-content-xl-between">
                        <div class="tp-header-9-menu tp-header-dropdown dropdown-white-bg d-none d-xl-block">
                            <nav class="tp-mobile-menu-active">
                                <header-nav-menus />
                            </nav>
                        </div>
                        <div class="tp-header-9-right d-flex align-items-center justify-content-end">
                            <div class="tp-header-9-search-box d-none d-md-block">
                                <button class="tp-header-9-search tp-search-open-btn" @click="searchOpen = true">
                                    <span>
                                        <svg-search-one :stroke-clr="'#fff'"/>
                                    </span>
                                </button>
                            </div>
                            <div class="tp-header-9-btn ml-25">
                                <nuxt-link class="tp-btn-yellow-green" href="/contact">
                                    <span>
                                        <span class="text-1">LET’S TALK</span>
                                        <span class="text-2">LET’S TALK</span>
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
const openMobileOffcanvas = ref(false);
const searchOpen = ref(false);
</script>