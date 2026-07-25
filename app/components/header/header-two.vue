<template>
  <div>
    <div :class="`tp-header-2-area ${topCls}`">
        <div class="container container-1750">
            <div class="row align-items-center">
                <div class="col-6">
                    <div class="tp-header-logo">
                        <nuxt-link href="/">
                            <img v-if="!logoBlack" src="/img/logo/logo-white.png" alt="logo-white" width="140">
                            <img v-if="logoBlack" src="/img/logo/logo-black.png" alt="logo-black" width="140">
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
     <!-- offcanvas sidebar -->
    <offcanvas-area :is-open="openOffcanvas" @close="openOffcanvas = false" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    topCls?: string;
    logoBlack?: boolean;
}>(), {
    topCls: "z-index-3 mt-40",
    logoBlack: false
})

const openOffcanvas = ref(false);
</script>