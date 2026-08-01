<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <!-- 1 · hero -->
            <prestige-page-hero
              eyebrow="About Us"
              title="Building homes people love"
              lead="Prestige One is a Dubai luxury developer with roots in a group founded in 1967 — nearly six decades of building trust, one landmark address at a time."
              image="/assets/images/v3/Built-on-Strong-Principles.webp"
            >
              <template #actions>
                <nuxt-link to="/projects" class="prestige-btn">View developments</nuxt-link>
                <nuxt-link to="/contact-us" class="prestige-btn prestige-btn--ghost">Get in touch</nuxt-link>
              </template>
            </prestige-page-hero>

            <!-- 2 · our story -->
            <div id="our-story" class="prestige-anchor">
              <prestige-feature-split
                eyebrow="Our Story"
                title="Nearly sixty years of building trust"
                image="/assets/images/v2/pages/core-values/quality.webp"
                :paragraphs="storyParagraphs"
                :points="storyPoints"
              />
            </div>
            <section class="prestige-section--tight prestige-about__trust">
              <div class="container container-1430 text-center">
                <span class="prestige-about__badge tp_fade_anim" data-delay=".2">
                  <span class="prestige-about__badge-star">★</span>
                  Rated 4.8 / 5 · 500+ reviews
                </span>
              </div>
            </section>

            <!-- 3 · counters -->
            <prestige-stat-counters :stats="counters" />

            <!-- 4 · our mission / vision -->
            <div id="vision" class="prestige-anchor">
              <prestige-feature-split
                eyebrow="Our Mission"
                title="Designed for real living"
                image="/assets/images/v3/Designed-for-Real-Living.webp"
                :paragraphs="missionParagraphs"
                :points="missionPoints"
                reverse
              />
            </div>

            <!-- 5 · our vision -->
            <prestige-feature-split
              eyebrow="Our Vision"
              title="A global perspective, a Dubai heart"
              image="/assets/images/v3/A-Global-Perspective.webp"
              :paragraphs="visionParagraphs"
              :points="visionPoints"
            />

            <!-- 6 · founder & CEO -->
            <section id="leadership" class="prestige-section prestige-about__ceo prestige-anchor">
              <div class="container container-1430">
                <div class="row align-items-center">
                  <div class="col-lg-5 mb-40">
                    <div class="prestige-about__ceo-media tp_fade_anim" data-delay=".2">
                      <img
                        src="/assets/images/v2/pages/Ajmal-CEO.webp"
                        alt="Ajmal Saifi, Founder & CEO of Prestige One"
                        loading="lazy"
                      >
                    </div>
                  </div>
                  <div class="col-lg-6 offset-lg-1">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Founder &amp; CEO</span>
                    <blockquote class="prestige-about__quote tp_fade_anim" data-delay=".3">
                      “Luxury is not defined by what is added, but by what is perfected.”
                    </blockquote>
                    <div class="prestige-prose tp_fade_anim" data-delay=".4" style="margin-top: 20px;">
                      <p>{{ ceoBio }}</p>
                    </div>
                    <p class="prestige-about__ceo-name tp_fade_anim" data-delay=".45">
                      Ajmal Saifi <span>— Founder &amp; CEO</span>
                    </p>
                    <div class="prestige-about__ceo-tiles tp_fade_anim" data-delay=".5">
                      <div v-for="tile in ceoTiles" :key="tile.label" class="prestige-about__ceo-tile">
                        <span class="prestige-about__ceo-tile-value">{{ tile.value }}</span>
                        <span class="prestige-about__ceo-tile-label">{{ tile.label }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- 7 · core values -->
            <section class="prestige-section prestige-section--tight prestige-about__values">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Our Values</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">
                  The principles behind every address
                </h2>
                <div class="row">
                  <div
                    v-for="value in coreValues"
                    :key="value.title"
                    class="col-xl-3 col-lg-3 col-md-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <div class="prestige-about__value">
                      <div class="prestige-about__value-media">
                        <img :src="value.image" :alt="value.title" loading="lazy">
                      </div>
                      <h3 class="prestige-about__value-title">{{ value.title }}</h3>
                      <p class="prestige-about__value-text">{{ value.text }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- 8 · statement band -->
            <prestige-statement-band
              eyebrow="Live in Prestige"
              text="We build homes people love living in. That's Prestige One."
              image="/assets/images/v3/Built-on-Strong-Principles.webp"
            />

            <!-- 9 · milestones -->
            <section id="milestones" class="prestige-section prestige-about__milestones prestige-anchor">
              <div class="container container-1430">
                <div class="row justify-content-center text-center mb-60">
                  <div class="col-xl-8">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Milestones</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">
                      A journey measured in landmarks
                    </h2>
                  </div>
                </div>
                <prestige-timeline :items="milestones" />
              </div>
            </section>

            <!-- 10 · closing CTA -->
            <prestige-cta-band
              eyebrow="Discover the portfolio"
              title="Come and see what we build"
              text="Explore our collection of residential and commercial landmarks across Dubai's most sought-after destinations, or speak with our team about what's coming next."
              image="/assets/images/v3/A-Global-Perspective.webp"
              primary-label="Get in touch"
              primary-to="/contact-us"
              secondary-label="View projects"
              secondary-to="/projects"
            />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
interface CounterItem {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

interface CoreValue {
  title: string;
  text: string;
  image: string;
}

interface CeoTile {
  value: string;
  label: string;
}

interface Milestone {
  year: string;
  title: string;
  text: string;
  image: string;
}

definePageMeta({ layout: false });

// About page — premium, credibility-rich rebuild.
useSeoMeta({
  title: "About Us | Prestige One",
  description:
    "Prestige One is a Dubai luxury developer, part of a group founded in 1967. Discover our story, mission and milestones — from Dubai Marina to branded residences with Hilton and FAUCHON.",
});

const storyParagraphs: string[] = [
  "Prestige One is a Dubai-based luxury real-estate developer, part of a family group founded in 1967. Nearly six decades of building across construction, hospitality and real estate give us an uncommon depth of expertise — and an even deeper sense of responsibility to the people who make our buildings their home.",
  "We entered Dubai's real-estate market in 2007, drawn by a city that shares our ambition. Since then we have shaped landmark residences across the emirate's most sought-after destinations, each conceived to hold its value and elevate the neighbourhood around it.",
  "That ambition is reflected in the company we keep. Through partnerships with globally recognised names such as Hilton and the storied Parisian maison FAUCHON, we blend world-class hospitality and heritage craftsmanship into homes that are unmistakably Dubai — and unmistakably ours.",
];

const storyPoints: string[] = [
  "A family group with heritage dating back to 1967",
  "Active in Dubai real estate since 2007",
  "Branded residences with Hilton and FAUCHON Paris",
];

const counters: CounterItem[] = [
  { value: 19, suffix: "+", label: "Years in Dubai real estate" },
  { value: 30, suffix: "+", label: "Projects in Dubai" },
  { value: 1, prefix: "AED ", suffix: "B+", label: "Invested in Dubai" },
  { value: 10, label: "Destinations across Dubai" },
];

const missionParagraphs: string[] = [
  "Our mission is simple to say and demanding to deliver: build homes people genuinely love living in. We start with how people actually live — studying the site, the light and the daily rhythm of a neighbourhood — and design around comfort, wellbeing and the quiet moments that make a house a home.",
  "Quality is never negotiable. We partner with leading architects, interior designers and contractors, and hold every material, finish and fit-out to a single uncompromising standard. The result is residences that feel considered on the first day and endure for decades.",
  "And we stay long after handover. Hospitality-grade service, thoughtful management and genuinely useful amenities mean residents don't just own a Prestige One home — they belong to a community that keeps giving back.",
];

const missionPoints: string[] = [
  "Human-centred design led by daily rhythms, not floor-plan efficiency",
  "Best-in-class architects, designers and contractors on every project",
  "Hospitality-grade service and management long after handover",
];

const visionParagraphs: string[] = [
  "We see Dubai as a global stage, and we build for it accordingly. Our vision is a portfolio that reaches across the emirate's most sought-after destinations — and, increasingly, beyond it — while remaining rooted in the craft, warmth and hospitality that define this city, bringing an international standard of living to every address we create.",
  "That perspective shapes who we choose to work with. As Regional Sponsor of the Argentina National Team and partner to maisons like FAUCHON and hospitality leaders like Hilton, we surround our residents with names that carry meaning far beyond real estate.",
  "The goal has never changed. To create places of lasting value where design, service and community come together — so that, wherever life takes you, there is one feeling worth coming home to. Live in Prestige.",
];

const visionPoints: string[] = [
  "Landmark addresses across Dubai's prime destinations",
  "Partnerships with world-class brands and institutions",
  "Enduring value built on design, service and community",
];

const ceoBio =
  "Ajmal Saifi leads Prestige One with a conviction that great development is an act of stewardship, not speculation. Drawing on more than eighteen years of global real-estate experience and a multi-billion-dirham portfolio, he has built the company around a single idea — that true luxury is felt in the details others overlook, and in the communities a building leaves behind.";

const ceoTiles: CeoTile[] = [
  { value: "18+", label: "Years global experience" },
  { value: "Multi-Billion AED", label: "Portfolio delivered" },
  { value: "Community-led", label: "Leadership philosophy" },
];

const coreValues: CoreValue[] = [
  {
    title: "Integrity",
    text: "Doing right by our residents, partners and communities in every decision we make.",
    image: "/assets/images/v2/pages/core-values/integrity.webp",
  },
  {
    title: "Quality",
    text: "An uncompromising standard of craftsmanship across design, materials and finish.",
    image: "/assets/images/v2/pages/core-values/quality.webp",
  },
  {
    title: "Innovation",
    text: "Reimagining how people live through forward-thinking design and technology.",
    image: "/assets/images/v2/pages/core-values/innovation.webp",
  },
  {
    title: "Sustainability",
    text: "Building responsibly for the long term, for both people and the planet.",
    image: "/assets/images/v2/pages/core-values/sustainability.webp",
  },
];

const milestones: Milestone[] = [
  {
    year: "1967",
    title: "Prestige Holding Group is founded",
    text: "Our parent group, Prestige Holding Group, is established in Dubai — beginning a legacy across construction, trade and hospitality that still guides how we build today.",
    image: "/assets/images/v2/locations/downtown-dubai.webp",
  },
  {
    year: "2007",
    title: "Entering Dubai real estate",
    text: "The group enters Dubai's real-estate sector, bringing decades of building experience to the city, and begins developing projects from 2008.",
    image: "/assets/images/v2/our-destinations/dubai-maritime.webp",
  },
  {
    year: "2016",
    title: "AED 1 billion+ invested",
    text: "By 2016 the group has invested more than AED 1 billion into residential units across prime Dubai locations, from Dubai Marina to Downtown and Palm Jumeirah.",
    image: "/assets/project-featured-images/sliders/waterway.webp",
  },
  {
    year: "2023",
    title: "Prestige One Developments is founded",
    text: "Decades of group expertise are consolidated into a dedicated luxury real-estate developer — Prestige One Developments.",
    image: "/assets/project-featured-images/sliders/hilton-1.webp",
  },
  {
    year: "2024",
    title: "Sponsor of the Argentina National Team",
    text: "Prestige One becomes the first regional real-estate sponsor of the Argentine Football Association (AFA). Vista sells out, and The Waterway, Seaside, Place, Parkway and The One launch.",
    image: "/assets/images/v2/pages/AFA-sponsorship-1-1.webp",
  },
  {
    year: "2025",
    title: "Hilton, Berkeley Square & Sanctuary",
    text: "Hilton-branded residences launch alongside Berkeley Square and Sanctuary — bringing globally recognised, hospitality-led living to the portfolio.",
    image: "/assets/project-featured-images/sliders/berkeley-north.webp",
  },
  {
    year: "2026",
    title: "FAUCHON Résidences & the AFA Tower",
    text: "A partnership with the storied Parisian maison FAUCHON brings art-de-vivre residences to Dubai, and the landmark AFA Tower is announced.",
    image: "/assets/project-featured-images/sliders/fauchon.webp",
  },
];

// Smooth-scroll to an anchored section when the About menu links (/about-us#...)
// are used. The page runs GSAP ScrollSmoother, so native #hash scrolling won't
// work — drive it through the smoother (with a header offset), falling back to
// window scroll if the smoother isn't up yet.
const route = useRoute();
async function scrollToHash(hash: string) {
  if (!import.meta.client || !hash) return;
  const { ScrollSmoother } = await import("gsap/all");
  for (let i = 0; i < 50; i++) {
    const el = document.querySelector(hash) as HTMLElement | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sm: any = (ScrollSmoother as any).get?.();
    if (el && sm) {
      sm.scrollTo(el, true, "top 96px");
      return;
    }
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: "smooth" });
      return;
    }
    await new Promise((r) => setTimeout(r, 100));
  }
}
onMounted(() => {
  if (route.hash) scrollToHash(route.hash);
});
watch(
  () => route.hash,
  (h) => {
    if (h) scrollToHash(h);
  },
);

