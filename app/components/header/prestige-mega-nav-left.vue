<template>
  <div class="lnv" @mouseleave="scheduleClose">
    <ul class="lnv__top">
      <li><nuxt-link :to="localePath('/')" @click="close">{{ $t('nav.home') }}</nuxt-link></li>

      <!-- ABOUT US -->
      <li class="lnv__has" :class="{ active: active === 'about' }" @mouseenter="open('about')">
        <nuxt-link :to="localePath('/about-us')" @click="close">{{ $t('nav.about') }}</nuxt-link>
        <div
          class="lnv__dd"
          :class="{ open: active === 'about' }"
          @mouseenter="cancelClose"
          @mouseleave="scheduleClose"
        >
          <ul class="lnv__list">
            <li v-for="a in aboutLinks" :key="a.key">
              <nuxt-link :to="localePath(a.to)" @click="close">{{ $t(a.key) }}</nuxt-link>
            </li>
          </ul>
        </div>
      </li>

      <!-- PROJECTS -->
      <li class="lnv__has" :class="{ active: active === 'projects' }" @mouseenter="open('projects')">
        <nuxt-link :to="localePath('/projects')" @click="close">{{ $t('nav.projects') }}</nuxt-link>
        <div
          class="lnv__dd lnv__dd--rich"
          :class="{ open: active === 'projects' }"
          @mouseenter="cancelClose"
          @mouseleave="scheduleClose"
        >
          <span class="lnv__label">{{ $t('menu.featuredProjects') }}</span>
          <ul class="lnv__cards">
            <li v-for="p in featuredProjects" :key="p.slug">
              <nuxt-link :to="`/projects/${p.slug}`" class="lnv__card" @click="close">
                <span class="lnv__thumb"><img :src="p.image" :alt="p.title" loading="lazy"></span>
                <span class="lnv__cardname">{{ pName(p) }}</span>
              </nuxt-link>
            </li>
          </ul>
          <nuxt-link :to="localePath('/projects')" class="lnv__viewall" @click="close">{{ $t('cta.viewAllProjects') }} →</nuxt-link>
        </div>
      </li>

      <!-- DESTINATIONS -->
      <li class="lnv__has" :class="{ active: active === 'destinations' }" @mouseenter="open('destinations')">
        <nuxt-link :to="localePath('/destinations')" @click="close">{{ $t('nav.destinations') }}</nuxt-link>
        <div
          class="lnv__dd lnv__dd--rich"
          :class="{ open: active === 'destinations' }"
          @mouseenter="cancelClose"
          @mouseleave="scheduleClose"
        >
          <span class="lnv__label">{{ $t('menu.ourDestinations') }}</span>
          <ul class="lnv__cards">
            <li v-for="d in featuredDestinations" :key="d.slug">
              <nuxt-link :to="`/destinations/${d.slug}`" class="lnv__card" @click="close">
                <span class="lnv__thumb"><img :src="d.image" :alt="d.name" loading="lazy"></span>
                <span class="lnv__cardname">{{ dName(d) }}</span>
              </nuxt-link>
            </li>
          </ul>
          <nuxt-link :to="localePath('/destinations')" class="lnv__viewall" @click="close">{{ $t('cta.viewAllDestinations') }} →</nuxt-link>
        </div>
      </li>

      <li><nuxt-link :to="localePath('/virtual-tour')" @click="close">{{ $t('nav.virtualTour') }}</nuxt-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { destinations } from "~/data/destinations-data";
import { getAllProjects } from "~/data/projects";

const localePath = useLocalePath();
const { pName, dName } = useLocalizedNames();

const active = ref<"about" | "projects" | "destinations" | null>(null);
let closeTimer: ReturnType<typeof setTimeout> | null = null;

const menuProjects = getAllProjects().filter((p) => p.slug !== "vista-hub");
// featured NEW launches (branded / current) - 6 for the compact dropdown
const FEATURED_SLUGS = [
  "fauchon-residences-by-prestige-one",
  "hilton-residences-dubai-maritime-city",
  "sanctuary-residences-by-prestige-one",
  "golf-residences-by-prestige-one",
  "seaside-by-prestige-one",
  "the-boulevard-by-prestige-one",
];
const projectBySlug = new Map(menuProjects.map((p) => [p.slug, p]));
const featuredProjects = FEATURED_SLUGS.map((s) => projectBySlug.get(s)).filter(
  (p): p is NonNullable<typeof p> => Boolean(p),
);
const featuredDestinations = destinations.slice(0, 6);

