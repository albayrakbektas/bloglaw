<template>
  <div class="card">
    <div
      class="card-header card-header-primary d-flex justify-content-between align-items-center px-3"
    >
      <h4 class="card-title m-0">Blog</h4>
      <BackButton />
    </div>
    <div class="card-body">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="title-input" class="form-label">Baslik</label>
          <input
            v-model="entry.title"
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
            v-model="entry.subtitle"
            type="text"
            class="form-control"
            id="subtitle-input"
            placeholder="Alt baslik giriniz.."
          />
        </div>
        <div class="mb-3">
          <label for="description-input" class="form-label">Aciklama</label>
          <input
            v-model="entry.description"
            type="text"
            class="form-control"
            id="description-input"
            placeholder="Aciklama giriniz.."
          />
        </div>
        <div class="mb-3">
          <VueEditor v-model="entry.content" />
        </div>
        <div class="frame mb-3 position-relative">
          <div class="center position-relative">
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
                v-if="!isRemoved"
                class="position-absolute start-0 w-100 top-0 end-0 h-100"
                style="object-fit: contain"
                :src="previewSrc ? previewSrc : entry.file"
                alt="asd"
              />
              <div>
                <div
                  v-if="!isRemoved"
                  class="position-absolute bottom-0 start-50 translate-middle-x"
                >
                  <button
                    @click="removeFile"
                    type="button"
                    class="btn btn-danger"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
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
import {submit} from "@/services/blog";

export default {
  components: { BackButton, VueEditor },
  data() {
    return {
      post: {
        title: "",
        subtitle: "",
        description: "",
        content: "",
        file: "",
      },
      isRemoved: false,
      selectedFile: null,
      previewSrc: "",
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
  },
  mounted() {
    this.fetchEditData(this.$route.params.id);
  },
  methods: {
    ...mapActions("BlogsSingle", ["updateData", "fetchEditData"]),
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.previewSrc = URL.createObjectURL(event.target.files[0]);
      this.isRemoved = false;
    },
    removeFile() {
      this.selectedFile = null;
      this.isRemoved = true;
    },
    submitForm() {
      submit(this.selectedFile, this.post);
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
</style>
