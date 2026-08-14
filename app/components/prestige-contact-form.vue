<template>
  <section id="contact" class="prestige-contact-area">
    <div class="container container-1430">
      <!-- centered variant (main home page): just the headline and form,
           no map, no side-by-side grid - everything stacked and centered. -->
      <div v-if="centered" class="prestige-contact-centered">
        <prestige-section-heading
          class="prestige-contact-heading"
          :title="$t('sh.contactCta.eyebrow')"
          :subtitle="$t('sh.contactCta.subtitle')"
        />

        <div class="prestige-contact-form-card">
          <form-contact-prestige :current-project="currentProject" />
        </div>
      </div>

      <!-- default variant (home-2): heading + map on the left, form on the
           right. -->
      <div v-else class="prestige-contact-grid">
        <!-- left column: heading, map -->
        <div class="prestige-contact-left">
          <prestige-section-heading
            class="prestige-contact-heading"
            align="left"
            :title="$t('sh.contactCta.eyebrow')"
            :subtitle="$t('sh.contactCta.subtitle')"
          />

          <div class="prestige-contact-map-box">
            <iframe
              class="prestige-contact-map-frame"
              :src="mapEmbedUrl"
              :title="mapFrameTitle"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
            <a
              v-if="mapLocation"
              class="prestige-contact-map-link"
              :href="mapLocation.mapsUrl"
              target="_blank"
              rel="noopener noreferrer"
            >View on Google Maps</a>
          </div>
        </div>

        <!-- right column: form card -->
        <div class="prestige-contact-right">
          <div class="prestige-contact-form-card">
            <form-contact-prestige :current-project="currentProject" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  centered?: boolean;
  mapLocation?: {
    mapsUrl: string;
    latitude: number;
    longitude: number;
  };
  mapTitle?: string;
  currentProject?: string;
}>(), {
  centered: false,
  mapLocation: undefined,
  mapTitle: "Prestige One Developments - Marina Plaza, Dubai Marina",
  currentProject: undefined,
});

const mapEmbedUrl = computed(() => {
  if (!props.mapLocation) {
    return "https://www.google.com/maps?q=Marina+Plaza,+Dubai+Marina,+Dubai,+UAE&z=12&output=embed";
  }

  const { latitude, longitude } = props.mapLocation;
  return `https://www.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`;
});

const mapFrameTitle = computed(() => `${props.mapTitle} location map`);
</script>

<style scoped>
.prestige-contact-area {
  background-color: #0e0e12;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  padding-top: 100px;
  padding-bottom: 50px;
}

.prestige-contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 70px;
  align-items: stretch;
}

/* ---- left column ---- */

.prestige-contact-left {
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100%;
}
.prestige-contact-right {
  display: flex;
  min-width: 0;
  height: 100%;
}
.prestige-contact-right .prestige-contact-form-card {
  height: 100%;
}
.prestige-contact-form-field label {
  text-align: left;
}
.prestige-contact-heading {
  margin-bottom: 28px;
}

.prestige-contact-heading :deep(.prestige-section-heading__title) {
  color: #fff;
  background: none;
}

/* ---- map ---- */

.prestige-contact-map-box {
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  min-height: 360px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.prestige-contact-map-frame {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  /* Google's embed API doesn't offer a grayscale map style without a paid
     JS-API key + custom style JSON - filtering the rendered iframe gets
     the same look for free. */
  filter: grayscale(1) contrast(1.05) brightness(0.9);
}

.prestige-contact-map-link {
  position: absolute;
  right: 14px;
  bottom: 14px;
  z-index: 2;
  padding: 9px 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  background: rgba(14, 14, 18, 0.88);
  color: #fff;
  font-size: 12px;
  line-height: 1;
  backdrop-filter: blur(8px);
  transition: background-color 0.25s ease, color 0.25s ease;
}

.prestige-contact-map-link:hover {
  background: #fff;
  color: #111;
}

/* ---- centered variant ---- */

.prestige-contact-centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.prestige-contact-centered .prestige-contact-heading {
  margin-bottom: 36px;
}

.prestige-contact-centered .prestige-contact-form-card {
  width: 100%;
  max-width: 760px;
}
.agntix-dark .tp-contact-form-input input:focus, .agntix-dark .tp-contact-form-input textarea:focus {
	border-color: #5A5A5A;
}
/* ---- right column: form card ---- */

.prestige-contact-form-card {
  position: relative;
  width: 100%;
  padding: 28px 56px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  overflow: visible;
}

/* soft sheen in the top-right corner, matching the reference card's subtle
   highlight. */
.prestige-contact-form-card::before {
  content: "";
  position: absolute;
  top: -80px;
  right: -80px;
  width: 220px;
  height: 220px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent 70%);
  pointer-events: none;
}

@media (max-width: 1199.98px) {
  .prestige-contact-grid {
    gap: 50px;
  }

  .prestige-contact-form-card {
    padding: 26px;
  }
}

@media (max-width: 991.98px) {
  .prestige-contact-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .prestige-contact-map-box {
    flex: none;
    height: 300px;
    min-height: 0;
  }

  .prestige-contact-left,
  .prestige-contact-right,
  .prestige-contact-form-card {
    height: auto;
  }
}

@media (max-width: 575.98px) {
  .prestige-contact-area {
    padding-top: 56px;
  }

  .prestige-contact-left .prestige-contact-heading {
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }

  .prestige-contact-form-card {
    padding: 20px;
  }
}
</style>
