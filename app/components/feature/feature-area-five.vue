
<template>
   <div class="tp-shop-feature-ptb pb-120">
      <div class="container container-1200">
          <div class="tp-shop-feature-wrap">
              <div class="row">
                  <div v-for="(item, index) in features" :key="index" class="col-xl-4 col-md-6 tp_fade_anim" :data-delay="item.delay">
                      <div class="tp-shop-feature-item mb-30 text-center">
                          <span v-html="sanitizeHtml(item.icon)"/>
                          <h4>{{ item.title }}</h4>
                          <p v-html="sanitizeHtml(item.description)"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    id: 1,
    title: "Fast & free shipping",
    description: "Every single order ships for free. No minimums, <br> no tiers, no fine print whatsoever.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="29" viewBox="0 0 26 29" fill="none">
        <path d="M1.36073 7.61031L13.0007 14.3433L24.6407 7.61031M13 27.7714V14.332M25 19.6631V8.9969C24.9995 8.52929 24.8761 8.07003 24.6421 7.66518C24.408 7.26034 24.0717 6.92415 23.6667 6.69034L14.3333 1.35725C13.9279 1.12321 13.4681 1 13 1C12.5319 1 12.0721 1.12321 11.6667 1.35725L2.33333 6.69034C1.92835 6.92415 1.59197 7.26034 1.35795 7.66518C1.12392 8.07003 1.00048 8.52929 1 8.9969V19.6631C1.00048 20.1307 1.12392 20.59 1.35795 20.9948C1.59197 21.3997 1.92835 21.7358 2.33333 21.9697L11.6667 27.3027C12.0721 27.5368 12.5319 27.66 13 27.66C13.4681 27.66 13.9279 27.5368 14.3333 27.3027L23.6667 21.9697C24.0717 21.7358 24.408 21.3997 24.6421 20.9948C24.8761 20.59 24.9995 20.1307 25 19.6631Z" stroke="currentcolor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,
    delay: ".3"
  },
  {
    id: 2,
    title: "Secure payment",
    description: "Every single order ships for free. No minimums, <br> no tiers, no fine print whatsoever.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
        <path d="M3.57031 19.1755L19.5036 3.24219" stroke="currentcolor" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.1323 22.3744L14.7323 20.7744" stroke="currentcolor" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.7227 18.7843L19.9093 15.5977" stroke="currentcolor" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.13503 11.9834L11.9884 3.13005C14.815 0.303381 16.2284 0.290047 19.0284 3.09005L25.575 9.63671C28.375 12.4367 28.3617 13.85 25.535 16.6767L16.6817 25.53C13.855 28.3567 12.4417 28.37 9.64169 25.57L3.09503 19.0234C0.295027 16.2234 0.295026 14.8234 3.13503 11.9834Z" stroke="currentcolor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 27.334H27.6667" stroke="currentcolor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,
    delay: ".5"
  },
  {
    id: 3,
    title: "Flexible & Easy Return",
    description: "Every single order ships for free. No minimums, <br> no tiers, no fine print whatsoever.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="29" height="24" viewBox="0 0 29 24" fill="none">
        <path d="M27.8959 2.2207V9.55596H20.561" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 21.7815V14.4463H8.33487" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4.06842 8.33237C4.68842 6.5802 5.74215 5.01366 7.1313 3.77891C8.52044 2.54416 10.1997 1.68144 12.0124 1.27127C13.8251 0.861101 15.7122 0.916837 17.4976 1.43328C19.2829 1.94972 20.9084 2.91004 22.2222 4.22462L27.8945 9.55491M1 14.4451L6.6723 19.7754C7.98615 21.09 9.61159 22.0503 11.3969 22.5667C13.1823 23.0832 15.0694 23.1389 16.8821 22.7287C18.6948 22.3186 20.3741 21.4558 21.7632 20.2211C23.1524 18.9863 24.2061 17.4198 24.8261 15.6676" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,
    delay: ".7"
  }
];
</script>