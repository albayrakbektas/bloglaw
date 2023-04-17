<template>
  <div class="blog-list mb-5 section">
    <div class="container">
      <div class="sec-title text-center pb-1 mb-3">
        <h4 class="sub-title top-line primary">Hukiki Makaleler</h4>
        <h2 class="title">Avukat Bektas Albayrak | Istanbul Avukat</h2>
      </div>
      <div class="row">
        <div
          v-for="(blog, index) in data"
          :key="index"
          class="col-12 col-md-4"
        >
          <BlogCard :data="blog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "@/views/user/pages/Home/components/BlogCard.vue";
import {mapActions, mapGetters} from "vuex";

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
    ...mapActions("BlogsIndex", ["fetchIndexData"])
  }
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
.sec-title .top-line:before, .sec-title .top-line:after {
  position: absolute;
  content: '';
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
