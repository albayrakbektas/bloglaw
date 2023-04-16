import firebase from "firebase/app";
import { signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "@/services/firebase";
import router from "@/router";


const state = {
  bearerToken: localStorage.getItem("bearerToken") || null,
  error: "",
};
const getters = {
  bearerToken: (state) => state.bearerToken,
  error: (state) => state.error,
};
const mutations = {
  setBearerToken(state, token) {
    state.bearerToken = token;
  },
  setError(state, error) {
    state.error = error;
  },
};
const actions = {
  logout({ commit }) {
    localStorage.removeItem("bearerToken");
    commit("setBearerToken", null);
  },
  checkAuth({ commit }) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => {
          localStorage.setItem("bearerToken", token);
          commit("setBearerToken", token);
        });
      } else {
        localStorage.removeItem("bearerToken");
        commit("setBearerToken", null);
      }
    });
  },
};

export const login  = async function (email, password) {
  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          router.replace({path: "/admin/"})
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
}
export const logout  = async function () {
  signOut(auth).then(() => {
    router.replace({path: "/login"})
  }).catch((error) => {
    console.log(error)
  });
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
