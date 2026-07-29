<template>
  <div class="prestige-nav" :class="{ opened: isOpen }" aria-hidden="!isOpen">
    <!-- click-to-close backdrop -->
    <div class="prestige-nav__overlay" @click="$emit('close')" />

    <div class="prestige-nav__inner">
      <!-- top bar: logo + close -->
      <div class="prestige-nav__bar">
        <nuxt-link href="/" class="prestige-nav__logo" @click="$emit('close')">
          <img src="/assets/images/v3/prestigeone_logo_oneline_white-hr.svg" alt="Prestige One" width="200">
        </nuxt-link>
        <button class="prestige-nav__close" aria-label="Close menu" @click="$emit('close')">
          <span /><span />
        </button>
      </div>

      <div class="prestige-nav__body">
        <!-- LEFT: navigation -->
        <div class="prestige-nav__list">
          <nav>
            <ul class="prestige-nav__primary">
              <li
                v-for="(item, i) in primaryNav"
                :key="item.id"
                class="prestige-nav__item"
                :style="{ '--i': i }"
                @mouseenter="onHover(item)"
                @focusin="onHover(item)"
              >
                <nuxt-link :to="item.link" class="prestige-nav__link" @click="$emit('close')">
                  <span class="prestige-nav__num">{{ String(i + 1).padStart(2, '0') }}</span>
                  <span class="prestige-nav__label">{{ item.title }}</span>
                </nuxt-link>
                <ul v-if="item.submenus" class="prestige-nav__sub">
                  <li v-for="sub in item.submenus" :key="sub.title">
                    <nuxt-link :to="sub.link" @click="$emit('close')">{{ sub.title }}</nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <ul class="prestige-nav__secondary">
            <li v-for="item in secondaryNav" :key="item.id">
              <nuxt-link :to="item.link" @click="$emit('close')">{{ item.title }}</nuxt-link>
            </li>
          </ul>

          <div class="prestige-nav__meta">
            <ul class="prestige-nav__contact">
              <li>
                <a href="tel:80077378443">
                  <span class="prestige-nav__ico"><svg-phone-one /></span>
                  <span>800 PRESTIGE / 800 77378443</span>
                </a>
              </li>
              <li>
                <a href="mailto:enquiries@prestigeone.ae">
                  <span class="prestige-nav__ico"><svg-email-two /></span>
                  <span>enquiries@prestigeone.ae</span>
                </a>
              </li>
              <li>
                <div class="prestige-nav__addr">
                  <span class="prestige-nav__ico"><svg-location-one /></span>
                  <span>Office 1602-1604, Marina Plaza, Dubai Marina, Dubai, UAE.</span>
                </div>
              </li>
            </ul>
            <ul class="prestige-nav__social">
              <li><a href="https://instagram.com/byprestigeone/" target="_blank" rel="noopener" aria-label="Instagram"><svg-social-instagram-two /></a></li>
              <li><a href="https://facebook.com/ByPrestigeOne/" target="_blank" rel="noopener" aria-label="Facebook"><svg-social-fb-three /></a></li>
              <li><a href="https://linkedin.com/company/byprestigeone/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg-social-linkedin-three /></a></li>
              <li><a href="https://wa.me/+971523412936" target="_blank" rel="noopener" aria-label="WhatsApp"><svg-social-whatsapp-three /></a></li>
            </ul>
          </div>
        </div>

        <!-- RIGHT: reveal media panel (double-buffered crossfade) -->
        <div class="prestige-nav__media">
          <div
            v-for="key in (['a', 'b'] as const)"
            :key="key"
            class="prestige-nav__media-layer"
            :class="{ active: active === key }"
          >
            <video
              v-if="layers[key].type === 'video' && layers[key].src"
              class="prestige-nav__media-el"
              :src="layers[key].src"
              autoplay
              muted
              loop
              playsinline
            />
            <img
              v-else-if="layers[key].src"
              class="prestige-nav__media-el"
              :src="layers[key].src"
              :alt="layers[key].caption || ''"
            >
          </div>
          <div class="prestige-nav__media-veil" />
          <!-- keyed span (no <transition> wrapper) remounts cleanly and plays
               its CSS entry animation — robust even when not compositing -->
          <span :key="activeCaption" class="prestige-nav__media-caption">{{ activeCaption }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  primaryNav,
  secondaryNav,
  defaultNavMedia,
  type NavItem,
  type NavMedia,
} from "../data/menu-data-prestige";

const props = defineProps<{ isOpen: boolean }>();
const emit = defineEmits<{ close: [] }>();

// double-buffer: two media layers, we flip which one is active so the old
// one fades out while the new fades in — no orphaned/stacked DOM nodes.
const layers = reactive<{ a: NavMedia; b: NavMedia }>({
  a: { ...defaultNavMedia },
  b: { type: "image", src: "", caption: "" },
});
const active = ref<"a" | "b">("a");
const activeCaption = computed(() => layers[active.value].caption);

function onHover(item: NavItem) {
  if (!item.media) return;
  if (item.media.src === layers[active.value].src) return; // already showing
  const next = active.value === "a" ? "b" : "a";
  layers[next] = { ...item.media };
  active.value = next;
}

