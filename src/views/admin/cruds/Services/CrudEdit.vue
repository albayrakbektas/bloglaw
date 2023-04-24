<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <div class="card">&ndash;&gt;-->
<!--&lt;!&ndash;    <div&ndash;&gt;-->
<!--&lt;!&ndash;      class="card-header card-header-primary d-flex justify-content-between align-items-center px-3"&ndash;&gt;-->
<!--&lt;!&ndash;    >&ndash;&gt;-->
<!--&lt;!&ndash;      <h4 class="card-title m-0">Service</h4>&ndash;&gt;-->
<!--&lt;!&ndash;      <BackButton />&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="card-body">&ndash;&gt;-->
<!--&lt;!&ndash;      <form @submit.prevent="submitForm">&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="mb-3">&ndash;&gt;-->
<!--&lt;!&ndash;          <label for="title-input" class="form-label">Title</label>&ndash;&gt;-->
<!--&lt;!&ndash;          <input&ndash;&gt;-->
<!--&lt;!&ndash;            v-model="entry.title"&ndash;&gt;-->
<!--&lt;!&ndash;            type="text"&ndash;&gt;-->
<!--&lt;!&ndash;            class="form-control"&ndash;&gt;-->
<!--&lt;!&ndash;            id="title-input"&ndash;&gt;-->
<!--&lt;!&ndash;            placeholder="Enter title.."&ndash;&gt;-->
<!--&lt;!&ndash;            required&ndash;&gt;-->
<!--&lt;!&ndash;          />&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="mb-3">&ndash;&gt;-->
<!--&lt;!&ndash;          <label for="description-input" class="form-label">Description</label>&ndash;&gt;-->
<!--&lt;!&ndash;          <textarea&ndash;&gt;-->
<!--&lt;!&ndash;            v-model="entry.description"&ndash;&gt;-->
<!--&lt;!&ndash;            class="form-control"&ndash;&gt;-->
<!--&lt;!&ndash;            id="description-input"&ndash;&gt;-->
<!--&lt;!&ndash;            rows="3"&ndash;&gt;-->
<!--&lt;!&ndash;            placeholder="Enter description.."&ndash;&gt;-->
<!--&lt;!&ndash;          ></textarea>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="mb-3">&ndash;&gt;-->
<!--&lt;!&ndash;          <label for="content-input" class="form-label">Content</label>&ndash;&gt;-->
<!--&lt;!&ndash;          <VueEditor v-model="entry.content" />&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="mb-3">&ndash;&gt;-->
<!--&lt;!&ndash;          <label for="price-input" class="form-label">Price</label>&ndash;&gt;-->
<!--&lt;!&ndash;          <input&ndash;&gt;-->
<!--&lt;!&ndash;            v-model="entry.price"&ndash;&gt;-->
<!--&lt;!&ndash;            type="number"&ndash;&gt;-->
<!--&lt;!&ndash;            min="0"&ndash;&gt;-->
<!--&lt;!&ndash;            class="form-control"&ndash;&gt;-->
<!--&lt;!&ndash;            id="price-input"&ndash;&gt;-->
<!--&lt;!&ndash;            placeholder="Enter price.."&ndash;&gt;-->
<!--&lt;!&ndash;          />&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="mb-3">&ndash;&gt;-->
<!--&lt;!&ndash;          <label for="image-input" class="form-label">Image</label>&ndash;&gt;-->
<!--&lt;!&ndash;          <input&ndash;&gt;-->
<!--&lt;!&ndash;            type="file"&ndash;&gt;-->
<!--&lt;!&ndash;            @change="onImageSelected"&ndash;&gt;-->
<!--&lt;!&ndash;            :required="isImageRemoved && !entry.image"&ndash;&gt;-->
<!--&lt;!&ndash;            class="form-control"&ndash;&gt;-->
<!--&lt;!&ndash;            id="image-input"&ndash;&gt;-->
<!--&lt;!&ndash;          />&ndash;&gt;-->
<!--&lt;!&ndash;          <img&ndash;&gt;-->
<!--&lt;!&ndash;            v-if="!isImageRemoved"&ndash;&gt;-->
<!--&lt;!&ndash;            class="img-thumbnail my-2"&ndash;&gt;-->
<!--&lt;!&ndash;            :src="previewImageSrc ? previewImageSrc : entry.image"&ndash;&gt;-->
<!--&lt;!&ndash;            alt=""&ndash;&gt;-->
<!--&lt;!&ndash;          />&ndash;&gt;-->
<!--&lt;!&ndash;          <button&ndash;&gt;-->
<!--&lt;!&ndash;            v-if="!isImageRemoved && entry.image"&ndash;&gt;-->
<!--&lt;!&ndash;            type="button"&ndash;&gt;-->
<!--&lt;!&ndash;            class="btn btn-danger btn-sm"&ndash;&gt;-->
<!--&lt;!&ndash;            @click="removeImage"&ndash;&gt;-->
<!--&lt;!&ndash;          >&ndash;&gt;-->
<!--&lt;!&ndash;            Remove Image&ndash;&gt;-->
<!--&lt;!&ndash;          </button>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="mb-3">&ndash;&gt;-->
<!--&lt;!&ndash;          <label for="background-input" class="form-label"&ndash;&gt;-->
<!--&lt;!&ndash;            >Background Image</label&ndash;&gt;-->
<!--&lt;!&ndash;          >&ndash;&gt;-->
<!--&lt;!&ndash;          <input&ndash;&gt;-->
<!--&lt;!&ndash;            type="file"&ndash;&gt;-->
<!--&lt;!&ndash;            @change="onBackgroundSelected"&ndash;&gt;-->
<!--&lt;!&ndash;            :required="isBackgroundRemoved && !entry.background_image"&ndash;&gt;-->
<!--&lt;!&ndash;            class="form-control"&ndash;&gt;-->
<!--&lt;!&ndash;            id="background-input"&ndash;&gt;-->
<!--&lt;!&ndash;          />&ndash;&gt;-->
<!--&lt;!&ndash;          <img&ndash;&gt;-->
<!--&lt;!&ndash;            v-if="!isBackgroundRemoved"&ndash;&gt;-->
<!--&lt;!&ndash;            class="img-thumbnail my-2"&ndash;&gt;-->
<!--&lt;!&ndash;            :src="&ndash;&gt;-->
<!--&lt;!&ndash;              previewBackgroundSrc&ndash;&gt;-->
<!--&lt;!&ndash;                ? previewBackgroundSrc&ndash;&gt;-->
<!--&lt;!&ndash;                : entry.background_image&ndash;&gt;-->
<!--&lt;!&ndash;            "&ndash;&gt;-->
<!--&lt;!&ndash;            alt=""&ndash;&gt;-->
<!--&lt;!&ndash;          />&ndash;&gt;-->
<!--&lt;!&ndash;          <button&ndash;&gt;-->
<!--&lt;!&ndash;            v-if="!isBackgroundRemoved && entry.background_image"&ndash;&gt;-->
<!--&lt;!&ndash;            type="button"&ndash;&gt;-->
<!--&lt;!&ndash;            class="btn btn-danger btn-sm"&ndash;&gt;-->
<!--&lt;!&ndash;            @click="removeBackground"&ndash;&gt;-->
<!--&lt;!&ndash;          >&ndash;&gt;-->
<!--&lt;!&ndash;            Remove Background Image&ndash;&gt;-->
<!--&lt;!&ndash;          </button>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <button type="submit" class="btn btn-primary" style="float: right">&ndash;&gt;-->
<!--&lt;!&ndash;          Save&ndash;&gt;-->
<!--&lt;!&ndash;        </button>&ndash;&gt;-->
<!--&lt;!&ndash;      </form>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;import { mapGetters, mapActions } from "vuex";&ndash;&gt;-->
<!--&lt;!&ndash;import { VueEditor } from "vue2-editor";&ndash;&gt;-->

