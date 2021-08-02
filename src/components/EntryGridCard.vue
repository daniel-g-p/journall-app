<template>
   <base-card class="entry" v-bind:modifier="entryClass" ref="container">
      <h2 class="entry__heading">{{ title }}</h2>
      <div class="entry__date">
         {{ date.day }} {{ date.month }} {{ date.year }}
      </div>
      <p class="entry__preview">
         {{ content }}
      </p>
      <div class="entry__overlay"></div>
      <div class="entry__controls">
         <div class="entry__links">
            <a v-bind:href="id" class="entry__link">Read</a>
         </div>
         <entry-grid-card-like
            v-bind:totalLikes="totalLikes"
            v-bind:isLiked="isLiked"
            v-on:activate-form="toggleForm"
            v-on:removeLike="removeLike(id)"
         ></entry-grid-card-like>
      </div>
      <div
         class="entry__circle"
         v-bind:class="circleClass"
         v-bind:style="circleStyle"
      ></div>
      <entry-grid-card-form
         class="entry__form"
         v-bind:class="formClass"
         v-bind:id="id"
         v-on:save-entry="saveEntry"
         v-on:cancel-save="toggleForm"
      ></entry-grid-card-form>
   </base-card>
</template>

<script>
import EntryGridCardLike from "./EntryGridCardLike.vue";
import EntryGridCardForm from "./EntryGridCardForm.vue";

export default {
   components: {
      "entry-grid-card-like": EntryGridCardLike,
      "entry-grid-card-form": EntryGridCardForm,
   },
   inject: ["likeEntry", "removeLike", "emitAlert"],
   props: {
      title: {
         type: String,
         required: true,
      },
      date: {
         type: Object,
         required: true,
      },
      content: {
         type: String,
         required: true,
      },
      id: {
         type: String,
         required: true,
      },
      totalLikes: {
         type: Number,
         required: true,
      },
      isLiked: {
         type: Boolean,
         required: true,
      },
   },
   data() {
      return {
         randomNumber: Math.floor(Math.random() * 4),
         container: null,
         circleRadius: 0,
         formActive: false,
      };
   },
   computed: {
      entryClass() {
         let output;
         if (this.randomNumber === 0) {
            output = "horizontal";
         } else if (this.randomNumber === 1) {
            output = "vertical";
         }
         return output;
      },
      circleStyle() {
         return {
            width: this.circleRadius * 2 + "px",
            height: this.circleRadius * 2 + "px",
         };
      },
      circleClass() {
         return { "entry__circle--active": this.formActive };
      },
      formClass() {
         return { "entry__form--active": this.formActive };
      },
   },
   methods: {
      setCircleRadius() {
         this.circleRadius =
            (this.container.clientHeight ** 2 +
               this.container.clientWidth ** 2) **
            0.5;
      },
      toggleForm() {
         this.formActive = !this.formActive;
      },
      saveEntry(categories) {
         this.emitAlert("Saved to favorites", "success");
         this.likeEntry(this.id, categories);
         this.formActive = !this.formActive;
      },
   },
   mounted() {
      this.container = this.$refs.container.$el;
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
   position: relative;
   width: 100%;
   overflow: hidden;
   &__heading {
      font-size: 1.5rem;
      line-height: 1.25;
      font-weight: 700;
      color: $color-green;
      margin-bottom: 0.75rem;
   }
   &__date {
      font-size: 0.75rem;
      color: $color-grey-75;
      margin-bottom: 0.75rem;
      text-transform: uppercase;
   }
   &__preview {
      line-height: 1.5;
   }
   &__overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 7rem;
      background-image: linear-gradient(
         to top,
         $color-white,
         $color-white,
         transparent
      );
   }
   &__controls {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3.5rem;
      background-color: $color-green-light;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      @include responsive($screen-mobile-m) {
         padding: 0 1.5rem;
      }
   }
   &__links {
      display: flex;
      justify-content: flex-start;
      align-items: center;
   }
   &__link {
      font-weight: 700;
      color: $color-green;
      text-decoration: none;
      transition: color 0.25s ease;
      &:hover,
      &:focus {
         color: lighten($color-green, 10%);
      }
      &:not(:last-child) {
         margin-right: 1.5rem;
      }
   }
   &__circle {
      position: absolute;
      bottom: 0;
      right: 0;
      display: block;
      width: 10rem;
      height: 10rem;
      background-color: $color-purple;
      border-radius: 50%;
      transform: translate(50%, 50%) scale(0);
      transition: transform 0.5s ease 0.25s;
      &--active {
         transition: transform 0.5s ease;
         transform: translate(50%, 50%) scale(1);
      }
   }
   &__form {
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.25s ease;
      &--active {
         transition: opacity 0.25s ease 0.25s;
         pointer-events: all;
         opacity: 1;
      }
   }
}
</style>