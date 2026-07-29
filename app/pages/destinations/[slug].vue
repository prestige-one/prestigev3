<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main v-if="dest" class="prestige-page">
            <prestige-page-hero
              :eyebrow="dest.region"
              :title="dest.name"
              :lead="dest.intro"
              :image="dest.image"
            >
              <template #actions>
                <span class="prestige-detail__badge">{{ areaProjects.length ? developmentsBadge : 'New addresses coming' }}</span>
                <nuxt-link to="/contact-us" class="prestige-btn">Enquire now</nuxt-link>
              </template>
            </prestige-page-hero>

            <!-- 1 · about + sub-areas -->
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-7 col-lg-7 mb-40">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">The area</span>
                    <div class="prestige-prose tp_fade_anim" data-delay=".3">
                      <p v-for="(para, i) in dest.about" :key="i">{{ para }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4 offset-xl-1 col-lg-5">
                    <div v-if="dest.subAreas?.length" class="prestige-dest-sub tp_fade_anim" data-delay=".4">
                      <h4 class="prestige-detail__mini">Within the district</h4>
                      <ul>
                        <li v-for="(s, i) in dest.subAreas" :key="i"><span class="prestige-detail__dot" />{{ s }}</li>
                      </ul>
                    </div>
                    <ul class="prestige-dest-highlights tp_fade_anim" data-delay=".45">
                      <li v-for="(h, i) in dest.highlights" :key="i"><span class="prestige-detail__dot" />{{ h }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- 2 · key stats -->
            <prestige-stat-band :stats="dest.stats" />

            <!-- 3 · nearby attractions -->
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-4 mb-40">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Nearby</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">What's around you</h2>
                  </div>
                  <div class="col-xl-8">
                    <ul class="prestige-detail__poi prestige-dest-poi tp_fade_anim" data-delay=".3">
                      <li v-for="(p, i) in dest.attractions" :key="i">
                        <span>{{ p.name }}</span><span class="prestige-detail__poi-time">{{ p.time }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- 4 · connectivity -->
            <section class="prestige-section--tight prestige-dest-band">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-4 mb-30">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Getting around</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">Connected in every direction</h2>
                  </div>
                  <div class="col-xl-8">
                    <ul class="prestige-detail__conn tp_fade_anim" data-delay=".3">
                      <li v-for="(t, i) in dest.transport" :key="i"><span class="prestige-detail__dot" />{{ t }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- cinematic interlude -->
            <prestige-statement-band
              eyebrow="Prime location"
              :text="dest.intro"
              :image="dest.image"
            />

            <!-- 5 · essentials -->
            <section class="prestige-section">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Everyday essentials</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">Life's necessities, close by</h2>
                <div class="row">
                  <div class="col-md-4 mb-30">
                    <h4 class="prestige-detail__mini tp_fade_anim" data-delay=".3">Education</h4>
                    <ul class="prestige-detail__list tp_fade_anim" data-delay=".35">
                      <li v-for="(e, i) in dest.education" :key="i">{{ e }}</li>
                    </ul>
                  </div>
                  <div class="col-md-4 mb-30">
                    <h4 class="prestige-detail__mini tp_fade_anim" data-delay=".4">Healthcare</h4>
                    <ul class="prestige-detail__list tp_fade_anim" data-delay=".45">
                      <li v-for="(h, i) in dest.healthcare" :key="i">{{ h }}</li>
                    </ul>
                  </div>
                  <div v-if="dest.worship?.length" class="col-md-4 mb-30">
                    <h4 class="prestige-detail__mini tp_fade_anim" data-delay=".5">Places of worship</h4>
                    <ul class="prestige-detail__list tp_fade_anim" data-delay=".55">
                      <li v-for="(w, i) in dest.worship" :key="i">{{ w }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- 6 · investment -->
            <section class="prestige-section prestige-dest-invest">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Why invest here</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">A location that works for you</h2>
                <div class="row">
                  <div
                    v-for="(inv, i) in dest.investment"
                    :key="i"
                    class="col-xl-4 col-md-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <div class="prestige-dest-invest__item">
                      <span class="prestige-dest-invest__num">{{ String(i + 1).padStart(2, '0') }}</span>
                      <p>{{ inv }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- 7 · developments -->
            <section v-if="areaProjects.length" class="prestige-section prestige-section--tight">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Developments here</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">Prestige One in {{ dest.name }}</h2>
                <div class="row">
                  <div
                    v-for="p in areaProjects"
                    :key="p.slug"
                    class="col-xl-4 col-lg-4 col-md-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <prestige-project-card :project="p" />
                  </div>
                </div>
              </div>
            </section>
            <section v-else class="prestige-section prestige-section--tight text-center">
              <div class="container container-1430">
                <p class="prestige-prose">New Prestige One developments are coming to {{ dest.name }}. Register your interest to hear first.</p>
                <nuxt-link to="/contact-us" class="prestige-btn mt-20">Register interest</nuxt-link>
              </div>
            </section>

            <!-- 8 · FAQ -->
            <prestige-faq-accordion eyebrow="Good to know" :title="`About ${dest.name}`" :items="faqs" />

            <!-- 9 · CTA + contact -->
            <prestige-cta-band
              eyebrow="Your next address"
              :title="`Make ${dest.name} home`"
              :text="`Speak to our team about living in ${dest.name} — availability, pricing and the developments best suited to how you want to live.`"
              :image="dest.image"
              primary-label="Enquire now"
              primary-to="/contact-us"
              secondary-label="Explore all destinations"
              secondary-to="/destinations"
            />
            <prestige-contact-form />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { getDestinationBySlug, getProjectsForDestination } from "~/data/destinations-data";

interface FaqItem { q: string; a: string }

definePageMeta({ layout: false });

const route = useRoute();
const dest = computed(() => getDestinationBySlug(String(route.params.slug)));

if (!dest.value) {
  throw createError({ statusCode: 404, statusMessage: "Destination not found", fatal: true });
}

const areaProjects = computed(() => (dest.value ? getProjectsForDestination(dest.value) : []));
const developmentsBadge = computed(() => {
  const n = areaProjects.value.length;
  return n === 1 ? "1 development" : `${n} developments`;
});

const faqs = computed<FaqItem[]>(() => {
  const d = dest.value!;
  return [
    { q: `What makes ${d.name} a good place to live?`, a: `${d.about[0]}` },
    { q: `Is ${d.name} well connected?`, a: `${d.transport.slice(0, 2).join(". ")}.` },
    { q: `What's nearby?`, a: `${d.attractions.slice(0, 3).map((a) => `${a.name} (${a.time})`).join(", ")} and more.` },
    { q: `Why invest in ${d.name}?`, a: `${d.investment.slice(0, 3).join("; ")}.` },
  ];
});

useSeoMeta({
  title: () => `${dest.value?.name} | Prestige One Destinations`,
  description: () => dest.value?.intro,
  ogImage: () => dest.value?.image,
});

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-detail__badge {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #fff;
}
.prestige-detail__mini {
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #d9b382);
  margin-bottom: 16px;
}
.prestige-detail__dot {
  flex: 0 0 auto;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--tp-common-gold, #d9b382);
}
.prestige-dest-sub {
  margin-bottom: 30px;
}
.prestige-dest-sub ul,
.prestige-dest-highlights {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-dest-sub li,
.prestige-dest-highlights li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 16px;
  color: rgba(255, 255, 255, 0.82);
}
.prestige-detail__poi {
  list-style: none;
  margin: 0;
  padding: 0;
}
.prestige-detail__poi li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 17px;
  color: rgba(255, 255, 255, 0.85);
}
.prestige-dest-poi { border-top: 1px solid rgba(255, 255, 255, 0.12); }
.prestige-detail__poi-time { color: var(--tp-common-gold, #d9b382); white-space: nowrap; }
.prestige-detail__conn {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-detail__conn li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 16px;
  color: rgba(255, 255, 255, 0.82);
}
.prestige-detail__list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.prestige-detail__list li {
  padding: 12px 0;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.75);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.prestige-dest-band {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.prestige-dest-invest__item {
  padding-right: 16px;
}
.prestige-dest-invest__num {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 38px;
  color: var(--tp-common-gold, #d9b382);
  margin-bottom: 10px;
}
.prestige-dest-invest__item p {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}
</style>
