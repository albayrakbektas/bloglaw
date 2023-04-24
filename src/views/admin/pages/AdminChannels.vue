<template>
  <div class="card">
    <div
      class="card-header card-header-primary d-flex justify-content-between align-items-center px-3"
    >
      <h4 class="card-title m-0">Iletisim</h4>
      <BackButton />
    </div>
    <div class="card-body">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="title-input" class="form-label">Telefon</label>
          <input
            v-model="channels.phone"
            type="text"
            class="form-control"
            id="title-input"
            placeholder="Telefon numarasi giriniz"
            required
          />
        </div>
        <div class="mb-3">
          <label for="subtitle-input" class="form-label">E-posta</label>
          <input
            v-model="channels.email"
            type="text"
            class="form-control"
            id="subtitle-input"
            placeholder="E-posta giriniz.."
          />
        </div>
        <div class="mb-3">
          <label for="description-input" class="form-label">Adres</label>
          <input
            v-model="channels.address"
            type="text"
            class="form-control"
            id="description-input"
            placeholder="Adres giriniz.."
          />
        </div>
        <button type="submit" class="btn btn-primary" style="float: right">
          Kaydet
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import BackButton from "@/views/admin/components/BackButton.vue";
import axios from "axios";
import router from "@/router";

export default {
  components: { BackButton },
  created() {
    this.getData()
  },
  data() {
    return {
      channels: {
        phone: "",
        email: "",
        address: "",
      },
      status: "",
      activeField: "",
    };
  },
  computed: {},
  beforeDestroy() {
    this.resetState();
  },
  methods: {
    submitForm() {
      this.submit(this.channels);
    },
    async getData() {
      try {
        const response = await axios.get("channels");
        if (response.data) {
          this.channels = response.data[0]
        }
      } catch (error) {
        console.error("Error uploading blog:", error);
      }
    },
    async submit(blog) {
      const { phone, email, address } = blog;
      try {
        const response = await axios.post("channels", {
          phone,
          email,
          address,
        });
        console.log("Channels saved:", response.data);
        await router.replace({ path: "/admin" });
      } catch (error) {
        console.error("Error uploading blog:", error);
      }
    },
    focusField(name) {
      this.activeField = name;
    },
    clearFocus() {
      this.activeField = "";
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
