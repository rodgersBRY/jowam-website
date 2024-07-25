import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import NavBar from "./components/navigation.vue";
import Footer from "./components/footer.vue";

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .component("nav-bar", NavBar)
  .component("bottom-footer", Footer)
  .mount("#app");
