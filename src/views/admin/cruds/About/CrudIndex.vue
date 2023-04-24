<template>
  <div class="card">
    <div
      class="card-header card-header-primary d-flex justify-content-between align-items-center px-3 sticky-top"
    >
      <div class="row w-100 justify-content-between align-items-center">
        <div class="col">
          <h1 class="page-header-title">Hakkimizda</h1>
        </div>
        <div class="col-auto">
          <router-link
            v-if="!data.length"
            :to="{ name: xprops.route + '.create' }"
            class="btn btn-add btn-primary btn-sm"
          >
            <span>Ekle</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div v-if="data && data.length" class="row">
        <div
          class="col-12 col-md-3 col-lg-4 mb-3"
          v-for="(item, index) of data"
          :key="item.id + index"
        >
          <div class="card-wrapper">
            <BlogCardAdmin
              @delete-handler="removeBlog(item)"
              :data="item"
              :xprops="xprops"
            />
          </div>
        </div>
      </div>
      <div v-else class="row text-center">
        <h1>no data</h1>
      </div>
    </div>
    <GoToTopButton />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BlogCardAdmin from "@/views/admin/components/cards/BlogCardAdmin.vue";
import GoToTopButton from "@/components/GoToTopButton.vue";

export default {
  components: { GoToTopButton, BlogCardAdmin },
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
    ...mapActions("loadingModule", ["setLoading"]),
    removeBlog(item) {
      this.setLoading(true);
      const { id } = item;

      const onSuccess = () => {
        // No need to update the UI here, Vuex will handle it
      };

      const onFailure = (error) => {
        console.log(error);
        // Handle the error, e.g., show a notification to the user
      };

      this.$store.dispatch("AdminAboutIndex/deleteabout", {
        id,
        onSuccess,
        onFailure,
      });
      this.setLoading(false);
    },
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
.card-header.sticky-top {
  z-index: 9;
  position: sticky;
  top: 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.175);
}
</style>
