<template>
  <div>
    <div
      class="cartmini__area"
      :class="{ 'cartmini-opened': isOpen }"
    >
      <div
        class="cartmini__wrapper d-flex justify-content-between flex-column"
      >
        <!-- Top -->
        <div class="cartmini__top-wrapper">
          <div class="cartmini__top p-relative">
            <div class="cartmini__top-title">
              <h4>Shopping cart</h4>
            </div>
            <div class="cartmini__close">
              <button
                type="button"
                class="cartmini__close-btn cartmini-close-btn"
                @click="$emit('close')"
              >
                <i class="fal fa-times"/>
              </button>
            </div>
          </div>
  
          <!-- Shipping -->
          <div class="cartmini__shipping">
            <p>
              Free Shipping for all orders over <span>$50</span>
            </p>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                role="progressbar"
                :style="{ width: shippingProgress + '%' }"
                :aria-valuenow="shippingProgress"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
  
          <!-- Products -->
          <div class="cartmini__widget">
            <div
              v-for="item in cartItems"
             :key="item.id"
              class="cartmini__widget-item"
            >
              <div class="cartmini__thumb">
                <NuxtLink to="/shop-details">
                  <img :src="item.image" :alt="item.title">
                </NuxtLink>
              </div>
              <div class="cartmini__content">
                <h5 class="cartmini__title">
                  <NuxtLink to="/shop-details">{{ item.title }}</NuxtLink>
                </h5>
                <div class="cartmini__price-wrapper">
                  <span class="cartmini__price">{{ item.price }}</span>
                  <span class="cartmini__quantity">x{{ item.qty }}</span>
                </div>
              </div>
              <button
                class="cartmini__del"
                @click="removeItem(item.id)"
              >
                <i class="fa-regular fa-xmark"/>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Checkout -->
        <div class="cartmini__checkout">
          <div class="cartmini__checkout-title mb-30">
            <h4>Subtotal:</h4>
            <span>{{ subtotal }}</span>
          </div>
          <div class="cartmini__checkout-btn">
            <NuxtLink
              to="/cart"
              class="tp-btn-white-border coffee-bg text-center mb-10 w-100"
            >
              view cart
            </NuxtLink>
            <NuxtLink
              to="/checkout"
              class="tp-btn-white-border coffee-bg border-none text-center w-100"
            >
              checkout
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="body-overlay" :class="{ 'opened': isOpen }" @click="$emit('close')"/>
</template>

<script setup lang="ts">

defineProps<{
  isOpen: boolean;
}>();

defineEmits<{
  close: [];
}>();

const cartItems = ref([
  {
    id: 1,
    title: "Woven Chair",
    price: "$120.00",
    qty: 2,
    image: "/img/product/shop/shop-thumb-3.png",
  },
  {
    id: 2,
    title: "Paxous Chair",
    price: "$120.00",
    qty: 2,
    image: "/img/product/shop/shop-thumb-4.png",
  },
  {
    id: 3,
    title: "Plush White Chair",
    price: "$120.00",
    qty: 2,
    image: "/img/product/shop/shop-thumb-5.png",
  }
]);

const shippingProgress = 70;

const subtotal = computed(() => {
  let total = 0;
  cartItems.value.forEach((item) => {
    const price = parseFloat(item.price.replace("$", ""));
    total += price * item.qty;
  });
  return `$${total.toFixed(2)}`;
});

function removeItem(id: number) {
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
}
</script>
