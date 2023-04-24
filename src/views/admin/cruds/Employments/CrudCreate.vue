<template>
  <div class="card">
    <div
      class="card-header card-header-primary d-flex justify-content-between align-items-center px-3"
    >
      <h4 class="card-title m-0">Yeni Blog</h4>
      <BackButton />
    </div>
    <div class="card-body">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="title-input" class="form-label">Baslik</label>
          <input
            v-model="employment.title"
            type="text"
            class="form-control"
            id="title-input"
            placeholder="Baslik giriniz.."
            required
          />
        </div>
        <div class="mb-3">
          <label for="subtitle-input" class="form-label">Alt baslik</label>
          <input
            v-model="employment.subtitle"
            type="text"
            class="form-control"
            id="subtitle-input"
            placeholder="Alt baslik giriniz.."
          />
        </div>
        <div class="mb-3">
          <label for="description-input" class="form-label">Aciklama</label>
          <input
            v-model="employment.description"
            type="text"
            class="form-control"
            id="description-input"
            placeholder="Aciklama giriniz.."
          />
        </div>
        <div class="mb-3">
          <VueEditor v-model="employment.content" />
        </div>
        <div class="frame mb-3 position-relative">
          <div class="center">
            <div
              class="dropzone d-flex align-items-center justify-content-center"
            >
              <i class="bi bi-cloud-arrow-up display-3"></i>
              <input
                type="file"
                @change="onFileSelected"
                required
                class="upload-input position-absolute start-0 top-0 w-100 h-100"
              />
              <img
                v-if="employment.file"
                class="img-preview position-absolute top-0 h-100"
                :src="imageUrl"
                alt="asd"
              />
            </div>
            <div class="title">
              <h4>Drop file to upload</h4>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" style="float: right">
          Kaydet
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { VueEditor } from "vue2-editor";

import BackButton from "@/views/admin/components/BackButton.vue";
import axios from "axios";
import router from "@/router";

export default {
  components: { BackButton, VueEditor },
  data() {
    return {
      employment: {
        title: "",
        subtitle: "",
        description: "",
        content: "",
        file: "",
      },
      selectedFile: null,
      status: "",
      activeField: "",
    };
  },
  computed: {
    ...mapGetters("BlogsSingle", [
      "entry",
      "lists",
      "loading",
      "validationErrors",
    ]),
    imageUrl() {
      return this.employment.file ? URL.createObjectURL(this.employment.file) : null;
    },
  },
  beforeDestroy() {
    this.resetState();
  },
  methods: {
    ...mapActions("BlogsSingle", [
      "storeData",
      "fetchCreateData",
      "resetState",
    ]),
    onFileSelected(event) {
      this.employment.file = event.target.files[0];
    },
    submitForm() {
      this.submit(this.employment);
    },
    async submit(blog) {
      const formData = new FormData();
      formData.append("id", blog.id);
      formData.append("title", blog.title);
      formData.append("subtitle", blog.subtitle);
      formData.append("description", blog.description);
      formData.append("content", blog.content);
      formData.append("file", blog.file);
      try {
        const response = await axios.post(
          "http://localhost:3000/employments",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Blog saved:", response.data);
        await router.replace({ path: "/admin/employment" });
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
