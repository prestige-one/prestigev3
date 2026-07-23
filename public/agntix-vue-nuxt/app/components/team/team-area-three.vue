<template>
  <div :class="`studio-team-area ${props.spacingCls} mb-60`">
    <div class="container container-1460">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="studio-team-title-box tp_text_anim text-center mb-80">
            <h3 class="tp-section-title-clash tp-text-revel-anim fs-200 mb-20">
              Our Team Member
            </h3>
            <p>
              Our ability to combine expertise and systems <br>
              thinking is what fuels us as a team.
            </p>
          </div>
        </div>
      </div>

      <div class="studio-team-wrap z-index-5">
        <div
          v-for="(pair, rowIndex) in groupedTeamMembers"
          :key="`row-${rowIndex}`"
          class="row"
        >
          <div
            v-for="member in pair"
            :key="member.id"
            :class="member.colClass"
          >
            <div :class="`studio-team-thumb-wrap ${member.wrapClass}`">
              <div
                :class="`studio-team-thumb ${member.className} p-relative ${member.mbClass}`"
              >
                <!-- image -->
                <img
                  :src="member.image"
                  :alt="member.name"
                >

                <!-- content -->
                <div class="studio-team-content text-center">
                  <h4 class="studio-team-title-sm">
                    <NuxtLink to="/team-details">
                      {{ member.name }}
                    </NuxtLink>
                  </h4>
                  <span>{{ member.position }}</span>
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

// Props
interface Props {
  spacingCls?: string
}
const props = withDefaults(defineProps<Props>(), {
  spacingCls: '',
})

// Slice data like in React
const teamSliceData = [
  {
    id: 1,
    name: "Andrew",
    position: "Developer",
    image: '/img/home-06/team/team-1.jpg',
    className: "studio-team-thumb-1",
    colClass: "col-md-6 col-sm-6",
    wrapClass: "mt-160",
    mbClass: "mb-120",
  },
  {
    id: 2,
    name: "Sophia",
    position: "Developer",
    image: '/img/home-06/team/team-2.jpg',
    className: "studio-team-thumb-3",
    colClass: "col-md-6 col-sm-6",
    wrapClass: "text-xl-end",
    mbClass: "mb-120",
  },
  {
    id: 3,
    name: "Emma",
    position: "Developer",
    image: '/img/home-06/team/team-3.jpg',
    className: "studio-team-thumb-2",
    colClass: "col-md-6 col-sm-6",
    wrapClass: "mt-160",
    mbClass: "mb-120",
  },
  {
    id: 4,
    name: "James",
    position: "Developer",
    image: '/img/home-06/team/team-4.jpg',
    className: "studio-team-thumb-4",
    colClass: "col-md-6 col-sm-6",
    wrapClass: "text-xl-end",
    mbClass: "mb-120",
  },
  {
    id: 5,
    name: "Oliver",
    position: "Developer",
    image: '/img/home-06/team/team-5.jpg',
    className: "studio-team-thumb-1",
    colClass: "col-md-6 col-sm-6",
    wrapClass: "mt-160",
    mbClass: "mb-120",
  },
  {
    id: 6,
    name: "Charlotte",
    position: "Developer",
    image: '/img/home-06/team/team-6.jpg',
    className: "studio-team-thumb-3",
    colClass: "col-md-6 col-sm-6",
    wrapClass: "text-xl-end",
    mbClass: "mb-120",
  },
]

// Group into pairs of 2
const groupedTeamMembers = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const groups: any[] = []
  for (let i = 0; i < teamSliceData.length; i += 2) {
    groups.push(teamSliceData.slice(i, i + 2))
  }
  return groups
})
</script>
