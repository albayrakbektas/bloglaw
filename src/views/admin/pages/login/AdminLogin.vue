<template>
  <div class="" style="height: 100vh; display: grid; align-items: center; overflow:hidden;">
    <img class="position-absolute w-100 h-100" src="/img/login.jpg" alt="" />
    <div class="row align-items-center justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header text-center">
            <h1>Admin Login</h1>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitForm">
              <div class="form-group mb-3">
                <label for="email-input">Email</label>
                <input
                    type="email"
                    class="form-control"
                    id="email-input"
                    v-model="email"
                    required
                />
              </div>
              <div class="form-group mb-3">
                <label for="password-input">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="password-input"
                    v-model="password"
                    required
                />
              </div>
              <div class="form-group text-center mb-3">
                <button type="submit" class="btn btn-primary px-5">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { login } from "@/store/Admin/pages/login/auth";

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
      try {
        await login(this.email, this.password);
      } catch (error) {
        console.error("Login failed:", error.message);
      }
    },
  },
};
</script>

<style lang="scss">
.card {
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #007bff;
  color: #fff;
  border-radius: 10px 10px 0px 0px;
}

.card-body {
  padding: 2rem;
}

.form-group label {
  font-weight: bold;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}
</style>
