const state = {
  isLoading: false,
};

const getters = {
  isLoading: (state) => state.isLoading,
};

const mutations = {
  SET_LOADING(state, value) {
    state.isLoading = value;
  },
};

const actions = {
  setLoading({ commit }, value) {
    commit("SET_LOADING", value);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
