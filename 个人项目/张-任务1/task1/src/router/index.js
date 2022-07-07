import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Board from "@/views/Board";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        {
          path: "/",
          redirect: "/board",
        },
        {
          path: "/board",
          name: "board",
          component: Board,
        },
      ],
    },
  ],
});

export default router;
