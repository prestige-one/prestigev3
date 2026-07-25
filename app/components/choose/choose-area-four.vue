
<template>
  <div class="design-choose-area design-choose-2-style title-box pt-160 pb-120">
    <div class="container container-1680">
      <!-- Title -->
      <div class="row justify-content-center">
        <div class="col-xl-5">
          <div class="design-choose-title-box text-center mb-80">
            <p>
              We proved, design, implement, and market your idea with absolute
              transparency and efficiency in its core
            </p>
          </div>
        </div>
      </div>

      <!-- Main stats section (first row) -->
      <div class="design-choose-item-wrap">
        <div class="row justify-content-center">
          <div class="col-xl-9">
            <div class="row">
              <div
                v-for="(item, index) in mainStats.slice(0, 2)"
                :key="'row1-' + index"
                :class="['col-xl-6', item.mt ? 'mt-30' : '']"
              >
                <div
                  :class="item.className"
                  :style="item.bgColor ? { backgroundColor: item.bgColor } : {}"
                >
                  <span>{{ item.value }}<i>{{ item.suffix }}</i></span>
                  <p v-html="sanitizeHtml(item.text)"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main stats section (second row) -->
      <div class="design-choose-item-wrap">
        <div class="row justify-content-center">
          <div class="col-xl-9">
            <div class="row">
              <div
                v-for="(item, index) in mainStats.slice(2, 4)"
                :key="'row2-' + index"
                :class="['col-xl-6', item.mt ? 'mt-30' : '']"
              >
                <div
                  :class="item.className"
                  :style="item.bgColor ? { backgroundColor: item.bgColor } : {}"
                >
                  <span>{{ item.value }}<i>{{ item.suffix }}</i></span>
                  <p v-html="sanitizeHtml(item.text)"/>
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
interface StatItem {
  value: string;
  suffix: string;
  text: string;
  bgColor?: string;
  className: string;
  mt?: boolean;
}

// Main stats data
const mainStats: StatItem[] = [
  {
    value: "3",
    suffix: "m+",
    text: "In funding clients raised owing <br> to our design work",
    className: "design-choose-item design-choose-item-1 mb-30",
  },
  {
    value: "60",
    suffix: "+",
    text: "World's biggest international design <br> awards won",
    className: "design-choose-item design-choose-item-2 mb-30",
  },
  {
    value: "260",
    suffix: "+",
    text: "Crafted responsive, user-centered <br> website & app",
    className: "design-choose-item design-choose-item-1 mb-30",
  },
  {
    value: "12",
    suffix: "+",
    text: "We have had quite a run in our <br> 12+ years of working",
    className: "design-choose-item design-choose-item-2 mb-30",
  },
];
</script>