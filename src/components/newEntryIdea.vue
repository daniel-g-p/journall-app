<template>
   <div class="idea" v-on:click="generateIdea">
      <div class="idea__icon-box">
         <svg class="idea__icon" viewBox="0 0 12 16">
            <path
               d="M11.9,4.9A6,6,0,0,0,8.34.48,5.85,5.85,0,0,0,5.45,0,5.91,5.91,0,0,0,2.69,1a6,6,0,0,0-2,2.16A6,6,0,0,0,.47,8.34a6.1,6.1,0,0,0,1.36,2,1.87,1.87,0,0,1,.45.62L3,12.7a.55.55,0,0,0,.18.22A.57.57,0,0,0,3.5,13a.5.5,0,0,0,0,1,.5.5,0,0,0,0,1l.22.45a1.09,1.09,0,0,0,.37.4,1,1,0,0,0,.53.15H7.38a1,1,0,0,0,.53-.15,1.09,1.09,0,0,0,.37-.4L8.5,15a.5.5,0,0,0,0-1,.5.5,0,0,0,0-1A.51.51,0,0,0,9,12.7l.76-1.77a2.12,2.12,0,0,1,.45-.62,5.9,5.9,0,0,0,1.55-2.49A6,6,0,0,0,11.9,4.9ZM10.89,7A4.89,4.89,0,0,1,9.48,9.59a3.29,3.29,0,0,0-.68.94L8.17,12H3.83L3.2,10.53a3.11,3.11,0,0,0-.68-.94A5,5,0,0,1,1.36,4.12,5.07,5.07,0,0,1,3.21,1.85,5,5,0,0,1,6,1a5.07,5.07,0,0,1,2.8.85,5.11,5.11,0,0,1,1.84,2.27A5,5,0,0,1,10.89,7Z"
            />
         </svg>
      </div>
      <div class="idea__text">{{ ideaText }}</div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         ideaText: "Need some inspiration? Click here!",
         ideas: [
            "Recognize a mistake that you made in the past and the lesson that it taught you.",
            "Compare today's version of you to the version from a year ago.",
            "Describe the person that you will be in 5 years from now.",
            "Write about something that made you happy today and identify how you can adapt your circumstances to experience it more often.",
            "Pat yourself on the back for your last major achievement.",
            "List the challenges you faced recently and try to find a specific solution for each of them.",
            "Write about a good habit that you either had in the past or want to adopt now and identify how you could start building it into your life.",
            "Pick one person or thing that you are grateful for in your life and write about what makes them/it special and worth appreciating",
            "Choose something stupid that you have done in the past and turn it into a funny story.",
            "Set a timer for 10 minutes and write about whatever is on your mind, spelling and grammar won't be graded, the only rule is that you can't stop writing.",
            "Write a letter to someone you love, and if possible put it on paper and do what you know you have to do.",
            "Go back to a challenge time that you faced at some point in your life and realize how amazing you are for overcoming it.",
            "Write about something curious that caught your attention and identify what you could do to learn more about the thing or topic.",
            "Think of a challenge that you face regularly and turn it into the next big business idea",
            "Write about a role model of yours and realize what you have in common, as well as how that role model's actions differ from yours.",
            "Acknowledge an act of kindness that you performed today and how it made you feel.",
            "Who are the five people that you spend the most time with and how do they shape you?",
            "Create a list of five things you should stop doing and five things that you should start doing. Then choose one item in each list to start implementing it tomorrow.",
            "Summarize what you learned today and how you can apply it moving forward.",
            "Go for a 10 minute walk/run and sit down immediately after to write down what's on your mind.",
            "Write about something or someone that made you completely shift your perspective on life.",
            "Create a wish list of things you want to learn and look up at least one potential learning source for each (online courses, books, friends and family, etc.).",
            "Set a timer for 10 minutes and unleash your frustration about something, bonus points for creative cursing. Once the timer rings, never think about that thing again.",
            "Roses are red, violets are blue, if I can write a poem, so can you.",
            "Preview a specific event that you look forward to and note down that things you want to get done before it.",
            "What would you do today if you only had 24 hours left to live? Write it down and then do it for real!",
            "Write about your biggest fear and the things you could do to overcome it.",
            "Narrate a conversation that you had in the past but change your statements and responses to what you should have said.",
            "Identify one thing about you that you will focus on improving over the next month.",
            "Write down one thing that you could do tomorrow to help the community and people around you and then do it.",
         ],
      };
   },
   computed: {
      ideasLength() {
         return this.ideas.length;
      },
   },
   methods: {
      generateIdea() {
         this.ideaText =
            this.ideas[Math.floor(Math.random() * this.ideasLength)];
      },
   },
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.idea {
   display: flex;
   align-items: center;
   line-height: 1.25;
   color: $color-purple;
   cursor: pointer;
   transition: color 0.25s ease;
   &:hover {
      color: lighten($color-purple, 10%);
   }
   &__icon-box {
      width: 2em;
      height: 2em;
      border-radius: 50%;
      border: 0.125rem solid currentColor;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
   }
   &__icon {
      height: 50%;
      fill: currentColor;
   }
   &__text {
      margin-left: 0.5em;
      font-weight: 700;
   }
}
</style>