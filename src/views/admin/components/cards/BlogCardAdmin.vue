<template>
  <div class="card">
    <img :src="imageUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-subtitle">{{ data.subtitle }}</p>
      <div v-html="data.content" class="card-text">{{ data.content }}</div>
      <div class="d-flex justify-content-end align-items-center">
        <EditButton
          :xprops="xprops"
          v-if="hasShow"
          :data="data"
          crud-type="show"
        />
        <EditButton
          :xprops="xprops"
          v-if="hasEdit"
          :data="data"
          crud-type="edit"
        />
        <button
          v-if="hasDelete"
          type="button"
          class="btn btn-danger"
          data-bs-toggle="modal"
          :data-bs-target="`#${modalId}`"
        >
          <i class="bi bi-trash"></i>
        </button>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        :id="modalId"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Uyari</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Blog yazisi kalici olarak silinecektir. Devam etmek istiyor musun?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Vazgec
              </button>
              <button
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="$emit('delete-handler')"
                type="button"
                class="btn btn-primary"
              >
                Sil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditButton from "@/views/admin/components/buttons/EditButton.vue";
// import { removeBlogData } from "@/services/blog";

export default {
  name: "BlogCardAdmin",
  components: { EditButton },
  props: {
    blogId: {
      type: String,
    },
    data: {
      type: Object,
      required: true,
    },
    xprops: {
      type: Object,
      required: true,
    },
    hasShow: {
      type: Boolean,
      default: true,
    },
    hasEdit: {
      type: Boolean,
      default: true,
    },
    hasDelete: {
      type: Boolean,
      default: true,
    },
    file: {
      type: Object,
    },
  },
  // computed: {
  //   modalId() {
  //     return `blogDelete-${this.data.id}`;
  //   },
  //   imageUrl() {
  //     if (!this.file || !this.file.mimetype) {
  //       return "";
  //     }
  //     let binary = "";
  //     const bytes = new Uint8Array(this.file.buffer.data);
  //     for (let i = 0; i < bytes.byteLength; i++) {
  //       binary += String.fromCharCode(bytes[i]);
  //     }
  //     const base64 = btoa(binary);
  //     return `data:${this.file.mimetype};base64,${base64}`;
  //   },
  // },
  computed: {
    modalId() {
      return `blogDelete-${this.data.id}`;
    },
    imageUrl() {
      if (!this.data.file) {
        return "";
      }
      // Check if data.file is a URL (string) or a buffer object
      if (typeof this.data.file === "string") {
        return this.data.file;
      } else {
        let binary = "";
        const bytes = new Uint8Array(this.data.file.buffer.data);
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        const base64 = btoa(binary);
        return `data:${this.data.file.mimetype};base64,${base64}`;
      }
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.card-title,
.card-subtitle {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
}

.card-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  line-clamp: 4;
}
img {
  max-height: 30vh;
  object-fit: contain;
}
</style>
