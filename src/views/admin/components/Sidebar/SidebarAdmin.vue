<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
    :style="isMobile ? 'width: 80px;' : 'width: 280px;'"
    style="min-height: 100vh"
  >
    <router-link
      to="#"
      class="d-flex justify-content-center align-items-center mb-3 text-white text-decoration-none"
    >
      <img
        v-if="!isMobile"
        :src="office.file"
        style="height: 5rem; width: 5rem"
        alt="office logo"
      />
    </router-link>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item" v-for="(item, index) in navItems" :key="index">
        <router-link
          :to="item.link"
          class="nav-link text-white"
          aria-current="page"
          active-class="active"
          exact
        >
          <i
            :class="['bi', item.icon, 'me-2']"
            :style="
              isMobile
                ? 'width: 16px; margin-right: 0 !important;'
                : 'width: 16px;'
            "
          ></i>
          <span v-if="!isMobile">{{ item.text }}</span>
        </router-link>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <router-link
        to="#"
        class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt=""
          width="32"
          height="32"
          class="rounded-circle me-2"
        />
        <strong v-if="!isMobile">Bektas Albayrak</strong>
      </router-link>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li id="bottom-link" @click.stop="logout">
          <router-link class="dropdown-item" to="#">Sign out</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SidebarAdmin",
  data() {
    return {
      navItems: [
        { text: "Anasayfa", link: "/admin", icon: "bi-house" },
        { text: "Bloglar", link: "/admin/blogs", icon: "bi-speedometer2" },
        { text: "Hakkimizda", link: "/admin/about", icon: "bi-info-circle" },
        { text: "Servisler", link: "/admin/services", icon: "bi-wrench" },
        {
          text: "Is alanlari",
          link: "/admin/employments",
          icon: "bi-briefcase",
        },
        { text: "Iletisim", link: "/admin/channels", icon: "bi-envelope" },
        { text: "Profil", link: "/admin/profile", icon: "bi-person-circle" },
        { text: "Ofis", link: "/admin/office", icon: "bi-building" },
        { text: "Ayarlar", link: "/admin/settings", icon: "bi-gear" },
      ],
    };
  },
  methods: { ...mapActions("Auth", ["logout"]) },
  computed: {
    ...mapGetters(["isMobile"]),
    ...mapGetters("office", ["office"]),
  },
};
</script>

<style lang="scss" scoped>
li {
  border: 1px solid #fff;
  margin-bottom: 1.25rem;
  border-radius: 5px;
  &:hover {
    background: rgba(177, 187, 201, 0.2);
  }
}
.active {
  background: rgba(177, 187, 201, 0.2);
}
#bottom-link {
  border: none;
  margin-bottom: 0;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: rgba(139, 90, 43, 1) !important;
}
</style>
