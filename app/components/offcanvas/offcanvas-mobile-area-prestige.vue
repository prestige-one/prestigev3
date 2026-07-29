<template>
  <div class="pnav" :class="{ opened: isOpen }" :aria-hidden="!isOpen">
    <div class="pnav__overlay" @click="$emit('close')" />

    <div class="pnav__panel">
      <!-- ambient featured image -->
      <div class="pnav__ambient" :style="{ backgroundImage: `url(${featured})` }" />

      <div class="pnav__bar">
        <nuxt-link href="/" class="pnav__logo" @click="$emit('close')">
          <img src="/assets/images/v3/prestigeone_logo_oneline_white-hr.svg" alt="Prestige One" width="185">
        </nuxt-link>
        <button class="pnav__close" aria-label="Close menu" @click="$emit('close')">
          <span /><span />
        </button>
      </div>

      <nav class="pnav__nav">
        <ul>
          <li
            v-for="(item, i) in primaryNav"
            :key="item.id"
            class="pnav__item"
            :style="{ '--i': i }"
          >
            <nuxt-link :to="item.link" @click="$emit('close')">
              <span class="pnav__num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="pnav__label">{{ item.title }}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>

      <div class="pnav__foot">
        <ul class="pnav__secondary">
          <li v-for="item in secondaryNav" :key="item.id" :style="{ '--i': item.id }">
            <nuxt-link :to="item.link" @click="$emit('close')">{{ item.title }}</nuxt-link>
          </li>
        </ul>
        <div class="pnav__meta">
          <a href="tel:80077378443" class="pnav__contact">800 PRESTIGE / 800 77378443</a>
          <a href="mailto:enquiries@prestigeone.ae" class="pnav__contact">enquiries@prestigeone.ae</a>
          <ul class="pnav__social">
            <li><a href="https://instagram.com/byprestigeone/" target="_blank" rel="noopener" aria-label="Instagram"><svg-social-instagram-two /></a></li>
            <li><a href="https://facebook.com/ByPrestigeOne/" target="_blank" rel="noopener" aria-label="Facebook"><svg-social-fb-three /></a></li>
            <li><a href="https://linkedin.com/company/byprestigeone/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg-social-linkedin-three /></a></li>
            <li><a href="https://wa.me/+971523412936" target="_blank" rel="noopener" aria-label="WhatsApp"><svg-social-whatsapp-three /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { primaryNav, secondaryNav, defaultNavMedia } from "../../data/menu-data-prestige";

const props = defineProps<{ isOpen: boolean }>();
defineEmits<{ close: [] }>();

const featured = defaultNavMedia.src;

watch(
  () => props.isOpen,
  (open) => {
    if (import.meta.client) document.body.style.overflow = open ? "hidden" : "";
  },
);
onBeforeUnmount(() => {
  if (import.meta.client) document.body.style.overflow = "";
});
</script>

<style scoped>
.pnav {
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
  visibility: hidden;
}
.pnav.opened { pointer-events: auto; visibility: visible; }

.pnav__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  opacity: 0;
  transition: opacity 0.5s ease;
}
.pnav.opened .pnav__overlay { opacity: 1; }

.pnav__panel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(560px, 100%);
  background: rgba(8, 8, 10, 0.96);
  backdrop-filter: blur(26px);
  -webkit-backdrop-filter: blur(26px);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  padding: 26px clamp(24px, 6vw, 54px) 34px;
  transform: translateX(100%);
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
}
.pnav.opened .pnav__panel { transform: translateX(0); }

.pnav__ambient {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.4), transparent 55%);
  -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.4), transparent 55%);
  pointer-events: none;
}

.pnav__bar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}
.pnav__close {
  position: relative;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background: transparent;
  transition: 0.3s;
}
.pnav__close:hover { background: rgba(255, 255, 255, 0.08); transform: rotate(90deg); }
.pnav__close span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 15px;
  height: 1.5px;
  background: #fff;
}
.pnav__close span:first-child { transform: translate(-50%, -50%) rotate(45deg); }
.pnav__close span:last-child { transform: translate(-50%, -50%) rotate(-45deg); }

.pnav__nav { position: relative; }
.pnav__nav ul { list-style: none; margin: 0; padding: 0; }
.pnav__item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: calc(0.06s * var(--i) + 0.2s);
}
.pnav.opened .pnav__item { opacity: 1; transform: translateY(0); }
.pnav__item a {
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 18px 0;
  color: #f2f2f2;
  transition: color 0.3s ease, padding-left 0.3s ease;
}
.pnav__item a:hover { color: #fff; padding-left: 8px; }
.pnav__num {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
}
.pnav__label {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(30px, 8vw, 46px);
  font-weight: 400;
  line-height: 1.05;
}

.pnav__foot { position: relative; margin-top: auto; padding-top: 34px; }
.pnav__secondary {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 24px;
  margin: 0 0 26px;
  padding: 0;
}
.pnav__secondary a {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.25s ease;
}
.pnav__secondary a:hover { color: var(--tp-common-gold, #d9b382); }
.pnav__meta { display: flex; flex-direction: column; gap: 10px; }
.pnav__contact {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.25s ease;
}
.pnav__contact:hover { color: #fff; }
.pnav__social { list-style: none; display: flex; gap: 16px; margin: 8px 0 0; padding: 0; }
.pnav__social a { color: rgba(255, 255, 255, 0.7); display: inline-flex; transition: color 0.25s ease, transform 0.25s ease; }
.pnav__social a:hover { color: #fff; transform: translateY(-2px); }

@media (prefers-reduced-motion: reduce) {
  .pnav__panel, .pnav__item, .pnav__overlay { transition-duration: 0.01ms; }
}
</style>
