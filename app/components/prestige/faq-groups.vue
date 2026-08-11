<template>
  <div class="prestige-faqgroups">
    <section
      v-for="(group, groupIndex) in groups"
      :key="group.title"
      class="prestige-faqgroups__group"
      :aria-labelledby="groupId(groupIndex)"
    >
      <h2 :id="groupId(groupIndex)" class="prestige-faqgroups__title">
        {{ group.title }}
      </h2>

      <div class="prestige-faqgroups__accordion">
        <article
          v-for="(item, itemIndex) in group.items"
          :key="item.question"
          class="prestige-faqgroups__item"
          :class="{ 'prestige-faqgroups__item--open': openItem === itemId(groupIndex, itemIndex) }"
        >
          <h3 class="prestige-faqgroups__question-heading">
            <button
              :id="buttonId(groupIndex, itemIndex)"
              class="prestige-faqgroups__question"
              type="button"
              :aria-expanded="openItem === itemId(groupIndex, itemIndex)"
              :aria-controls="panelId(groupIndex, itemIndex)"
              @click="toggle(groupIndex, itemIndex)"
            >
              <span>{{ item.question }}</span>
              <span class="prestige-faqgroups__icon" aria-hidden="true" />
            </button>
          </h3>

          <div
            :id="panelId(groupIndex, itemIndex)"
            class="prestige-faqgroups__answer"
            role="region"
            :aria-labelledby="buttonId(groupIndex, itemIndex)"
          >
            <div class="prestige-faqgroups__answer-inner">
              <p v-if="item.answer">{{ item.answer }}</p>
              <ol v-if="item.answerList?.length">
                <li v-for="line in item.answerList" :key="line">{{ line }}</li>
              </ol>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { PrestigeFaqGroup } from "~/data/faq-data";

defineProps<{ groups: PrestigeFaqGroup[] }>();

const openItem = ref("prestige-faq-item-0-0");

const itemId = (groupIndex: number, itemIndex: number) =>
  `prestige-faq-item-${groupIndex}-${itemIndex}`;
const groupId = (groupIndex: number) => `prestige-faq-group-${groupIndex}`;
const buttonId = (groupIndex: number, itemIndex: number) =>
  `prestige-faq-button-${groupIndex}-${itemIndex}`;
const panelId = (groupIndex: number, itemIndex: number) =>
  `prestige-faq-panel-${groupIndex}-${itemIndex}`;

function toggle(groupIndex: number, itemIndex: number) {
  const id = itemId(groupIndex, itemIndex);
  openItem.value = openItem.value === id ? "" : id;
}
</script>

<style scoped>
.prestige-faqgroups {
  max-width: 1120px;
  margin: 0 auto;
}

.prestige-faqgroups__group + .prestige-faqgroups__group {
  margin-top: clamp(48px, 6vw, 86px);
}

.prestige-faqgroups__title {
  margin: 0 0 20px;
  color: #fff;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 500;
  line-height: 1.15;
}

.prestige-faqgroups__accordion {
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
}

.prestige-faqgroups__item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
}

.prestige-faqgroups__question-heading {
  margin: 0;
}

.prestige-faqgroups__question {
  display: flex;
  width: 100%;
  padding: 24px 4px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border: 0;
  background: transparent;
  color: #fff;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(17px, 1.55vw, 21px);
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
  transition: color 0.25s ease;
}

.prestige-faqgroups__question:hover {
  color: rgba(255, 255, 255, 0.72);
}

.prestige-faqgroups__icon {
  position: relative;
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
}

.prestige-faqgroups__icon::before,
.prestige-faqgroups__icon::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 1px;
  background: #fff;
  content: "";
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease;
}

.prestige-faqgroups__icon::after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.prestige-faqgroups__item--open .prestige-faqgroups__icon::after {
  transform: translate(-50%, -50%);
}

.prestige-faqgroups__answer {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 0.4s ease, opacity 0.3s ease;
}

.prestige-faqgroups__item--open .prestige-faqgroups__answer {
  grid-template-rows: 1fr;
  opacity: 1;
}

.prestige-faqgroups__answer-inner {
  overflow: hidden;
}

.prestige-faqgroups__answer p,
.prestige-faqgroups__answer ol {
  max-width: 900px;
  color: rgba(255, 255, 255, 0.68);
  font-size: 16px;
  line-height: 1.65;
}

.prestige-faqgroups__answer p {
  margin: 0;
  padding: 0 52px 24px 4px;
}

.prestige-faqgroups__answer ol {
  margin: -8px 52px 24px 26px;
  padding-left: 18px;
}

.prestige-faqgroups__answer li + li {
  margin-top: 5px;
}

@media (max-width: 575.98px) {
  .prestige-faqgroups__group + .prestige-faqgroups__group {
    margin-top: 42px;
  }

  .prestige-faqgroups__title {
    margin-bottom: 12px;
    font-size: 22px;
    text-align: center;
  }

  .prestige-faqgroups__question {
    padding: 20px 0;
    gap: 16px;
    font-size: 17px;
  }

  .prestige-faqgroups__answer p {
    padding: 0 0 20px;
  }

  .prestige-faqgroups__answer ol {
    margin: -6px 0 20px 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-faqgroups__answer,
  .prestige-faqgroups__icon::after {
    transition: none;
  }
}
</style>
