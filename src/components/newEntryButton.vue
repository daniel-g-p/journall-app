<template>
   <div class="buttons">
      <button
         class="buttons__main"
         v-bind:class="mainButtonClass"
         v-on:click="toggleState"
      >
         <svg class="buttons__icon" viewBox="0 0 16 16">
            <path
               d="M15.91,1.7a1.27,1.27,0,0,0,0-.94,1.23,1.23,0,0,0-.27-.4,1.41,1.41,0,0,0-.4-.27,1.27,1.27,0,0,0-.94,0,1.56,1.56,0,0,0-.4.27l-.15.15a1.53,1.53,0,0,0-1-.39,1.55,1.55,0,0,0-1,.39A1.53,1.53,0,0,0,10.65.12a1.57,1.57,0,0,0-1,.45L6.26,3.93a.46.46,0,0,0-.11.16.45.45,0,0,0,0,.2.43.43,0,0,0,0,.19.62.62,0,0,0,.11.17.71.71,0,0,0,.17.11.58.58,0,0,0,.19,0,.71.71,0,0,0,.2,0A.91.91,0,0,0,7,4.65l3.35-3.36a.56.56,0,0,1,.32-.15.58.58,0,0,1,.34.09L1.17,11.06a.49.49,0,0,0-.14.23L0,15.37a.46.46,0,0,0,0,.26.5.5,0,0,0,.13.22A.5.5,0,0,0,.37,16a.46.46,0,0,0,.26,0l4.08-1a.49.49,0,0,0,.23-.14L15.43,4.35a1.62,1.62,0,0,0,.45-1,1.53,1.53,0,0,0-.39-1.06l.15-.15A1.41,1.41,0,0,0,15.91,1.7ZM14.82,3.46a.62.62,0,0,1-.11.17L4.32,14l-3.11.78L2,11.68,12.37,1.29a.55.55,0,0,1,.36-.15.51.51,0,0,1,.36.15h0l1.62,1.62a.46.46,0,0,1,.11.16.45.45,0,0,1,0,.2A.43.43,0,0,1,14.82,3.46Z"
            />
         </svg>
      </button>
      <button
         class="buttons__secondary buttons__secondary--1"
         v-bind:class="secondaryButtonClass"
         v-on:click="toggleState"
      >
         <svg class="buttons__icon" viewBox="0 0 23 16">
            <path
               d="M22.92.62A1,1,0,0,0,22.7.29,1,1,0,0,0,22,0a1,1,0,0,0-.39.08,1,1,0,0,0-.32.21L8,13.58,1.71,7.29A1,1,0,0,0,1,7a1,1,0,0,0-.71.29,1,1,0,0,0,0,1.42l7,7a.93.93,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21l14-14a.83.83,0,0,0,.22-.33A1,1,0,0,0,23,1,1,1,0,0,0,22.92.62Z"
            />
         </svg>
      </button>
      <button
         class="buttons__secondary buttons__secondary--2"
         v-bind:class="secondaryButtonClass"
         v-on:click="toggleState"
      >
         <svg class="buttons__icon" viewBox="0 0 12 16">
            <path
               d="M7.5,0H2A2,2,0,0,0,.59.59,2,2,0,0,0,0,2V14a2,2,0,0,0,.59,1.41A2,2,0,0,0,2,16h8a2,2,0,0,0,2-2V4.5ZM11,14a1,1,0,0,1-1,1H2a1,1,0,0,1-.71-.29A1,1,0,0,1,1,14V2a1,1,0,0,1,.29-.71A1,1,0,0,1,2,1H7.5V3A1.5,1.5,0,0,0,9,4.5h2Z"
            />
         </svg>
      </button>
      <button
         class="buttons__secondary buttons__secondary--3"
         v-bind:class="secondaryButtonClass"
         v-on:click="toggleState"
      >
         <svg class="buttons__icon" viewBox="0 0 16 16">
            <path
               d="M15.66,14.05,9.62,8l6-6a.94.94,0,0,0,.25-.37A1.12,1.12,0,0,0,16,1.14a1.07,1.07,0,0,0-.09-.43.94.94,0,0,0-.25-.37,1.05,1.05,0,0,0-.37-.25A1.07,1.07,0,0,0,14.86,0a1.12,1.12,0,0,0-.44.09,1.05,1.05,0,0,0-.37.25L8,6.38l-6-6A.94.94,0,0,0,1.58.09,1.12,1.12,0,0,0,1.14,0,1.07,1.07,0,0,0,.71.09.94.94,0,0,0,.34.34.94.94,0,0,0,.09.71,1.07,1.07,0,0,0,0,1.14a1.12,1.12,0,0,0,.09.44A.94.94,0,0,0,.34,2L6.38,8l-6,6.05a1.05,1.05,0,0,0-.25.37,1.12,1.12,0,0,0-.09.44,1.07,1.07,0,0,0,.09.43,1.05,1.05,0,0,0,.25.37.94.94,0,0,0,.37.25,1.07,1.07,0,0,0,.43.09,1.12,1.12,0,0,0,.44-.09A.94.94,0,0,0,2,15.66L8,9.62l6.05,6a.94.94,0,0,0,.37.25,1.12,1.12,0,0,0,.44.09,1.07,1.07,0,0,0,.43-.09,1.17,1.17,0,0,0,.62-.62,1.07,1.07,0,0,0,.09-.43,1.12,1.12,0,0,0-.09-.44A.94.94,0,0,0,15.66,14.05Z"
            />
         </svg>
      </button>
      <div
         class="overlay"
         v-bind:class="circleClass"
         v-bind:style="circleStyle"
      ></div>
   </div>
