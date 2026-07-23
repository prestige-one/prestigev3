
<template>
  <div class="app-feature-area app-feature-border-style">
      <div class="container container-1230">
          <div class="row">
              <div class="col-lg-12">
                  <div class="app-feature-heading text-center mb-55">
                      <span class="tp-section-subtitle border-bg bg-color tp_fade_anim" data-delay=".3">Easy to solution</span>
                      <h3 class="tp-section-title-phudu fs-70 mb-20 tp_fade_anim" data-delay=".5">Unlock All <br> Features in Our App</h3>
                      <div class="tp_fade_anim" data-delay=".7">
                          <p>Powerful features to help you manage money smarter.</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="app-feature-bg tp_fade_anim">
              <div class="row gx-10">
                  <div v-for="(item, index) in features" :key="index" class="col-lg-4 col-md-6">
                      <div class="app-feature-item mb-30">
                          <div class="app-feature-item-icon">
                              <span v-html="sanitizeHtml(item.icon)"/>
                          </div>
                          <div class="app-feature-item-content">
                              <h4 class="app-feature-title">{{ item.title }}</h4>
                              <p v-html="sanitizeHtml(item.description)"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="col-lg-8">
                  <div class="app-feature-bottom text-center mt-20">
                      <p><span>Hurray</span>Subscribe <a href="#">Agntix application</a> and get a special discount.</p>
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
        title: "Guaranteed safety",
        description: "Powerful features to help you manage <br> money smarter.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M22.1594 3.76253L14.5434 0.370404C13.4257 -0.123468 11.7361 -0.123468 10.6184 0.370404L3.0024 3.76253C1.07889 4.6203 0.792969 5.79 0.792969 6.41384C0.792969 7.03768 1.07889 8.20738 3.0024 9.06516L10.6184 12.4573C11.1773 12.7042 11.8791 12.8342 12.5809 12.8342C13.2827 12.8342 13.9846 12.7042 14.5434 12.4573L22.1594 9.06516C24.0829 8.20738 24.3689 7.03768 24.3689 6.41384C24.3689 5.79 24.0959 4.6203 22.1594 3.76253Z" fill="currentColor" />
                <path opacity="0.4" d="M12.5807 19.5535C12.0869 19.5535 11.593 19.4495 11.1381 19.2546L2.37839 15.3556C1.03973 14.7577 0 13.1591 0 11.6905C0 11.1576 0.428889 10.7288 0.961751 10.7288C1.49461 10.7288 1.9235 11.1576 1.9235 11.6905C1.9235 12.3923 2.50835 13.3021 3.15818 13.588L11.9179 17.487C12.3338 17.669 12.8147 17.669 13.2306 17.487L21.9903 13.588C22.6401 13.3021 23.225 12.4053 23.225 11.6905C23.225 11.1576 23.6539 10.7288 24.1867 10.7288C24.7196 10.7288 25.1485 11.1576 25.1485 11.6905C25.1485 13.1461 24.1088 14.7577 22.7701 15.3556L14.0104 19.2546C13.5685 19.4495 13.0746 19.5535 12.5807 19.5535Z" fill="currentColor" />
                <path opacity="0.4" d="M12.5807 25.9998C12.0869 25.9998 11.593 25.8958 11.1381 25.7008L2.37839 21.8019C0.935758 21.165 0 19.7224 0 18.1368C0 17.6039 0.428889 17.175 0.961751 17.175C1.49461 17.175 1.9235 17.6039 1.9235 18.1368C1.9235 18.9556 2.40438 19.6964 3.15818 20.0343L11.9179 23.9333C12.3338 24.1153 12.8147 24.1153 13.2306 23.9333L21.9903 20.0343C22.7311 19.7094 23.225 18.9556 23.225 18.1368C23.225 17.6039 23.6539 17.175 24.1867 17.175C24.7196 17.175 25.1485 17.6039 25.1485 18.1368C25.1485 19.7224 24.2127 21.152 22.7701 21.8019L14.0104 25.7008C13.5685 25.8958 13.0746 25.9998 12.5807 25.9998Z" fill="currentColor" />
            </svg>`,
        delay: ".3"
    },
    {
        id: 2,
        title: "Fast performance",
        description: "Powerful features to help you manage <br> money smarter.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                <g>
                    <path d="M11.1391 14.1861H15.1554V23.5445C15.1554 24.9222 16.8711 25.5721 17.7809 24.5323L27.6202 13.3542C28.478 12.3794 27.7891 10.8587 26.4894 10.8587H22.4731V1.50026C22.4731 0.1225 20.7574 -0.527389 19.8476 0.512433L10.0083 11.6905C9.16348 12.6653 9.85235 14.1861 11.1391 14.1861Z" fill="currentColor"/>
                    <path d="M10.0732 3.09894H0.974825C0.441921 3.09894 0 2.65702 0 2.12411C0 1.5912 0.441921 1.14928 0.974825 1.14928H10.0732C10.6061 1.14928 11.048 1.5912 11.048 2.12411C11.048 2.65702 10.6061 3.09894 10.0732 3.09894Z" fill="currentColor"/>
                    <path d="M8.77343 23.8956H0.974825C0.441921 23.8956 0 23.4536 0 22.9207C0 22.3878 0.441921 21.9459 0.974825 21.9459H8.77343C9.30633 21.9459 9.74825 22.3878 9.74825 22.9207C9.74825 23.4536 9.30633 23.8956 8.77343 23.8956Z" fill="currentColor"/>
                    <path d="M4.87413 13.4972H0.974825C0.441921 13.4972 0 13.0553 0 12.5224C0 11.9895 0.441921 11.5476 0.974825 11.5476H4.87413C5.40703 11.5476 5.84895 11.9895 5.84895 12.5224C5.84895 13.0553 5.40703 13.4972 4.87413 13.4972Z" fill="currentColor"/>
                </g>
            </svg>`,
        delay: ".5"
    },
    {
        id: 3,
        title: "Awesome design",
        description: "Powerful features to help you manage <br> money smarter.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
              <path d="M20.864 12.3287C20.8913 12.683 20.7686 13.0509 20.4961 13.3234L12.2926 21.5268C10.4803 23.3391 8.65425 23.3391 6.82824 21.5268L1.36383 16.0624C0.437199 15.1222 -0.0261177 14.1819 0.00113616 13.2417H0.0965244L20.7005 12.3423L20.864 12.3287Z" fill="currentColor"/>
              <path d="M20.4959 11.4976L9.29459 0.296382C8.89941 -0.0987938 8.24531 -0.0987938 7.85013 0.296382C7.45495 0.691557 7.45495 1.34564 7.85013 1.74081L9.03568 2.92633L1.36371 10.5982C0.491583 11.4703 0.0283901 12.3559 0.00113616 13.2417H0.0965244L20.7005 12.3423L20.864 12.3287C20.8504 12.0289 20.714 11.7156 20.4959 11.4976Z" fill="currentColor"/>
              <path d="M19.0788 28H1.36382C0.805111 28 0.341795 27.5367 0.341795 26.978C0.341795 26.4193 0.805111 25.956 1.36382 25.956H19.0788C19.6376 25.956 20.1009 26.4193 20.1009 26.978C20.1009 27.5367 19.6376 28 19.0788 28Z" fill="currentColor"/>
              <path d="M23.644 17.1392C23.2897 16.7577 22.6356 16.7577 22.2813 17.1392C21.8588 17.6025 19.7603 19.9735 19.7603 21.7586C19.7603 23.5301 21.1911 24.961 22.9626 24.961C24.7341 24.961 26.165 23.5301 26.165 21.7586C26.165 19.9735 24.0664 17.6025 23.644 17.1392Z" fill="currentColor"/>
          </svg>`,
        delay: ".7"
    }
];
</script>