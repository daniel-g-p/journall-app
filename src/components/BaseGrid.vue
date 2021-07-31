<template>
   <section class="grid">
      <base-entry
         class="grid__item"
         v-for="item in content"
         v-bind:key="item.id"
      >
      </base-entry>
   </section>
</template>

<script>
export default {
   props: {
      content: {
         type: Array,
         required: true,
      },
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.grid {
   display: grid;
   gap: 1rem;
   padding: 1rem 0;
   grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
   @include responsive($screen-mobile-m) {
      padding: 1.5rem 0;
      gap: 1.5rem;
   }
   @include responsive($screen-tablet-s) {
      padding: 2.25rem 0;
      gap: 2.25rem;
   }
   //    @include responsive($screen-mobile-l) {
   //       grid-template-columns: 1fr 1fr;
   //    }
   //    @include responsive($screen-tablet-l) {
   //       grid-template-columns: 1fr 1fr 1fr;
   //    }
   //    @include responsive($screen-desktop-l) {
   //       grid-template-columns: 1fr 1fr 1fr 1fr;
   //    }
   &__item {
      display: block;
      width: 100%;
      height: 20rem;
      background-color: $color-white;
   }
}
</style>