<template>
   <section class="reading-area" v-bind:class="readingAreaClass">
      <div class="reading-area__box" v-bind:class="readingAreaBoxClass">
         <h1 class="reading-area__heading">{{ title }}</h1>
         <p class="reading-area__date">
            {{ date.day }} {{ date.month }} {{ date.year }}
         </p>
         <p class="reading-area__content">
            {{ content }}
         </p>
         <svg
            class="reading-area__close"
            viewBox="0 0 16 16"
            v-on:click="$emit('toggle-reading-area')"
         >
            <path
               d="M15.66,14.05,9.62,8l6-6a.94.94,0,0,0,.25-.37A1.12,1.12,0,0,0,16,1.14a1.07,1.07,0,0,0-.09-.43.94.94,0,0,0-.25-.37,1.05,1.05,0,0,0-.37-.25A1.07,1.07,0,0,0,14.86,0a1.12,1.12,0,0,0-.44.09,1.05,1.05,0,0,0-.37.25L8,6.38l-6-6A.94.94,0,0,0,1.58.09,1.12,1.12,0,0,0,1.14,0,1.07,1.07,0,0,0,.71.09.94.94,0,0,0,.34.34.94.94,0,0,0,.09.71,1.07,1.07,0,0,0,0,1.14a1.12,1.12,0,0,0,.09.44A.94.94,0,0,0,.34,2L6.38,8l-6,6.05a1.05,1.05,0,0,0-.25.37,1.12,1.12,0,0,0-.09.44,1.07,1.07,0,0,0,.09.43,1.05,1.05,0,0,0,.25.37.94.94,0,0,0,.37.25,1.07,1.07,0,0,0,.43.09,1.12,1.12,0,0,0,.44-.09A.94.94,0,0,0,2,15.66L8,9.62l6.05,6a.94.94,0,0,0,.37.25,1.12,1.12,0,0,0,.44.09,1.07,1.07,0,0,0,.43-.09,1.17,1.17,0,0,0,.62-.62,1.07,1.07,0,0,0,.09-.43,1.12,1.12,0,0,0-.09-.44A.94.94,0,0,0,15.66,14.05Z"
            />
         </svg>
      </div>
   </section>
</template>

<script>
export default {
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
      isActive: {
         type: Boolean,
         required: true,
      },
   },
   emits: ["toggle-reading-area"],
   computed: {
      readingAreaClass() {
         return { "reading-area--active": this.isActive };
      },
      readingAreaBoxClass() {
         return { "reading-area__box--active": this.isActive };
      },
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.reading-area {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow-y: scroll;
   background-color: $color-green-light;
   z-index: 250;
   transition: opacity 0.25s ease;
   padding: 3rem 1rem;
   opacity: 0;
   &--active {
      opacity: 1;
   }
   @include responsive($screen-mobile-m) {
      padding: 3rem 1.5rem;
   }
   @include responsive($screen-tablet-s) {
      padding: 3rem 2.25rem;
   }
   @include responsive($screen-tablet-l) {
      padding: 3rem;
   }
   @include responsive($screen-desktop-m) {
      padding: 4.5rem;
   }
   &__box {
      position: relative;
      transform: scale(0.95);
      transition: transform 0.25s ease;
      &--active {
         transform: scale(1);
      }
   }
   &__heading {
      color: $color-green;
      font-size: 2.25rem;
      line-height: 1.25;
      margin-bottom: 1rem;
   }
   &__date {
      color: $color-purple;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
   }
   &__content {
      width: 100%;
      font-size: 1.25rem;
      line-height: 1.5;
   }
   &__close {
      fill: $color-grey-75;
      height: 1rem;
      position: absolute;
      bottom: calc(100% + 0.5rem);
      right: 0;
      transition: fill 0.25s ease;
      cursor: pointer;
      &:hover {
         fill: lighten($color-grey-75, 10%);
      }
   }
}
</style>