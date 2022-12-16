/* eslint-disable no-unused-vars */
import Vue from "vue";
import Router from "vue-router";
import goTo from "vuetify/lib/services/goto";

import Home from "../views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // lazy load the other routes
    {
      path: "/module/:id",
      name: "module-details",
      component: () => import("../views/module_details.vue"),
      meta: {
        title: "",
      },
    },
    {
      path: "/teachers",
      name: "Teachers",
      component: () => import("../views/Teachers.vue"),
      meta: {
        title: "Teachers",
      },
    },
    {
      path: "/events",
      name: "Events",
      component: () => import("../views/Events.vue"),
      meta: {
        title: "Events",
      },
    },
    {
      path: "/contact-us",
      name: "School Contact",
      component: () => import("../views/ContactUs.vue"),
      meta: {
        title: "Contact School",
      },
    },
    {
      path: "/*",
      component: 404,
    },
  ],
});

//change bar title
const DEFAULT_TITLE = "Jowam Coffee Traders Ltd";
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

router.afterEach((to, from) => {
  goTo(0, { duration: 0 });
});

export default router;
