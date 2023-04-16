<template>
  <div v-if="!isMobile && !isAdmin" class="container-fluid w-100 bg-dark">
    <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
    >
      <ul
          class="nav w-100 col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"
      >
        <li class="beko btn">
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" class="nav-link text-white">
            <i class="bi bi-geo-alt text-white"></i>
            Mersin adliye binasi no:123/5
          </a>
        </li>
        <li class="beko btn">
          <a href="tel:+905050070844" class="nav-link text-white">
            <i class="bi bi-telephone text-white"></i>
            05050050505
          </a>
        </li>
        <li class="beko btn">
          <a href="mailto:albayrakbektas@gmail.com" class="nav-link text-white">
            <i class="bi bi-envelope text-white"></i>
            albayrakbektas@gmail.com
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderShortcuts",
  computed: {
    ...mapGetters(["isMobile"]),
    isAdmin() {
      return this.$route.path && this.$route.path.includes("admin");
    },
  },
};
</script>

<style scoped></style>
