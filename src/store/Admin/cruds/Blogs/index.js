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
  SET_data(state, data) {
    state.data = data;
  },
  ADD_BLOG(state, blog) {
    state.data.push(blog);
  },
  UPDATE_BLOG(state, blog) {
    const index = state.data.findIndex((b) => b.id === blog.id);
    if (index !== -1) {
      state.data.splice(index, 1, blog);
    }
  },
  DELETE_BLOG(state, id) {
    state.data = state.data.filter((blog) => blog.id !== id);
  },
};

const actions = {
  async deleteBlog({ commit }, { id, onSuccess, onFailure }) {
    await store.dispatch("setLoading", true);
    try {
      await axios.delete(`http://localhost:3000/blog/${id}`);
      commit("DELETE_BLOG", id);
      onSuccess();
    } catch (error) {
      console.error("Error deleting blog:", error);
      onFailure(error);
    }
    await store.dispatch("setLoading", false);
  },
  async fetchIndexData({ commit }) {
    try {
      await store.dispatch("setLoading", true);
      const response = await axios.get("blog");
      const data = Object.values(response.data);
      commit("SET_data", data);
    } catch (error) {
      console.error("Error fetching index data:", error);
    } finally {
      await store.dispatch("setLoading", false);
    }
  },
  async createBlog({ commit }, blogData) {
    const response = await axios.post("blog", blogData);
    const blog = response.data;
    commit("ADD_BLOG", blog);
    return blog;
  },
  async updateBlog({ commit }, blogData) {
    const response = await axios.put(`blog/${blogData.id}`, blogData);
    const blog = response.data;
    commit("UPDATE_BLOG", blog);
    return blog;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
