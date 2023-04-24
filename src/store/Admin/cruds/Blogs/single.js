import axios from "axios";
import store from "@/store";

function initialState() {
  return {
    entry: {},
  };
}

const route = "blog";

const getters = {
  entry: (state) => state.entry,
};

const actions = {
  updateData({ commit }) {
    axios.get(`${route}`).then((response) => {
      commit("setEntry", response.data);
    });
  },
  fetchEditData({ commit }, id) {
    axios.get(`${route}/${id}`).then((response) => {
      commit("setEntry", response.data);
    });
  },
  fetchShowData({ commit }, id) {
    axios.get(`${route}/${id}`).then((response) => {
      commit("setEntry", response.data);
    });
  },
  async deleteData({ commit }, { id, onSuccess, onFailure }) {
    await store.dispatch("loadingModule/setLoading", true);
    try {
      await axios.delete(`/blog/${id}`);
      commit("deleteData", id);
      onSuccess();
    } catch (error) {
      console.error("Error deleting blog:", error);
      onFailure(error);
    }
    await store.dispatch("loadingModule/setLoading", false);
  },
};

const mutations = {
  setEntry(state, entry) {
    state.entry = entry;
  },
  deleteData(state, id) {
    state.entry = state.data.filter((blog) => blog.id !== id);
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
