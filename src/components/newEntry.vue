<template>
   <section
      v-if="canvasVisible"
      class="entry"
      v-bind:class="stateClass"
      ref="entry"
   >
      <base-confirm-card
         class="entry__confirm-card"
         v-bind:isActive="confirmDiscardActive"
         v-on:confirm="handleDiscard('confirm')"
         v-on:cancel="handleDiscard()"
      >
         <template v-slot:default
            >Are you sure that you want to discard this entry?</template
         >
         <template v-slot:confirm-button>Discard</template>
         <template v-slot:cancel-button>Cancel</template>
      </base-confirm-card>
      <div class="entry__canvas">
         <h1 class="entry__heading">
            The stage is yours, unleash your creativity!
         </h1>
         <new-entry-idea
            class="entry__idea"
            v-bind:ideaText="ideaText"
            v-on:update-idea="updateIdeatext"
         ></new-entry-idea>
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
   </section>
   <new-entry-button
      v-bind:isActive="isActive"
      v-on:toggle-canvas="toggleCanvas"
      v-on:post-entry="post"
      v-on:save-draft="save"
      v-on:discard-entry="toggleDiscardConfirmation"
   ></new-entry-button>
</template>

<script>
import newEntryButton from "./newEntryButton.vue";
import newEntryIdea from "./newEntryIdea.vue";

export default {
   components: {
      "new-entry-button": newEntryButton,
      "new-entry-idea": newEntryIdea,
   },
   inject: [
      "postEntry",
      "saveDraft",
      "discardEntry",
      "emitAlert",
      "closeAlert",
   ],
   data() {
      return {
         canvasVisible: false,
         content: "",
         title: "",
         textareaElement: null,
         textareaHeight: null,
         isActive: false,
         circleRadius: 0,
         buttonsActive: false,
         confirmDiscardActive: false,
         ideaText: "Need some inspiration? Click here!",
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
         this.updateIdeatext();
         this.textareaHeight = null;
      },
      toggleCanvas() {
         if (this.canvasVisible) {
            this.isActive = false;
            setTimeout(
               function () {
                  this.canvasVisible = false;
                  this.clearInputs();
               }.bind(this),
               750
            );
         } else {
            this.canvasVisible = true;
            setTimeout(
               function () {
                  this.isActive = true;
               }.bind(this),
               0
            );
         }
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
         this.toggleCanvas();
         if (this.inputsValid) {
            this.postEntry(this.title, this.content);
            this.emitAlert(
               "Congrats, Your new entry has been posted! You can still make changes to it under 'My Entries'.",
               "success"
            );
         } else if (this.title) {
            this.saveDraft(this.title, this.content);
            this.emitAlert(
               "Oops, Looks like your new entry was missing its content. No worries, it's saved as a draft under 'My Entries' for you to finish it off!",
               "error"
            );
         } else if (this.content) {
            this.saveDraft(this.title, this.content);
            this.emitAlert(
               "Oops, Looks like your new entry was missing a title. No worries, it's saved as a draft under 'My Entries' for you to finish it off!",
               "error"
            );
         } else {
            this.emitAlert(
               "Please add at least a title or some content to post a new entry.",
               "error"
            );
         }
      },
      save() {
         this.toggleCanvas();
         if (this.inputsValid || this.title || this.content) {
            this.saveDraft(this.title, this.content);
            this.emitAlert(
               "Your new entry has been saved to your drafts under 'My Entries'. Get some rest and pick it back up later!",
               "success"
            );
         } else {
            this.emitAlert(
               "Please add at least a title or some content to save your entry as a draft.",
               "error"
            );
         }
      },
      toggleDiscardConfirmation() {
         if (this.title || this.content) {
            this.confirmDiscardActive = !this.confirmDiscardActive;
         } else {
            this.toggleCanvas();
         }
      },
      handleDiscard(response = null) {
         if (response === "confirm") {
            this.discard();
            this.toggleCanvas();
            this.emitAlert("Your new entry has been discarded.", "success");
         }
         this.toggleDiscardConfirmation();
      },
      discard() {
         this.discardEntry();
      },
      updateIdeatext(text = "Need some inspiration? Click here!") {
         this.ideaText = text;
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