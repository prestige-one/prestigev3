<template>
   <ul>
    <li
      v-for="(item, index) in menuDataTwo"
      :key="`menu-${index}`"
      :class="[
        'has-dropdown',
        { 'p-static': item.static },
        { 'active': activeMenus.includes(index) },
        { 'is-active': hoveredMenu === index || hoveredMenu === null }
      ]"
      @mouseenter="hoveredMenu = index"
      @mouseleave="hoveredMenu = null"
    >
      <nuxt-link to="#" @click="toggleMenu(index)">
        {{ item.title }}
      </nuxt-link>
      
      <template v-if="item.subItems">
        <ul 
          class="tp-submenu submenu" 
          :style="{ display: submenuDisplay[index] ? 'block' : 'none' }"
        >
          <li
            v-for="(subItem, subIndex) in item.subItems"
            :key="`submenu-${index}-${subIndex}`"
          >
            <nuxt-link :to="isDark ? `/dark${subItem.href}` : subItem.href">
              {{ subItem.title }}
            </nuxt-link>
          </li>
        </ul>
        
        <button 
          class="tp-menu-close" 
          @click="toggleMenu(index)"
        >
          <i class="fa-solid fa-plus" />
        </button>
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
import menuDataTwo from '~/data/menu-data-two';
const activeMenus = ref<number[]>([]);
const submenuDisplay = ref<{[key: number]: boolean}>({});
const hoveredMenu = ref<number | null>(null);

const {isDark} = useIsDark();
const toggleMenu = (index: number) => {
  // Toggle submenu display
  submenuDisplay.value = {
    ...submenuDisplay.value,
    [index]: !submenuDisplay.value[index]
  };

  // Update active menus
  if (activeMenus.value.includes(index)) {
    activeMenus.value = activeMenus.value.filter(i => i !== index);
  } else {
    activeMenus.value = [...activeMenus.value, index];
  }
};
</script>