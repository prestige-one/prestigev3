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
          <NuxtLink :to="subItem.link || '#'">
            {{ subItem.title }}
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
