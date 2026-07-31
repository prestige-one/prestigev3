<template>
  <section class="prestige-leadership-area pt-140 pb-140">
    <div class="container container-1230">
      <header class="prestige-leadership-header">
        <span class="prestige-leadership-eyebrow">OUR LEADERSHIP</span>
        <h2 class="prestige-leadership-title tp_reveal_anim" data-delay="0.05">
          Guided by Experience.
        </h2>
      </header>

      <div class="prestige-leadership-grid">
        <article
          v-for="(leader, index) in leaders"
          :key="leader.name + index"
          class="prestige-leadership-card tp_fade_anim"
          data-fade-from="bottom"
          data-fade-offset="26"
          :data-delay="index * 0.08"
        >
          <div class="prestige-leadership-portrait">
            <img
              v-if="leader.image"
              :src="leader.image"
              :alt="leader.name"
              loading="lazy"
            >
            <span v-else class="prestige-leadership-portrait-placeholder">{{ leader.initials }}</span>
          </div>
          <div class="prestige-leadership-body">
            <h3 class="prestige-leadership-name">{{ leader.name }}</h3>
            <span class="prestige-leadership-role">{{ leader.role }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Leader {
  name: string;
  role: string;
  image?: string;
  initials?: string;
}

// Only the Founder & CEO is confirmed with a portrait; the remaining cards are
// placeholders (role only) ready for real names + photography.
const leaders: Leader[] = [
  { name: "Ajmal Saifi", role: "Founder & CEO", image: "/assets/images/v3/mr.ajmal.webp" },
  { name: "To be announced", role: "Managing Director", initials: "P1" },
  { name: "To be announced", role: "Head of Development", initials: "P1" },
  { name: "To be announced", role: "Head of Sales & Marketing", initials: "P1" },
];
</script>

<style scoped>
.prestige-leadership-area {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.prestige-leadership-header {
  margin: 0 auto clamp(46px, 6vw, 70px);
  text-align: center;
}
.prestige-leadership-eyebrow {
  display: block;
  margin-bottom: 18px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.55);
}
.prestige-leadership-title {
  margin: 0 auto;
  font-size: clamp(25px, 2.3vw, 40px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -1px;
  color: #fff;
}
.prestige-leadership-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(16px, 2vw, 26px);
}
.prestige-leadership-card {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.03), rgba(14, 17, 21, 0.6));
}
.prestige-leadership-portrait {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: radial-gradient(circle at 50% 30%, rgba(105, 139, 161, 0.25), #0e1115 70%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.prestige-leadership-portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.prestige-leadership-card:hover .prestige-leadership-portrait img {
  transform: scale(1.04);
}
.prestige-leadership-portrait-placeholder {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 34px;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.32);
}
.prestige-leadership-body {
  padding: 22px 22px 26px;
}
.prestige-leadership-name {
  margin: 0 0 6px;
  font-size: clamp(18px, 1.6vw, 21px);
  font-weight: 500;
  letter-spacing: -0.2px;
  color: #fff;
}
.prestige-leadership-role {
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: var(--tp-common-gold, #d9b382);
}

@media (max-width: 991.98px) {
  .prestige-leadership-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 767.98px) {
  .prestige-leadership-area {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
</style>
