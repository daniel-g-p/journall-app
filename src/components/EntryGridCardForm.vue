<template>
   <form class="form" action="/">
      <h3 class="form__heading">This made me feel:</h3>
      <div class="form__options">
         <input
            class="form__checkbox"
            type="checkbox"
            name="feelings"
            value="hope"
            v-bind:id="id + '-hope'"
            v-model="selectedCategories"
         />
         <label class="form__checkbox-label" v-bind:v-bind:for="id + '-hope'"
            >Hope</label
         >
         <input
            class="form__checkbox"
            type="checkbox"
            name="feelings"
            value="joy"
            v-bind:id="id + '-joy'"
            v-model="selectedCategories"
         />
         <label class="form__checkbox-label" v-bind:for="id + '-joy'"
            >Joy</label
         >
         <input
            class="form__checkbox"
            type="checkbox"
            name="feelings"
            value="gratitude"
            v-bind:id="id + '-gratitude'"
            v-model="selectedCategories"
         />
         <label class="form__checkbox-label" v-bind:for="id + '-gratitude'"
            >Gratitude</label
         >
         <input
            class="form__checkbox"
            type="checkbox"
            name="feelings"
            value="admiration"
            v-bind:id="id + '-admiration'"
            v-model="selectedCategories"
         />
         <label class="form__checkbox-label" v-bind:for="id + '-admiration'"
            >Admiration</label
         >
         <input
            class="form__checkbox"
            type="checkbox"
            name="feelings"
            value="inspiration"
            v-bind:id="id + '-inspiration'"
            v-model="selectedCategories"
         />
         <label class="form__checkbox-label" v-bind:for="id + '-inspiration'"
            >Inspiration</label
         >
         <input
            class="form__checkbox"
            type="checkbox"
            name="feelings"
            value="curiosity"
            v-bind:id="id + '-curiosity'"
            v-model="selectedCategories"
         />
         <label class="form__checkbox-label" v-bind:for="id + '-curiosity'"
            >Curiosity</label
         >
      </div>
      <div class="form__buttons">
         <button
            class="form__button form__button--fill"
            v-on:click.prevent="saveEntry"
         >
            Save
         </button>
         <button
            class="form__button form__button--outline"
            v-on:click.prevent="cancelSave"
         >
            Cancel
         </button>
      </div>
   </form>
</template>

<script>
export default {
   props: {
      id: {
         type: String,
         required: true,
      },
   },
   emits: ["save-entry", "cancel-save"],
   data() {
      return {
         selectedCategories: [],
      };
   },
   methods: {
      saveEntry() {
         this.$emit("save-entry", this.selectedCategories);
      },
      cancelSave() {
         this.$emit("cancel-save");
      },
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.form {
   position: relative;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   color: $color-white;
   padding: 1rem;
   &__heading {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
   }
   &__options {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 1rem;
   }
   &__checkbox {
      display: none;
      &:checked + .form__checkbox-label {
         background-color: $color-white;
         color: $color-purple;
      }
   }
   &__checkbox-label {
      font-size: 0.9rem;
      background-color: rgba($color-white, 0.25);
      color: $color-white;
      text-transform: uppercase;
      padding: 0.5em 0.75em;
      border-radius: 1.5em;
      cursor: pointer;
      margin: 0.25rem;
      transition: background-color 0.25s ease, color 0.25s ease;
      &:hover {
         background-color: rgba($color-white, 0.5);
      }
   }
   &__buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 0.5rem;
      align-self: center;
      max-width: 20rem;
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