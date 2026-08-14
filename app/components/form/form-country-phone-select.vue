<template>
  <div
    ref="root"
    class="prestige-country-phone"
    :class="`prestige-country-phone--${size}`"
    @keydown.esc.stop="closeDropdown"
  >
    <input type="hidden" :name="name" :value="modelValue">
    <button
      ref="trigger"
      type="button"
      class="prestige-country-phone__trigger"
      :aria-expanded="open"
      :aria-controls="listboxId"
      :aria-label="`Country code: ${selectedCountry.name} ${selectedCountry.dial}`"
      aria-haspopup="listbox"
      @click="toggleDropdown"
      @keydown.down.prevent="openDropdown"
    >
      <span class="prestige-country-phone__flag" aria-hidden="true">{{ getFlagEmoji(selectedCountry.iso2) }}</span>
      <span class="prestige-country-phone__dial">{{ selectedCountry.dial }}</span>
      <svg class="prestige-country-phone__chevron" viewBox="0 0 12 8" aria-hidden="true">
        <path d="m1 1 5 5 5-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <div v-if="open" class="prestige-country-phone__dropdown" @pointerdown.stop>
      <label class="prestige-country-phone__search-wrap">
        <span class="visually-hidden">Search countries</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
        <input
          ref="searchInput"
          v-model="searchQuery"
          type="search"
          class="prestige-country-phone__search"
          placeholder="Search country or code"
          autocomplete="off"
          @keydown.down.prevent="focusFirstOption"
        >
      </label>

      <ul :id="listboxId" class="prestige-country-phone__list" role="listbox">
        <li v-for="country in filteredCountries" :key="country.iso2">
          <button
            type="button"
            class="prestige-country-phone__option"
            role="option"
            :aria-selected="country.iso2 === modelValue"
            @click="selectCountry(country.iso2)"
          >
            <span class="prestige-country-phone__flag" aria-hidden="true">{{ getFlagEmoji(country.iso2) }}</span>
            <span class="prestige-country-phone__option-name">{{ country.name }}</span>
            <span class="prestige-country-phone__dial">{{ country.dial }}</span>
          </button>
        </li>
        <li v-if="!filteredCountries.length" class="prestige-country-phone__empty">No countries found</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { countries, getFlagEmoji } from "~/data/countries-data";

const props = withDefaults(defineProps<{
  name?: string;
  size?: "compact" | "regular";
}>(), {
  name: "phone_country",
  size: "regular",
});

const modelValue = defineModel<string>({ required: true });

const root = ref<HTMLElement | null>(null);
const trigger = ref<HTMLButtonElement | null>(null);
const searchInput = ref<HTMLInputElement | null>(null);
const open = ref(false);
const searchQuery = ref("");
const instanceId = useId().replace(/:/g, "");
const listboxId = `prestige-country-phone-${instanceId}-listbox`;

const selectedCountry = computed(() =>
  countries.find((country) => country.iso2 === modelValue.value) ?? countries[0]!,
);

const filteredCountries = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) return countries;

  return countries.filter((country) =>
    `${country.name} ${country.iso2} ${country.dial}`.toLowerCase().includes(query),
  );
});

async function openDropdown() {
  if (open.value) return;
  open.value = true;
  searchQuery.value = "";
  await nextTick();
  searchInput.value?.focus();
  root.value
    ?.querySelector<HTMLElement>('[role="option"][aria-selected="true"]')
    ?.scrollIntoView({ block: "nearest" });
}

function closeDropdown() {
  open.value = false;
  searchQuery.value = "";
}

function toggleDropdown() {
  if (open.value) closeDropdown();
  else void openDropdown();
}

function selectCountry(iso2: string) {
  modelValue.value = iso2;
  closeDropdown();
  nextTick(() => trigger.value?.focus());
}

function focusFirstOption() {
  root.value?.querySelector<HTMLButtonElement>(".prestige-country-phone__option")?.focus();
}

function handleDocumentPointerDown(event: PointerEvent) {
  if (root.value && !root.value.contains(event.target as Node)) closeDropdown();
}

onMounted(() => document.addEventListener("pointerdown", handleDocumentPointerDown));
onBeforeUnmount(() => document.removeEventListener("pointerdown", handleDocumentPointerDown));
</script>

<style scoped>
.prestige-country-phone {
  position: relative;
  z-index: 20;
  width: 108px;
  min-width: 108px;
  flex: 0 0 108px;
  color: #fff;
}

.prestige-country-phone__trigger {
  display: grid;
  width: 100%;
  height: var(--prestige-country-phone-height, 60px);
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 12px;
  border: 1px solid #484646;
  border-radius: 8px;
  background: #1f1f1f;
  color: #fff;
  text-align: left;
  cursor: pointer;
}

.prestige-country-phone--compact {
  --prestige-country-phone-height: 50px;
}

.prestige-country-phone__flag {
  flex: none;
  font-size: 19px;
  line-height: 1;
}

.prestige-country-phone__option-name {
  min-width: 0;
  overflow: hidden;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.prestige-country-phone__dial {
  padding-right: 2px;
  color: rgba(255, 255, 255, 0.68);
  font-size: 13px;
  white-space: nowrap;
}

.prestige-country-phone__chevron {
  width: 11px;
  transition: transform 180ms ease;
}

.prestige-country-phone__trigger[aria-expanded="true"] .prestige-country-phone__chevron {
  transform: rotate(180deg);
}

.prestige-country-phone__dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 100;
  width: min(360px, calc(100vw - 32px));
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 10px;
  background: #171719;
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.55);
}

.prestige-country-phone__search-wrap {
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 8px;
  padding: 0 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 7px;
  background: #222225;
}

.prestige-country-phone__search-wrap svg {
  flex: none;
  width: 17px;
  fill: none;
  stroke: rgba(255, 255, 255, 0.58);
  stroke-width: 1.6;
}

.prestige-country-phone__search {
  width: 100%;
  height: 42px;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: #fff;
  font-size: 14px;
}

.prestige-country-phone__search::placeholder {
  color: rgba(255, 255, 255, 0.46);
}

.prestige-country-phone__list {
  max-height: 280px;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  list-style: none;
  scrollbar-color: rgba(255, 255, 255, 0.24) transparent;
  scrollbar-width: thin;
}

.prestige-country-phone__option {
  display: grid;
  width: 100%;
  grid-template-columns: 28px minmax(0, 1fr) auto;
  align-items: center;
  gap: 9px;
  padding: 10px 9px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: #fff;
  text-align: left;
  cursor: pointer;
}

.prestige-country-phone__option:hover,
.prestige-country-phone__option:focus-visible,
.prestige-country-phone__option[aria-selected="true"] {
  outline: 0;
  background: rgba(255, 255, 255, 0.09);
}

.prestige-country-phone__empty {
  padding: 18px 10px;
  color: rgba(255, 255, 255, 0.52);
  font-size: 14px;
  text-align: center;
}

@media (prefers-reduced-motion: reduce) {
  .prestige-country-phone__chevron {
    transition: none;
  }
}
</style>
