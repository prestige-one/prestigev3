<template>
  <section id="contact" class="prestige-contact-area">
    <div class="container container-1430">
      <!-- centered variant (main home page): just the headline and form,
           no map, no side-by-side grid - everything stacked and centered. -->
      <div v-if="centered" class="prestige-contact-centered">
        <span class="prestige-contact-eyebrow">Get In Touch</span>
        <h2 class="prestige-contact-title">
          Let's Talk About<br>
          Your Next Move
        </h2>

        <div class="prestige-contact-form-card">
          <form-contact-prestige />
        </div>
      </div>

      <!-- default variant (home-2): heading + map on the left, form on the
           right. -->
      <div v-else class="prestige-contact-grid">
        <!-- left column: heading, map -->
        <div class="prestige-contact-left">
          <span class="prestige-contact-eyebrow">Get In Touch</span>
          <h2 class="prestige-contact-title">
            Let's Talk About<br>
            Your Next Move
          </h2>

          <div class="prestige-contact-map-box">
            <iframe
              class="prestige-contact-map-frame"
              src="https://www.google.com/maps?q=Marina+Plaza,+Dubai+Marina,+Dubai,+UAE&z=12&output=embed"
              title="Prestige One Developments - Marina Plaza, Dubai Marina"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <!-- right column: form card -->
        <div class="prestige-contact-right">
          <div class="prestige-contact-form-card">
            <form-contact-prestige />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ centered?: boolean }>(), { centered: false });
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
  /* the left column (heading + map) is naturally shorter than the form
     card - center them against each other instead of top-aligning, so the
     shorter side doesn't just leave dead space below it. */
  align-items: center;
}

/* ---- left column ---- */

.prestige-contact-left {
  display: flex;
  flex-direction: column;
}
.prestige-contact-form-field label {
  text-align: left;
}
.prestige-contact-eyebrow {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 22px;
}

.prestige-contact-eyebrow::before {
  content: "";
  display: inline-block;
  width: 40px;
  height: 1px;
  margin-right: 14px;
  background-color: rgba(255, 255, 255, 0.5);
}

.prestige-contact-title {
  font-weight: 600;
  font-size: clamp(24px, 2.4vw, 36px);
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
  margin: 0 0 24px;
}

/* ---- map ---- */

.prestige-contact-map-box {
  position: relative;
  width: 100%;
  height: 360px;
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

/* ---- centered variant ---- */

.prestige-contact-centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.prestige-contact-centered .prestige-contact-eyebrow::before {
  display: none;
}

.prestige-contact-centered .prestige-contact-title {
  margin-bottom: 36px;
}

.prestige-contact-centered .prestige-contact-form-card {
  width: 100%;
  max-width: 880px;
}
.agntix-dark .tp-contact-form-input input:focus, .agntix-dark .tp-contact-form-input textarea:focus {
	border-color: #5A5A5A;
}
/* ---- right column: form card ---- */

.prestige-contact-form-card {
  position: relative;
  padding: 30px 80px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  overflow: hidden;
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
    height: 300px;
  }
}

@media (max-width: 575.98px) {
  .prestige-contact-form-card {
    padding: 20px;
  }
}
</style>
