<template>
 <header>
    <!-- header area start -->
    <div id="header-sticky" :class="`tp-header-12-ptb tp-header-blur sticky-${isDark?'black':'white'}-bg tp-header-9-sticky header-transparent tp-header-8-border ${isSticky ? 'header-sticky' : ''}`">
        <div class="container container-1750">
            <div class="row">
                <div class="col-xl-12">
                    <div class="tp-header-12-wrapper d-flex align-items-center justify-content-between">
                        <div class="tp-header-8-left d-flex align-items-center">
                            <div class="tp-header-logo">
                                <nuxt-link href="/">
                                  <img v-if="!isDark" data-width="120" src="/img/logo/logo-black.png" alt="logo" width="120">
                                  <img v-if="isDark" data-width="120" src="/img/logo/logo-white.png" alt="logo" width="120">
                                </nuxt-link>e
                            </div>
                        </div>
                        <div class="tp-header-12-middle">
                            <div class="tp-header-menu tp-header-12-menu tp-header-dropdown dropdown-white-bg d-none d-xl-block">
                                <nav class="tp-mobile-menu-active">
                                    <header-nav-menus />
                                </nav>
                            </div>
                        </div>
                        <div class="tp-header-8-right d-flex align-items-center d-md-inline-flex">
                            <div class="tp-header-8-search-box d-none d-md-block">
                                <button class="tp-header-8-search tp-search-open-btn" @click="searchOpen = true">
                                    <span>
                                        <svg-search-one :stroke-clr="isDark?'#fff':'#191919'"/>
                                    </span>
                                </button>
                            </div>
                            <div class="tp-header-8-btn d-none d-md-block">
                                <nuxt-link class="tp-btn-border-2 st" href="/contact">
                                    GET STARTED
                                    <span>
                                        <svg-arrow-seven/>
                                    </span>
                                </nuxt-link>
                            </div>
                            <div class="tp-header-10-offcanvas ml-20 d-xl-none">
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