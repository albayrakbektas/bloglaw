import axios from "axios";
import store from "@/store";

const state = {
  data: [],
};

const getters = {
  data: (state) => state.data,
  aboutById: (state) => (id) => state.data.find((about) => about.id === id),
};

const mutations = {
  SET_data(state, data) {
    state.data = data;
  },
  ADD_about(state, about) {
    state.data.push(about);
  },
  UPDATE_about(state, about) {
    const index = state.data.findIndex((b) => b.id === about.id);
    if (index !== -1) {
      state.data.splice(index, 1, about);
    }
  },
  DELETE_about(state, id) {
    state.data = state.data.filter((about) => about.id !== id);
  },
};

const actions = {
  async deleteabout({ commit }, { id, onSuccess, onFailure }) {
    try {
      await axios.delete(`http://localhost:3000/about/${id}`);
      commit("DELETE_about", id);
      onSuccess();
    } catch (error) {
      console.error("Error deleting about:", error);
      onFailure(error);
    }
  },
  async fetchIndexData({ commit }) {
    try {
      const response = await axios.get("http://localhost:3000/about");
      const data = response.data;
      commit("SET_data", data);
    } catch (error) {
      console.error("Error fetching index data:", error);
    }
  },
  async createabout({ commit }, aboutData) {
    const response = await axios.post("about", aboutData);
    const about = response.data;
    commit("ADD_about", about);
    return about;
  },
  async updateabout({ commit }, aboutData) {
    const response = await axios.post(`about/${aboutData.id}`, aboutData);
    const about = response.data;
    commit("UPDATE_about", about);
    return about;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
