import { createApp } from "vue";

import App from "./App.vue";
import BaseHeader from "./components/BaseHeader.vue";
import BaseCard from "./components/BaseCard.vue";
import BaseDropdown from "./components/BaseDropdown.vue";
import EntryGrid from "./components/EntryGrid.vue";
import EntryGridCard from "./components/EntryGridCard.vue";
import EntryGridCardLike from "./components/EntryGridCardLike.vue";

const app = createApp(App);

app.component("base-header", BaseHeader);
app.component("base-card", BaseCard);
app.component("base-dropdown", BaseDropdown);
app.component("entry-grid", EntryGrid);
app.component("entry-grid-card", EntryGridCard);
app.component("entry-grid-card-like", EntryGridCardLike);

app.mount("#app");