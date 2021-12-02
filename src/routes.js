import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import OrderDetail from "./components/OrderDetail.vue";
import Orders from "./components/Orders.vue";
import NotFound from "./components/NotFound.vue";
import OrderCreate from "./components/OrderCreate.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";
import Items from "./components/Items.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/account", component: Account },
    { path: "/login", component: Login },
    { path: "/items", component: Items },
    { path: "/orders", component: Orders },
    {
      path: "/items/:pk",
      component: OrderDetail,
      children: [{ path: "createOrder", component: OrderCreate }],
    },
    { path: "/signup", component: Signup },
    { path: "/:invalidroute(.*)", component: NotFound },
  ],
});

export default router;
