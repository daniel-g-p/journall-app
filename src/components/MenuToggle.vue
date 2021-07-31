<template>
   <div class="toggle" v-bind:class="activeClass" v-on:click="toggleMenu()">
      <div class="toggle__bar toggle__bar--1"></div>
      <div class="toggle__bar toggle__bar--2"></div>
      <div class="toggle__bar toggle__bar--3"></div>
   </div>
</template>

<script>
export default {
   props: {
      isActive: {
         type: Boolean,
         required: true,
      },
   },
   emits: ["toggle-menu"],
   computed: {
      activeClass() {
         return { "toggle--active": this.isActive };
      },
   },
   methods: {
      toggleMenu() {
         this.$emit("toggle-menu");
      },
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.toggle {
   display: block;
   position: relative;
   z-index: 50;
   color: $color-white;
   transition: color 0.25s ease;
   width: 2rem;
   height: 1.5rem;
   cursor: pointer;
   @include responsive($screen-tablet-l) {
      display: none;
   }
   &:hover {
      color: $color-grey-50;
   }
   &--active {
      .toggle__bar {
         &--1 {
            top: 50%;
            transform: translateY(-25%) rotate(-45deg);
         }
         &--2 {
            width: 90%;
            top: 50%;
            transform: translateY(-50%);
         }
         &--3 {
            top: 50%;
            left: 0;
            transform: translateY(-75%) rotate(45deg);
         }
      }
   }
   &__bar {
      position: absolute;
      display: block;
      background-color: currentColor;
      height: 0.25rem;
      border-radius: 0.125rem;
      transition: transform 0.25s ease, width 0.25s ease, left 0.25s ease,
         top 0.25s ease;
      &--1 {
         width: 67%;
         top: 0;
         left: 0;
         transform-origin: left center;
      }
      &--2 {
         width: 100%;
         top: 50%;
         right: 0;
         transform: translateY(-50%);
      }
      &--3 {
         width: 67%;
         top: 100%;
         left: 33%;
         transform-origin: left center;
         transform: translateY(-100%);
      }
   }
}
</style>