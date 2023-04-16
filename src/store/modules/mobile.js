const state = {
  isMobile: false,
};

const getters = {
  isMobile: (state) => state.isMobile,
};

const mutations = {
  setIsMobile(state, isMobile) {
    state.isMobile = isMobile;
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
