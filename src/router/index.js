import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Categories",
    component: () => import("../views/СategoriesPage.vue"),
  },
  {
    path: "/:category",
    name: "Category",
    component: () => import("../views/TodosPage.vue"),
  },
  {
    path: "/:category/:id",
    name: "TodoPage",
    component: () => import("../views/TodoPage.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
