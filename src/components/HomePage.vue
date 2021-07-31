<template>
   <base-header>
      <template v-slot:heading>
         Welcome to Journall, {{ user.username }}!
      </template>
      <template v-slot:default>
         <p>Today I need a dose of:</p>
         <base-dropdown v-bind:inputOptions="inputOptions" inputID="category">{{
            selectedOption
         }}</base-dropdown>
      </template>
   </base-header>
</template>

<script>
export default {
   inject: {
      user: {
         type: Object,
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
};
</script>