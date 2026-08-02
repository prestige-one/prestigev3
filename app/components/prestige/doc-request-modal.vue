<template>
  <teleport to="body">
    <transition name="prestige-modal">
      <div
        v-if="open"
        class="prestige-modal"
        role="dialog"
        aria-modal="true"
        :aria-label="t('pp.doc.requestAria', { doc: documentName })"
        @click.self="close"
      >
        <div class="prestige-modal__dialog">
          <button class="prestige-modal__close" type="button" :aria-label="t('pp.doc.close')" @click="close">
            <span aria-hidden="true">&times;</span>
          </button>
          <span class="prestige-eyebrow">{{ t('pp.doc.eyebrow') }}</span>
          <h3 class="prestige-modal__title">{{ documentName }}</h3>
          <p class="prestige-modal__lead">
            {{ t('pp.doc.lead', { doc: documentName.toLowerCase(), project: projectTitle }) }}
          </p>
          <form-contact-prestige :prefill-message="prefillMessage" />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  open: boolean;
  documentName: string;
  projectTitle: string;
}>();

const emit = defineEmits<{ (e: "close"): void }>();

const { t } = useI18n();

function close() {
  emit("close");
}

const prefillMessage = computed(() =>
  t('pp.doc.prefillMessage', {
    documentName: props.documentName,
    projectTitle: props.projectTitle,
  }),
);

// Esc-to-close + body scroll lock. Guarded so nothing touches document on the server.
function onKey(e: KeyboardEvent) {
  if (e.key === "Escape") close();
}

watch(
  () => props.open,
  (isOpen) => {
    if (import.meta.server) return;
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    }
  },
);

onBeforeUnmount(() => {
  if (import.meta.server) return;
  document.removeEventListener("keydown", onKey);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.prestige-modal {
  position: fixed;
  inset: 0;
  z-index: 1200;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: clamp(20px, 6vh, 70px) 16px;
  overflow-y: auto;
  background: rgba(5, 5, 8, 0.78);
  backdrop-filter: blur(6px);
}
.prestige-modal__dialog {
  position: relative;
  width: 100%;
  max-width: 620px;
  margin: auto;
  padding: clamp(28px, 4vw, 48px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #131318;
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.6);
}
.prestige-modal__close {
  position: absolute;
  top: 14px;
  right: 16px;
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  background: transparent;
  color: #fff;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease;
}
.prestige-modal__close:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.45);
}
.prestige-modal__title {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(28px, 4vw, 38px);
  color: #fff;
  margin: 10px 0 12px;
  line-height: 1.1;
}
.prestige-modal__lead {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 28px;
}

.prestige-modal-enter-active,
.prestige-modal-leave-active {
  transition: opacity 0.3s ease;
}
.prestige-modal-enter-active .prestige-modal__dialog,
.prestige-modal-leave-active .prestige-modal__dialog {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-modal-enter-from,
.prestige-modal-leave-to {
  opacity: 0;
}
.prestige-modal-enter-from .prestige-modal__dialog,
.prestige-modal-leave-to .prestige-modal__dialog {
  transform: translateY(24px);
}

@media (prefers-reduced-motion: reduce) {
  .prestige-modal-enter-active,
  .prestige-modal-leave-active,
  .prestige-modal-enter-active .prestige-modal__dialog,
  .prestige-modal-leave-active .prestige-modal__dialog {
    transition: none;
  }
}
</style>
