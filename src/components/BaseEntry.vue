<template>
   <base-card class="entry">
      <h2 class="entry__heading">Story Title</h2>
      <div class="entry__date">17 December 2021</div>
      <p class="entry__preview">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
         consectetur voluptatem atque, blanditiis sunt in totam at a nemo et
         dolorum nulla corrupti provident alias quaerat architecto est officia
         harum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Voluptatem, minus eligendi aut molestias repellendus perferendis quia
         libero rerum a? Sit iure odio, suscipit architecto quod deserunt ullam
         esse vitae error!
      </p>
      <div class="entry__overlay"></div>
      <div class="entry__controls">
         <div class="entry__links">
            <a href="/" class="entry__link">Link 1</a>
         </div>
         <div class="entry__like"></div>
      </div>
   </base-card>
</template>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.entry {
   position: relative;
   width: 100%;
   height: 24rem;
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