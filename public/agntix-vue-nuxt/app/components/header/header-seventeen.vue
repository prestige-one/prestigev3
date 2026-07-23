<template>
 <div>
    <div :class="`tp-header-area tp-header-inner-style tp-header-ptb header-transparent mt-30 ${topCls} ${isSticky ? 'header-sticky' : ''}`">
        <div :class="`container container-${containerCls}`">
            <div class="row align-items-center">
                <div class="col-xl-2 col-lg-6 col-6">
                    <div class="tp-header-logo">
                        <nuxt-link href="/">
                                <img 
                                    v-if="isDark" 
                                    src="/img/logo/logo-white.png" 
                                    alt="logo" 
                                    width="120" 
                                    class="logo-white"
                                >
                                <img 
                                    v-if="!isDark"
                                    src="/img/logo/logo-black.png" 
                                    alt="logo" 
                                    width="120" 
                                    class="logo-black"
                                >
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-xl-8 d-none d-xl-block">
                    <div class="tp-header-box text-center">
                        <div :class="`tp-header-menu tp-header-dropdown dropdown-${isDark?'black' :'white'}-bg`">
                            <nav class="tp-mobile-menu-active">
                                <header-nav-menus />
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-6 col-6">
                    <div class="tp-header-right text-end">
                        <div class="tp-header-14-bar-wrap ml-20">
                            <button class="tp-header-8-bar tp-offcanvas-open-btn" @click="openMobileOffcanvas = true">
                                <span>Menu</span>
                                <span>
                                    <svg-menu-one />
                                </span>
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
const {isSticky} = useSticky();
const {isDark} = useIsDark();
withDefaults(defineProps<{
  topCls?: string;
  sticky?: boolean;
  containerCls?: string;
}>(), {
  topCls: "header-top-border",
  sticky: true,
  containerCls: "1830",
});
const openMobileOffcanvas = ref(false);
</script>