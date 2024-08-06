import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createHead, useHead } from "@vueuse/head";

import NavBar from "./components/navigation.vue";
import Footer from "./components/footer.vue";

import './index.css'

loadFonts();

const head = createHead();

useHead({
  title: "Jowam Coffee Traders",
  meta: [
    {
      name: "description",
      content:
        "We promote farmers by providing advanced farming technologies to ensure production of high-quality coffee that is of great value.",
    },
    {
      property: "og:title",
      content: "Jowam Coffee Traders",
    },
  ],
});

createApp(App)
  .use(router)
  .use(vuetify)
  .use(head)
  .component("nav-bar", NavBar)
  .component("bottom-footer", Footer)
  .mount("#app");
