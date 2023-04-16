<template>
  <div class="card">
    <div
      class="card-header card-header-primary d-flex justify-content-between align-items-center px-3"
    >
      <HeaderIndex title="Hakkimizda" :xprops="xprops" :is-crud="isNew" />
    </div>
    <div v-if="!isNew" class="card-body">
      <div class="row">
        <div
          class="col-12 mb-3"
        >
          <div class="card-wrapper">
            <BlogCardAdmin :data="data" :has-show="false" :has-delete="false" :xprops="xprops" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HeaderIndex from "@/views/admin/components/header/HeaderIndex.vue";
import BlogCardAdmin from "@/views/admin/components/cards/BlogCardAdmin.vue";

export default {
  components: { BlogCardAdmin, HeaderIndex },
  data() {
    return {
      columns: [],
      blogs: null,
      query: { sort: "id", order: "desc", limit: 25, s: "" },
      xprops: {
        module: "AdminAboutIndex",
        route: "about",
        permission_prefix: "about_",
      },
    };
  },
  computed: {
    ...mapGetters("AdminAboutIndex", ["data", "loading"]),
    isNew() {
      return this.data && this.data.length < 1
    },
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
    ...mapActions("AdminAboutIndex", ["fetchIndexData"]),
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
