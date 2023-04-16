<template>
  <div class="container mt-5">
    <h1 class="text-center">Admin Login</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username-input">Email</label>
        <input
          type="email"
          class="form-control"
          id="email-input"
          v-model="email"
          required
        />
        <!--        <div class="invalid-feedback" v-if="error">{{ error }}</div>-->
      </div>
      <div class="form-group">
        <label for="password-input">Password</label>
        <input
          type="password"
          class="form-control"
          id="password-input"
          v-model="password"
          required
        />
        <!--        <div class="invalid-feedback" v-if="error">{{ error }}</div>-->
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {login} from "@/store/Admin/pages/login/auth";

export default {
  name: "AdminLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters("Auth", ["bearerToken"]),
  },
  methods: {
    async submitForm() {
      await login(this.email, this.password)
    },
    // async login() {
    //   signInWithEmailAndPassword(auth, this.email, this.password)
    //     .then((userCredential) => {
    //       // Signed in
    //       const user = userCredential.user;
    //       console.log(user);
    //       // ...
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       console.log(errorMessage, errorCode);
    //     });
    // },
  },
};
</script>