</template>

<script>
export default {
   emits: ["activate-canvas"],
   data() {
      return {
         isActive: false,
         circleRadius: 0,
      };
   },
   computed: {
      mainButtonClass() {
         return { "buttons__main--inactive": this.isActive };
      },
      secondaryButtonClass() {
         return { "buttons__secondary--active": this.isActive };
      },
      circleStyle() {
         return {
            width: this.circleRadius * 2 + "px",
            height: this.circleRadius * 2 + "px",
         };
      },
      circleClass() {
         return { "overlay--active": this.isActive };
      },
   },
   methods: {
      toggleState() {
         this.isActive = !this.isActive;
         if (this.isActive) {
            this.$emit("activate-canvas");
         }
      },
      setCircleRadius() {
         this.circleRadius =
            (document.body.clientHeight ** 2 +
               document.body.clientWidth ** 2) **
            0.5;
      },
   },
   mounted() {
      this.setCircleRadius();
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.buttons {
   width: 4.5rem;
   height: 4.5rem;
   &__main,
   &__secondary {
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0.5rem 1rem $color-shadow;
   }
   &__main {
      position: relative;
      z-index: 50;
      width: 100%;
      height: 100%;
      background-color: $color-purple;
      transition: background-color 0.25s ease;
      &:hover {
         background-color: lighten($color-purple, 10%);
      }
      &--inactive {
         background-color: lighten($color-purple, 17.5%);
         pointer-events: none;
         &:hover {
            background-color: lighten($color-purple, 17.5%);
         }
      }
   }
   &__secondary {
      position: absolute;
      z-index: 25;
      width: 50%;
      height: 50%;
      background-color: $color-grey-25;
      transition-property: left, right, top, bottom, background-color;
      transition-duration: 0.25s;
      transition-timing-function: ease;
      pointer-events: none;
      &:hover {
         background-color: lighten($color-grey-25, 10%);
      }
      &--1 {
         right: 25%;
         top: 25%;
      }
      &--2 {
         right: 25%;
         bottom: 25%;
         transition-delay: 0.075s;
      }
      &--3 {
         right: 25%;
         bottom: 25%;
         transition-delay: 0.15s;
         .buttons__icon {
            height: 40%;
         }
      }
      &--active {
         pointer-events: all;
         &.buttons__secondary--1 {
            right: 115%;
            top: 25%;
         }
         &.buttons__secondary--2 {
            right: 90%;
            bottom: 90%;
         }
         &.buttons__secondary--3 {
            right: 25%;
            bottom: 115%;
            .buttons__icon {
               height: 40%;
            }
         }
      }
   }
   &__icon {
      fill: $color-white;
      height: 50%;
      max-width: 50%;
   }
}

.overlay {
   position: absolute;
   z-index: 0;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%) scale(0);
   display: block;
   background-color: $color-white;
   border-radius: 50%;
   transition: transform 0.5s ease-out;
   &--active {
      transform: translate(-50%, -50%) scale(1);
   }
}
</style>