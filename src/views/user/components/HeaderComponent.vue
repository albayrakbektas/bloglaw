<template>
  <div v-if="!isAdmin" class="container-fluid sticky-top bg-white" style="border-bottom: 1px solid #b1976b">
    <header
      class="d-flex flex-wrap align-items-center justify-content-between py-3"
    >
      <router-link
        to="/client/public"
        class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <img src="https://picsum.photos/120/40" alt="brand-logo" />
      </router-link>
      <div v-if="isMobile" class="d-flex align-items-center">
        <a href="mailto:albayrakbektas@gmail.com" class="text-primary me-4">
          <i class="bi bi-envelope text-dark" style="font-weight: bolder"></i>
        </a>
        <a href="tel:+905050070844" class="text-primary me-2">
          <i class="bi bi-telephone text-dark" style="font-weight: bolder"></i>
        </a>
        <MobileMenu />
      </div>
      <ul
        v-else
        class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"
      >
        <li class="beko btn">
          <router-link to="/" class="nav-link px-2 link-secondary">
            <span>Anasayfa</span>
          </router-link>
        </li>
        <li class="beko btn">
          <router-link to="/hizmetlerimiz" class="nav-link px-2 link-secondary">
            <span>Hizmetlerimiz</span>
          </router-link>
        </li>
        <li class="beko btn">
          <router-link to="/hakkimizda" class="nav-link px-2 link-dark">
            <span>Hakkimizda</span>
          </router-link>
        </li>
        <li class="beko btn">
          <router-link
            to="/uzmanlik-alanlarimiz"
            class="nav-link px-2 link-dark"
          >
            <span>Uzmanlik alanlarimiz</span>
          </router-link>
        </li>
        <li class="beko btn">
          <router-link to="/uzman-kadromuz" class="nav-link px-2 link-dark">
            <span>Uzman kadromuz</span>
          </router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import MobileMenu from "@/views/user/components/MobileMenu.vue";
import { mapGetters } from "vuex";

export default {
  name: "HeaderComponent",
  components: { MobileMenu },
  computed: {
    ...mapGetters(["isMobile"]),
    isAdmin() {
      return this.$route.path && this.$route.path.includes("admin");
    },
  },
};
</script>

<style lang="scss" scoped>
li {
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
  color: #b1976b;
  -webkit-box-sizing: inherit;
  border: 0;
  outline: 0;
  background: 0 0;
  margin: 0;
  padding: 0;
  border-color: #e6e6e6;
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
      color: #b1976b;
    }
  }
}
</style>
