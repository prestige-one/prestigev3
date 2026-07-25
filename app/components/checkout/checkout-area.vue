<template>
  <!-- checkout area start -->
  <section class="tp-checkout-area pb-120 pt-200">
    <div class="container">
      <div class="row">
        <!-- Return customer / Coupon -->
        <div class="col-xl-7 col-lg-7">
          <div class="tp-checkout-verify">
            <!-- Returning customer -->
            <div class="tp-checkout-verify-item">
              <p class="tp-checkout-verify-reveal">
                Returning customer?
                <button class="tp-checkout-login-form-reveal-btn" type="button" @click="showLoginForm = !showLoginForm">
                  Click here to login
                </button>
              </p>
              <div v-if="showLoginForm" id="tpReturnCustomerLoginForm" class="tp-return-customer">
                <form @submit.prevent="handleLogin">
                  <div class="tp-return-customer-input">
                    <label>Email</label>
                    <input v-model="loginForm.email" type="email" placeholder="Your Email">
                  </div>
                  <div class="tp-return-customer-input">
                    <label>Password</label>
                    <input v-model="loginForm.password" type="password" placeholder="Password">
                  </div>
                  <div class="tp-return-customer-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                    <div class="tp-return-customer-remeber">
                      <input id="remember" v-model="loginForm.remember" type="checkbox" >
                      <label for="remember">Remember me</label>
                    </div>
                    <div class="tp-return-customer-forgot">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </div>
                  <button type="submit" class="tp-return-customer-btn tp-checkout-btn">Login</button>
                </form>
              </div>
            </div>

            <!-- Coupon -->
            <div class="tp-checkout-verify-item">
              <p class="tp-checkout-verify-reveal">
                Have a coupon?
                <button class="tp-checkout-coupon-form-reveal-btn" type="button" @click="showCouponForm = !showCouponForm">
                  Click here to enter your code
                </button>
              </p>
              <div v-if="showCouponForm" id="tpCheckoutCouponForm" class="tp-return-customer">
                <form @submit.prevent="handleCoupon">
                  <div class="tp-return-customer-input">
                    <label>Coupon Code :</label>
                    <input v-model="couponForm.code" type="text" placeholder="Coupon">
                  </div>
                  <button type="submit" class="tp-return-customer-btn tp-checkout-btn">Apply</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- Billing details -->
        <div class="col-lg-7">
          <div class="tp-checkout-bill-area">
            <h3 class="tp-checkout-bill-title">Billing Details</h3>
            <div class="tp-checkout-bill-form">
              <form @submit.prevent="handleBilling">
                <div class="tp-checkout-bill-inner">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="tp-checkout-input">
                        <label>First Name <span>*</span></label>
                        <input v-model="billingForm.firstName" type="text" placeholder="First Name">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="tp-checkout-input">
                        <label>Last Name <span>*</span></label>
                        <input v-model="billingForm.lastName" type="text" placeholder="Last Name">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="tp-checkout-input">
                        <label>Company name (optional)</label>
                        <input v-model="billingForm.company" type="text" placeholder="Example LTD.">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="tp-checkout-input">
                        <label>Country / Region </label>
                        <input v-model="billingForm.country" type="text">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="tp-checkout-input">
                        <label>Street address</label>
                        <input v-model="billingForm.street" type="text" placeholder="House number and street name">
                      </div>
                      <div class="tp-checkout-input">
                        <input v-model="billingForm.streetOptional" type="text" placeholder="Apartment, suite, unit, etc. (optional)">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="tp-checkout-input">
                        <label>Town / City</label>
                        <input v-model="billingForm.city" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="tp-checkout-input">
                        <label>State / County</label>
                        <input v-model="billingForm.state" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="tp-checkout-input">
                        <label>Postcode ZIP</label>
                        <input v-model="billingForm.postcode" type="text">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="tp-checkout-input">
                        <label>Phone <span>*</span></label>
                        <input v-model="billingForm.phone" type="text">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="tp-checkout-input">
                        <label>Email address <span>*</span></label>
                        <input v-model="billingForm.email" type="email">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="tp-checkout-option-wrapper">
                        <div class="tp-checkout-option">
                          <input id="create_free_account" v-model="billingForm.createAccount" type="checkbox" >
                          <label for="create_free_account">Create an account?</label>
                        </div>
                        <div class="tp-checkout-option">
                          <input id="ship_to_diff_address" v-model="billingForm.shipToDifferent" type="checkbox" >
                          <label for="ship_to_diff_address">Ship to a different address?</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="tp-checkout-input">
                        <label>Order notes (optional)</label>
                        <textarea v-model="billingForm.notes" placeholder="Notes about your order, e.g. special notes for delivery."/>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="col-lg-5">
          <div class="tp-checkout-place white-bg">
            <h3 class="tp-checkout-place-title">Your Order</h3>

            <div class="tp-order-info-list">
              <ul>
                <li class="tp-order-info-list-header">
                  <h4>Product</h4>
                  <h4>Total</h4>
                </li>

                <li v-for="(item, i) in orderItems" :key="i" class="tp-order-info-list-desc">
                  <p>{{ item.name }} <span>x {{ item.quantity }}</span></p>
                  <span>{{ item.total }}</span>
                </li>

                <li class="tp-order-info-list-subtotal">
                  <span>Subtotal</span>
                  <span>{{ orderSummary.subtotal }}</span>
                </li>

                <li class="tp-order-info-list-shipping">
                  <span>Shipping</span>
                  <div class="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
                    <span>
                      <input id="flat_rate" v-model="orderForm.shipping" type="radio" value="flat_rate">
                      <label for="flat_rate">Flat rate: <span>$20.00</span></label>
                    </span>
                    <span>
                      <input id="local_pickup" v-model="orderForm.shipping" type="radio" value="local_pickup">
                      <label for="local_pickup">Local pickup: <span>$25.00</span></label>
                    </span>
                    <span>
                      <input id="free_shipping" v-model="orderForm.shipping" type="radio" value="free_shipping">
                      <label for="free_shipping">Free shipping</label>
                    </span>
                  </div>
                </li>

                <li class="tp-order-info-list-total">
                  <span>Total</span>
                  <span>{{ orderSummary.total }}</span>
                </li>
              </ul>
            </div>

            <div class="tp-checkout-payment">
              <div class="tp-checkout-payment-item">
                <input id="bank_transfer" v-model="orderForm.payment" type="radio" value="bank_transfer">
                <label for="bank_transfer">Direct Bank Transfer</label>
              </div>
              <div class="tp-checkout-payment-item">
                <input id="cheque_payment" v-model="orderForm.payment" type="radio" value="cheque_payment">
                <label for="cheque_payment">Cheque Payment</label>
              </div>
              <div class="tp-checkout-payment-item">
                <input id="cod" v-model="orderForm.payment" type="radio" value="cod">
                <label for="cod">Cash on Delivery</label>
              </div>
              <div class="tp-checkout-payment-item">
                <input id="paypal" v-model="orderForm.payment" type="radio" value="paypal">
                <label for="paypal">PayPal</label>
              </div>
            </div>

            <div class="tp-checkout-agree">
              <div class="tp-checkout-option">
                <input id="read_all" v-model="orderForm.termsAgreed" type="checkbox">
                <label for="read_all">I have read and agree to the website.</label>
              </div>
            </div>

            <div class="tp-checkout-btn-wrapper">
              <button class="tp-checkout-btn w-100" @click="handlePlaceOrder">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- checkout area end -->
