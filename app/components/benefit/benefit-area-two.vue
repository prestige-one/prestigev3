
<template>
  <div class="it-benifit-area p-relative pt-120 pb-120">
      <div class="container container-1230">
          <div class="it-benifit-bg pt-120 pb-120 z-index-1" :data-bg-color="bg_clr" :style="{backgroundColor: bg_clr}">
              <div class="it-benifit-shape">
                  <img class="tp-zoom-in-out" src="/img/home-11/feature/benifits-shape.png" alt="shape">
              </div>
              <div class="row">
                  <div class="col-xl-6">
                      <div class="it-benifit-title-box mb-55">
                          <span class="tp-section-subtitle-platform platform-text-black mb-20 tp-split-text tp-split-right">Benefits</span>
                          <h4 class="tp-section-title-platform platform-text-black mb-20 tp-split-text tp-split-right">Delivering more Than Just Solutions</h4>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div v-for="item in benefits_data" :key="item.id" class="col-lg-4">
                      <div class="it-benifit-item">
                          <div class="it-benifit-icon">
                              <span v-html="sanitizeHtml(item.icon)" />
                          </div>
                          <div class="it-benifit-content">
                              <h4 class="it-benifit-title">
                                <a href="#">{{ item.title }}</a>
                              </h4>
                              <p>{{ item.description }}</p>
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
const bg_clr = computed(() => (isDark.value ? '#1A1B1E' : '#ffede3'));
const benefits_data = [
  {
    id: 1,
    icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.7504 3.1837L12.306 0.313422C11.3602 -0.104474 9.93058 -0.104474 8.98482 0.313422L2.54043 3.1837C0.912838 3.90952 0.670898 4.89928 0.670898 5.42714C0.670898 5.95501 0.912838 6.94476 2.54043 7.67058L8.98482 10.5409C9.4577 10.7498 10.0516 10.8598 10.6454 10.8598C11.2393 10.8598 11.8331 10.7498 12.306 10.5409L18.7504 7.67058C20.378 6.94476 20.6199 5.95501 20.6199 5.42714C20.6199 4.89928 20.389 3.90952 18.7504 3.1837Z" fill="currentColor" />
              <path opacity="0.4" d="M10.6453 16.5462C10.2274 16.5462 9.80955 16.4583 9.42465 16.2933L2.0125 12.9941C0.87978 12.4882 0 11.1356 0 9.8929C0 9.44201 0.362909 9.0791 0.813797 9.0791C1.26468 9.0791 1.62759 9.44201 1.62759 9.8929C1.62759 10.4867 2.12247 11.2566 2.67233 11.4985L10.0845 14.7977C10.4364 14.9516 10.8433 14.9516 11.1952 14.7977L18.6073 11.4985C19.1572 11.2566 19.6521 10.4977 19.6521 9.8929C19.6521 9.44201 20.015 9.0791 20.4659 9.0791C20.9168 9.0791 21.2797 9.44201 21.2797 9.8929C21.2797 11.1246 20.3999 12.4882 19.2672 12.9941L11.855 16.2933C11.4811 16.4583 11.0632 16.5462 10.6453 16.5462Z" fill="currentColor" />
              <path opacity="0.4" d="M10.6453 21.9994C10.2274 21.9994 9.80955 21.9114 9.42465 21.7464L2.0125 18.4472C0.791802 17.9084 0 16.6877 0 15.346C0 14.8951 0.362909 14.5322 0.813797 14.5322C1.26468 14.5322 1.62759 14.8951 1.62759 15.346C1.62759 16.0388 2.03449 16.6657 2.67233 16.9516L10.0845 20.2508C10.4364 20.4048 10.8433 20.4048 11.1952 20.2508L18.6073 16.9516C19.2342 16.6767 19.6521 16.0388 19.6521 15.346C19.6521 14.8951 20.015 14.5322 20.4659 14.5322C20.9168 14.5322 21.2797 14.8951 21.2797 15.346C21.2797 16.6877 20.4879 17.8974 19.2672 18.4472L11.855 21.7464C11.4811 21.9114 11.0632 21.9994 10.6453 21.9994Z" fill="currentColor" />
          </svg>`,
    title: "Grow your business",
    description: "We believe in challenges and so we have made challenges.",
  },
  {
    id: 2,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
            <path d="M21.5598 22.0002H1.20601C0.754929 22.0002 0.380859 21.6261 0.380859 21.175C0.380859 20.7239 0.754929 20.3499 1.20601 20.3499H21.5598C22.0109 20.3499 22.385 20.7239 22.385 21.175C22.385 21.6261 22.0109 22.0002 21.5598 22.0002Z" fill="currentColor" />
            <path opacity="0.4" d="M20.8333 12.8681L12.8788 20.8226C11.3165 22.3849 8.79707 22.3849 7.24578 20.8336L2.17383 15.7616L15.7724 2.16309L20.8443 7.23504C22.3956 8.78633 22.3956 11.3058 20.8333 12.8681Z" fill="currentColor" />
            <path d="M15.7728 2.16328L2.16328 15.7618L1.1621 14.7606C-0.389194 13.2094 -0.389194 10.6899 1.1731 9.12759L9.12759 1.1731C10.6899 -0.389194 13.2094 -0.389194 14.7606 1.1621L15.7728 2.16328Z" fill="currentColor" />
            <path d="M12.3617 17.1589L10.8764 18.6442C10.5684 18.9522 10.0733 18.9522 9.76522 18.6442C9.45717 18.3361 9.45717 17.841 9.76522 17.533L11.2505 16.0477C11.5586 15.7396 12.0537 15.7396 12.3617 16.0477C12.6698 16.3558 12.6698 16.8508 12.3617 17.1589Z" fill="currentColor" />
            <path d="M17.1807 12.3403L14.2212 15.2999C13.9131 15.6079 13.418 15.6079 13.1099 15.2999C12.8019 14.9918 12.8019 14.4967 13.1099 14.1886L16.0695 11.2291C16.3776 10.921 16.8727 10.921 17.1807 11.2291C17.4778 11.5371 17.4778 12.0322 17.1807 12.3403Z" fill="currentColor" />
        </svg>`,
    title: "Cost savings ideas",
    description: "We believe in challenges and so we have made challenges.",
  },
  {
    id: 3,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
          <path d="M21.2326 20.4648H0.767442C0.347907 20.4648 0 20.1169 0 19.6974C0 19.2778 0.347907 18.9299 0.767442 18.9299H21.2326C21.6521 18.9299 22 19.2778 22 19.6974C22 20.1169 21.6521 20.4648 21.2326 20.4648Z" fill="currentColor" />
          <path d="M8.69824 2.04651V20.4651H13.3029V2.04651C13.3029 0.92093 12.8424 0 11.461 0H10.5401C9.15871 0 8.69824 0.92093 8.69824 2.04651Z" fill="currentColor" />
          <path opacity="0.4" d="M1.79102 8.18616V20.4652H5.88404V8.18616C5.88404 7.06058 5.47474 6.13965 4.24683 6.13965H3.42822C2.20032 6.13965 1.79102 7.06058 1.79102 8.18616Z" fill="currentColor" />
          <path opacity="0.4" d="M16.1162 13.3024V20.4652H20.2092V13.3024C20.2092 12.1768 19.7999 11.2559 18.572 11.2559H17.7534C16.5255 11.2559 16.1162 12.1768 16.1162 13.3024Z" fill="currentColor" />
      </svg>`,
    title: "Boost performance",
    description: "We believe in challenges and so we have made challenges.",
  }
];
</script>
