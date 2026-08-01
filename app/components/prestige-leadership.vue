<template>
  <section class="prestige-leadership-area pt-40 pb-80">
    <div class="container container-1430">
      <header class="prestige-leadership-header">
        <span class="prestige-leadership-eyebrow">OUR LEADERSHIP</span>
        <h2 class="prestige-leadership-title tp_reveal_anim" data-delay="0.05">
          Guided by Experience
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
            <img :src="leader.image" :alt="leader.name" loading="lazy">
          </div>
          <div class="prestige-leadership-body">
            <span class="prestige-leadership-role">{{ leader.role }}</span>
            <h3 class="prestige-leadership-name">{{ leader.name }}</h3>
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
  image: string;
}

// Management team as listed on prestigeone.ae (Meet the Management).
const leaders: Leader[] = [
  { name: "Sulaiman Saifi", role: "Vice Chairman", image: "/assets/images/v3/Sulaiman_Saifi-740x850-1.webp" },
  { name: "Ajmal Saifi", role: "Founder & CEO", image: "/assets/images/v3/Ajmal-CEO-short-new-740x850-1.webp" },
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

/* two wide horizontal cards fill the row so there's no dead space at the sides */
.prestige-leadership-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(20px, 2.4vw, 34px);
}
.prestige-leadership-card {
  display: grid;
  grid-template-columns: 44% 1fr;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.045), rgba(14, 17, 21, 0.7) 60%);
}
.prestige-leadership-portrait {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: radial-gradient(circle at 50% 30%, rgba(105, 139, 161, 0.25), #0e1115 70%);
}
.prestige-leadership-portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.prestige-leadership-card:hover .prestige-leadership-portrait img {
  transform: scale(1.04);
}
.prestige-leadership-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: clamp(24px, 3vw, 44px);
}
.prestige-leadership-role {
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}
.prestige-leadership-name {
  margin: 0;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(26px, 2.6vw, 38px);
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 1.1;
  color: #fff;
}

@media (max-width: 767.98px) {
  .prestige-leadership-area {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .prestige-leadership-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}
</style>
