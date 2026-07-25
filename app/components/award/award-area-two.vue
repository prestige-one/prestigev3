<template>
  <div :class="`studio-award-area ${spacingCls}`">
    <div class="container container-1230">
      <div class="row">
        <div class="col-xl-10">
          <div class="studio-award-title-box mb-65">
            <h3 class="tp-section-title-clash tp-text-revel-anim">
              Awards & recognition
            </h3>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Subtitle with Arrow -->
        <div class="col-xl-4 col-lg-4">
          <div class="studio-award-subtitle-box">
            <h3 class="tp-section-subtitle-clash color-red mb-0">
              Our <br> Achievements
              <i><svg-arrow-long-two /></i>
            </h3>
          </div>
        </div>

        <!-- Content -->
        <div class="col-xl-8 col-lg-8">
          <div :class="`studio-award-content-wrap ${blackStyle?'black-style':''}`">
            <div class="studio-award-content tp_text_anim">
              <p>
                From 2004, We have harvest more <br>
                of a thirties of price, Who are there
                guarantee that Welet's give THE best
                has each project.
              </p>
            </div>

            <div class="row gx-55">
              <div
                v-for="award in awards"
                :key="award.id"
                class="col-md-4 mb-30"
              >
                <div
                  :class="`studio-award-item ${blackStyle?'black-style':''} tp_fade_anim`"
                  :data-delay="award.delay"
                >
                  <div class="studio-award-icon">
                    <img :src="award.image" :alt="award.alt">
                  </div>
                  <span>{{ award.title }}</span>
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

interface Props {
  spacingCls?: string;
  blackStyle?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  spacingCls: "pb-200",
  blackStyle: false
})

// Awards data (direct image paths instead of imports)
const awards = [
  {
    id: 1,
    image: props.blackStyle ? "/img/home-06/award/award-1-1.png" :"/img/home-06/award/award-1.png",
    alt: "Award 1",
    title: "3x Site of the Day",
    delay: ".3",
  },
  {
    id: 2,
    image: props.blackStyle ? "/img/home-06/award/award-2-2.png" : "/img/home-06/award/award-2.png",
    alt: "Award 2",
    title: "Site of the year",
    delay: ".5",
  },
  {
    id: 3,
    image: props.blackStyle ? "/img/home-06/award/award-3-3.png" : "/img/home-06/award/award-3.png",
    alt: "Award 3",
    title: "2x Site of the Day",
    delay: ".7",
  },
]
</script>
