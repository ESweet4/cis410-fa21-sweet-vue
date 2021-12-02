<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ firstName }}'s Orders</h3>

    <p v-if="accountError" class="text-danger">
      Cannot get your account information, please try again later
    </p>

    <table v-if="ordersByUser" class="table">
      <thead>
        <th>Order Number</th>
        <th>Item</th>
        <th>Cost per Unit</th>
        <th>Quantity</th>
      </thead>
      <tbody>
        <tr v-for="thisOrder in ordersByUser" :key="thisOrder.OrderPK">
          <th>{{ thisOrder.OrderPK }}</th>
          <th>
            <router-link :to="`/orders/${thisOrder.ItemFK}`">{{
              thisOrder.ItemName
            }}</router-link>
          </th>
          <th>{{ thisOrder.Cost }}</th>
          <th>{{ thisOrder.Quantity }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ordersByUser: null,
      accountError: false,
    };
  },
  computed: {
    firstName() {
      console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.NameFirst;
    },
  },
  created() {
    axios
      .get("/orders/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log("Here is the response", theResponse);
        this.ordersByUser = theResponse.data;
      })
      .catch(() => {
        this.accountError = true;
      });
  },
};
</script>

<style></style>
