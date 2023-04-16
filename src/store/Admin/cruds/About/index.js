import axios from "axios";

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
  async fetchIndexData({ commit }) {
    const response = await axios.get("about");
    const data = response.data;
    commit("SET_data", data);
  },
  async createBlog({ commit }, blogData) {
    const response = await axios.post("about", blogData);
    const blog = response.data;
    commit("ADD_BLOG", blog);
    return blog;
  },
  async updateBlog({ commit }, blogData) {
    const response = await axios.put(`about/${blogData.id}`, blogData);
    const blog = response.data;
    commit("UPDATE_BLOG", blog);
    return blog;
  },
  async deleteBlog({ commit }, id) {
    await axios.delete(`about/${id}`);
    commit("DELETE_BLOG", id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
