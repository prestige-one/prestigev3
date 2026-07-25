<template>
  <ul>
    <li
      v-for="menu in menu_data"
      :key="menu.id"
      :class="[menu.submenus ? 'has-dropdown' : '']"
    >
      <NuxtLink :to="menu.link">
        {{ menu.title }}
        <span v-if="menu.pluseIncon" class="dropdown-btn" />
      </NuxtLink>

      <ul v-if="menu.submenus" class="tp-submenu submenu">
        <header-render-menus :submenus="menu.submenus" />
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import menu_data from "../../data/menu-data-prestige";
</script>
