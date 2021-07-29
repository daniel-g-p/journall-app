<template>
   <the-menu></the-menu>
</template>

<script>
import TheMenu from "./components/TheMenu.vue";

export default {
   components: {
      "the-menu": TheMenu,
   },
};
</script>

<style lang="scss">
@import "./scss/abstracts.scss";

@font-face {
   font-family: "Pacifico";
   src: url("./fonts/pacifico-regular.woff2") format("woff2"),
      url("./fonts/pacifico-regular.woff") format("woff");
   font-weight: 400;
   font-style: normal;
}

@font-face {
   font-family: "Lato";
   src: url("./fonts/lato-bold.woff2") format("woff2"),
      url("./fonts/lato-bold.woff") format("woff");
   font-weight: 700;
   font-style: normal;
}

@font-face {
   font-family: "Lato";
   src: url("./fonts/lato-regular.woff2") format("woff2"),
      url("./fonts/lato-regular.woff") format("woff");
   font-weight: 400;
   font-style: normal;
}

*,
*::before,
*::after {
   margin: 0;
   padding: 0;
   box-sizing: inherit;
}

::selection {
   background-color: $color-grey-25;
   color: $color-white;
}

html {
   font: 400 100%/1 "Lato", sans-serif;
   color: $color-grey-25;
}

body {
   box-sizing: border-box;
   color: $color-grey-25;
}

a,
button {
   cursor: pointer;
}

button,
input,
textarea {
   outline: none;
   border: none;
   font: 400 1rem/1 "Lato", sans-serif;
}

#app {
   display: grid;
   @include responsive($screen-tablet-l) {
      grid-template-columns: max-content 1fr;
   }
}
</style>
