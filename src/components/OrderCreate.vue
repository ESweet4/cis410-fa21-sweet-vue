<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="card-body">
            <h4>Create an Order</h4>
            <form id="order-form" @submit.prevent="submitOrder">
              <div class="mb-3">
                <label for="quantity-input" class="form-label">Quantity</label
                ><input
                  type="number"
                  class="form-control"
                  id="quantity-input"
                  required=""
                  min="1"
                  max="10"
                  v-model="quantity"
                />
              </div>

              <button type="submit" class="btn btn-primary">Submit Order</button
              ><button
                v-on:click="cancelOrder"
                type="clear"
                class="btn btn-outline-danger"
              >
                Cancel
              </button>

              <p v-if="errorMessage" class="form-text text-danger">
                {{ errorMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      quantity: null,
      errorMessage: null,
    };
  },
  methods: {
    submitOrder() {
      let myOrder = {
        quantity: this.quantity,
        itemFK: this.$route.params.pk,
      };

      axios
        .post("/orders", myOrder, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .then(() => {
          this.$router.replace("/account");
        })
        .catch(() => {
          this.errorMessage =
            "Unable to create an order, please try again later";
        });
    },
    cancelOrder() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>
