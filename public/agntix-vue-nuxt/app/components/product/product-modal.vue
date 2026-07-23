
<template>
  <div
    id="producQuickViewModal"
    class="modal fade tp-product-modal"
    tabindex="-1"
    aria-labelledby="producQuickViewModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="tp-product-modal-content d-lg-flex">
          <!-- close btn -->
          <button
            type="button"
            class="tp-product-modal-close-btn"
            data-bs-toggle="modal"
            data-bs-target="#producQuickViewModal"
          >
            <i class="fa-regular fa-xmark"/>
          </button>

          <!-- thumbs & gallery -->
          <div class="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
            <div id="productDetailsNavContent" class="tab-content m-img">
              <div
                v-for="(thumb, index) in product.images"
                :id="`nav-${index+1}`"
                :key="thumb.id"
                class="tab-pane fade"
                :class="{ show: index === 0, active: index === 0 }"
                role="tabpanel"
              >
                <div class="tp-product-details-nav-main-thumb">
                  <img :src="thumb.src" :alt="thumb.alt">
                </div>
              </div>
            </div>

            <!-- nav thumbs -->
            <nav>
              <div
                id="productDetailsNavThumb"
                class="nav nav-tab flex-sm-column"
                role="tablist"
              >
                <button
                  v-for="(thumb, index) in product.images"
                  :id="`nav-${index+1}-tab`"
                  :key="`btn-${thumb.id}`"
                  class="nav-links"
                  :class="{ active: index === 0 }"
                  data-bs-toggle="tab"
                  :data-bs-target="`#nav-${index+1}`"
                  type="button"
                  role="tab"
                  :aria-controls="`nav-${index+1}`"
                  :aria-selected="index === 0"
                >
                  <img :src="thumb.nav" :alt="thumb.alt">
                </button>
              </div>
            </nav>
          </div>

          <!-- product info -->
          <div class="tp-product-details-wrapper">
            <!-- category -->
            <div class="tp-product-details-category">
              <span>{{ product.category }}</span>
            </div>

            <!-- title -->
            <h3 class="tp-product-details-title">{{ product.title }}</h3>

            <!-- stock & rating -->
            <div
              class="tp-product-details-inventory d-flex align-items-center mb-10"
            >
              <div class="tp-product-details-stock mb-10">
                <span>{{ product.stock }}</span>
              </div>
              <div
                class="tp-product-details-rating-wrapper d-flex align-items-center mb-10"
              >
                <div class="tp-product-details-rating">
                  <span v-for="i in 5" :key="i">
                    <i class="fa-solid fa-star"/>
                  </span>
                </div>
                <div class="tp-product-details-reviews">
                  <span>({{ product.reviews }} Reviews)</span>
                </div>
              </div>
            </div>

            <!-- short description -->
            <div class="tp-product-details-sort-desc">
              <p v-html="sanitizeHtml(product.shortDesc)"/>
            </div>

            <!-- price -->
            <div class="tp-product-details-price-wrapper mb-20">
              <span class="tp-product-details-price old-price">
                {{product.oldPrice}}
              </span>
              <span class="tp-product-details-price new-price">
                {{product.newPrice}}
              </span>
            </div>

            <!-- variations -->
            <div class="tp-product-details-variation">
              <div
                v-for="variation in product.variations"
                :key="variation.id"
                class="tp-product-details-variation-item"
              >
                <h4 class="tp-product-details-variation-title">
                  {{ variation.title }} :
                </h4>
                <div class="tp-product-details-variation-list">
                  <button
                    v-for="option in variation.options"
                    :key="option.label"
                    type="button"
                    class="color tp-color-variation-btn me-1"
                    :class="{ active: option.active }"
                  >
                    <span :data-bg-color="option.color" :style="{ backgroundColor: option.color }" />
                    <span class="tp-color-variation-tootltip">
                      {{option.label}}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <!-- actions -->
            <div class="tp-product-details-action-wrapper">
              <h3 class="tp-product-details-action-title">Quantity</h3>
              <div
                class="tp-product-details-action-item-wrapper d-flex align-items-center"
              >
                <div class="tp-product-details-quantity">
                  <div class="tp-product-quantity mb-15 mr-15">
                    <span class="tp-cart-minus"><svg-shop-minus /></span>
                    <input class="tp-cart-input" type="text" value="1">
                    <span class="tp-cart-plus"><svg-shop-plus /></span>
                  </div>
                </div>
                <div class="tp-product-details-add-to-cart mb-15 w-100">
                  <button class="tp-product-details-add-to-cart-btn w-100">
                    Add To Cart
                  </button>
                </div>
              </div>
              <button class="tp-product-details-buy-now-btn w-100">
                Buy Now
              </button>
            </div>

            <!-- bottom actions -->
             <div class="tp-product-details-action-sm">
                <button type="button" class="tp-product-details-action-sm-btn">
                    <svg-shop-compare/> Compare
                </button>
                <button type="button" class="tp-product-details-action-sm-btn">
                    <svg-shop-wishlist/> Add Wishlist
                </button>
                <button type="button" class="tp-product-details-action-sm-btn">
                    <svg-shop-question/> Ask a question
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Example product data
const product = {
  category: 'Tablets',
  title: 'Designer Glass Table',
  stock: 'In Stock',
  reviews: 36,
  shortDesc:
    'A Screen Everyone Will Love: Whether your family is streaming or <br> video chatting with friends tablet A8... <span>See more</span>',
  oldPrice: '$320.00',
  newPrice: '$236.00',
  images: [
    {
      id: 1,
      src: '/img/product/product-details-main/product-thumb-1.png',
      nav: '/img/product/product-details-main/nav/product-details-nav-1.png',
      alt: 'Product Thumb 1'
    },
    {
      id: 2,
      src: '/img/product/product-details-main/product-thumb-2.png',
      nav: '/img/product/product-details-main/nav/product-details-nav-2.png',
      alt: 'Product Thumb 2'
    },
    {
      id: 3,
      src: '/img/product/product-details-main/product-thumb-3.png',
      nav: '/img/product/product-details-main/nav/product-details-nav-3.png',
      alt: 'Product Thumb 3'
    }
  ],
  variations: [
    {
      id: 1,
      title: 'Color',
      options: [
        { label: 'Yellow', color: '#F8B655', active: false },
        { label: 'Gray', color: '#CBCBCB', active: true },
        { label: 'Black', color: '#494E52', active: false },
        { label: 'Brown', color: '#B4505A', active: false }
      ]
    }
  ],
  extraButtons: [
    { label: 'Compare', icon: 'svg-shop-compare' },
    { label: 'Add Wishlist', icon: 'svg-shop-wishlist' },
    { label: 'Ask a question', icon: 'svg-shop-question' }
  ]
}
</script>
