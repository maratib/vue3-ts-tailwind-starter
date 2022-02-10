import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    meta: {
      layout: "AuthLayout", // we add new meta layout here to use it later
    },
    component: () => import("./pages/Home.vue"),
  },
  {
    path: "/product",
    name: "product",
    meta: {
      layout: "DashLayout", // we add new meta layout here to use it later
    },
    component: () => import("./pages/Product.vue"),
  },
  // {
  //   path: "/product/:id",
  //   name: "product",
  //   component: () => import("./pages/Product.vue"),
  // },
  //   {
  //     path: "/add",
  //     name: "add",
  //     component: () => import("./components/AddTutorial.vue"),
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
