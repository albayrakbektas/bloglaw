import axios from "axios";

const state = {
  office: null,
};

const mutations = {
  setOffice(state, office) {
    state.office = office;
  },
};

const actions = {
  async getOffice({ commit }) {
    try {
      const response = await axios.get("office");
      commit("setOffice", response.data);
      return response.data;
    } catch (error) {
      commit("setOffice", "create");
      return "create";
    }
  },
  async addOffice(_, officeData) {
    const formData = new FormData();
    formData.append("name", officeData.name);
    formData.append("surname", officeData.surname);
    formData.append("title", officeData.title);
    formData.append("subtitle", officeData.subtitle);
    formData.append("description", officeData.description);
    formData.append("content", officeData.content);
    formData.append("file", officeData.file);
    if (state.office && state.office.id) {
      formData.append("id", state.office.id);
    }
    try {
      await axios.post("office", formData, {
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
