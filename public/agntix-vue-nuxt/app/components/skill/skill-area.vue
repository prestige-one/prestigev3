<template>
  <div
    class="pp-skill-area pp-skill-ptb pb-150"
    data-bg-color="#FFF669"
    style="background-color: #FFF669;"
  >
    <!-- Big Title Section -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="pp-skill-big-text text-center">
            <h2 class="pp-skill-big-text-title tp-split-text tp-split-right">
              Tools & Skills
            </h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills Content Section -->
    <div class="container container-1230">
      <div class="pp-skill-list-wrapper pb-60">
        <div class="row">
          <div class="col-lg-12">
            <div class="pp-skill-heading d-flex align-items-center mb-50">
              <span class="pp-skill-subtitle">About</span>
              <img
                src="/img/home-14/slider/pp-line.png"
                alt="Divider line"
              >
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <div class="pp-skill-heading">
              <h3 class="pp-skill-title">
                Tools <br> & Skills
              </h3>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="pp-skill-list-wrap">
              <div class="row">
                <div
                  v-for="(category, index) in skillCategories"
                  :key="index"
                  class="col-sm-6 tp_fade_anim"
                  :data-delay="category.delay"
                >
                  <div class="pp-skill-list mb-60">
                    <h4 class="pp-skill-list-title">{{ category.title }}</h4>
                    <ul>
                      <li
                        v-for="(item, idx) in category.items"
                        :key="idx"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools Section -->
      <div class="pp-skill-tools">
        <div class="row gx-0 justify-content-center">
          <div
            v-for="(tool, index) in skillTools"
            :key="index"
            class="col-xl-3 col-lg-4 col-md-6 tp_fade_anim"
            :data-delay="tool.delay"
            data-fade-from="top"
            data-ease="bounce"
          >
            <div class="pp-skill-tools-item text-center">
              <div class="pp-skill-tools-item-icon">
                <img :src="tool.icon" :alt="tool.name">
              </div>
              <h4 class="pp-skill-tools-item-title">{{ tool.name }}</h4>
              <span class="pp-skill-tools-item-persent">
                {{tool.proficiency}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skillCategories = [
  {
    title: "Product Design",
    items: ["UX/UI Design", "Prototyping", "Design System", "Developer Handoff"],
    delay: ".3",
  },
  {
    title: "Brand Design",
    items: [
      "Logo Design",
      "Brand Guidelines",
      "Presentations",
      "Digital & Print assets",
    ],
    delay: ".5",
  },
  {
    title: "Motion Design",
    items: [
      "UI Animations",
      "Logo Animations",
      "Illustration Animations",
      "Explainer Videos",
    ],
    delay: ".3",
  },
  {
    title: "Web Development",
    items: ["Front-End Development", "WordPress Theme", "SEO"],
    delay: ".5",
  },
]

const skillTools = [
  {
    name: "Figma",
    icon: "/img/home-14/skill/skill-icon-1.png",
    proficiency: "98%",
    delay: ".3",
  },
  {
    name: "Photoshop",
    icon: "/img/home-14/skill/skill-icon-2.png",
    proficiency: "98%",
    delay: ".5",
  },
  {
    name: "Framer",
    icon: "/img/home-14/skill/skill-icon-3.png",
    proficiency: "65%",
    delay: ".7",
  },
  {
    name: "HTML",
    icon: "/img/home-14/skill/skill-icon-4.png",
    proficiency: "98%",
    delay: ".9",
  },
]
</script>