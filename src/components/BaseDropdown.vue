<template>
   <div class="dropdown">
      <div
         class="dropdown__box"
         v-bind:for="inputID"
         v-on:click="toggleDropdown"
      >
         <span class="dropdown__text">
            <slot></slot>
         </span>
         <svg
            class="dropdown__arrow"
            viewBox="0 0 29.71 16"
            v-bind:class="arrowClass"
         >
            <path
               d="M29.62.71a1,1,0,0,0-.24-.37A1.19,1.19,0,0,0,29,.09,1,1,0,0,0,28.57,0a1.12,1.12,0,0,0-.44.09,1.05,1.05,0,0,0-.37.25l-12.9,12.9L2,.34A.94.94,0,0,0,1.58.09,1.12,1.12,0,0,0,1.14,0,1.07,1.07,0,0,0,.71.09.94.94,0,0,0,.34.34.94.94,0,0,0,.09.71,1.07,1.07,0,0,0,0,1.14a1.12,1.12,0,0,0,.09.44A.94.94,0,0,0,.34,2L14.05,15.66a.94.94,0,0,0,.37.25,1.12,1.12,0,0,0,.44.09,1.07,1.07,0,0,0,.43-.09.94.94,0,0,0,.37-.25L29.38,2a1,1,0,0,0,.24-.37,1.12,1.12,0,0,0,.09-.44A1.07,1.07,0,0,0,29.62.71Z"
            />
         </svg>
      </div>
      <div class="dropdown__options" v-bind:class="optionsClass">
         <div
            class="dropdown__option"
            v-for="option in inputOptions"
            v-bind:key="option"
         >
            <input
               class="dropdown__input"
               type="radio"
               v-bind:name="option"
               v-bind:value="option"
               v-bind:id="option"
               v-model="selectedOption"
            />
            <label
               class="dropdown__label"
               v-bind:for="option"
               v-on:click="toggleDropdown"
            >
               {{ option }}
            </label>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      inputID: {
         type: String,
         required: true,
      },
      inputOptions: {
         type: Array,
         required: true,
      },
   },
   data() {
      return {
         isActive: false,
         selectedOption: this.inputOptions[0],
      };
   },
   computed: {
      optionsClass() {
         return { "dropdown__options--active": this.isActive };
      },
      arrowClass() {
         return { "dropdown__arrow--active": this.isActive };
      },
   },
   methods: {
      toggleDropdown() {
         this.isActive = !this.isActive;
      },
   },
   watch: {
      selectedOption() {
         this.$emit("set-option", this.selectedOption);
      },
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.dropdown {
   display: inline-block;
   position: relative;
   &__input {
      display: none;
   }
   &__box {
      position: relative;
      background-color: rgba($color-white, 0.25);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5em;
      border-radius: 0.25em;
      color: $color-white;
      cursor: pointer;
      transition: background-color 0.25s ease;
      &:hover {
         background-color: rgba($color-white, 0.5);
      }
   }
   &__text {
      display: inline-block;
      margin-right: 4.5rem;
   }
   &__options {
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      background-color: $color-white;
      color: $color-purple;
      box-shadow: 0 0.5rem 1rem $color-shadow;
      border-radius: 0.25rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateY(0.25rem);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.25s ease, opacity 0.25s ease;
      &--active {
         transform: translateY(0.5rem);
         opacity: 1;
         pointer-events: all;
      }
   }
   &__option {
      color: $color-purple;
      font-weight: 700;
      cursor: pointer;
      transition: color 0.25s ease;
      &:hover {
         color: lighten($color-purple, 10%);
      }
      &:not(:last-child) {
         margin-bottom: 0.5rem;
      }
   }
   &__label {
      cursor: pointer;
   }
   &__arrow {
      position: absolute;
      right: 0.5em;
      top: 50%;
      transform: translateY(-50%);
      height: 0.5em;
      fill: currentColor;
      transition: transform 0.25s ease;
      &--active {
         transform: translateY(-50%) rotate(180deg);
      }
   }
}
</style>