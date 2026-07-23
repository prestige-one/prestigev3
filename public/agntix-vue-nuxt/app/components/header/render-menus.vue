<template>
  <template v-if="!projectMenu">
    <template v-for="(submenu, i) in submenus" :key="i">
      <!-- Thumbnail Item -->
      <div v-if="submenu.isThumb" class="tp-megamenu-list">
        <div class="tp-megamenu-thumb">
          <img v-if="submenu.thumbSrc" :src="submenu.thumbSrc" :alt="submenu.thumbAlt || 'image'">
        </div>
      </div>

      <!-- Mega Menu Column -->
      <div v-else-if="isMegaMenu" class="col-xl-2">
        <div class="tp-megamenu-list">
          <h4 v-if="submenu.title" class="tp-megamenu-title">{{ submenu.title }}</h4>
          <ul v-if="submenu.megaMenu">
            <li v-for="(item, j) in submenu.megaMenu" :key="j">
              <nuxt-link :to="item.link">
                {{ item.title }}
                <span v-if="item.tag" :class="getTagClass(item.tag)">
                  {{ item.tag }}
                </span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Nested Submenu -->
      <li v-else-if="submenu.submenus" class="menu-item-has-children">
        <nuxt-link :to="submenu.link || '#'">{{ submenu.title }}</nuxt-link>
        <ul class="tp-submenu submenu">
          <render-menus :submenus="submenu.submenus" />
        </ul>
      </li>

      <!-- Regular Link -->
      <li v-else>
        <nuxt-link :to="submenu.link || '#'">{{ submenu.title }}</nuxt-link>
      </li>
    </template>
  </template>

  <template v-if="projectMenu">

    <div class="col-xl-10">
      <div class="row gx-0">
        <template v-for="(submenu, i) in submenus" :key="i">
          <!-- Skip thumbnail items in the col-xl-10 wrapper -->
          <template v-if="!submenu.isThumb">
            <!-- Mega Menu Column -->
            <div v-if="isMegaMenu" class="col-xl-3">
              <div class="tp-megamenu-list">
                <h4 v-if="submenu.title" class="tp-megamenu-title">{{ submenu.title }}</h4>
                <ul v-if="submenu.megaMenu">
                  <li v-for="(item, j) in submenu.megaMenu" :key="j">
                    <nuxt-link :to="item.link">
                      {{ item.title }}
                      <span v-if="item.tag" :class="getTagClass(item.tag)">
                        {{ item.tag }}
                      </span>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Nested Submenu -->
            <li v-else-if="submenu.submenus" class="menu-item-has-children">
              <nuxt-link :to="submenu.link || '#'">{{ submenu.title }}</nuxt-link>
              <ul class="tp-submenu submenu">
                <render-menus :submenus="submenu.submenus" />
              </ul>
            </li>

            <!-- Regular Link -->
            <li v-else>
              <nuxt-link :to="submenu.link || '#'">{{ submenu.title }}</nuxt-link>
            </li>
          </template>
        </template>
      </div>
    </div>

    <!-- Thumbnail Item -->
    <template v-for="(submenu, i) in submenus" :key="'thumb-' + i">
      <div v-if="submenu.isThumb" class="col-xl-2">
        <div class="tp-megamenu-list">
          <div class="tp-megamenu-thumb">
            <img v-if="submenu.thumbSrc" :src="submenu.thumbSrc" :alt="submenu.thumbAlt || 'image'">
          </div>
        </div>
      </div>
    </template>
  </template>
</template>


<script setup lang="ts">
import type { Submenu } from '~/types/menu-d-t';


defineProps<{
  submenus: Submenu[];
  isMegaMenu?: boolean;
  projectMenu?: boolean;
}>();

const getTagClass = (tag: string) => {
  switch (tag) {
    case "Popular": return "pop";
    case "Trending": return "new";
    case "Hot": return "hot";
    default: return "";
  }
};
</script>