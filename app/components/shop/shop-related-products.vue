<template>
  <div class="tp-product-related-ptb pt-100 pb-90">
      <div class="container container-1750">
          <div class="row">
              <div class="col-lg-12">
                  <div class="tp-product-related-heading mb-40">
                      <h4 class="tp-product-related-title">Related Product</h4>
                  </div>
              </div>
          </div>
          <div class="row">
              <div v-for="item in products" :key="item.id" class="col-xl-3 col-lg-4 col-sm-6 tp_fade_anim" data-delay=".3">
                  <product-item :item="item" />
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import product_data from '~/data/product-data';

const products = product_data.slice(8, 12);
</script>
