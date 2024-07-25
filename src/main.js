import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import TopNav from "./components/top_nav.vue"
import Footer from "./components/footer.vue";

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .component("menu-bar", TopNav)
  .component("training-footer", Footer)
  .mount("#app");
