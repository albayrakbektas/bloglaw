<template>
  <div class="container py-5">
    <div class="sec-title text-center pb-1 mb-3 mt-5">
      <h2 class="title">Mersin Hukuk</h2>
      <h4 class="sub-title top-line primary">Is Alanimiz</h4>
    </div>
    <div class="row py-3 px-md-5 py-md-5">
      <div class="col-12 col-md-4">
        <img :src="imageUrl" class="img-fluid w-100 h-100" alt="..." />
      </div>
      <div class="col-12 col-md-8 pt-5 pt-md-0 pe-md-5">
        <h5 class="h1 text-center text-md-start">{{ card.title }}</h5>
        <p class="h4 text-center text-md-start">{{ card.subtitle }}</p>
        <p class="pe-md-5" style="font-size: 1.1rem; line-height: 2rem">
          {{ card.content.replace(/<\/?p>/g, "") }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "EmploymentDetail",
  data() {
    return {
      card: {},
    };
  },
  created() {
    this.fetchBlogData();
  },
  computed: {
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
  methods: {
    fetchBlogData() {
      const id = this.$route.params.id;
      axios
        .get(`/employments/${id}`)
        .then((response) => {
          this.card = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style scoped>
img {
  height: 15rem;
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
</style>
