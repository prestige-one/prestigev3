<template>
  <div :class="`tp-product-related-ptb ${spacing}`">
      <div class="container-fluid">
          <div class="row justify-content-center">
              <div class="col-xl-8">
                  <div class="tp-shop-category-title-box mb-50 text-center">
                      <span class="tp-shop-section-subtitle mb-10 tp_fade_anim" data-delay=".3">[HOT]</span>
                      <h4 class="tp-shop-section-title tp_fade_anim" data-delay=".5">Trending This Season</h4>
                  </div>
              </div>
          </div>
          <div class="tp-product-related-wrap">
              <div class="row">
                  <div v-for="product in trending_products" :key="product.id" class="col-xl-3 col-lg-4 col-sm-6 tp_fade_anim" :data-delay="product.delay">
                      <product-item :item="product" />
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  spacing?: string;
}>(), {
  spacing: 'pt-100',
});
const trending_products = [
  {
    id: 1,
    title: "Plush White Chair",
    price: 520,
    quantity: 0,
    image: "/img/product/product-details-main/related/related-1.jpg",
    delay: ".3",
  },
  {
    id: 2,
    title: "Tripod table lamp",
    price: 344,
    quantity: 0,
    image: "/img/product/product-details-main/related/related-2.jpg",
    delay: ".5",
  },
  {
    id: 3,
    title: "Hexagonal table",
    price: 450,
    quantity: 0,
    image: "/img/product/product-details-main/related/related-3.jpg",
    delay: ".7",
  },
  {
    id: 4,
    title: "Designer Glass Table",
    price: 220,
    quantity: 0,
    image: "/img/product/product-details-main/related/related-4.jpg",
    delay: ".8",
  },
]
</script>