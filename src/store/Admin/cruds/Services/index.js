import axios from "axios";
import store from "@/store";

const state = {
  data: [],
};

const getters = {
  data: (state) => state.data,
  serviceById: (state) => (id) =>
    state.data.find((service) => service.id === id),
};

const mutations = {
  SET_data(state, data) {
    state.data = data;
  },
  ADD_SERVICE(state, service) {
    state.data.push(service);
  },
  UPDATE_SERVICE(state, service) {
    const index = state.data.findIndex((s) => s.id === service.id);
    if (index !== -1) {
      state.data.splice(index, 1, service);
    }
  },
  DELETE_SERVICE(state, id) {
    state.data = state.data.filter((service) => service.id !== id);
  },
};

const actions = {
  async deleteService({ commit }, { id, onSuccess, onFailure }) {
    try {
      await axios.delete(`http://localhost:3000/service/${id}`);
      commit("DELETE_SERVICE", id);
      onSuccess();
    } catch (error) {
      console.error("Error deleting service:", error);
      onFailure(error);
    }
  },
  async fetchIndexData({ commit }) {
    try {
      const response = await axios.get("service");
      const data = Object.values(response.data);
      commit("SET_data", data);
    } catch (error) {
      console.error("Error fetching index data:", error);
    }
  },
  async createService({ commit }, serviceData) {
    const response = await axios.post("service", serviceData);
    const service = response.data;
    commit("ADD_SERVICE", service);
    return service;
  },
  async updateService({ commit }, serviceData) {
    const response = await axios.put(`service/${serviceData.id}`, serviceData);
    const service = response.data;
    commit("UPDATE_SERVICE", service);
    return service;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
