<template>
  <div>
    <!-- Trigger Button/Link -->
    <a
      :class="cls"
      href="#"
      @click.prevent="openModal"
    >
      <span v-if="showIcon">
        <svg-video-play-two />
      </span>
      <slot v-else />
    </a>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="isOpen"
          class="video-modal-overlay"
          @click="closeModal"
        >
          <div class="video-modal-content" @click.stop>
            <button
              class="video-modal-close"
              type="button"
              title="Close (Esc)"
              @click="closeModal"
            >
              ×
            </button>
            <div class="video-wrapper">
              <iframe
                v-if="embedUrl"
                :src="embedUrl"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
interface Props {
  url?: string;
  cls?: string;
  showIcon?: boolean;
  iconClr?: string;
}

const props = withDefaults(defineProps<Props>(), {
  url: "https://www.youtube.com/watch?v=VCPGMjCW0is",
  cls: "video-popup btn-circle",
  showIcon: true,
  iconClr: "black",
});

const isOpen = ref(false);

const embedUrl = computed(() => {
  if (!props.url) return '';
  
  // YouTube URL conversion
  if (props.url.includes('youtube.com') || props.url.includes('youtu.be')) {
    const match = props.url.match(/[?&]v=([^&]+)/) || props.url.match(/youtu\.be\/([^?]+)/);
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
    }
  }
  
  // Vimeo URL conversion
  if (props.url.includes('vimeo.com')) {
    const match = props.url.match(/vimeo\.com\/(\d+)/);
    if (match) {
      return `https://player.vimeo.com/video/${match[1]}?autoplay=1`;
    }
  }
  
  // Direct MP4 or other video URLs
  if (props.url.match(/\.(mp4|webm|ogg)$/)) {
    return props.url;
  }
  
  return props.url;
});

const openModal = () => {
  isOpen.value = true;
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isOpen.value = false;
  // Restore body scroll
  document.body.style.overflow = '';
};

// Close on Escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape);
  // Ensure body scroll is restored
  document.body.style.overflow = '';
});
</script>

<style scoped>
.video-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.video-modal-content {
  position: relative;
  width: 100%;
  max-width: 1200px;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
}

.video-modal-close {
  position: absolute;
  top: -10;
  right: 0;
  background: transparent;
  border: none;
  color: red;
  font-size: 40px;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  z-index: 10000;
  transition: opacity 0.3s ease;
}

.video-modal-close:hover {
  opacity: 0.7;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Transition animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .video-modal-content,
.modal-leave-active .video-modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .video-modal-content,
.modal-leave-to .video-modal-content {
  transform: scale(0.9);
}

/* Responsive */
@media (max-width: 768px) {
  .video-modal-overlay {
    padding: 10px;
  }
  
  .video-modal-close {
    top: -35px;
    font-size: 30px;
  }
}
</style>