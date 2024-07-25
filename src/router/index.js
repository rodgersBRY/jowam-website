import { createRouter, createWebHistory } from "vue-router";
import {nextTick} from 'vue'

import Home from "@/views/Home.vue"

const DEFAULT_TITLE = "Jowam Coffee Traders Ltd";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  // lazy load the other routes
  {
    path: "/module/:id",
    name: "module-details",
    component: () => import("@/views/module_details.vue"),
  },
  {
    path: "/teachers",
    name: "Teachers",
    component: () => import("@/views/Teachers.vue"),
    meta: {
      title: `Teachers | ${DEFAULT_TITLE}`,
    },
  },
  {
    path: "/events",
    name: "Events",
    component: () => import("@/views/Events.vue"),
    meta: {
      title: `Events | ${DEFAULT_TITLE}`,
    },
  },
  {
    path: "/contact-us",
    name: "School Contact",
    component: () => import("@/views/ContactUs.vue"),
    meta: {
      title: `Contact School | ${DEFAULT_TITLE}`,
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


router.afterEach((to, _) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
