<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="cu-page">
            <section class="cu-hero" :style="{ backgroundImage: `url('${project.hero}')` }">
              <div class="cu-hero__shade" />
              <div class="container container-1430 cu-hero__content">
                <p class="cu-hero__subtitle">Construction Updates</p>
                <h1>{{ project.shortTitle }}</h1>
              </div>
            </section>

            <section class="cu-meta">
              <div class="container container-1430 cu-meta__grid">
                <article><small>Project</small><nuxt-link :to="project.projectUrl">View Project</nuxt-link></article>
                <article><small>Location</small><nuxt-link :to="project.locationUrl">{{ project.location }}</nuxt-link></article>
                <article><small>Project Documents</small><nuxt-link to="/project-documents">View Documents</nuxt-link></article>
                <article><small>Completion Date</small><p>To be announced</p></article>
              </div>
            </section>

            <section class="cu-gallery-section">
              <div class="container container-1430">
                <section v-if="project.technicalSpecifications?.length" class="cu-specs" aria-labelledby="cu-specs-title">
                  <div class="cu-specs__head">
                    <span>Project at a glance</span>
                    <h2 id="cu-specs-title">Technical Specifications</h2>
                    <p>Key construction figures, materials and delivery benchmarks for {{ project.shortTitle }}.</p>
                  </div>
                  <div class="cu-specs__grid">
                    <article v-for="(item, index) in project.technicalSpecifications" :key="item" class="cu-specs__card">
                      <span class="cu-specs__number">{{ String(index + 1).padStart(2, '0') }}</span>
                      <p>{{ item }}</p>
                    </article>
                  </div>
                </section>

                <div class="cu-heading">
                  <span>Project Progress</span>
                  <h2>Construction Gallery</h2>
                </div>
                <div class="cu-months" role="tablist" aria-label="Construction update months">
                  <button v-for="gallery in project.galleries" :key="gallery.month" type="button" @click="openMonth(gallery.month)">
                    <img :src="gallery.images[0]" :alt="`${gallery.month} construction update`" loading="lazy">
                    <span>{{ gallery.month }}</span>
                  </button>
                </div>

                <section class="cu-process" aria-labelledby="cu-process-title">
                  <div class="cu-heading">
                    <span>Work Process</span>
                    <h2 id="cu-process-title">Our Construction Work Process</h2>
                    <p>Track how each construction stage progresses from planning to final handover.</p>
                  </div>
                  <div class="cu-process__grid">
                    <article v-for="item in constructionProcess" :key="item.title">
                      <div class="cu-process__top"><img :src="item.icon" alt=""><small>{{ item.step }}</small></div>
                      <h3>{{ item.title }}</h3>
                      <p>{{ item.description }}</p>
                    </article>
                  </div>
                </section>
              </div>
            </section>
          </main>

          <Teleport to="body">
            <div v-if="openedImage" class="cu-lightbox" role="dialog" aria-modal="true" @click.self="openedIndex = null">
              <header class="cu-lightbox__head">
                <div><small>Construction Gallery</small><strong>{{ project.shortTitle }} · {{ activeMonth }}</strong></div>
                <span>{{ String((openedIndex ?? 0) + 1).padStart(2, '0') }} / {{ String(activeGallery.images.length).padStart(2, '0') }}</span>
                <button class="cu-lightbox__close" type="button" aria-label="Close gallery" @click="openedIndex = null" />
              </header>
              <div class="cu-lightbox__stage">
                <button class="cu-lightbox__nav" type="button" aria-label="Previous image" @click="move(-1)">‹</button>
                <img :src="openedImage" :alt="`${project.shortTitle} enlarged construction update`">
                <button class="cu-lightbox__nav" type="button" aria-label="Next image" @click="move(1)">›</button>
              </div>
              <div class="cu-lightbox__thumbs">
                <button v-for="(image, index) in activeGallery.images" :key="image" type="button" :class="{ active: openedIndex === index }" @click="openedIndex = index"><img :src="image" alt="" loading="lazy"></button>
              </div>
            </div>
          </Teleport>

          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import type { ConstructionProject } from "~/data/construction-updates";

