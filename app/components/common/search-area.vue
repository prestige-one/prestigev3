<template>
  <div :class="['tp-search-area','p-relative',isOpen?'opened':'',isDark?'search-black':'' ]">
      <div class="tp-search-close">
          <button class="tp-search-close-btn" @click="$emit('close')">
              <svg-close-two/>
          </button>
      </div>
      <div class="container container-1230">
          <div class="row">
              <div class="tp-search-wrapper">
                  <div class="col-lg-8">
                      <div class="tp-search-content">
                          <div class="search p-relative">
                              <input type="text" class="search-input" placeholder="Search">
                              <button class="tp-search-icon">
                                  <svg-search-four/>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="body-overlay" :class="{ 'opened': isOpen }" @click="$emit('close')"/>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

defineProps<Props>();

defineEmits<{
  close: [];
}>();

const {isDark} = useIsDark();
</script>
