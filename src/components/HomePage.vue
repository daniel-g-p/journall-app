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
   <base-grid v-bind:content="entries"></base-grid>
</template>

<script>
export default {
   inject: {
      user: {
         type: Object,
         required: true,
      },
      entries: {
         type: Array,
         required: true,
      },
      quotes: {
         type: Array,
         required: true,
      },
   },
   data() {
      return {
         inputOptions: [
            "Anything",
            "Joy",
            "Gratitude",
            "Serenity",
            "Curiosity",
            "Inspiration",
            "Hope",
            "Admiration",
         ],
         selectedOption: "Anything",
      };
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