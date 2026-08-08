<template>
  <ol class="prestige-pw" :style="{ '--pw-count': steps.length }">
    <li
      v-for="(step, i) in steps"
      :key="i"
      class="prestige-pw__step tp_fade_anim"
      :data-delay="0.2 + i * 0.1"
    >
      <div class="prestige-pw__chevron">
        <span class="prestige-pw__index">{{ t('pp.payment.step') }} {{ i + 1 }}</span>
        <span class="prestige-pw__value">{{ step.value }}</span>
        <span class="prestige-pw__label">{{ step.label }}</span>
      </div>
    </li>
  </ol>
</template>

<script setup lang="ts">
import type { PaymentMilestone } from "~/data/projects";

defineProps<{ steps: PaymentMilestone[] }>();

const { t } = useI18n();
</script>

<style scoped>
.prestige-pw {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.prestige-pw__step {
  flex: 1 1 0;
  min-width: 190px;
}

/* Arrow / chevron shaped step. On desktop the notch + point make each step read
   as a forward progression; monochrome white on the dark body. */
.prestige-pw__chevron {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 150px;
  padding: 26px 30px 26px 44px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  overflow: hidden;
  transition: background 0.4s ease, border-color 0.4s ease, transform 0.4s ease;
}
.prestige-pw__step:nth-child(1) .prestige-pw__chevron {
  background: rgba(255, 255, 255, 0.11);
}
.prestige-pw__step:nth-child(2) .prestige-pw__chevron {
  background: rgba(255, 255, 255, 0.065);
}
.prestige-pw__step:nth-child(n + 3) .prestige-pw__chevron {
  background: rgba(255, 255, 255, 0.025);
}
.prestige-pw__step:hover .prestige-pw__chevron {
  background: rgba(255, 255, 255, 0.13);
  border-color: rgba(255, 255, 255, 0.55);
  transform: translateY(-4px);
}
.prestige-pw__index {
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 12px;
}
.prestige-pw__value {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(38px, 4vw, 52px);
  line-height: 1;
  color: #fff;
}
.prestige-pw__label {
  margin-top: 10px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.4;
}

@media (min-width: 768px) {
  .prestige-pw {
    gap: 0;
    flex-wrap: nowrap;
  }
  .prestige-pw__step {
    margin-right: -18px;
  }
  .prestige-pw__step:last-child {
    margin-right: 0;
  }
  /* clip-path turns each card into a right-pointing arrow, so the row reads
     left-to-right like a stepper. First step is flush on the left. */
  .prestige-pw__chevron {
    border-radius: 0;
    clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
    padding-left: 48px;
  }
  .prestige-pw__step:first-child .prestige-pw__chevron {
    clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%);
    padding-left: 34px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .prestige-pw__step:hover .prestige-pw__chevron {
    transform: translateY(0);
    z-index: 2;
  }
}
</style>
