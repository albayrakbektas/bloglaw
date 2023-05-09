<template>
  <div class="container py-5">
    <div class="sec-title text-center pb-1 mb-3 mt-5">
      <h2 class="title">Mersin Hukuk</h2>
      <h4 class="sub-title top-line primary">Is Alanlarimiz</h4>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div
        v-for="service in blogData"
        :key="service.id"
        class="col col-md-4 mb-3"
      >
        <EmploymentCard :data="service" :card="service" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import EmploymentCard from "@/views/user/pages/Employments/components/EmploymentCard.vue";
export default {
  name: "EmploymentView",
  components: { EmploymentCard },
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
      axios
        .get(`/employments`)
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
