import Vue from "vue";
import Toasted from "vue-toasted";

Vue.use(Toasted, {
  duration: 3000,
  position: "bottom-right",
  iconPack: "fontawesome",
});

const state = {};

const mutations = {};

const actions = {
  success(_, message) {
    Vue.toasted.success(message, {
      icon: "check",
    });
  },
  error(_, message) {
    Vue.toasted.error(message, {
      icon: "times",
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
