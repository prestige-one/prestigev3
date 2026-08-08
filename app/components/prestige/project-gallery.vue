<template>
  <section v-if="images.length" class="prestige-pgallery prestige-section">
    <div class="container container-1430">
      <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ eyebrow }}</span>
      <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">{{ title }}</h2>

      <div class="prestige-pgallery__grid">
        <button
          v-for="(image, index) in images"
          :key="`${image}-${index}`"
          type="button"
          class="prestige-pgallery__tile tp_fade_anim"
          :data-delay="0.2 + (index % 3) * 0.08"
          :aria-label="`Open ${projectTitle} gallery image ${index + 1}`"
          @click="openGallery(index, $event)"
        >
          <img :src="image" :alt="`${projectTitle} - view ${index + 1}`" loading="lazy" draggable="false">
          <span class="prestige-pgallery__tile-shade" aria-hidden="true" />
          <span class="prestige-pgallery__tile-count">{{ pad(index + 1) }}</span>
          <span class="prestige-pgallery__tile-open" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
              <circle cx="11" cy="11" r="6" />
              <path d="m16 16 4 4M11 8v6M8 11h6" />
            </svg>
          </span>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="prestige-pgallery-modal">
        <div
          v-if="isOpen"
          class="prestige-pgallery__lightbox"
          role="dialog"
          aria-modal="true"
          :aria-label="`${projectTitle} image gallery`"
          @mousedown.self="closeGallery"
        >
          <header class="prestige-pgallery__lightbox-head">
            <div>
              <span class="prestige-pgallery__lightbox-label">Gallery</span>
              <strong>{{ projectTitle }}</strong>
            </div>
            <span class="prestige-pgallery__lightbox-count">{{ pad(activeIndex + 1) }} / {{ pad(images.length) }}</span>
            <button ref="closeButton" type="button" class="prestige-pgallery__close" aria-label="Close gallery" @click="closeGallery" />
          </header>

          <div class="prestige-pgallery__stage">
            <button
              v-if="images.length > 1"
              type="button"
              class="prestige-pgallery__arrow prestige-pgallery__arrow--prev"
              aria-label="Previous image"
              @click="showPrevious"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m15 5-7 7 7 7" /></svg>
            </button>

            <div class="prestige-pgallery__main-image">
              <Transition name="prestige-pgallery-image" mode="out-in">
                <img :key="activeImage" :src="activeImage" :alt="`${projectTitle} - view ${activeIndex + 1}`" draggable="false">
              </Transition>
            </div>

            <button
              v-if="images.length > 1"
              type="button"
              class="prestige-pgallery__arrow prestige-pgallery__arrow--next"
              aria-label="Next image"
              @click="showNext"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m9 5 7 7-7 7" /></svg>
            </button>
          </div>

          <div v-if="images.length > 1" class="prestige-pgallery__thumbs-wrap">
            <div ref="thumbsTrack" class="prestige-pgallery__thumbs" aria-label="Gallery thumbnails">
              <button
                v-for="(image, index) in images"
                :key="`thumb-${image}-${index}`"
                type="button"
                class="prestige-pgallery__thumb"
                :class="{ 'prestige-pgallery__thumb--active': index === activeIndex }"
                :aria-label="`Show image ${index + 1}`"
                :aria-current="index === activeIndex ? 'true' : undefined"
                @click="activeIndex = index"
              >
                <img :src="image" alt="" loading="lazy" draggable="false">
                <span>{{ pad(index + 1) }}</span>
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[];
  eyebrow: string;
  title: string;
  projectTitle: string;
}>();

const isOpen = ref(false);
const activeIndex = ref(0);
const closeButton = ref<HTMLButtonElement | null>(null);
const thumbsTrack = ref<HTMLElement | null>(null);
let triggerElement: HTMLElement | null = null;
let previousHtmlOverflow = "";
let previousBodyOverflow = "";

const activeImage = computed(() => props.images[activeIndex.value] ?? "");
const pad = (value: number) => String(value).padStart(2, "0");

function openGallery(index: number, event: MouseEvent) {
  activeIndex.value = index;
  triggerElement = event.currentTarget as HTMLElement;
  isOpen.value = true;
}

