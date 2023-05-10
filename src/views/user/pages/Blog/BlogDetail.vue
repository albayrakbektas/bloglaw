<template>
  <div class="py-5">
    <div class="sec-title text-center pb-1 mb-3 mt-5">
      <h2 class="title">Mersin Hukuk</h2>
      <h4 class="sub-title top-line primary">Uzmanlik Alanimiz</h4>
    </div>
    <div class="row py-3 px-md-5 py-md-5">
      <div class="container text-center col-12 pt-5 pt-md-0 pe-md-5">
        <h5 class="h1 text-center">{{ blogData.title }}</h5>
        <p class="h4 text-center">{{ blogData.subtitle }}</p>
        <p
          v-html="blogData.content"
          class="pe-md-5"
          style="font-size: 1.1rem; line-height: 2rem"
        >
          {{ blogData.content }}
        </p>
      </div>
      <img class="img-fluid" :src="imageUrl" alt="" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "BlogDetail",
  data() {
    return {
      blogData: {},
    };
  },
  created() {
    this.fetchBlogData();
  },
  computed: {
    imageUrl() {
      if (!this.blogData.file) {
        return "";
      }
      // Check if data.file is a URL (string) or a buffer object
      if (typeof this.blogData.file === "string") {
        return this.blogData.file;
      } else {
        let binary = "";
        const bytes = new Uint8Array(this.blogData.file.buffer.data);
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        const base64 = btoa(binary);
        return `data:${this.blogData.file.mimetype};base64,${base64}`;
      }
    },
  },
  methods: {
    fetchBlogData() {
      this.$store.dispatch("landing/setLoading", true);
      const id = this.$route.params.id;
      axios
        .get(`blog/${id}`)
        .then((response) => {
          this.blogData = response.data;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.$store.dispatch("landing/setLoading", false);
        });
    },
  },
};
</script>
<style scoped>
img {
  max-height: 25rem;
}
.sec-title .top-line {
  position: relative;
  display: inline-block;
  line-height: 18px;
}
.sec-title .sub-title.primary {
  color: #8d6e63;
}
.sec-title .top-line:before,
.sec-title .top-line:after {
  position: absolute;
  content: "";
  top: 50%;
  left: -80px;
  transform: translateY(-50%);
  width: 60px;
  height: 2px;
  background: #8d6e63;
}
.sec-title .top-line:before {
  left: auto;
  right: -80px;
}
h2,
h5,
p {
  color: #ffffff;
}
</style>
