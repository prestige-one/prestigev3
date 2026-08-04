<template>
  <div class="pnav" :class="{ opened: isOpen }" :aria-hidden="!isOpen">
    <div class="pnav__overlay" @click="$emit('close')" />

    <div class="pnav__panel">
      <div class="pnav__bar">
        <nuxt-link href="/" class="pnav__logo" @click="$emit('close')">
          <img src="/assets/images/v3/prestigeone_logo_oneline_white-hr.svg" alt="Prestige One" width="175">
        </nuxt-link>
        <button class="pnav__close" :aria-label="$t('sh.closeMenu')" @click="$emit('close')">
          <span /><span />
        </button>
      </div>

      <div class="pnav__scroll">
        <!-- primary menu 01–06 -->
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
                <span class="pnav__label">{{ navKeys[i] ? $t(navKeys[i]) : item.title }}</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>

        <!-- quick links -->
        <ul class="pnav__quick">
          <li v-for="q in quickLinks" :key="q.key">
            <nuxt-link :to="q.to" @click="$emit('close')">{{ $t(q.key) }}</nuxt-link>
          </li>
        </ul>

        <!-- contact -->
        <div class="pnav__contact">
          <span class="pnav__cheading">{{ $t('footer.brand') }}</span>
          <a href="tel:80077378443" class="pnav__crow">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="2" width="12" height="20" rx="3"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
            <span>800 PRESTIGE / 800 77378443</span>
          </a>
          <a href="mailto:enquiries@prestigeone.ae" class="pnav__crow">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            <span>enquiries@prestigeone.ae</span>
          </a>
          <div class="pnav__crow">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            <span>{{ $t('sh.address') }}</span>
          </div>
        </div>

        <!-- follow us -->
        <div class="pnav__follow">
          <span class="pnav__cheading">{{ $t('footer.followUs') }}</span>
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
import { primaryNav } from "../../data/menu-data-prestige";

const props = defineProps<{ isOpen: boolean }>();
defineEmits<{ close: [] }>();

// primaryNav labels mapped by index to the shared nav.* translation keys.
const navKeys = [
  "nav.home",
  "nav.about",
  "nav.projects",
  "nav.destinations",
  "nav.brokerregistration",
  "nav.contact",
];

const quickLinks = [
  { key: "sh.brokerRegistration", to: "/broker-registration" },
  { key: "sh.constructionUpdates", to: "/construction-updates" },
  { key: "sh.projectDocuments", to: "/project-documents" },
  { key: "sh.pressRelease", to: "/press-release" },
  { key: "sh.contactUs", to: "/contact-us" },
];

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
  width: min(500px, 100%);
  background: rgba(8, 8, 10, 0.97);
  backdrop-filter: blur(26px);
  -webkit-backdrop-filter: blur(26px);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  padding: 24px clamp(22px, 4vw, 40px) 0;
  transform: translateX(100%);
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.pnav.opened .pnav__panel { transform: translateX(0); }

.pnav__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.pnav__close {
  position: relative;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background: transparent;
  transition: 0.3s;
  flex: 0 0 auto;
}
.pnav__close:hover { background: rgba(255, 255, 255, 0.08); transform: rotate(90deg); }
.pnav__close span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 1.5px;
  background: #fff;
}
.pnav__close span:first-child { transform: translate(-50%, -50%) rotate(45deg); }
.pnav__close span:last-child { transform: translate(-50%, -50%) rotate(-45deg); }

.pnav__scroll {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0 34px;
  scrollbar-width: thin;
}
.pnav__scroll::-webkit-scrollbar { width: 5px; }
.pnav__scroll::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.14); border-radius: 3px; }

/* primary menu */
.pnav__nav ul { list-style: none; margin: 0; padding: 0; }
.pnav__item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: calc(0.05s * var(--i) + 0.15s);
}
.pnav.opened .pnav__item { opacity: 1; transform: translateY(0); }
.pnav__item a {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 6px 0;
  color: #f2f2f2;
  transition: color 0.3s ease, padding-left 0.3s ease;
}
.pnav__item a:hover { color: #fff; padding-left: 8px; }
.pnav__num {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.32);
  font-variant-numeric: tabular-nums;
}
.pnav__label {
  font-family: "Google Sans", sans-serif;
  font-size: clamp(17px, 5vw, 17px);
  font-weight: 400;
  line-height: 1.1;
}

/* quick / utility links */
.pnav__quick {
  list-style: none;
  margin: 22px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 22px;
}
.pnav__quick a {
  font-size: 13px;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.55);
  transition: color 0.25s ease;
}
.pnav__quick a:hover { color: #fff; }

/* thumbnail groups */
.pnav__group { margin-top: 30px; }
.pnav__gtitle {
  display: block;
  margin-bottom: 14px;
  font-size: 11px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
}
.pnav__cards { list-style: none; margin: 0; padding: 0; }
.pnav__cards a {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 7px 0;
  color: #eaeaea;
  transition: color 0.25s ease;
}
.pnav__cards a:hover { color: #fff; }
.pnav__thumb {
  flex: 0 0 auto;
  width: 58px;
  height: 44px;
  border-radius: 6px;
  overflow: hidden;
  background: #16161a;
}
.pnav__thumb--wide { width: 74px; height: 50px; }
.pnav__thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease; }
.pnav__cards a:hover .pnav__thumb img { transform: scale(1.08); }
.pnav__cname { font-size: 15px; line-height: 1.3; }

/* contact + follow */
.pnav__contact { margin-top: 34px; }
.pnav__cheading {
  display: block;
  margin-bottom: 16px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: #fff;
}
.pnav__crow {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 7px 0;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.25s ease;
}
.pnav__crow svg { flex: 0 0 auto; margin-top: 2px; color: rgba(255, 255, 255, 0.5); }
a.pnav__crow:hover { color: #fff; }

.pnav__follow { margin-top: 30px; }
.pnav__social { list-style: none; display: flex; gap: 12px; margin: 0; padding: 0; }
.pnav__social a {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.8);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.25s ease, background 0.25s ease, transform 0.25s ease;
}
.pnav__social a:hover { color: #fff; background: rgba(255, 255, 255, 0.08); transform: translateY(-2px); }

@media (prefers-reduced-motion: reduce) {
  .pnav__panel, .pnav__item, .pnav__overlay { transition-duration: 0.01ms; }
}
</style>