// reset to the featured media each time the menu re-opens
watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      layers.a = { ...defaultNavMedia };
      layers.b = { type: "image", src: "", caption: "" };
      active.value = "a";
    }
    if (import.meta.client) {
      document.body.style.overflow = open ? "hidden" : "";
    }
  },
);

function onKey(e: KeyboardEvent) {
  if (e.key === "Escape" && props.isOpen) emit("close");
}

onMounted(() => window.addEventListener("keydown", onKey));
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKey);
  if (import.meta.client) document.body.style.overflow = "";
});
</script>

<style scoped>
.prestige-nav {
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
  visibility: hidden;
}
.prestige-nav.opened {
  pointer-events: auto;
  visibility: visible;
}

.prestige-nav__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.5s ease;
}
.prestige-nav.opened .prestige-nav__overlay {
  opacity: 1;
}

/* the sliding panel — full-screen glass */
.prestige-nav__inner {
  position: absolute;
  inset: 0;
  background: rgba(8, 8, 10, 0.94);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  transform: translateY(-2%);
  opacity: 0;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
  display: flex;
  flex-direction: column;
}
.prestige-nav.opened .prestige-nav__inner {
  transform: translateY(0);
  opacity: 1;
}

.prestige-nav__bar {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px clamp(20px, 5vw, 90px);
}
.prestige-nav__close {
  position: relative;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background: transparent;
  transition: 0.3s;
}
.prestige-nav__close:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: rotate(90deg);
}
.prestige-nav__close span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 1.5px;
  background: #fff;
}
.prestige-nav__close span:first-child { transform: translate(-50%, -50%) rotate(45deg); }
.prestige-nav__close span:last-child { transform: translate(-50%, -50%) rotate(-45deg); }

.prestige-nav__body {
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: 1fr 45%;
  min-height: 0;
}

/* LEFT column */
.prestige-nav__list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px clamp(20px, 5vw, 90px) 40px;
  overflow-y: auto;
}
.prestige-nav__primary {
  list-style: none;
  margin: 0 0 26px;
  padding: 0;
}
.prestige-nav__item {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: calc(0.06s * var(--i) + 0.15s);
}
.prestige-nav.opened .prestige-nav__item {
  opacity: 1;
  transform: translateY(0);
}
.prestige-nav__link {
  display: inline-flex;
  align-items: baseline;
  gap: 16px;
  color: #f4f4f4;
  line-height: 1.18;
  transition: color 0.3s ease, opacity 0.3s ease;
}
.prestige-nav__num {
  font-size: 13px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
}
.prestige-nav__label {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(34px, 5vw, 68px);
  font-weight: 400;
}
.prestige-nav__item:hover .prestige-nav__link { color: #fff; }
/* dim the others when hovering one */
.prestige-nav__primary:hover .prestige-nav__item:not(:hover) .prestige-nav__link { opacity: 0.4; }

.prestige-nav__sub {
  list-style: none;
  margin: 6px 0 0 40px;
  padding: 0;
  display: none;
  flex-wrap: wrap;
  gap: 6px 22px;
}
.prestige-nav__item:hover .prestige-nav__sub { display: flex; }
.prestige-nav__sub a {
  font-size: 13px;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.55);
  transition: color 0.25s ease;
}
.prestige-nav__sub a:hover { color: var(--tp-common-gold, #d9b382); }

.prestige-nav__secondary {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 28px;
  margin: 0 0 30px;
  padding: 20px 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.prestige-nav__secondary a {
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.25s ease;
}
.prestige-nav__secondary a:hover { color: #fff; }

.prestige-nav__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: auto;
}
.prestige-nav__contact { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
.prestige-nav__contact a,
.prestige-nav__addr {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  transition: color 0.25s ease;
}
.prestige-nav__contact a:hover { color: #fff; }
.prestige-nav__ico {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
}
.prestige-nav__social { list-style: none; display: flex; gap: 14px; margin: 0; padding: 0; }
.prestige-nav__social a {
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.25s ease, transform 0.25s ease;
  display: inline-flex;
}
.prestige-nav__social a:hover { color: #fff; transform: translateY(-2px); }

/* RIGHT media panel */
.prestige-nav__media {
  position: relative;
  overflow: hidden;
  background: #060608;
}
.prestige-nav__media-layer {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: scale(1.06);
  transition: opacity 0.6s ease, transform 1.6s ease;
  will-change: opacity, transform;
}
.prestige-nav__media-layer.active {
  opacity: 1;
  transform: scale(1);
}
.prestige-nav__media-el {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.prestige-nav__media-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.55) 100%);
}
.prestige-nav__media-caption {
  position: absolute;
  left: 28px;
  bottom: 24px;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  animation: navCapIn 0.45s ease both;
}
@keyframes navCapIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 991px) {
  .prestige-nav__body { grid-template-columns: 1fr; }
  .prestige-nav__media { display: none; }
  .prestige-nav__list { justify-content: flex-start; padding-top: 20px; }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-nav__inner,
  .prestige-nav__item,
  .prestige-nav__overlay { transition-duration: 0.01ms; }
}
</style>
