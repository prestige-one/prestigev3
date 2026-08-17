<!-- Data source: app/data/project-locations.ts -->
<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="po-locations-page">
            <prestige-page-hero
              class="po-locations-page__hero"
              eyebrow="Dubai portfolio"
              title="Project locations"
              lead="Search our developments, explore each address on the map, and open or copy its Google Maps location."
              image="/assets/images/v3/projects-hero-cover.webp"
              media-position="center top"
            />

            <section class="po-locations-page__explorer">
              <div class="container container-1430">
                <project-locations-explorer />
              </div>
            </section>

            <prestige-cta-band
              title="Looking for the right Prestige address?"
              text="Speak with our team for availability, project information and a private consultation."
              image="/assets/project-featured-images/sliders/coastal-heaven.webp"
              primary-label="Contact us"
              :primary-to="localePath('/contact-us')"
              secondary-label="View all projects"
              :secondary-to="localePath('/projects')"
            />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

const localePath = useLocalePath();

useSeoMeta({
  title: "Project Locations | Prestige One",
  description: "Explore Prestige One developments across Dubai on an interactive project map.",
  ogTitle: "Project Locations | Prestige One",
  ogDescription: "Search and explore Prestige One developments across Dubai.",
});

usePrestigePage({ hero: false });
</script>

<style scoped>
.po-locations-page {
  overflow: clip;
  background: #08090b;
}

.po-locations-page__hero :deep(.prestige-hero-band__inner .row) {
  justify-content: center;
}

.po-locations-page__hero :deep(.prestige-hero-band__inner .col-xl-9) {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.po-locations-page__hero :deep(.prestige-hero-band__lead) {
  max-width: 720px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.po-locations-page__explorer {
  position: relative;
  z-index: 2;
  padding: clamp(70px, 8vw, 120px) 0;
  background:
    radial-gradient(circle at 10% 10%, rgba(33, 61, 82, 0.24), transparent 35%),
    #08090b;
}

@media (max-width: 767px) {
  .po-locations-page__explorer {
    padding: 56px 0;
  }

  .po-locations-page__explorer :deep(.container) {
    padding-right: 12px;
    padding-left: 12px;
  }
}
</style>
