import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    token: null,
    user: null,
    items: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },
    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storeItems(state, items) {
      state.items = items;
    },
  },
  acions: {
    getItems({ commit }) {
      axios.get("/items").then((aResponse) => {
        console.log("response in /items", aResponse);
        commit("storeItems", aResponse.data);
      });
    },
  },
});
