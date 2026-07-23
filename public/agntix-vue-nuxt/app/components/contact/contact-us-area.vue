<template>
  <div class="tp-contact-us-info-area pb-120">
    <div class="container container-1230">
      <div class="row">
        <div
          v-for="(item, index) in contactData"
          :key="index"
          class="col-xl-4 col-lg-4 col-md-6 mb-30"
        >
          <div
            class="tp-contact-us-content text-center"
            :class="item.extraClass || ''"
            :data-speed="item.speed"
          >
            <!-- Image -->
            <div class="tp-contact-us-thumb d-flex justify-content-center">
              <img :src="item.img" :alt="item.title">
            </div>

            <!-- Content -->
            <div class="tp-contact-us-bottom">
              <div class="tp-contact-us-info-details">
                <h4 class="tp-contact-us-info-title">{{ item.title }}</h4>
                <a :href="`mailto:${item.email}`">{{ item.email }}</a>
                <a :href="`tel:${item.phone}`">{{ item.phone }}</a>
              </div>
              <div class="tp-contact-us-btn">
                <a
                  :href="item.mapLink"
                  class="tp-btn-yellow-green w-100"
                  target="_blank"
                >
                  <span>
                    <span class="text-1">View Location</span>
                    <span class="text-2">View Location</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const contactData = [
  {
    title: "San Francisco",
    img: "/img/contact/contact-us/contact-us-thumb-1.jpg",
    email: "sydney@contact.com",
    phone: "(+91) 76001726",
    mapLink: "https://www.google.com/maps",
    btnClass: "tp-btn-yellow-green w-100",
    speed: "1.2",
  },
  {
    title: "Germany",
    img: "/img/contact/contact-location-2.jpg",
    email: "sydney@contact.com",
    phone: "(+91) 76001726",
    mapLink: "https://www.google.com/maps",
    btnClass: "tp-btn-yellow-green active w-100",
    speed: ".9",
    extraClass: "mt-60",
  },
  {
    title: "New Zealand",
    img: "/img/contact/contact-location-3.jpg",
    email: "sydney@contact.com",
    phone: "(+91) 76001726",
    mapLink: "https://www.google.com/maps",
    btnClass: "tp-btn-yellow-green w-100",
    speed: "1.2",
  },
];
</script>
