const state = {
  isScroll: false,
  isScrollDown: false,
};

const getters = {
  isScroll: (state) => state.isScroll,
  isScrollDown: (state) => state.isScrollDown,
};

const mutations = {
  setIsScroll(state, isMobile) {
    state.isScroll = isMobile;
  },
  setIsScrollDown(state, isScrollDown) {
    // Add this mutation
    state.isScrollDown = isScrollDown;
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
