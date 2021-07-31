<template>
   <base-card class="entry" v-bind:modifier="entryClass">
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
         <div class="entry__like"></div>
      </div>
   </base-card>
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
      id: {
         type: String,
         required: true,
      },
      totalLikes: {
         type: Number,
         required: true,
      },
   },
   data() {
      return {
         randomNumber: Math.floor(Math.random() * 4),
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
      bottom: 4rem;
      left: 0;
      width: 100%;
      height: 3rem;
      background-image: linear-gradient(to top, $color-white, transparent);
   }
   &__controls {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4rem;
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
   &__like {
      display: block;
      width: 1rem;
      height: 1rem;
      background-color: red;
   }
}
</style>