</template>


<script setup lang="ts">

// Reactive state for login form visibility
const showLoginForm = ref(false)
const showCouponForm = ref(false)

// Reactive state for login form
const loginForm = ref({
  email: '',
  password: '',
  remember: false
})

// Reactive state for coupon form
const couponForm = ref({
  code: ''
})

// Reactive state for billing form
const billingForm = ref({
  firstName: '',
  lastName: '',
  company: '',
  country: 'United States (US)',
  street: '',
  streetOptional: '',
  city: '',
  state: 'New York US',
  postcode: '',
  phone: '',
  email: '',
  createAccount: false,
  shipToDifferent: false,
  notes: ''
})

// Reactive state for order form
const orderForm = ref({
  shipping: 'free_shipping',
  payment: 'bank_transfer',
  termsAgreed: false
})

// Static order items (can be dynamic via API in a real app)
const orderItems = ref([
  { name: 'Xiaomi Redmi Note 9 Global V.', quantity: '2', total: '$274.00' },
  { name: 'Office Chair Multifun', quantity: '1', total: '$74.00' },
  { name: 'Apple Watch Series 6 Stainless', quantity: '3', total: '$362.00' },
  { name: 'Body Works Mens Collection', quantity: '1', total: '$145.00' }
])

// Order summary (can be computed dynamically in a real app)
const orderSummary = ref({
  subtotal: '$507.00',
  total: '$1,476.00'
})

// Form submission handlers
const handleLogin = () => {
  console.log('Login submitted:', loginForm.value)
  // Add API call or logic here
}

const handleCoupon = () => {
  console.log('Coupon submitted:', couponForm.value)
  // Add API call or logic here
}

const handleBilling = () => {
  console.log('Billing submitted:', billingForm.value)
  // Add API call or logic here
}

const handlePlaceOrder = () => {
  if (orderForm.value.termsAgreed) {
    console.log('Order placed:', { billing: billingForm.value, order: orderForm.value })
    // Add API call or logic here
  }
}
</script>
