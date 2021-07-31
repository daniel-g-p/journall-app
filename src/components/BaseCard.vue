<template>
   <div class="card">
      <slot></slot>
   </div>
</template>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.card {
   border-radius: 0.25rem;
   box-shadow: 0 0.5rem 1rem $color-shadow;
   padding: 1rem;
   @include responsive($screen-mobile-m) {
      padding: 1.5rem;
   }
}
</style>