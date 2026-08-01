<template>
  <div class="pmn" @mouseleave="scheduleClose">
    <ul class="pmn__top">
      <li><nuxt-link to="/" @click="close">Home</nuxt-link></li>
      <li class="pmn__has-dd" :class="{ active: active === 'about' }" @mouseenter="open('about')">
        <button type="button">About Us <span class="pmn__caret" /></button>
        <ul class="pmn__dd" :class="{ open: active === 'about' }">
          <li v-for="a in aboutLinks" :key="a.label">
            <nuxt-link :to="a.to" @click="close">{{ a.label }}</nuxt-link>
          </li>
        </ul>
      </li>
      <li :class="{ active: active === 'projects' }" @mouseenter="open('projects')">
        <button type="button">Projects <span class="pmn__caret" /></button>
      </li>
      <li :class="{ active: active === 'destinations' }" @mouseenter="open('destinations')">
        <button type="button">Destinations <span class="pmn__caret" /></button>
      </li>
      <li><nuxt-link to="/virtual-tour" @click="close">Virtual Tour</nuxt-link></li>
    </ul>

    <!-- full-width mega dropzone (teleported to body so it escapes the
         header's backdrop-filter containing block and spans edge-to-edge) -->
    <client-only>
    <teleport to="body">
    <div
      class="pmn__zone"
      :class="{ open: active === 'projects' || active === 'destinations' }"
      data-pmn-zone
      @mouseenter="cancelClose"
      @mouseleave="scheduleClose"
    >
      <div class="pmn__panel container container-1430">

        <!-- PROJECTS -->
        <div v-show="active === 'projects'" class="pmn__grid">
          <div class="pmn__col pmn__col--filters">
            <span class="pmn__label">By location</span>
            <ul class="pmn__chiplist">
              <li v-for="d in menuDestinations" :key="d.slug">
                <nuxt-link :to="`/destinations/${d.slug}`" @click="close">{{ d.name }}</nuxt-link>
              </li>
            </ul>
            <span class="pmn__label mt">By type</span>
            <ul class="pmn__chiplist">
              <li v-for="t in projectTypes" :key="t.label">
                <nuxt-link :to="t.to" @click="close">{{ t.label }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="pmn__col pmn__col--cards">
            <span class="pmn__label">New projects</span>
            <div class="pmn__cards pmn__cards--all">
              <nuxt-link
                v-for="p in newProjects"
                :key="p.slug"
                :to="`/projects/${p.slug}`"
                class="pmn__card"
                @click="close"
              >
                <span class="pmn__card-thumb"><img :src="p.image" :alt="p.title" loading="lazy"></span>
                <span class="pmn__card-body">
                  <span class="pmn__card-title">{{ p.title.split(' by ')[0] }}</span>
                  <span class="pmn__card-loc">{{ p.location }}</span>
                </span>
              </nuxt-link>
            </div>
            <template v-if="upcomingProjects.length">
              <span class="pmn__label mt">Upcoming</span>
              <div class="pmn__cards">
                <nuxt-link
                  v-for="p in upcomingProjects"
                  :key="p.slug"
                  :to="`/projects/${p.slug}`"
                  class="pmn__card"
                  @click="close"
                >
                  <span class="pmn__card-thumb"><img :src="p.image" :alt="p.title" loading="lazy"></span>
                  <span class="pmn__card-body">
                    <span class="pmn__card-title">{{ p.title.split(' by ')[0] }}</span>
                    <span class="pmn__card-loc">{{ p.location }}</span>
                  </span>
                </nuxt-link>
              </div>
            </template>
          </div>
          <div class="pmn__col pmn__col--feature">
            <nuxt-link to="/projects" class="pmn__feature" @click="close">
              <img src="/assets/project-featured-images/sliders/hilton-1.webp" alt="Prestige One developments">
              <img src="/assets/images/v3/slogan.png" alt="The Heart of Every Location" class="pmn__feature-slogan">
              <span class="pmn__feature-cta">Explore all projects →</span>
            </nuxt-link>
          </div>
        </div>

        <!-- DESTINATIONS -->
        <div v-show="active === 'destinations'" class="pmn__grid">
          <div class="pmn__col pmn__col--intro">
            <img src="/assets/images/v3/slogan.png" alt="The Heart of Every Location" class="pmn__intro-slogan">
            <p>From waterfront districts to vibrant communities - explore the destinations where Prestige One is shaping the next chapter of luxury living.</p>
          </div>
          <div class="pmn__col pmn__col--dcards">
            <span class="pmn__label">Our destinations</span>
            <div class="pmn__dgrid">
              <nuxt-link
                v-for="d in menuDestinations"
                :key="d.slug"
                :to="`/destinations/${d.slug}`"
                class="pmn__card"
                @click="close"
              >
                <span class="pmn__card-thumb"><img :src="d.image" :alt="d.name" loading="lazy"></span>
                <span class="pmn__card-body">
                  <span class="pmn__card-title">{{ d.name }}</span>
                  <span class="pmn__card-desc">{{ d.intro }}</span>
                </span>
              </nuxt-link>
            </div>
            <nuxt-link to="/destinations" class="pmn__viewall" @click="close">View all destinations →</nuxt-link>
          </div>
          <div class="pmn__col pmn__col--feature">
            <nuxt-link to="/destinations" class="pmn__feature" @click="close">
              <img src="/assets/images/v2/our-destinations/dubai-Islands.webp" alt="Prestige One destinations">
              <img src="/assets/images/v3/slogan.png" alt="The Heart of Every Location" class="pmn__feature-slogan">
              <span class="pmn__feature-cta">Explore all destinations →</span>
            </nuxt-link>
          </div>
        </div>

        <!-- shared utility bar -->
        <div v-show="active === 'projects' || active === 'destinations'" class="pmn__util">
          <div class="pmn__util-links">
            <nuxt-link to="/projects" @click="close">Our Projects</nuxt-link>
            <nuxt-link to="/construction-updates" @click="close">Construction Updates</nuxt-link>
            <nuxt-link to="/broker-registration" @click="close">Broker Registration</nuxt-link>
          </div>
          <div class="pmn__util-contact">
            <a href="mailto:enquiries@prestigeone.ae">enquiries@prestigeone.ae</a>
            <a href="tel:80077378443">800 PRESTIGE / 800 77378443</a>
          </div>
        </div>
      </div>
    </div>
    </teleport>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { destinations } from "~/data/destinations-data";
import { getAllProjects } from "~/data/projects";

const active = ref<"about" | "projects" | "destinations" | null>(null);
let closeTimer: ReturnType<typeof setTimeout> | null = null;

// Vista Hub is excluded from the menu per request.
const menuProjects = getAllProjects().filter((p) => p.slug !== "vista-hub");
// Featured NEW launches - curated & ordered so the mega leads with Prestige
// One's flagship current projects (branded / now-selling), NOT the older stock
// entries. The full catalogue still lives on /projects ("explore all").
const NEW_PROJECT_SLUGS = [
  "fauchon-residences-by-prestige-one",
  "hilton-residences-dubai-maritime-city",
  "sanctuary-residences-by-prestige-one",
  "golf-residences-by-prestige-one",
  "seaside-by-prestige-one",
  "seascape-villa",
  "waterway-by-prestige-one",
  "berkeley-square-north",
  "berkeley-square-south",
];
const projectBySlug = new Map(menuProjects.map((p) => [p.slug, p]));
const newProjects = NEW_PROJECT_SLUGS.map((s) => projectBySlug.get(s)).filter(
  (p): p is NonNullable<typeof p> => Boolean(p),
);
const upcomingProjects = menuProjects.filter((p) => p.category === "upcoming");
// destinations menu: show a trimmed set of 9 (rest via "view all")
const menuDestinations = destinations.slice(0, 9);

const aboutLinks = [
  { label: "Our Story", to: "/about-us#our-story" },
  { label: "Vision & Mission", to: "/about-us#vision" },
  { label: "Our Leadership", to: "/about-us#leadership" },
  { label: "Our Milestones", to: "/about-us#milestones" },
];

const projectTypes = [
  { label: "Residential", to: "/projects?category=residential" },
  { label: "Commercial", to: "/projects?category=commercial" },
  { label: "Upcoming", to: "/projects?category=upcoming" },
  { label: "Branded Residences", to: "/projects" },
  { label: "Waterfront", to: "/projects" },
  { label: "Villas", to: "/projects" },
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
  }, 320);
}
function close() {
  cancelClose();
  active.value = null;
}
onBeforeUnmount(cancelClose);
</script>

