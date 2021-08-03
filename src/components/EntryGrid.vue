<template>
   <section class="grid">
      <entry-grid-card
         class="grid__item"
         v-for="item in content"
         v-bind:key="item.id"
         v-bind:title="item.title"
         v-bind:date="item.date"
         v-bind:content="item.content"
         v-bind:id="item.id"
         v-bind:totalLikes="item.likes.total"
         v-bind:isLiked="isLiked(item.id)"
      >
      </entry-grid-card>
   </section>
</template>

<script>
import EntryGridCard from "./EntryGridCard.vue";

export default {
   components: {
      "entry-grid-card": EntryGridCard,
   },
   props: {
      content: {
         type: Array,
         required: true,
      },
      userFavorites: {
         type: Array,
         required: true,
      },
   },
   methods: {
      isLiked(id) {
         return this.userFavorites.findIndex((item) => item.id === id) === -1
            ? false
            : true;
      },
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.grid {
   position: relative;
   display: grid;
   gap: 1rem;
   padding: 1rem 0;
   grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
   grid-auto-rows: 20rem;
   grid-auto-flow: dense;
   @include responsive($screen-mobile-s) {
      grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
   }
   @include responsive($screen-mobile-m) {
      padding: 1.5rem 0;
      gap: 1.5rem;
   }
   @include responsive($screen-tablet-s) {
      padding: 2.25rem 0;
      gap: 2.25rem;
   }
   @include responsive($screen-desktop-s) {
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
   }
   &__item {
      display: block;
      width: 100%;
      background-color: $color-white;
   }
}
</style>