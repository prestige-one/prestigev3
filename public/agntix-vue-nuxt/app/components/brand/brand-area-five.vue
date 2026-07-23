<template>
  <div :class="`des-brand-area ${titleClass} ${spacing}`">
    <div class="container container-1830">
      <div class="row">
        <div class="col-xl-6">
          <div class="des-brand-title-box mb-40">
            <h3 :class="`tp-section-subtitle-clash ${titleClr} mb-0`">
              Our clients
              <i><svg-arrow-long-two /></i>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <!-- brand moving wrap -->
    <brand-moving-wrap :black-style="blackStyle" />
    <!-- brand moving wrap -->
  </div>
</template>

<script setup lang="ts">
type Props = {
  titleClass?: string;
  blackStyle?:boolean;
  spacing?:string;
  titleClr?:string;
}
withDefaults(defineProps<Props>(),
  {
    titleClass: "",
    blackStyle:true,
    spacing: 'pb-200',
    titleClr: 'color-red'
  }
);

</script>
