<template>
   <section class="entry" v-bind:class="stateClass">
      <new-entry-canvas class="entry__canvas"></new-entry-canvas>
      <div class="entry__overlay"></div>
      <new-entry-button
         class="entry__button"
         v-on:activate-canvas="activateCanvas"
      ></new-entry-button>
   </section>
</template>

<script>
import newEntryButton from "./newEntryButton.vue";
import newEntryCanvas from "./newEntryCanvas.vue";

export default {
   components: {
      "new-entry-button": newEntryButton,
      "new-entry-canvas": newEntryCanvas,
   },
   data() {
      return {
         isActive: false,
      };
   },
   computed: {
      stateClass() {
         return { "entry--active": this.isActive };
      },
   },
   methods: {
      activateCanvas() {
         this.isActive = !this.isActive;
      },
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.entry {
   position: fixed;
   z-index: 150;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   pointer-events: none;
   padding: 1rem;
   @include responsive($screen-mobile-m) {
      padding: 1.5rem;
   }
   @include responsive($screen-tablet-s) {
      padding: 2.25rem;
   }
   @include responsive($screen-tablet-l) {
      padding: 3rem;
   }
   @include responsive($screen-desktop-m) {
      padding: 4.5rem;
   }
   &--active {
      pointer-events: all;
      .entry__canvas {
         opacity: 1;
      }
   }
   &__button {
      position: absolute;
      z-index: 200;
      bottom: 1rem;
      right: 1rem;
      pointer-events: all;
      @include responsive($screen-mobile-m) {
         bottom: 1.5rem;
         right: 1.5rem;
      }
      @include responsive($screen-tablet-s) {
         bottom: 2.25rem;
         right: 2.25rem;
      }
      @include responsive($screen-tablet-l) {
         bottom: 3rem;
         right: 3rem;
      }
      @include responsive($screen-desktop-m) {
         bottom: 4.5rem;
         right: 4.5rem;
      }
   }
   &__canvas {
      position: relative;
      z-index: 175;
      opacity: 0;
      transition: opacity 0.25s ease;
   }
}
</style>