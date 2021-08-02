import { createApp } from "vue";

import App from "./App.vue";
import BaseHeader from "./components/BaseHeader.vue";
import BaseCard from "./components/BaseCard.vue";
import BaseDropdown from "./components/BaseDropdown.vue";
import EntryGrid from "./components/EntryGrid.vue";
import newEntry from "./components/newEntry.vue";
import BaseAlert from "./components/BaseAlert.vue";

const app = createApp(App);

app.component("base-header", BaseHeader);
app.component("base-card", BaseCard);
app.component("base-dropdown", BaseDropdown);
app.component("entry-grid", EntryGrid);
app.component("new-entry", newEntry);
app.component("base-alert", BaseAlert);

app.mount("#app");