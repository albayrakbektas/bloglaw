import { addData } from "@/utils/methods";
import store from "core-js/internals/shared-store";
import axios from "axios";

const state = {
  data: [],
};

const getters = {
  data: (state) => state.data,
};

const mutations = {
  setData(state, data) {
    state.data = data;
  },
  createData(state, employment) {
    state.data.push(employment);
  },
  deleteData(state, id) {
    state.data = state.data.filter((employment) => employment.id !== id);
  },
};

const actions = {
  async fetchIndexData({ commit }) {
    try {
      const response = await axios.get("employments");
      const data = Object.values(response.data);
      commit("setData", data);
    } catch (error) {
      console.error("Error fetching index data:", error);
    }
  },
  async deleteData({ commit }, { id, onSuccess, onFailure }) {
    try {
      await axios.delete(`/employments/${id}`);
      commit("deleteData", id);
      onSuccess();
    } catch (error) {
      console.error("Error deleting blog:", error);
      onFailure(error);
    }
    await store.dispatch("loadingModule/setLoading", false);
  },
  async createData({ commit }, employmentData) {
    await store.dispatch("loadingModule/setLoading", true);
    try {
      const response = await addData("employment", employmentData);
      const data = response.data;
      commit("createData", data);
      return data;
    } catch (error) {
      console.error("Error creating employment:", error);
      throw error;
    } finally {
      await store.dispatch("loadingModule/setLoading", false);
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
