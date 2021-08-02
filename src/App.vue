<template>
   <base-alert
      v-bind:message="alertMessage"
      v-bind:type="alertType"
      v-bind:isActive="alertActive"
      v-on:deactivate-alert="closeAlert"
   ></base-alert>
   <the-menu></the-menu>
   <the-content></the-content>
</template>

<script>
import TheMenu from "./components/TheMenu.vue";
import TheContent from "./components/TheContent.vue";

export default {
   components: {
      "the-menu": TheMenu,
      "the-content": TheContent,
   },
   provide() {
      return {
         emitAlert: this.emitAlert,
         closeAlert: this.closeAlert,
      };
   },
   data() {
      return {
         alertMessage: "",
         alertType: "",
         alertActive: false,
      };
   },
   methods: {
      closeAlert() {
         this.alertActive = false;
         setTimeout(
            function () {
               this.alertMessage = "";
               this.alertType = "";
            }.bind(this),
            250
         );
      },
      emitAlert(message, type) {
         this.alertActive = true;
         this.alertMessage = message;
         this.alertType = type;
      },
   },
   watch: {
      alertActive(value) {
         if (value) {
            setTimeout(
               function () {
                  this.alertActive = false;
               }.bind(this),
               5000
            );
         }
      },
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
   background: none;
}

#app {
   width: 100vw;
   height: 100vh;
   display: grid;
   grid-template-rows: max-content 1fr;
   @include responsive($screen-tablet-l) {
      grid-template-rows: 1fr;
      grid-template-columns: max-content 1fr;
   }
}
</style>
