<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
    style="width: 280px; min-height: 100vh"
    v-if="!isMobile"
  >
    <a
      href="#"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <svg class="bi pe-none me-2" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a
          href="/admin"
          class="nav-link text-white"
          aria-current="page"
          :class="{ active: $route.path === '/admin' }"
        >
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="/admin"></use>
          </svg>
          Anasayfa
        </a>
      </li>
      <li>
        <a
          href="/admin/blogs"
          class="nav-link text-white"
          :class="{ active: $route.name && $route.name.includes('blog') }"
        >
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#speedometer2"></use>
          </svg>
          Bloglar
        </a>
      </li>
      <li>
        <a
          href="/admin/about"
          class="nav-link text-white"
          :class="{ active: $route.path.includes('/admin/about') }"
        >
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#table"></use>
          </svg>
          Hakkimizda
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#grid"></use>
          </svg>
          Kadromuz
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#people-circle"></use>
          </svg>
          Customers
        </a>
      </li>
      <li>
        <a href="/admin/services" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#people-circle"></use>
          </svg>
          Servisler
        </a>
      </li>
      <li>
        <a href="/admin/employments" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#people-circle"></use>
          </svg>
          Is alanlari
        </a>
      </li>
      <li>
        <a href="/admin/channels" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#people-circle"></use>
          </svg>
          Iletisim
        </a>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a
        href="#"
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
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li @click.stop="logout">
          <a class="dropdown-item" href="#">Sign out</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { logout } from "@/store/Admin/pages/login/auth";

export default {
  name: "SidebarAdmin",
  methods: { logout },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
</script>

<style scoped></style>