<!--&lt;!&ndash;import BackButton from "@/views/admin/components/BackButton.vue";&ndash;&gt;-->
<!--&lt;!&ndash;import axios from "axios";&ndash;&gt;-->

<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;  components: { BackButton, VueEditor },&ndash;&gt;-->
<!--&lt;!&ndash;  data() {&ndash;&gt;-->
<!--&lt;!&ndash;    return {&ndash;&gt;-->
<!--&lt;!&ndash;      post: {&ndash;&gt;-->
<!--&lt;!&ndash;        title: "",&ndash;&gt;-->
<!--&lt;!&ndash;        subtitle: "",&ndash;&gt;-->
<!--&lt;!&ndash;        description: "",&ndash;&gt;-->
<!--&lt;!&ndash;        content: "",&ndash;&gt;-->
<!--&lt;!&ndash;        file: "",&ndash;&gt;-->
<!--&lt;!&ndash;      },&ndash;&gt;-->
<!--&lt;!&ndash;      isRemoved: false,&ndash;&gt;-->
<!--&lt;!&ndash;      selectedFile: null,&ndash;&gt;-->
<!--&lt;!&ndash;      previewSrc: "",&ndash;&gt;-->
<!--&lt;!&ndash;      status: "",&ndash;&gt;-->
<!--&lt;!&ndash;      activeField: "",&ndash;&gt;-->
<!--&lt;!&ndash;      isImageRemoved: false,&ndash;&gt;-->
<!--&lt;!&ndash;      isBackgroundRemoved: false,&ndash;&gt;-->
<!--&lt;!&ndash;      selectedImage: null,&ndash;&gt;-->
<!--&lt;!&ndash;      selectedBackground: null,&ndash;&gt;-->
<!--&lt;!&ndash;      previewImageSrc: "",&ndash;&gt;-->
<!--&lt;!&ndash;      previewBackgroundSrc: "",&ndash;&gt;-->
<!--&lt;!&ndash;    };&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  computed: {&ndash;&gt;-->
<!--&lt;!&ndash;    ...mapGetters("AdminServicesSingle", [&ndash;&gt;-->
<!--&lt;!&ndash;      "entry",&ndash;&gt;-->
<!--&lt;!&ndash;      "lists",&ndash;&gt;-->
<!--&lt;!&ndash;      "loading",&ndash;&gt;-->
<!--&lt;!&ndash;      "validationErrors",&ndash;&gt;-->
<!--&lt;!&ndash;    ]),&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  mounted() {&ndash;&gt;-->
<!--&lt;!&ndash;    this.fetchEditData(this.$route.params.id);&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  methods: {&ndash;&gt;-->
<!--&lt;!&ndash;    ...mapActions("AdminServicesSingle", ["updateData", "fetchEditData"]),&ndash;&gt;-->
<!--&lt;!&ndash;    onImageSelected(event) {&ndash;&gt;-->
<!--&lt;!&ndash;      this.selectedImage = event.target.files[0];&ndash;&gt;-->
<!--&lt;!&ndash;      this.previewImageSrc = URL.createObjectURL(event.target.files[0]);&ndash;&gt;-->
<!--&lt;!&ndash;      this.isImageRemoved = false;&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    removeImage() {&ndash;&gt;-->
<!--&lt;!&ndash;      this.selectedImage = null;&ndash;&gt;-->
<!--&lt;!&ndash;      this.isImageRemoved = true;&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    onBackgroundSelected(event) {&ndash;&gt;-->
<!--&lt;!&ndash;      this.selectedBackground = event.target.files[0];&ndash;&gt;-->
<!--&lt;!&ndash;      this.previewBackgroundSrc = URL.createObjectURL(event.target.files[0]);&ndash;&gt;-->
<!--&lt;!&ndash;      this.isBackgroundRemoved = false;&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    removeBackground() {&ndash;&gt;-->
<!--&lt;!&ndash;      this.selectedBackground = null;&ndash;&gt;-->
<!--&lt;!&ndash;      this.isBackgroundRemoved = true;&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    async updateService() {&ndash;&gt;-->
<!--&lt;!&ndash;      const formData = new FormData();&ndash;&gt;-->
<!--&lt;!&ndash;      formData.append("title", this.entry.title);&ndash;&gt;-->
<!--&lt;!&ndash;      formData.append("description", this.entry.description);&ndash;&gt;-->
<!--&lt;!&ndash;      formData.append("content", this.entry.content.replace(/<\/?p>/g, ""));&ndash;&gt;-->
<!--&lt;!&ndash;      formData.append("price", this.entry.price);&ndash;&gt;-->

<!--&lt;!&ndash;      if (this.selectedImage) {&ndash;&gt;-->
<!--&lt;!&ndash;        formData.append("image", this.selectedImage);&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->

<!--&lt;!&ndash;      if (this.selectedBackground) {&ndash;&gt;-->
<!--&lt;!&ndash;        formData.append("background_image", this.selectedBackground);&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->

<!--&lt;!&ndash;      try {&ndash;&gt;-->
<!--&lt;!&ndash;        const response = await axios.put(&ndash;&gt;-->
<!--&lt;!&ndash;          `service/${this.entry.id}`,&ndash;&gt;-->
<!--&lt;!&ndash;          formData,&ndash;&gt;-->
<!--&lt;!&ndash;          {&ndash;&gt;-->
<!--&lt;!&ndash;            headers: {&ndash;&gt;-->
<!--&lt;!&ndash;              "Content-Type": "multipart/form-data",&ndash;&gt;-->
<!--&lt;!&ndash;            },&ndash;&gt;-->
<!--&lt;!&ndash;          }&ndash;&gt;-->
<!--&lt;!&ndash;        );&ndash;&gt;-->
<!--&lt;!&ndash;        const updatedService = response.data;&ndash;&gt;-->
<!--&lt;!&ndash;        await this.$store.dispatch(&ndash;&gt;-->
<!--&lt;!&ndash;          "ServicesIndex/updateService",&ndash;&gt;-->
<!--&lt;!&ndash;          updatedService&ndash;&gt;-->
<!--&lt;!&ndash;        );&ndash;&gt;-->
<!--&lt;!&ndash;        await this.$router.push("/admin/services");&ndash;&gt;-->
<!--&lt;!&ndash;      } catch (error) {&ndash;&gt;-->
<!--&lt;!&ndash;        console.error("Error updating service:", error);&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    submitForm() {&ndash;&gt;-->
<!--&lt;!&ndash;      this.updateService();&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;};&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;<style scoped>&ndash;&gt;-->
<!--&lt;!&ndash;@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);&ndash;&gt;-->

<!--&lt;!&ndash;.frame {&ndash;&gt;-->
<!--&lt;!&ndash;  border: 1px dashed #808080;&ndash;&gt;-->
<!--&lt;!&ndash;  border-radius: 2px;&ndash;&gt;-->
<!--&lt;!&ndash;  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);&ndash;&gt;-->
<!--&lt;!&ndash;  overflow: hidden;&ndash;&gt;-->
<!--&lt;!&ndash;  color: #333;&ndash;&gt;-->
<!--&lt;!&ndash;  font-family: "Open Sans", Helvetica, sans-serif;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.center {&ndash;&gt;-->
<!--&lt;!&ndash;  border-radius: 3px;&ndash;&gt;-->
<!--&lt;!&ndash;  box-shadow: 8px 10px 15px 0 rgba(0, 0, 0, 0.2);&ndash;&gt;-->
<!--&lt;!&ndash;  background: rgba(128, 128, 128, 0.1);&ndash;&gt;-->
<!--&lt;!&ndash;  display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;  align-items: center;&ndash;&gt;-->
<!--&lt;!&ndash;  justify-content: space-evenly;&ndash;&gt;-->
<!--&lt;!&ndash;  flex-direction: column;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.title {&ndash;&gt;-->
<!--&lt;!&ndash;  width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  height: 50px;&ndash;&gt;-->
<!--&lt;!&ndash;  text-align: center;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.dropzone {&ndash;&gt;-->
<!--&lt;!&ndash;  width: 100px;&ndash;&gt;-->
<!--&lt;!&ndash;  height: 80px;&ndash;&gt;-->
<!--&lt;!&ndash;  border-radius: 3px;&ndash;&gt;-->
<!--&lt;!&ndash;  text-align: center;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;.upload-input {&ndash;&gt;-->
<!--&lt;!&ndash;  position: relative;&ndash;&gt;-->
<!--&lt;!&ndash;  top: -62px;&ndash;&gt;-->
<!--&lt;!&ndash;  left: 0;&ndash;&gt;-->
<!--&lt;!&ndash;  width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  height: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;  opacity: 0;&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->

<!--<template>-->
<!--  <div class="card">-->
<!--    <div-->
<!--      class="card-header card-header-primary d-flex justify-content-between align-items-center px-3 sticky-top"-->
<!--    >-->
<!--      <HeaderIndex title="Services" :xprops="xprops" :is-crud="true" />-->
<!--    </div>-->
<!--    <div class="card-body">-->
<!--      <div v-if="data.length" class="row">-->
<!--        <div-->
<!--          class="col-12 col-md-3 col-lg-4 mb-3"-->
<!--          v-for="(item, index) of data"-->
<!--          :key="item.id + index"-->
<!--        >-->
<!--          <div class="card-wrapper">-->
<!--            <BlogCardAdmin-->
<!--              @delete-handler="removeService(item)"-->
<!--              :data="item"-->
<!--              :xprops="xprops"-->
<!--            />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div v-else class="row text-center">-->
<!--        <h1>no data</h1>-->
<!--      </div>-->
<!--    </div>-->
<!--    <GoToTopButton />-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { mapActions, mapGetters } from "vuex";-->
<!--import HeaderIndex from "@/views/admin/components/header/HeaderIndex.vue";-->
<!--import GoToTopButton from "@/components/GoToTopButton.vue";-->
<!--import BlogCardAdmin from "@/views/admin/components/cards/BlogCardAdmin.vue";-->

<!--export default {-->
<!--  components: { BlogCardAdmin, GoToTopButton, HeaderIndex },-->
<!--  data() {-->
<!--    return {-->
<!--      columns: [],-->
<!--      services: null,-->
<!--      query: { sort: "id", order: "desc", limit: 25, s: "" },-->
<!--      xprops: {-->
<!--        module: "ServicesIndex",-->
<!--        route: "service",-->
<!--        permission_prefix: "service_",-->
<!--      },-->
<!--    };-->
<!--  },-->
<!--  computed: {-->
<!--    ...mapGetters("AdminServicesIndex", ["data", "loading"]),-->
<!--  },-->
<!--  watch: {-->
<!--    query: {-->
<!--      handler() {-->
<!--        this.fetchIndexData();-->
<!--      },-->
<!--      deep: true,-->
<!--      immediate: true,-->
<!--    },-->
<!--  },-->
<!--  methods: {-->
<!--    ...mapActions("AdminServicesIndex", ["fetchIndexData"]),-->
<!--    removeService(item) {-->
<!--      const { id } = item;-->

<!--      const onSuccess = () => {-->
<!--        // No need to update the UI here, Vuex will handle it-->
<!--      };-->

<!--      const onFailure = (error) => {-->
<!--        console.log(error);-->
<!--        // Handle the error, e.g., show a notification to the user-->
<!--      };-->

<!--      this.$store.dispatch("AdminServicesIndex/deleteService", {-->
<!--        id,-->
<!--        onSuccess,-->
<!--        onFailure,-->
<!--      });-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--.table > :not(:first-child) {-->
<!--  border-top: none;-->
<!--  background-color: #f8fafd;-->
<!--}-->
<!--.table-striped > tbody > tr:nth-of-type(odd) > * {-->
<!--  &#45;&#45;bs-table-accent-bg: #fff;-->
<!--  color: var(&#45;&#45;bs-table-striped-color);-->
<!--}-->
<!--.card-header.sticky-top {-->
<!--  z-index: 9;-->
<!--  position: sticky;-->
<!--  top: 0;-->
<!--  background-color: #fff;-->
<!--  border: 1px solid rgba(0, 0, 0, 0.175);-->
<!--}-->
<!--</style>-->

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
            placeholder="Enter Title.."
            required
          />
        </div>
        <div class="mb-3">
          <label for="description-input" class="form-label">Alt baslik</label>
          <input
            v-model="entry.subtitle"
            type="text"
            class="form-control"
            id="description-input"
            placeholder="Enter Subtitle.."
          />
        </div>
        <div class="mb-3">
          <label for="description-input" class="form-label">Description</label>
          <input
            v-model="entry.description"
            type="text"
            class="form-control"
            id="description-input"
            placeholder="Enter Description.."
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
                :required="isRemoved && !entry.file"
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
        <div class="frame mb-3 position-relative">
          <div class="center position-relative">
            <div
              class="dropzone d-flex align-items-center justify-content-center"
            >
              <i class="bi bi-cloud-arrow-up display-3"></i>
              <input
                type="file"
                @change="onBackgroundImageSelected"
                :required="isBackgroundRemoved && !entry.backgroundImage"
                class="upload-input position-absolute start-0 top-0 w-100 h-100"
              />
              <img
                v-if="!isBackgroundRemoved"
                class="position-absolute start-0 w-100 top-0 end-0 h-100"
                style="object-fit: contain"
                :src="
                  backgroundPreviewSrc ? backgroundPreviewSrc : entry.bg_file
                "
                alt="asd"
              />
              <div>
                <div
                  v-if="!isBackgroundRemoved"
                  class="position-absolute bottom-0 start-50 translate-middle-x"
                >
                  <button
                    @click="removeBackground"
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
        description: "",
        content: "",
        file: "",
      },
      isRemoved: false,
      selectedFile: null,
      previewSrc: "",
      isBackgroundRemoved: false,
      backgroundFile: null,
      backgroundPreviewSrc: "",
      status: "",
      activeField: "",
    };
  },
  computed: {
    ...mapGetters("AdminServicesSingle", [
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
    ...mapActions("AdminServicesSingle", ["updateData", "fetchEditData"]),
    ...mapActions("loadingModule", ["setLoading"]),
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.previewSrc = URL.createObjectURL(event.target.files[0]);
      this.isRemoved = false;
    },
    removeFile() {
      this.selectedFile = null;
      this.isRemoved = true;
    },
    onBackgroundImageSelected(event) {
      this.backgroundFile = event.target.files[0];
      this.backgroundPreviewSrc = URL.createObjectURL(event.target.files[0]);
      this.isBackgroundRemoved = false;
    },
    removeBackground() {
      this.backgroundFile = null;
      this.isBackgroundRemoved = true;
    },
    async updateService() {
      await this.setLoading(true);
      const formData = new FormData();
      formData.append("title", this.entry.title);
      formData.append("subtitle", this.entry.subtitle);
      formData.append("description", this.entry.description);
      formData.append("content", this.entry.content.replace(/<\/?p>/g, ""));
      if (this.selectedFile) {
        formData.append("file", this.selectedFile);
      }
      if (this.backgroundFile) {
        formData.append("bg_file", this.backgroundFile);
      }

      try {
        await axios.put(`/service/${this.entry.id}`, formData);
        await this.$router.push("/admin/services");
      } catch (error) {
        console.error("Error updating service:", error);
      }
      await this.setLoading(false);
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
