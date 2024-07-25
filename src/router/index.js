import { createRouter, createWebHistory } from "vue-router";

import About from "@/views/about.vue";
import Contact from "@/views/contact.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      title: "About Us",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: {
      title: "Contact Us",
    },
  },
  {
    path: "/*",
    component: 404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    // always scroll to top
    return { left: 0, top: 0 };
  },
});

const DEFAULT_TITLE = "Jowam Coffee Traders Ltd";
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
