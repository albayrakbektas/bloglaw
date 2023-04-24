<template>
  <div
    v-if="!isMobile && !isAdmin && !isLogin"
    class="container-fluid w-100 bg-dark"
  >
    <div
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
    >
      <ul
        class="nav w-100 col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"
      >
        <li class="beko btn">
          <a
            :href="
              'https://www.google.com/maps/search/?api=1&query=' +
              encodeURIComponent(channels.address)
            "
            target="_blank"
            rel="noopener noreferrer"
            class="nav-link text-white"
            style="text-transform: lowercase"
          >
            <i class="bi bi-geo-alt text-danger"></i>
            {{ channels.address }}
          </a>
        </li>
        <li class="beko btn">
          <a :href="'tel:' + channels.phone" class="nav-link text-white">
            <i class="bi bi-telephone text-primary"></i>
            {{ channels.phone }}
          </a>
        </li>
        <li class="beko btn">
          <a
            :href="'https://wa.me/' + channels.phone"
            class="nav-link text-white"
          >
            <i class="bi bi-whatsapp text-success"></i>
            {{ channels.phone }}
          </a>
        </li>
        <li class="beko btn">
          <a :href="'mailto:' + channels.email" class="nav-link text-white">
            <i class="bi bi-envelope text-primary"></i>
            {{ channels.email }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "HeaderShortcuts",
  data() {
    return {
      channels: {},
    };
  },
  computed: {
    ...mapGetters(["isMobile"]),
    isAdmin() {
      return this.$route.path && this.$route.path.includes("admin");
    },
    isLogin() {
      return this.$route.path.includes("login");
    },
  },
  created() {
    this.fetchChannelsData();
  },
  methods: {
    fetchChannelsData() {
      axios
        .get(`/channels`)
        .then((response) => {
          this.channels = response.data[0];
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
}
</style>