usePrestigePage({ hero: false });
</script>

<style scoped>
/* trust badge */
.prestige-about__trust {
  padding-top: 0;
}
.prestige-about__badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 11px 24px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.08);
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
}
.prestige-about__badge-star {
  font-size: 14px;
  line-height: 1;
}

/* founder & CEO */
.prestige-about__ceo-media {
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 4 / 5;
  background: #101013;
}
.prestige-about__ceo-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-about__ceo-media:hover img {
  transform: scale(1.05);
}
.prestige-about__quote {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(26px, 3.4vw, 44px);
  line-height: 1.25;
  color: #fff;
  margin: 6px 0 0;
  font-weight: 400;
}
.prestige-about__ceo-name {
  margin: 22px 0 0;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 22px;
  color: #fff;
}
.prestige-about__ceo-name span {
  color: var(--tp-common-gold, #ffffff);
  font-size: 15px;
  font-family: inherit;
}
.prestige-about__ceo-tiles {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
}
.prestige-about__ceo-tile {
  flex: 1 1 150px;
  min-width: 140px;
}
.prestige-about__ceo-tile-value {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(22px, 2.4vw, 30px);
  line-height: 1.1;
  color: var(--tp-common-gold, #ffffff);
}
.prestige-about__ceo-tile-label {
  display: block;
  margin-top: 8px;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

/* core values */
.prestige-about__values {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.prestige-about__value-media {
  overflow: hidden;
  border-radius: 6px;
  aspect-ratio: 3 / 2;
  background: #101013;
  margin-bottom: 22px;
}
.prestige-about__value-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-about__value:hover .prestige-about__value-media img {
  transform: scale(1.05);
}
.prestige-about__value-title {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 10px;
}
.prestige-about__value-text {
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.68);
  margin: 0;
}

.mb-60 {
  margin-bottom: 60px;
}
</style>
