<template>
  <section class="prestige-journey-area pt-140 pb-140">
    <div class="container container-1430">
      <header class="prestige-journey-header">
        <span class="prestige-journey-eyebrow">OUR JOURNEY</span>
        <h2 class="prestige-journey-title tp_reveal_anim" data-delay="0.05">
          From Experience to Creation.
        </h2>
      </header>
    </div>

    <!-- horizontal, scroll-by-wheel & drag timeline (no auto-scroll) -->
    <div ref="scroller" class="prestige-journey-scroll">
      <div class="prestige-journey-track">
        <div class="prestige-journey-hline" aria-hidden="true" />
        <div
          v-for="m in milestones"
          :key="m.year"
          class="prestige-journey-col"
        >
          <span class="prestige-journey-year">{{ m.year }}</span>
          <div class="prestige-journey-rail">
            <span class="prestige-journey-node" aria-hidden="true" />
          </div>
          <div class="prestige-journey-card">
            <h3 class="prestige-journey-heading">{{ m.title }}</h3>
            <p class="prestige-journey-desc">{{ m.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container container-1430">
      <span class="prestige-journey-hint">Scroll or drag to explore <span aria-hidden="true">→</span></span>
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
  { year: "1967", title: "A Strong Foundation", text: "Prestige Holding Group is established, beginning a business journey built over decades." },
  { year: "2007", title: "Entering Dubai Real Estate", text: "Prestige enters Dubai's real estate market, beginning a new chapter of investment and growth." },
  { year: "2009", title: "Expanding Across Dubai", text: "Prestige begins expanding its real estate investments across key Dubai communities, building experience and a growing portfolio across the city." },
  { year: "2018", title: "Investing in What Comes Next", text: "Building on years of market experience, Prestige expands into land acquisitions across Dubai freehold communities, opening the way for future development." },
  { year: "2022", title: "Recognised in Dubai", text: "Ajmal Saifi is recognised by Dubai Land Department as one of Dubai's top property investors." },
  { year: "2023", title: "From Investment to Development", text: "Prestige One enters a new chapter as a developer, turning years of market experience into developments of its own." },
  { year: "2024", title: "Building Global Connections", text: "Prestige One becomes the first regional real estate sponsor of the Argentina National Team." },
  { year: "2025", title: "Expanding Global Presence", text: "Prestige One strengthens its international presence through globally recognised partnerships, with Dubai remaining at the heart of its developments." },
  { year: "2026", title: "From Vision to Delivery", text: "Prestige One reaches a major milestone with project handovers, while continuing to grow through new developments and global partnerships." },
];

const scroller = ref<HTMLElement | null>(null);

onMounted(() => {
  const el = scroller.value;
  if (!el) return;

  // vertical wheel -> horizontal scroll (only consume it while there's room to
  // move, so at the ends the page scrolls normally instead of trapping)
  const onWheel = (e: WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    const before = el.scrollLeft;
    el.scrollLeft += e.deltaY;
    if (el.scrollLeft !== before) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  el.addEventListener("wheel", onWheel, { passive: false });

  // click-drag to pan
  let down = false;
  let startX = 0;
  let startLeft = 0;
  const onDown = (e: PointerEvent) => {
    down = true;
    startX = e.pageX;
    startLeft = el.scrollLeft;
    el.classList.add("is-grabbing");
  };
  const onMove = (e: PointerEvent) => {
    if (!down) return;
    el.scrollLeft = startLeft - (e.pageX - startX);
  };
  const onUp = () => {
    down = false;
    el.classList.remove("is-grabbing");
  };
  el.addEventListener("pointerdown", onDown);
  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);

  onBeforeUnmount(() => {
    el.removeEventListener("wheel", onWheel);
    el.removeEventListener("pointerdown", onDown);
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
  });
});
</script>

<style scoped>
.prestige-journey-area {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.prestige-journey-header {
  margin: 0 auto clamp(40px, 5vw, 62px);
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

/* horizontal scroller */
.prestige-journey-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  padding: 6px clamp(20px, 6vw, 90px) 10px;
  cursor: grab;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.prestige-journey-scroll::-webkit-scrollbar { display: none; }
.prestige-journey-scroll.is-grabbing { cursor: grabbing; }
.prestige-journey-scroll.is-grabbing * { user-select: none; }

.prestige-journey-track {
  position: relative;
  display: flex;
  width: max-content;
  padding: 4px 0 0;
}
/* horizontal silver spine running through the nodes */
.prestige-journey-hline {
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  height: 2px;
  transform: translateY(-50%);
  background: linear-gradient(
    90deg,
    rgba(198, 214, 226, 0) 0%,
    rgba(198, 214, 226, 0.5) 4%,
    rgba(198, 214, 226, 0.5) 96%,
    rgba(198, 214, 226, 0) 100%
  );
}
.prestige-journey-col {
  flex: 0 0 clamp(270px, 25vw, 350px);
  width: clamp(270px, 25vw, 350px);
  box-sizing: border-box;
  padding-right: 34px;
}
/* silver-metallic year numerals (same treatment as the Legacy stats) */
.prestige-journey-year {
  display: flex;
  align-items: flex-end;
  height: 44px;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(30px, 3vw, 44px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.5px;
  color: transparent;
  background: linear-gradient(
    180deg,
    #f8fcff 0%,
    #b7cad7 22%,
    #819bab 23%,
    #edf8ff 46%,
    #7896aa 47%,
    #eaf6ff 79%,
    #9bb4c5 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(232, 245, 253, 0.9);
}
.prestige-journey-rail {
  position: relative;
  height: 40px;
}
.prestige-journey-node {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #dfe8ee;
  box-shadow: 0 0 0 5px rgba(198, 214, 226, 0.12);
  z-index: 2;
}
.prestige-journey-card {
  margin-top: 6px;
}
.prestige-journey-heading {
  margin: 0 0 10px;
  font-size: clamp(17px, 1.5vw, 21px);
  font-weight: 500;
  letter-spacing: -0.2px;
  color: #fff;
  text-transform: uppercase;
}
.prestige-journey-desc {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.68);
}
.prestige-journey-hint {
  display: block;
  margin-top: 26px;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 767.98px) {
  .prestige-journey-area {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .prestige-journey-col {
    flex-basis: 78vw;
    width: 78vw;
  }
}
</style>
