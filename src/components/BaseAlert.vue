<template>
   <teleport to="body">
      <div class="alert" v-bind:class="[alertStatus, alertType]">
         <p class="alert__message">{{ message }}</p>
         <svg class="alert__close" viewBox="0 0 16 16" v-on:click="toggleAlert">
            <path
               d="M15.66,14.05,9.62,8l6-6a.94.94,0,0,0,.25-.37A1.12,1.12,0,0,0,16,1.14a1.07,1.07,0,0,0-.09-.43.94.94,0,0,0-.25-.37,1.05,1.05,0,0,0-.37-.25A1.07,1.07,0,0,0,14.86,0a1.12,1.12,0,0,0-.44.09,1.05,1.05,0,0,0-.37.25L8,6.38l-6-6A.94.94,0,0,0,1.58.09,1.12,1.12,0,0,0,1.14,0,1.07,1.07,0,0,0,.71.09.94.94,0,0,0,.34.34.94.94,0,0,0,.09.71,1.07,1.07,0,0,0,0,1.14a1.12,1.12,0,0,0,.09.44A.94.94,0,0,0,.34,2L6.38,8l-6,6.05a1.05,1.05,0,0,0-.25.37,1.12,1.12,0,0,0-.09.44,1.07,1.07,0,0,0,.09.43,1.05,1.05,0,0,0,.25.37.94.94,0,0,0,.37.25,1.07,1.07,0,0,0,.43.09,1.12,1.12,0,0,0,.44-.09A.94.94,0,0,0,2,15.66L8,9.62l6.05,6a.94.94,0,0,0,.37.25,1.12,1.12,0,0,0,.44.09,1.07,1.07,0,0,0,.43-.09,1.17,1.17,0,0,0,.62-.62,1.07,1.07,0,0,0,.09-.43,1.12,1.12,0,0,0-.09-.44A.94.94,0,0,0,15.66,14.05Z"
            />
         </svg>
      </div>
   </teleport>
</template>

<script>
export default {
   props: {
      message: {
         type: String,
         required: false,
      },
      type: {
         type: String,
         required: false,
      },
      isActive: {
         type: Boolean,
         required: true,
      },
   },
   emits: ["deactivate-alert"],
   computed: {
      alertStatus() {
         return { "alert--active": this.isActive };
      },
      alertType() {
         return `alert--${this.type}`;
      },
   },
   methods: {
      toggleAlert() {
         this.$emit("deactivate-alert");
      },
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.alert {
   position: absolute;
   left: 0;
   z-index: 100;
   top: 0;
   width: 100vw;
   padding: 1.5rem;
   box-shadow: 0 0.5rem 1rem $color-shadow;
   color: $color-white;
   display: grid;
   grid-template-columns: 1fr 1rem;
   gap: 0 1rem;
   transform: translateY(-100%);
   transition: transform 0.25s ease;
   &--success {
      background-color: $color-green;
   }
   &--error {
      background-color: $color-red;
   }
   &--active {
      transform: translateY(0);
   }
   &__close {
      height: 1rem;
      fill: $color-white;
      transition: fill 0.25s ease;
      cursor: pointer;
      &:hover {
         fill: darken($color-white, 10%);
      }
   }
}
</style>