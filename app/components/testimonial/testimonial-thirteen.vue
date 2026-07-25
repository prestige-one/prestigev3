<template>
  <div class="tp-product-testimonial-ptb pb-100">
    <div class="container container-1750">
      <div class="row">
        <div class="col-lg-12">
          <div class="tp-product-testimonial-heading mb-20">
            <h3 class="tp-product-testimonial-title">CUSTOMER REVIEWS</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="app-testimonial-wrapper">
            <div class="app-testimonial-slider d-flex">
              <div
                v-for="testimonial in testimonial_data"
                :key="testimonial.id"
                class="app-testimonial-item tp-product-testimonial-item"
              >
                <!-- stars -->
                <div class="app-testimonial-item-star">
                  <span v-for="i in 5" :key="i">
                    <svg-star-two color="#CE8065" />
                  </span>
                </div>

                <!-- quote -->
                <div class="app-testimonial-item-content">
                  <p>{{ testimonial.quote }}</p>
                </div>

                <!-- user -->
                <div class="tp-product-testimonial-user">
                  <div class="tp-product-testimonial-user-thumb">
                    <img
                      v-if="testimonial.avatar"
                      :src="testimonial.avatar"
                      :alt="testimonial.name"
                    >
                  </div>
                  <div class="tp-product-testimonial-user-title">
                    <h4 class="tp-product-testimonial-user-name">
                      {{ testimonial.name }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// testimonial data
const testimonial_data = [
  {
    id:1,
    quote:
      '“I love working with Samuel – he’s always professional and goes the extra mile to ensure I’m happy.',
    name: 'John Deo',
    avatar: '/img/product/product-details-main/desc/user-3.jpg',
  },
  {
    id:2,
    quote:
      "Working with Amanda has been a joy – she's attentive, talented, and truly cares about delivering great results.",
    name: 'James Fox',
    avatar: '/img/product/product-details-main/desc/user-4.jpg',
  },
  {
    id:3,
    quote:
      "I'm always impressed by Jordan's commitment – he listens, understands, and consistently exceeds expectations.",
    name: 'Mark Lee',
    avatar: '/img/product/product-details-main/desc/user-5.jpg',
  },
  {
    id:4,
    quote:
      "David brings a level of professionalism and passion that's rare – I couldn't be more pleased with the outcome.",
    name: 'Paul Ray',
    avatar: '/img/product/product-details-main/desc/user-6.jpg',
  },
  {
    id:5,
    quote:
      'Noah made everything easy – his calm attitude and expertise kept the project on track and stress-free.',
    name: 'Farhan Firoz',
    avatar: '/img/product/product-details-main/desc/user-7.jpg',
  },
  {
    id:6,
    quote:
      "Olivia's communication and follow-through made a huge difference – I felt supported from start to finish.",
    name: 'Jack Day',
    avatar: '/img/product/product-details-main/desc/user-1.jpg',
  },
  {
    id:7,
    quote:
      'Liam showed true professionalism throughout – always one step ahead and genuinely invested in our success.',
    name: 'Ryan Cole',
    avatar: '/img/product/product-details-main/desc/user-2.jpg',
  },
  {
    id:8,
    quote:
      "Melissa's attention to detail and creative input made the entire process smooth and enjoyable.",
    name: 'Brain Lara',
    avatar: '/img/product/product-details-main/desc/user-5.jpg',
  },
  {
    id:9,
    quote:
      'Emma was patient, responsive, and went out of her way to make sure every detail was perfect.',
    name: 'Sam Grey',
    avatar: '/img/product/product-details-main/desc/user-5.jpg',
  },
  {
    id:10,
    quote:
      'Chris has a great eye for design and was incredibly easy to work with – highly recommended!',
    name: 'Alex Stone',
    avatar: '/img/product/product-details-main/desc/user-5.jpg',
  },
  {
    id: 11,
    quote:
      "Working with Amanda has been a joy – she's attentive, talented, and truly cares about delivering great results.",
    name: 'Ben Kyle',
    avatar: '/img/product/product-details-main/desc/user-5.jpg',
  },
  {
    id: 12,
    quote:
      "Olivia's communication and follow-through made a huge difference – I felt supported from start to finish.",
    name: 'Adam Shaw',
    avatar: '/img/product/product-details-main/desc/user-5.jpg',
  },
]
</script>
