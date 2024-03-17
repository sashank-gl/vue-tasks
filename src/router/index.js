import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/views/Welcome.vue";
import Tasks from "../views/Tasks.vue";
import Info from "@/views/Info.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome,
    },
    {
      path: "/tasks",
      name: "tasks",
      component: Tasks,
    },
    {
      path: "/info",
      name: "info",
      component: Info,
    },
  ],
});

export default router;
