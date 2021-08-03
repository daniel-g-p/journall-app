import { createApp } from "vue";

import App from "./App.vue";
import BaseHeader from "./components/BaseHeader.vue";
import BaseCard from "./components/BaseCard.vue";
import BaseDropdown from "./components/BaseDropdown.vue";
import EntryGrid from "./components/EntryGrid.vue";
import NewEntry from "./components/NewEntry.vue";
import BaseAlert from "./components/BaseAlert.vue";
import BaseConfirmCard from "./components/BaseConfirmCard.vue";
import ReadingArea from "./components/ReadingArea.vue";

const app = createApp(App);

app.component("base-header", BaseHeader);
app.component("base-card", BaseCard);
app.component("base-dropdown", BaseDropdown);
app.component("entry-grid", EntryGrid);
app.component("new-entry", NewEntry);
app.component("base-alert", BaseAlert);
app.component("base-confirm-card", BaseConfirmCard);
app.component("reading-area", ReadingArea);

app.mount("#app");