<template>
  <div class="back-to-top-wrapper" :class="{ 'back-to-top-btn-show': isVisible }">
    <button id="back_to_top" type="button" class="back-to-top-btn" @click="scrollToTop">
      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 6L6 1L1 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
const isVisible = ref(false);

const handleScroll = (): void => {
  if (window.scrollY > 200) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
};

const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>