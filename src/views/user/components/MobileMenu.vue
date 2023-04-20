<template>
  <nav class="navbar navbar-expand-md navbar-dark">
    <button class="navbar-toggler" type="button" style="outline: none; border: none" @click="isOpen = !isOpen">
      <i class="bi bi-list text-white h1"></i>
    </button>

    <div class="navbar-collapse bg-dark" :class="{ show: isOpen }">
      <button
        v-if="isOpen"
        type="button"
        class="close text-white"
        aria-label="Close"
        @click="isOpen = false"
      >
        <i class="bi bi-x-lg"></i>
      </button>
      <ul
        class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 d-block"
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
      <!-- image here -->
      <img class="img-fluid mt-5" src="https://picsum.photos/100"  alt=""/>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    $route() {
      this.isOpen = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.closeMenuOnClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeMenuOnClickOutside);
  },
  methods: {
    closeMenuOnClickOutside(event) {
      if (!this.$el.contains(event.target) && this.isOpen) {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style scoped>
@media (max-width: 767px) {
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0,.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }

  .navbar-collapse {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1030;
    display: flex;
    flex-direction: column;
    padding: 5rem 2rem 0;
    /* justify-content: center; */
    width: fit-content;
    max-width: 300px;
    background-color: #fff;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .navbar-collapse.show {
    transform: translateX(0%);
  }

  .navbar-nav {
    text-align: center;
    margin: 0 auto;
  }

  .nav-link {
    display: block;
    padding: 1rem;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding: 1rem;
    background: transparent;
    border: none;
    outline: none;
  }
}
li {
  width: 100%;
  text-align: start;
}
span {
  border-bottom: 1px solid #fff;

}
a {
  width: 100%;
  padding-bottom: 0 !important;
}
</style>
