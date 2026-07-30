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

      <!-- simple thumbnail list (Projects, Destinations) — same look and
           behaviour as the plain .tp-submenu below, just with a small
           preview image per item and a "view all" link at the bottom. -->
      <ul v-if="menu.simpleListMenu && menu.submenus" class="tp-submenu submenu prestige-thumb-submenu">
        <li v-if="menu.listLabel" class="prestige-thumb-submenu-label">
          <span>{{ menu.listLabel }}</span>
        </li>
        <li v-for="(item, i) in menu.submenus" :key="i">
          <NuxtLink :to="item.link || '#'">
            <img v-if="item.image" :src="item.image" :alt="item.title" class="prestige-thumb-submenu-img">
            <span>{{ item.title }}</span>
          </NuxtLink>
        </li>
        <li v-if="menu.viewAllLink" class="prestige-thumb-submenu-viewall">
          <NuxtLink :to="menu.viewAllLink">
            {{ menu.viewAllLabel || "View All" }} <span>→</span>
          </NuxtLink>
        </li>
      </ul>

      <!-- plain text submenu (About Us) -->
      <ul v-else-if="menu.submenus" class="tp-submenu submenu">
        <header-render-menus :submenus="menu.submenus" />
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import menu_data from "../../data/menu-data-prestige";
</script>
