<!--<template>-->
<!--  <div-->
<!--    class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"-->
<!--    style="width: 280px; min-height: 100vh"-->
<!--    v-if="!isMobile"-->
<!--  >-->
<!--    <a-->
<!--      href="#"-->
<!--      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"-->
<!--    >-->
<!--      <svg class="bi pe-none me-2" width="40" height="32">-->
<!--        <use xlink:href="#bootstrap"></use>-->
<!--      </svg>-->
<!--      <span class="fs-4">Sidebar</span>-->
<!--    </a>-->
<!--    <hr />-->
<!--    <ul class="nav nav-pills flex-column mb-auto">-->
<!--      <li class="nav-item">-->
<!--        <a-->
<!--          href="/admin"-->
<!--          class="nav-link text-white"-->
<!--          aria-current="page"-->
<!--          :class="{ active: $route.path === '/admin' }"-->
<!--        >-->
<!--          <svg class="bi pe-none me-2" width="16" height="16">-->
<!--            <use xlink:href="/admin"></use>-->
<!--          </svg>-->
<!--          Anasayfa-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a-->
<!--          href="/admin/blogs"-->
<!--          class="nav-link text-white"-->
<!--          :class="{ active: $route.name && $route.name.includes('blog') }"-->
<!--        >-->
<!--          <svg class="bi pe-none me-2" width="16" height="16">-->
<!--            <use xlink:href="#speedometer2"></use>-->
<!--          </svg>-->
<!--          Bloglar-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a-->
<!--          href="/admin/about"-->
<!--          class="nav-link text-white"-->
<!--          :class="{ active: $route.path.includes('/admin/about') }"-->
<!--        >-->
<!--          <svg class="bi pe-none me-2" width="16" height="16">-->
<!--            <use xlink:href="#table"></use>-->
<!--          </svg>-->
<!--          Hakkimizda-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a href="/admin/services" class="nav-link text-white">-->
<!--          <svg class="bi pe-none me-2" width="16" height="16">-->
<!--            <use xlink:href="#people-circle"></use>-->
<!--          </svg>-->
<!--          Servisler-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a href="/admin/employments" class="nav-link text-white">-->
<!--          <svg class="bi pe-none me-2" width="16" height="16">-->
<!--            <use xlink:href="#people-circle"></use>-->
<!--          </svg>-->
<!--          Is alanlari-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a href="/admin/channels" class="nav-link text-white">-->
<!--          <svg class="bi pe-none me-2" width="16" height="16">-->
<!--            <use xlink:href="#people-circle"></use>-->
<!--          </svg>-->
<!--          Iletisim-->
<!--        </a>-->
<!--      </li>-->
<!--    </ul>-->
<!--    <hr />-->
<!--    <div class="dropdown">-->
<!--      <a-->
<!--        href="#"-->
<!--        class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"-->
<!--        data-bs-toggle="dropdown"-->
<!--        aria-expanded="false"-->
<!--      >-->
<!--        <img-->
<!--          src="https://github.com/mdo.png"-->
<!--          alt=""-->
<!--          width="32"-->
<!--          height="32"-->
<!--          class="rounded-circle me-2"-->
<!--        />-->
<!--        <strong>mdo</strong>-->
<!--      </a>-->
<!--      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">-->
<!--        <li><a class="dropdown-item" href="#">New project...</a></li>-->
<!--        <li><a class="dropdown-item" href="#">Settings</a></li>-->
<!--        <li><a class="dropdown-item" href="#">Profile</a></li>-->
<!--        <li><hr class="dropdown-divider" /></li>-->
<!--        <li @click.stop="logout">-->
<!--          <a class="dropdown-item" href="#">Sign out</a>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { mapActions, mapGetters } from "vuex";-->

<!--export default {-->
<!--  name: "SidebarAdmin",-->
<!--  methods: { ...mapActions("Auth", ["logout"]) },-->
<!--  computed: {-->
<!--    ...mapGetters(["isMobile"]),-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--li {-->
<!--  border: 1px solid #fff;-->
<!--  margin-bottom: 1.25rem;-->
<!--  border-radius: 5px;-->
<!--  &:hover {-->
<!--    background: rgba(177, 187, 201, 0.2);-->
<!--  }-->
<!--}-->
<!--</style>-->
<template>
  <div
      class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style="width: 280px; min-height: 100vh"
      v-if="!isMobile"
  >
    <router-link
        to="#"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <svg class="bi pe-none me-2" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-4">Sidebar</span>
    </router-link>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link
            to="/admin"
            class="nav-link text-white"
            aria-current="page"
            active-class="active"
            exact
        >
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="/admin"></use>
          </svg>
          Anasayfa
        </router-link>
      </li>
      <li>
        <router-link
            to="/admin/blogs"
            class="nav-link text-white"
            active-class="active"
            exact
        >
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#speedometer2"></use>
          </svg>
          Bloglar
        </router-link>
      </li>
      <li>
        <router-link
            to="/admin/about"
            class="nav-link text-white"
            active-class="active"
            exact
        >
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#table"></use>
          </svg>
          Hakkimizda
        </router-link>
      </li>
      <li>
        <router-link
            to="/admin/services"
            class="nav-link text-white"
            active-class="active"
            exact
        >
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#people-circle"></use>
          </svg>
          Servisler
        </router-link>
      </li>
      <li>
        <router-link
            to="/admin/employments"
            class="nav-link text-white"
            active-class="active"
            exact
        >
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#people-circle"></use>
          </svg>
          Is alanlari
        </router-link>
      </li>
      <li>
        <router-link
            to="/admin/channels"
            class="nav-link text-white"
            active-class="active"
            exact
        >
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#people-circle"></use>
          </svg>
          Iletisim
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
        <strong>mdo</strong>
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
  methods: { ...mapActions("Auth", ["logout"]) },
  computed: {
    ...mapGetters(["isMobile"]),
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
</style>

