<template>
   <section class="entry" v-bind:class="stateClass" ref="entry">
      <div class="entry__canvas">
         <h1 class="entry__heading">
            The stage is yours, unleash your creativity!
         </h1>
         <new-entry-idea class="entry__idea"></new-entry-idea>
         <input
            class="entry__title"
            type="text"
            placeholder="Title"
            v-model="title"
         />
         <textarea
            class="entry__content"
            placeholder="Start writing here..."
            ref="textarea"
            v-bind:style="textareaStyle"
            v-on:input="resizeTextArea"
            v-model="content"
         ></textarea>
      </div>
      <div
         class="entry__overlay"
         v-bind:class="circleClass"
         v-bind:style="circleStyle"
      ></div>
      <new-entry-button
         class="entry__button"
         v-on:toggle-canvas="activateCanvas"
         v-on:post-entry="post"
         v-on:save-draft="save"
         v-on:discard-entry="discard"
      ></new-entry-button>
   </section>
</template>

<script>
import newEntryButton from "./newEntryButton.vue";
import newEntryIdea from "./newEntryIdea.vue";

export default {
   components: {
      "new-entry-button": newEntryButton,
      "new-entry-idea": newEntryIdea,
   },
   inject: ["postEntry", "saveDraft", "discardEntry", "emitAlert"],
   data() {
      return {
         content: "",
         title: "",
         textareaElement: null,
         textareaHeight: null,
         isActive: false,
         circleRadius: 0,
      };
   },
   computed: {
      stateClass() {
         return { "entry--active": this.isActive };
      },
      textareaStyle() {
         return { height: this.textareaHeight };
      },
      circleStyle() {
         return {
            width: this.circleRadius * 2 + "px",
            height: this.circleRadius * 2 + "px",
         };
      },
      circleClass() {
         return { "entry__overlay--active": this.isActive };
      },
      inputsValid() {
         return this.content && this.title ? true : false;
      },
   },
   methods: {
      clearInputs() {
         this.content = "";
         this.title = "";
      },
      delayClearInputs() {
         setTimeout(
            function () {
               this.clearInputs();
            }.bind(this),
            500
         );
      },
      activateCanvas() {
         this.isActive = !this.isActive;
      },
      resizeTextArea() {
         this.textareaHeight = this.textareaElement.scrollHeight + "px";
      },
      setCircleRadius() {
         this.circleRadius =
            (document.body.clientHeight ** 2 +
               document.body.clientWidth ** 2) **
            0.5;
      },
      post() {
         if (this.inputsValid) {
            this.postEntry(this.title, this.content);
            this.delayClearInputs();
         }
      },
      save() {
         if (this.inputsValid) {
            this.saveDraft(this.title, this.content);
            this.delayClearInputs();
         }
      },
      discard() {
         this.discardEntry();
         this.delayClearInputs();
      },
   },
   mounted() {
      this.textareaElement = this.$refs.textarea;
      this.setCircleRadius();
      window.addEventListener(
         "resize",
         function () {
            this.setCircleRadius();
         }.bind(this)
      );
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.entry {
   position: fixed;
   z-index: 150;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   overflow: hidden;
   pointer-events: none;
   &--active {
      pointer-events: all;
      overflow-y: scroll;
      .entry__canvas {
         transition: opacity 0.25s ease 0.5s, transform 0.25s ease 0.5s;
         transform: translateX(0);
         opacity: 1;
      }
   }
   &__button {
      position: fixed;
      z-index: 200;
      bottom: 1rem;
      right: 1rem;
      pointer-events: all;
      @include responsive($screen-mobile-m) {
         bottom: 1.5rem;
         right: 1.5rem;
      }
      @include responsive($screen-tablet-s) {
         bottom: 2.25rem;
         right: 2.25rem;
      }
      @include responsive($screen-tablet-l) {
         bottom: 3rem;
         right: 3rem;
      }
      @include responsive($screen-desktop-m) {
         bottom: 4.5rem;
         right: 4.5rem;
      }
   }
   &__canvas {
      position: relative;
      z-index: 175;
      opacity: 0;
      transform: translateX(0.5rem);
      transition: opacity 0.25s ease, transform 0.5s ease;
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
   }
   &__heading {
      font-family: "Pacifico", sans-serif;
      font-size: 2.25rem;
      line-height: 1.25;
      margin-bottom: 1.5rem;
   }
   &__idea {
      margin-bottom: 1.5rem;
   }
   &__title {
      font-size: 1.5rem;
      font-weight: 700;
      color: $color-green;
      margin-bottom: 0.75rem;
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
   &__overlay {
      position: fixed;
      z-index: 0;
      top: 100%;
      left: 100%;
      transform: translate(-50%, -50%) scale(0);
      display: block;
      background-color: $color-white;
      border-radius: 50%;
      transition: transform 0.5s ease-out 0.25s;
      &--active {
         transition: transform 0.5s ease-out;
         transform: translate(-50%, -50%) scale(1);
      }
   }
}
</style>