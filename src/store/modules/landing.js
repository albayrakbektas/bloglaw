const state = {
  isLoading: false,
  progress: 0,
};

const mutations = {
  setLoadingStatus(state, status) {
    state.isLoading = status;
  },
  setProgress(state, progress) {
    state.progress = progress;
  },
};

const actions = {
  setLoading({ commit }, status) {
    commit("setLoadingStatus", status);
  },
  setProgress({ commit }, progress) {
    commit("setProgress", progress);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
