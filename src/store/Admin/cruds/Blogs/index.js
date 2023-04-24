import axios from "axios";
import store from "@/store";

const state = {
  data: [],
};

const getters = {
  data: (state) => state.data,
  blogById: (state) => (id) => state.data.find((blog) => blog.id === id),
};

const mutations = {
  setData(state, data) {
    state.data = data;
  },
  addData(state, blog) {
    state.data.push(blog);
  },
  updateData(state, blog) {
    const index = state.data.findIndex((b) => b.id === blog.id);
    if (index !== -1) {
      state.data.splice(index, 1, blog);
    }
  },
  deleteData(state, id) {
    state.data = state.data.filter((blog) => blog.id !== id);
  },
};

const actions = {
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
  async fetchIndexData({ commit }) {
    try {
      await store.dispatch("setLoading", true);
      const response = await axios.get("blog");
      const data = Object.values(response.data);
      commit("setData", data);
    } catch (error) {
      console.error("Error fetching index data:", error);
    } finally {
      await store.dispatch("setLoading", false);
    }
  },
  async createData({ commit }, blogData) {
    const response = await axios.post("blog", blogData);
    const blog = response.data;
    commit("addData", blog);
    return blog;
  },
  async updateData({ commit }, blogData) {
    try {
      const response = await axios.put(`blog/${blogData.id}`, blogData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const blog = response.data;
      commit("updateData", blog);
    } catch (e) {
      console.log(e);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
