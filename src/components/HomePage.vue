<template>
   <base-header>
      <template v-slot:heading>
         Welcome to Journall, {{ user.username }}!
      </template>
      <template v-slot:default>
         <p class="header__text">Today I need a dose of:</p>
         <base-dropdown
            class="header__dropdown"
            v-bind:inputOptions="inputOptions"
            inputID="category"
            v-on:set-option="setOption"
            >{{ selectedOption }}</base-dropdown
         >
      </template>
   </base-header>
   <entry-grid
      v-bind:content="noOwn"
      v-bind:userFavorites="user.favorites"
   ></entry-grid>
</template>

<script>
export default {
   props: {
      user: {
         type: Object,
         required: true,
      },
      content: {
         type: Array,
         required: true,
      },
   },
   data() {
      return {
         inputOptions: [
            "Anything",
            "Admiration",
            "Curiosity",
            "Gratitude",
            "Hope",
            "Inspiration",
            "Joy",
            "Serenity",
         ],
         selectedOption: "Anything",
      };
   },
   computed: {
      noFavorites() {
         return this.content.filter(
            (entry) => !this.user.favorites.find((item) => item.id === entry.id)
         );
      },
      noOwn() {
         return this.noFavorites.filter(
            (entry) => !this.user.own.find((item) => item === entry.id)
         );
      },
   },
   methods: {
      setOption(option) {
         this.selectedOption = option;
      },
   },
   updated() {
      console.log(this.user);
      console.log(this.noFavorites);
      console.log(this.noOwn);
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.header {
   &__text {
      margin-bottom: 0.75rem;
      @include responsive($screen-mobile-l) {
         display: inline-block;
         margin-bottom: 0;
         margin-right: 0.75rem;
      }
   }
   &__dropdown {
      width: 12rem;
   }
}
</style>