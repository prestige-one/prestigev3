<template>
 <header>
    <!-- header area start -->
    <div id="header-sticky" :class="`tp-header-7-area sticky-white-bg tp-header-blur header-transparent mt-30 ${isSticky ? 'header-sticky' : ''}`">
        <div class="container">
            <div class="tp-header-7-wrapper">
                <div class="row align-items-center">
                    <div class="col-xl-2 col-lg-4 col-md-6 col-5">
                        <div class="tp-header-7-logo">
                            <nuxt-link href="/">
                                <img data-width="120" class="logo-white" src="/img/logo/logo-white.png" alt="" style="width: 120px;">
                                <img data-width="120" class="logo-black d-none" src="/img/logo/logo-black.png" alt="" style="width: 120px;">
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="col-xl-10 col-lg-8 col-md-6 col-7">
                        <div class="tp-header-7-box d-flex align-items-center justify-content-end justify-content-xl-between">
                            <div class="tp-header-menu tp-header-7-menu tp-header-dropdown dropdown-white-bg d-none d-xl-block">
                                <nav class="tp-mobile-menu-active">
                                    <header-nav-menus />
                                </nav>
                            </div>
                            <div class="tp-header-7-right d-flex align-items-center">
                                <div class="tp-header-7-serach-box d-none d-md-block">
                                    <button class="tp-header-7-serach mr-30 tp-search-open-btn" @click="searchOpen = true">
                                        <span>
                                            <svg-search-one :stroke-clr="isSticky ? '#000' : '#fff'" />
                                        </span>
                                    </button>
                                </div>
                                <div class="tp-header-7-btn-box d-none d-sm-block">
                                    <div class="animated-border-box">
                                        <nuxt-link class="tp-btn-gradient sm p-relative" href="/register">Sign up</nuxt-link>
                                    </div>
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
const { isSticky } = useSticky();
const openMobileOffcanvas = ref(false);
const searchOpen = ref(false);
</script>