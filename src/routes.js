import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import OrderDetail from "./components/OrderDetail.vue";
import Orders from "./components/Orders.vue";
import NotFound from "./components/NotFound.vue";
import OrderCreate from "./components/OrderCreate.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/account", component: Account },
    { path: "/login", component: Login },
    { path: "/orders", component: Orders },
    {
      path: "/orders/:pk",
      component: OrderDetail,
      children: [{ path: "order", component: OrderCreate }],
    },
    { path: "/signup", component: Signup },
    { path: "/:invalidroute(.*)", component: NotFound },
  ],
});

export default router;