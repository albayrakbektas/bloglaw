<template>
  <div class="container my-5">
    <div class="sec-title text-center pb-1 mb-3">
      <h2 class="title">Mersin Hukuk</h2>
      <h4 class="sub-title top-line primary">Uzmanlik Alanimiz</h4>
    </div>
    <div class="row py-3 px-md-5 py-md-5">
      <div class="col-12 col-md-4">
        <img :src="blogData.file" class="img-fluid w-100 h-100" alt="..." />
      </div>
      <div class="col-12 col-md-8 pt-5 pt-md-0 pe-md-5">
        <h5 class="h1 text-center text-md-start">{{ blogData.title }}</h5>
        <p class="h4 text-center text-md-start">{{ blogData.subtitle }}</p>
        <p class="pe-md-5" style="font-size: 1.1rem; line-height: 2rem">
          {{ blogData.content.replace(/<\/?p>/g, "") }}
        </p>
      </div>
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
  methods: {
    fetchBlogData() {
      const id = this.$route.params.id;
      axios
        .get(`/blog/${id}`)
        .then((response) => {
          this.blogData = response.data;
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
