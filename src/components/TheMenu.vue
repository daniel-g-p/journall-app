<template>
   <nav class="menu">
      <img
         src="../assets/logo-white.svg"
         alt="Journall Logo"
         class="menu__logo"
      />
      <menu-navigation v-bind:isActive="menuIsActive"></menu-navigation>
      <menu-toggle v-on:toggle-menu="toggleMenu"></menu-toggle>
   </nav>
</template>

<script>
import MenuNavigation from "./MenuNavigation.vue";
import MenuToggle from "./MenuToggle.vue";

export default {
   components: {
      "menu-navigation": MenuNavigation,
      "menu-toggle": MenuToggle,
   },
   data() {
      return {
         menuIsActive: false,
      };
   },
   methods: {
      toggleMenu() {
         this.menuIsActive = !this.menuIsActive;
      },
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.menu {
   background-color: $color-grey-25;
   padding: 1rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   &__logo {
      display: inline-block;
      height: 2rem;
      position: relative;
      z-index: 50;
   }
}
</style>