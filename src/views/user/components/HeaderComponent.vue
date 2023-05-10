<template>
  <div
    v-if="!isAdmin && !isLogin"
    class="container-fluid position-fixed start-50 translate-middle-x w-75 bg-dark"
    style="
      height: 70px;
      top: 1rem;
      z-index: 9999;
      border-radius: 5rem !important;
    "
    :class="{
      'scroll-down': isScrollDown,
    }"
  >
    <header
      class="d-flex flex-wrap align-items-center justify-content-between rounded-5"
      style="height: 100%"
    >
      <div
        class="divider position-absolute bottom-0 start-0 end-0"
        style="border-bottom: 1px solid #b1976b; margin: 0 35px"
      ></div>
      <router-link
        to="/"
        class="d-flex align-items-center col-md-3 mb-md-0 text-white text-decoration-none"
      >
        <img
          style="height: 70px"
          :src="office.file"
          class="rounded-5 position-absolute start-0 top-0 bottom-0"
          alt="brand-logo"
        />
      </router-link>
      <div v-if="isMobile" class="d-flex align-items-center">
        <a href="mailto:albayrakbektas@gmail.com" class="text-primary me-4">
          <i class="bi bi-envelope text-white" style="font-weight: bolder"></i>
        </a>
        <a href="tel:+905050070844" class="text-primary me-2">
          <i class="bi bi-telephone text-white" style="font-weight: bolder"></i>
        </a>
        <MobileMenu />
      </div>
      <ul
        v-else
        class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 me-3"
      >
        <li class="beko btn">
          <router-link to="/" class="nav-link px-2 text-white">
            <span>Anasayfa</span>
          </router-link>
        </li>
        <li class="beko btn">
          <router-link to="/hizmetlerimiz" class="nav-link px-2 text-white">
            <span>Hizmetlerimiz</span>
          </router-link>
        </li>
        <li class="beko btn">
          <router-link to="/hakkimizda" class="nav-link px-2 text-white">
            <span>Hakkimizda</span>
          </router-link>
        </li>
        <li class="beko btn">
          <router-link to="/hukuki-makaleler" class="nav-link px-2 text-white">
            <span>Hukuki makaleler</span>
          </router-link>
        </li>
        <li class="beko btn">
          <router-link to="/iletisim" class="nav-link px-2 text-white">
            <span>Iletisim</span>
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
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isMobile", "isScroll", "isScrollDown"]),
    ...mapGetters("office", ["office"]),
    isAdmin() {
      return this.$route.path && this.$route.path.includes("admin");
    },
    isLogin() {
      return this.$route.path.includes("login");
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
ul {
  margin-left: 70px !important;
  padding-left: 70px !important;
}
.container-fluid.position-fixed {
  transition: all 0.2s ease-in-out;
  background-color: rgba(0, 0, 0, 0.3);
}
@media (max-width: 575px) {
  .container-fluid.position-fixed {
    width: 90% !important;
  }
}
// alternative for header animation. start-0 and top-0 for origin
//.scroll-down {
//  height: 0 !important;
//  overflow: hidden;
//  left: 15% !important;
//  border: 0 !important;
//  border-radius: 5px !important;
//  background-color: rgba(0, 0, 0, 0.6) !important;
//  a {
//    height: 100%;
//  }
//}
.scroll-down {
  height: 0 !important;
  overflow: hidden;
  border: none !important;
}
.rounded-5 {
  border-radius: 5px !important;
}
</style>
