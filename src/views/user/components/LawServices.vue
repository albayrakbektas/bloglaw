<template>
    <router-link to="#" class="text-decoration-none col-md-3 mb-3">
      <div class="">
        <div
          class="h-100 pt-5 pb-4 pe-4 ps-3 text-white bg-dark rounded-3 position-relative has-bg"
          :style="{ backgroundImage: `url(${imageUrl})` }"
        >
          <img
            class="position-absolute start-0 top-0 w-100 h-100"
            style="opacity: 0.2"
            :src="imageUrl"
            alt="asd"
          />
          <i class="bi bi-globe d-flex display-6 mb-3"></i>
          <h2>{{card.title}}</h2>
          <p>
            {{card.content}}
          </p>
        </div>
      </div>
    </router-link>
</template>

<script>
export default {
  name: "LawServices",
  props: {
    card: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      isHovering: false,
    };
  },
  computed: {
    formattedTitle() {
      return this.card.title.replace(" ", "\n");
    },
    imageUrl() {
      if (!this.card.file) {
        return "";
      }
      // Check if card.file is a URL (string) or a buffer object
      if (typeof this.card.file === "string") {
        return this.card.file;
      } else {
        let binary = "";
        const bytes = new Uint8Array(this.card.file.buffer.data);
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        const base64 = btoa(binary);
        return `data:${this.card.file.mimetype};base64,${base64}`;
      }
    },
  },
};
</script>

<style scoped>
p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.has-bg {
  background-size: 5rem;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
