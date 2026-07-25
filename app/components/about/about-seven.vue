<!-- <template>
  <div class="ai-about-area pb-110">
      <div class="container container-1230">
          <div class="row">
              <div class="col-lg-6">
                  <div class="ai-about-thumb-box d-flex">
                      <div v-for="item in images" :key="item.id" class="tp--hover-item" :data-speed="item.dataSpeed">
                          <div ref="containerRef" :class="`ai-about-thumb tp--hover-img thumb-${item.id}`" :data-displacement="item.image" data-intensity="0.6" data-speedin="1" data-speedout="1">
                              <img :src="item.image" alt="about-img" @mouseenter="handleMouseEnter(item.image)">
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6">
                  <div class="ai-about-right mt-20">
                      <div class="ai-about-title-box mb-60">
                          <div class="tp-section-subtitle-gradient icon-left mb-20 tp_fade_anim" data-delay=".3">
                              <div><img src="/img/title-shape/title-shape-1.png" alt=""></div>
                              Fully Unique
                          </div>
                          <h4 class="tp-section-title fs-54 fs-60 mb-15 tp_fade_anim" data-delay=".5">
                              Generate <br> Unique images.
                          </h4>
                          <div class="tp_fade_anim" data-delay=".7">
                              <p>
                                  Say goodbye to the days of tedious editing with
                                  our revolutionary platform
                              </p>
                          </div>
                      </div>
                      <div class="ai-about-list tp_fade_anim" data-delay=".7">
                          <ul>
                              <li v-for="item in features" :key="item.id">
                                  <span>
                                      <span>
                                          <i/>
                                          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M12.1594 8C12.1594 8 12.0094 9 8.90942 13C5.99942 16.77 10.2094 19.64 10.7094 19.97C10.7394 19.99 10.7694 19.99 10.8094 19.97C11.4894 19.55 19.0594 14.68 12.1594 8Z" fill="currentcolor" />
                                              <path d="M9.75977 5.79006C9.75977 3.49006 8.85977 1.39006 7.95977 0.190058C7.65977 -0.109942 7.15977 -0.00994164 7.05977 0.390058C6.65977 1.89006 5.45977 5.09006 2.55977 8.89006C-1.14023 13.6901 2.25977 18.8901 5.75977 19.8901C7.65977 20.3901 5.25977 18.8901 4.95977 15.7901C4.65977 11.8901 9.75977 8.99006 9.75977 5.79006Z" fill="currentcolor" />
                                          </svg>
                                      </span>
                                  </span>
                                  <p>{{ item.title }}</p>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const containerRef = ref(null);
function handleMouseEnter(img:string) {
  useHoverEffectTwo(containerRef,img);
}
 const features = [
    { id: 1, title: 'Improve SEO Ranking' },
    { id: 2, title: 'Search Engine Optimization' },
    { id: 3, title: 'Market Research' }
  ];
  const images = [
    { id: 1, image: '/img/home-07/about/about-2.jpg', dataSpeed: "1" },
    { id: 2, image: '/img/home-07/about/about-1.jpg', dataSpeed: "1.1" }
  ];
</script> -->


<template>
  <div class="ai-about-area pb-110">
    <div class="container container-1230">
      <div class="row">
        <div class="col-lg-6">
          <div class="ai-about-thumb-box d-flex">
            <div
              v-for="(item, index) in images"
              :key="item.id"
              class="tp--hover-item"
              :data-speed="item.dataSpeed"
            >
              <div
                :ref="el => containerRefs[index] = el"
                :class="`ai-about-thumb tp--hover-img thumb-${item.id}`"
                data-intensity="0.6"
                data-speedin="1"
                data-speedout="1"
              >
                <img :src="item.image" alt="about-img">
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content (same as before) -->
        <div class="col-lg-6">
          <div class="ai-about-right mt-20">
            <div class="ai-about-title-box mb-60">
                <div class="tp-section-subtitle-gradient icon-left mb-20 tp_fade_anim" data-delay=".3">
                    <div><img src="/img/title-shape/title-shape-1.png" alt=""></div>
                    Fully Unique
                </div>
                <h4 class="tp-section-title fs-54 fs-60 mb-15 tp_fade_anim" data-delay=".5">
                    Generate <br> Unique images.
                </h4>
                <div class="tp_fade_anim" data-delay=".7">
                    <p>
                        Say goodbye to the days of tedious editing with
                        our revolutionary platform
                    </p>
                </div>
            </div>
            <div class="ai-about-list tp_fade_anim" data-delay=".7">
                <ul>
                    <li v-for="item in features" :key="item.id">
                        <span>
                            <span>
                                <i/>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1594 8C12.1594 8 12.0094 9 8.90942 13C5.99942 16.77 10.2094 19.64 10.7094 19.97C10.7394 19.99 10.7694 19.99 10.8094 19.97C11.4894 19.55 19.0594 14.68 12.1594 8Z" fill="currentcolor" />
                                    <path d="M9.75977 5.79006C9.75977 3.49006 8.85977 1.39006 7.95977 0.190058C7.65977 -0.109942 7.15977 -0.00994164 7.05977 0.390058C6.65977 1.89006 5.45977 5.09006 2.55977 8.89006C-1.14023 13.6901 2.25977 18.8901 5.75977 19.8901C7.65977 20.3901 5.25977 18.8901 4.95977 15.7901C4.65977 11.8901 9.75977 8.99006 9.75977 5.79006Z" fill="currentcolor" />
                                </svg>
                            </span>
                        </span>
                        <p>{{ item.title }}</p>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const containerRefs = ref<any[]>([])

const images = [
  { id: 1, image: "/img/home-07/about/about-2.jpg", dataSpeed: "1" },
  { id: 2, image: "/img/home-07/about/about-1.jpg", dataSpeed: "1.1" }
]

const features = [
  { id: 1, title: "Improve SEO Ranking" },
  { id: 2, title: "Search Engine Optimization" },
  { id: 3, title: "Market Research" }
]

onMounted(async () => {
  const { default: HoverEffect } = await import("hover-effect")

  containerRefs.value.forEach(container => {
    const img = container.querySelector("img") as HTMLImageElement
    if (!img) return

     new HoverEffect({
      parent: container,
      intensity: 0.6,
      speedIn: 1,
      speedOut: 1,
      hover: true,
      image1: img.src,
      image2: img.src,
      displacementImage: "/img/fluid.jpg",
      imagesRatio: img.height / img.width
    })
  })
})
</script>
