<template>
  <div class="tp-shop-category-2-area">
      <div class="container-fluid">
          <div class="row gx-15">
              <div class="col-xl-6">
                  <div class="tp-shop-category-2-item p-relative mb-15 fix">
                      <nuxt-link href="/shop">
                          <div class="tp-shop-category-2-thumb">
                              <img class="w-100" :src="mainCategory?.image" alt="cat-img">
                              <div class="tp-shop-category-2-content">
                                  <div class="tp-shop-category-2-content-wrap">
                                      <h4 class="tp-shop-category-2-title">
                                        {{ mainCategory?.title }}
                                      </h4>
                                      <span>{{ mainCategory?.productCount }}</span>
                                  </div>
                              </div>
                          </div>
                      </nuxt-link>
                  </div>
              </div>
              <div class="col-xl-6">
                  <div class="row gx-15">
                      <div v-for="(item) in subCategories" :key="item.id" class="col-md-6">
                          <div class="tp-shop-category-2-item p-relative mb-15 fix">
                              <nuxt-link href="/shop">
                                  <div class="tp-shop-category-2-thumb">
                                      <img class="w-100" :src="item.image" alt="">
                                      <div class="tp-shop-category-2-content">
                                          <div class="tp-shop-category-2-content-wrap">
                                              <h4 class="tp-shop-category-2-title sm">
                                                {{ item.title }}
                                              </h4>
                                              <span>{{ item.productCount }}</span>
                                          </div>
                                      </div>
                                  </div>
                              </nuxt-link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">

const productCategoryData = [
  {
    id: 1,
    image: '/img/shop-home/category/cat-1.jpg',
    alt: 'Sofas',
    title: 'Sofas',
    productCount: '12 Products',
    size: 'lg',
  },
  {
    id: 2,
    image: '/img/shop-home/category/cat-2.jpg',
    alt: 'Tables',
    title: 'Tables',
    productCount: '16 Products',
    size: 'sm',
  },
  {
    id: 3,
    image: '/img/shop-home/category/cat-3.jpg',
    alt: 'Decor Items',
    title: 'Decor Items',
    productCount: '8 Products',
    size: 'sm',
  },
  {
    id: 4,
    image: '/img/shop-home/category/cat-4.jpg',
    alt: 'Chairs',
    title: 'Chairs',
    productCount: '17 Products',
    size: 'sm',
  },
  {
    id: 5,
    image: '/img/shop-home/category/cat-5.jpg',
    alt: 'Floor Lamps',
    title: 'Floor Lamps',
    productCount: '14 Products',
    size: 'sm',
  }
];

const mainCategory = productCategoryData.find(cat => cat.size === 'lg');
const subCategories = productCategoryData.filter(cat => cat.size === 'sm');
</script>