<template>
   <div class="tp-product-item mb-30">
        <div class="tp-product-item-thumb">
            <nuxt-link href="/shop-details">
              <img class="w-100" :src="item.image" alt="product-img">
            </nuxt-link>
            <div class="tp-product-quick-view-wrapper">
                <button class="tp-quick-view-btn" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                  <svg-eye-one/>
                </button>
            </div>
            <div class="tp-product-item-btn">
                <button class="tp-action-btn" type="button">Add to cart</button>
            </div>
        </div>
        <div class="tp-product-item-content d-flex justify-content-between align-content-center">
            <h4 class="tp-product-item-title">
              <nuxt-link class="tp-line-black" href="/shop-details">{{ item.title }}</nuxt-link>
            </h4>
            <span class="tp-product-item-price">${{ item.price }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ProductDT } from '~/types/product.d-t';

interface Props {
  item: ProductDT
}

// Validate required prop
defineProps<Props>()
</script>