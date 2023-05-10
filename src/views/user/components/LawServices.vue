<template>
  <router-link
    :to="'/hizmetlerimiz/' + card.id"
    class="text-decoration-none col-md-3 mb-3"
  >
    <div class="card bg-transparent">
      <div class="card-body p-0 custom-router rounded-2">
        <div
          class="h-100 py-4 pe-4 ps-3 text-white bg-dark rounded-3 position-relative has-bg"
        >
          <img
            class="position-absolute img-fluid h-100 w-100 start-0 top-0"
            style="opacity: 0.2; z-index: 99; object-fit: cover"
            :src="bgImgUrl"
            alt="asd"
          />
          <div
            class="position-relative mb-3"
            style="
              height: calc(1.375rem + 1.5vw);
              width: calc(1.375rem + 1.5vw);
            "
          >
            <img
              class="position-absolute start-0 top-0"
              style="
                opacity: 1;
                height: calc(1.375rem + 1.5vw);
                width: calc(1.375rem + 1.5vw);
              "
              :src="imageUrl"
              alt="asd"
            />
          </div>
          <h2>{{ card.title }}</h2>
          <div class="card-content" v-html="card.content">
            {{ card.content }}
          </div>
        </div>
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
    },
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
    bgImgUrl() {
      if (!this.card.bg_file) {
        return "";
      }
      // Check if card.file is a URL (string) or a buffer object
      if (typeof this.card.bg_file === "string") {
        return this.card.bg_file;
      } else {
        let binary = "";
        const bytes = new Uint8Array(this.card.bg_file.buffer.data);
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        const base64 = btoa(binary);
        return `data:${this.card.bg_file.mimetype};base64,${base64}`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card-content {
  overflow: hidden !important;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  pre {
    overflow: auto !important;
  }
}
.has-bg {
  background-size: 5rem;
  background-repeat: no-repeat;
  background-position: center;
}
.custom-router {
  transition: 0.2s ease-in-out;
  border: 1px solid rgba(177, 151, 107, 0.6);
  &:hover {
    border: 1px solid rgba(177, 151, 107, 1);
  }
}
pre {
  overflow: hidden !important;
}
</style>
