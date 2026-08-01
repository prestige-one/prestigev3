<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Experience"
              title="Virtual Tour"
              lead="Step inside our landmark residences from anywhere in the world. Explore each development through an immersive, cinematic tour."
              image="/assets/project-featured-images/sliders/hilton-1.webp"
            >
              <template #actions>
                <nuxt-link to="/contact-us" class="prestige-btn">Book a private viewing</nuxt-link>
              </template>
            </prestige-page-hero>

            <!-- intro prose -->
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-4 col-lg-4 mb-30">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">The Tour</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">
                      See it before you visit
                    </h2>
                  </div>
                  <div class="col-xl-7 offset-xl-1 col-lg-8">
                    <div class="prestige-prose tp_fade_anim" data-delay=".4">
                      <p>
                        A home is something you feel long before you sign for it. Our virtual tours
                        are built to give you that feeling from wherever you are - the sweep of a
                        skyline view, the flow between living and dining, the quality of light through
                        a floor-to-ceiling window.
                      </p>
                      <p>
                        Each film below moves through a signature Prestige One development. Watch at
                        your own pace, share it with family, and shortlist the residences that speak
                        to you. When you're ready, our team will pick up exactly where the tour leaves
                        off - with floor plans, availability and a private appointment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- video tour grid -->
            <section class="prestige-section prestige-section--tight">
              <div class="container container-1430">
                <div class="row">
                  <div
                    v-for="tour in tours"
                    :key="tour.slug"
                    class="col-xl-6 col-lg-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <NuxtLink :to="tour.link" class="prestige-tour">
                      <video
                        :src="tour.video"
                        autoplay
                        muted
                        loop
                        playsinline
                        preload="metadata"
                      />
                      <span class="prestige-tour__veil" />
                      <span class="prestige-tour__body">
                        <span class="prestige-tour__loc">{{ tour.location }}</span>
                        <span class="prestige-tour__name">{{ tour.name }}</span>
                        <span class="prestige-tour__cta">Take the tour</span>
                      </span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </section>

            <prestige-feature-split
              eyebrow="Why Virtual"
              title="Experience before you visit"
              image="/assets/project-featured-images/sliders/sanctuary.webp"
              :paragraphs="whyParagraphs"
              :points="whyPoints"
            />

            <prestige-cta-band
              eyebrow="Ready for the real thing?"
              title="From screen to sales gallery"
              text="A virtual tour is the perfect first step. When a residence catches your eye, our team will arrange a private viewing and walk you through floor plans, pricing and payment terms."
              image="/assets/project-featured-images/sliders/fauchon.webp"
              primary-label="Book a viewing"
              primary-to="/contact-us"
              secondary-label="View all projects"
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
interface Tour {
  name: string;
  location: string;
  slug: string;
  video: string;
  link: string;
}

definePageMeta({ layout: false });
useSeoMeta({
  title: "Virtual Tour | Prestige One",
  description:
    "Explore Prestige One's landmark Dubai residences through immersive virtual video tours - Hilton, FAUCHON, Sanctuary, Berkeley and Coastal.",
});

const tours: Tour[] = [
  {
    name: "Hilton Residences",
    location: "Dubai Maritime City",
    slug: "hilton",
    video: "/assets/images/v2/project-features-videos/v3/Hilton.mp4",
    link: "/projects/hilton-residences-dubai-maritime-city",
  },
  {
    name: "FAUCHON Résidences",
    location: "Dubai",
    slug: "fauchon",
    video: "/assets/images/v2/project-features-videos/v3/Fauchon-v3.mp4",
    link: "/projects/fauchon-residences-by-prestige-one",
  },
  {
    name: "Sanctuary Residences",
    location: "Meydan",
    slug: "sanctuary",
    video: "/assets/images/v2/project-features-videos/v3/Sanctuary.mp4",
    link: "/projects/sanctuary-residences-by-prestige-one",
  },
  {
    name: "Berkeley Square North",
    location: "Jumeirah Village Circle",
    slug: "berkeley",
    video: "/assets/images/v2/project-features-videos/v3/Berkeley.mp4",
    link: "/projects/berkeley-square-north",
  },
  {
    name: "Coastal Haven",
    location: "Dubai Islands",
    slug: "coastal",
    video: "/assets/images/v2/project-features-videos/v3/Coastal.mp4",
    link: "/projects/coastal-haven-by-prestige-one",
  },
];

const whyParagraphs: string[] = [
  "Not everyone can be in Dubai this week - and the best homes rarely wait. A virtual tour closes that gap, letting you explore a residence in genuine detail from another city or another continent, at any hour that suits you.",
  "It's also the smartest way to shortlist. Compare layouts side by side, revisit the views that matter, and involve everyone in the decision before booking a single flight. By the time you visit in person, you already know exactly what you've come to see.",
];

const whyPoints: string[] = [
  "Tour from anywhere, on any device, any time of day",
  "Compare developments and layouts before you travel",
  "Share with family and advisors in a single link",
  "Arrive at your viewing already shortlisted and informed",
];

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-tour {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 16 / 10;
  background: #101013;
}
.prestige-tour video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-tour:hover video {
  transform: scale(1.06);
}
.prestige-tour__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.35) 55%,
    rgba(0, 0, 0, 0.85) 100%
  );
}
.prestige-tour__body {
  position: absolute;
  inset: auto 0 0 0;
  z-index: 2;
  padding: 34px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.prestige-tour__loc {
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
}
.prestige-tour__name {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  color: #fff;
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1.1;
}
.prestige-tour__cta {
  margin-top: 4px;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
  transition: letter-spacing 0.3s ease;
}
.prestige-tour:hover .prestige-tour__cta {
  letter-spacing: 0.24em;
}
</style>
