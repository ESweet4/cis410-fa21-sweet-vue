<template>
  <div>
    <h1>Items</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Summary</th>
          <th>Cost</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="anItem in theItems" :key="anItem.ItemPK">
          <th>{{ anItem.ItemName }}</th>
          <th>{{ anItem.Summary }}</th>
          <th>{{ anItem.Cost }}</th>
          <th>
            <router-link :to="`/items/${anItem.ItemPK}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theItems() {
      return this.$store.state.items;
    },
  },
};
</script>

<style></style>
