<template>
  <section id="our-milestones" class="journey-two-area pt-40 pb-140">
    <div class="container container-1230">
      <header class="journey-two-header">
        <span class="journey-two-eyebrow">Our Journey</span>
        <h2 class="journey-two-title tp_reveal_anim" data-delay="0.05">
          From Experience to Creation
        </h2>
        <p class="journey-two-intro tp_fade_anim" data-fade-from="bottom">
          A legacy built over decades, evolving from a strong business foundation into a new era of thoughtful development.
        </p>
      </header>

      <ol class="journey-two-timeline">
        <li
          v-for="(milestone, index) in milestones"
          :key="milestone.year"
          class="journey-two-item tp_fade_anim"
          :class="{ 'is-right': index % 2 !== 0 }"
          data-fade-from="bottom"
          data-fade-offset="30"
          :data-delay="(index % 2) * 0.08"
          data-duration="0.75"
        >
          <span class="journey-two-dot" aria-hidden="true"><i /></span>

          <article class="journey-two-card">
            <figure class="journey-two-media">
              <img
                :src="milestone.image"
                :alt="`${milestone.year} — ${milestone.title}`"
                loading="lazy"
              >
              <span class="journey-two-chapter">Chapter {{ String(index + 1).padStart(2, '0') }}</span>
            </figure>

            <div class="journey-two-content">
              <div class="journey-two-year" aria-hidden="true">
                <prestige-metallic-number :value="milestone.year" />
              </div>
              <h3>{{ milestone.title }}</h3>
              <p>{{ milestone.description }}</p>
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
interface JourneyMilestone {
  year: number;
  title: string;
  description: string;
  image: string;
}

const sharedJourneyImage = "/assets/images/v2/pages/pages-internal-images/dubai-timeline-update-3.webp";

const milestones: JourneyMilestone[] = [
  { year: 1967, title: "A Strong Foundation", description: "Prestige Holding Group is established, beginning a business journey built over decades.", image: sharedJourneyImage },
  { year: 2007, title: "Entering Dubai Real Estate", description: "Prestige enters Dubai’s real estate market, beginning a new chapter of investment and growth.", image: sharedJourneyImage },
  { year: 2009, title: "Expanding Across Dubai", description: "Prestige expands its real estate investments across key Dubai communities, building experience and a growing portfolio across the city.", image: sharedJourneyImage },
  { year: 2018, title: "Investing in What Comes Next", description: "Years of market experience lead to land acquisitions across Dubai freehold communities, opening the way for future development.", image: sharedJourneyImage },
  { year: 2022, title: "Recognised in Dubai", description: "Ajmal Saifi is recognised by Dubai Land Department as one of Dubai’s top property investors.", image: sharedJourneyImage },
  { year: 2023, title: "From Investment to Development", description: "Prestige One enters a new chapter as a developer, turning years of market experience into developments of its own.", image: sharedJourneyImage },
  { year: 2024, title: "Building Global Connections", description: "Prestige One becomes the first regional real estate sponsor of the Argentina National Team.", image: sharedJourneyImage },
  { year: 2025, title: "Expanding Global Presence", description: "Prestige One strengthens its international presence through globally recognised partnerships, with Dubai at the heart of its developments.", image: sharedJourneyImage },
  { year: 2026, title: "From Vision to Delivery", description: "Prestige One reaches a major milestone with project handovers while continuing to grow through new developments and global partnerships.", image: sharedJourneyImage },
];
</script>

