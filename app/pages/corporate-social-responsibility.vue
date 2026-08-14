<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="csr-page">
            <prestige-page-hero
              class="csr-hero"
              eyebrow="Prestige One Developments"
              title="Corporate Social Responsibility"
              lead="Building homes, building futures — with responsibility woven into every decision we make."
              image="/assets/images/v3/SUNSET-CINEMA-LAWN-Hilton.webp"
              :show-actions="false"
            />

            <section class="csr-intro prestige-section">
              <div class="container container-1430">
                <div class="csr-intro__grid">
                  <div class="csr-intro__copy tp_fade_anim" data-delay=".2">
                    <span class="csr-kicker">Building Homes, Building Futures</span>
                    <h2>Responsibility that shapes every address</h2>
                    <p>We build homes, and we build lives. At Prestige One, our responsibility to people and the planet is woven into every decision we make.</p>
                  </div>
                  <div class="csr-mission">
                    <article v-for="(item, index) in mission" :key="item.title" class="csr-mission__card tp_fade_anim" :data-delay=".3 + index * .1">
                      <span>{{ String(index + 1).padStart(2, '0') }}</span>
                      <div><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div>
                    </article>
                  </div>
                </div>
              </div>
            </section>

            <section class="csr-quote">
              <div class="container container-1430">
                <figure class="csr-quote__card tp_fade_anim" data-delay=".2">
                  <div class="csr-quote__portrait">
                    <img src="/assets/images/v3/Ajmal-CEO-short-new-740x850-1.webp" alt="Mr. Ajmal Saifi">
                  </div>
                  <blockquote>“When you’re in a position to change lives, giving isn’t generosity — it’s duty.”</blockquote>
                  <figcaption><strong>Mr. Ajmal Saifi</strong><span>Founder & CEO, Prestige One</span></figcaption>
                </figure>
              </div>
            </section>

            <section class="csr-programs prestige-section">
              <div class="container container-1430">
                <header class="csr-programs__head">
                  <span class="csr-kicker">Turning values into action</span>
                  <h2>Our Programs</h2>
                </header>
                <div class="csr-programs__grid">
                  <article v-for="(program, index) in programs" :key="program.title" class="csr-program tp_fade_anim" :data-delay=".2 + (index % 2) * .1">
                    <span class="csr-program__number">{{ String(index + 1).padStart(2, '0') }}</span>
                    <h3>{{ program.title }}</h3>
                    <p>{{ program.text }}</p>
                  </article>
                </div>
              </div>
            </section>

            <prestige-cta-band
              eyebrow="A shared responsibility"
              title="Building for generations ahead"
              text="Discover how responsible design and thoughtful development guide every Prestige One community."
              image="/assets/images/v3/A-Global-Perspective.webp"
              primary-label="About Prestige One"
              :primary-to="localePath('/about-us')"
              secondary-label="Contact us"
              :secondary-to="localePath('/contact-us')"
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

const mission = [
  { title: "Sustainability", text: "We develop with intent, creating long-term value through responsible design and mindful building practices." },
  { title: "Fundamental Rights", text: "We champion fairness, dignity and opportunity across our workplace, partnerships and wider communities." },
];

const programs = [
  { title: "Food Drive", text: "Our team organizes food drives across the outskirts of the UAE, reaching communities where support is often out of reach. It is our way of ensuring no table stays empty." },
  { title: "Equal at Work", text: "Our Equal at Work program ensures fairness in every hire. Our recruitment team evaluates potential through skill and merit, free from bias." },
  { title: "Giving to Nonprofits", text: "A portion of every dirham we earn goes to nonprofits and charities doing critical work in healthcare, education and emergency relief. Giving back is part of our revenue model." },
  { title: "Sustainability", text: "Every Prestige One development is built with sustainability at its core — from eco-conscious construction materials to energy-efficient systems designed for generations ahead." },
];

useSeoMeta({ title: "Corporate Social Responsibility | Prestige One", description: "Prestige One's commitment to sustainability, fundamental rights, community programs and responsible development." });
usePrestigePage({ hero: false });
</script>

