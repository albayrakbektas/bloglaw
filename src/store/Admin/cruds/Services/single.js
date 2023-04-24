import axios from "axios";

function initialState() {
  return {
    entry: {},
    loading: false,
  };
}

const route = "service";

const getters = {
  entry: (state) => state.entry,
  lists: (state) => state.lists,
  loading: (state) => state.loading,
  validationErrors: (state) => state.validationErrors,
};

const actions = {
  storeData({ commit, dispatch }) {
    commit("setLoading", true);
    dispatch("Alert/resetState", null, { root: true });

    return new Promise((resolve, reject) => {
      let params = "";
      axios
        .post(route, params)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          let message = error.response.data.message || error.message;
          let errors = error.response.data;

          commit("setValidationErrors", errors);

          dispatch(
            "Alert/setAlert",
            { message: message, errors: errors, color: "danger" },
            { root: true }
          );

          reject(error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    });
  },
  updateData({ commit }) {
    axios.get(`${route}`).then((response) => {
      commit("setEntry", response.data.data);
      commit("setLists", response.data.meta);
    });
  },
  fetchEditData({ commit }, id) {
    axios.get(`${route}/${id}`).then((response) => {
      commit("setEntry", response.data);
    });
  },
  fetchShowData({ commit }, id) {
    axios.get(`${route}/${id}`).then((response) => {
      commit("setEntry", response.data.data);
    });
  },
  resetState({ commit }) {
    commit("resetState");
  },
};

const mutations = {
  setEntry(state, entry) {
    state.entry = entry;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