function closeGallery() {
  isOpen.value = false;
}

function showPrevious() {
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length;
}

function showNext() {
  activeIndex.value = (activeIndex.value + 1) % props.images.length;
}

function handleKeydown(event: KeyboardEvent) {
  if (!isOpen.value) return;
  if (event.key === "Escape") closeGallery();
  if (event.key === "ArrowLeft") showPrevious();
  if (event.key === "ArrowRight") showNext();
}

function unlockPage() {
  if (import.meta.server) return;
  document.documentElement.style.overflow = previousHtmlOverflow;
  document.body.style.overflow = previousBodyOverflow;
}

watch(isOpen, async (open) => {
  if (import.meta.server) return;
  if (open) {
    previousHtmlOverflow = document.documentElement.style.overflow;
    previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    await nextTick();
    closeButton.value?.focus();
  } else {
    unlockPage();
    await nextTick();
    triggerElement?.focus();
  }
});

watch(activeIndex, async () => {
  await nextTick();
  const activeThumb = thumbsTrack.value?.querySelector<HTMLElement>(".prestige-pgallery__thumb--active");
  activeThumb?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
});

onMounted(() => window.addEventListener("keydown", handleKeydown));
onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  if (isOpen.value) unlockPage();
});
</script>

<style scoped>
.prestige-pgallery { overflow: hidden; }
.prestige-pgallery__grid {
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	gap: clamp(14px, 1.6vw, 24px);
	margin-top: 20px;
}
.prestige-pgallery__tile {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: #121317;
  color: #fff;
  cursor: zoom-in;
}
.prestige-pgallery__tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
}
.prestige-pgallery__tile-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 55%, rgba(0, 0, 0, 0.58));
  opacity: 0.75;
}
.prestige-pgallery__tile-count {
  position: absolute;
  right: 18px;
  bottom: 15px;
  font-size: 11px;
  letter-spacing: 0.14em;
}
.prestige-pgallery__tile-open {
  position: absolute;
  top: 16px;
  right: 16px;
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  background: rgba(8, 9, 11, 0.32);
  opacity: 0;
  backdrop-filter: blur(8px);
  transform: translateY(8px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.prestige-pgallery__tile-open svg { width: 19px; height: 19px; }
.prestige-pgallery__tile:hover img,
.prestige-pgallery__tile:focus-visible img { filter: brightness(0.82); transform: scale(1.045); }
.prestige-pgallery__tile:hover .prestige-pgallery__tile-open,
.prestige-pgallery__tile:focus-visible .prestige-pgallery__tile-open { opacity: 1; transform: translateY(0); }
.prestige-pgallery__tile:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }

.prestige-pgallery__lightbox {
  position: fixed;
  inset: 0;
  z-index: 100000;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  padding: 18px clamp(16px, 3vw, 48px) 20px;
  background: rgba(5, 6, 8, 0.97);
  color: #fff;
  backdrop-filter: blur(14px);
}
.prestige-pgallery__lightbox-head {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  min-height: 58px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-pgallery__lightbox-head > div { display: flex; align-items: baseline; gap: 16px; min-width: 0; }
.prestige-pgallery__lightbox-label {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.48);
}
.prestige-pgallery__lightbox-head strong {
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.prestige-pgallery__lightbox-count { font-size: 12px; letter-spacing: 0.16em; color: rgba(255, 255, 255, 0.68); }
.prestige-pgallery__close {
  position: relative;
  justify-self: end;
  width: 42px;
  height: 42px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  background: transparent;
  color: #fff;
  cursor: pointer;
}
.prestige-pgallery__close::before,
.prestige-pgallery__close::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 1px;
  content: "";
  background: currentColor;
}
.prestige-pgallery__close::before { transform: translate(-50%, -50%) rotate(45deg); }
.prestige-pgallery__close::after { transform: translate(-50%, -50%) rotate(-45deg); }
.prestige-pgallery__stage {
  position: relative;
  display: grid;
  min-height: 0;
  overflow: hidden;
  grid-template-columns: 62px minmax(0, 1fr) 62px;
  align-items: center;
  gap: clamp(8px, 2vw, 28px);
  padding: clamp(16px, 2.5vh, 30px) 0;
}
.prestige-pgallery__main-image {
  position: relative;
  display: grid;
  min-width: 0;
  min-height: 0;
  height: 100%;
  place-items: center;
}
.prestige-pgallery__main-image img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.42);
}
.prestige-pgallery__arrow {
  display: grid;
  width: 54px;
  height: 54px;
  place-items: center;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, border-color 0.3s ease;
}
.prestige-pgallery__arrow svg { width: 22px; height: 22px; }
.prestige-pgallery__arrow:hover,
.prestige-pgallery__arrow:focus-visible,
.prestige-pgallery__close:hover,
.prestige-pgallery__close:focus-visible {
  border-color: #fff;
  background: #fff;
  color: #090a0c;
  outline: none;
}
.prestige-pgallery__arrow--next { justify-self: end; }
.prestige-pgallery__thumbs-wrap { min-width: 0; padding-top: 14px; border-top: 1px solid rgba(255, 255, 255, 0.12); }
.prestige-pgallery__thumbs {
  display: flex;
  max-width: min(900px, 82vw);
  gap: 10px;
  margin: 0 auto;
  padding: 2px 2px 7px;
  overflow-x: auto;
  scrollbar-color: rgba(255, 255, 255, 0.35) transparent;
  scrollbar-width: thin;
}
.prestige-pgallery__thumb {
  position: relative;
  flex: 0 0 98px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 4px;
  background: #15161a;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}
.prestige-pgallery__thumb img { width: 100%; height: 100%; object-fit: cover; }
.prestige-pgallery__thumb span {
  position: absolute;
  right: 5px;
  bottom: 3px;
  font-size: 9px;
  color: #fff;
  text-shadow: 0 1px 5px #000;
}
.prestige-pgallery__thumb:hover,
.prestige-pgallery__thumb:focus-visible,
.prestige-pgallery__thumb--active { border-color: rgba(255, 255, 255, 0.9); opacity: 1; outline: none; }
.prestige-pgallery__thumb--active { transform: translateY(-2px); }

.prestige-pgallery-modal-enter-active,
.prestige-pgallery-modal-leave-active { transition: opacity 0.35s ease; }
.prestige-pgallery-modal-enter-from,
.prestige-pgallery-modal-leave-to { opacity: 0; }
.prestige-pgallery-image-enter-active,
.prestige-pgallery-image-leave-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.prestige-pgallery-image-enter-from { opacity: 0; transform: scale(0.985); }
.prestige-pgallery-image-leave-to { opacity: 0; transform: scale(1.015); }

@media (max-width: 991.98px) {
  .prestige-pgallery__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .prestige-pgallery__lightbox { padding-inline: 16px; }
  .prestige-pgallery__stage { grid-template-columns: 48px minmax(0, 1fr) 48px; gap: 8px; }
  .prestige-pgallery__arrow { width: 44px; height: 44px; }
}
@media (max-width: 575.98px) {
  .prestige-pgallery__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .prestige-pgallery__lightbox { padding: 10px 10px 12px; }
  .prestige-pgallery__lightbox-head { grid-template-columns: 1fr auto; }
  .prestige-pgallery__lightbox-head > div { display: block; }
  .prestige-pgallery__lightbox-label { display: block; margin-bottom: 2px; }
  .prestige-pgallery__lightbox-count { display: none; }
  .prestige-pgallery__stage { grid-template-columns: 42px minmax(0, 1fr) 42px; padding-block: 10px; }
  .prestige-pgallery__arrow { width: 38px; height: 38px; }
  .prestige-pgallery__thumbs { max-width: 100%; }
  .prestige-pgallery__thumb { flex-basis: 78px; }
}
@media (prefers-reduced-motion: reduce) {
  .prestige-pgallery__tile img,
  .prestige-pgallery__tile-open,
  .prestige-pgallery__thumb,
  .prestige-pgallery-modal-enter-active,
  .prestige-pgallery-modal-leave-active,
  .prestige-pgallery-image-enter-active,
  .prestige-pgallery-image-leave-active { transition-duration: 0.01ms; }
}
</style>