const props = defineProps<{ project: ConstructionProject }>();
const activeMonth = ref(props.project.galleries[0]?.month || "");
const openedIndex = ref<number | null>(null);
const activeGallery = computed(() => props.project.galleries.find((item) => item.month === activeMonth.value) || props.project.galleries[0]!);
const openedImage = computed(() => openedIndex.value === null ? null : activeGallery.value.images[openedIndex.value]);
const constructionProcess = [
  { step: "STEP_01", title: "Planning & Consultation", description: "We align timelines, budget strategy, design intent and construction priorities with all stakeholders before on-site execution begins.", icon: "/assets/images/v2/icons/planingIcon.svg" },
  { step: "STEP_02", title: "Design & Engineering", description: "Architectural and engineering teams coordinate layouts, systems and technical details to ensure buildability, safety and performance.", icon: "/assets/images/v2/icons/designingIcon.svg" },
  { step: "STEP_03", title: "Construction Execution", description: "Core structure, MEP systems and finishes are delivered through controlled site management, quality checks and milestone-based reporting.", icon: "/assets/images/v2/icons/constructionIcon.svg" },
  { step: "STEP_04", title: "Inspection & Handover", description: "Final inspections, compliance reviews and snag resolution are completed before handover, ensuring each home is ready to occupy.", icon: "/assets/images/v2/icons/handoverIcon.svg" },
];

function move(direction: number) {
  const length = activeGallery.value.images.length;
  openedIndex.value = ((openedIndex.value || 0) + direction + length) % length;
}

function openMonth(month: string) {
  activeMonth.value = month;
  openedIndex.value = 0;
}

watch(activeMonth, () => { openedIndex.value = null; });
usePrestigePage({ hero: false });
</script>

