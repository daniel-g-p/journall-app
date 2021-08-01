<template>
   <div class="canvas">
      <h1 class="canvas__heading">
         The stage is yours, unleash your creativity!
      </h1>
      <div class="canvas__inspiration">Need some inspiration?</div>
      <input class="canvas__title" type="text" placeholder="Title" />
      <textarea
         class="canvas__content"
         placeholder="Start writing here..."
         ref="textarea"
         v-bind:style="textareaStyle"
         v-on:input="resizeTextArea()"
      ></textarea>
   </div>
</template>

<script>
export default {
   data() {
      return {
         textareaElement: null,
         textareaHeight: null,
      };
   },
   computed: {
      textareaStyle() {
         return { height: this.textareaHeight };
      },
   },
   methods: {
      resizeTextArea() {
         this.textareaHeight = this.textareaElement.scrollHeight + "px";
      },
   },
   mounted() {
      this.textareaElement = this.$refs.textarea;
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.canvas {
   padding: 1rem;
   @include responsive($screen-mobile-m) {
      padding: 1.5rem;
   }
   @include responsive($screen-tablet-s) {
      padding: 2.25rem;
   }
   @include responsive($screen-tablet-l) {
      padding: 3rem;
   }
   @include responsive($screen-desktop-m) {
      padding: 4.5rem;
   }
   &__heading {
      font-family: "Pacifico", sans-serif;
      font-size: 2.25rem;
      line-height: 1.25;
      margin-bottom: 1rem;
   }
   &__title {
      font-size: 1.5rem;
      font-weight: 700;
      color: $color-green;
      &::placeholder {
         color: rgba($color-green, 0.5);
      }
   }
   &__content {
      width: 100%;
      flex-grow: 1;
      resize: none;
      font-size: 1.25rem;
      line-height: 1.5;
      &::placeholder {
         color: rgba($color-grey-25, 0.5);
      }
   }
}
</style>