<template>
   <nav class="menu">
      <img
         src="../assets/logo-white.svg"
         alt="Journall Logo"
         class="menu__logo"
      />
      <menu-navigation></menu-navigation>
   </nav>
</template>

<script>
import MenuNavigation from "./MenuNavigation.vue";

export default {
   components: {
      "menu-navigation": MenuNavigation,
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.menu {
   background-color: $color-grey-25;
   padding: 1rem;
   &__logo {
      display: inline-block;
      height: 2rem;
      position: relative;
      z-index: 50;
   }
}
</style>