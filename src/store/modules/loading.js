// loadingModule.js
const state = {
  isLoading: false,
};

const getters = {
  isLoading: (state) => state.isLoading,
};

const mutations = {
  setLoading(state, value) {
    state.isLoading = value;
  },
};

const actions = {
  setLoading({ commit }, value) {
    commit("setLoading", value);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
