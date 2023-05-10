<template>
  <router-link
    :to="'/is-alanlarimiz/' + card.id"
    class="text-decoration-none col-md-4 mb-3 mb-md-0 mb-lg-0 p-0 hover-enlarge"
    style="
      z-index: 4;
      border-bottom: none;
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    "
  >
    <div class="h-100">
      <div
        class="row h-100 py-4 pe-4 ps-3 text-white bg-dark position-relative hover-in has-bg"
      >
        <img
          :src="imageUrl"
          class="img-fluid col-3"
          style="height: 5rem"
          alt="asd"
        />
        <div class="col-9" style="padding: 0 1.5rem 0 1rem">
          <h2 style="z-index: 5">{{ formattedTitle }}</h2>
          <p v-html="card.content" style="z-index: 5">
            {{ card.content }}
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EmploymentCard",
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
  },
};
</script>

<style lang="scss" scoped>
p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.hover-enlarge {
  border: none;
  .hover-in {
    background-color: black;
  }
  &:hover {
    .hover-in {
      background-color: #b1976b !important;
      transition: all 0.3s ease-in-out;
    }
  }
}
.has-bg {
  background-size: 5rem;
  background-repeat: no-repeat;
  background-position: center;
}
h2 {
  white-space: pre-line;
}
</style>
