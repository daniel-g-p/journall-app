<template>
   <main class="content">
      <home-page v-bind:content="entries" v-bind:user="user"></home-page>
   </main>
</template>

<script>
import HomePage from "./HomePage.vue";

export default {
   components: {
      "home-page": HomePage,
   },
   provide() {
      return {
         user: this.user,
         entries: this.entries,
         quotes: this.quotes,
         likeEntry: this.likeEntry,
         removeLike: this.removeLike,
         postEntry: this.postEntry,
         saveDraft: this.saveDraft,
         discardEntry: this.discardEntry,
      };
   },
   data() {
      return {
         user: {
            username: "@user1",
            email: "test@journall.com",
            password: "Journall.2021",
            emailVerified: true,
            joined: {
               day: 30,
               month: "July",
               year: 2021,
            },
            favorites: [],
            own: [],
            drafts: [],
         },
         entries: [],
         quotes: [],
      };
   },
   methods: {
      populateEntries() {
         for (let i = 0; i < 10; i++) {
            const entry = randomEntry();
            this.entries.push(entry);
            if (entry.author === this.user.username) {
               this.user.own.push(entry.id);
            }
         }
      },
      populateQuotes() {
         for (let i = 0; i < 50; i++) {
            const quote = randomQuote();
            this.quotes.push(quote);
         }
      },
      likeEntry(id, categories) {
         this.user.favorites.push({
            id: id,
            categories: categories,
         });
         const entry = this.entries.find((item) => item.id === id);
         entry.likes.total++;
         for (let category of categories) {
            entry.likes[category]++;
         }
      },
      removeLike(id) {
         const favoriteIndex = this.user.favorites.findIndex(
            (item) => item.id === id
         );
         const categories = this.user.favorites[favoriteIndex].categories;
         const entryIndex = this.entries.findIndex((item) => item.id === id);
         const entry = this.entries[entryIndex];
         this.user.favorites.splice(favoriteIndex, 1);
         entry.likes.total--;
         for (let category of categories) {
            entry.likes[category]--;
         }
      },
      createEntry(title, content) {
         const currentDate = new Date();
         return {
            id: randomID(),
            author: this.user.username,
            date: {
               day: currentDate.getDate(),
               month: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
               ][currentDate.getMonth()],
               year: currentDate.getFullYear(),
            },
            title: title,
            content: content,
            likes: {
               total: 0,
               admiration: 0,
               curiosity: 0,
               gratitude: 0,
               hope: 0,
               inspiration: 0,
               joy: 0,
               serenity: 0,
            },
         };
      },
      postEntry(title, content) {
         const entry = this.createEntry(title, content);
         this.entries.push(entry);
         this.user.own.push(entry.id);
      },
      saveDraft(title, content) {
         const entry = this.createEntry(title, content);
         this.user.drafts.push(entry);
      },
      discardEntry(id = null) {
         if (id) {
            const index = this.user.drafts.findIndex((item) => item === id);
            if (index !== -1) {
               this.user.drafts.splice(index, 1);
            }
         }
      },
   },
   mounted() {
      this.populateEntries();
      this.populateQuotes();
   },
};

const randomID = () => {
   let id = "";
   for (let i = 1; i <= 24; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      id += randomNumber;
      if (i % 4 === 0 && i !== 24) {
         id += "-";
      }
   }
   return id;
};
const randomUser = () => {
   let user = "@user";
   user += Math.floor(Math.random() * 10 + 1);
   return user;
};
const randomDate = () => {
   let monthIndex = Math.floor(Math.random() * 12);
   const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ][monthIndex];
   let day = null;
   if (monthIndex === 1) {
      day = Math.floor(Math.random() * 28);
   } else if ([3, 5, 8, 10].includes(monthIndex)) {
      day = Math.floor(Math.random() * 30);
   } else {
      day = Math.floor(Math.random() * 31);
   }
   let year = Math.floor(Math.random() * 22) + 2000;
   return {
      day: day,
      month: month,
      year: year,
   };
};
const randomTitle = () => {
   const nouns = [
      "bird",
      "clock",
      "boy",
      "plastic",
      "duck",
      "teacher",
      "old lady",
      "professor",
      "hamster",
      "dog",
   ];
   const verbs = [
      "kicked",
      "ran from",
      "flew into",
      "dodged",
      "sliced up",
      "rolled against",
      "died from",
      "bumped into",
      "slept with",
      "killed",
   ];
   const adjectives = [
      "a beautiful",
      "a lazy",
      "a professional",
      "a lovely",
      "a dumb",
      "a rough",
      "a soft",
      "a hot",
      "a vibrating",
      "a slimy",
   ];
   let title =
      adjectives[Math.floor(Math.random() * 10)] +
      " " +
      nouns[Math.floor(Math.random() * 10)] +
      " " +
      verbs[Math.floor(Math.random() * 10)] +
      " " +
      adjectives[Math.floor(Math.random() * 10)] +
      " " +
      nouns[Math.floor(Math.random() * 10)] +
      ".";
   title = title[0].toUpperCase() + title.slice(1);
   return title;
};
const randomContent = (min = 1, max = 5) => {
   const template = "Lorem ipsum dolor sit amet consectetur adipisicing elit. ";
   let content = "";
   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + 1 + min;
   for (let i = 0; i < randomNumber; i++) {
      content += template;
   }
   return content.trim();
};
const randomLikes = (max = 10000) => {
   const total = Math.floor(Math.random() * max) + 1;
   const joy = Math.floor((Math.random() * total) / 2);
   const gratitude = Math.floor((Math.random() * total) / 2);
   const serenity = Math.floor((Math.random() * total) / 2);
   const curiosity = Math.floor((Math.random() * total) / 2);
   const inspiration = Math.floor((Math.random() * total) / 2);
   const hope = Math.floor((Math.random() * total) / 2);
   const admiration = Math.floor((Math.random() * total) / 2);
   return {
      total: total,
      admiration: admiration,
      curiosity: curiosity,
      gratitude: gratitude,
      hope: hope,
      inspiration: inspiration,
      joy: joy,
      serenity: serenity,
   };
};
const randomEntry = () => {
   const entry = {};
   entry.id = randomID();
   entry.author = randomUser();
   entry.date = randomDate();
   entry.title = randomTitle();
   entry.content = randomContent(5, 15);
   entry.likes = randomLikes();
   return entry;
};

const randomAuthor = () => {
   let author = "Author";
   for (let i = 0; i < 4; i++) {
      author += Math.floor(Math.random() * 10);
   }
   return author;
};
const randomQuote = () => {
   const quote = {};
   (quote.type = "quote"), (quote.id = randomID());
   quote.author = randomAuthor();
   quote.content = randomContent();
   quote.likes = randomLikes();
   return quote;
};
</script>

<style lang="scss" scoped>
@import "../scss/abstracts.scss";

.content {
   background-color: $color-green-light;
   overflow-x: hidden;
   padding: 1rem;
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
}
</style>