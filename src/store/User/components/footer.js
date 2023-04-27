// // store/footer.js
//
// const state = {
//   footerData: null,
// };
//
// const getters = {
//   getFooterData: (state) => state.footerData,
// };
//
// const actions = {
//   async fetchFooterData({ commit }) {
//     const response = await fetch("/api/footer");
//     const data = await response.json();
//     commit("setFooterData", data);
//   },
// };
//
// const mutations = {
//   setFooterData(state, data) {
//     state.footerData = data;
//   },
// };
//
// export default {
//   namespaced: true,
//   state,
//   getters,
//   actions,
//   mutations,
// };

// store/modules/footer.js

import axios from "axios";

export default {
  namespaced: true,

  state: {
    footerData: null,
  },

  getters: {
    getFooterData: (state) => state.footerData,
  },

  actions: {
    async fetchFooterData({ commit }) {
      try {
        const response = await axios.get("/api/footer");
        const data = response.data;
        commit("SET_FOOTER_DATA", data);
      } catch (error) {
        console.error(error);
      }
    },
  },

  mutations: {
    SET_FOOTER_DATA(state, data) {
      state.footerData = data;
    },
  },
};
