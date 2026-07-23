<template>
  <div class="ar-service-area ar-service-height ar-service-mr p-relative fix">
    <div class="ar-service-title-box">
      <span
        class="tp-section-subtitle-satisfy text-white mb-20 tp_fade_anim"
        data-delay=".3"
      >
        Architecture process
      </span>
      <h3
        class="tp-section-title-clash-600 text-white fs-60 mb-0 tp_fade_anim"
        data-delay=".4"
      >
        The project <br>
        process.
      </h3>
    </div>

    <div
      v-for="service in services"
      :key="service.id"
      class="ar-service-item d-flex align-items-end justify-content-end"
      :class="{ active: activeId === service.id }"
      @mouseenter="handleMouseEnter(service.id)"
    >
      <div
        class="ar-service-bg"
        :style="{ backgroundImage: `url(${service.imageUrl})` }"
      />
      <span class="ar-service-title">{{ service.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

interface ServiceItem {
  id: number;
  title: string;
  imageUrl: string;
}

const activeId = ref<number>(1);

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Construction",
    imageUrl: "/img/home-08/service/service-4.jpg",
  },
  {
    id: 2,
    title: "City planning",
    imageUrl: "/img/home-08/service/service-2.jpg",
  },
  {
    id: 3,
    title: "Residential",
    imageUrl: "/img/home-08/service/service-3.jpg",
  },
  {
    id: 4,
    title: "Interior Design",
    imageUrl: "/img/home-08/service/service-1.jpg",
  },
];

const handleMouseEnter = (id: number) => {
  activeId.value = id;
};
</script>