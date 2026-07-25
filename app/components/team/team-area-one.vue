<template>
  <div :class="`des-team-area ${spacingCls}`">
    <div class="container container-1750">
      <div class="row">
        <div class="col-xl-12">
          <div :class="`des-team-wrap ${wrapClass}`">
            <!-- card item -->
            <div
              v-for="(member, index) in team_data"
              :key="member.id"
              :class="[
                  'des-team-item-box hover-reveal-item p-relative',
                  itemCls,
                  { active: activeCard === null || activeCard === index }
              ]"
              @mouseenter="activeCard = index"
              @mouseleave="activeCard = null"
            >
              <NuxtLink
                to="/team-details"
                class="des-team-item d-flex align-items-center justify-content-between"
              >
                <span>{{ member.since }}</span>
                <h4 class="des-team-title">{{ member.name }}</h4>
                <span>{{ member.position }}</span>
              </NuxtLink>

              <div
                class="des-team-reveal-img"
                :style="{
                  backgroundImage: `url(${member.image})`,
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props
interface IProps {
  wrapClass?: string;
  spacingCls?: string;
  itemCls?:string;
}
withDefaults(defineProps<IProps>(), {
  wrapClass: "",
  spacingCls: "pb-200",
  itemCls: "",
});

// Local state
const activeCard = ref<number | null>(null);

// hover reveal composable
useImageHoverReveal();
const team_data = [
  {
    id: 1,
    since: "Since 2009",
    name: "Logan Dang",
    position: "CEO Founder",
    image: "/img/home-02/team/team-1.jpg",
  },
  {
    id: 2,
    since: "Since 2004",
    name: "Rahat Chowhury",
    position: "Web Designer",
    image: "/img/home-02/team/team-2.jpg",
  },
  {
    id: 3,
    since: "Since 2012",
    name: "Thomas Finlan",
    position: "Marketing Director",
    image: "/img/home-02/team/team-3.jpg",
  },
  {
    id: 4,
    since: "Since 2010",
    name: "Farhan Firoz",
    position: "UI/UX Designer",
    image: "/img/home-02/team/team-5.jpg",
  },
  {
    id: 5,
    since: "Since 2016",
    name: "Billy Craft",
    position: "Motion Designer",
    image: "/img/home-02/team/team-2.jpg",
  },
];
</script>
