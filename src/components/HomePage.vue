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
      v-bind:content="parsedContent"
      v-bind:userFavorites="user.favorites"
   ></entry-grid>
   <new-entry></new-entry>
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
      contentWithoutFavorites() {
         return this.content.filter(
            (entry) => !this.user.favorites.find((item) => item.id === entry.id)
         );
      },
      contentWithoutOwn() {
         return this.contentWithoutFavorites.filter(
            (entry) => !this.user.own.find((item) => item === entry.id)
         );
      },
      parsedContent() {
         if (this.selectedOption === "Anything") {
            return this.contentWithoutOwn;
         } else {
            const category = this.selectedOption.toLowerCase();
            return this.contentWithoutOwn.filter(
               (entry) => entry.likes[category] / entry.likes.total >= 1 / 3
            );
         }
      },
   },
   methods: {
      setOption(option) {
         this.selectedOption = option;
      },
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