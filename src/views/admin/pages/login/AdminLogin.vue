<template>
  <div class="login-page-container">
    <img class="background-image" src="/img/login.jpg" alt="" />
    <div class="card-container">
      <div class="card">
        <div class="card-header">
          <h1>Yönetici Girişi</h1>
        </div>
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="email-input">E-posta</label>
              <input
                type="email"
                class="form-control"
                id="email-input"
                v-model="email"
                required
                autocomplete
              />
            </div>
            <div class="form-group">
              <label for="password-input">Şifre</label>
              <input
                type="password"
                class="form-control"
                id="password-input"
                v-model="password"
                required
                autocomplete="current-password"
              />
            </div>
            <div
              v-if="errorMessage"
              class="alert alert-danger rounded-0 p-0"
              role="alert"
            >
              <div
                class="d-flex align-items-center justify-content-center bg-main-color rounded-top px-4 py-2"
              >
                <i
                  class="fa fa-exclamation-circle text-white me-2"
                  aria-hidden="true"
                ></i>
                <h5 class="text-white mb-0">Hata</h5>
              </div>
              <div class="bg-white rounded-bottom px-4 py-3">
                <p class="mb-0">{{ errorMessage }}</p>
              </div>
            </div>

            <div class="form-group text-end">
              <button type="submit" class="btn btn-primary px-5">Giriş</button>
            </div>
          </form>
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
      errorMessage: null,
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
        this.errorMessage = error.message;
      }
    },
  },
};
</script>

<style lang="scss">
.login-page-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(60%);
}

.card-container {
  width: 80%;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
}

.card {
  background-color: transparent;
  border: none;
}

.card-header {
  background-color: transparent;
  color: #fff;
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  border: none;
}

.card-body {
  padding: 2rem;
}

.form-group label {
  font-weight: bold;
  color: #fff;
}

.form-control {
  background-color: transparent !important;
  border: none;
  border-bottom: 2px solid #fff;
  border-radius: 0;
  color: #fff;
  padding: 0.5rem 0;
  margin-bottom: 2rem;
  &:focus {
    outline: none;
    background: transparent !important;
    box-shadow: none;
    color: #fff;
    border-bottom: 2px solid rgba(139, 90, 43, 0.9);
  }
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: #fff !important;
}

.btn-primary {
  color: #fff;
  border-color: transparent;
  background-color: rgba(139, 90, 43, 0.6);
  padding: 0.5rem 2rem;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
}

.btn-primary:hover {
  background-color: rgba(139, 90, 43, 0.9);
  border-color: rgba(139, 90, 43, 0.9);
  color: #fff;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .card-container {
    width: 90%;
  }

  .card-header {
    font-size: 1.5rem;
  }

  .form-control {
    font-size: 0.9rem;
  }

  .btn-primary {
    padding: 0.5rem 1rem;
  }
}
.alert-danger {
  border: none;
}

.bg-main-color {
  background-color: rgba(139, 90, 43, 1);
}
.alert {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0.25rem;
  color: rgba(139, 90, 43, 1);
  background-color: transparent;
}
</style>
