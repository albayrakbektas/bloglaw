import firebase from "firebase/app";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/services/firebase";
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
    signOut(auth)
      .then(() => {
        localStorage.removeItem("bearerToken");
        commit("setBearerToken", null);
        router.push("/login");
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  },
  // setPassword() {
  //   const user = auth.currentUser;
  //   const newPassword = getASecureRandomPassword();
  //   updatePassword(user, newPassword)
  //     .then(() => {
  //       // Update successful.
  //     })
  //     .catch((error) => {
  //       // An error ocurred
  //       // ...
  //     });
  // },
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

// export const login = async function (email, password) {
//   return signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       if (user) {
//         router.replace({ path: "/admin/" });
//       }
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

export const login = async function (email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    if (user) {
      await router.replace({ path: "/admin/" });
    }
  } catch (error) {
    let errorMessage;
    switch (error.code) {
      case "auth/user-not-found":
        errorMessage = "email hatali";
        break;
      case "auth/wrong-password":
        errorMessage = "sifre hatali";
        break;
      case "auth/too-many-requests":
        errorMessage =
          "Birçok başarısız giriş denemesi nedeniyle bu hesaba erişim geçici olarak devre dışı bırakıldı. Parolanızı sıfırlayarak hemen geri yükleyebilir veya daha sonra tekrar deneyebilirsiniz.";
        break;
      default:
        errorMessage = error.message;
    }
    throw new Error(errorMessage);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
