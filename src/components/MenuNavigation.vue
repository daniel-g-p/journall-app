<template>
   <nav class="navigation" v-bind:class="activeClass">
      <menu-navigation-link
         v-for="link in links"
         v-bind:key="link.name"
         v-bind="link"
         v-on:set-active-link="setActiveLink"
      ></menu-navigation-link>
   </nav>
</template>

<script>
import MenuNavigationLink from "./MenuNavigationLink.vue";

export default {
   props: {
      isActive: {
         type: Boolean,
         required: true,
      },
   },
   emits: ["toggle-menu"],
   components: {
      "menu-navigation-link": MenuNavigationLink,
   },
   data() {
      return {
         links: [
            {
               name: "home",
               iconViewbox: "0 0 17.4 16",
               iconPath:
                  "<path d='M17.23,8.05,14.5,5.32V1.5a.58.58,0,0,0-.58-.58H12.76a.58.58,0,0,0-.58.58V3L9.52.34a1.16,1.16,0,0,0-1.64,0L.17,8.05A.58.58,0,1,0,1,8.87l.75-.75v6.14A1.74,1.74,0,0,0,3.48,16H13.92a1.74,1.74,0,0,0,1.74-1.74V8.12l.75.75a.58.58,0,0,0,.41.17.57.57,0,0,0,.41-.17.58.58,0,0,0,0-.82ZM14.5,14.26a.58.58,0,0,1-.58.58H3.48a.58.58,0,0,1-.58-.58V7l5.8-5.8L14.5,7Z'/>",
               active: true,
            },
            {
               name: "favorites",
               iconViewbox: "0 0 12 16",
               iconPath:
                  "<path d='M8,2H2a2,2,0,0,0-1.41.59A2,2,0,0,0,0,4V15.5a.48.48,0,0,0,.07.26.55.55,0,0,0,.19.18A.58.58,0,0,0,.52,16a.5.5,0,0,0,.26-.08L5,13.1l4.22,2.82a.5.5,0,0,0,.26.08.58.58,0,0,0,.26-.06.55.55,0,0,0,.19-.18A.48.48,0,0,0,10,15.5V4A2,2,0,0,0,8,2ZM9,14.57,5.28,12.08A.54.54,0,0,0,5,12a.57.57,0,0,0-.28.08L1,14.57V4a1,1,0,0,1,.29-.71A1,1,0,0,1,2,3H8A1,1,0,0,1,9,4Z'/><path d='M11.41.59A2,2,0,0,0,10,0H4A2,2,0,0,0,3,.27,2,2,0,0,0,2.27,1H10a1,1,0,0,1,.71.29A1,1,0,0,1,11,2V13.77l.22.15a.5.5,0,0,0,.26.08.58.58,0,0,0,.26-.06.55.55,0,0,0,.19-.18A.48.48,0,0,0,12,13.5V2A2,2,0,0,0,11.41.59Z'/>",
               active: false,
            },
            {
               name: "my entries",
               iconViewbox: "0 0 15 16",
               iconPath:
                  "<path d='M14.41.59A2,2,0,0,0,13,0H3A2,2,0,0,0,1.59.59,2,2,0,0,0,1,2V3H2V2a1,1,0,0,1,.29-.71A1,1,0,0,1,3,1H13a1,1,0,0,1,.71.29A1,1,0,0,1,14,2V14a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V13H1v1a2,2,0,0,0,2,2H13a2,2,0,0,0,2-2V2A2,2,0,0,0,14.41.59Z'/><path d='M.5,6h2a.5.5,0,0,0,.35-.85A.47.47,0,0,0,2.5,5H2V4.5a.47.47,0,0,0-.15-.35.48.48,0,0,0-.7,0A.47.47,0,0,0,1,4.5V5H.5a.47.47,0,0,0-.35.15.48.48,0,0,0,0,.7A.47.47,0,0,0,.5,6Z'/><path d='M2.85,11.85A.5.5,0,0,0,2.5,11H2v-.5a.47.47,0,0,0-.15-.35.48.48,0,0,0-.7,0A.47.47,0,0,0,1,10.5V11H.5a.47.47,0,0,0-.35.15.48.48,0,0,0,0,.7A.47.47,0,0,0,.5,12h2A.47.47,0,0,0,2.85,11.85Z'/><path d='M.5,9h2a.5.5,0,0,0,0-1H2V7.5a.47.47,0,0,0-.15-.35.48.48,0,0,0-.7,0A.47.47,0,0,0,1,7.5V8H.5a.47.47,0,0,0-.35.15.48.48,0,0,0,0,.7A.47.47,0,0,0,.5,9Z'/>",
               active: false,
            },
            {
               name: "settings",
               iconViewbox: "0 0 16 16",
               iconPath:
                  "<path d='M8,4.75a3.24,3.24,0,1,0,2.3,1A3.27,3.27,0,0,0,8,4.75ZM9.59,9.59A2.25,2.25,0,1,1,10.25,8,2.25,2.25,0,0,1,9.59,9.59Z'/><path d='M14.66,6.2l-.32-.09A.88.88,0,0,1,14,5.92a.84.84,0,0,1-.22-.31,1,1,0,0,1-.07-.38,1,1,0,0,1,.11-.38L14,4.56A1.87,1.87,0,0,0,11.44,2l-.29.16a1,1,0,0,1-.38.11,1,1,0,0,1-.38-.07A.84.84,0,0,1,10.08,2a.88.88,0,0,1-.19-.34L9.8,1.34a1.88,1.88,0,0,0-3.6,0l-.09.32A.88.88,0,0,1,5.92,2a.84.84,0,0,1-.31.22,1,1,0,0,1-.38.07,1,1,0,0,1-.38-.11L4.56,2A1.87,1.87,0,0,0,2,4.56l.16.29a1,1,0,0,1,.11.38,1,1,0,0,1-.07.38A.84.84,0,0,1,2,5.92a.88.88,0,0,1-.34.19l-.32.09a1.88,1.88,0,0,0,0,3.6l.32.09a.88.88,0,0,1,.34.19.84.84,0,0,1,.22.31,1,1,0,0,1,.07.38,1,1,0,0,1-.11.38L2,11.44A1.87,1.87,0,0,0,4.56,14l.29-.16a1,1,0,0,1,.38-.11,1,1,0,0,1,.38.07.84.84,0,0,1,.31.22.88.88,0,0,1,.19.34l.09.32a1.88,1.88,0,0,0,3.6,0l.09-.32a.88.88,0,0,1,.19-.34.84.84,0,0,1,.31-.22,1,1,0,0,1,.38-.07,1,1,0,0,1,.38.11l.29.16A1.87,1.87,0,0,0,14,11.44l-.16-.29a1,1,0,0,1-.11-.38,1,1,0,0,1,.07-.38.84.84,0,0,1,.22-.31.88.88,0,0,1,.34-.19l.32-.09A1.88,1.88,0,0,0,14.66,6.2Zm-.29,2.64-.31.09a2,2,0,0,0-.73.4,1.91,1.91,0,0,0-.48.68,2.08,2.08,0,0,0-.14.82,2,2,0,0,0,.23.79l.16.3a.87.87,0,0,1-1.18,1.18l-.3-.16a2,2,0,0,0-.79-.23,2.08,2.08,0,0,0-.82.14,2,2,0,0,0-.68.48,2,2,0,0,0-.4.73l-.09.31a.88.88,0,0,1-1.68,0l-.09-.31a2,2,0,0,0-.4-.73A2,2,0,0,0,6,12.85a2.08,2.08,0,0,0-.82-.14,2,2,0,0,0-.79.23l-.3.16A.87.87,0,0,1,2.9,11.92l.16-.3a2,2,0,0,0,.23-.79A2.08,2.08,0,0,0,3.15,10a1.91,1.91,0,0,0-.48-.68,2,2,0,0,0-.73-.4l-.31-.09a.87.87,0,0,1,0-1.68l.31-.09a1.89,1.89,0,0,0,.73-.41,1.88,1.88,0,0,0,.61-1.49,1.8,1.8,0,0,0-.22-.79l-.16-.3A.87.87,0,0,1,4.08,2.9l.3.16a2,2,0,0,0,.79.23A2.08,2.08,0,0,0,6,3.15a2,2,0,0,0,.68-.48,2,2,0,0,0,.4-.73l.09-.31a.87.87,0,0,1,1.68,0l.09.31a2,2,0,0,0,.4.73,1.91,1.91,0,0,0,.68.48,2.08,2.08,0,0,0,.82.14,2,2,0,0,0,.79-.23l.3-.16A.87.87,0,0,1,13.1,4.08l-.16.3a1.8,1.8,0,0,0-.22.79,1.78,1.78,0,0,0,.14.82,1.89,1.89,0,0,0,.47.68,2,2,0,0,0,.73.4l.31.09A.88.88,0,0,1,14.37,8.84Z'/>",
               active: false,
            },
            {
               name: "about",
               iconViewbox: "0 0 16 16",
               iconPath:
                  "<path d='M13.66,2.34A8,8,0,1,0,16,8,8,8,0,0,0,13.66,2.34ZM13,13A7,7,0,1,1,15,8,7,7,0,0,1,13,13Z'/><path d='M8.93,6.59l-2.29.29-.08.38L7,7.34c.29.07.35.17.29.47l-.74,3.47c-.2.89.1,1.31.81,1.31A2.09,2.09,0,0,0,8.83,12l.09-.42a1.09,1.09,0,0,1-.69.25c-.27,0-.37-.2-.3-.54Z'/><path d='M8,3.5a1,1,0,0,0-.71,1.71A1,1,0,0,0,8.71,3.79,1,1,0,0,0,8,3.5Z'/>",
               active: false,
            },
            {
               name: "logout",
               iconViewbox: "0 0 21.33 16",
               iconPath:
                  "<path d='M20.75.59A2,2,0,0,0,19.33,0H8.67a2,2,0,0,0-2,2V4.67a.67.67,0,0,0,1.14.47A.7.7,0,0,0,8,4.67V2a.63.63,0,0,1,.2-.47.63.63,0,0,1,.47-.2H19.33a.67.67,0,0,1,.48.2A.67.67,0,0,1,20,2V14a.67.67,0,0,1-.19.47.67.67,0,0,1-.48.2H8.67A.68.68,0,0,1,8,14V11.33a.67.67,0,0,0-1.14-.47.7.7,0,0,0-.19.47V14a2,2,0,0,0,2,2H19.33a2,2,0,0,0,2-2V2A2,2,0,0,0,20.75.59Z'/><path d='M5.14,11.53,2.28,8.67H14a.67.67,0,0,0,0-1.34H2.28L5.14,4.47a.6.6,0,0,0,.14-.21.59.59,0,0,0,0-.52.6.6,0,0,0-.14-.21.86.86,0,0,0-.22-.15.7.7,0,0,0-.25,0,.75.75,0,0,0-.26,0,.8.8,0,0,0-.21.15l-4,4a.51.51,0,0,0-.15.21.7.7,0,0,0,0,.52.51.51,0,0,0,.15.21l4,4a.8.8,0,0,0,.21.15.75.75,0,0,0,.26.05.7.7,0,0,0,.25-.05.86.86,0,0,0,.22-.15.6.6,0,0,0,.14-.21.59.59,0,0,0,0-.52A.6.6,0,0,0,5.14,11.53Z'/>",
               active: false,
            },
         ],
      };
   },
   computed: {
      activeLink() {
         return this.links.find((l) => l.active);
      },
      activeClass() {
         return { "navigation--active": this.isActive };
      },
   },
   methods: {
      setActiveLink(link) {
         this.activeLink.active = false;
         this.links.find((l) => l.name === link).active = true;
         this.$emit("toggle-menu", link);
      },
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.navigation {
   background-color: $color-grey-25;
   height: 100vh;
   width: 100vw;
   position: fixed;
   z-index: 10;
   top: 0;
   right: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   transition: right 0.5s ease;
   @include responsive($screen-tablet-l) {
      position: relative;
      top: auto;
      right: auto;
      width: auto;
      height: auto;
      flex-grow: 1;
   }
   &--active {
      right: 0;
   }
}
</style>