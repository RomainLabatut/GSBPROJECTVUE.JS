import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/login.vue";
import HomePage from "@/views/homepage.vue";
import Resultat from "@/views/resultat.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/homepage",
    name: "homepage",
    component: HomePage,
  },
  {
    path: "/resultat",
    name: "resultat",
    component: Resultat,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;