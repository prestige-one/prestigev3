<template>
  <ul>
    <li
      v-for="menu in menu_data"
      :key="menu.id"
      class="has-dropdown"
      :class="[
        menu.megaMenu ? 'p-static' : '',
        hoveredMenu === menu.id ? 'active' : ''
      ]"
      @mouseenter="hoveredMenu = menu.id"
      @mouseleave="hoveredMenu = null"
    >
      <NuxtLink :to="menu.link">
        {{ menu.title }}
        <span v-if="menu.pluseIncon" class="dropdown-btn" />
      </NuxtLink>

      <div
        v-if="menu.megaMenu"
        :class="`tp-megamenu-wrapper mega-menu ${megamenu_bg}`"
      >
        <div class="row gx-0">
          <header-render-menus :submenus="menu.submenus" :is-mega-menu="true" :project-menu="menu.projectMenu" />
        </div>
      </div>

      <ul v-else-if="menu.submenus" class="tp-submenu submenu">
        <header-render-menus :submenus="menu.submenus" />
      </ul>
    </li>
  </ul>
</template>


<script setup lang="ts">
import menu_data from "../../data/menu-data";

// State for hovered menu
 const hoveredMenu = ref<number | null>(menu_data[0]?.id || null);
 const { isDark } = useIsDark();
 const route = useRoute();
 const isShopPage = computed(() => route.path.includes("/shop"));
 const megamenu_bg = computed(() => isDark.value && isShopPage.value ? 'megamenu-white-bg' : isDark.value ? 'megamenu-black-bg' : 'megamenu-white-bg');
</script>