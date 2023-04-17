<template>
  <div class="d-flex">
    <SidebarAdmin />
    <SidebarAdminMobile />
    <div class="container-fluid py-3" style="overflow: scroll; height: 100vh" :class="{ 'custom-margin': isMobile }">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SidebarAdmin from "@/views/admin/components/Sidebar/SidebarAdmin.vue";
import SidebarAdminMobile from "@/views/admin/components/Sidebar/SidebarAdminMobile.vue";
import { mapGetters } from "vuex";

export default {
  name: "AdminView",
  components: { SidebarAdminMobile, SidebarAdmin },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
</script>

<style scoped>
.custom-margin {
  margin-left: 4.5rem;
}
</style>
