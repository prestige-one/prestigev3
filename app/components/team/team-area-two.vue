<template>
  <div class="dgm-team-area pt-120 pb-80">
      <div class="container container-1330">
          <div class="dgm-team-top-wrap mb-60">
              <div class="row align-items-end">
                  <div class="col-md-8">
                      <div class="dgm-team-title-box z-index-">
                          <span class="tp-section-subtitle subtitle-black mb-15 tp_fade_anim" data-delay=".3">Team member</span>
                          <h4 class="tp-section-title-grotesk mb-0 tp_fade_anim" data-delay=".5">
                              Meet the <br> talented
                              <span class="p-relative">
                                  team
                                  <span class="tp-section-title-shape d-none d-md-block">
                                      <svg-title-shape-three />
                                  </span>
                              </span>
                          </h4>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="dgm-team-btn-box text-start text-md-end tp_fade_anim" data-delay=".3">
                          <nuxt-link class="tp-btn-yellow-green green-solid btn-60" href="/team">
                              <span>
                                  <span class="text-1">All team member</span>
                                  <span class="text-2">All team member</span>
                              </span>
                              <i>
                                  <svg-arrow-two/>
                                  <svg-arrow-two/>
                              </i>
                          </nuxt-link>
                      </div>
                  </div>
              </div>
          </div>
          <div class="dgm-team-wrap">
              <div class="row">
                  <div v-for="team in tema_data" :key="team.id" class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                      <div class="dgm-team-item mb-40 tp_fade_anim" :data-delay="`.${team.id}`">
                          <div :ref="addToRefs" class="dgm-team-thumb tp--hover-item p-relative">
                              <nuxt-link href="/team-details">
                                  <div class="tp--hover-img" data-displacement="/img/fluid.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                                      <img :src="team.image" alt="">
                                  </div>
                              </nuxt-link>
                          </div>
                          <div class="dgm-team-content">
                              <h4 class="dgm-team-title-sm">
                                <nuxt-link class="tp-line-black" href="/team-details">   {{team.name}}
                                </nuxt-link>
                              </h4>
                              <span>{{team.position}}</span>
                              <div class="dgm-team-social">
                                  <nuxt-link v-for="(s,i) in team.socialLinks" :key="i" :href="s.link" target="_blank" class="me-1">
                                      <span>
                                          <svg-social-fb-two v-if="s.name == 'facebook'"/>
                                          <svg-social-x-two v-if="s.name == 'twitter'"/>
                                          <svg-social-linkedin v-if="s.name == 'linkedin'"/>
                                      </span>
                                  </nuxt-link>
   
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
const {addToRefs} = useHoverEffect();
const tema_data = [
  {
    id: 1,
    name: "Ethan Roberts",
    position: "Marketing Leader",
    image: '/img/home-03/team/team-1.jpg',
    socialLinks: [
      {name:'facebook',link: "https://www.facebook.com/"},
      {name:'twitter' ,link:"https://twitter.com/"},
      {name:'linkedin',link: "https://www.linkedin.com/"}
    ]
  },
  {
    id: 2,
    name: "Alex Jamie",
    position: "Marketing Leader",
    image: '/img/home-03/team/team-2.jpg',
    link: "/team-details",
     socialLinks: [
      {name:'facebook',link: "https://www.facebook.com/"},
      {name:'twitter' ,link:"https://twitter.com/"},
      {name:'linkedin',link: "https://www.linkedin.com/"}
    ]
  },
  {
    id: 3,
    name: "Taylor Same",
    position: "Marketing Leader",
    image: '/img/home-03/team/team-3.jpg',
    link: "/team-details",
     socialLinks: [
      {name:'facebook',link: "https://www.facebook.com/"},
      {name:'twitter' ,link:"https://twitter.com/"},
      {name:'linkedin',link: "https://www.linkedin.com/"}
    ]
  },
  {
    id: 4,
    name: "Yoyo Casey",
    position: "Marketing Leader",
    image: '/img/home-03/team/team-4.jpg',
    link: "/team-details",
     socialLinks: [
      {name:'facebook',link: "https://www.facebook.com/"},
      {name:'twitter' ,link:"https://twitter.com/"},
      {name:'linkedin',link: "https://www.linkedin.com/"}
    ]
  },
];
</script>