<template>
  <section class="prestige-stories pt-120 pb-120">
    <div class="container container-1430">
      <header class="prestige-stories__head">
        <span class="prestige-stories__eyebrow">CLIENT STORIES</span>
        <h2 class="prestige-stories__title prestige-text-paint">Homes Handed Over. Stories That Stay.</h2>
        <p class="prestige-stories__lead">
          From the first viewing to the moment they receive their keys, Prestige One
          owners become part of a growing community. Here are a few of their journeys
          - in their own words.
        </p>
      </header>

      <div class="prestige-stories__grid">
        <article v-for="(v, i) in videos" :key="i" class="prestige-stories__card tp_fade_anim" :data-delay="i * 0.08">
          <button class="prestige-stories__media" type="button" aria-label="Video coming soon">
            <span class="prestige-stories__play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </span>
            <span class="prestige-stories__soon">Video coming soon</span>
          </button>
          <div class="prestige-stories__meta">
            <h3 class="prestige-stories__name">{{ v.name }}</h3>
            <span class="prestige-stories__project">{{ v.project }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Placeholder client-handover videos — replace `poster`/embed once footage is ready.
const videos = [
  { name: "Handover Story", project: "Berkeley Square, JVC" },
  { name: "Handover Story", project: "Hilton Residences, Maritime City" },
  { name: "Handover Story", project: "Seaside, Dubai Islands" },
];
</script>

<style scoped>
.prestige-stories__head {
  max-width: 760px;
  margin: 0 auto clamp(44px, 5vw, 66px);
  text-align: center;
}
.prestige-stories__eyebrow {
  display: block;
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.5);
}
.prestige-stories__title {
  margin: 0 0 18px;
  font-size: clamp(24px, 2.6vw, 40px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
}
.prestige-stories__lead {
  margin: 0;
  font-size: clamp(15px, 1.2vw, 17px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.62);
}
.prestige-stories__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(16px, 1.8vw, 26px);
}
.prestige-stories__media {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 42%, rgba(120, 150, 180, 0.16), transparent 60%),
    linear-gradient(160deg, #16181d, #0d0e12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.prestige-stories__media:hover { border-color: rgba(255, 255, 255, 0.28); transform: translateY(-3px); }
.prestige-stories__play {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #fff;
  color: #0b0b0d;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}
.prestige-stories__media:hover .prestige-stories__play { transform: scale(1.06); }
.prestige-stories__play svg { margin-left: 3px; }
.prestige-stories__soon {
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}
.prestige-stories__meta { padding: 18px 4px 0; }
.prestige-stories__name {
  margin: 0 0 4px;
  font-size: clamp(17px, 1.4vw, 20px);
  font-weight: 500;
  color: #fff;
}
.prestige-stories__project {
  font-size: 12.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 991.98px) {
  .prestige-stories__grid { grid-template-columns: 1fr; max-width: 460px; margin: 0 auto; }
}
</style>
