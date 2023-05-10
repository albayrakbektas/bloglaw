<template>
  <div class="card-container">
    <router-link
      :to="'/hukuki-makaleler/' + data.id"
      class="card mb-3 mb-md-0 mb-lg-0"
    >
      <img :src="imageUrl" class="card-img-top img-fluid" alt="..." />
      <div class="card-body text-center">
        <h4 class="card-title">{{ data.title }}</h4>
        <p class="card-subtitle">{{ data.subtitle }}</p>
        <p v-html="data.content" class="card-text">{{ data.content }}</p>
        <div class="d-inline-block align-middle btn beko">
          <router-link :to="'/hukuki-makaleler/' + data.id"
            >Makale Devami</router-link
          >
          <i class="bi bi-arrow-right"></i>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  components: {},
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
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
a {
  text-decoration: none;
  color: initial;
  &:hover {
    color: initial;
  }
}
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
  height: 15rem;
}
.beko {
  --wp-admin-theme-color: #007cba;
  --wp-admin-theme-color-darker-10: #006ba1;
  --wp-admin-theme-color-darker-20: #005a87;
  word-wrap: break-word;
  word-break: break-word;
  font-family: "Poppins", sans-serif;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #b1976b;
  -webkit-box-sizing: inherit;
  border: 0;
  outline: 0;
  background: 0 0;
  margin: 0;
  padding: 0;
  opacity: 0.8;

  &.btn {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    transition: all 0.3s ease;
    text-decoration: none;
    opacity: 1;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: #b1976b;
      transition: all 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }

    a {
      text-decoration: none;
      color: #b1976b;
    }
  }
}
img {
  border-radius: 1rem 0;
  transition: 0.4s ease-in-out;
}
.card {
  border: none;
  background-color: transparent;
  color: #ffffff;
  &:hover {
    color: #ffffff;
    img {
      border-radius: 0 1rem;
    }
    .btn:after {
      width: 100%;
    }
  }
}
</style>
