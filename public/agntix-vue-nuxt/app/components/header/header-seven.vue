<template>
  <header>
      <!-- header area start -->
      <div :class="`tp-header-8-area header-transparent ${isDark?'header-8-style-dark':''} tp-header-8-border`" :style="{backgroundColor: isDark?'#0E0F11':'#f2f1ee'}">
          <div class="container container-1750">
              <div class="row">
                  <div class="col-xl-12">
                      <div class="tp-header-8-wrapper d-flex align-items-center justify-content-between">
                          <div class="tp-header-8-left d-flex align-items-center">
                              <div class="tp-header-8-bar-wrap">
                                  <button class="tp-header-8-bar tp-offcanvas-open-btn" @click="openOffcanvas = true">
                                      <span>Menu</span>
                                      <span>
                                          <svg-menu-one/>
                                      </span>
                                  </button>
                              </div>
                              <div class="tp-header-8-lang d-none d-md-block">
                                  <a href="#">EN</a>
                                  <a href="#">FR</a>
                              </div>
                          </div>
                          <div class="tp-header-8-middle">
                              <div class="tp-header-logo">
                                  <nuxt-link href="/">
                                    <img v-if="!isDark" data-width="120" src="/img/logo/logo-black.png" alt="logo" width="120">
                                    <img v-if="isDark" data-width="120" src="/img/logo/logo-white.png" alt="logo" width="120">
                                  </nuxt-link>
                              </div>
                          </div>
                          <div class="tp-header-8-right d-flex align-items-center d-none d-md-inline-flex">
                              <div class="tp-header-8-search-box">
                                  <button class="tp-header-8-search tp-search-open-btn" @click="searchOpen = true">
                                      <span>
                                          <svg-search-one :stroke-clr="isDark?'#fff':'#191919'"/>
                                      </span>
                                  </button>
                              </div>
                              <div class="tp-header-8-btn">
                                  <nuxt-link class="tp-btn-border-2" href="/contact">
                                      Contact Us
                                      <span>
                                          <svg-arrow-five/>
                                      </span>
                                  </nuxt-link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    <!-- search area -->
    <common-search-area :is-open="searchOpen" @close="searchOpen = false" />
    <!-- offcanvas sidebar -->
    <offcanvas-area :is-open="openOffcanvas" @close="openOffcanvas = false" />
  </header>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
const searchOpen = ref(false);
const openOffcanvas = ref(false);
</script>