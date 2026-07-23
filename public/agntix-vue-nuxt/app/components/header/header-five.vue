<template>
  <header>

        <!-- header area start -->
        <div :class="`tp-header-2-area ${isDark?'':'header-black-style'} z-index-3 mt-40`">
            <div class="container container-1750">
                <div class="row align-items-center">
                    <div class="col-6">
                        <div class="tp-header-logo">
                            <nuxt-link href="/">
                              <img v-if="!isDark" data-width="140px" src="/img/logo/logo-black.png" alt="logo" width="140">
                              <img v-if="isDark" data-width="140px" src="/img/logo/logo-white.png" alt="logo" width="140">
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="tp-header-2-right d-flex justify-content-end">
                            <button class="tp-header-2-bar tp-offcanvas-open-btn d-flex align-items-center" @click="openOffcanvas = true">
                                <span>Menu</span>
                                <span>
                                    <i/>
                                    <i/>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- header area end -->

     <!-- offcanvas sidebar -->
     <offcanvas-area :is-open="openOffcanvas" @close="openOffcanvas = false" />
    </header>
</template>

<script setup lang="ts">
const { isDark } = useIsDark();
const openOffcanvas = ref(false);
</script>