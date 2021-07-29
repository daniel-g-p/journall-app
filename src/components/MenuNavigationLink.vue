<template>
   <a class="link" v-bind:class="activeClass">
      <div class="link__icon">
         <svg
            v-bind:viewBox="iconViewbox"
            class="link__svg"
            v-html="iconPath"
         ></svg>
      </div>
      <span class="link__text">{{ name }}</span>
   </a>
</template>

<script>
export default {
   props: {
      name: {
         type: String,
         required: true,
      },
      iconViewbox: {
         type: String,
         required: true,
         validator(value) {
            return value.split(" ").length === 4;
         },
      },
      iconPath: {
         type: String,
         required: true,
         validator(value) {
            return value.slice(0, 5) === "<path" && value.slice(-2) === "/>";
         },
      },
      active: {
         type: Boolean,
         required: true,
      },
   },
   computed: {
      activeClass() {
         return { "link--active": this.active };
      },
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.link {
   color: $color-white;
   display: flex;
   align-items: center;
   padding: 1em 1.5em;
   position: relative;
   z-index: 1;
   @include responsive($screen-tablet-s) {
      padding: 1em 3em;
   }
   @include responsive($screen-tablet-l) {
      padding: 1em 6em 1em 2.25em;
   }
   &:not(:last-child) {
      margin-bottom: 0.5em;
   }
   &::after {
      content: "";
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 0;
      display: block;
      width: 0.5em;
      height: 0;
      background-color: $color-white;
      transition: background-color 0.25s ease;
   }
   &:hover {
      &::after {
         width: 100%;
         height: 100%;
         top: 0;
         transition: height 0.25s ease, top 0.25s ease, width 0.25s ease 0.25s;
      }
      .link__text {
         color: $color-green;
      }
   }
   &--active {
      .link__svg {
         fill: $color-white;
         transition: fill 0.25s ease;
      }
      .link__text {
         color: $color-white;
      }
      &::after {
         background-color: $color-green;
         width: 100%;
         height: 100%;
         top: 0;
      }
      &:hover {
         & > .link__text {
            color: $color-green;
         }
         .link__svg {
            fill: $color-green;
         }
         &::after {
            background-color: $color-white;
            transition: background-color 0.25s ease;
         }
      }
   }
   &__icon {
      height: 1.5em;
      width: 1.5em;
      margin-right: 0.75em;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   &__svg {
      fill: $color-green;
      max-height: 100%;
      max-width: 100%;
   }
   &__text {
      text-transform: uppercase;
      font-weight: 700;
      transition: color 0.25s ease;
   }
}
</style>