<style scoped>
.cu-page { background: #0b0b0d; color: #fff; }
.cu-hero { position: relative; min-height: 58vh; background-position: center; background-size: cover; display: flex; align-items: center; justify-content: center; }
.cu-hero__shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.82)); }
.cu-hero__content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding-top: 120px; padding-bottom: 45px; text-align: center; }
.cu-hero__subtitle { margin: 0; color: #fff; font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif); font-size: clamp(30px, 4vw, 46px); font-weight: 400; line-height: 1.05; text-align: center; }
.cu-hero h1 { max-width: 900px; margin: 12px auto 0; color: rgba(255,255,255,.82); font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif); font-size: clamp(21px, 2.3vw, 28px); font-weight: 400; line-height: 1.15; text-align: center; }
.cu-heading span { color: rgba(255,255,255,.66); font-size: 13px; letter-spacing: .2em; text-align: center; text-transform: uppercase; }
.cu-meta { border-bottom: 1px solid rgba(255,255,255,.12); background: #111114; }
.cu-meta__grid { display: grid; grid-template-columns: repeat(4, 1fr); }
.cu-meta article { min-height: 118px; padding: 27px 32px; border-right: 1px solid rgba(255,255,255,.12); }
.cu-meta article:first-child { border-left: 1px solid rgba(255,255,255,.12); }
.cu-meta small { display: block; margin-bottom: 10px; color: #999; text-transform: uppercase; letter-spacing: .1em; }
.cu-meta a, .cu-meta p { margin: 0; color: #fff; font-size: 16px; }
.cu-gallery-section { padding: 100px 0 120px; }
.cu-specs { position: relative; margin-bottom: 110px; padding: clamp(38px, 5vw, 70px); overflow: hidden; border: 1px solid rgba(255,255,255,.13); background: linear-gradient(145deg, #15171a 0%, #0f1012 100%); }
.cu-specs::before { position: absolute; top: 0; left: clamp(38px, 5vw, 70px); width: 72px; height: 2px; content: ""; background: #fff; }
.cu-specs__head { display: grid; max-width: 690px; margin-bottom: 44px; }
.cu-specs__head > span { margin-bottom: 12px; color: rgba(255,255,255,.55); font-size: 11px; letter-spacing: .2em; text-transform: uppercase; }
.cu-specs__head h2 { margin: 0; color: #fff; font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif); font-size: clamp(30px, 3vw, 42px); font-weight: 400; line-height: 1.1; }
.cu-specs__head > p { margin: 15px 0 0; color: rgba(255,255,255,.58); font-size: 15px; line-height: 1.55; }
.cu-specs__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.cu-specs__card { display: grid; min-height: 92px; grid-template-columns: 46px 1fr; align-items: center; gap: 16px; margin: 0; padding: 18px 22px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.025); transition: border-color .3s ease, background .3s ease, transform .3s ease; }
.cu-specs__card:hover { border-color: rgba(255,255,255,.35); background: rgba(255,255,255,.055); transform: translateY(-2px); }
.cu-specs__number { display: grid; width: 42px; height: 42px; place-items: center; border: 1px solid rgba(255,255,255,.24); border-radius: 50%; color: rgba(255,255,255,.7); font-size: 11px; letter-spacing: .08em; }
.cu-specs__card p { margin: 0; color: rgba(255,255,255,.9); font-size: 14px; line-height: 1.48; }
.cu-heading { margin-bottom: 34px; text-align: center; }
.cu-heading h2 { margin: 10px 0 0; color: #fff; font-size: clamp(28px, 3vw, 40px); }
.cu-months { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; margin-bottom: 46px; }
.cu-months button { position: relative; height: 190px; overflow: hidden; border: 1px solid rgba(255,255,255,.2); padding: 0; background: #151517; color: #fff; cursor: pointer; }
.cu-months button::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 38%, rgba(0,0,0,.88)); }
.cu-months button img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease; }
.cu-months button span { position: absolute; z-index: 1; right: 16px; bottom: 14px; left: 16px; font-size: 17px; font-weight: 600; text-align: left; }
.cu-months button:hover img { transform: scale(1.04); }
.cu-process { margin-top: 110px; }
.cu-process .cu-heading p { max-width: 620px; margin: 10px auto 0; color: #aaa; font-size: 14px; }
.cu-process__grid { display: grid; grid-template-columns: repeat(4, 1fr); overflow: hidden; border: 1px solid rgba(255,255,255,.18); background: #f4f4f3; }
.cu-process article { min-height: 235px; padding: 28px 25px; border-right: 1px solid #d6d6d4; color: #1b1b1b; }
.cu-process article:last-child { border-right: 0; }
.cu-process__top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.cu-process__top img { width: 38px; height: 38px; padding: 8px; border-radius: 7px; background: #333; object-fit: contain; filter: grayscale(1); }
.cu-process__top small { color: #555; font-size: 10px; letter-spacing: .12em; }
.cu-process article h3 { margin: 0 0 14px; color: #191919; font-size: 18px; }
.cu-process article p { margin: 0; color: #666; font-size: 13px; line-height: 1.5; }
.cu-lightbox { position: fixed; z-index: 100000; inset: 0; display: grid; grid-template-rows: auto minmax(0,1fr) auto; padding: 18px clamp(16px,3vw,48px) 20px; background: rgba(5,6,8,.97); color: #fff; backdrop-filter: blur(14px); }
.cu-lightbox__head { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; min-height: 58px; border-bottom: 1px solid rgba(255,255,255,.12); }
.cu-lightbox__head > div { display: flex; align-items: baseline; gap: 16px; min-width: 0; }.cu-lightbox__head small { color: rgba(255,255,255,.48); font-size: 10px; letter-spacing: .2em; text-transform: uppercase; }.cu-lightbox__head strong { overflow: hidden; font-size: 14px; font-weight: 400; text-overflow: ellipsis; white-space: nowrap; }.cu-lightbox__head > span { font-size: 12px; letter-spacing: .16em; color: rgba(255,255,255,.68); }
.cu-lightbox__close { position: relative; justify-self: end; width: 42px; height: 42px; border: 1px solid rgba(255,255,255,.25); border-radius: 50%; background: transparent; cursor: pointer; }.cu-lightbox__close::before,.cu-lightbox__close::after { position:absolute; top:50%; left:50%; width:16px; height:1px; content:""; background:#fff; }.cu-lightbox__close::before { transform:translate(-50%,-50%) rotate(45deg); }.cu-lightbox__close::after { transform:translate(-50%,-50%) rotate(-45deg); }
.cu-lightbox__stage { display: grid; min-height: 0; grid-template-columns: 62px minmax(0,1fr) 62px; align-items: center; gap: clamp(8px,2vw,28px); padding: 24px 0; overflow: hidden; }.cu-lightbox__stage > img { width:100%; height:100%; min-height:0; object-fit:contain; }
.cu-lightbox__nav { display:grid; width:54px; height:54px; place-items:center; border:1px solid rgba(255,255,255,.28); border-radius:50%; background:transparent; color:#fff; font-size:38px; cursor:pointer; }.cu-lightbox__nav:last-child { justify-self:end; }
.cu-lightbox__thumbs { display:flex; width:min(900px,82vw); justify-content:safe center; gap:10px; margin:0 auto; padding:14px 2px 5px; overflow-x:auto; border-top:1px solid rgba(255,255,255,.12); }.cu-lightbox__thumbs button { flex:0 0 98px; aspect-ratio:4/3; overflow:hidden; padding:0; border:1px solid transparent; opacity:.65; background:#15161a; cursor:pointer; }.cu-lightbox__thumbs button.active { border-color:#fff; opacity:1; }.cu-lightbox__thumbs img { width:100%; height:100%; object-fit:cover; }
@media (max-width: 991px) { .cu-meta__grid { grid-template-columns: repeat(2, 1fr); } .cu-months { grid-template-columns: repeat(3, 1fr); } .cu-gallery { grid-template-columns: repeat(2, 1fr); } .cu-process__grid { grid-template-columns: repeat(2, 1fr); } .cu-process article:nth-child(2) { border-right: 0; } .cu-process article { border-bottom: 1px solid #d6d6d4; } }
@media (max-width: 600px) { .cu-hero { min-height: 58vh; } .cu-hero__content { padding: 100px 20px 35px; } .cu-hero h1 { font-size: 22px; } .cu-meta__grid { grid-template-columns: 1fr; } .cu-meta article { min-height: auto; border-right: 0; border-left: 0 !important; border-bottom: 1px solid rgba(255,255,255,.1); padding: 20px; text-align: center; } .cu-gallery-section { padding: 70px 0 85px; } .cu-specs { margin-bottom: 70px; padding: 34px 18px 20px; } .cu-specs::before { left: 18px; } .cu-specs__head { margin-bottom: 28px; } .cu-specs__head > p { font-size: 14px; } .cu-specs__grid { grid-template-columns: 1fr; } .cu-specs__card { min-height: 82px; grid-template-columns: 38px 1fr; gap: 12px; padding: 15px 14px; } .cu-specs__number { width: 36px; height: 36px; } .cu-specs__card p { font-size: 13px; } .cu-months { grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 34px; } .cu-months button { height: 130px; } .cu-months button span { right: 10px; bottom: 9px; left: 10px; font-size: 14px; } .cu-process { margin-top: 80px; } .cu-process__grid { grid-template-columns: 1fr; } .cu-process article { min-height: auto; border-right: 0; padding: 24px 20px; } .cu-lightbox { padding: 10px; } .cu-lightbox__head { grid-template-columns: 1fr auto; } .cu-lightbox__head > span { display: none; } .cu-lightbox__stage { grid-template-columns: 42px minmax(0,1fr) 42px; gap: 6px; padding: 10px 0; } .cu-lightbox__nav { width: 38px; height: 38px; font-size: 30px; } .cu-lightbox__thumbs { max-width: 100%; } .cu-lightbox__thumbs button { flex-basis: 78px; } }
</style>
