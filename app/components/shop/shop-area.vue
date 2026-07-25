<template>
  <div>
    <!-- shop area start -->
    <div class="tp-product-ptb pt-200 pb-30">
      <div class="container container-1750">
        <div class="row">
          <div class="col-lg-12">
            <div class="tp-product-heading mb-50">
              <div class="tp-shop-category-title-box">
                <span class="tp-shop-section-subtitle mb-10">[ Shop ]</span>
                <h4 class="tp-shop-section-title">Our products</h4>
              </div>
            </div>
          </div>
  
          <!-- Category Links -->
          <div class="col-lg-6">
            <div class="tp-product-cats pb-40">
              <NuxtLink to="#">All (17)</NuxtLink>
              <NuxtLink to="#">Chairs (2)</NuxtLink>
              <NuxtLink to="#">Sofas (4)</NuxtLink>
              <NuxtLink to="#">Tables (6)</NuxtLink>
              <NuxtLink to="#">Floor Lamps (5)</NuxtLink>
            </div>
          </div>
  
          <!-- Filter Dropdown -->
          <div class="col-lg-6">
            <div class="tp-product-filter-wrap d-flex justify-content-lg-end align-items-center pb-40">
              <div class="tp-product-filter-select">
                <div id="customSelect" :class="['custom-select', { active: isOpen }]">
                  <div
                    class="selected"
                    :class="{ open: isOpen }"
                    @click="toggleDropdown"
                  >
                    Sort by newest <span class="arrow"/>
                  </div>
                  <ul v-if="isOpen" class="options">
                    <li data-value="1">Low to High</li>
                    <li data-value="2">High to Low</li>
                    <li data-value="3">New Added</li>
                    <li data-value="4">On Sale</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Products -->
        <div class="row">
          <div
            v-for="product in displayProduct"
            :key="product.id"
            class="col-xl-3 col-lg-4 col-sm-6"
            :data-delay="product.delay"
          >
            <product-item :item="product" />
          </div>
        </div>
      </div>
    </div>
    <!-- end shop area -->

    <!-- pagination area start -->
    <div class="tp-product-pagination-ptb pb-100">
      <div class="basic-pagination-wrap">
          <div class="container container-1750">
              <div class="row">
                  <div class="col-xl-6">
                      <div class="basic-pagination product-pagination mb-0">
                          <nav>
                              <ul>
                                  <li>
                                      <nuxt-link href="/shop">
                                          <i class="fa-regular fa-angle-left"/>
                                      </nuxt-link>
                                  </li>
                                  <li>
                                      <span class="current">1</span>
                                  </li>
                                  <li>
                                      <nuxt-link href="/shop">2</nuxt-link>
                                  </li>
                                  <li>
                                      <nuxt-link href="/shop">
                                          <i class="fa-regular fa-angle-right"/>
                                      </nuxt-link>
                                  </li>
                              </ul>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <!-- pagination area end -->
  </div>
</template>

<script setup lang="ts">
import product_data from '~/data/product-data';


// Dropdown state
const isOpen = ref(false);
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Show sliced product data
const displayProduct = computed(() => product_data.slice(4, 16));
</script>
