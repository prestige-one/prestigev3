<template>
  <div class="app-testimonial-area app-testimonial-ptb p-relative pb-140">
    <!-- Shapes -->
    <div class="app-testimonial-shape">
      <div class="shape-1" data-speed=".9">
        <img
          src="/img/home-10/testimonial/testimonial-shape-1.png"
          alt="shape"
        >
      </div>
      <div class="shape-2" data-speed="1.1">
        <img
          src="/img/home-10/testimonial/testimonial-shape-2.png"
          alt="shape"
        >
      </div>
      <div class="shape-3">
        <img
          class="w-full h-auto"
          src="/img/home-10/testimonial/testimonial-shape-circle.png"
          alt="shape-circle"
        >
      </div>
    </div>

    <div class="container container-1230">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="app-testimonial-warp mb-55">
            <div class="app-testimonial-heading text-center p-relative mb-40">
              <span
                class="tp-section-subtitle border-bg bg-color tp_fade_anim"
                data-delay=".3">Testimonials</span>
              <h3
                :class="`tp-section-title-phudu ${fontCls} mb-20 tp_fade_anim`"
                data-delay=".5"
              >
                Trusted by 21,000+ <br>
                customers
              </h3>
              <div class="app-testimonial-big-text">
                <h3>4.86</h3>
              </div>
            </div>

            <div
              class="app-testimonial-review-width tp_fade_anim"
              data-delay=".6"
              data-fade-from="top"
              data-ease="bounce"
            >
              <div class="app-testimonial-review">
                <div class="app-testimonial-review-icon">
                  <span><svg-google /></span>
                </div>
                <div class="app-testimonial-review-content">
                  <span>
                    <i>4.9/5</i>
                    <svg-star-eight v-for="i in 5" :key="i" />
                  </span>
                  <p>Based on 1,258 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials List -->
    <div class="container container-1680">
      <div class="row">
        <div class="col-lg-12">
          <div class="app-testimonial-wrapper">
            <div class="app-testimonial-slider d-flex">
              <div class="app-testimonial-slider d-flex">
                <div
                  v-for="testimonial in testimonial_data"
                  :key="testimonial.id"
                  class="app-testimonial-item"
                >
                  <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                    <div class="app-testimonial-item-icon">
                      <span>
                        <img
                          :src="testimonial.avatar"
                          :alt="testimonial.name"
                        >
                      </span>
                    </div>
                    <div class="app-testimonial-item-icon-content">
                      <h4 class="app-testimonial-item-icon-title">
                        {{ testimonial.name }}
                      </h4>
                      <p>{{ testimonial.position }}</p>
                    </div>
                  </div>
                  <div class="app-testimonial-item-content">
                    <p>"{{ testimonial.quote }}"</p>
                    <div class="app-testimonial-item-star">
                      <svg-star-eight v-for="i in 5" :key="i" />
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
</template>

<script setup lang="ts">
withDefaults(defineProps<{fontCls?:string}>(),{
  fontCls:''
})
const testimonial_data = [
  {
    id: 1,
    avatar: "/img/home-10/testimonial/testimonial-item-1.png",
    name: "Kate Leeman",
    position: "Head of Product, Designer",
    quote:
      "I love how agntix helps me track my expenses and alerts me about upcoming bills. It's a must have app!",
    rating: 5,
  },
  {
    id: 2,
    avatar: "/img/home-10/testimonial/testimonial-item-2.png",
    name: "Kate Leeman",
    position: "Head of Product, Designer",
    quote:
      "I love how agntix helps me track my expenses and alerts me about upcoming bills. It's a must have app!",
    rating: 5,
  },
  {
    id: 3,
    avatar: "/img/home-10/testimonial/testimonial-item-3.png",
    name: "Kate Leeman",
    position: "Head of Product, Designer",
    quote:
      "I love how agntix helps me track my expenses and alerts me about upcoming bills. It's a must have app!",
    rating: 5,
  },
  {
    id: 4,
    avatar: "/img/home-10/testimonial/testimonial-item-4.png",
    name: "Kate Leeman",
    position: "Head of Product, Designer",
    quote:
      "I love how agntix helps me track my expenses and alerts me about upcoming bills. It's a must have app!",
    rating: 5,
  },
  {
    id: 5,
    avatar: "/img/home-10/testimonial/testimonial-item-1.png",
    name: "Kate Leeman",
    position: "Head of Product, Designer",
    quote:
      "I love how agntix helps me track my expenses and alerts me about upcoming bills. It's a must have app!",
    rating: 5,
  },
  {
    id: 6,
    avatar: "/img/home-10/testimonial/testimonial-item-2.png",
    name: "Kate Leeman",
    position: "Head of Product, Designer",
    quote:
      "I love how agntix helps me track my expenses and alerts me about upcoming bills. It's a must have app!",
    rating: 5,
  },
  {
    id: 7,
    avatar: "/img/home-10/testimonial/testimonial-item-3.png",
    name: "Kate Leeman",
    position: "Head of Product, Designer",
    quote:
      "I love how agntix helps me track my expenses and alerts me about upcoming bills. It's a must have app!",
    rating: 5,
  },
  {
    id: 8,
    avatar: "/img/home-10/testimonial/testimonial-item-4.png",
    name: "Kate Leeman",
    position: "Head of Product, Designer",
    quote:
      "I love how agntix helps me track my expenses and alerts me about upcoming bills. It's a must have app!",
    rating: 5,
  },
];
</script>
