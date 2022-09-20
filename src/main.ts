import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");

import SingleApp from "./SingleApp.vue";
const singleApp = createApp(SingleApp);
singleApp.mount("#singleApp");
