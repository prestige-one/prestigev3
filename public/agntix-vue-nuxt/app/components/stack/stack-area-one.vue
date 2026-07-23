<template>
  <div
    class="app-stack-area app-stack-ptb app-stack-box stack-panel-pin-area mt-145"
  >
    <div class="app-stack-contain">
      <div
        v-for="item in stackData"
        :key="item.id"
        class="app-stack-item stack-item"
        :class="[
          `app-stack-item-0${item.id}`,
          'stack-panel-pin',
          item.stackColorClass,
        ]"
        :style="{ backgroundColor: item.bgColor }"
      >
        <div class="app-stack-warpper pt-200 pb-200">
          <div class="container container-1230">
            <div class="row">
              <!-- Left Content -->
              <div class="col-lg-6">
                <div class="app-stack-heading">
                  <span class="app-stack-subtitle">{{ item.subtitle }}</span>
                  <h4 class="app-stack-number">
                    {{ item.id > 9 ? item.id : `0${item.id}` }}
                  </h4>
                  <h3 class="app-stack-title">{{ item.title }}</h3>
                  <div class="app-stack-content">
                    <p>{{ item.description }}</p>
                    <div class="app-stack-btn">
                      <NuxtLink :to="link">{{ item.linkText }}</NuxtLink>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Images -->
              <div class="col-lg-6">
                <atropos-component>
                  <div class="app-stack-thumb-box p-relative text-end">
                    <div class="my-atropos">
                      <div class="atropos">
                        <div class="atropos-scale">
                          <div class="atropos-rotate">
                            <div class="atropos-inner">
                              <img
                                v-for="(img, index) in item.images"
                                :key="index"
                                :src="img.src"
                                :alt="img.alt"
                                :class="img.className"
                                :data-offset="img.offset"
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </atropos-component>
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
const link = isDark.value?'/dark/service-details':'/service-details';
const stackData = [
  {
    id: 1,
    subtitle: "Data dashboard",
    title: "Easy to manage your all app data.",
    description:
      "Lorem ipsum is simply printing typesetting industry industry's standard dummy text printer scrambled ipsum is simply dummy text of the printing.",
    linkText: "Read more",
    bgColor: isDark.value ? "#0E0F11" : "#f7f7fd",
    stackColorClass: "dark-stack-color",
    images: [
      {
        src: "/img/home-10/stack/stack-round.png",
        alt: "stack-round",
        offset: -4.5,
        className: "",
      },
      {
        src: "/img/home-10/stack/stack-man.png",
        alt: "stack-man",
        offset: 5,
        className: "shape-1",
      },
      {
        src: "/img/home-10/stack/stack-phone.png",
        alt: "stack-phone",
        offset: -4,
        className: "shape-2",
      },
      {
        src: "/img/home-10/stack/stack-shape-1.png",
        alt: "stack-shape",
        offset: 3,
        className: "shape-3",
      },
      {
        src: "/img/home-10/stack/stack-shape-2.png",
        alt: "stack-shape",
        offset: 2,
        className: "shape-4",
      },
    ],
  },
  {
    id: 2,
    subtitle: "Data dashboard",
    title: "Easy book trips easy payment.",
    description:
      "Lorem ipsum is simply printing typesetting industry industry's standard dummy text printer scrambled ipsum is simply dummy text of the printing.",
    linkText: "Read more",
    bgColor: "",
    stackColorClass: "",
    images: [
      {
        src: "/img/home-10/stack/stack-round.png",
        alt: "stack-round",
        offset: -4.5,
        className: "",
      },
      {
        src: "/img/home-10/stack/stack-man.png",
        alt: "stack-man",
        offset: 5,
        className: "shape-1",
      },
      {
        src: "/img/home-10/stack/stack-phone.png",
        alt: "stack-phone",
        offset: -4,
        className: "shape-2",
      },
      {
        src: "/img/home-10/stack/stack-shape-1.png",
        alt: "stack-shape",
        offset: 3,
        className: "shape-3",
      },
      {
        src: "/img/home-10/stack/stack-shape-2.png",
        alt: "stack-shape",
        offset: 2,
        className: "shape-4",
      },
    ],
  },
  {
    id: 3,
    subtitle: "Data dashboard",
    title: "Easy to manage your all app data.",
    description:
      "Lorem ipsum is simply printing typesetting industry industry's standard dummy text printer scrambled ipsum is simply dummy text of the printing.",
    linkText: "Read more",
    bgColor: isDark.value ? "#0E0F11" : "#f7f7fd",
    stackColorClass: "dark-stack-color",
    images: [
      {
        src: "/img/home-10/stack/stack-round.png",
        alt: "stack-round",
        offset: -4.5,
        className: "",
      },
      {
        src: "/img/home-10/stack/stack-man.png",
        alt: "stack-man",
        offset: 5,
        className: "shape-1",
      },
      {
        src: "/img/home-10/stack/stack-phone.png",
        alt: "stack-phone",
        offset: -4,
        className: "shape-2",
      },
      {
        src: "/img/home-10/stack/stack-shape-1.png",
        alt: "stack-shape",
        offset: 3,
        className: "shape-3",
      },
      {
        src: "/img/home-10/stack/stack-shape-2.png",
        alt: "stack-shape",
        offset: 2,
        className: "shape-4",
      },
    ],
  },
];
</script>
