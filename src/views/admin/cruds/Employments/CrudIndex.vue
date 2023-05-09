<template>
  <div class="card">
    <div
      class="card-header card-header-primary d-flex justify-content-between align-items-center px-3 sticky-top"
    >
      <HeaderIndex title="Is alanlari" :xprops="xprops" :is-crud="false" />
    </div>
    <div class="card-body">
      <div v-if="data.length" class="row">
        <div
          class="col-12 col-md-3 col-lg-4 mb-3"
          v-for="(emp, index) of data"
          :key="emp.id + index"
        >
          <div class="card-wrapper">
            <BlogCardAdmin
              :data="emp"
              :xprops="xprops"
              @delete-handler="removeEmployment(emp)"
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
import HeaderIndex from "@/views/admin/components/header/HeaderIndex.vue";
import GoToTopButton from "@/components/GoToTopButton.vue";
import BlogCardAdmin from "@/views/admin/components/cards/BlogCardAdmin.vue";

export default {
  components: { BlogCardAdmin, GoToTopButton, HeaderIndex },
  data() {
    return {
      columns: [],
      employments: null,
      query: { sort: "id", order: "desc", limit: 25, s: "" },
      xprops: {
        module: "EmploymentsIndex",
        route: "employment",
        permission_prefix: "employment_",
      },
    };
  },
  computed: {
    ...mapGetters("AdminEmploymentsIndex", ["data", "loading"]),
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
    ...mapActions("AdminEmploymentsIndex", ["fetchIndexData"]),
    removeEmployment(emp) {
      const { id } = emp;

      const onSuccess = () => {
        // No need to update the UI here, Vuex will handle it
      };

      const onFailure = (error) => {
        console.log(error);
        // Handle the error, e.g., show a notification to the user
      };

      this.$store.dispatch("AdminEmploymentsIndex/deleteData", {
        id,
        onSuccess,
        onFailure,
      });
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
