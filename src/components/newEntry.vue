<template>
   <section class="entry" v-bind:class="stateClass" ref="entry">
      <new-entry-canvas class="entry__canvas" v-model="entryData">
      </new-entry-canvas>
      <div
         class="entry__overlay"
         v-bind:class="circleClass"
         v-bind:style="circleStyle"
      ></div>
      <new-entry-button
         class="entry__button"
         v-on:toggle-canvas="activateCanvas"
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
         entryData: {
            title: "",
            content: "",
         },
         isActive: false,
         circleRadius: 0,
      };
   },
   computed: {
      stateClass() {
         return { "entry--active": this.isActive };
      },
      circleStyle() {
         return {
            width: this.circleRadius * 2 + "px",
            height: this.circleRadius * 2 + "px",
         };
      },
      circleClass() {
         return { "entry__overlay--active": this.isActive };
      },
   },
   methods: {
      activateCanvas() {
         this.isActive = !this.isActive;
      },
      setCircleRadius() {
         this.circleRadius =
            (document.body.clientHeight ** 2 +
               document.body.clientWidth ** 2) **
            0.5;
      },
   },
   mounted() {
      this.setCircleRadius();
      window.addEventListener(
         "resize",
         function () {
            this.setCircleRadius();
         }.bind(this)
      );
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
   overflow: hidden;
   pointer-events: none;
   &--active {
      pointer-events: all;
      overflow-y: scroll;
      .entry__canvas {
         transition: opacity 0.25s ease 0.5s, transform 0.25s ease 0.5s;
         transform: translateX(0);
         opacity: 1;
      }
   }
   &__button {
      position: fixed;
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
      transform: translateX(0.5rem);
      transition: opacity 0.25s ease, transform 0.5s ease;
   }
   &__overlay {
      position: fixed;
      z-index: 0;
      top: 100%;
      left: 100%;
      transform: translate(-50%, -50%) scale(0);
      display: block;
      background-color: $color-white;
      border-radius: 50%;
      transition: transform 0.5s ease-out 0.25s;
      &--active {
         transition: transform 0.5s ease-out;
         transform: translate(-50%, -50%) scale(1);
      }
   }
}
</style>