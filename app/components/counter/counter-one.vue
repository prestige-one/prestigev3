<script setup lang="ts">
const counterData = [
  {
    id: 1,
    title: "Clients Satisfied and <br> Repeating",
    count: 98,
    suffix: "%",
    dataDelay: ".3",
  },
  {
    id: 2,
    title: "Projects Completed in <br> 24 Countries",
    count: 125,
    suffix: "+",
    dataDelay: ".5",
  },
];
</script>

<template>
  <div class="row">
    <div v-for="item in counterData" :key="item.id" class="col-md-6 col-sm-6">
      <div class="tp-about-funcact-item tp_fade_anim mb-30" :data-delay="item.dataDelay">
        <span>
          <counter-item :min="0" :max="item.count" />
          {{ item.suffix }}
        </span>

        
        <p v-html="sanitizeHtml(item.title)" />
        
      </div>
    </div>
  </div>
</template>
