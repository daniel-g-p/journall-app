import { createApp } from "vue";

import App from "./App.vue";
import BaseHeader from "./components/BaseHeader.vue";
import BaseCard from "./components/BaseCard.vue";
import BaseDropdown from "./components/BaseDropdown.vue";

const app = createApp(App);

app.component("base-header", BaseHeader);
app.component("base-card", BaseCard);
app.component("base-dropdown", BaseDropdown);
app.mount("#app");