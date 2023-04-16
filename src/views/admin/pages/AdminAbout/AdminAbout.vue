<template>
  <div class="card">
    <div
      class="card-header card-header-primary d-flex justify-content-between align-items-center px-3"
    >
      <h4 class="card-title m-0">Hakkimizda</h4>
      <BackButton />
    </div>
    <div class="card-body">
      <AdminAboutCreate />
      <AdminAboutEdit />
    </div>
  </div>
</template>

<script>
import AdminAboutCreate from "@/views/admin/pages/AdminAbout/components/AdminAboutCreate.vue";
import AdminAboutEdit from "@/views/admin/pages/AdminAbout/components/AdminAboutEdit.vue";
import BackButton from "@/views/admin/components/BackButton.vue";

export default {
  components: {BackButton, AdminAboutEdit, AdminAboutCreate },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped></style>
