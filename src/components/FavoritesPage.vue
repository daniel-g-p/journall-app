<template>
   <base-header>
      <template v-slot:heading> Relive your best memories </template>
      <template v-slot:default>
         <p class="header__text">
            Whether you need a laugh, some inspiration or just some good old
            entertainment, here you can find all of your favorite stories by
            other people.
         </p>
      </template>
   </base-header>
   <entry-grid
      v-bind:content="parsedContent"
      v-bind:userFavorites="favorites"
   ></entry-grid>
</template>

<script>
export default {
   props: {
      all: {
         type: Array,
         required: true,
      },
      favorites: {
         type: Array,
         required: true,
      },
   },
   computed: {
      parsedContent() {
         return this.all.filter((item) =>
            this.favorites.find((favorite) => favorite.id === item.id)
         );
      },
   },
};
</script>