<template>
  <section class="prestige-journey-area pt-140 pb-140">
    <div class="container container-1230">
      <header class="prestige-journey-header">
        <span class="prestige-journey-eyebrow">OUR JOURNEY</span>
        <h2 class="prestige-journey-title tp_reveal_anim" data-delay="0.05">
          From Experience to Creation.
        </h2>
      </header>

      <div class="prestige-journey-line-wrap">
        <div class="prestige-journey-line" aria-hidden="true" />
        <ol class="prestige-journey-list">
          <li
            v-for="(m, index) in milestones"
            :key="m.year"
            class="prestige-journey-item tp_fade_anim"
            data-fade-from="bottom"
            data-fade-offset="26"
            :data-delay="index * 0.05"
          >
            <span class="prestige-journey-node" aria-hidden="true" />
            <span class="prestige-journey-year">{{ m.year }}</span>
            <div class="prestige-journey-content">
              <h3 class="prestige-journey-heading">{{ m.title }}</h3>
              <p class="prestige-journey-desc">{{ m.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Milestone {
  year: string;
  title: string;
  text: string;
}

const milestones: Milestone[] = [
  {
    year: "1967",
    title: "A Strong Foundation",
    text: "Prestige Holding Group is established, beginning a business journey built over decades.",
  },
  {
    year: "2007",
    title: "Entering Dubai Real Estate",
    text: "Prestige enters Dubai's real estate market, beginning a new chapter of investment and growth.",
  },
  {
    year: "2009",
    title: "Expanding Across Dubai",
    text: "Prestige begins expanding its real estate investments across key Dubai communities, building experience and a growing portfolio across the city.",
  },
  {
    year: "2018",
    title: "Investing in What Comes Next",
    text: "Building on years of market experience, Prestige expands into land acquisitions across Dubai freehold communities, opening the way for future development.",
  },
  {
    year: "2022",
    title: "Recognised in Dubai",
    text: "Ajmal Saifi is recognised by Dubai Land Department as one of Dubai's top property investors.",
  },
  {
    year: "2023",
    title: "From Investment to Development",
    text: "Prestige One enters a new chapter as a developer, turning years of market experience into developments of its own.",
  },
  {
    year: "2024",
    title: "Building Global Connections",
    text: "Prestige One becomes the first regional real estate sponsor of the Argentina National Team.",
  },
  {
    year: "2025",
    title: "Expanding Global Presence",
    text: "Prestige One strengthens its international presence through globally recognised partnerships, with Dubai remaining at the heart of its developments.",
  },
  {
    year: "2026",
    title: "From Vision to Delivery",
    text: "Prestige One reaches a major milestone with project handovers, while continuing to grow through new developments and global partnerships.",
  },
];
</script>

<style scoped>
.prestige-journey-area {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.prestige-journey-header {
  margin: 0 auto clamp(46px, 6vw, 72px);
  text-align: center;
}
.prestige-journey-eyebrow {
  display: block;
  margin-bottom: 18px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.55);
}
.prestige-journey-title {
  margin: 0 auto;
  font-size: clamp(25px, 2.3vw, 40px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -1px;
  color: #fff;
}

.prestige-journey-line-wrap {
  position: relative;
  max-width: 880px;
  margin: 0 auto;
}
/* vertical gold spine */
.prestige-journey-line {
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 138px;
  width: 1px;
  background: linear-gradient(
    180deg,
    rgba(217, 179, 130, 0) 0%,
    rgba(217, 179, 130, 0.5) 8%,
    rgba(217, 179, 130, 0.5) 92%,
    rgba(217, 179, 130, 0) 100%
  );
}
.prestige-journey-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.prestige-journey-item {
  position: relative;
  display: grid;
  grid-template-columns: 120px 1fr;
  column-gap: 46px;
  padding-bottom: clamp(34px, 4vw, 52px);
}
.prestige-journey-item:last-child {
  padding-bottom: 0;
}
.prestige-journey-node {
  position: absolute;
  top: 10px;
  left: 138px;
  transform: translateX(-50%);
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--tp-common-gold, #d9b382);
  box-shadow: 0 0 0 5px rgba(217, 179, 130, 0.12);
}
.prestige-journey-year {
  font-family: "Google Sans", sans-serif;
  font-size: clamp(26px, 2.6vw, 38px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.5px;
  color: var(--tp-common-gold, #d9b382);
  text-align: right;
}
.prestige-journey-content {
  padding-top: 2px;
}
.prestige-journey-heading {
  margin: 0 0 8px;
  font-size: clamp(18px, 1.7vw, 23px);
  font-weight: 500;
  letter-spacing: -0.2px;
  color: #fff;
  text-transform: uppercase;
}
.prestige-journey-desc {
  margin: 0;
  max-width: 560px;
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.68);
}

@media (max-width: 767.98px) {
  .prestige-journey-area {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .prestige-journey-line {
    left: 5px;
  }
  .prestige-journey-item {
    grid-template-columns: 1fr;
    row-gap: 8px;
    padding-left: 30px;
    padding-bottom: 40px;
  }
  .prestige-journey-node {
    left: 5px;
    top: 8px;
  }
  .prestige-journey-year {
    text-align: left;
  }
}
</style>
