<template>
  <div class="card">
    <div
      class="card-header card-header-primary d-flex justify-content-between align-items-center px-3"
    >
      <h4 class="card-title m-0">Service</h4>
      <BackButton />
    </div>
    <div class="card-body">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="title-input" class="form-label">Title</label>
          <input
            v-model="entry.title"
            type="text"
            class="form-control"
            id="title-input"
            placeholder="Enter title.."
            required
          />
        </div>
        <div class="mb-3">
          <label for="description-input" class="form-label">Description</label>
          <textarea
            v-model="entry.description"
            class="form-control"
            id="description-input"
            rows="3"
            placeholder="Enter description.."
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="content-input" class="form-label">Content</label>
          <VueEditor v-model="entry.content" />
        </div>
        <div class="mb-3">
          <label for="price-input" class="form-label">Price</label>
          <input
            v-model="entry.price"
            type="number"
            min="0"
            class="form-control"
            id="price-input"
            placeholder="Enter price.."
          />
        </div>
        <div class="mb-3">
          <label for="image-input" class="form-label">Image</label>
          <input
            type="file"
            @change="onImageSelected"
            :required="isImageRemoved && !entry.image"
            class="form-control"
            id="image-input"
          />
          <img
            v-if="!isImageRemoved"
            class="img-thumbnail my-2"
            :src="previewImageSrc ? previewImageSrc : entry.image"
            alt=""
          />
          <button
            v-if="!isImageRemoved && entry.image"
            type="button"
            class="btn btn-danger btn-sm"
            @click="removeImage"
          >
            Remove Image
          </button>
        </div>
        <div class="mb-3">
          <label for="background-input" class="form-label"
            >Background Image</label
          >
          <input
            type="file"
            @change="onBackgroundSelected"
            :required="isBackgroundRemoved && !entry.background_image"
            class="form-control"
            id="background-input"
          />
          <img
            v-if="!isBackgroundRemoved"
            class="img-thumbnail my-2"
            :src="
              previewBackgroundSrc
                ? previewBackgroundSrc
                : entry.background_image
            "
            alt=""
          />
          <button
            v-if="!isBackgroundRemoved && entry.background_image"
            type="button"
            class="btn btn-danger btn-sm"
            @click="removeBackground"
          >
            Remove Background Image
          </button>
        </div>
        <button type="submit" class="btn btn-primary" style="float: right">
          Save
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
      isImageRemoved: false,
      isBackgroundRemoved: false,
      selectedImage: null,
      selectedBackground: null,
      previewImageSrc: "",
      previewBackgroundSrc: "",
    };
  },
  computed: {
    ...mapGetters("ServicesSingle", [
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
    ...mapActions("ServicesSingle", ["updateData", "fetchEditData"]),
    onImageSelected(event) {
      this.selectedImage = event.target.files[0];
      this.previewImageSrc = URL.createObjectURL(event.target.files[0]);
      this.isImageRemoved = false;
    },
    removeImage() {
      this.selectedImage = null;
      this.isImageRemoved = true;
    },
    onBackgroundSelected(event) {
      this.selectedBackground = event.target.files[0];
      this.previewBackgroundSrc = URL.createObjectURL(event.target.files[0]);
      this.isBackgroundRemoved = false;
    },
    removeBackground() {
      this.selectedBackground = null;
      this.isBackgroundRemoved = true;
    },
    async updateService() {
      const formData = new FormData();
      formData.append("title", this.entry.title);
      formData.append("description", this.entry.description);
      formData.append("content", this.entry.content.replace(/<\/?p>/g, ""));
      formData.append("price", this.entry.price);

      if (this.selectedImage) {
        formData.append("image", this.selectedImage);
      }

      if (this.selectedBackground) {
        formData.append("background_image", this.selectedBackground);
      }

      try {
        const response = await axios.put(
          `http://localhost:3000/service/${this.entry.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const updatedService = response.data;
        await this.$store.dispatch(
          "ServicesIndex/updateService",
          updatedService
        );
        await this.$router.push("/admin/services");
      } catch (error) {
        console.error("Error updating service:", error);
      }
    },
    submitForm() {
      this.updateService();
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
