<template>
  <section class="prestige-section prestige-tst">
    <div class="container container-1430">
      <div class="row justify-content-center text-center mb-60">
        <div class="col-xl-8">
          <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">What our clients say</span>
          <h2 class="prestige-heading tp_fade_anim" data-delay=".3">Trusted to build more than structures</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(t, i) in items"
          :key="i"
          class="col-lg-4 col-md-6 mb-30 tp_fade_anim"
          data-delay=".2"
        >
          <div class="prestige-tst__card">
            <span class="prestige-tst__quote">&ldquo;</span>
            <p class="prestige-tst__text">{{ t.quote }}</p>
            <div class="prestige-tst__by">
              <span class="prestige-tst__name">{{ t.name }}</span>
              <span class="prestige-tst__role">{{ t.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Testimonial { quote: string; name: string; role: string }

// TODO(content): replace with real, approved client testimonials.
// Illustrative placeholders - attributed by role/context, not real individuals.
const items: Testimonial[] = [
  {
    quote: "From the first viewing to handover, the team made everything feel considered. The finish quality genuinely exceeded what we expected.",
    name: "Homeowner",
    role: "Berkeley Square, JVC",
  },
  {
    quote: "As an overseas investor I needed transparency and speed. The process was seamless and the location has already appreciated well.",
    name: "NRI Investor",
    role: "Dubai Islands",
  },
  {
    quote: "What sets Prestige One apart is the attention to how you actually live in a space - the layouts and amenities are thought through.",
    name: "Business Owner",
    role: "Hilton Residences, Maritime City",
  },
];
</script>

<style scoped>
.prestige-tst { border-top: 1px solid rgba(255, 255, 255, 0.07); }
.mb-60 { margin-bottom: 60px; }
.prestige-tst__card {
  position: relative;
  height: 100%;
  padding: 34px 30px 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.prestige-tst__card:hover { border-color: rgba(255, 255, 255, 0.5); transform: translateY(-3px); }
.prestige-tst__quote {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 60px;
  line-height: 0.6;
  color: var(--tp-common-gold, #ffffff);
  margin-bottom: 14px;
}
.prestige-tst__text {
  font-size: 17px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: 22px;
}
.prestige-tst__by { display: flex; flex-direction: column; gap: 3px; }
.prestige-tst__name {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 19px;
  color: #fff;
}
.prestige-tst__role {
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
}
</style>
