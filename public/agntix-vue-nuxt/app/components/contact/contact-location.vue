
<template>
  <div class="tp-contact-location-ptb p-relative pt-120 pb-170">
    <div class="tp-gsap-bg" :style="{backgroundColor: bg_clr}"/>
    <div class="container container-1430">
      <div class="tp-contact-location-wrapper">
        <div
          v-for="(loc, index) in locations"
          :key="index"
          class="tp-contact-location-item"
        >
          <div class="row">
            <!-- Left -->
            <div class="col-xl-7">
              <div
                class="tp-contact-location-left d-flex flex-wrap align-items-center"
              >
                <div class="tp-contact-location-info-thumb">
                  <img :src="loc.img" :alt="loc.title">
                </div>
                <div class="tp-contact-location-left-info">
                  <h4 class="tp-contact-location-left-title">
                    {{ loc.title }}
                  </h4>
                  <span>
                    <i class="fa-regular fa-clock"/> {{ loc.time }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right -->
            <div class="col-xl-5">
              <div
                class="tp-contact-location-right-wrap d-flex align-items-start justify-content-between"
              >
                <div class="tp-contact-location-right">
                  <div class="tp-contact-location-loc">
                    <span class="tp-contact-location-loc-title">
                      {{ loc.addressTitle }}
                    </span>
                    
                    <a :href="loc.mapLink" target="_blank" v-html="sanitizeHtml(loc.address)"/>
                  </div>
                  <div class="tp-contact-location-map">
                    <a :href="loc.mapLink" target="_blank">Google Maps</a>
                  </div>
                </div>

                <div
                  class="tp-contact-location-right-info text-start text-md-end"
                >
                  <a :href="`tel:${loc.phone}`">{{ loc.phone }}</a> <br>
                  <a :href="`mailto:${loc.email}`">{{ loc.email }}</a>
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
const {isDark} = useIsDark();
const bg_clr = computed(() => isDark.value ? '#1D1D1F' : '#101016');
const locations = [
  {
    title: "France",
    time: "12:00 pm GMT+2",
    img: "/img/contact/contact-location-1.jpg",
    addressTitle: "Base Create",
    address: "Base Creative, 43 Appleton <br /> Lane, 3287 Hamilton",
    mapLink: "https://www.google.com/maps",
    phone: "(+91)76001726",
    email: "Hello@contact.com",
  },
  {
    title: "Germany",
    time: "12:00 pm GMT+2",
    img: "/img/contact/contact-location-2.jpg",
    addressTitle: "Base Create",
    address: "Duesseldorfer Strasse 181 <br /> 40545 Duesseldorf <br /> Germany",
    mapLink: "https://www.google.com/maps",
    phone: "(+91)76001726",
    email: "Hello@contact.com",
  },
  {
    title: "New Zealand",
    time: "12:00 pm GMT+2",
    img: "/img/contact/contact-location-3.jpg",
    addressTitle: "Base Create",
    address: "1758 Berkeley <br /> St. Santa Monica, CA 90404",
    mapLink: "https://www.google.com/maps",
    phone: "(+91)76001726",
    email: "Hello@contact.com",
  },
];
</script>
