import axios from "axios";

const state = {
  office: {},
};

const getters = {
  office: (state) => state.office,
};

const mutations = {
  setOffice(state, payload) {
    state.office = payload;
  },
};

const actions = {
  setOffice({ commit }) {
    axios
      .get(`/office`)
      .then((response) => {
        commit("setOffice", response.data);
        console.log(state.office);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
