<template>
  <section class="tp-cart-area pb-120 pt-200">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 col-lg-8">
          <div class="tp-cart-list mb-25 mr-30">
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
                        <svg-shop-minus-two />
                      </span>
                      <input v-model="item.quantity" class="tp-cart-input" type="text">
                      <span class="tp-cart-plus" @click="increment(item.id)">
                        <svg-shop-plus-two />
                      </span>
                    </div>
                  </td>
                  <!-- action -->
                  <td class="tp-cart-action">
                    <button class="tp-cart-action-btn" @click="remove(item.id)">
                      <svg-shop-close />
                      <span>{{ " " }}Remove</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="tp-cart-bottom">
            <div class="row align-items-end">
              <div class="col-xl-6 col-md-8">
                <div class="tp-cart-coupon">
                  <form @submit.prevent="applyCoupon">
                    <div class="tp-cart-coupon-input-box">
                      <label>Coupon Code:</label>
                      <div class="tp-cart-coupon-input d-flex align-items-center">
                        <input v-model="couponCode" type="text" placeholder="Enter Coupon Code">
                        <button type="submit">Apply</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-xl-6 col-md-4">
                <div class="tp-cart-update text-md-end">
                  <button type="button" class="tp-cart-update-btn" @click="updateCart">Update Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="tp-cart-checkout-wrapper">
            <div class="tp-cart-checkout-top d-flex align-items-center justify-content-between">
              <span class="tp-cart-checkout-top-title">Subtotal</span>
              <span class="tp-cart-checkout-top-price">${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="tp-cart-checkout-shipping">
              <h4 class="tp-cart-checkout-shipping-title">Shipping</h4>
              <div class="tp-cart-checkout-shipping-option-wrapper">
                <div v-for="option in shippingOptions" :key="option.value" class="tp-cart-checkout-shipping-option"> <input :id="option.value" v-model="selectedShipping" type="radio" name="shipping" :value="option.value">
                  <label :for="option.value">{{ option.label }}</label>
                </div>
              </div>
            </div>
            <div class="tp-cart-checkout-total d-flex align-items-center justify-content-between">
              <span>Total</span>
              <span>${{ total.toFixed(2) }}</span>
            </div>
            <div class="tp-cart-checkout-proceed">
              <NuxtLink to="/checkout" class="tp-cart-checkout-btn w-100">Proceed to Checkout</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

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

const couponCode = ref('')
const selectedShipping = ref('free')

const shippingOptions = [
  { value: 'flat', label: 'Flat rate: $20.00', cost: 20 },
  { value: 'local', label: 'Local pickup: $25.00', cost: 25 },
  { value: 'free', label: 'Free shipping', cost: 0 }
]

const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
})

const shippingCost = computed(() => {
  const option = shippingOptions.find(opt => opt.value === selectedShipping.value)
  return option ? option.cost : 0
})

const total = computed(() => {
  return subtotal.value + shippingCost.value
})

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

const applyCoupon = () => {
  // Simulate coupon application (e.g., apply discount logic here if needed)
  console.log('Applying coupon:', couponCode.value)
  // For demo, you could add a discount ref and subtract from total
}

const updateCart = () => {
  // Simulate cart update (e.g., API call or just refresh computations)
  console.log('Cart updated')
}
</script>

<style scoped>
/* .table {
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
} */
</style>