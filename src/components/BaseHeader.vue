<template>
   <base-card class="header">
      <header>
         <h1 class="header__heading">
            <slot name="heading"></slot>
         </h1>
         <div class="header__text">
            <slot></slot>
         </div>
         <div class="header__separator"></div>
      </header>
   </base-card>
</template>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.header {
   background-color: $color-green;
   color: $color-white;
   border-radius: 0.25rem;
   &__heading {
      font-family: "Pacifico", sans-serif;
      font-size: 2.25rem;
      line-height: 1.25;
      margin-bottom: 1rem;
   }
   &__text {
      font-size: 1.25rem;
      display: inline-block;
   }
}
</style>