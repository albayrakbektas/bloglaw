import axios from "axios";

const state = {
  profile: null,
};

const mutations = {
  SET_PROFILE(state, profile) {
    state.profile = profile;
  },
};

const actions = {
  async getProfile({ commit }) {
    try {
      const response = await axios.get("profile");
      commit("SET_PROFILE", response.data);
      return response.data;
    } catch (error) {
      commit("SET_PROFILE", "create");
      return "create";
    }
  },
  async addProfile(_, profileData) {
    const formData = new FormData();
    formData.append("name", profileData.name);
    formData.append("surname", profileData.surname);
    formData.append("title", profileData.title);
    formData.append("subtitle", profileData.subtitle);
    formData.append("description", profileData.description);
    formData.append("content", profileData.content);
    formData.append("file", profileData.file);
    if (state.profile && state.profile.id) {
      formData.append("id", state.profile.id);
    }
    try {
      await axios.post("profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return { success: true };
    } catch (error) {
      return { success: false, error: error };
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
