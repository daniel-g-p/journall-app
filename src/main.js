import { createApp } from "vue";

import App from "./App.vue";
import BaseHeader from "./components/BaseHeader.vue";
import BaseCard from "./components/BaseCard.vue";
import BaseDropdown from "./components/BaseDropdown.vue";
import BaseGrid from "./components/BaseGrid.vue";
import BaseEntry from "./components/BaseEntry.vue";

const app = createApp(App);

app.component("base-header", BaseHeader);
app.component("base-card", BaseCard);
app.component("base-dropdown", BaseDropdown);
app.component("base-grid", BaseGrid);
app.component("base-entry", BaseEntry);

app.mount("#app");