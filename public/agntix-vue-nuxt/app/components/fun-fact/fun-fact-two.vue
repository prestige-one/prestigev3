<template>
  <div
    class="ar-funfact-area ar-funfact-bg"
    :class="spacingCls"
    :style="{ backgroundImage: 'url(/img/home-08/hero/hero-bg-shape.png)' }"
  >
    <div class="container container-1330">
      <div class="row">
        <div
          v-for="fact in funFacts"
          :key="fact.id"
          class="col-lg-3 col-md-4"
        >
          <div
            class="ar-funfact-item text-center mb-45 tp_fade_anim"
            :data-delay="fact.delay"
          >
            <h4>
              <counter-item :min="0" :max="fact.value" />
              {{ fact.suffix }}
            </h4>
            <span>{{ fact.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FunFactItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
  delay: string;
  duration?: number;
}

withDefaults(defineProps<{ spacingCls?: string }>(), {
  spacingCls: "mb-110",
})

const funFacts: FunFactItem[] = [
  {
    id: 1,
    value: 4,
    suffix: "k+",
    label: "Projects completed",
    delay: ".3",
  },
  {
    id: 2,
    value: 91,
    suffix: "+",
    label: "renovation experts",
    delay: ".5",
  },
  {
    id: 3,
    value: 42,
    suffix: "+",
    label: "renovation experts",
    delay: ".7",
  },
  {
    id: 4,
    value: 24,
    suffix: "+",
    label: "Projects completed",
    delay: ".8",
  },
];
</script>
