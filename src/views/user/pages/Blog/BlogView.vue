<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <img :src="blogData.file" class="img-fluid w-100 mb-5" alt="..." />
        <h5 class="h1">{{ blogData.title }}</h5>
        <p class="h4">{{ blogData.subtitle }}</p>
        <p class="pe-md-5" style="font-size: 1.1rem;line-height: 2rem">{{ blogData.content.replace(/<\/?p>/g, "") }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "BlogView",
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
      // Assuming you have a method to fetch blog data from a database or API based on the `id` parameter
      const id = this.$route.params.id;
      // Example code:
      axios
        .get(`/blog/${id}`)
        .then((response) => {
          this.blogData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
      // Replace this with your actual code to fetch the blog data
      this.blogData = {
        id: id,
        title: "Example Blog Title",
        subtitle: "Example Blog Subtitle",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        file: "https://via.placeholder.com/800x400",
      };
    },
  },
};
</script>
<style scoped>
img {
  height: 15rem;
}
</style>