const aboutLinks = [
  { key: "menu.ourStory", to: "/about-us#our-story" },
  { key: "menu.visionMission", to: "/about-us#vision" },
  { key: "menu.ourLeadership", to: "/about-us#leadership" },
  { key: "menu.ourMilestones", to: "/about-us#milestones" },
];

function open(key: "about" | "projects" | "destinations") {
  cancelClose();
  active.value = key;
}
function cancelClose() {
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
}
function scheduleClose() {
  cancelClose();
  closeTimer = setTimeout(() => {
    active.value = null;
  }, 300);
}
function close() {
  cancelClose();
  active.value = null;
}
onBeforeUnmount(cancelClose);
</script>

<style scoped>
.lnv { position: relative; }
/* left-aligned top row */
.lnv__top {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: clamp(16px, 1.8vw, 30px);
  margin: 0;
  padding: 0;
  list-style: none;
}
.lnv__top > li > a,
.lnv__top > li > button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: transparent;
  color: #fff;
  font-size: 15px;
  letter-spacing: 0.01em;
  white-space: nowrap;
  padding: 6px 0;
  transition: opacity 0.25s ease;
}
.lnv__top > li:hover > a,
.lnv__top > li:hover > button,
.lnv__top > li.active > button { opacity: 0.75; }
.lnv__caret {
  width: 7px;
  height: 7px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(45deg) translateY(-1px);
  transition: transform 0.3s ease;
}
.lnv__has { position: relative; }
.lnv__has.active .lnv__caret { transform: rotate(-135deg); }

/* the dark rounded dropdown panel - left-aligned, matches the design */
.lnv__dd {
  position: absolute;
  top: calc(100% + 16px);
  /* pull left by the panel + item padding so the submenu TEXT lines up
     directly under the parent menu label (not indented from it) */
  left: -24px;
  min-width: 230px;
  margin: 0;
  padding: 10px;
  background: rgba(8, 8, 10, 0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.25s;
  z-index: 40;
  text-align: left;
}
.lnv__dd.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
/* transparent hover bridge up to the nav item (kept inside the panel's own
   stacking scope so it never overlays sibling menu items) */
.lnv__dd::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -18px;
  height: 18px;
}

/* simple text list (About) */
.lnv__list { list-style: none; margin: 0; padding: 0; }
.lnv__list a {
  display: block;
  padding: 11px 14px;
  border-radius: 9px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 15px;
  white-space: nowrap;
  transition: color 0.2s ease, background 0.2s ease;
}
.lnv__list a:hover { color: #fff; background: rgba(255, 255, 255, 0.06); }

/* rich project / destination panel */
.lnv__dd--rich { min-width: 320px; }
.lnv__label {
  display: block;
  padding: 6px 14px 10px;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
}
.lnv__cards { list-style: none; margin: 0; padding: 0; }
.lnv__card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 10px;
  color: #fff;
  transition: background 0.2s ease;
}
.lnv__card:hover { background: rgba(255, 255, 255, 0.06); }
.lnv__thumb {
  flex: 0 0 auto;
  width: 52px;
  height: 40px;
  border-radius: 7px;
  overflow: hidden;
  background: #16161a;
}
.lnv__thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.9s ease; }
.lnv__card:hover .lnv__thumb img { transform: scale(1.08); }
.lnv__cardname {
  font-size: 14.5px;
  line-height: 1.25;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
}
.lnv__card:hover .lnv__cardname { color: var(--tp-common-gold, #ffffff); }

.lnv__viewall {
  display: block;
  margin: 8px 6px 4px;
  padding: 11px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  text-align: center;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
  transition: background 0.25s ease, color 0.25s ease;
}
.lnv__viewall:hover { background: var(--tp-common-gold, #ffffff); color: #0b0b0d; }
</style>
