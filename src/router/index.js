/* eslint-disable no-unused-vars */
import Vue from "vue";
import Router from "vue-router";
import goTo from "vuetify/lib/services/goto";

import Home from "../views/Home.vue";
import About from "../views/about.vue";
import Contact from "../views/contact.vue";

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
      path: '/training',
      name: 'training',
      component: () => import('../views/trainingCentre/Home.vue'),
      meta: {
        title: 'Training Centre'
      }
    },
    // lazy load the other routes
  {
    path: "/module/:id",
    name: "module-details",
    component: () => import("../views/trainingCentre/module_details.vue"),
    meta: {
      title: ''
    }
  },
  {
    path: "/teachers",
    name: "Teachers",
    component: () => import("../views/trainingCentre/Teachers.vue"),
    meta: {
      title: 'Teachers'
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/trainingCentre/Events.vue'),
    meta: {
      title: 'Events'
    }
  },
  {
    path: "/contact-us",
    name: "School Contact",
    component: () => import("../views/trainingCentre/ContactUs.vue"),
    meta: {
      title: 'Contact School'
    }
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
