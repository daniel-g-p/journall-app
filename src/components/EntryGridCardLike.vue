<template>
   <div class="like" v-bind:class="buttonClass" v-on:click="clickLike">
      <div class="like__number">{{ formattedLikes }}</div>
      <svg class="like__icon" viewBox="0 0 16 16">
         <path
            d="M8,1.4C3.56-3.46-7.53,5.05,8,16,23.53,5.05,12.44-3.46,8,1.4Z"
         />
      </svg>
   </div>
</template>

<script>
export default {
   props: {
      totalLikes: {
         type: Number,
         required: true,
      },
      isLiked: {
         type: Boolean,
         required: true,
      },
   },
   emits: ["activate-form", "remove-like"],
   computed: {
      likesDividedBy100() {
         return Math.round(this.totalLikes / 100).toString();
      },
      formattedLikes() {
         return this.totalLikes >= 1000
            ? this.likesDividedBy100.slice(0, -1) +
                 "." +
                 this.likesDividedBy100[this.likesDividedBy100.length - 1] +
                 "K"
            : this.totalLikes;
      },
      buttonClass() {
         return { "like--active": this.isLiked };
      },
   },
   methods: {
      clickLike() {
         if (!this.isLiked) {
            this.$emit("activate-form");
         } else {
            this.$emit("remove-like");
         }
      },
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.like {
   height: 2rem;
   border-radius: 1rem;
   background-color: $color-white;
   color: $color-purple;
   display: flex;
   justify-content: space-between;
   align-items: center;
   box-shadow: 0 0.25rem 0.5rem $color-shadow;
   transition: color 0.25s ease, transform 0.25s ease,
      background-color 0.25s ease;
   cursor: pointer;
   &:hover {
      color: lighten($color-purple, 10%);
      transform: translateY(-0.125rem);
   }
   &--active {
      background-color: $color-purple;
      color: $color-white;
   }
   &__number {
      font-weight: 700;
      margin-left: 0.75rem;
      margin-right: 0.5rem;
   }
   &__icon {
      height: 1rem;
      fill: currentColor;
      margin-right: 0.75rem;
   }
}
</style>