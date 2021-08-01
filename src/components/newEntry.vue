<template>
   <section class="entry">
      <new-entry-button class="entry__button"></new-entry-button>
   </section>
</template>

<script>
import newEntryButton from "./newEntryButton.vue";

export default {
   components: {
      "new-entry-button": newEntryButton,
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
   &__button {
      position: fixed;
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
}
</style>