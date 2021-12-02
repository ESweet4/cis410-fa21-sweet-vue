<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ item.ItemName }}</h2>
        <br />

        <p>
          Summary: <br /><strong>{{ item.Summary }}</strong>
        </p>
        <p>
          Style: <br /><strong>{{ item.Style }}</strong>
        </p>
        <p>
          Category: <br /><strong>{{ item.CategoryName }}</strong>
        </p>
        <p>
          Cost: <br /><strong>{{ formattedCost }}</strong>
        </p>
      </div>
    </div>
    <br />

    <router-link v-if="auth" :to="`/items/${this.$route.params.pk}/createOrder`"
      ><button class="btn btn-success">Create an Order</button></router-link
    >

    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">
        Sign in to Create an Order
      </button></router-link
    >
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      let allItems = this.$store.state.items;

      let thisItem = allItems.find((anItem) => {
        return anItem.ItemPK == this.$route.params.pk;
      });
      console.log(thisItem);
      return thisItem;
    },
    formattedCost() {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.item.Cost);
    },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
