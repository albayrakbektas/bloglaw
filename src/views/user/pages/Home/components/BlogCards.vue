<template>
  <div class="blog-list section container pt-0">
    <div class="container">
      <div class="sec-title text-center pb-1 mb-3 mt-5">
        <h4 class="sub-title top-line primary">Hukiki Makaleler</h4>
        <h2 class="title text-white">
          Avukat Bektas Albayrak | Istanbul Avukat
        </h2>
      </div>
      <div class="row">
        <div
          v-for="(blog, index) in data"
          :key="index"
          class="col-12 mb-3 col-md-4"
        >
          <BlogCard :data="blog" />
        </div>
        <div
          v-if="data && data.length >= 6"
          class="d-inline-block align-middle btn beko"
        >
          <router-link to="/hukuki-makaleler">Hepsini Gor</router-link>
          <i class="bi bi-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "@/views/user/pages/Home/components/BlogCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BlogCards",
  components: { BlogCard },
  computed: {
    ...mapGetters("BlogsIndex", ["data", "loading"]),
  },
  created() {
    // this.blogs = this.fetchIndexData()
  },
  data() {
    return {
      blogs: null,
    };
  },
  watch: {
    query: {
      handler() {
        this.fetchIndexData();
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions("BlogsIndex", ["fetchIndexData"]),
  },
};
</script>

<style scoped>
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
a {
  text-decoration: none;
  color: rgba(177, 151, 107, 0.9);
  &:hover {
    color: rgba(177, 151, 107, 1);
  }
}
.beko {
  display: flex !important;
  margin-left: auto;
  float: right;
  width: auto;
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
  color: #b1976b !important;
  -webkit-box-sizing: inherit;
  border: 0;
  outline: 0;
  background: 0 0;
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
      color: #b1976b !important;
    }
  }
}
</style>
