<template>
   <div class="modal">
      <base-card class="modal__content">
         <p class="modal__text">
            <slot></slot>
         </p>
         <div class="modal__buttons">
            <button
               class="modal__button modal__button--fill"
               v-on:click="$emit('confirm')"
            >
               <slot name="confirm-button"></slot>
            </button>
            <button
               class="modal__button modal__button--outline"
               v-on:click="$emit('cancel')"
            >
               <slot name="cancel-button"></slot>
            </button>
         </div>
      </base-card>
   </div>
</template>

<script>
export default {
   props: {
      isActive: {
         type: Boolean,
         required: true,
      },
   },
   emits: ["confirm", "cancel"],
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";
.modal {
   backdrop-filter: blur(0.25rem);
   width: 100vw;
   height: 100vh;
   position: fixed;
   z-index: 400;
   top: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 1rem;
   pointer-events: none;
   opacity: 0;
   transition: opacity 0.25s ease;
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
   &--active {
      pointer-events: all;
      opacity: 1;
   }
   &__content {
      background-color: $color-purple;
      color: $color-white;
      max-width: 20rem;
      font-size: 1.25rem;
      line-height: 1.25;
   }
   &__buttons {
      margin-top: 0.75rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 0.5rem;
   }
   &__button {
      padding: 0.5em 1em;
      font-weight: 700;
      border-radius: 0.25rem;
      border: 0.125rem solid $color-white;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      &:hover {
         transform: translateY(-0.125rem);
         box-shadow: 0 0.5rem 1rem -0.125rem rgba($color-white, 0.25);
      }
      &--fill {
         background-color: $color-white;
         color: $color-purple;
      }
      &--outline {
         background-color: transparent;
         color: $color-white;
         border: 0.125rem solid $color-white;
      }
   }
}
</style>