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
   @include responsive($screen-mobile-m) {
      padding: 1.5rem;
   }
   @include responsive($screen-tablet-s) {
      padding: 1.5rem 3rem;
   }
   @include responsive($screen-tablet-l) {
      padding: 2.25rem 0 0;
      flex-direction: column;
      justify-content: flex-start;
      height: 100vh;
   }
   &__logo {
      display: inline-block;
      height: 2rem;
      position: relative;
      z-index: 50;
   }
}
</style>