<template>
  <header>

    <!-- header area start -->
    <div class="tp-header-shop-area header-transparent pt-10">
      <div class="container-fluid">
        <div id="header-sticky" class="tp-header-shop-wrap shop-white-header tp-header-blur sticky-white-bg" :class="{'header-sticky': isSticky}">
          <div class="row align-items-center">
            <div class="col-xxl-6 col-xl-7 d-none d-xl-block">
              <div class="tp-header-shop-menu tp-header-dropdown dropdown-white-bg">
                <nav class="tp-mobile-menu-active">
                  <header-nav-menus />
                </nav>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
              <div class="tp-header-shop-logo text-xl-center">
                <nuxt-link href="/">
                  <img class="logo-1" data-width="120" src="/img/logo/logo-white.png" alt="logo" width="120">
                  <img class="logo-2" data-width="120" src="/img/logo/logo-shop.png" alt="logo" width="120">
                </nuxt-link>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-3 col-lg-6 col-md-6 col-6">
              <div class="tp-header-shop-right  d-flex align-items-center justify-content-end">
                <div class="tp-header-shop-action">
                  <ul>
                    <li class="d-none d-md-block">
                      <div class="tp-header-shop-search">
                        <button class="tp-search-open-btn" @click="searchOpen = true">
                          <svg-search-three />
                        </button>
                      </div>
                    </li>
                    <li>
                      <div class="tp-header-shop-cart">
                        <button class="cartmini-open-btn" @click="isCartOpen = true">
                          Cart
                          <span>3</span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div class="tp-header-shop-lang d-none d-xl-block">
                        <button id="header-lang-toggle" @click="openLang = !openLang">
                          <span>En</span>
                          <span>
                           <svg-arrow-down-sm />
                          </span>
                        </button>
                         <ul v-if="openLang" class="header-lang-submenu" :class="{ open: openLang }">
                          <li><a class="tp-line-white" href="#">Arabic</a></li>
                          <li><a class="tp-line-white" href="#">Spanish</a></li>
                          <li><a class="tp-line-white" href="#">Mandarin</a></li>
                        </ul>
                      </div>
                      <div class="tp-header-10-offcanvas d-xl-none">
                        <div class="tp-header-bar">
                          <button class="tp-offcanvas-open-btn" @click="openMobileOffcanvas = true">
                            <i/>
                            <i/>
                            <i/>
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- header area end -->

    <cart-sidebar :is-open="isCartOpen" @close="isCartOpen = false" />
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
const isCartOpen = ref(false);
const openLang = ref(false);
const searchOpen = ref(false);
const openMobileOffcanvas = ref(false);
</script>