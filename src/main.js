import Vue from "vue";
import App from "./App.vue";
import VueMeta from "vue-meta";

import vuetify from "./plugins/vuetify";
import router from "./router/index";

// import common components
import navBar from "./components/navigation";
import Footer from "./components/footer";

Vue.use(VueMeta, {
  keyName: "metaInfo",
  refreshOnceOnNavigation: true,
});

Vue.config.productionTip = false;

// register the components for global access
Vue.component("nav-bar", navBar);
Vue.component("bottom-footer", Footer);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