<style scoped>
.journey-two-area {
  position: relative;
  overflow: hidden;
  scroll-margin-top: 120px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.journey-two-area::before {
  position: absolute;
  top: 4%;
  left: 50%;
  width: min(900px, 80vw);
  height: 700px;
  content: "";
  pointer-events: none;
  background: radial-gradient(circle, rgba(78, 145, 183, 0.1), transparent 68%);
  filter: blur(30px);
  transform: translateX(-50%);
}

.journey-two-header {
  position: relative;
  z-index: 1;
  max-width: 790px;
  margin: 0 auto clamp(64px, 8vw, 100px);
  text-align: center;
}

.journey-two-eyebrow {
  display: block;
  margin-bottom: 22px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.journey-two-title {
  margin: 0;
  font-size: var(--prestige-about-section-title-size, clamp(25px, 2.3vw, 40px));
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -1px;
  color: #fff;
}

.journey-two-intro {
  max-width: 650px;
  margin: 22px auto 0;
  font-size: clamp(14px, 1.2vw, 16px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.58);
}

.journey-two-timeline {
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

.journey-two-timeline::before {
  position: absolute;
  top: 22px;
  bottom: 22px;
  left: 50%;
  width: 1px;
  content: "";
  background: linear-gradient(180deg, transparent, rgba(181, 211, 230, 0.75) 8%, rgba(104, 158, 190, 0.45) 92%, transparent);
}

.journey-two-item {
  position: relative;
  width: calc(50% - 46px);
  margin: 0 auto 54px 0;
}

.journey-two-item.is-right {
  margin-right: 0;
  margin-left: auto;
}

.journey-two-item::after {
  position: absolute;
  top: 54px;
  left: 100%;
  width: 46px;
  height: 1px;
  content: "";
  background: linear-gradient(90deg, rgba(162, 199, 222, 0.6), rgba(162, 199, 222, 0.15));
}

.journey-two-item.is-right::after {
  right: 100%;
  left: auto;
  background: linear-gradient(90deg, rgba(162, 199, 222, 0.15), rgba(162, 199, 222, 0.6));
}

.journey-two-dot {
  position: absolute;
  z-index: 2;
  top: 45px;
  left: calc(100% + 37px);
  display: grid;
  width: 19px;
  height: 19px;
  place-items: center;
  border: 1px solid rgba(198, 224, 240, 0.7);
  border-radius: 50%;
  background: #071016;
  box-shadow: 0 0 0 7px rgba(111, 169, 203, 0.08), 0 0 24px rgba(111, 169, 203, 0.25);
}

.journey-two-item.is-right .journey-two-dot {
  right: calc(100% + 37px);
  left: auto;
}

.journey-two-dot i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #d4e7f2;
}

.journey-two-card {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.025));
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.24);
  transition: transform 0.45s ease, border-color 0.45s ease, box-shadow 0.45s ease;
}

.journey-two-media {
  position: relative;
  height: 205px;
  margin: 0;
  overflow: hidden;
}

.journey-two-media::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(180deg, transparent 45%, rgba(5, 10, 14, 0.78));
}

.journey-two-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.journey-two-chapter {
  position: absolute;
  z-index: 1;
  right: 18px;
  bottom: 16px;
  padding: 7px 11px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.82);
  background: rgba(4, 10, 14, 0.45);
  backdrop-filter: blur(8px);
}

.journey-two-content {
  position: relative;
  min-height: 220px;
  padding: 28px 30px 32px;
}

.journey-two-year {
  margin-bottom: 16px;
  font-size: clamp(40px, 4vw, 56px);
  line-height: 0.9;
  letter-spacing: -2px;
}

.journey-two-content h3 {
  margin: 0;
  font-size: clamp(19px, 1.7vw, 25px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.3px;
  text-transform: uppercase;
  color: #fff;
}

.journey-two-content p {
  margin: 13px 0 0;
  font-size: 14px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.6);
}

@media (hover: hover) {
  .journey-two-card:hover {
    border-color: rgba(179, 215, 237, 0.32);
    box-shadow: 0 32px 80px rgba(0, 0, 0, 0.34), 0 0 42px rgba(84, 150, 189, 0.08);
    transform: translateY(-7px);
  }

  .journey-two-card:hover .journey-two-media img {
    transform: scale(1.055);
  }
}

@media (max-width: 767.98px) {
  .journey-two-area {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  .journey-two-header {
    margin-bottom: 52px;
  }

  .journey-two-timeline::before {
    left: 15px;
  }

  .journey-two-item,
  .journey-two-item.is-right {
    width: calc(100% - 48px);
    margin: 0 0 34px 48px;
  }

  .journey-two-item::after,
  .journey-two-item.is-right::after {
    top: 38px;
    right: 100%;
    left: auto;
    width: 33px;
    background: linear-gradient(90deg, rgba(162, 199, 222, 0.2), rgba(162, 199, 222, 0.65));
  }

  .journey-two-dot,
  .journey-two-item.is-right .journey-two-dot {
    top: 29px;
    right: calc(100% + 24px);
    left: auto;
  }

  .journey-two-media {
    height: 190px;
  }

  .journey-two-content {
    min-height: 0;
    padding: 24px 22px 27px;
  }

  .journey-two-year {
    font-size: 38px;
  }
}
</style>
