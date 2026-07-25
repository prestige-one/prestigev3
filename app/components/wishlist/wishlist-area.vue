<template>
  <div class="tp-cart-area pb-120 pt-200">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-9 col-lg-8">
          <div class="tp-cart-list mb-25">
            <table class="table">
              <thead>
                <tr>
                  <th colspan="2" class="tp-cart-header-product">Product</th>
                  <th class="tp-cart-header-price">Price</th>
                  <th class="tp-cart-header-quantity">Quantity</th>
                  <th/>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartItems" :key="item.id">
                  <!-- img -->
                  <td class="tp-cart-img">
                    <NuxtLink :to="'/shop-details/'">
                      <img :src="item.image" alt="">
                    </NuxtLink>
                  </td>
                  <!-- title -->
                  <td class="tp-cart-title">
                    <NuxtLink :to="'/shop-details/'">{{ item.name }}</NuxtLink>
                  </td>
                  <!-- price -->
                  <td class="tp-cart-price">
                    <span>${{ item.price.toFixed(2) }}</span>
                  </td>
                  <!-- quantity -->
                  <td class="tp-cart-quantity tp-product-details-quantity">
                    <div class="tp-product-quantity mt-10 mb-10">
                      <span class="tp-cart-minus" @click="decrement(item.id)">
                        <svg-shop-minus/>
                      </span>
                      <input v-model="item.quantity" class="tp-cart-input" type="text">
                      <span class="tp-cart-plus" @click="increment(item.id)">
                        <svg-shop-plus/>
                      </span>
                    </div>
                  </td>
                  <!-- action -->
                  <td class="tp-cart-action text-end">
                    <button class="tp-cart-action-btn" @click="remove(item.id)">
                      <svg-shop-close/>
                      <span>Remove</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="tp-cart-bottom">
            <div class="row">
              <div class="col-xl-12">
                <div class="profile__btn">
                  <NuxtLink to="/cart" class="tp-btn-cart sm">Go To Cart</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const cartItems = ref([
  {
    id: 1,
    name: 'Designer Glass Table',
    price: 120,
    quantity: 1,
    image: '/img/product/shop/shop-thumb-1.png'
  },
  {
    id: 2,
    name: 'Woven Chair',
    price: 340,
    quantity: 1,
    image: '/img/product/shop/shop-thumb-3.png'
  },
  {
    id: 3,
    name: 'Paxous Chair',
    price: 420,
    quantity: 1,
    image: '/img/product/shop/shop-thumb-4.png'
  },
  {
    id: 4,
    name: 'Tripod table lamp',
    price: 93,
    quantity: 1,
    image: '/img/product/shop/shop-thumb-6.png'
  }
])

const increment = (id) => {
  const item = cartItems.value.find(i => i.id === id)
  if (item) item.quantity++
}

const decrement = (id) => {
  const item = cartItems.value.find(i => i.id === id)
  if (item && item.quantity > 1) item.quantity--
}

const remove = (id) => {
  cartItems.value = cartItems.value.filter(i => i.id !== id)
}
</script>

<style scoped>
.table {
    --bs-table-color: transparent;
    --bs-table-bg: transparent;
    --bs-table-accent-bg: transparent;
    --bs-table-striped-color: transparent;
    --bs-table-striped-bg: transparent;
    --bs-table-active-color: transparent;
    --bs-table-active-bg: transparent;
    --bs-table-hover-color: transparent;
    --bs-table-hover-bg: transparent;
    border-color: transparent;
}
</style>