<style scoped>
.csr-page { background: #0b0b0d; color: #fff; }
.csr-hero { align-items: center; }
.csr-hero :deep(.prestige-hero-band__inner) { padding-top: clamp(110px,15vh,170px); padding-bottom: clamp(60px,9vh,110px); }
.csr-hero :deep(.row) { justify-content: center; text-align: center; }
.csr-hero :deep(.col-xl-9) { display: flex; flex-direction: column; align-items: center; }
.csr-hero :deep(.prestige-hero-band__lead) { margin-right: auto; margin-left: auto; text-align: center; }
.csr-kicker { color: rgba(255,255,255,.58); font-size: 12px; letter-spacing: .18em; text-transform: uppercase; }
.csr-intro { padding-top: 72px; padding-bottom: 72px; }
.csr-intro__grid { display: grid; grid-template-columns: .85fr 1.15fr; align-items: center; gap: clamp(36px,5vw,76px); }
.csr-intro__copy h2,.csr-programs__head h2 { margin: 12px 0 16px; color: #fff; font-size: clamp(28px,3vw,38px); font-weight: 400; line-height: 1.1; }
.csr-intro__copy p { max-width: 540px; margin: 0; color: rgba(255,255,255,.66); font-size: 17px; line-height: 1.7; }
.csr-mission { display: grid; gap: 12px; }
.csr-mission__card { display: grid; grid-template-columns: 48px 1fr; gap: 16px; padding: 21px; border: 1px solid rgba(255,255,255,.12); background: #151517; }
.csr-mission__card > span { display: grid; width: 48px; height: 48px; place-items: center; border: 1px solid rgba(255,255,255,.22); border-radius: 50%; font-size: 11px; }
.csr-mission h3,.csr-program h3 { margin: 0 0 9px; color: #fff; font-size: 20px; }
.csr-mission p,.csr-program p { margin: 0; color: rgba(255,255,255,.62); line-height: 1.6; }
.csr-quote { padding: 0 0 48px; }
.csr-quote__card { display: grid; max-width: 880px; grid-template-areas: "portrait quote" "portrait caption"; grid-template-columns: 170px minmax(0,1fr); align-items: center; column-gap: clamp(24px,3.5vw,42px); margin: 0 auto; padding: 24px; border: 1px solid rgba(255,255,255,.12); background: #141416; color: #fff; }
.csr-quote__portrait { grid-area: portrait; width: 170px; height: 190px; overflow: hidden; background: #1b1b1d; }
.csr-quote img { width: 100%; height: 100%; object-fit: cover; object-position: center top; filter: grayscale(1); }
.csr-quote blockquote { grid-area: quote; align-self: end; max-width: 580px; margin: 0 0 16px; color: #fff; font-size: clamp(19px,2vw,26px); line-height: 1.3; }
.csr-quote figcaption { display: flex; grid-area: caption; align-self: start; flex-direction: column; gap: 2px; }.csr-quote figcaption strong { font-size: 14px; }.csr-quote figcaption span { color: rgba(255,255,255,.55); font-size: 12px; }
.csr-programs { padding-top: 72px; padding-bottom: 78px; }
.csr-programs__head { max-width: 680px; margin-bottom: 32px; }
.csr-programs__grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; }
.csr-program { position: relative; min-height: 195px; padding: 26px; border: 1px solid rgba(255,255,255,.12); background: linear-gradient(145deg,#171719,#101012); }
.csr-program__number { display: block; margin-bottom: 25px; color: rgba(255,255,255,.45); font-size: 12px; letter-spacing: .15em; }
@media (max-width: 767px) { .csr-intro__grid,.csr-programs__grid { grid-template-columns: 1fr; } .csr-quote__card { grid-template-columns: 105px minmax(0,1fr); column-gap: 16px; padding: 16px; } .csr-quote__portrait { width: 105px; height: 130px; } .csr-quote blockquote { margin-bottom: 12px; font-size: 17px; } .csr-program { min-height: auto; } }
</style>
