<template>
  <div class="card">
    <div
      class="card-header mb-3 card-header-primary d-flex justify-content-between align-items-center px-3"
    >
      <h4 class="card-title m-0">Ayarlar</h4>
      <BackButton />
    </div>
    <div class="">
      <div class="card">
        <div
          class="card-header card-header-primary d-flex justify-content-between align-items-center px-3"
        >
          <h4 class="card-title m-0">Şifre</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="old-password-input" class="form-label"
                >Eski Şifre</label
              >
              <input
                v-model="oldPassword"
                type="password"
                class="form-control"
                id="old-password-input"
                placeholder="Eski şifrenizi giriniz.."

              />
            </div>
            <div class="mb-3">
              <label for="new-password-input" class="form-label"
                >Yeni Şifre</label
              >
              <input
                v-model="newPassword"
                type="password"
                class="form-control"
                id="new-password-input"
                placeholder="Yeni şifrenizi giriniz.."

                @click="clearErrorMessage"
              />
              <div
                v-if="newPassword.length < 6 && !errorMessage"
                class="text-danger"
              >
                Şifreniz en az 6 karakter olmalıdır.
              </div>
            </div>
            <div class="mb-3">
              <label for="confirm-password-input" class="form-label"
                >Yeni Şifre Tekrar</label
              >
              <input
                v-model="confirmPassword"
                type="password"
                class="form-control"
                id="confirm-password-input"
                placeholder="Yeni şifrenizi tekrar giriniz.."

                @click="clearErrorMessage"
              />
            </div>
            <div v-if="errorMessage" class="text-danger">
              {{ errorMessage }}
            </div>
            <button type="submit" class="btn btn-primary" style="float: right">
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "@/views/admin/components/BackButton.vue";
import { mapActions } from "vuex";
import store from "@/store";
import {auth} from "@/services/firebase";

export default {
  components: { BackButton },
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      errorMessage: "",
    };
  },
  computed: {},
  created() {},
  methods: {
    ...mapActions("Settings", ["updatePassword"]),
    clearErrorMessage() {
      this.errorMessage = "";
    },
    async submitForm() {
      if (this.newPassword !== this.confirmPassword) {
        this.errorMessage = "Şifreler eşleşmiyor.";
        return;
      }

      if (this.newPassword.length < 6) {
        this.errorMessage = "Şifreniz en az 6 karakter olmalıdır.";
        return;
      }

      try {
        const uid = auth.currentUser.uid
        await store.dispatch("Settings/updatePassword", {
          uid,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
        });
        this.oldPassword = "";
        this.newPassword = "";
        this.confirmPassword = "";
        await this.$router.push("/admin");
      } catch (error) {
        this.errorMessage = error.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);
.frame {
  border: 1px dashed #808080;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  color: #333;
  font-family: "Open Sans", Helvetica, sans-serif;
}

.center {
  border-radius: 3px;
  box-shadow: 8px 10px 15px 0 rgba(0, 0, 0, 0.2);
  background: rgba(128, 128, 128, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}

.title {
  width: 100%;
  height: 50px;
  text-align: center;
}

.dropzone {
  width: 100px;
  height: 80px;
  border-radius: 3px;
  text-align: center;
}

.upload-input {
  position: relative;
  top: -62px;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.img-preview {
  left: calc(100% - 20%) !important;
  width: 20% !important;
}
</style>