<style scoped>
.pmn { position: relative; }
.pmn__top {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: clamp(16px, 1.8vw, 30px);
  margin: 0;
  padding: 0;
  list-style: none;
}
.pmn__top > li > a,
.pmn__top > li > button {
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
.pmn__top > li:hover > a,
.pmn__top > li:hover > button,
.pmn__top > li.active > button { opacity: 0.75; }
.pmn__caret {
  width: 7px;
  height: 7px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(45deg) translateY(-1px);
  transition: transform 0.3s ease;
}
.pmn__top > li.active .pmn__caret { transform: rotate(-135deg); }

/* simple compact dropdown (About Us) */
.pmn__has-dd { position: relative; }
.pmn__dd {
  position: absolute;
  top: calc(100% + 16px);
  /* pull left by the item padding so the submenu text lines up under the
     parent menu label instead of being indented from it */
  left: -22px;
  min-width: 220px;
  margin: 0;
  padding: 10px 0;
  list-style: none;
  background: rgba(8, 8, 10, 0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.25s;
  z-index: 30;
}
.pmn__dd.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
/* transparent hover bridge up to the nav item */
.pmn__dd::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -18px;
  height: 18px;
}
.pmn__dd a {
  display: block;
  padding: 10px 22px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 15px;
  white-space: nowrap;
  transition: color 0.2s ease, background 0.2s ease;
}
.pmn__dd a:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
}

