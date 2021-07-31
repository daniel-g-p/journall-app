<template>
   <div class="like">
      <div class="like__number">{{ formattedLikes }}</div>
      <div class="like__icon-box">
         <svg class="like__icon" viewBox="0 0 16 16">
            <path
               d="M8,1.4C3.56-3.46-7.53,5.05,8,16,23.53,5.05,12.44-3.46,8,1.4Z"
            />
         </svg>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      totalLikes: {
         type: Number,
         required: true,
      },
   },
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
   },
   mounted() {
      console.log(this.likesDividedBy100);
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.like {
   height: 2rem;
   border-radius: 1rem;
   background-color: $color-white;
   display: flex;
   justify-content: space-between;
   align-items: center;
   box-shadow: 0 0.25rem 0.5rem $color-shadow;
   &__number {
      font-weight: 700;
      color: $color-purple;
      margin-left: 0.75rem;
      margin-right: 0.5rem;
   }
   &__icon-box {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: $color-purple;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   &__icon {
      height: 1rem;
      fill: $color-white;
   }
}
</style>