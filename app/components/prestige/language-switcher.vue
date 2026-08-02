<template>
  <div ref="root" class="lang-switch" :class="{ open }">
    <button
      class="lang-switch__btn"
      type="button"
      :aria-label="t('language.select')"
      :aria-expanded="open ? 'true' : 'false'"
      @click="open = !open"
    >
      <svg class="lang-switch__globe" viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.4" />
        <path d="M3 12h18" stroke="currentColor" stroke-width="1.4" />
        <path d="M12 3c2.5 2.4 3.8 5.6 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3Z" stroke="currentColor" stroke-width="1.4" />
      </svg>
      <span class="lang-switch__code">{{ currentCode }}</span>
      <span class="lang-switch__caret" aria-hidden="true" />
    </button>

    <ul v-show="open" class="lang-switch__menu" role="listbox">
      <li v-for="l in localeList" :key="l.code" role="option" :aria-selected="l.code === locale">
        <NuxtLink
          :to="switchLocalePath(l.code)"
          class="lang-switch__item"
          :class="{ active: l.code === locale }"
          @click="open = false"
        >
          <span class="lang-switch__name">{{ l.name }}</span>
          <img class="lang-switch__flag" :src="`/assets/flags/${l.code}.svg`" :alt="l.code.toUpperCase()" width="24" height="18" loading="lazy">
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { LocaleObject } from "@nuxtjs/i18n";

const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const open = ref(false);
const root = ref<HTMLElement | null>(null);

const currentCode = computed(() => String(locale.value).toUpperCase());

// `locales` is typed as (string | LocaleObject)[]; we always configure full
// objects with code/name in nuxt.config, so normalise to LocaleObject[].
const localeList = computed<LocaleObject[]>(() =>
  (locales.value as (string | LocaleObject)[]).map((l) =>
    typeof l === "string" ? ({ code: l, name: l.toUpperCase() } as LocaleObject) : l,
  ),
);

function onDocClick(e: MouseEvent) {
  if (root.value && !root.value.contains(e.target as Node)) open.value = false;
}
onMounted(() => document.addEventListener("click", onDocClick));
onBeforeUnmount(() => document.removeEventListener("click", onDocClick));
</script>

<style scoped>
.lang-switch {
  position: relative;
  display: inline-block;
  margin-right: 12px;
}
.lang-switch__btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 2px 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 40px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.lang-switch__btn:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.28);
}
.lang-switch__globe { flex: 0 0 auto; }
.lang-switch__code { font-weight: 500; }
.lang-switch__caret {
  width: 6px;
  height: 6px;
  border-right: 1.4px solid currentColor;
  border-bottom: 1.4px solid currentColor;
  transform: rotate(45deg) translateY(-1px);
  transition: transform 0.3s ease;
}
.lang-switch.open .lang-switch__caret { transform: rotate(-135deg); }

.lang-switch__menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  min-width: 190px;
  margin: 0;
  padding: 8px;
  list-style: none;
  background: rgba(8, 8, 10, 0.98);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
  z-index: 60;
}
.lang-switch__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 12px;
  border-radius: 9px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 14.5px;
  white-space: nowrap;
  transition: color 0.2s ease, background 0.2s ease;
}
.lang-switch__item:hover { color: #fff; background: rgba(255, 255, 255, 0.06); }
.lang-switch__item.active { color: #fff; background: rgba(255, 255, 255, 0.1); }
.lang-switch__flag {
  flex: 0 0 auto;
  width: 24px;
  height: 18px;
  border-radius: 3px;
  object-fit: cover;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.12);
}

/* RTL: flip menu anchoring so it stays within the header */
:global([dir="rtl"]) .lang-switch__menu {
  right: auto;
  left: 0;
}
:global([dir="rtl"]) .lang-switch {
  margin-right: 0;
  margin-left: 12px;
}
</style>
