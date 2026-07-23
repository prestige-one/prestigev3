<template>
  <div id="down" class="pp-about-me-service-area pp-about-me-service-ptb z-index-3 p-relative pb-170">
    <!-- Shape -->
    <div class="pp-service-shape">
      <img data-speed="1.1" src="/img/home-14/about/about-shape-2.png" alt="about shape">
    </div>

    <div class="container container-1430">
      <!-- Skills Section -->
      <div class="pp-about-me-service-item pb-60">
        <div class="pp-about-me-service-heading d-flex align-items-center mb-50">
          <span class="pp-about-me-service-subtitle">About</span>
          <img src="/img/about-me/about-me-line.png" alt="">
        </div>
        <div class="row">
          <div class="col-lg-5">
            <h3 class="pp-about-me-service-title">Skills</h3>
          </div>
          <div class="col-lg-7">
            <div class="pp-skill-list-wrap pp-about-me-skill">
              <div class="row">
                <div
                  v-for="(skill, index) in skills"
                  :key="index"
                  class="col-sm-6 tp_fade_anim"
                  :data-delay="index % 2 === 0 ? '.3' : '.5'"
                >
                  <div class="pp-skill-list mb-60">
                    <h4 class="pp-skill-list-title">{{ skill.title }}</h4>
                    <ul>
                      <li v-for="(item, i) in skill.items" :key="i">{{ item }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools Section -->
      <div class="pp-about-me-service-item pb-110">
        <div class="pp-about-me-service-heading d-flex align-items-center mb-50">
          <span class="pp-about-me-service-subtitle">About</span>
          <img src="/img/about-me/about-me-line.png" alt="">
        </div>
        <div class="row">
          <div class="col-xxl-5 col-xl-3">
            <h3 class="pp-about-me-service-title">Toolbox</h3>
          </div>
          <div class="col-xxl-7 col-xl-9">
            <div class="pp-about-me-tool-warp">
              <div class="row row-cols-xl-3 gx-20">
                <div
                  v-for="(tool, index) in tools"
                  :key="index"
                  class="col"
                >
                  <div
                    class="pp-about-me-tool-item d-flex align-items-center mb-20 tp_fade_anim"
                    :data-delay="`.${3 + (index % 3) * 2}`"
                  >
                    <div class="pp-about-me-tool-item-icon">
                      <span><img :src="tool.icon" alt=""></span>
                    </div>
                    <div class="pp-about-me-tool-item-content">
                      <span>{{ tool.percentage }}</span>
                      <p>{{ tool.name }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div class="pp-about-me-service-item pb-50">
        <div class="pp-about-me-service-heading d-flex align-items-center mb-50">
          <span class="pp-about-me-service-subtitle">About</span>
          <img src="/img/about-me/about-me-line.png" alt="">
        </div>
        <div class="row">
          <div class="col-lg-5">
            <h3 class="pp-about-me-service-title">Experience</h3>
          </div>
          <div class="col-lg-7">
            <div class="pp-about-me-experience-wrap">
              <div class="row">
                <div
                  v-for="(exp, index) in experiences"
                  :key="index"
                  class="col-sm-6"
                >
                  <div
                    class="pp-about-me-experience-item pb-75 tp_fade_anim"
                    :data-delay="index % 2 === 0 ? '.3' : '.5'"
                  >
                    <p>{{ exp.period }}</p>
                    <h4 class="pp-about-me-experience-title">{{ exp.title }}</h4>
                    <p>{{ exp.company }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recognitions Section -->
      <div class="pp-about-me-service-item">
        <div class="pp-about-me-service-heading d-flex align-items-center mb-50">
          <span class="pp-about-me-service-subtitle">About</span>
          <img src="/img/about-me/about-me-line.png" alt="">
        </div>
        <div class="row">
          <div class="col-lg-5">
            <h3 class="pp-about-me-service-title">Recognitions</h3>
          </div>
          <div class="col-lg-7">
            <div class="pp-about-me-recognitions">
              <div class="row gx-55">
                <div
                  v-for="(recognition, index) in recognitions"
                  :key="index"
                  class="col-md-4 mb-30"
                >
                  <div
                    class="studio-award-item tp_fade_anim"
                    :data-delay="`.${3 + index * 2}`"
                  >
                    <div class="studio-award-icon">
                      <img :src="recognition.icon" alt="icon">
                    </div>
                    <span>{{ recognition.text }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// Skills data
const skills = [
  {
    title: 'Product Design',
    items: ['UX/UI Design', 'Prototyping', 'Design System', 'Developer Handoff']
  },
  {
    title: 'Brand Design',
    items: ['Logo Design', 'Brand Guidelines', 'Presentations', 'Digital & Print']
  },
  {
    title: 'Motion Design',
    items: ['UI Animations', 'Logo Animations', 'Illustration Animations', 'Explainer Videos']
  },
  {
    title: 'Web Development',
    items: ['Front-End Development', 'WordPress Theme', 'SEO']
  }
]

// Tools data
const tools = [
  { icon: '/img/about-me/about-me-tool-1.svg', percentage: '94%', name: 'Figma' },
  { icon: '/img/about-me/about-me-tool-2.svg', percentage: '85%', name: 'Sketch' },
  { icon: '/img/about-me/about-me-tool-3.svg', percentage: '74%', name: 'Photoshop' },
  { icon: '/img/about-me/about-me-tool-4.svg', percentage: '63%', name: 'Invision' },
  { icon: '/img/about-me/about-me-tool-5.svg', percentage: '69%', name: 'Invision' },
  { icon: '/img/about-me/about-me-tool-6.svg', percentage: '55%', name: 'Invision' },
  { icon: '/img/about-me/about-me-tool-7.svg', percentage: '40%', name: 'HTML' },
  { icon: '/img/about-me/about-me-tool-8.svg', percentage: '49%', name: 'WordPress' }
]

// Experiences data
const experiences = [
  { period: 'Aug. 2025 - Present', title: 'Motion Designer', company: 'BarberShop Studio' },
  { period: 'Nov. 2018- Mar. 2022', title: 'UI/UX Lead Designer', company: 'Amazon INC' },
  { period: 'Nov. 2018- Mar. 2023', title: 'Digital Art Director', company: 'BarberShop Studio' },
  { period: 'Nov. 2018- Mar. 2025', title: 'Product Designer', company: '(internship)' }
]

// Recognitions data
const recognitions = [
  { icon: '/img/home-06/award/award-1.png', text: '3x Site of the Day' },
  { icon: '/img/home-06/award/award-2.png', text: 'Site of the year' },
  { icon: '/img/home-06/award/award-3.png', text: '2x Site of the Day' }
]
</script>
