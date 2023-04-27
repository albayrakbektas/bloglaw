import axios from "axios";
import store from "@/store";

const state = {
  errorMessage: "",
};

const mutations = {
  SET_ERROR_MESSAGE(state, message) {
    state.errorMessage = message;
  },
};

const actions = {
  async updatePassword({ commit }, { oldPassword, newPassword }) {
    try {
      await axios.put("/settings/password", {
        oldPassword,
        newPassword,
      });
      commit("SET_ERROR_MESSAGE", "");
      await store.dispatch("toast/success", "Şifreniz başarıyla değiştirildi.");
    } catch (error) {
      console.error("Error updating password:", error);
      commit("SET_ERROR_MESSAGE", error.message);
      await store.dispatch("toast/error", "Şifreniz değiştirilemedi.");
      throw error;
    }
  },
};

const getters = {
  getErrorMessage: (state) => state.errorMessage,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
