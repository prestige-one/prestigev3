<template>
  <section class="tp-product-details-area">
    <div class="tp-product-details-top pb-115">
      <div class="container container-1750">
        <div class="row">
          <div class="col-xl-7 col-lg-6">
            <div class="tp-product-details-thumb-wrapper tp-tab d-md-flex">
              <div id="productDetailsNavContent2" class="tab-content m-img">
                <div
                  v-for="image in product.images"
                  :id="`nav-${image.id}`"
                  :key="image.id"
                  :class="['tab-pane', 'fade', { 'show active': image.id === 1 }]"
                  role="tabpanel"
                  :aria-labelledby="`nav-${image.id}-tab`"
                  tabindex="0"
                >
                  <div class="tp-product-details-nav-main-thumb">
                    <img :src="image.src" :alt="image.alt">
                  </div>
                </div>
              </div>
              <nav>
                <div id="productDetailsNavThumb2" class="nav nav-tab flex-md-column" role="tablist">
                  <button
                    v-for="image in product.images"
                    :id="`nav-${image.id}-tab`"
                    :key="image.id"
                    :class="['nav-links', { 'active': image.id === 1 }]"
                    data-bs-toggle="tab"
                    :data-bs-target="`#nav-${image.id}`"
                    type="button"
                    role="tab"
                    :aria-controls="`nav-${image.id}`"
                    :aria-selected="image.id === 1"
                  >
                    <img :src="image.nav" :alt="image.alt">
                  </button>
                </div>
              </nav>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6">
            <div class="tp-product-details-wrapper">
              <div class="tp-product-details-category">
                <span>{{ product.category }}</span>
              </div>
              <h3 class="tp-product-details-title">{{ product.title }}</h3>
              <div class="tp-product-details-inventory d-flex align-items-center mb-10">
                <div class="tp-product-details-stock mb-10">
                  <span>{{ product.stock }}</span>
                </div>
                <div class="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                  <div class="tp-product-details-rating">
                    <span v-for="n in 5" :key="n"><i class="fa-solid fa-star"/></span>
                  </div>
                  <div class="tp-product-details-reviews">
                    <span>({{ product.reviews }} Reviews)</span>
                  </div>
                </div>
              </div>
              <div class="tp-product-details-sort-desc">
                
                <p v-html="sanitizeHtml(product.shortDesc)"/>
              </div>
              <div class="tp-product-details-price-wrapper mb-20">
                <span class="tp-product-details-price old-price">
                  {{ product.oldPrice }}
                </span>
                <span class="tp-product-details-price new-price">
                  {{ product.newPrice }}
                </span>
              </div>
              <div class="tp-product-details-variation">
                <div v-for="variation in product.variations" :key="variation.id" class="tp-product-details-variation-item">
                  <h4 class="tp-product-details-variation-title">{{ variation.title }} :</h4>
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
              <div class="tp-product-details-action-wrapper">
                <h3 class="tp-product-details-action-title">Quantity</h3>
                <div class="tp-product-details-action-item-wrapper d-flex align-items-center">
                  <div class="tp-product-details-quantity">
                    <div class="tp-product-quantity mb-15 mr-15">
                      <span class="tp-cart-minus" @click="decreaseQuantity">
                        <svg-shop-minus />
                      </span>
                      <input v-model.number="quantity" class="tp-cart-input" type="text">
                      <span class="tp-cart-plus" @click="increaseQuantity">
                        <svg-shop-plus />
                      </span>
                    </div>
                  </div>
                  <div class="tp-product-details-add-to-cart mb-15 w-100">
                    <button class="tp-product-details-add-to-cart-btn w-100" @click="addToCart">Add To Cart</button>
                  </div>
                </div>
                <button class="tp-product-details-buy-now-btn w-100">Buy Now</button>
              </div>
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
              <div class="tp-product-details-query">
                <div class="tp-product-details-query-item d-flex align-items-center">
                  <span>SKU: </span>
                  <p>NTB7SDVX44</p>
                </div>
                <div class="tp-product-details-query-item d-flex align-items-center">
                  <span>Category: </span>
                  <p>Computers & Tablets</p>
                </div>
                <div class="tp-product-details-query-item d-flex align-items-center">
                  <span>Tag: </span>
                  <p>Android</p>
                </div>
              </div>
              <div class="tp-product-details-social">
                <span>Share: </span>
                <a href="#"><i class="fa-brands fa-facebook-f"/></a>
                <a href="#"><i class="fa-brands fa-linkedin-in"/></a>
                <a href="#"><i class="fa-brands fa-vimeo-v"/></a>
              </div>
              <div class="tp-product-details-msg mb-15">
                <ul>
                  <li>30 days easy returns</li>
                  <li>Order yours before 2.30pm for same day dispatch</li>
                </ul>
              </div>
              <div class="tp-product-details-payment d-inline-flex align-items-center flex-wrap justify-content-between">
                <p>Guaranteed safe <br> & secure checkout</p>
                <img src="/img/product/product-details-main/payment-option.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tp-product-details-bottom pb-140">
      <div class="container container-1230">
        <div class="row">
          <div class="col-xl-12">
            <div class="tp-product-details-tab-nav tp-tab">
              <nav>
                <div id="navPresentationTab" class="nav nav-tabs justify-content-center p-relative tp-product-tab" role="tablist">
                  <button
                    v-for="tab in tabs"
                    :id="`nav-${tab.id}-tab`"
                    :key="tab.id"
                    :class="['nav-link', { 'active': tab.active }]"
                    data-bs-toggle="tab"
                    :data-bs-target="`#nav-${tab.id}`"
                    type="button"
                    role="tab"
                    :aria-controls="`nav-${tab.id}`"
                    :aria-selected="tab.active"
                    @click="handleActiveMarker($event)"
                  >
                    {{ tab.label }}
                  </button>
                  <span id="productTabMarker" class="tp-product-details-tab-line"/>
                </div>
              </nav>
              <div id="navPresentationTabContent" class="tab-content">
                <div
                  v-for="tab in tabs"
                  :id="`nav-${tab.id}`"
                  :key="tab.id"
                  :class="['tab-pane', 'fade', { 'show active': tab.active }]"
                  role="tabpanel"
                  :aria-labelledby="`nav-${tab.id}-tab`"
                  tabindex="0"
                >
                  <div v-if="tab.id === 'description'" class="tp-product-details-desc-wrapper pt-50">
                    <div class="row justify-content-center">
                      <div class="col-xl-10">
                        <div class="tp-product-details-desc-item">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="tp-product-details-desc-content pt-25">
                                <h3 class="tp-product-details-desc-title">Product Description</h3>
                                <p>{{ product.description }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="tab.id === 'addInfo'" class="tp-product-details-additional-info">
                    <div class="row justify-content-center">
                      <div class="col-xl-10">
                        <table>
                          <tbody>
                            <tr v-for="(info, index) in product.additionalInfo" :key="index">
                              <td>{{ info.key }}</td>
                              <td>{{ info.value }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div v-if="tab.id === 'review'" class="tp-product-details-review-wrapper pt-60">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="tp-product-details-review-statics">
                          <div class="tp-product-details-review-number d-inline-block mb-50">
                            <h3 class="tp-product-details-review-number-title">Customer reviews</h3>
                            <div class="tp-product-details-review-summery d-flex align-items-center">
                              <div class="tp-product-details-review-summery-value">
                                <span>4.5</span>
                              </div>
                              <div class="tp-product-details-review-summery-rating d-flex align-items-center">
                                <span v-for="n in 5" :key="n">
                                  <i class="fa-solid fa-star"/>
                                </span>
                                <p>({{ product.reviews }} Reviews)</p>
                              </div>
                            </div>
                            <div class="tp-product-details-review-rating-list">
                              <div
                                v-for="rating in product.reviewRatings"
                                :key="rating.stars"
                                class="tp-product-details-review-rating-item d-flex align-items-center"
                              >
                                <span>{{ rating.stars }} Star{{ rating.stars > 1 ? 's' : '' }}</span>
                                <div class="tp-product-details-review-rating-bar">
                                  <span class="tp-product-details-review-rating-bar-inner" :style="{ width: rating.percent }"/>
                                </div>
                                <div class="tp-product-details-review-rating-percent">
                                  <span>{{ rating.percent }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tp-product-details-review-list pr-110">
                            <h3 class="tp-product-details-review-title">Rating & Review</h3>
                            <div
                              v-for="review in product.reviewsList"
                              :key="review.id"
                              class="tp-product-details-review-avater d-flex align-items-start"
                            >
                              <div class="tp-product-details-review-avater-thumb">
                                <a href="#">
                                  <img :src="review.avatar" alt="">
                                </a>
                              </div>
                              <div class="tp-product-details-review-avater-content">
                                <div class="tp-product-details-review-avater-rating d-flex align-items-center">
                                  <span v-for="n in review.rating" :key="n">
                                    <i class="fa-solid fa-star"/>
                                  </span>
                                </div>
                                <h3 class="tp-product-details-review-avater-title">{{ review.name }}</h3>
                                <span class="tp-product-details-review-avater-meta">{{ review.date }}</span>
                                <div class="tp-product-details-review-avater-comment">
                                  <p>{{ review.comment }}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="tp-product-details-review-form">
                          <h3 class="tp-product-details-review-form-title">Review this product</h3>
                          <p>Your email address will not be published. Required fields are marked *</p>
                          <form @submit.prevent="submitReview">
                            <div class="tp-product-details-review-form-rating d-flex align-items-center">
                              <p>Your Rating :</p>
                              <div class="tp-product-details-review-form-rating-icon d-flex align-items-center">
                                <span v-for="n in 5" :key="n" :class="{ 'text-warning': n <= reviewForm.rating }" @click="setRating(n)">
                                  <i class="fa-solid fa-star"/>
                                </span>
                              </div>
                            </div>
                            <div class="tp-product-details-review-input-wrapper">
                              <div class="tp-product-details-review-input-box">
                                <div class="tp-product-details-review-input-title">
                                  <label for="msg">Your Review</label>
                                </div>
                                <div class="tp-product-details-review-input">
                                  <textarea id="msg" v-model="reviewForm.comment" placeholder="Write your review here..."/>
                                </div>
                              </div>
                              <div class="tp-product-details-review-input-box">
                                <div class="tp-product-details-review-input-title">
                                  <label for="name">Your Name</label>
                                </div>
                                <div class="tp-product-details-review-input">
                                  <input id="name" v-model="reviewForm.name" type="text" placeholder="Your Name">
                                </div>
                              </div>
                              <div class="tp-product-details-review-input-box">
                                <div class="tp-product-details-review-input-title">
                                  <label for="email">Your Email</label>
                                </div>
                                <div class="tp-product-details-review-input">
                                  <input id="email" v-model="reviewForm.email" type="email" placeholder="Your Email">
                                </div>
                              </div>
                            </div>
                            <div class="tp-product-details-review-suggetions mb-20">
                              <div class="tp-product-details-review-remeber">
                                <input v-model="reviewForm.saveInfo" id="remeber" type="checkbox">
                                <label for="remeber">Save my name, email, and website in this browser for the next time I comment.</label>
                              </div>
                            </div>
                            <div class="tp-product-details-review-btn-wrapper">
                              <button class="tp-product-details-review-btn" type="submit">Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

// Product data
const product = ref({
  category: 'Tablets',
  title: 'Designer Glass Table',
  stock: 'In Stock',
  reviews: 36,
  shortDesc: 'A Screen Everyone Will Love: Whether your family is streaming or <br> video chatting with friends tablet A8... <span>See more</span>',
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
  ],
  description: `Enjoy the peace of mind you get with a performance fabric on the Terni Wood Arm Push Back Reliner in Sea Oat Beige. Our stain-resistant performance fabric is perfect for large families, pet owners, and everyday wear, as it protects against all lifes little messes. A clean classic recliner featuring wood arms with tapered legs finished in chestnut brown, this comfortable recliner adds a modern look to any room. Features: Sea Oat Beige Performance Fabric/Hardwood and plywood frame construction. Upholstered with stain-resistant performance fabric. Performance fabric is easy to clean and durable. Modern contoured wood arms. Exposed wood arms in chestnut brown finish. Cushioned head rest. Drop in coil seating for comfort. Specifications: Product Dimensions: 30"W x 34"D x 42.5"H. Product Weight: 59 lbs. Seat Dimensions: 19"H x 24"W x 20.9"D. Arm Height: 25.25"H`,
  additionalInfo: [
    { key: 'Brand', value: 'Comfort Pointe' },
    { key: 'Color', value: 'Sea Oat' },
    { key: 'Product Dimensions', value: '34"D x 30"W x 42.5"H' },
    { key: 'Size', value: 'unspecified' },
    { key: 'Product Care Instructions', value: 'Wipe Clean' },
    { key: 'Unit Count', value: '1.0 Count' },
    { key: 'Finish Type', value: 'Fabric' },
    { key: 'Theme', value: 'unspecified' },
    { key: 'Arm Style', value: 'Contoured' },
    { key: 'Surface Recommendation', value: 'Hard Floor' },
    { key: 'Furniture base movement', value: 'Rock' },
    { key: 'Indoor/Outdoor Usage', value: 'Indoor' },
    { key: 'Furniture Finish', value: 'Beige' },
    { key: 'Item Weight', value: '59 pounds' }
  ],
  reviewRatings: [
    { stars: 5, percent: '82%' },
    { stars: 4, percent: '30%' },
    { stars: 3, percent: '15%' },
    { stars: 2, percent: '6%' },
    { stars: 1, percent: '10%' }
  ],
  reviewsList: [
    {
      id: 1,
      avatar: '/img/product/product-details-main/desc/user-1.jpg',
      name: 'Eleanor Fant',
      date: '06 March, 2025',
      rating: 5,
      comment: 'Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.'
    },
    {
      id: 2,
      avatar: '/img/product/product-details-main/desc/user-2.jpg',
      name: 'Md Pranta',
      date: '06 March, 2025',
      rating: 5,
      comment: 'This review is for the Samsung Tab S6 Lite, 64gb wifi in blue. purchased this product performed.'
    }
  ]
})

// Tabs
const tabs = ref([
  { id: 'description', label: 'Description', active: false },
  { id: 'addInfo', label: 'Additional information', active: true },
  { id: 'review', label: 'Reviews (2)', active: false }
])

// Quantity
const quantity = ref<number>(1)

// Review form
const reviewForm = ref({
  rating: 0,
  comment: '',
  name: '',
  email: '',
  saveInfo: false
})

// Methods
const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const addToCart = () => {
  console.log(`Added ${quantity.value} ${product.value.title} to cart`)
}

const setRating = (rating: number) => {
  reviewForm.value.rating = rating
}

const submitReview = () => {
  console.log('Review submitted:', reviewForm.value)
  // Reset form
  reviewForm.value = {
    rating: 0,
    comment: '',
    name: '',
    email: '',
    saveInfo: false
  }
}

const handleActiveMarker = (event: MouseEvent) => {
  const marker = document.getElementById("productTabMarker");
  if (marker && event.target) {
    marker.style.left = (event.target as HTMLButtonElement).offsetLeft + "px";
    marker.style.width = (event.target as HTMLButtonElement).offsetWidth + "px";
  }
};

onMounted(() => {
  const nav_active = document.getElementById("nav-addInfo-tab");
  const marker = document.getElementById("productTabMarker");
  if (nav_active?.classList.contains("active") && marker) {
    marker.style.left = nav_active.offsetLeft + "px";
    marker.style.width = nav_active.offsetWidth + "px";
  }
});
</script>