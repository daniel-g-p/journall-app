<template>
   <section class="grid">
      <base-entry
         class="grid__item"
         v-for="item in content"
         v-bind:key="item.id"
         v-bind:title="item.title"
         v-bind:date="item.date"
         v-bind:content="item.content"
         v-bind:id="item.id"
         v-bind:totalLikes="item.likes.total"
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
   grid-auto-rows: 20rem;
   grid-auto-flow: dense;
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
      background-color: $color-white;
   }
}
</style>