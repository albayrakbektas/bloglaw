<template>
  <div class="card">
    staff
<!--    <div class="card-header card-header-primary d-flex justify-content-between align-items-center px-3">-->
<!--      <HeaderIndex title="Bloglar" :xprops="xprops" :is-crud="true" />-->
<!--    </div>-->
<!--    <div class="card-body">-->
<!--      <div class="row">-->
<!--        <div class="col-12 col-md-3 col-lg-4 mb-3" v-for="(item, index) of data" :key="item.id + index">-->
<!--          <div class="card-wrapper">-->
<!--            <BlogCardAdmin :data="item" :xprops="xprops" />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import HeaderIndex from "@/views/admin/components/header/HeaderIndex.vue";
// import BlogCardAdmin from "@/views/admin/components/cards/BlogCardAdmin.vue";

export default {
  // components: { BlogCardAdmin, HeaderIndex },
  data() {
    return {
      columns: [],
      blogs: null,
      query: { sort: "id", order: "desc", limit: 25, s: "" },
      xprops: {
        module: "BlogsIndex",
        route: "blog",
        permission_prefix: "blog_",
      },
    };
  },
  computed: {
    ...mapGetters("BlogsIndex", ["data", "loading"]),
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
<style>
.table > :not(:first-child) {
  border-top: none;
  background-color: #f8fafd;
}
.table-striped > tbody > tr:nth-of-type(odd) > * {
  --bs-table-accent-bg: #fff;
  color: var(--bs-table-striped-color);
}
</style>
