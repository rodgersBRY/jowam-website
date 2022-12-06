import Vue from "vue";
import App from "./App.vue";
import VueMeta from "vue-meta";

import vuetify from "./plugins/vuetify";
import router from "./router/index";

// import common components
import TopNav from "./components/top_nav.vue";
import Footer from "./components/footer.vue";

Vue.use(VueMeta, {
  keyName: "metaInfo",
  refreshOnceOnNavigation: true,
});

Vue.config.productionTip = false;

// register the components for global access
Vue.component("menu-bar", TopNav);
Vue.component("training-footer", Footer);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
