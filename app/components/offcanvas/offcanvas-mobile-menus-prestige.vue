<template>
  <ul>
    <li
      v-for="menuItem in menu_data"
      :key="menuItem.id"
      :class="`has-dropdown ${activeMenu === menuItem.id ? 'active' : ''}`"
    >
      <NuxtLink
        :to="menuItem.link"
        @click="handleMenuClick($event, menuItem)"
      >
        {{ menuItem.title }}
      </NuxtLink>

      <ul
        v-if="menuItem.submenus"
        class="tp-submenu submenu"
        :style="{ display: activeMenu === menuItem.id ? 'block' : 'none' }"
      >
        <li v-for="(subItem, subIndex) in menuItem.submenus" :key="subIndex">
          <NuxtLink :to="subItem.link || '#'" class="prestige-mobile-sub-link">
            <img v-if="subItem.image" :src="subItem.image" :alt="subItem.title" class="prestige-mobile-sub-img">
            <span>{{ subItem.title }}</span>
          </NuxtLink>
        </li>
        <li v-if="menuItem.viewAllLink" class="prestige-mobile-viewall">
          <NuxtLink :to="menuItem.viewAllLink">
            {{ menuItem.viewAllLabel || "View All" }} <span>→</span>
          </NuxtLink>
        </li>
      </ul>

      <button
        v-if="menuItem.submenus"
        class="tp-menu-close"
        :class="{ active: activeMenu === menuItem.id }"
        @click="toggleMenu(menuItem.id)"
      >
        <i class="fa-solid fa-plus" />
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import menu_data from '~/data/menu-data-prestige';
import type { MenuItem } from '~/types/menu-d-t';

const activeMenu = ref<number | null>(null);

const toggleMenu = (id: number): void => {
  activeMenu.value = activeMenu.value === id ? null : id;
};

const handleMenuClick = (e: Event, menuItem: MenuItem): void => {
  if (menuItem.submenus) {
    e.preventDefault();
    toggleMenu(menuItem.id);
  }
};
</script>

<style scoped>
.prestige-mobile-sub-link {
  display: flex;
  align-items: center;
  gap: 10px;
}

.prestige-mobile-sub-img {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  object-fit: cover;
}

.prestige-mobile-viewall {
  margin-top: 4px;
  padding-top: 10px !important;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.prestige-mobile-viewall a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
}
</style>