/* full-width dropzone */
.pmn__zone {
  position: fixed;
  top: 92px;
  left: 0;
  right: 0;
  z-index: 15;
  background: rgba(8, 8, 10, 0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s;
}
/* transparent hover bridge upward to the header, so moving the mouse from a
   nav item down to the panel never crosses a dead gap that drops the hover.
   IMPORTANT: pointer-events:none - the panel is teleported to <body> and paints
   above the header, so a hit-testable bridge here would sit on top of the nav
   buttons and stop you hovering a sibling menu (Projects ⇄ Destinations). The
   320ms close delay already bridges the gap, so the strip stays purely visual. */
.pmn__zone::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -40px;
  height: 40px;
  pointer-events: none;
}
.pmn__zone:not(.open)::before {
  display: none;
}
.pmn__zone.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.pmn__panel { padding: 40px 0 26px; }

.pmn__label {
  display: block;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
  margin-bottom: 18px;
}
.pmn__label.mt { margin-top: 28px; }

/* grid layout for projects/destinations megas */
.pmn__grid {
  display: grid;
  grid-template-columns: 1fr 2.1fr 1.1fr;
  gap: 40px;
}
.pmn__col--intro p {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.62);
}
.pmn__intro-slogan { width: 190px; height: auto; opacity: 0.9; margin-bottom: 22px; }

.pmn__chiplist { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px 18px; }
.pmn__chiplist a {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.72);
  transition: color 0.25s ease;
}
.pmn__chiplist a:hover { color: #fff; }

.pmn__cards { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 24px; }
.pmn__cards--all {
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 12px 20px;
  max-height: 340px;
  overflow-y: auto;
  padding-right: 8px;
  scrollbar-width: thin;
}
.pmn__cards--all::-webkit-scrollbar { width: 5px; }
.pmn__cards--all::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 3px; }
.pmn__label em { font-style: normal; color: rgba(255, 255, 255, 0.4); }
.pmn__dgrid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px 22px; }
.pmn__card { display: flex; align-items: center; gap: 12px; color: #fff; }
.pmn__card-thumb {
  flex: 0 0 auto;
  width: 62px;
  height: 46px;
  border-radius: 5px;
  overflow: hidden;
  background: #16161a;
}
.pmn__card-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.9s ease; }
.pmn__card:hover .pmn__card-thumb img { transform: scale(1.08); }
.pmn__card-body { display: flex; flex-direction: column; min-width: 0; }
.pmn__card-title {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 14px;
  color: #fff;
  line-height: 1.2;
}
/* destination cards keep the larger title */
.pmn__dgrid .pmn__card-title { font-size: 17px; }
.pmn__card-loc,
.pmn__card-desc {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 1.4;
}
.pmn__card-loc { color: var(--tp-common-gold, #ffffff); }
.pmn__card:hover .pmn__card-title { color: var(--tp-common-gold, #ffffff); }

.pmn__viewall {
  display: inline-block;
  margin-top: 22px;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
}

/* featured image column */
.pmn__feature {
  position: relative;
  display: block;
  height: 100%;
  min-height: 250px;
  border-radius: 8px;
  overflow: hidden;
}
.pmn__feature > img:first-child { width: 100%; height: 100%; object-fit: cover; }
.pmn__feature::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
}
.pmn__feature-slogan { position: absolute; left: 20px; bottom: 54px; width: 150px; z-index: 2; }
.pmn__feature-cta {
  position: absolute;
  left: 20px;
  bottom: 22px;
  z-index: 2;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
}

/* about */
.pmn__about { display: grid; grid-template-columns: 1.4fr 1fr; gap: 40px; }
.pmn__about-links { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 30px; }
.pmn__about-links a { display: block; padding: 14px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
.pmn__about-t {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 22px;
  color: #fff;
}
.pmn__about-d { display: block; font-size: 13px; color: rgba(255, 255, 255, 0.5); margin-top: 3px; }
.pmn__about-links a:hover .pmn__about-t { color: var(--tp-common-gold, #ffffff); }
.pmn__about-feature { position: relative; border-radius: 8px; overflow: hidden; min-height: 220px; }
.pmn__about-feature img { width: 100%; height: 100%; object-fit: cover; }
.pmn__feature-cap {
  position: absolute;
  left: 18px;
  bottom: 16px;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  z-index: 2;
}

/* utility bar */
.pmn__util {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.pmn__util-links { display: flex; flex-wrap: wrap; gap: 24px; }
.pmn__util-links a,
.pmn__util-contact a {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.25s ease;
}
.pmn__util-links a:hover,
.pmn__util-contact a:hover { color: #fff; }
.pmn__util-contact { display: flex; flex-wrap: wrap; gap: 24px; }

@media (max-width: 1199.98px) {
  .pmn__zone { display: none; }
}
</style>
