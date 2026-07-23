<template>
  <div class="tp-shop-product-area">
      <div class="container-fluid">
          <div class="row gx-15">
              <div class="col-xl-6">
                  <div class="tp-shop-product-banner">
                      <img class="w-100" src="/img/shop-home/product/product-1.jpg" alt="">
                  </div>
              </div>
              <div class="col-xl-6">
                  <div class="row gx-15">
                      <div v-for="item in products" :key="item.id" class="col-md-6">
                          <product-item :item="item" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">

const products = [
  {
    id: 1,
    title: "Plush White Chair",
    price: 520,
    quantity: 0,
    image: "/img/product/shop/shop-thumb-1.png",
    delay: ".3",
  },
  {
    id: 2,
    title: "Designer Glass Table",
    price: 344,
    quantity: 0,
    image: "/img/product/shop/shop-thumb-2.png",
    delay: ".5",
  },
  {
    id: 3,
    title: "Woven Chair",
    price: 450,
    quantity: 0,
    image: "/img/product/shop/shop-thumb-3.png",
    delay: ".7",
  },
  {
    id: 4,
    title: "Paxous Chair",
    price: 220,
    quantity: 0,
    image: "/img/product/shop/shop-thumb-4.png",
    delay: ".8",
  },
  {
    id: 5,
    title: "Plush White Chair",
    price: 520,
    quantity: 0,
    image: "/img/product/shop/shop-thumb-5.png",
    delay: ".3",
  },
  {
    id: 6,
    title: "Tripod table lamp",
    price: 344,
    quantity: 0,
    image: "/img/product/shop/shop-thumb-6.png",
    delay: ".5",
  },
  {
    id: 7,
    title: "Hexagonal table",
    price: 450,
    quantity: 0,
    image: "/img/product/shop/shop-thumb-7.png",
    delay: ".7",
  },
  {
    id: 8,
    title: "Designer Glass Table",
    price: 220,
    quantity: 0,
    image: "/img/product/shop/shop-thumb-8.png",
    delay: ".8",
  },
]
</script>