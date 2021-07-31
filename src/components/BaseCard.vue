<template>
   <div class="card" v-bind:class="modifiedClass">
      <slot></slot>
   </div>
</template>

<script>
export default {
   props: {
      modifier: {
         type: String,
         required: false,
      },
   },
   computed: {
      modifiedClass() {
         let output = {};
         if (this.modifier === "horizontal") {
            output = { "card--horizontal": true };
         } else if (this.modifier === "vertical") {
            output = { "card--vertical": true };
         }
         return output;
      },
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.card {
   border-radius: 0.25rem;
   box-shadow: 0 0.5rem 1rem $color-shadow;
   padding: 1rem;
   @include responsive($screen-mobile-m) {
      padding: 1.5rem;
   }
   &--horizontal {
      @include responsive($screen-tablet-s) {
         grid-column: span 2;
      }
   }
   &--vertical {
      @include responsive($screen-tablet-s) {
         grid-row: span 2;
      }
   }
}
</style>